
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

