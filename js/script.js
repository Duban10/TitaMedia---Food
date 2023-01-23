


let canIm = 6;
document.addEventListener('DOMContentLoaded', () => {


  key = 'Ik_BbWw10NVmJdtfMKfBw-DIb8LY3Pt5FJaEZNkEegI'
  url = 'https://api.unsplash.com/search/photos'

  
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


  key = 'Ik_BbWw10NVmJdtfMKfBw-DIb8LY3Pt5FJaEZNkEegI'
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

  // const contenedor = document.querySelectorAll('#portfoliolist p');
  // contenedor.forEach( e => e.style.display = "none" );

  // if(e.target.classList.contains('todo') || e.target.classList.contains('todos')){
  //   clase.forEach( event => {
  //     if(event.classList.contains('all')) {
  //       event.classList.add('active');
  //     }
  //   })
  // }else if(e.target.classList.contains('hamburguesa') || e.target.classList.contains('hamburguesas')){
  //   clase.forEach( event => {
  //     if(event.classList.contains('hambur')) {
  //       event.classList.add('active');
  //     }
  //   })
  // }else if(e.target.classList.contains('bebidas') || e.target.classList.contains('bebidass')){
  //   clase.forEach( event => {
  //     if(event.classList.contains('bebida')) {
  //       event.classList.add('active');
  //     }
  //   })
  // }else if(e.target.classList.contains('pizzas') || e.target.classList.contains('pizzass')){
  //   clase.forEach( event => {
  //     if(event.classList.contains('pizza')) {
  //       event.classList.add('active');
  //     }
  //   })
  // }else if(e.target.classList.contains('combos') || e.target.classList.contains('comboss')){
  //   clase.forEach( event => {
  //     if(event.classList.contains('combo')) {
  //       event.classList.add('active');
  //     }
  //   })
  // }else if(e.target.classList.contains('ensaladas') || e.target.classList.contains('ensaladass')){
  //   clase.forEach( event => {
  //     if(event.classList.contains('ensalada')) {
  //       event.classList.add('active');
  //     }
  //   })
  // }
  // e.target.classList.add('active');

  let url = '';
  const id = e.target.getAttribute('data-filter')
  // console.log(id);

  key = 'Ik_BbWw10NVmJdtfMKfBw-DIb8LY3Pt5FJaEZNkEegI'
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

















