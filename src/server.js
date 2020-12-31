const app = require("./app");

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Express running at http://${HOST}:${PORT}`);
});
