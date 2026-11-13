var wms_layers = [];


        var lyr_EsriGraydark_0 = new ol.layer.Tile({
            'title': 'Esri Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_stadt_zurich_grenze_1 = new ol.format.GeoJSON();
var features_stadt_zurich_grenze_1 = format_stadt_zurich_grenze_1.readFeatures(json_stadt_zurich_grenze_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stadt_zurich_grenze_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stadt_zurich_grenze_1.addFeatures(features_stadt_zurich_grenze_1);
var lyr_stadt_zurich_grenze_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stadt_zurich_grenze_1, 
                style: style_stadt_zurich_grenze_1,
                popuplayertitle: 'stadt_zurich_grenze',
                interactive: true,
                title: '<img src="styles/legend/stadt_zurich_grenze_1.png" /> stadt_zurich_grenze'
            });
var format_shoreline_valid_2 = new ol.format.GeoJSON();
var features_shoreline_valid_2 = format_shoreline_valid_2.readFeatures(json_shoreline_valid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shoreline_valid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shoreline_valid_2.addFeatures(features_shoreline_valid_2);
var lyr_shoreline_valid_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shoreline_valid_2, 
                style: style_shoreline_valid_2,
                popuplayertitle: 'shoreline_valid',
                interactive: true,
    title: 'shoreline_valid<br />\
    <img src="styles/legend/shoreline_valid_2_0.png" /> Official managed swimming area<br />\
    <img src="styles/legend/shoreline_valid_2_1.png" /> Full water access & recreation<br />\
    <img src="styles/legend/shoreline_valid_2_2.png" /> Shoreline access only<br />\
    <img src="styles/legend/shoreline_valid_2_3.png" /> No water access<br />' });
var format_photos_3 = new ol.format.GeoJSON();
var features_photos_3 = format_photos_3.readFeatures(json_photos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_photos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_3.addFeatures(features_photos_3);
var lyr_photos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_photos_3, 
                style: style_photos_3,
                popuplayertitle: 'photos',
                interactive: true,
                title: '<img src="styles/legend/photos_3.png" /> photos'
            });

lyr_EsriGraydark_0.setVisible(true);lyr_stadt_zurich_grenze_1.setVisible(true);lyr_shoreline_valid_2.setVisible(true);lyr_photos_3.setVisible(true);
var layersList = [lyr_EsriGraydark_0,lyr_stadt_zurich_grenze_1,lyr_shoreline_valid_2,lyr_photos_3];
lyr_stadt_zurich_grenze_1.set('fieldAliases', {'fid': 'fid', 'bfs': 'bfs', 'gemeindena': 'gemeindena', 'bezirksnam': 'bezirksnam', 'quartierna': 'quartierna', 'art_text': 'art_text', 'art_code': 'art_code', });
lyr_shoreline_valid_2.set('fieldAliases', {'fid': 'fid', 'group': 'group', });
lyr_photos_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Description': 'Description', 'photo': 'photo', });
lyr_stadt_zurich_grenze_1.set('fieldImages', {'fid': 'TextEdit', 'bfs': 'Range', 'gemeindena': 'TextEdit', 'bezirksnam': 'TextEdit', 'quartierna': 'TextEdit', 'art_text': 'TextEdit', 'art_code': 'Range', });
lyr_shoreline_valid_2.set('fieldImages', {'fid': 'TextEdit', 'group': 'TextEdit', });
lyr_photos_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Description': 'TextEdit', 'photo': 'ExternalResource', });
lyr_stadt_zurich_grenze_1.set('fieldLabels', {'fid': 'no label', 'bfs': 'no label', 'gemeindena': 'no label', 'bezirksnam': 'no label', 'quartierna': 'no label', 'art_text': 'no label', 'art_code': 'no label', });
lyr_shoreline_valid_2.set('fieldLabels', {'fid': 'no label', 'group': 'no label', });
lyr_photos_3.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'Description': 'inline label - always visible', 'photo': 'inline label - always visible', });
lyr_photos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});