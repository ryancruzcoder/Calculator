const display = document.getElementById("display")
function inserir(element){
    display.value += element.textContent
}

function apagartudo(){
    display.value = ""
}

function apagar(){
    display.value = display.value.slice(0, -1)
}

function realizarConta(){
    try {
        display.value = eval(display.value)
    } catch(e) {
        alert('Conta Inválida!')
    }
}