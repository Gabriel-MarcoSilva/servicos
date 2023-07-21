let pass = false

function ampliar(props){
    if(!pass){
        document.getElementsByClassName("container-itens-servicos")[props].style.height = "auto"
    }else{
        document.getElementsByClassName("container-itens-servicos")[props].style.height = "250px"
    }
    pass = !pass
}