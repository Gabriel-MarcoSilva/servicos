let doc = document.getElementsByClassName("container-itens-servicos")

function ampliar(props){
    if(doc[props].style.height == "auto"){
        doc[props].style.height = "250px"
    }else{
        doc[props].style.height = "auto"
    }
}