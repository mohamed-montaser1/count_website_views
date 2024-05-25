const app = require("express")();
const db = require("mongoose");
const Count = require("./models/count");
const port = 3001;

app.get("/count", async function (req, res) {
  const doc = await Count.findOne({ id: "1" });
  if (!doc) {
    await Count.create({ id: "1", count: 0 }).then(() =>
      res.json({ count: 0 })
    );
  }
  return res.json({ count: doc.count });
});

app.post("/count", async function (req, res) {
  await Count.findOneAndUpdate({ id: "1" }, { $inc: { count: 1 } }).then((_) =>
    res.json({ success: true })
  );
});

db.connect(process.env.DB_URL, { dbName: "count_views" }).then(() =>
  console.log("Database Connected")
);

app.listen(port, () => console.log(`Server Is Listening on Port: ${port}`));
