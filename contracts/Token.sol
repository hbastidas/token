pragma solidity ^0.4.19;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/**
* @title Token is a basic ERC20 Token
*/
contract Token is StandardToken, Ownable{

    uint256 public totalSupply;
    string public name;
    string public symbol;
    uint32 public decimals;

    /**
    * @dev assign totalSupply to account creating this contract
    */
    constructor() public {
        symbol = "tkn";
        name = "Token";
        decimals = 8;
        totalSupply = 1000000000;

        owner = msg.sender;
        balances[msg.sender] = totalSupply;

        emit Transfer(0x0, msg.sender, totalSupply);
    }
}
