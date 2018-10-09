var auction = artifacts.require("./open_auction.sol");

	module.exports = function(deployer) {
		deployer.deploy(auction, 123456, web3.eth.accounts[0]);
	};