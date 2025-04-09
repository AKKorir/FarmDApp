// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FarmDApp {
    struct Farmer {
        uint256 farmerID;
        string name;
        string contractInfo;
        address walletAddress;
    }

    struct Produce {
        uint256 produceID;
        uint256 farmerID;
        string produceType;
        uint256 quantity;
        string qualityGrade;
        bool isApproved; // whwere the produce approved by the SACCO manager
    }
    struct Transaction {
        uint256 transactionID;
        uint256 produceID;
        uint256 farmerID;
        uint256 timestamp;
        string status; // "pending" & "Completed"

    }
    struct TransportAgent {
        uint256 agentID;
        string name;
        string contactInfo;
        string vehicleDetails;
    }
    struct SmartContract {
        uint256 contractID;
        uint256 transactionID;
        uint256 agentID;
        string terms;
        string status; // "Active" , " Completed"
    }
    struct Payment {
        uint256 paymentID;
        uint256 transactionID;
        uint256 farmerID;
        uint256 amount;
        uint256 timestamp;
    }
    struct SACCOPoints {
        uint256 pointsID;
        uint256 farmerID;
        uint256 pointsEarned;
        uint256 timestamp;

    }

    // Mapping to store data
    mapping (uint256 => Farmer) public farmers;
    mapping (uint256 => Produce) public produces;
    mapping (uint256 => Transaction) public transaction;
    mapping (uint256 => TransportAgent) public transportAgents;
    mapping (uint256 => SmartContract) public smartContract;
    mapping (uint256 => Payment) public payment;
    mapping (uint256 => SACCOPoints) public saccoPoints;
    
    //Counter for IDS
    uint256 public farmerCount=0;
    uint256 public produceCount=0;
    uint256 public transactionCount=0;
    uint256 public agentCount=0;
    uint256 public contractCount=0;
    uint256 public paymentCount=0;
    uint256 public pointsCount=0;


    //Events to log actions
    event FarmerRegistered (uint256 farmerID, string name);
    event ProduceSubmitted (uint256 produceID, uint256 farmerID);
    event TransactionCreated (uint256 transactionID, uint256 produceID);
    event SmartContractInitiated (uint256 contractID, uint256 transactionID);
    event PaymentReleased (uint256 paymentID, uint256 farmerID, uint256 amount);
    event PointsEarned (uint256 pointsID, uint256 farmerID, uint256 points);
    
    //function to register Farmer
    function registerFarmer (string memory _name, string memory _contractInfo) public {
        farmerCount++;
        farmers[farmerCount] = Farmer({
            farmerID: farmerCount,
            name: _name,
            contractInfo: _contractInfo,
            walletAddress: msg.sender

        });
        emit FarmerRegistered (farmerCount, _name);

    }
    // function to submit Produce
    function submitProduce (uint256 _farmerID, string memory _produceType, uint256 _quantity, string memory _qualityGrade) public{
        produceCount++;
        produces[produceCount] = Produce({
            produceID: produceCount,
            farmerID: _farmerID,
            produceType: _produceType,
            quantity: _quantity,
            qualityGrade: _qualityGrade,
            isApproved: false

        });
        emit ProduceSubmitted(produceCount, _farmerID);
    }

    //function to create a transaction
    function createTransaction (uint256 _produceID, uint256 _farmerID) public {
        transactionCount++;
        transaction[transactionCount] = Transaction ({
            transactionID: transactionCount,
            produceID: _produceID,
            farmerID: _farmerID,
            timestamp: block.timestamp,
            status: "Pending"
        });
        emit TransactionCreated(transactionCount, _produceID);
    }
    //function to initiate smart contract
    function initiateSmartContract(uint256 _transactionID, uint256 _agentID, string memory _terms) public {
        contractCount++;
        smartContract[contractCount] = SmartContract({
            contractID: contractCount,
            transactionID: _transactionID,
            agentID: _agentID,
            terms: _terms,
            status: "Active"

        });
        emit SmartContractInitiated(contractCount, _transactionID);
    }
    //Function to release Payment
    function relesePayment (uint256 _transactionID, uint256 _farmerID, uint256 _amount)public {
        paymentCount++;
        payment [paymentCount] = Payment({
            paymentID: paymentCount,
            transactionID: _transactionID,
            farmerID: _farmerID,
            amount: _amount,
            timestamp: block.timestamp
            
            });
            emit PaymentReleased(paymentCount, _farmerID, _amount);
    }
    // Function to earn SACCO points
    function earnPoints(uint256 _farmerID, uint256 _points) public {
        pointsCount++;
        saccoPoints[pointsCount] = SACCOPoints({
            pointsID: pointsCount,
            farmerID: _farmerID,
            pointsEarned: _points,
            timestamp: block.timestamp
        });
        emit PointsEarned(pointsCount, _farmerID, _points);
    }
        




}
