const fs = require("fs");
const files = fs.readdirSync("../../src/lang").filter(x => x.includes("json"));
const ex = "{\n" +
files.map(x => `"${x.split(".json")[0]}": require("../lang/${x}"),`).join("\n") + "}";
const res = "export default " + ex;
fs.writeFileSync("../../src/lang/index.js", res);