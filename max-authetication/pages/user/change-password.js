import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../lib/db";
import { hashPassword } from "../../lib/auth";

async function handler(req, res) {
  console.log("change-password --- handler - req --", req);
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req, res });
  if (!session) {
    //protect our API route against unauthenticated access,
    // validate whether a request is authenticated or not.
    res.status(401).json({ message: "Not Authenticated!" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();
  const userCollection = client.db().collection("users");
  const user = await userCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "User not Found!" });
    client.close();
    throw new Error("No User Found");
    return;
  }

  const passwordEqual = await verifyPassword(oldPassword, user.password);

  if (!passwordEqual) {
    res.status(422).json({ message: "Input is not correct!" });
    client.close();
    throw new Error("====Password not match!====");
  }

  const newHashedPassword = await hashPassword(newPassword);

  const result = await userCollection.updateOne(
    { email: userEmail },
    { $set: { password: newHashedPassword } }
  );

  client.close();
  res.status(200).json({ message: "====Password updated!====" });
}

export default handler;
