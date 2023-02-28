module.exports = function (api: any) {
  api.cache(true);
  return {
    plugins: ["macros"],
  };
};

export {};
