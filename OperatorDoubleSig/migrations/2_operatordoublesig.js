const OperatorDoubleSig = artifacts.require("OperatorDoubleSig");

module.exports = async function (deployer) {
	let accounts = await web3.eth.getAccounts()

	const allowedSigners = [ // 3 signers
		accounts[0],
		accounts[1],
		accounts[2]
	]
	const txDailyLimit = 10 // Limit for validaion of transaction

	await deployer.deploy(OperatorDoubleSig, allowedSigners, txDailyLimit);
};
