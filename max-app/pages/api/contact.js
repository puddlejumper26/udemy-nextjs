import { MongoClient, ServerApiVersion } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      //服务器理解请求实体的内容类型，并且请求实体的语法是正确的，但是服务器无法处理所包含的指令
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // store in the database
    const newMessage = {
      email,
      name,
      message,
    };

    console.log("newMessage", newMessage);

    // let client;

    // try {
    //   client = await MongoClient.connect(
    //     "mongodb+srv://test:test@cluster0.wiqhu.mongodb.net/?retryWrites=true&w=majority"
    //   );
    // } catch (error) {
    //   res.status(500).json({ error: error });
    //   console.log("connecting error");
    //   return;
    // }

    const uri =
      "mongodb+srv://admin:ZqJ02cA3qXnd0qlK@maxapp.18jge43.mongodb.net/Messages?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    // console.log("client -", client);
    const db = client.db();
    try {
      console.log("db connect");
      // const result = await db.collection("messages").find({}).toArray();

      const result = await db.collection("messages").insertOne(newMessage);
      // console.log("result:", result);
      newMessage.id = result.insertedId;
    } catch (error) {
      console.log("collection error");
      res.status(500).json({ error: error });
      return;
    }

    res
      .status(201) //请求已经被成功处理，并且创建了新的资源
      .json({ message: "Successfully store message", message: newMessage });
  }
}
export default handler;
