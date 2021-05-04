const donationT= artifacts.require("donationT");
const ERC20= artifacts.require("ERC20");

module.exports = function (deployer) {

  deployer.deploy(ERC20);
  deployer.link(ERC20, donationT);
  deployer.deploy(donationT);
};