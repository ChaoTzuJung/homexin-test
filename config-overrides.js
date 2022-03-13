const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@/": "src",
    "@components": "src/components",
    "@contexts": "src/contexts",
    "@utils": "src/utils",
    "@hooks": "src/hooks",
  })(config);

  return config;
};
