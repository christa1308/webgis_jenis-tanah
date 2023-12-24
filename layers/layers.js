var wms_layers = [];

var format_Adm_desa_Plantungan_0 = new ol.format.GeoJSON();
var features_Adm_desa_Plantungan_0 = format_Adm_desa_Plantungan_0.readFeatures(json_Adm_desa_Plantungan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adm_desa_Plantungan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adm_desa_Plantungan_0.addFeatures(features_Adm_desa_Plantungan_0);
var lyr_Adm_desa_Plantungan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adm_desa_Plantungan_0, 
                style: style_Adm_desa_Plantungan_0,
                interactive: true,
                title: '<img src="styles/legend/Adm_desa_Plantungan_0.png" /> Adm_desa_Plantungan'
            });
var format_Geologi_Plant_1 = new ol.format.GeoJSON();
var features_Geologi_Plant_1 = format_Geologi_Plant_1.readFeatures(json_Geologi_Plant_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geologi_Plant_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologi_Plant_1.addFeatures(features_Geologi_Plant_1);
var lyr_Geologi_Plant_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geologi_Plant_1, 
                style: style_Geologi_Plant_1,
                interactive: true,
                title: '<img src="styles/legend/Geologi_Plant_1.png" /> Geologi_Plant'
            });

lyr_Adm_desa_Plantungan_0.setVisible(true);lyr_Geologi_Plant_1.setVisible(true);
var layersList = [lyr_Adm_desa_Plantungan_0,lyr_Geologi_Plant_1];
lyr_Adm_desa_Plantungan_0.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas': 'Luas', });
lyr_Geologi_Plant_1.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'PROJECT': 'PROJECT', 'REGION': 'REGION', 'NAME': 'NAME', 'FORMATION': 'FORMATION', });
lyr_Adm_desa_Plantungan_0.set('fieldImages', {'KABUPATEN': '', 'DESA': '', 'KECAMATAN': '', 'Shape_Leng': '', 'Shape_Area': '', 'Luas': '', });
lyr_Geologi_Plant_1.set('fieldImages', {'SYMBOLS': '', 'NM_LEMBAR': '', 'NO_LEMBAR': '', 'PROJECT': '', 'REGION': '', 'NAME': '', 'FORMATION': '', });
lyr_Adm_desa_Plantungan_0.set('fieldLabels', {'KABUPATEN': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luas': 'no label', });
lyr_Geologi_Plant_1.set('fieldLabels', {'SYMBOLS': 'no label', 'NM_LEMBAR': 'no label', 'NO_LEMBAR': 'no label', 'PROJECT': 'no label', 'REGION': 'no label', 'NAME': 'no label', 'FORMATION': 'no label', });
lyr_Geologi_Plant_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});