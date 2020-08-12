/** 
var btn = document.querySelector('button');
var pre  = document.querySelector('pre');

btn.onclick = async e => {
  let resultat;
  try {
    let response = await fetch('/roll');
    console.log('nach Fetch',response);
    resultat = await response.json()
    console.log('nach JSON()',resultat);
  } catch(e){
    resultat = 'ein fehler ist aufgetreten'
  }
  pre.innerText = resultat.zahl
}
*/
var btn = document.querySelector('button');
var pre  = document.querySelector('h4');

btn.onclick = async e => {
  let resultat;

  var foo =[]
for( i=0;  i < 5;i++){

    let response = await fetch('/roll');
    let resultat = await response.json();
    foo[i] =resultat.zahl
}
  pre.innerText = foo
}
