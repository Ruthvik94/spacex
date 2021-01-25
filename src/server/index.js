const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(process.cwd(), "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "build", "index.html"));
});

debugger;
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server running on ${port}`));
