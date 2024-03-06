window.addEventListener("load",function (params) {
    const clickButton = document.querySelector(".click-button")
    clickButton.addEventListener("click",submitForm );
    let element
    let onesel
    const info = document.querySelector(".info")
    function submitForm(params) {
        console.log('fjsxfhjgnn');
        const select = document.querySelectorAll("select")
        for( sel in select){
            onesel = select[sel]
        }

        const input = document.querySelectorAll("input")

        for (let i = 0; i < input.length; i++) {
            element = input[i].value;
            if(!element){
                info.innerHTML = " <b>Заповніть будьласка форму."
            }

        console.log(element);
    
    }
// only test
        const formData = new FormData()
        formData.append(element, 'test')

        fetch('http://127.0.0.1:5500/main.html', {
            headers: {
                "Content-Type": "text/plain"
            },
            method: 'POST',
            body: formData
        })
        .then(r => r.json())
        .then(data => {
        console.log(data)
        })

    }

})
