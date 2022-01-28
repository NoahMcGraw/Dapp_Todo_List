const TodoList = artifacts.require("./TodoList.sol");
const Account = artifacts.require("./Account.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
  deployer.deploy(Account);
};
