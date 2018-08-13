const Token = artifacts.require("./PeopleWaveToken.sol");
module.exports = function(deployer) {
  deployer.deploy(Token);
};
