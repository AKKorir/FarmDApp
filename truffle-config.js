module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default for Ganache)
      port: 7545,            // Default Ganache port
      network_id: "*",       // Match any network ID
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",      // Match your Solidity version
    },
  },
};