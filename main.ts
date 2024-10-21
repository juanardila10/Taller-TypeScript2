import { Serie } from './Serie.js';
import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasons: HTMLElement = document.getElementById('avg-seasons')!; 
let Card: HTMLElement = document.getElementById('serie-card')!;


renderSeriesInTable(dataSeries);

averageSeasons.innerHTML = `${getAverageSeasons(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void{
    console.log('Desplegando series')
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = ` <td>${serie.id}</td>
                                <td style="color: #0000EE;"><a href="#" class="name_link" data-id="${serie.id}">${serie.name}</a></td>
                                <td>${serie.channel}</td> 
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement)
        
        const linkElement = trElement.querySelector('.name_link') as HTMLElement;
        linkElement.addEventListener('click', (event) => {
            event.preventDefault();
            showCard(serie);
             
        });
    });
}

function showCard(serie:Serie): void{
    const image = Card.querySelector('.card-img-top') as HTMLImageElement;
    const title = Card.querySelector('.card-title') as HTMLElement;
    const text = Card.querySelector('.card-text') as HTMLElement;
    const link = Card.querySelector('.card-link') as HTMLAnchorElement;

    image.src = serie.img;
    image.alt = serie.name;
    title.textContent = serie.name;
    text.textContent = serie.sinopsis;
    link.textContent = serie.url;
    link.href = serie.url;
    Card.classList.remove('d-none');

}



function getAverageSeasons(series: Serie[]): string{
    let totalSeasons: number = 0;
    let totalSeries : number = series.length
    series.forEach((serie) => totalSeasons += serie.seasons)
    let average : number = Math.round(totalSeasons / totalSeries)
    return 'Seasons average: '+average
}