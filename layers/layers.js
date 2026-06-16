var wms_layers = [];

var format_State_0 = new ol.format.GeoJSON();
var features_State_0 = format_State_0.readFeatures(json_State_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_0.addFeatures(features_State_0);
var lyr_State_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_State_0, 
                style: style_State_0,
                popuplayertitle: 'State',
                interactive: false,
                title: '<img src="styles/legend/State_0.png" /> State'
            });
var format_Transmission_Lines_1 = new ol.format.GeoJSON();
var features_Transmission_Lines_1 = format_Transmission_Lines_1.readFeatures(json_Transmission_Lines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transmission_Lines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transmission_Lines_1.addFeatures(features_Transmission_Lines_1);
var lyr_Transmission_Lines_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transmission_Lines_1, 
                style: style_Transmission_Lines_1,
                popuplayertitle: 'Transmission_Lines',
                interactive: false,
    title: 'Transmission_Lines<br />\
    <img src="styles/legend/Transmission_Lines_1_0.png" /> 345<br />\
    <img src="styles/legend/Transmission_Lines_1_1.png" /> 500<br />\
    <img src="styles/legend/Transmission_Lines_1_2.png" /> 735 AND ABOVE<br />' });
var format_Rural_Data_Centers_2 = new ol.format.GeoJSON();
var features_Rural_Data_Centers_2 = format_Rural_Data_Centers_2.readFeatures(json_Rural_Data_Centers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rural_Data_Centers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_Data_Centers_2.addFeatures(features_Rural_Data_Centers_2);
var lyr_Rural_Data_Centers_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rural_Data_Centers_2, 
                style: style_Rural_Data_Centers_2,
                popuplayertitle: 'Rural_Data_Centers',
                interactive: true,
                title: '<img src="styles/legend/Rural_Data_Centers_2.png" /> Rural_Data_Centers'
            });

lyr_State_0.setVisible(true);lyr_Transmission_Lines_1.setVisible(true);lyr_Rural_Data_Centers_2.setVisible(true);
var layersList = [lyr_State_0,lyr_Transmission_Lines_1,lyr_Rural_Data_Centers_2];
lyr_State_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'trees09': 'trees09', 'trees19': 'trees19', 'sales19': 'sales19', 'treeschang': 'treeschang', 'label': 'label', 'ruralfed': 'ruralfed', });
lyr_Transmission_Lines_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ID': 'ID', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'NAICS_CODE': 'NAICS_CODE', 'NAICS_DESC': 'NAICS_DESC', 'SOURCE': 'SOURCE', 'SOURCEDATE': 'SOURCEDATE', 'VAL_METHOD': 'VAL_METHOD', 'VAL_DATE': 'VAL_DATE', 'OWNER': 'OWNER', 'VOLTAGE': 'VOLTAGE', 'VOLT_CLASS': 'Voltage Class (kV)', 'INFERRED': 'INFERRED', 'SUB_1': 'SUB_1', 'SUB_2': 'SUB_2', 'Shape__Len': 'Shape__Len', });
lyr_Rural_Data_Centers_2.set('fieldAliases', {'fid': 'fid', 'city': 'City', 'state': 'State', 'status': 'Status', 'Rural': 'Rural', 'Facility': 'Facility', });
lyr_State_0.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'trees09': 'TextEdit', 'trees19': 'TextEdit', 'sales19': 'TextEdit', 'treeschang': 'TextEdit', 'label': 'TextEdit', 'ruralfed': 'TextEdit', });
lyr_Transmission_Lines_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ID': 'TextEdit', 'TYPE': 'TextEdit', 'STATUS': 'TextEdit', 'NAICS_CODE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCEDATE': 'DateTime', 'VAL_METHOD': 'TextEdit', 'VAL_DATE': 'DateTime', 'OWNER': 'TextEdit', 'VOLTAGE': 'TextEdit', 'VOLT_CLASS': 'TextEdit', 'INFERRED': 'TextEdit', 'SUB_1': 'TextEdit', 'SUB_2': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Rural_Data_Centers_2.set('fieldImages', {'fid': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'status': 'TextEdit', 'Rural': 'TextEdit', 'Facility': 'TextEdit', });
lyr_State_0.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'trees09': 'no label', 'trees19': 'no label', 'sales19': 'no label', 'treeschang': 'no label', 'label': 'no label', 'ruralfed': 'no label', });
lyr_Transmission_Lines_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'ID': 'no label', 'TYPE': 'no label', 'STATUS': 'no label', 'NAICS_CODE': 'no label', 'NAICS_DESC': 'no label', 'SOURCE': 'no label', 'SOURCEDATE': 'no label', 'VAL_METHOD': 'no label', 'VAL_DATE': 'no label', 'OWNER': 'no label', 'VOLTAGE': 'no label', 'VOLT_CLASS': 'no label', 'INFERRED': 'no label', 'SUB_1': 'no label', 'SUB_2': 'no label', 'Shape__Len': 'no label', });
lyr_Rural_Data_Centers_2.set('fieldLabels', {'fid': 'hidden field', 'city': 'inline label - visible with data', 'state': 'inline label - visible with data', 'status': 'inline label - visible with data', 'Rural': 'inline label - visible with data', 'Facility': 'inline label - visible with data', });
lyr_Rural_Data_Centers_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});