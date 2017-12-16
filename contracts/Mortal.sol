pragma solidity ^0.4.2;
contract Mortal {
  address owner;

  function Mortal(){
    owner = msg.sender;

  }
  function Kill(){
    if(msg.sender == owner){
      suicide(owner);
    }
  }
}
