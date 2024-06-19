var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_EspotaPortAin_1 = new ol.format.GeoJSON();
var features_EspotaPortAin_1 = format_EspotaPortAin_1.readFeatures(json_EspotaPortAin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspotaPortAin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspotaPortAin_1.addFeatures(features_EspotaPortAin_1);
var lyr_EspotaPortAin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspotaPortAin_1, 
                style: style_EspotaPortAin_1,
                popuplayertitle: "Espot a Port Ainé",
                interactive: true,
                title: '<img src="styles/legend/EspotaPortAin_1.png" /> Espot a Port Ainé'
            });
var format_EspotaBoiTall_2 = new ol.format.GeoJSON();
var features_EspotaBoiTall_2 = format_EspotaBoiTall_2.readFeatures(json_EspotaBoiTall_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspotaBoiTall_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspotaBoiTall_2.addFeatures(features_EspotaBoiTall_2);
var lyr_EspotaBoiTall_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspotaBoiTall_2, 
                style: style_EspotaBoiTall_2,
                popuplayertitle: "Espot a Boi-Taüll",
                interactive: true,
                title: '<img src="styles/legend/EspotaBoiTall_2.png" /> Espot a Boi-Taüll'
            });
var format_ElPontdeSuertaAmpriuCerlerBenasque_3 = new ol.format.GeoJSON();
var features_ElPontdeSuertaAmpriuCerlerBenasque_3 = format_ElPontdeSuertaAmpriuCerlerBenasque_3.readFeatures(json_ElPontdeSuertaAmpriuCerlerBenasque_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElPontdeSuertaAmpriuCerlerBenasque_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElPontdeSuertaAmpriuCerlerBenasque_3.addFeatures(features_ElPontdeSuertaAmpriuCerlerBenasque_3);
var lyr_ElPontdeSuertaAmpriuCerlerBenasque_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElPontdeSuertaAmpriuCerlerBenasque_3, 
                style: style_ElPontdeSuertaAmpriuCerlerBenasque_3,
                popuplayertitle: "El Pont de Suert a Ampriu - Cerler, Benasque",
                interactive: true,
                title: '<img src="styles/legend/ElPontdeSuertaAmpriuCerlerBenasque_3.png" /> El Pont de Suert a Ampriu - Cerler, Benasque'
            });
var format_ElPontdeSuertaVallFerrera_4 = new ol.format.GeoJSON();
var features_ElPontdeSuertaVallFerrera_4 = format_ElPontdeSuertaVallFerrera_4.readFeatures(json_ElPontdeSuertaVallFerrera_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElPontdeSuertaVallFerrera_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElPontdeSuertaVallFerrera_4.addFeatures(features_ElPontdeSuertaVallFerrera_4);
var lyr_ElPontdeSuertaVallFerrera_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElPontdeSuertaVallFerrera_4, 
                style: style_ElPontdeSuertaVallFerrera_4,
                popuplayertitle: "El Pont de Suert a Vall Ferrera",
                interactive: true,
                title: '<img src="styles/legend/ElPontdeSuertaVallFerrera_4.png" /> El Pont de Suert a Vall Ferrera'
            });
var format_ElPontdeSuertaEspot_5 = new ol.format.GeoJSON();
var features_ElPontdeSuertaEspot_5 = format_ElPontdeSuertaEspot_5.readFeatures(json_ElPontdeSuertaEspot_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElPontdeSuertaEspot_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElPontdeSuertaEspot_5.addFeatures(features_ElPontdeSuertaEspot_5);
var lyr_ElPontdeSuertaEspot_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElPontdeSuertaEspot_5, 
                style: style_ElPontdeSuertaEspot_5,
                popuplayertitle: "El Pont de Suert a Espot",
                interactive: true,
                title: '<img src="styles/legend/ElPontdeSuertaEspot_5.png" /> El Pont de Suert a Espot'
            });
var format_ElPontdeSuertaLlessui_6 = new ol.format.GeoJSON();
var features_ElPontdeSuertaLlessui_6 = format_ElPontdeSuertaLlessui_6.readFeatures(json_ElPontdeSuertaLlessui_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElPontdeSuertaLlessui_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElPontdeSuertaLlessui_6.addFeatures(features_ElPontdeSuertaLlessui_6);
var lyr_ElPontdeSuertaLlessui_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElPontdeSuertaLlessui_6, 
                style: style_ElPontdeSuertaLlessui_6,
                popuplayertitle: "El Pont de Suert a Llessui",
                interactive: true,
                title: '<img src="styles/legend/ElPontdeSuertaLlessui_6.png" /> El Pont de Suert a Llessui'
            });
var format_ElPontdeSuertaBaqueiraBeret_7 = new ol.format.GeoJSON();
var features_ElPontdeSuertaBaqueiraBeret_7 = format_ElPontdeSuertaBaqueiraBeret_7.readFeatures(json_ElPontdeSuertaBaqueiraBeret_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElPontdeSuertaBaqueiraBeret_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElPontdeSuertaBaqueiraBeret_7.addFeatures(features_ElPontdeSuertaBaqueiraBeret_7);
var lyr_ElPontdeSuertaBaqueiraBeret_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElPontdeSuertaBaqueiraBeret_7, 
                style: style_ElPontdeSuertaBaqueiraBeret_7,
                popuplayertitle: "El Pont de Suert a Baqueira-Beret",
                interactive: true,
                title: '<img src="styles/legend/ElPontdeSuertaBaqueiraBeret_7.png" /> El Pont de Suert a Baqueira-Beret'
            });
var format_ElPontdeSuertaBoiTall_8 = new ol.format.GeoJSON();
var features_ElPontdeSuertaBoiTall_8 = format_ElPontdeSuertaBoiTall_8.readFeatures(json_ElPontdeSuertaBoiTall_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElPontdeSuertaBoiTall_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElPontdeSuertaBoiTall_8.addFeatures(features_ElPontdeSuertaBoiTall_8);
var lyr_ElPontdeSuertaBoiTall_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElPontdeSuertaBoiTall_8, 
                style: style_ElPontdeSuertaBoiTall_8,
                popuplayertitle: "El Pont de Suert a Boi-Taüll",
                interactive: true,
                title: '<img src="styles/legend/ElPontdeSuertaBoiTall_8.png" /> El Pont de Suert a Boi-Taüll'
            });
var format_ElPontdeSuertaBenasque_9 = new ol.format.GeoJSON();
var features_ElPontdeSuertaBenasque_9 = format_ElPontdeSuertaBenasque_9.readFeatures(json_ElPontdeSuertaBenasque_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElPontdeSuertaBenasque_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElPontdeSuertaBenasque_9.addFeatures(features_ElPontdeSuertaBenasque_9);
var lyr_ElPontdeSuertaBenasque_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElPontdeSuertaBenasque_9, 
                style: style_ElPontdeSuertaBenasque_9,
                popuplayertitle: "El Pont de Suert a Benasque",
                interactive: true,
                title: '<img src="styles/legend/ElPontdeSuertaBenasque_9.png" /> El Pont de Suert a Benasque'
            });
var format_Municipis_10 = new ol.format.GeoJSON();
var features_Municipis_10 = format_Municipis_10.readFeatures(json_Municipis_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipis_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipis_10.addFeatures(features_Municipis_10);
var lyr_Municipis_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipis_10, 
                style: style_Municipis_10,
                popuplayertitle: "Municipis",
                interactive: true,
                title: '<img src="styles/legend/Municipis_10.png" /> Municipis'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_EspotaPortAin_1.setVisible(true);lyr_EspotaBoiTall_2.setVisible(true);lyr_ElPontdeSuertaAmpriuCerlerBenasque_3.setVisible(true);lyr_ElPontdeSuertaVallFerrera_4.setVisible(true);lyr_ElPontdeSuertaEspot_5.setVisible(true);lyr_ElPontdeSuertaLlessui_6.setVisible(true);lyr_ElPontdeSuertaBaqueiraBeret_7.setVisible(true);lyr_ElPontdeSuertaBoiTall_8.setVisible(true);lyr_ElPontdeSuertaBenasque_9.setVisible(true);lyr_Municipis_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_EspotaPortAin_1,lyr_EspotaBoiTall_2,lyr_ElPontdeSuertaAmpriuCerlerBenasque_3,lyr_ElPontdeSuertaVallFerrera_4,lyr_ElPontdeSuertaEspot_5,lyr_ElPontdeSuertaLlessui_6,lyr_ElPontdeSuertaBaqueiraBeret_7,lyr_ElPontdeSuertaBoiTall_8,lyr_ElPontdeSuertaBenasque_9,lyr_Municipis_10];
lyr_EspotaPortAin_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Longitud_km': 'Longitud_km', });
lyr_EspotaBoiTall_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Longitud_km': 'Longitud_km', });
lyr_ElPontdeSuertaAmpriuCerlerBenasque_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Longitud_km': 'Longitud_km', });
lyr_ElPontdeSuertaVallFerrera_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Longitud_km': 'Longitud_km', });
lyr_ElPontdeSuertaEspot_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Longitud_km': 'Longitud_km', });
lyr_ElPontdeSuertaLlessui_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Longitud_km': 'Longitud_km', });
lyr_ElPontdeSuertaBaqueiraBeret_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Longitud_km': 'Longitud_km', });
lyr_ElPontdeSuertaBoiTall_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Longitud_km': 'Longitud_km', });
lyr_ElPontdeSuertaBenasque_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Longitud_km': 'Longitud_km', });
lyr_Municipis_10.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', 'Superfíci': 'Superfíci', });
lyr_EspotaPortAin_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Longitud_km': '', });
lyr_EspotaBoiTall_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Longitud_km': '', });
lyr_ElPontdeSuertaAmpriuCerlerBenasque_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Longitud_km': '', });
lyr_ElPontdeSuertaVallFerrera_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Longitud_km': '', });
lyr_ElPontdeSuertaEspot_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Longitud_km': '', });
lyr_ElPontdeSuertaLlessui_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Longitud_km': '', });
lyr_ElPontdeSuertaBaqueiraBeret_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Longitud_km': '', });
lyr_ElPontdeSuertaBoiTall_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Longitud_km': '', });
lyr_ElPontdeSuertaBenasque_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Longitud_km': '', });
lyr_Municipis_10.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', 'Superfíci': '', });
lyr_EspotaPortAin_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Longitud_km': 'inline label - visible with data', });
lyr_EspotaBoiTall_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Longitud_km': 'inline label - visible with data', });
lyr_ElPontdeSuertaAmpriuCerlerBenasque_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Longitud_km': 'inline label - visible with data', });
lyr_ElPontdeSuertaVallFerrera_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Longitud_km': 'inline label - visible with data', });
lyr_ElPontdeSuertaEspot_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Longitud_km': 'inline label - visible with data', });
lyr_ElPontdeSuertaLlessui_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Longitud_km': 'inline label - visible with data', });
lyr_ElPontdeSuertaBaqueiraBeret_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Longitud_km': 'inline label - visible with data', });
lyr_ElPontdeSuertaBoiTall_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Longitud_km': 'inline label - visible with data', });
lyr_ElPontdeSuertaBenasque_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Longitud_km': 'inline label - visible with data', });
lyr_Municipis_10.set('fieldLabels', {'fid': 'hidden field', 'INSPIREID': 'hidden field', 'COUNTRY': 'hidden field', 'NATLEV': 'hidden field', 'NATLEVNAME': 'hidden field', 'NATCODE': 'inline label - visible with data', 'NAMEUNIT': 'no label', 'CODNUT1': 'hidden field', 'CODNUT2': 'hidden field', 'CODNUT3': 'hidden field', 'Superfíci': 'inline label - visible with data', });
lyr_Municipis_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});