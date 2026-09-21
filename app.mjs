import express from "express";

const app = express();

const TODOS = [
  { id: "1", title: "ทำการบ้าน", done: true, priority: "high" },
  { id: "2", title: "อ่านหนังสือ", done: true, priority: "high" },
  { id: "3", title: "ทำโปรเจกต์", done: false, priority: "normal" },
  { id: "4", title: "ส่งงานอาจารย์", done: false, priority: "low" },
];

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/todos", (req, res) => {
  res.json(TODOS.map((t) => ({ ...t })));
});

app.get("/todos/:id", (req, res) => {
  const todo = TODOS.find((t) => t.id === req.params.id);

  if (!todo) {
    return res.status(404).json({
      error: `ไม่พบรายการ ${req.params.id}`
    });
  }

  return res.json({ ...todo });
});

app.listen(3000, () => {
  console.log("เซิร์ฟเวอร์ทำงานที่ http://localhost:3000");
});
