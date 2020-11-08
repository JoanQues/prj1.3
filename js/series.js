export default async function getSeries(){
    console.log('hola series')
    fetch('./data/series.json')
    .then(response => response.json())
    .then(data => {
        let series = data.posters.series;
        let container = document.querySelector('#container-series');
        container.innerHTML = "";
        for (let i = 0; i < series.length; i++) {
            let actoresHTML = "";
            let actoreslist = series[i].actores;
            actoreslist.forEach(actor => {
                actoresHTML += `
                <li class="list-group-item">${actor.name} ${actor.lastname}</li>
                `
            });
            container.innerHTML += `
						<div class="card mb-4 shadow-sm" style="width: 14rem;">
							<img src=${series[i].img} class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">${series[i].title}</h5>
								<p class="card-text">${series[i].gender}</p>
							</div>
							<div class="card-header">Director</div>
							<ul class="list-group list-group-flush">
                                <li class="list-group-item">${series[i].director}</li>
                                <div class="card-header">Actores</div>
								${actoresHTML}
                            </ul>
                            <div class="card-header">Duracion</div>
                            <p class="card-text">${series[i].seasons} seasons</p>
							<div class="text-center container" data-toggle="modal" data-target="#pedido">
                                <button type="button" class="btn btn-primary serieBtn" data-toggle="tooltip" data-placement="top" title="Pago sólo con paypal">
									Comprar
								</button>
                            </div>
                        </div>
            `
        };
        let buttons = document.querySelectorAll('.serieBtn');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = () => {
                document.querySelector('#film-name').innerHTML = "Serie:" + " " + series[i].title;
                document.querySelector('#ped_precio').value = series[i].price + '€';
            };
        }
    });
}
getSeries();