import { getSession } from "next-auth/client";

async function handler(req, res) {
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
}
