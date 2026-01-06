// const express = require("express");
// const router = require("./routes/productRoutes");
// const cors = require("cors");
// const db = require("./config/db");
// const app = express();
// app.use(express.json());

// app.use(cors());

// app.use("/", router);

// app.listen(7060, () => {
//   console.log("Server Start Successfully 7060!!");
//   db();
// });


const express = require("express");
const router = require("./routes/productRoutes");
const db = require("./config/db");
const app = express()
app.use(express.json())

const cors = require("cors");
app.use(cors())

app.use('/',router)

app.listen(7060, async()=>{
  await db();
  console.log('Server Start Successfully ');
})