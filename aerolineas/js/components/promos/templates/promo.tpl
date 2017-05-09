`${ image ? `<div class="cols left md-6 promo-image"><img src="${ image }" alt="${ img.alt }" /></div>`:''}
<div class="${ image ? 'cols left md-6 promo-info':'short-promo-content promo-content'}">
<span class="promo-origin">${ origin }</span>
<h2 class="aa-color promo-title promo-destination">${ destination }</h2>
${ image ?`<p class="promo-description"> ${ description }</p>`:''}
<span class="promo-purchase-title">Tarifa:</span>
<span class="aa-color promo-price">${ price }</span>
<a class="aa-color promo-purchase" href="${ payment }">Comprar</a>
</div>`;