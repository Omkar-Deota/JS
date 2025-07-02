const ACCOUNTS = [{
  name: "John",
  balance: 20000
},
{
  name: "May",
  balance: 50000
},
{
  name: 'Marry',
  balance: 40000
}]

const checkBalance = (userName) => {
  const user = ACCOUNTS.filter(user => user.name === userName);
  return user[0].balance
}

const addBalance = (userName) => {
  const user = ACCOUNTS.find(user => user.name === userName);
  const amount = Number(prompt("Enter the amount to be deposited"));
  user.balance = user.balance + amount;
}

const withdrawBalance = (userName) => {
  const user = ACCOUNTS.find(user => user.name === userName);
  const amount = Number(prompt("Enter the amount to be withdrawn"));

  if (amount > user.balance) {
    console.log("Insufficient balance to withdraw");
    return;
  }

  user.balance = user.balance - amount;
}

const closeAccount = (userName) => {
  const arr2 = ACCOUNTS.filter(user => user.name != userName)
  return arr2;
}

const errorHandlerFunction = (userName) => {
  console.log(`Dear user ${userName} you have entered wrong option please give any option from the list`)
}

const operations = (index) => {
  console.log("Press 1 to check balance");
  console.log("Press 2 to add balance");
  console.log("Press 3 to withdraw balance");
  console.log("Press 4 to close my bank account")

  const option = Number(prompt("Enter your option"));

  const userName = ACCOUNTS[index].name;

  switch (option) {
    case 1:
      console.log(checkBalance(userName));
      break;
    case 2:
      addBalance(userName);
      console.log(checkBalance(userName));
      break;
    case 3:
      withdrawBalance(userName);
      console.log(checkBalance(userName));
      break;
    case 4:
      console.log(closeAccount(userName));
      break;
    default:
      errorHandlerFunction(userName);
  }
}

const main = () => {
  console.log("Welcome User to NO-BANK please enter your name");

  let index;

  const name = prompt("Enter your name");

  switch (name) {
    case 'John':
      index = 0;
      break;
    case 'May':
      index = 1;
      break;
    default:
      index = 2;
  }

  operations(index);
  console.log(ACCOUNTS)
}
main();