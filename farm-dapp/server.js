const express = require ('express');
const Web3 = require('Web3');
const bodyParser =require ('body-parser');
const mysql = require ('mysql12');
const app = express();
const port = 3000;

app.use(bodyParser.json());

//connect to local database
const db = mysql.createConnection({
    host:'localhost',
    user:'postgres',
    password:'root',
    database: 'Farmdapp'
});
db.connect();

//Connect to the Ethereum Network
const Web3 = new Web3 ('https://localhost:8545');//connecting to eth node
const contractABI = [];
const contractAddress ='contractaddress'
const contract = new Web3.eth.Contract(contractABI,contractAddress);

//API endpoint to interact with contract and local database
app.post('/addProduce',async (req, res)=>{
    const { details } = req.body;
    const accounts = await Web3.eth.getAccounts();
    const results =await contract.methods.addProduce (details).send({from: accounts[0] });
    res.json(result);
});

app.post('/updateJobStatus', async (req, res)=>{
    const {jobId, status } =req.body;
    const accounts = await Web3.eth.getAccount();
    const result = await contract.methods. updateJobStatus( jobId, status ).send({ from:accounts[0] });
    res.json (result);
});

app.post ('/earnPoints', async (req, res)=>{
    const { produceId } = req.body;
    const accounts = await Web3.eth.getAccounts();
    const result = await contract.methods.earnPoints(produceId).send({ from: accounts[0] });
    res.json(result);

});

app.get ('/getproduce/:id', async(req,res)=>{
    const {id} = req.params;
    const result = await contract.methods.getProduce(id).call();
    res.json(result);
});

app.get ('/getJob/:id', async (req, res)=>{
    const{id} =req.params;
    const result = await contract.methods.getJob(id).call();
    res.json(result);
});

app.get ('/getPoints/:id', async (req, res)=>{
    const{id} =req.params;
    const result = await contract.methods.getPoints(id).call();
    res.json(result);
});

app.listen(port, ()=> {
    console.log('Server running at https://localhost:${port}');
});