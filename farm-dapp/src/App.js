// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import FarmDAppABI from "./contracts/FarmDApp.json";
import { useState } from "react";
import {ethers} from "ethers";

// function App() {
//   const [contract, setContract] = useState(null);
//   const [account, setAccount] = useState("");

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       // const provider = new provider(window.ethereum);
//       const signer = provider.getSigner();
//       const address = await signer.getAddress();
//       setAccount(address);

//       // Replace with YOUR contract address
//       const contractAddress = "0x123...";
//       const farmContract = new contract(
//         contractAddress,
//         FarmDAppABI.abi,
//         signer
//       );
//       setContract(farmContract);
//     }
//   };

//   const registerFarmer = async () => {
//     if (contract) {
//       try {
//         const tx = await contract.registerFarmer("Alice", "Contract Info");
//         await tx.wait(); // Wait for the transaction to finish
//         alert("Farmer registered successfully!");
//       } catch (error) {
//         alert("Error: " + error.message);
//       }
//     } else {
//       alert("Please connect your wallet first!");
//     }
//   };

//   return (
//     <div>
//       <button onClick={connectWallet}>Connect Wallet</button>
//       <button onClick={registerFarmer}>Register Farmer</button>
//     </div>
//   );
// }

export default App;