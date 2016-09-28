'use strict';

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

$(() => {
    let $offers = $('#offers');
    let $additionalOffers = $('#additionalOffers');
    let offerTemplate = $('#offer-template').html();
    let additionalOfferTemplate = $('#additional-offer-template').html();

    $.getJSON('/data', (data) => {
        let offers = data.top;
        let additionalOffers = data.bottom;

        [offers, additionalOffers].forEach((arr) => {
            arr.sort((a, b) => {
                return b.priority - a.priority;
            });
        });

        offers.forEach((offer) => {
            $offers.append(_.template(offerTemplate)(offer));
        });

        additionalOffers.forEach((offer) => {
            $additionalOffers.append(_.template(additionalOfferTemplate)(offer));
        });
    });
});