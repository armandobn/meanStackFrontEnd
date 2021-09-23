let ano= prompt("ingresa año");

ano=parseInt(ano);
let cien=0;
let siglo=0;

function siglo_ing(){
  for(let i=0; i<21; i++){
    cien=cien+100;
    console.log(cien+1);
    if(ano<cien+1){
      if(ano==cien+1){
        siglo=i+1;
        // console.log(siglo);
        return siglo;
      }else{
        siglo=i+1;
        // console.log(siglo);
        return siglo;   
      }
      
    }
    
  }
}

alert(`Esta en el siglo: ${siglo_ing()}`);


