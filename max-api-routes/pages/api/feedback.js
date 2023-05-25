import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  console.log("fileData is -", fileData);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store that in a database or in a file
    // 记住，要在 feedback.json 的文件中初始设置 [] 不然会报错
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "success", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    // 如果直接网页里 打 localhost:3000/api/feedback 就会得到下面的
    // 因为是 一个 GET
    // 上面的是一个 POST
    res.status(200).json({ feedback: data });
  }
}

export default handler;
