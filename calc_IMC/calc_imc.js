const calcular =document.getElementById('calcular');


function imc(){
    const nome =document.getElementById('nome').value;
    const altura =document.getElementById('altura').value;
    const peso =document.getElementById('peso').value;
    const resultado =document.getElementById('resultado');
    if (nome  !== '' && altura !== '' && peso !== ''){
        const imc = (peso/(altura*altura)).toFixed(2);
        resultado.textContent = imc
        if(imc < 18.5){
            resultado.textContent = `${nome } seu IMC é de ${imc}, e você está ABAIXO DO PESO`
        }
        if(imc >= 18.5 && imc <=24.9){
            resultado.textContent = `${nome } seu IMC é de ${imc}, e você está com o PESO NORMAL`
        }
        if(imc >= 25 && imc <=29.9){
            resultado.textContent = `${nome } seu IMC é de ${imc}, e você está com SOBEPESO`
        }
        if(imc >= 30 && imc <=34.9){
            resultado.textContent = `${nome } seu IMC é de ${imc}, e você está com OBESIDADE GRAU I`
        }
        if(imc >= 35 && imc <=39.9){
            resultado.textContent = `${nome } seu IMC é de ${imc}, e você está com OBESIDADE GRAU II`
        }
        if(imc >= 40){
            resultado.textContent = `${nome } seu IMC é de ${imc}, e você está com OBESIDADE GRAU III / MÓRBIDA`
        }
    }else{
        resultado.textContent = 'preencha os campos'
        
    }
}

calcular.addEventListener('click', imc)
