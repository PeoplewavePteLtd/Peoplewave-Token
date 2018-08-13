require('dotenv').config()

const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  process.env.MNENOMIC,
  "https://ropsten.infura.io/" + process.env.INFURA_API_KEY
);

const web3 = new Web3(provider);

// This function is used to deploy contract
const deploy = async () => {
  // Get list of accounts
  const accounts = await web3.eth.getAccounts();

  // Assign exhibition interface
  const ABI = interface;

  // Create a contract with the ABI, then deply with bytecode
  // and then finally send a transaction to rinkeby network with gas
  // and which account its deploy from
  const result = await new web3.eth.Contract(JSON.parse(ABI))
    .deploy({
      data: '0x' + bytecode
    })
    .send({ from: accounts[0], gas: "1000000" });
  // Note this address. It will be used to create contract instance from the web application.
  console.log("contract deployed to", result.options.address);
};

deploy();
