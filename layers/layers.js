var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_amenity_school_bharuch_1 = new ol.format.GeoJSON();
var features_amenity_school_bharuch_1 = format_amenity_school_bharuch_1.readFeatures(json_amenity_school_bharuch_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_school_bharuch_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_school_bharuch_1.addFeatures(features_amenity_school_bharuch_1);
var lyr_amenity_school_bharuch_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_school_bharuch_1, 
                style: style_amenity_school_bharuch_1,
                popuplayertitle: "amenity_school_bharuch",
                interactive: true,
                title: '<img src="styles/legend/amenity_school_bharuch_1.png" /> amenity_school_bharuch'
            });
var format_landuse_residential_2 = new ol.format.GeoJSON();
var features_landuse_residential_2 = format_landuse_residential_2.readFeatures(json_landuse_residential_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_residential_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_residential_2.addFeatures(features_landuse_residential_2);
var lyr_landuse_residential_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_residential_2, 
                style: style_landuse_residential_2,
                popuplayertitle: "landuse_residential",
                interactive: true,
                title: '<img src="styles/legend/landuse_residential_2.png" /> landuse_residential'
            });

        var lyr_feature_3 = new ol.layer.Tile({
            'title': 'feature',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/23a52ecbf2c2f098258326a3b5feed14-a3bc6420004966e30afb61b8c69ec5a5/tiles/{z}/{x}/{y}'
            })
        });
var format_landuse_farmland_4 = new ol.format.GeoJSON();
var features_landuse_farmland_4 = format_landuse_farmland_4.readFeatures(json_landuse_farmland_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_farmland_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_farmland_4.addFeatures(features_landuse_farmland_4);
var lyr_landuse_farmland_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_farmland_4, 
                style: style_landuse_farmland_4,
                popuplayertitle: "landuse_farmland",
                interactive: true,
                title: '<img src="styles/legend/landuse_farmland_4.png" /> landuse_farmland'
            });
var format_amenity_hospital_5 = new ol.format.GeoJSON();
var features_amenity_hospital_5 = format_amenity_hospital_5.readFeatures(json_amenity_hospital_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_hospital_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_hospital_5.addFeatures(features_amenity_hospital_5);
var lyr_amenity_hospital_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_hospital_5, 
                style: style_amenity_hospital_5,
                popuplayertitle: "amenity_hospital",
                interactive: true,
                title: '<img src="styles/legend/amenity_hospital_5.png" /> amenity_hospital'
            });
var format_landuse_industrial_6 = new ol.format.GeoJSON();
var features_landuse_industrial_6 = format_landuse_industrial_6.readFeatures(json_landuse_industrial_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_industrial_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_industrial_6.addFeatures(features_landuse_industrial_6);
var lyr_landuse_industrial_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_industrial_6, 
                style: style_landuse_industrial_6,
                popuplayertitle: "landuse_industrial",
                interactive: true,
                title: '<img src="styles/legend/landuse_industrial_6.png" /> landuse_industrial'
            });
var format_try2_7 = new ol.format.GeoJSON();
var features_try2_7 = format_try2_7.readFeatures(json_try2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_try2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_try2_7.addFeatures(features_try2_7);
var lyr_try2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_try2_7, 
                style: style_try2_7,
                popuplayertitle: "try2",
                interactive: true,
                title: '<img src="styles/legend/try2_7.png" /> try2'
            });
var format_AlohaThreatZones_8 = new ol.format.GeoJSON();
var features_AlohaThreatZones_8 = format_AlohaThreatZones_8.readFeatures(json_AlohaThreatZones_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlohaThreatZones_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlohaThreatZones_8.addFeatures(features_AlohaThreatZones_8);
var lyr_AlohaThreatZones_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlohaThreatZones_8, 
                style: style_AlohaThreatZones_8,
                popuplayertitle: "Aloha Threat Zones",
                interactive: true,
                title: 'Aloha Threat Zones'
            });
var format_AlohaPoints_9 = new ol.format.GeoJSON();
var features_AlohaPoints_9 = format_AlohaPoints_9.readFeatures(json_AlohaPoints_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlohaPoints_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlohaPoints_9.addFeatures(features_AlohaPoints_9);
var lyr_AlohaPoints_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlohaPoints_9, 
                style: style_AlohaPoints_9,
                popuplayertitle: "Aloha Points",
                interactive: true,
                title: 'Aloha Points'
            });
var group_AR_Chlorine_N_22mph = new ol.layer.Group({
                                layers: [lyr_try2_7,lyr_AlohaThreatZones_8,lyr_AlohaPoints_9,],
                                fold: "open",
                                title: "AR_Chlorine_N_22mph"});

lyr_GoogleSatellite_0.setVisible(true);lyr_amenity_school_bharuch_1.setVisible(true);lyr_landuse_residential_2.setVisible(true);lyr_feature_3.setVisible(true);lyr_landuse_farmland_4.setVisible(true);lyr_amenity_hospital_5.setVisible(true);lyr_landuse_industrial_6.setVisible(true);lyr_try2_7.setVisible(true);lyr_AlohaThreatZones_8.setVisible(true);lyr_AlohaPoints_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_amenity_school_bharuch_1,lyr_landuse_residential_2,lyr_feature_3,lyr_landuse_farmland_4,lyr_amenity_hospital_5,lyr_landuse_industrial_6,group_AR_Chlorine_N_22mph];
lyr_amenity_school_bharuch_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', });
lyr_landuse_residential_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'residential': 'residential', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_landuse_farmland_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', });
lyr_amenity_hospital_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr:subdistrict': 'addr:subdistrict', 'name:etymology:wikidata': 'name:etymology:wikidata', 'website': 'website', 'operator:type': 'operator:type', 'healthcare:speciality': 'healthcare:speciality', 'email': 'email', 'healthcare': 'healthcare', 'addr:state': 'addr:state', 'addr:postcode': 'addr:postcode', 'addr:full': 'addr:full', 'addr:district': 'addr:district', });
lyr_landuse_industrial_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'power': 'power', 'railway': 'railway', 'man_made': 'man_made', 'website': 'website', 'addr:unit': 'addr:unit', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'type': 'type', });
lyr_try2_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'MarplotID': 'MarplotID', });
lyr_AlohaThreatZones_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'MarplotID': 'MarplotID', });
lyr_AlohaPoints_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'MarplotID': 'MarplotID', });
lyr_amenity_school_bharuch_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', });
lyr_landuse_residential_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'landuse': '', 'residential': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_landuse_farmland_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'landuse': '', });
lyr_amenity_hospital_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'addr:subdistrict': '', 'name:etymology:wikidata': '', 'website': '', 'operator:type': '', 'healthcare:speciality': '', 'email': '', 'healthcare': '', 'addr:state': '', 'addr:postcode': '', 'addr:full': '', 'addr:district': '', });
lyr_landuse_industrial_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'landuse': '', 'power': '', 'railway': '', 'man_made': '', 'website': '', 'addr:unit': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'type': '', });
lyr_try2_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'MarplotID': '', });
lyr_AlohaThreatZones_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'MarplotID': 'TextEdit', });
lyr_AlohaPoints_9.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'MarplotID': '', });
lyr_amenity_school_bharuch_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', });
lyr_landuse_residential_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'residential': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_landuse_farmland_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', });
lyr_amenity_hospital_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'addr:subdistrict': 'no label', 'name:etymology:wikidata': 'no label', 'website': 'no label', 'operator:type': 'no label', 'healthcare:speciality': 'no label', 'email': 'no label', 'healthcare': 'no label', 'addr:state': 'no label', 'addr:postcode': 'no label', 'addr:full': 'no label', 'addr:district': 'no label', });
lyr_landuse_industrial_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'power': 'no label', 'railway': 'no label', 'man_made': 'no label', 'website': 'no label', 'addr:unit': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'type': 'no label', });
lyr_try2_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'MarplotID': 'no label', });
lyr_AlohaThreatZones_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'MarplotID': 'no label', });
lyr_AlohaPoints_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'MarplotID': 'no label', });
lyr_AlohaPoints_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});