document.addEventListener("DOMContentLoaded", function(){

    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault()

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;

        if(numeroAleatorio == 0){
            numeroAleatorio = 1
        }

        document.getElementById('resultado-valor').innerText = Math.ceil(numeroAleatorio);
     })
})