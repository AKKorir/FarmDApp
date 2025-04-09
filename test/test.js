const FarmDApp = artifacts.require("FarmDApp");
contract("FarmDApp", (accounts) => {
  it("should register a farmer", async () => {
    const instance = await FarmDApp.deployed();
    await instance.registerFarmer("Alice","Contract Info");
    const farmer = await instance.farmers(1);
    assert.equal(farmer.name, "Alice");
  });
});