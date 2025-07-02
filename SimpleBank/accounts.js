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

let index;

const checkBalance = (userName) => {
  const userDetails = ACCOUNTS.filter(account => account.name === userName)
  return userDetails[0].name;
}

const addBalance = (userName) => {
  const userDetails = ACCOUNTS.filter(account => account.name === userName)
  const deposit = Number(prompt("Enter the amount to be deposited"));
  userDetails[0].balance = userDetails[0].balance + deposit;
}

const withdrawBalance = (userName) => {
  const userDetails = ACCOUNTS.filter(account => account.name === userName)
  const amountToBeWithdrawn = Number(prompt("Enter the amount to be withdrawn"));

  if (userDetails[0].balance < amountToBeWithdrawn) {
    console.log("Insufficient balance");
    return;
  }
  userDetails[0].balance = userDetails[0].balance - amountToBeWithdrawn;
}

const operations = () => {
  console.log("Press 1 to check balance");
  console.log("Press 2 to add balance");
  console.log("Press 3 to withdraw balance");

  const option = Number(prompt("Enter your option"));

  //0,1,2--0-john, 1-may, 2-marry ,,
  //  {
  // name: "John",
  // balance: 20000
  // }
  const userName = ACCOUNTS[index];

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
    default:
      errorHandlerFunction(userName);
  }
}

const main = () => {
  console.log("Welcome User to NO-BANK please enter your name");

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
  operations();
}

main();
// TODO : 1
//Dynamic - user centric
// do you want to perform any more operation press 4 -- loop re run
//if you want to exit the application press 0; -- application close

// TODO : 2
// Remove the use of index to track user , track it directly by its name

