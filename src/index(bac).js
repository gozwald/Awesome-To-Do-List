
const inputEdit = document.getElementsByClassName("todoEditText");
const input = document.getElementById("todoTextInput");
const arr = [];
const d1 = document.getElementById("#todos");

const deleteTodo = e => {
  e.currentTarget.parentElement.remove();
};

const editToTodo = e => {
  // e.currentTarget.parentElement.textContent =
  e.currentTarget.parentElement.firstElementChild.innerHTML = `<input class="todoEditText" placeholder=${
    e.currentTarget.parentElement.firstElementChild.textContent
  } />`;
  let tempo = inputEdit[0];
  tempo.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      tempo.replaceWith(tempo.value);
    }
  });
};

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    // console.log("KEYUP E-Listener -> Text entered -> " + input.value);
    arr.push(input.value);
    // console.log(arr + "-> pushed to arr[]");

    d1.insertAdjacentHTML(
      "beforeend",
      `<p class="entries" id="${arr.length - 1}">
      <span class="input">${input.value}</span>  
      <span class="delTodo">[delete]</span>
      <span class="edit">[edit]</span></p>`
    );

    const selectDeleteElements = document.getElementsByClassName("delTodo");
    const selectEditedElements = document.getElementsByClassName("edit");

    // console.log(selectDeleteElement);
    for (let element of selectDeleteElements) {
      element.addEventListener("click", deleteTodo);
    }

    for (let element of selectEditedElements) {
      element.addEventListener("click", editToTodo);
    }

    input.value = "";
  }
});
