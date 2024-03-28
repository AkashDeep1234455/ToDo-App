let addButton = document.querySelector("#add");
let userInput = document.querySelector(".userInput");
let list = document.querySelector(".tasks ul");
let  deletebutton= document.querySelector(".tasks button");
let body = document.querySelector("body");
 

function addButtonBehaviour(){
    let inputTask = userInput.value;
    if(inputTask!=""){
    let newList = document.createElement("li");
    newList.innerText = inputTask;
    list.append(newList);
    list.style.listStyleType = "disc";
     list.style.paddingLeft = "4rem";
    }
};


addButton.addEventListener("click",addButtonBehaviour);


let checkboxPresent = false;
deletebutton.addEventListener("click",function(){
    if(!checkboxPresent){
        let ulList = document.querySelector(".tasks ul");
        ulList.style.paddingLeft = "2rem";
    let listItem = document.querySelectorAll(".tasks li");
    if(listItem.length!=0){
    let newDeleteButton = document.createElement("button");
    newDeleteButton.textContent = "Delete";
    newDeleteButton.setAttribute("id","deletebutton");
    
    newDeleteButton.addEventListener("mouseover", function() {
        this.style.opacity = "0.8";
    });
    
    newDeleteButton.addEventListener("mouseout", function() {
        this.style.opacity = "";
    });

    body.append(newDeleteButton);
newDeleteButton.addEventListener("click",function(){
    let checked =   document.querySelectorAll(".tasks li input[type='checkbox']");
    for(let box of checked){
        if(box.checked){
            let list = box.closest("li");
            list.remove();
        }
    }
    let listItem2 = document.querySelectorAll(".tasks li");
    if(listItem2.length==0){
        newDeleteButton.remove();
    }

});
    }
    for(let list2 of listItem){
        let checkBox = document.createElement
        ("input");
        checkBox.type = "checkbox";
       
        list2.insertAdjacentElement("afterbegin",checkBox);

        
    }
    list.style.listStyleType = "none";
    checkboxPresent = true; 
   }else{
    let checkboxes = document.querySelectorAll(".tasks li input[type='checkbox']");
    let ulList = document.querySelector(".tasks ul");
    ulList.style.paddingLeft = "4rem";
    for(let check of checkboxes){
        check.remove();
    }
    checkboxPresent = false;
    list.style.listStyleType = "disc";
    list.classList.remove("checkboxlist");
    let newDeleteButton = document.querySelector("#deletebutton");
    let listItem = document.querySelectorAll(".tasks li");
    if(listItem.length!=0){
        newDeleteButton.remove(); 
    }
    for(let list of listItem){
        list.style.textDecoration = "";
    }




   }
});

let linethrough = false;
list.addEventListener("click",function(){
    let listItem = document.querySelectorAll(".tasks li");
    let listItemCheckBox = document.querySelectorAll(".tasks li input[type='checkbox']");
    for(let checkbox of listItemCheckBox){
        checkbox.addEventListener("change",function(event){
             let list = event.target.closest("li");
             if(checkbox.checked){
                list.style.textDecorationLine = "line-through";
             }else{
                list.style.textDecorationLine = "none";
             }
        })

    }
});
