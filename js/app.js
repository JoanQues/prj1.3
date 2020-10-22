fetch('./data/peliculas.json')
    .then(response => response.json())
    .then(data => {
        let peliculas = data.posters.films;
        let container = document.querySelector('#list-films');
        container.innerHTML = "";
        for (let i = 0; i < peliculas.length; i++) {
            container.innerHTML += `
                    <div class="card-deck mb-3 text-center">
						<div class="card mb-4 shadow-sm" style="width: 14rem;">
							<img src=${peliculas[i].img} class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">${peliculas[i].title}</h5>
								<p class="card-text">Genero: ${peliculas[i].gender}</p>
							</div>
							<div class="card-header">Actores y director</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">Director: ${peliculas[i].director}</li>
								<li class="list-group-item">Actor1</li>
								<li class="list-group-item">Actor2</li>
                            </ul>
                            <div class="card-header">Duracion</div>
                            <p class="card-text">${peliculas[i].duration} minutos</p>
							<div class="text-center container" data-toggle="modal" data-target="#pedido">
								<button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Pago sólo con paypal">
									Comprar
								</button>
                            </div>
                        </div>
            `
        };
    });


