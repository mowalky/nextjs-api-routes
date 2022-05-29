import fs from "fs";
import path from "path";

function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

export default function handler(req, res) {
  const feedbackId = req.query.feedbackid;
  console.log(feedbackId);
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  const feedback = data.find((f) => f.id === feedbackId);
  res.status(200).json(feedback);
}
