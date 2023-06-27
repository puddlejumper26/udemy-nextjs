import { MongoClient } from "mongodb";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

// when press Create Account button
async function handler(req, res) {
  console.log("signup --- handler -- req--", req.body.password);
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim() === "" ||
      password.length < 7
    ) {
      //服务器理解请求实体的内容类型，并且请求实体的语法是正确的，但是服务器无法处理所包含的指令
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const hashedPassword = await hashPassword(password);
    // store in the database
    const newMessage = {
      email,
      password: hashedPassword,
    };
    // console.log("newMessage", newMessage);

    const client = await connectToDatabase();
    const db = client.db();

    const existedUser = await db.collection("users").findOne({ email: email });
    if (existedUser) {
      res.status(422).json({ message: "User already existed" });
      client.close();
      return;
    }

    // console.log("db -", db);
    try {
      console.log("db connect");
      const result = await db.collection("users").insertOne(newMessage);
      // console.log("result:", result);
    } catch (error) {
      console.log("collection error");
      res.status(500).json({ error: error });
      return;
    }
    // console.log("db connect");

    res
      .status(201) //请求已经被成功处理，并且创建了新的资源
      .json({ message: "Successfully store message", message: newMessage });
  }
}
export default handler;
