let pala = prompt("ingresa una palabra");

  let texto = pala.split('');
  let menos=texto.length;
  let cont=1;
  for(let i=0; i < texto.length; i++) {
    if(texto[i]==texto[menos]){
      cont++;
      console.log(cont);
    }
    menos--;
  }

  // console.log("s");
  // console.log(cont);
  // console.log(menos+1);
  // console.log(texto.length)
  if(cont == (menos+1)){
    alert("palíndromo");
  }else{
    alert("no palíndromo");
  }


