// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error InsufficientBalance(string msg);

contract Loyalty {
    uint product_id_count;
    uint partner_id_count;
    uint user_id_count;
    uint tId_count;

    struct Partners {
        address partnerWalletAddress;
        uint partnerId;
        string name;
        Products[] productList;
    }

    struct Users {
        address userWalletAddress;
        uint userId;
        string name;
        string password;
        uint tokenBalance;
        bool isUserLoggedIn;
    }

    struct Products {
        uint productId;
        string productName;
        uint productCost;
        uint token;
    }

    // model points transaction
    enum TransactionType {
        Earned,
        Redeemed
    }
    struct Transaction {
        uint token;
        TransactionType transactionType;
        address memberAddress;
        address partnerAddress;
        uint amount;
    }

    Partners[] public partners;
    Users[] public users;

    address[] public userAddressArray;
    address[] public partnerAddressArray;
    Products[] public productArray;

    Transaction[] public transactionsInfo;

    //users and partners on the network mapped with their address
    mapping(address => Users) public user;
    mapping(address => Partners) public partner;
    mapping(uint => Products) public product;

    mapping(address => bool) public userAddr;
    mapping(address => bool) public partnerAddr;

    function addPartner(string memory _name) public returns (string memory) {
        require(
            partnerAddr[msg.sender] == false,
            "Partner Address already exists. Partner not added."
        );

        partnerAddr[msg.sender] = true;
        partner_id_count++;
        uint _pid = partner_id_count;

        // add a default blank product while adding new partner
        Products memory _productList;
        Partners storage _partner = partner[msg.sender];
        _partner.partnerWalletAddress = msg.sender;
        _partner.partnerId = _pid;
        _partner.name = _name;
        _partner.productList.push(_productList);

        partnerAddressArray.push(msg.sender);
        return "Partner added";
    }

    function addUser(
        string memory _name,
        string memory _password
    ) public returns (string memory) {
        // check if address doesn't exist and then add user
        require(
            userAddr[msg.sender] == false,
            "User Address already exists. User not added."
        );
        userAddr[msg.sender] = true;
        user_id_count++;
        uint256 _balance = 100;
        uint _userId = user_id_count;
        user[msg.sender] = Users(
            msg.sender,
            _userId,
            _name,
            _password,
            _balance,
            false
        );
        userAddressArray.push(msg.sender);
        return "User added";
    }

    // user login function
    function login(
        address _address,
        string memory _password
    ) public returns (bool) {
        if (
            keccak256(abi.encodePacked(user[_address].password)) ==
            keccak256(abi.encodePacked(_password))
        ) {
            user[_address].isUserLoggedIn = true;
            return user[_address].isUserLoggedIn;
        } else {
            return false;
        }
    }

    // check the user logged In or not
    function checkIsUserLogged(address _address) public view returns (bool) {
        return (user[_address].isUserLoggedIn);
    }

    // logout the user
    function logout(address _address) public {
        user[_address].isUserLoggedIn = false;
    }

    function addProduct(string memory _name, uint _cost, uint _token) public {
        product_id_count++;
        uint _productId = product_id_count;
        Products memory new_product = Products(
            _productId,
            _name,
            _cost,
            _token
        );
        productArray.push(new_product);
        partner[msg.sender].productList.push(new_product); // link product to partner
    }

    function getAllUsers() public view returns (Users[] memory) {
        Users[] memory u = new Users[](userAddressArray.length);
        for (uint256 i = 0; i < userAddressArray.length; i++) {
            u[i] = user[userAddressArray[i]];
        }
        return u;
    }

    function getAllPartners() public view returns (Partners[] memory) {
        Partners[] memory p = new Partners[](partnerAddressArray.length);
        for (uint256 i = 0; i < partnerAddressArray.length; i++) {
            p[i] = partner[partnerAddressArray[i]];
        }
        return p;
    }

    function getPartnerDetails(
        address _address
    ) public view returns (Partners memory) {
        return partner[_address];
    }

    function getUserDetails(
        address _address
    ) public view returns (Users memory) {
        return user[_address];
    }

    function buy(
        uint _token,
        address payable _partnerWalletAddress
    ) public payable {
        if (msg.value > address(msg.sender).balance) {
            //revert InsufficientBalance({msg: "Insufficient wallet balance"});
        } else {
            user[msg.sender].tokenBalance =
                user[msg.sender].tokenBalance +
                _token;
            // add transction
            _partnerWalletAddress.transfer(msg.value);
            transactionsInfo.push(
                Transaction({
                    token: _token,
                    transactionType: TransactionType.Earned,
                    memberAddress: user[msg.sender].userWalletAddress,
                    partnerAddress: _partnerWalletAddress,
                    amount: msg.value
                })
            );
        }
    }

    function checkBalance(address _address) public view returns (uint256) {
        return address(_address).balance;
    }

    function redeem(uint256 _token, address _partnerWalletAddress) public {
        require(user[msg.sender].tokenBalance >= _token, "Insufficient points");

        user[msg.sender].tokenBalance = user[msg.sender].tokenBalance - _token;
        // add transction
        transactionsInfo.push(
            Transaction({
                token: _token,
                transactionType: TransactionType.Redeemed,
                memberAddress: user[msg.sender].userWalletAddress,
                partnerAddress: _partnerWalletAddress,
                amount: 0
            })
        );
    }

    //get length of transactionsInfo array
    function transactionsInfoLength() public view returns (uint256) {
        return transactionsInfo.length;
    }

    function getTransactionForUsers(
        address _add
    ) public view returns (Transaction[] memory) {
        uint length = transactionsInfo.length;
        Transaction[] memory tran = new Transaction[](length);
        for (uint i = 0; i < length; i++) {
            if (transactionsInfo[i].memberAddress == _add) {
                tran[i] = transactionsInfo[i];
            }
        }
        return tran;
    }

    function getTransactionForPartner(
        address _add
    ) public view returns (Transaction[] memory) {
        uint length = transactionsInfo.length;
        // to be explored for dynamic arrays
        Transaction[] memory tran = new Transaction[](length);
        for (uint i = 0; i < length; i++) {
            if (transactionsInfo[i].partnerAddress == _add) {
                tran[i] = transactionsInfo[i];
            }
        }
        return tran;
    }
}
