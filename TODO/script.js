document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-btn');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text === '') {
      return;
    }
    addTodo(text);
    input.value = '';
    input.focus();
  });

  const addTodo = (text) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.textContent = text;

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      li.remove();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  }
});
