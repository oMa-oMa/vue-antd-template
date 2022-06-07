const Mock = require("mockjs");
const user = require("./user");

Mock.setup({
  timeout: "200-600",
});

const mockData = [...user];

mockData.forEach((item) => {
  Mock.mock(
    new RegExp(process.env.VUE_APP_BASE_API + item.url),
    item.type,
    item.response
  );
});
