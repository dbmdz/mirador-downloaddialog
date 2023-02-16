module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "MiradorDownloadDialog",
      externals: {
        react: "React",
      },
    },
  },
};
