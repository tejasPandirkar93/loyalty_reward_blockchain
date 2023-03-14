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

window.addPartner = async function (name, password) {
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
            const transactionResponse = await contract.addPartner(
                name,
                password
            )
            await listenForTransactionMine(transactionResponse, provider)
            // await transactionResponse.wait(1)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Partner not added")
    }
}

window.getAllUsers = async function () {
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

            return user
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Error")
    }
}

window.getAllPartners = async function () {
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

window.loginUser = async function (password) {
    if (typeof window.ethereum !== "undefined") {
        const metaMaskAddress = await ethereum.request({
            method: "eth_requestAccounts",
        })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const userResponse = await contract.userLogin(
                metaMaskAddress[0],
                password
            )
            await listenForTransactionMine(userResponse, provider)
            const status = await contract.checkIsUserLogged(metaMaskAddress[0])
            console.log("User login Status: ", status)

            //if (status.toString().localeCompare("true")) {
            const userDetails = await contract.getUserDetails(
                metaMaskAddress[0]
            )

            console.log("Index Page User Details: ", userDetails)
            localStorage.setItem("userDetails", userDetails)
            window.location.href = "/pages/userHome.html"
            //}
            //const userDetails = getUserDetails(metaMaskAddress[0])
            //console.log("User Details: ", userDetails)
            //localStorage.setItem("userDetails", userDetails)
            //window.location.href = "/pages/userHome.html"
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Error")
    }
}

window.userLogout = async function (password) {
    if (typeof window.ethereum !== "undefined") {
        const metaMaskAddress = await ethereum.request({
            method: "eth_requestAccounts",
        })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const status = await contract.logout(metaMaskAddress[0])
            await listenForTransactionMine(status, provider)
            console.log("User login Status: ", status)
            localStorage.removeItem("userDetails")
            window.location.reload()
            window.location.href = "/pages/index.html"
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Error")
    }
}

window.loginPartner = async function (password) {
    if (typeof window.ethereum !== "undefined") {
        const metaMaskAddress = await ethereum.request({
            method: "eth_requestAccounts",
        })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            await contract.partnerLogin(metaMaskAddress[0], password)
            const status = await contract.checkIsPartnerLogged(
                metaMaskAddress[0]
            )
            console.log("Partner Login Status: ", status)

            //const userDetails = getUserDetails(metaMaskAddress[0])
            //await userDetails.wait(1)
            //console.log("User Details: ", userDetails)
            //localStorage.setItem("userDetails", userDetails)
            //window.location.href = "/pages/userHome.html"
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Error")
    }
}

window.checkLoginStatus = async function (address) {
    if (typeof window.ethereum !== "undefined") {
        const metaMaskAddress = await ethereum.request({
            method: "eth_requestAccounts",
        })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const status = await contract.checkIsUserLogged(address)

            console.log("Login Status: ", status)

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
