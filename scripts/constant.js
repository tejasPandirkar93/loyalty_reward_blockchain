export const contractAddress = ""; // insert deployed contract address
export const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "addPartner",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
    ],
    name: "addUser",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_partnerWalletAddress",
        type: "address",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "checkBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "checkIsUserLogged",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPartners",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "partnerWalletAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "partnerId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "productId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "productName",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "productCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "token",
                type: "uint256",
              },
            ],
            internalType: "struct Loyalty.Products[]",
            name: "productList",
            type: "tuple[]",
          },
        ],
        internalType: "struct Loyalty.Partners[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllUsers",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "userWalletAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "password",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "tokenBalance",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUserLoggedIn",
            type: "bool",
          },
        ],
        internalType: "struct Loyalty.Users[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getPartnerDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "partnerWalletAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "partnerId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "productId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "productName",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "productCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "token",
                type: "uint256",
              },
            ],
            internalType: "struct Loyalty.Products[]",
            name: "productList",
            type: "tuple[]",
          },
        ],
        internalType: "struct Loyalty.Partners",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_add",
        type: "address",
      },
    ],
    name: "getTransactionForPartner",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "token",
            type: "uint256",
          },
          {
            internalType: "enum Loyalty.TransactionType",
            name: "transactionType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "memberAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "partnerAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct Loyalty.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_add",
        type: "address",
      },
    ],
    name: "getTransactionForUsers",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "token",
            type: "uint256",
          },
          {
            internalType: "enum Loyalty.TransactionType",
            name: "transactionType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "memberAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "partnerAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct Loyalty.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getUserDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "userWalletAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "password",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "tokenBalance",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUserLoggedIn",
            type: "bool",
          },
        ],
        internalType: "struct Loyalty.Users",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
    ],
    name: "login",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "logout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "partner",
    outputs: [
      {
        internalType: "address",
        name: "partnerWalletAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "partnerId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "partnerAddr",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "partnerAddressArray",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "partners",
    outputs: [
      {
        internalType: "address",
        name: "partnerWalletAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "partnerId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "product",
    outputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "productCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "productArray",
    outputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "productCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_partnerWalletAddress",
        type: "address",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactionsInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
      {
        internalType: "enum Loyalty.TransactionType",
        name: "transactionType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "memberAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "partnerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionsInfoLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "user",
    outputs: [
      {
        internalType: "address",
        name: "userWalletAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "tokenBalance",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isUserLoggedIn",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userAddr",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userAddressArray",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "address",
        name: "userWalletAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "tokenBalance",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isUserLoggedIn",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
