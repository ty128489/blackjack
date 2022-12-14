//Creamos la baraja y metemos el array obtenido a una variable
function crear_baraja(){
    let naipes = [];
    for (let i=1; i<=13; i++){
         if (i == 1){
            naipes.push({nombre: 'diamante', figura: 'A'});
            naipes.push({nombre: 'corazon', figura: 'A'});
            naipes.push({nombre: 'trebol', figura: 'A'});
            naipes.push({nombre: 'pica', figura: 'A'});
         }
         else if (i<11){
            naipes.push({nombre: 'diamante', figura: i});
            naipes.push({nombre: 'corazon', figura: i});
            naipes.push({nombre: 'trebol', figura: i});
            naipes.push({nombre: 'pica', figura: i});
         }
         else if (i == 11){
            naipes.push({nombre: 'diamante', figura: 'j'});
            naipes.push({nombre: 'corazon', figura: 'j'});
            naipes.push({nombre: 'trebol', figura: 'j'});
            naipes.push({nombre: 'pica', figura: 'j'});
         }
         else if (i == 12){
            naipes.push({nombre: 'diamante', figura: 'Q'});
            naipes.push({nombre: 'corazon', figura: 'Q'});
            naipes.push({nombre: 'trebol', figura: 'Q'});
            naipes.push({nombre: 'pica', figura: 'Q'});
         }
         else{
            naipes.push({nombre: 'diamante', figura: 'K'});
            naipes.push({nombre: 'corazon', figura: 'K'});
            naipes.push({nombre: 'trebol', figura: 'K'});
            naipes.push({nombre: 'pica', figura: 'K'});
         }
    }
    return naipes;
}

let baraja = crear_baraja();

function jugar(){
   document.getElementsByClassName('cartas')[0].style.display = 'none';
   document.getElementsByClassName('boton')[0].style.display = 'none';
   
   let croupier = document.getElementById('croupier');
   let jugador = document.getElementById('jugador');
   añadir_carta(croupier);
   añadir_carta(jugador);
   añadir_carta(jugador);
}

function añadir_carta(tablero){
   let carta = baraja.splice(Math.floor(Math.random()*baraja.length),1);
   let carta_tablero;
   carta_tablero = `<div class="card palo${carta[0].nombre}"><p>${carta[0].figura}</p></div>`;
   
 
   tablero.innerHTML = tablero.innerHTML + carta_tablero;
}

function carta_random() {
   min = 0;
   max = 52;
   return Math.floor(Math.random() * (max - min) + min);
 }


