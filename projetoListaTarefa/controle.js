let  contador=0;
let input  = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main   = document.getElementById("areaLista");

function addTarefa(){
    //PAGAR O VALOR DIGITADO NO INPUT
    let valorInput=input.value;

    //SE o valor input for diferente ou seja se NÃO FOR VAZIO, NEM NULO,NEM INDEFINIDO
    if((valorInput!=="") && (valorInput!==null) && (valorInput!==undefined )){
       ++contador;

        let novoItem= ` <div id="${contador}" class="item">
            <div onclick="marcaTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>

            </div>
            <div onclick="marcaTarefa(${contador})" class="item-nome">
               ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete" ><i class="mdi mdi-delete"></i> Deletar</button>
            </div>`;
            //ADICIONAR NOVO ITEM NO MAIN
            main.innerHTML+=novoItem;

            //ZERAR OS CAMPOS
            input.value="";
            input.focus();
            
    }
}

function deletar(id){
    var tarefa= document.getElementById(id);
    tarefa.remove();

}


function marcaTarefa(id){
    var item=document.getElementById(id);
    var classe=item.getAttribute('class');


    if(classe == "item"){
        item.classList.add('clicado');

        var icone=document.getElementById('icone_'+id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);//joga o filho para o final
    }else{
       item.classList.remove('clicado');
        var icone=document.getElementById('icone_'+id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener("keyup",function(event){
    if(event.keyCode===13){//se teclou enter
        event.preventDefault();
    btnAdd.click();
    }

})