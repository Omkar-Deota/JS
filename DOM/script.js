// let flag = true
// const target = document.getElementById('ip');

// document.getElementById('fruit').innerHTML = "Hii";

// document.getElementById('btn').onclick = function () {
//   if (flag) {
//     console.log(target.value)
//     document.getElementById('fruit').style.color = 'blue'
//     document.body.style.backgroundColor = "red";
//     const div = document.createElement('div');
//     div.id = 'parent';
//     const photo = document.createElement('img');
//     photo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25aLANiRpbhGG56OGl6CZFESR5ZFGPjEJWpQCncjfmoR3-vpKJLHep-rHnS94LR_muHk&usqp=CAU"
//     document.body.appendChild(div);
//     document.getElementById('parent').appendChild(photo);

//     // document.container.style.backgroundColor = 'blue'
//     // container.appendChild(photo);
//     flag = false;
//   } else {
//     document.getElementById('fruit').style.color = 'red';
//     document.body.style.backgroundColor = "blue";
//     flag = true;
//     const div = document.getElementById('parent')
//     document.body.removeChild(div);
//   }
// }

let index = 0;
const btn = document.getElementById('btn');
const container = document.getElementById('list-items');

document.getElementById('btn').addEventListener('click', () => {
  const input = document.getElementById('ip')
  if (input.value === '') {
    alert("please enter something and submit");
  }
  const li = document.createElement('li');
  li.innerHTML = input.value;
  const newbtn = document.createElement('button')
  newbtn.innerHTML = li;
  newbtn.id = index;
  document.getElementById('list-items').appendChild(newbtn);
  index++;
})

document.getElementByTag('button').addEventListener('click', () => {
  const elementId = button.id;
  const target = document.getElementById(elementId);
  target.style.color = 'red';
})