function handler(req, res) {
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

    console.log(newMessage);

    res
      .status(201) //请求已经被成功处理，并且创建了新的资源
      .json({ message: "Successfully store message", message: newMessage });
  }
}
export default handler;
