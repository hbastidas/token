let HbToken = artifacts.require("./Hbtoken.sol");

module.exports = function(deployer) {
    deployer.deploy(HbToken);
};
