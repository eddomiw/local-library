const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://eddomiw:Lobrow19@cluster0.cnlbxhn.mongodb.net/?retryWrites=true&w=majority"
);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
