const fs = require("fs");
const path = require("path");
const transpiler = require("./transpiler");

const start = () => {
  const program = fs.readFileSync(path.resolve(__dirname, "./code.js"), {
    encoding: "utf-8",
  });

  const output = transpiler("javascript", "java", program);

  console.clear();
  console.log(output);
};

start();
