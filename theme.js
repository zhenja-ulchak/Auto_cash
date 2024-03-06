window.addEventListener("load", function () {

   const lightNight = document.querySelector(".light-night")

   const colorBlack ="#000000"
   const colorWhite = "#ffffff"
   const backColor = "linear-gradient(90deg, #525252 0%, #616162 56.77%, #888888 100%)"
   const colorT = "rgb(82 82 82)" 

   lightNight.addEventListener("click", function () {
        console.log("dfgbdgfh");
        const formMain = document.querySelector(".form-main")
        const textBold = document.querySelector(".text-28-bold")
        const textForm = document.querySelectorAll(".text-14-form")
        const bgSecondBlock = document.querySelector(".bg-second-block")
        const bgBlockTree = document.querySelector(".bg-block-tree")
        formMain.style.backgroundColor = colorBlack
        textBold.style.color = colorWhite
        bgSecondBlock.style.background = backColor
        bgBlockTree.style.background = colorT
        for(text in textForm){
           textForm[text].style.color = colorWhite
        }
       

        
   })

})


