require("@nomiclabs/hardhat-ganache")
require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        ganache: {
            url: RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 1337,
        },
        localhost: {
            url: RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 31337,
        },
    },
}
