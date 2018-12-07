// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array esri/renderers/jsonUtils jimu/dijit/RendererChooser ../BaseEditor ./simpleEditors".split(" "),function(b,c,d,e,f,g){return b([f],{baseClass:"jimu-gp-editor-base jimu-gp-editor-fsre",editorName:"FeatureSetRendererEditor",postCreate:function(){this.inherited(arguments);var a={};if(this.param.renderer)a.renderer=d.fromJson(this.param.renderer);else if(a.type=this._getSymbolType(),!a.type){(new g.UnsupportEditor({message:this.nls.unSupportGeometryType})).placeAt(this.domNode);
return}a.fields=c.map(this.param.defaultValue.fields,function(a){return a.name});this.renderer=new e(a);this.renderer.placeAt(this.domNode);this.renderer.startup()},getValue:function(){return this.renderer?{renderer:this.renderer.getRenderer().toJson()}:null},_getSymbolType:function(){switch(this.param.defaultValue.geometryType){case "esriGeometryPoint":case "esriGeometryMultipoint":return"marker";case "esriGeometryPolyline":return"line";case "esriGeometryPolygon":return"fill"}}})});