let amigos = [];
let i = 0;


function agregarAmigo(){

     let amigo = document.getElementById('amigo').value;

     if(amigo === ''){

        alert('Por favor ingresa un nombre');
    }else{

        amigos.push(amigo);
        
        let listaAmigos = document.getElementById("listaAmigos");
        let contenido = ''; //Variable para almacenar los elementos de la lista
        for (let i = 0; i < amigos.length; i++){
            contenido += `<br>${amigos[i]}</br>`; // Agregamos cada amigo como un elemento de la lista
        }
        listaAmigos.innerHTML = contenido;
        
        document.querySelector('#amigo').value = '';
        i++

        return;
    }
}
function sortearAmigo(){
         
    if (amigos.length === 0){

         alert('Por favor tenga cuidado, Array vacío ')
      
     }else{
        
         let j = Math.floor(Math.random()*amigos.length);
         let amigoSorteado = amigos[j];

         let resultado = document.getElementById("resultado");
         resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

         let limpiarLista=document.getElementById("listaAmigos");
         limpiarLista.innerHTML=" ";
            
        }
     return;
        
     }

