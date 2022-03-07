const OperatorDoubleSig = artifacts.require("OperatorDoubleSig");

module.exports = async function (deployer) {
	let accounts = await web3.eth.getAccounts()

	const allowedSigners = [
		accounts[0],
		accounts[1],
		accounts[2]
	]
	const txDailyLimit = 10

	await deployer.deploy(OperatorDoubleSig, allowedSigners, txDailyLimit);
};
