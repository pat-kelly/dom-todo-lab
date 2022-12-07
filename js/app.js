//===================== CACHED ELEMENT REFERENCES =====================//
const inputEl = document.getElementById('usrIn');
const sBtn = document.getElementById('submit-button');
const ulEl = document.getElementById('todo-list');
//===================== CACHED ELEMENT REFERENCES =====================//

//reset input field on refresh
inputEl.value = "";

sBtn.addEventListener('click', evt =>{
  const li = document.createElement('li');
  li.textContent = inputEl.value;
  inputEl.value = "";
  ulEl.appendChild(li);
})