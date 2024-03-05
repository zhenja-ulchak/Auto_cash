window.addEventListener("load",function (params) {
    
const textHead = document.getElementsByClassName("classActiv")


for (text in textHead) {
    const element = textHead[text];
    
    element.onclick =  function (params) {
        element.classList.add("activ");
     
    }
   
}

const blockCard = document.getElementsByClassName("block-card")
var p = document.getElementsByClassName("text-64-bold-second")

for(block in blockCard){

  let elem = blockCard[block]



  elem.onmouseover = function () {
    elem.classList.add('block-card-elem')
    console.log(elem.lastChild);
  console.log(elem.lastChild.previousSibling);
    let prev = elem.lastChild.previousSibling
    prev.classList.add("text-64-bold-second-anime")
  }
 
  elem. onmouseleave = function () {
    elem.classList.remove('block-card-elem')
    let prev = elem.lastChild.previousSibling
    prev.classList.remove("text-64-bold-second-anime")
  }

}

let closeBlock = document.querySelector(".close-block") 
closeBlock.addEventListener("click", blockMenu);

function blockMenu () {
    console.log('egjoiheioughh');
    let blockMenu = document.querySelector('.block-menu')
    if ( blockMenu.classList.contains('active-menu')) {
      blockMenu.classList.add("d-non")
      blockMenu.classList.remove("active-menu")
    }else{
      blockMenu.classList.add('active-menu')
      blockMenu.classList.remove("d-non")
    }
 
    console.log(blockMenu);
}




})