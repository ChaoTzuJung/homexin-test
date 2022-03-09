const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@/": "src",
    "@components": "src/components",
    "@contexts": "src/contexts",
  })(config);

  return config;
};
