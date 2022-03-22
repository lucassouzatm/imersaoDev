function converterDolar() {
    var valorElemento = document.getElementById("valor");
  
    var valor = valorElemento.value;
    var valorDolar = parseFloat(valor);
  
    var valorReal = valorDolar * 0.21;
    console.log(valorReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "R$:" + valor + " Vale: " + valorReal + " Dólares";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function converterEuro() {
    var valorElemento = document.getElementById("valor");
  
    var valor = valorElemento.value;
    var valorEuro = parseFloat(valor);
  
    var valorReal = valorEuro * 0.18;
    console.log(valorReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "R$:" + valor + " Vale: " + valorReal + " Euros";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function converterLibra() {
    var valorElemento = document.getElementById("valor");
  
    var valor = valorElemento.value;
    var valorLibra = parseFloat(valor);
  
    var valorReal = valorLibra * 0.15;
    console.log(valorReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "R$:" + valor + " Vale: " + valorReal + " Libras";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function converterIene() {
    var valorElemento = document.getElementById("valor");
  
    var valor = valorElemento.value;
    var valorIene = parseFloat(valor);
  
    var valorReal = valorIene * 23.12;
    console.log(valorReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "R$:" + valor + " Vale: " + valorReal + " Ienes";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  