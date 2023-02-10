function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
  //récupérer l'id de la classe parente
  let temp = document.getElementById(event.target.id).parentElement;

  //en fonction de classe
  if (temp.className == "ListFrog M" || temp.className == "PlaceHolder M") {
    let el1 = document.querySelector("#dropzone_M");
    if (!el1.hasAttribute("onDragOver")) {
      el1.setAttribute("onDragOver", "onDragOver(event)");
    }
    let el2 = document.querySelector("#dropzone_F");
    el2.removeAttribute("onDragOver");
    let el3 = document.querySelector("#ListFrog_F");
    el3.removeAttribute("onDragOver");
    let el4 = document.querySelector("#ListFrog_M");
    if (!el4.hasAttribute("onDragOver")) {
      el4.setAttribute("onDragOver", "onDragOver(event)");
    }
  }
  if (temp.className == "ListFrog F" || temp.className == "PlaceHolder F") {
    let el1 = document.querySelector("#dropzone_F");
    if (!el1.hasAttribute("onDragOver")) {
      el1.setAttribute("onDragOver", "onDragOver(event)");
    }
    let el2 = document.querySelector("#dropzone_M");
    el2.removeAttribute("onDragOver");
    let el3 = document.querySelector("#ListFrog_M");
    el3.removeAttribute("onDragOver");
    let el4 = document.querySelector("#ListFrog_F");
    if (!el4.hasAttribute("onDragOver")) {
      el4.setAttribute("onDragOver", "onDragOver(event)");
    }
    //-->désactiver le drag-over/drag-drop
  }
    event.currentTarget.style.backgroundColor = "yellow";
  
}
function onDragEnd(event) {
  event.currentTarget.style.backgroundColor = "#4AAE9B";
}

function onDragOver(event) {
  //console.log(event.currentTarget.className);
  event.preventDefault();
}

function onDragEnter(event) {}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");

  const draggableElement = document.getElementById(id);
  //récupérer l'enfant si dropzone globale
  const dropzone = event.target;
  if (dropzone.className.includes("PlaceHolder")){     // || dropzone.className.includes("ListFrog")) {
    let temp = draggableElement.className;
    
    draggableElement.className = temp.replace('card-origin','');//.replace("card-origin","") ;
    draggableElement.className = draggableElement.className+" card-full";
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
  }
  if (dropzone.className.includes("ListFrog")){     // || dropzone.className.includes("")) {
    let temp = draggableElement.className;
    
    draggableElement.className = temp.replace('card-full','');
    draggableElement.className = draggableElement.className+" card-origin" ;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
  }
}

function btnBreedClick(){
  alert("ça prend quelques instants de faire des bébés grenouille")
}
//function get tokenId list from user wallet
//get json metadata
