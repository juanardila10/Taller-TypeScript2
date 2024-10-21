import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasons = document.getElementById('avg-seasons');
var Card = document.getElementById('serie-card');
renderSeriesInTable(dataSeries);
averageSeasons.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td>".concat(serie.id, "</td>\n                                <td style=\"color: #0000EE;\"><a href=\"#\" class=\"name_link\" data-id=\"").concat(serie.id, "\">").concat(serie.name, "</a></td>\n                                <td>").concat(serie.channel, "</td> \n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var linkElement = trElement.querySelector('.name_link');
        linkElement.addEventListener('click', function (event) {
            event.preventDefault();
            showCard(serie);
        });
    });
}
function showCard(serie) {
    var image = Card.querySelector('.card-img-top');
    var title = Card.querySelector('.card-title');
    var text = Card.querySelector('.card-text');
    var link = Card.querySelector('.card-link');
    image.src = serie.img;
    image.alt = serie.name;
    title.textContent = serie.name;
    text.textContent = serie.sinopsis;
    link.textContent = serie.url;
    link.href = serie.url;
    Card.classList.remove('d-none');
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = series.length;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    var average = Math.round(totalSeasons / totalSeries);
    return 'Seasons average: ' + average;
}
