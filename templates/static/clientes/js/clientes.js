function add_carro(){

    container = document.getElementById('form-carro')

    html = "<br> <div class='row'> <div class='col-md'> <input type = 'text' placeholder = 'Carro' class = 'form-control' name='carro' > </div> <div class='col-md'> <input type = 'text' placeholder = 'Placa' class = 'form-control' name='placa'> </div> <div class='col-md'> <input type = 'number' placeholder = 'Ano' class = 'form-control' name='ano'> </div> <div class = 'col-md' id ='btn-remove'> <div class='btn-remove'> <span id='btn-remove'><p>&#128465;</p></span> </div> </div> </div>"

    container.innerHTML += html
}
    