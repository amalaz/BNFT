const BNFT = artifacts.require("BNFT");

module.exports = async function (deployer) {
  let accounts = await web3.eth.getAccounts() // This will use for admin account 

  const baseURI = "abcd" // IPFS base URI
  const name = "BinanceNFT" // Token name
  const symbol = "BNFT" // Token symbol
  
  await deployer.deploy(BNFT, accounts[0], baseURI, name, symbol);
};
