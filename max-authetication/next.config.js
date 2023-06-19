const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// 不同的 env 环境下，可以使用不同的 database，这样方便在 Acce 和 Prod 之间进行转换
module.exports = (phase) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {
  //     env: {
  //       mongodb_username: "admin",
  //       mongodb_password: "ZqJ02cA3qXnd0qlK",
  //       mongodb_cluster: "maxapp",
  //       mongodb_database: "Messages-dev",
  //     },
  //   };
  // }
  return {
    env: {
      mongodb_username: "admin",
      mongodb_password: "ZqJ02cA3qXnd0qlK",
      mongodb_cluster: "maxapp",
      mongodb_database: "Messages",
    },
  };
};
