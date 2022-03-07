const BNFT = artifacts.require("BNFT");

module.exports = async function (deployer) {
  let accounts = await web3.eth.getAccounts()

  const baseURI = "abcd"
  const name = "BinanceNFT"
  const symbol = "BNFT"
  
  await deployer.deploy(BNFT, accounts[0], baseURI, name, symbol);
};
