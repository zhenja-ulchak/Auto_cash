window.addEventListener("load", function () {

   const lightNight = document.querySelector(".light-night") 

   lightNight.addEventListener("click", function () {
        //console.log("dfgbdgfh");
        const formMain = document.querySelector(".form-main")
        const textBold = document.querySelector(".text-28-bold")
        const textForm = document.querySelectorAll(".text-14-form")
        const bgSecondBlock = document.querySelector(".bg-second-block")
        const bgBlockTree = document.querySelector(".bg-block-tree")
        const textNormalSecond = document.querySelectorAll(".color-text-second")
        
        function addStyle (params, classMain) {
            params.classList.contains(classMain) ? params.classList.remove(classMain) : params.classList.add(classMain)
        }
       
        addStyle(formMain, "color-text-background")
        addStyle(bgSecondBlock, "color-linear-gradient")
        addStyle(bgBlockTree,  "color-text-background")
        addStyle(textBold, "color-text")

        function addClassAll(params) {
         params.forEach(items => items.classList.contains("color-text") ? items.classList.remove("color-text") : items.classList.add("color-text"))
        }

        addClassAll(textNormalSecond)
        addClassAll(textForm)
       
   })

})


