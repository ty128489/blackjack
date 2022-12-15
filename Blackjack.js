//Creamos la baraja y metemos el array obtenido a una variable
function crear_baraja(){
    let naipes = [];
    for (let i=1; i<=13; i++){
         if (i == 1){
            naipes.push({nombre: 'diamante', figura: 'A', valor: 1});
            naipes.push({nombre: 'corazon', figura: 'A', valor: 1});
            naipes.push({nombre: 'trebol', figura: 'A', valor: 1});
            naipes.push({nombre: 'pica', figura: 'A', valor: 1});
         }
         else if (i<11){
            naipes.push({nombre: 'diamante', figura: i, valor: i});
            naipes.push({nombre: 'corazon', figura: i, valor: i});
            naipes.push({nombre: 'trebol', figura: i, valor: i});
            naipes.push({nombre: 'pica', figura: i, valor: i});
         }
         else if (i == 11){
            naipes.push({nombre: 'diamante', figura: 'j', valor: 10});
            naipes.push({nombre: 'corazon', figura: 'j', valor: 10});
            naipes.push({nombre: 'trebol', figura: 'j', valor: 10});
            naipes.push({nombre: 'pica', figura: 'j', valor: 10});
         }
         else if (i == 12){
            naipes.push({nombre: 'diamante', figura: 'Q', valor: 10});
            naipes.push({nombre: 'corazon', figura: 'Q', valor: 10});
            naipes.push({nombre: 'trebol', figura: 'Q', valor: 10});
            naipes.push({nombre: 'pica', figura: 'Q', valor: 10});
         }
         else{
            naipes.push({nombre: 'diamante', figura: 'K', valor: 10});
            naipes.push({nombre: 'corazon', figura: 'K', valor: 10});
            naipes.push({nombre: 'trebol', figura: 'K', valor: 10});
            naipes.push({nombre: 'pica', figura: 'K', valor: 10});
         }
    }
    return naipes;
}

let baraja = crear_baraja();

let croupier = document.getElementById('croupier');
let jugador = document.getElementById('jugador');

let suma_jugador = 0;
let suma_croupier = 0;
//Funcion que se ejecuta al darle al boton jugar y elimina la presentación
//Támbien añade usando la función añadir_carta() las primeras cartas
function jugar(){
   document.getElementsByClassName('cartas')[0].style.display = 'none';
   document.getElementsByClassName('boton')[0].style.display = 'none';
   document.getElementById('boton_pedir').style.display = 'contents';
   document.getElementById('boton_plantarse').style.display = 'contents';

   
   let carta = añadir_carta(croupier);
   suma_croupier += carta[0].valor;
   carta = añadir_carta(jugador);
   suma_jugador += carta[0].valor;
   carta = añadir_carta(jugador);
   suma_jugador += carta[0].valor;
}

//Función que elige una carta random de la baraja y crea un div con las clases
//necesarias y las añade al tablero
function añadir_carta(tablero){
   let carta = baraja.splice(Math.floor(Math.random()*baraja.length),1);
   let carta_tablero;
   carta_tablero = `<div class="card palo${carta[0].nombre}"><p>${carta[0].figura}</p></div>`;
   
 
   tablero.innerHTML = tablero.innerHTML + carta_tablero;
   return carta;
}


function pedir(){
   let carta = añadir_carta(jugador);
   suma_jugador += carta[0].valor;
   if (suma_jugador > 21){

      alert('Has perdido, gana el casino');
   }

}

function plantarse(){
   let carta = añadir_carta(croupier);
   suma_croupier += carta[0].valor;
   for (let x = suma_croupier; x<17; x += carta[0].valor){
      carta = añadir_carta(croupier);
      suma_croupier += carta[0].valor;
   }
   if (suma_croupier > 21){
      alert('Has ganado!!!');
   }else if (suma_jugador < suma_croupier){
      alert('Has perdido, gana la banca');
   }else if(suma_jugador > suma_croupier){
      alert('Has ganado!!!');
   }else if (suma_jugador == suma_croupier){
      alert('Empate, no pierdes dinero');
   }else{
      alert('Err144');
   }
   //window.location.reload();
}



