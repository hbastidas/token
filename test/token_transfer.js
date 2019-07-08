const HbToken = artifacts.require('./HbToken.sol');
const Token = artifacts.require('./Token.sol');


const BigNumber = web3.BigNumber;

const should = require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

let sender, token;

contract('token_management', async (accounts) => {

    let accountA, accountB, accountC, accountD;

    [accountA, accountB, accountC, accountD ] = accounts;

    beforeEach(async () => {
        sender = await HbToken.new();
        token = await Token.new();

        await sender.addNewToken('OPKW', token.address);
    });

    it("should be able to transfer sender token to another wallet", async() => {
        let amount = new BigNumber(500000e5);

        await token.approve(sender.address, amount,{from: accountA});

        await sender.transferTokens('OPKW',accountB, amount,{from: accountA});

        let balance = ((await  token.balanceOf(accountB)).toString());

        balance.should.equal(amount.toString())
    });

});
