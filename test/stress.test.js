const Contract = artifacts.require("EthereumClaimsRegistry");
const web3 = require("web3");

contract("Contract", (accounts) => {
  const OWNER = accounts[0];
  const SUBJECT = accounts[1];

  beforeEach(async () => {
    this.contract = await Contract.new({ from: OWNER });
  });

  //Good tool https://blockchangers.github.io/solidity-converter-online/
  describe("Stress tests", async () => {
    it("should add 1,000 claims", async () => {
      for (i = 0; i < 1000; i++) {
        
        const key = web3.utils.randomHex(32);
        const value = web3.utils.randomHex(32);

        await this.token.setClaim(SUBJECT, key, value);
      }
    });
  });
});
