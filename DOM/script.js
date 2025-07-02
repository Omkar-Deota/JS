let flag = true
document.getElementById('fruit').innerHTML = "Hello";
document.getElementById('fruit').style.color = 'red'
document.getElementById('btn').onclick = function () {
  console.log("clicked")
  if (flag) {
    document.getElementById('fruit').style.color = 'blue'
    document.getElementById('fruit').innerHTML = "Blue";
    flag = false;
  } else {
    document.getElementById('fruit').style.color = 'red';
    document.getElementById('fruit').innerHTML = "Red";
    flag = true;
  }
}
