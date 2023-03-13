function add_carro(){

    container = document.getElementById('form-carro')

    html = "<br> <div class='row'> <div class='col-md'> <input type = 'text' placeholder = 'Carro' class = 'form-control' name='carro' > </div> <div class='col-md'> <input type = 'text' placeholder = 'Placa' class = 'form-control' name='placa'> </div> <div class='col-md'> <input type = 'number' placeholder = 'Ano' class = 'form-control' name='ano'> </div> <div class = 'col-md' id ='btn-remove'> <div class='btn-remove'> <span id='btn-remove'><p>&#128465;</p></span> </div> </div> </div>"

    container.innerHTML += html
}

function exibir_form(tipo){
    add_cliente = document.getElementById("adicionar-cliente")
    att_cliente = document.getElementById("att_cliente")
    add = document.getElementById("add")
    att = document.getElementById("att")
    
    if(tipo == "1"){

        att_cliente.style.display = "none"
        add_cliente.style.display = "block"
        add.setAttribute('style', 'border: 2px solid white;')
        att.setAttribute('style', 'border: none;')



    }else if(tipo == "2"){

        add_cliente.style.display = "none"
        att_cliente.style.display = "block"
        att.setAttribute('style', 'border: 2px solid white;')
        add.setAttribute('style', 'border: none;')

    }

}

function dados_cliente(){
    cliente = document.getElementById("cliente-select")

    fetch("/clientes/atualiza_cliente/", {
        method: "POST",

    })

}