import { grilla } from "./grilla.js";
// console.log(grilla);


let canIm = 6;
document.addEventListener('DOMContentLoaded', () => {


  const key = 'Ik_BbWw10NVmJdtfMKfBw-DIb8LY3Pt5FJaEZNkEegI'
  let url = 'https://api.unsplash.com/search/photos'

  
    fetch(`${url}?query=comida-rapida&client_id=${key}&per_page=${canIm}`)
        .then((response) => response.json())
              .then( data => {
                
                resultados = data.results
                // console.log(resultados);
                mostrarResultados(resultados);
              } )
  
 

});


function abrirMenu(){
  var label = document.getElementsByClassName("menu-toogle")[0];
  var menu = document.getElementsByClassName("menu-movil")[0];
  if( label.getAttribute("class") == "menu-toogle act"){
    label.className = "menu-toogle";
    menu.style.right = "-200px";
  }
  else{
    label.className += " act";
    menu.style.right = "0px";    
  }
}

let resultados = [];
let resultado = [];
const spinner = document.querySelector('.centrar');


const botonVer = document.querySelector('#ver');
botonVer.addEventListener('click', consulta);

function consulta(e){
  
  // console.log(e.target.id);

  canIm += 3;
  limpiarHtml();

  let url = '';
  // const id = e.target.getAttribute('data-filter');
  // console.log(id);


  const key = 'Ik_BbWw10NVmJdtfMKfBw-DIb8LY3Pt5FJaEZNkEegI'
  url = 'https://api.unsplash.com/search/photos'

  if(all.classList.contains('active')){
    url = `${url}?query=comidas-rapidas&client_id=${key}&per_page=${canIm}`
  }else if(hamburguesa.classList.contains('active')){
    url = `${url}?query=hamburguesas&client_id=${key}&per_page=${canIm}`
  }else if(bebida.classList.contains('active')){
    url = `${url}?query=bebida&client_id=${key}&per_page=${canIm}`
  }else if(pizza.classList.contains('active')){
    url = `${url}?query=pizza&client_id=${key}&per_page=${canIm}`
  }else if(combo.classList.contains('active')){
    url = `${url}?query=vegetales&client_id=${key}&per_page=${canIm}`
  }else if(ensalada.classList.contains('active')){
    url = `${url}?query=ensaladas&client_id=${key}&per_page=${canIm}`
  }
    
  fetch(url)
          .then((response) => response.json())
                .then( data => {
                  
                  // console.log('comprobando');

                  // resultado = [...resultados, data.results] 
                  resultado = data.results        
                  mostrarResultados(resultado)
                } )
  
}



function limpiarHtml(){
  const contenedor = document.querySelector('#portfoliolist');
  // console.log(contenedor);

  while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild);
  }
 
}




function mostrarResultados(resultados){
  // console.log(resultados); 
  limpiarHtml();
  const contenedor = document.querySelector('#portfoliolist');

  
  
  resultados.forEach(data => {


      const { urls:{small}, tags } = data
      const tag = tags[1];
      
      const { title } = tag      

      const autoHTML = document.createElement('p');
      autoHTML.classList.add('existe','project-box-wrapper');
      autoHTML.innerHTML = `
      <div class="portfolio logo project-box" data-cat="logo">
        <div class="portfolio-wrapper">
          <img src="${ small }" class="img-resultado" />
          <div class="label">
            <div class="label-text">
              <a class="text-title label-bg">${ title }</a> 
              <span class="text-category">Logo</span>
            </div>
            <div class="label-bg"></div>
          </div>
        </div>
      </div>
          
      `;         

      spinner.style.display = "flex";
      setTimeout(() => {
        spinner.style.display = "none";
        contenedor.appendChild(autoHTML);
        
      }, 1000);

    })
    
  

}

const all = document.querySelector('.all');
const bebida = document.querySelector('.bebida');
const hamburguesa = document.querySelector('.hambur');
const pizza = document.querySelector('.pizza');
const combo = document.querySelector('.combo');
const ensalada = document.querySelector('.ensalada');

all.addEventListener('click', leerData);
bebida.addEventListener('click', leerData);
hamburguesa.addEventListener('click', leerData);
pizza.addEventListener('click', leerData);
combo.addEventListener('click', leerData);
ensalada.addEventListener('click', leerData);

const todo = document.querySelector('.todo').addEventListener('click', leerData);
const bebidas = document.querySelector('.bebidas').addEventListener('click', leerData);
const hamburguesas = document.querySelector('.hamburguesa').addEventListener('click', leerData);
const pizzas = document.querySelector('.pizzas').addEventListener('click', leerData);
const combos = document.querySelector('.combos').addEventListener('click', leerData);
const ensaladas = document.querySelector('.ensaladas').addEventListener('click', leerData);

const todos = document.querySelector('.todos').addEventListener('click', leerData);
const bebidass = document.querySelector('.bebidass').addEventListener('click', leerData);
const hamburguesass = document.querySelector('.hamburguesas').addEventListener('click', leerData);
const pizzass = document.querySelector('.pizzass').addEventListener('click', leerData);
const comboss = document.querySelector('.comboss').addEventListener('click', leerData);
const ensaladass = document.querySelector('.ensaladass').addEventListener('click', leerData);



function leerData(e) {
  
  var entrada = e.target.textContent;
  const clase = document.querySelectorAll('#filters li span');
  clase.forEach( event => {
    console.log(event.textContent);
    if(event !== entrada) {
        event.classList.remove('active');
    }
    if(event.textContent == entrada) {
      event.classList.add('active');
      
    }
    
  })


  let url = '';
  console.log(e.target);
  const id = e.target.getAttribute('data-filter')
  // const id = e.target.textContent;

  const key = 'Ik_BbWw10NVmJdtfMKfBw-DIb8LY3Pt5FJaEZNkEegI'
  url = 'https://api.unsplash.com/search/photos'

  // let canIm = 3;
  if(id == 'all') {
    url = `${url}?query=comida-rapida&client_id=${key}&per_page=${canIm}`
  } else {
    url = `${url}?query=${id}&client_id=${key}&per_page=${canIm}`
  } 
  

  fetch(url)
    .then((response) => response.json())
          .then( data => {
            
            // console.log('comprobando');

            // resultado = [...resultados, data.results] 
            resultado = data.results        
            mostrarResultados(resultado)
          } )      
}

const listView = document.querySelector('.list-view');
const gridView = document.querySelector('.grid-view');
const projectsList = document.querySelector('#portfoliolist');

const jsGridView = grilla[0].clase;
const jsListView = grilla[1].clase;
// console.log(jsListView);

listView.addEventListener('click', function () {
  // console.log('listview');
  gridView.classList.remove('active');
  listView.classList.add('active');
  projectsList.classList.remove(jsGridView);
  projectsList.classList.add(jsListView);
});

gridView.addEventListener('click', function () {
  // console.log('gridview');
  gridView.classList.add('active');
  listView.classList.remove('active');
  projectsList.classList.remove(jsListView);
  projectsList.classList.add(jsGridView);
});

// console.log(grilla);

















