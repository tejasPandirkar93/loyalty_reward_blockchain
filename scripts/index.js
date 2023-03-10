import { ethers } from "../scripts/ethers.js"
import { abi, contractAddress } from "../scripts/constant.js"
window.onload = function () {
    console.log("Testing onLoad")
}

window.connect = async function () {
    console.log("Inside connect")
    if (typeof window.ethereum !== "undefined") {
        try {
            const metaMaskAddress = await ethereum.request({
                method: "eth_requestAccounts",
            })
            console.log("My metamask address: ", metaMaskAddress[0])
        } catch (error) {
            console.log(error)
        }
    } else {
        //connectButton.innerHTML = "Please install MetaMask"
    }
}

window.addUser = async function (name, password) {
    console.log("Adding User: ", name, " and password: ", password)

    if (typeof window.ethereum !== "undefined") {
        const metaMaskAddress = await ethereum.request({
            method: "eth_requestAccounts",
        })
        console.log("My metamask address: ", metaMaskAddress[0])
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.addUser(name, password)
            await listenForTransactionMine(transactionResponse, provider)
            // await transactionResponse.wait(1)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("User not added")
    }
}

window.addPartner = async function (name) {
    console.log("Adding Partner: ", name)

    if (typeof window.ethereum !== "undefined") {
        const metaMaskAddress = await ethereum.request({
            method: "eth_requestAccounts",
        })
        console.log("My metamask address: ", metaMaskAddress[0])
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.addPartner(name)
            await listenForTransactionMine(transactionResponse, provider)
            // await transactionResponse.wait(1)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Partner not added")
    }
}

window.retrieveAllUsers = async function () {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const users = await contract.getAllUsers()

            console.log("users: ", users)
            // await transactionResponse.wait(1)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Error")
    }
}

window.getUserDetails = async function (address) {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const user = await contract.getUserDetails(address)

            console.log("users: ", user)
            // await transactionResponse.wait(1)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Error")
    }
}

window.retrieveAllPartners = async function () {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const partners = await contract.getAllPartners()

            console.log("Partners: ", partners)
            // await transactionResponse.wait(1)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Error")
    }
}

window.getPartnerDetails = async function (address) {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const partners = await contract.getPartnerDetails(address)

            console.log("Partners: ", partners)
            // await transactionResponse.wait(1)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Error")
    }
}

window.login = async function (password) {
    if (typeof window.ethereum !== "undefined") {
        const metaMaskAddress = await ethereum.request({
            method: "eth_requestAccounts",
        })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const status = await contract.login(metaMaskAddress[0], password)

            console.log("Partners: ", partners)
            // await transactionResponse.wait(1)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Error")
    }
}

window.addProduct = async function (name, cost, token) {
    console.log("Adding Product: ", name)

    if (typeof window.ethereum !== "undefined") {
        const metaMaskAddress = await ethereum.request({
            method: "eth_requestAccounts",
        })
        console.log("My metamask address: ", metaMaskAddress[0])
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.addProduct(
                name,
                cost,
                token
            )
            await listenForTransactionMine(transactionResponse, provider)
            // await transactionResponse.wait(1)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Product not added")
    }
}

function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`)
    return new Promise((resolve, reject) => {
        try {
            provider.once(transactionResponse.hash, (transactionReceipt) => {
                console.log(
                    `Completed with ${transactionReceipt.confirmations} confirmations. `
                )
                resolve()
            })
        } catch (error) {
            reject(error)
        }
    })
}
