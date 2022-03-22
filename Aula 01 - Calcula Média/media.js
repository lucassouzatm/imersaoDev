const calculaNota = () => {
    const notaDoPrimeiroBimestre = parseInt(document.getElementById("n1").value);
    const notaDoSegundoBimestre = parseInt(document.getElementById("n2").value);
    const notaDoTerceiroBimestre = parseInt(document.getElementById("n3").value);
    const notaDoQuartoBimestre = parseInt(document.getElementById("n4").value);
  
    const notaFinal = (
      (notaDoPrimeiroBimestre +
        notaDoSegundoBimestre +
        notaDoTerceiroBimestre +
        notaDoQuartoBimestre) /
      4
    ).toFixed(1);
  
    let resultado;
    let p = document.querySelector(".texto--padrao");
  
    if (notaFinal <= 6) {
      resultado = "Que Pena! Você foi REPROVADO!!!";
      p.style.backgroundImage =
        "url('https://i.pinimg.com/originals/ae/97/c1/ae97c112f9ecb8101083a6e6561a7745.jpg')";
    } else {
      resultado = "PARABÉNS VOCÊ FOI APROVADO!!!";
      p.style.backgroundImage =
        "url('https://pbs.twimg.com/media/EiR9bt2WkAE8Tq2.jpg')";
    }
  
    document.getElementById(
      "resultado"
    ).innerHTML = `A Nota Final é: ${notaFinal}, ${resultado}`;
  };
  