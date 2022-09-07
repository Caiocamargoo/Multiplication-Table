
function gerar() {
  let num = document.querySelector('#num');
  let tab = document.querySelector('#tab');
  let clear = document.querySelector('#clear');
  
  if(num.value.length == 0){
    alert( 'ERROR Digite um número');
  } else {
    let number = num.value;
    let counter = 1;
    
    while(counter <=10){
      let option = document.createElement('option');
      option.text = `${counter} x ${number} = ${counter*number}`;
      tab.appendChild(option);
      counter++;
      clear.addEventListener('click', () => {
          location.reload();
      })
    }
  } 
  
}



