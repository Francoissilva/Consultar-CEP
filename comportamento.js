//CEP Google São Paulo//

let botao = document.querySelector('button');


botao.addEventListener('click', function() {
    
    let cep = document.querySelector('#cep').value;
    
    let api = `https://viacep.com.br/ws/${cep}/json/`;
    
    let request = new XMLHttpRequest();
    
    request.open('GET', api);
    
    request.onload = function() {
    let endereco = JSON.parse(request.responseText);
        
    let logradouro = document.querySelector('#logradouro');
    logradouro.innerHTML = endereco.logradouro;
        
    let bairro = document.querySelector('#bairro');
    bairro.innerHTML = endereco.bairro;    
        
    let localidade = document.querySelector('#localidade');
    localidade.innerHTML = endereco.localidade;      
            
    };
    
    request.send();   
    
    
});
    






















/*
let botao = document.querySelector('button');
botao.innerHTML = 'Mudar cor';

let h1 = document.querySelector ('h1');



botao.addEventListener('mouseover', function(){
    h1.style.opacity = 0.2;
});


botao.addEventListener('click', function() {
   let cor = document.querySelector('#cor').value; document.querySelector('body').style.backgroundColor = cor;
});*/





/*
let imc = 36;

if(imc < 16) {
    console.log('Magreza grave');
}
else if (imc > 16 &&  imc < 17){
    console.log('Magreza Moderada')
}
else if (imc > 17 && imc < 18,5){
    console.log('Magreza leve');
}
else if (imc > 18,5 && imc < 25){
    console.log('Saúdavel');
}
else if (imc > 25 && imc < 30){
    console.log('Sobrepeso');
}
else if ( imc > 30 && imc < 35 ){
    console.log('Obesidade');
}
else if (imc > 35 || imc < 40){
    console.log('Obesidade Severa');
}
else if (imc > 40){
    console.log('Obesidade Mórbida');
}
*/
