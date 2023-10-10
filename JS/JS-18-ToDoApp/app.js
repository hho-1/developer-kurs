//inputa kullanıcını girdiği bilgiyi localstorage kaydetmeli

// kullnıcı inputa bilgi girecek
// ben o bilgileri alacağım

//     ekrana yazdıracağım
//     local storage yazdırmalıyım

// o bilgiler ekrana açılınca gelecek

// silinince ekranda gidecek -localstoragedanda silinecek

// CRUD - Create Read Update Delete

// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Elemenleri tanımlayalım
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("todo-button");
const ulList = document.getElementById("todo-ul");

// let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
//Create
let todoList = JSON.parse(localStorage.getItem("todoList")) || []; // short circuit

/* -------------------------------------------------------------------------- */
window.addEventListener("load", () => {
  VeriyiAl();
});


// Read
const VeriyiAl = () => {
  todoList.forEach((todo) => {
    listeOlustur(todo);
  });
};
/* -------------------------------------------------------------------------- */

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  const newTodo = {
    id: new Date().getTime(), // benzersiz ve tek bir id tanımlaması yaptık
    text: todoInput.value,
    completed: false,
  };

  todoList.push(newTodo);
  console.log(todoList);
  //Update -güncelleme yaptık
  localStorage.setItem("todoList", JSON.stringify(todoList));

  listeOlustur(newTodo);
});


// ekrana UI yazdırma
const listeOlustur = (newTodo) => {
  const { id, text, completed } = newTodo;

  //dom manipulaston - element ekleme,class ekleme
  const li = document.createElement("li");
  li.setAttribute("id", id); //dinamik bir yapı- id

  completed ? li.classList.add("checked") : "";

  const tik = document.createElement("i");
  tik.setAttribute("class", "fas fa-check");
  li.append(tik);

  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  const delIcon = document.createElement("i");
  delIcon.setAttribute("class", "fas fa-trash");
  li.append(delIcon);

  console.log(li);

  ulList.append(li);
};

//capturing ve bubbling

ulList.addEventListener("click",(e)=>{
 
    const secilenId=e.target.closest("li").getAttribute("id")

    console.log(secilenId);
 if (e.target.classList.contains("fa-trash")){
    //Uiden silme
    e.target.parentElement.remove()
    todoList = todoList.filter((todo)=> todo.id !=secilenId )
 }   

 // güncelleme
 localStorage.setItem("todoList", JSON.stringify(todoList));

})
