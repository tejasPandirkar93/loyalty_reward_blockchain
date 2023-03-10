//imports
const { ethers } = require("hardhat")

// async main
async function main() {
    const LoyaltyFactory = await ethers.getContractFactory("Loyalty")
    console.log("Deploying contract...")
    const loyalty = await LoyaltyFactory.deploy()
    await loyalty.deployed()
    console.log(`Deployed to : ${loyalty.address}`)
}

// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
