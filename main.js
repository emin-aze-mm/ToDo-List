let deleteText = document.querySelector(".second")
let input =document.querySelector("input")
let btn = document.querySelector("button")
const container = document.querySelector(".todo-container")
const todoList = document.querySelector(".todo-list")
const inputdiv = document.querySelector(".input")
deleteText.addEventListener("click",()=>{
  input.value=""
})
deleteText.addEventListener("mouseover",(event)=>{
  event.target.src = "photo/fullcancel.svg"
})
deleteText.addEventListener("mouseout",(event)=>{
  event.target.src = "photo/emptycancel.svg"
})

inputdiv.style.display="block"
document.addEventListener("keyup",addtodo);

//Function addtodo
function addtodo(event){
  if(input.value.length!=0){
  if(event.keyCode==13){
  //Todo Div
  const todoDiv= document.createElement("div")
  todoDiv.classList.add("todo");
  todoDiv.classList.add("item");
  //Create li
  const newTodo =document.createElement("li")
  newTodo.innerText = input.value
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Delete Button
  const deletebtn=document.createElement("button") 
  deletebtn.innerHTML= '<img  src="photo/emptycancel.svg" alt="">';
  deletebtn.classList.add("deleted-button")
  todoDiv.appendChild(deletebtn)
  //Append To List
  todoList.appendChild(todoDiv);
  input.value=""
  inputdiv.style.display="none"
  container.style.display="block"
  deletebtn.addEventListener("mouseover",(event)=>{
    event.target.src = "photo/fullcancel.svg"
  })
  deletebtn.addEventListener("mouseout",(event)=>{
    event.target.src = "photo/emptycancel.svg"
  })
  const close = document.getElementsByClassName("deleted-button");
  for (let i = 0; i<close.length; i++) {
    close[i].onclick=function(){
    this.parentNode.remove()
     if(todoList.childElementCount == 0){
       
       inputdiv.style.display="block"
         }
       }
     }
    }
    document.getElementById('scroll').scrollTop =  document.getElementById('scroll').scrollHeight
  }
}
btn.addEventListener("click",()=>{
  inputdiv.style.display="block"
  input.focus()
})
let filterbtn = document.querySelector(".changed")
filterbtn.addEventListener("mouseover",(event)=>{
  event.target.src = "photo/darksortdown.svg"
  event.target.style.cursor = "pointer"
})
filterbtn.addEventListener("mouseout",(event)=>{
  event.target.src = "photo/sortdown.svg"
})

const dragarea = document.querySelector(".wrapper")
new Sortable(dragarea,{
  animation:250
});

let reversebtn = document.querySelector(".change")

reversebtn.addEventListener("mouseover",(event)=>{
  event.target.src = "photo/darksortup.svg"
  event.target.style.cursor = "pointer"
})
reversebtn.addEventListener("mouseout",(event)=>{
  event.target.src = "photo/sortup.svg"
})

//Filter

  filterbtn.addEventListener("click",sortlist);
  function sortlist(){
  arrSort=[]
  list=document.querySelectorAll(".todo li")
  list.forEach(element => {
    arrSort.push(element.innerHTML)
  });
  arrSort.sort()
  for(i=0;i<list.length;i++){
    list[i].innerHTML=arrSort[i]
  }
  filterbtn.style.display="none"
  reversebtn.style.display="block"
  reversebtn.addEventListener("mouseover",(event)=>{
    event.target.src = "photo/darksortup.svg"
  })
  reversebtn.addEventListener("mouseout",(event)=>{
    event.target.src = "photo/sortup.svg"
  })
  reversebtn.addEventListener("click",reverselist);
}
function reverselist(){
  arrSort=[]
  list=document.querySelectorAll(".todo li")
  list.forEach(element=>{
    arrSort.push(element.innerHTML)
  });
  arrSort.sort().reverse()
  for(i=0;i<list.length;i++){
    list[i].innerHTML=arrSort[i]
  }
  reversebtn.style.display="none"
  filterbtn.style.display="block"
  filterbtn.addEventListener("mouseover",(event)=>{
    event.target.src = "photo/darksortdown.svg"
  })
  filterbtn.addEventListener("mouseout",(event)=>{
    event.target.src = "photo/sortdown.svg"
  })
}