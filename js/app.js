 import changeModal from './postersAPI.js'
 
 function getFilms(){
    fetch('./data/peliculas.json')
    .then(response => response.json())
    .then(data => {
        let peliculas = data.posters.films;
        let container = document.querySelector('#container-films');
        container.innerHTML = "";
        for (let i = 0; i < peliculas.length; i++) {
            let actoresHTML = "";
            let actoreslist = peliculas[i].actores;
            actoreslist.forEach(actor => {
                actoresHTML += `
                <li class="list-group-item">${actor.name} ${actor.lastname}</li>
                `
            });
            container.innerHTML += `
						<div class="card mb-4 shadow-sm" style="width: 14rem;">
							<img src=${peliculas[i].img} class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">${peliculas[i].title}</h5>
								<p class="card-text">${peliculas[i].gender}</p>
							</div>
							<div class="card-header">Director</div>
							<ul class="list-group list-group-flush">
                                <li class="list-group-item">${peliculas[i].director}</li>
                                <div class="card-header">Actores</div>
								${actoresHTML}
                            </ul>
                            <div class="card-header">Duracion</div>
                            <p class="card-text">${peliculas[i].duration} minutos</p>
							<div class="text-center container" data-toggle="modal" data-target="#pedido">
								<button type="button" class="btn btn-primary dinBtn" data-toggle="tooltip" data-placement="top" title="Pago sólo con paypal">
									Comprar
								</button>
                            </div>
                        </div>
            `
        };
    });
}

function init(){
    getFilms();
    changeModal();
}
init();


