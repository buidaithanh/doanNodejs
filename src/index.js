const express = require("express");
const path = require("path");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/trang-chu", (req, res) => {
  res.render("trangchu");
});

app.get("/tin-tuc", (req, res) => {
  res.render("tintuc");
});

// app.get("/gio-hang", (req, res) => {
//   res.render("giohang");
// });

// app.get("/thanh-toan", (req, res) => {
//   res.render("thanhtoan");
// });
// app.get("/cua-hang", (req, res) => {
//   res.render("cuahang");
// });
// app.get("/tra-cuu-don-hang", (req, res) => {
//   res.render("tracuudonhang");
// });
// app.get("/dat-hang", (req, res) => {
//   res.render("dathang");
// });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
