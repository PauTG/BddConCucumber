module.exports = {
  default: {
    require: ["cucumber/step-definitions/**/*.ts"],
    requireModule: ["ts-node/register"],
    paths: ["cucumber/features/**/*.feature"],
    format: ["progress"]
  }
};