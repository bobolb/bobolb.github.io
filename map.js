import * as maplibregl from 'https://unpkg.com/maplibre-gl@6.10.0/dist/maplibre-gl.mjs';

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://raw.githubusercontent.com/bobolb/risks/main/jpac_style.json',
    center: [3.206, 44.582],
    zoom: 5,
    attributionControl: {
        compact: true,
        customAttribution: 'Geographical Disease Risk Index | JPAC'
    },
    hash: true
});

map.on('load', async () => {

    const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: [0, -15]
    });

    let currentFeatureCoordinates;

    map.on('mousemove', 'LabelRisks', (e) => {
        // Your existing code here
    });

    map.on('mouseleave', 'LabelRisks', () => {
        currentFeatureCoordinates = undefined;
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});