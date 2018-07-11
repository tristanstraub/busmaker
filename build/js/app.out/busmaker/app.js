// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.app');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.tools.reader.edn');
goog.require('clojure.walk');
goog.require('module$home$tristan$me$projects$current$busmaker$node_modules$pako$index');
goog.require('goog.crypt.base64');
goog.require('busmaker.recipes');
goog.require('busmaker.widgets');
goog.require('busmaker.plan');
goog.require('busmaker.web');
goog.require('busmaker.main_bus');
goog.require('busmaker.pixi');
goog.require('impi.core');
cljs.core.enable_console_print_BANG_.call(null);
busmaker.app.default_value = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),busmaker.widgets.widgets,new cljs.core.Keyword(null,"recipes","recipes",-325236209),cljs.core.remove.call(null,(function (p1__5201_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,p1__5201_SHARP_);
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipes.recipes)),new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),cljs.core.PersistentHashSet.EMPTY], null);
if((typeof busmaker !== 'undefined') && (typeof busmaker.app !== 'undefined') && (typeof busmaker.app.state !== 'undefined')){
} else {
busmaker.app.state = cljs.core.atom.call(null,busmaker.app.default_value);
}
busmaker.app.recipe_selector = rum.core.build_defc.call(null,(function (state){
var recipe = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe","recipe",-17826617)], null)));
var recipes = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
return React.createElement("label",null,"Recipe",sablono.interpreter.create_element.call(null,"select",({"value": recipe, "onChange": ((function (recipe,recipes){
return (function (e){
var recipe__$1 = e.target.value;
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"recipe","recipe",-17826617),recipe__$1);
});})(recipe,recipes))
}),React.createElement("option",null,"Select recipe"),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe,recipes){
return (function busmaker$app$iter__5204(s__5205){
return (new cljs.core.LazySeq(null,((function (recipe,recipes){
return (function (){
var s__5205__$1 = s__5205;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5205__$1);
if(temp__5457__auto__){
var s__5205__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5205__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5205__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5207 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5206 = (0);
while(true){
if((i__5206 < size__4323__auto__)){
var recipe__$1 = cljs.core._nth.call(null,c__4322__auto__,i__5206);
cljs.core.chunk_append.call(null,b__5207,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)));

var G__5208 = (i__5206 + (1));
i__5206 = G__5208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5207),busmaker$app$iter__5204.call(null,cljs.core.chunk_rest.call(null,s__5205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5207),null);
}
} else {
var recipe__$1 = cljs.core.first.call(null,s__5205__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)),busmaker$app$iter__5204.call(null,cljs.core.rest.call(null,s__5205__$2)));
}
} else {
return null;
}
break;
}
});})(recipe,recipes))
,null,null));
});})(recipe,recipes))
;
return iter__4324__auto__.call(null,cljs.core.sort.call(null,recipes));
})())),React.createElement("button",({"onClick": ((function (recipe,recipes){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),cljs.core.conj,recipe);
});})(recipe,recipes))
}),"+"));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"recipe-selector");
busmaker.app.canvas = rum.core.build_defc.call(null,(function (state){
var solution = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solution","solution",-1727231491)], null)));
var widgets = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978)], null)));
var attrs5209 = busmaker.web.print_entities.call(null,state,solution,widgets);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs5209))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor"], null)], null),attrs5209)):({"className": "cursor"})),((cljs.core.map_QMARK_.call(null,attrs5209))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs5209)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"canvas");
busmaker.app.recipe_name_list = rum.core.build_defc.call(null,(function (state){
var recipe_names = new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state));
if(cljs.core.seq.call(null,recipe_names)){
return React.createElement("div",({"className": "card"}),React.createElement("h6",null,"Recipes"),React.createElement("ul",({"className": "components"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe_names){
return (function busmaker$app$iter__5212(s__5213){
return (new cljs.core.LazySeq(null,((function (recipe_names){
return (function (){
var s__5213__$1 = s__5213;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5213__$1);
if(temp__5457__auto__){
var s__5213__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5213__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5213__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5215 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5214 = (0);
while(true){
if((i__5214 < size__4323__auto__)){
var recipe_name = cljs.core._nth.call(null,c__4322__auto__,i__5214);
cljs.core.chunk_append.call(null,b__5215,React.createElement("li",({"key": recipe_name}),sablono.interpreter.interpret.call(null,recipe_name),React.createElement("button",({"onClick": ((function (i__5214,recipe_name,c__4322__auto__,size__4323__auto__,b__5215,s__5213__$2,temp__5457__auto__,recipe_names){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),cljs.core.disj,recipe_name);
});})(i__5214,recipe_name,c__4322__auto__,size__4323__auto__,b__5215,s__5213__$2,temp__5457__auto__,recipe_names))
}),"-")));

var G__5216 = (i__5214 + (1));
i__5214 = G__5216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5215),busmaker$app$iter__5212.call(null,cljs.core.chunk_rest.call(null,s__5213__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5215),null);
}
} else {
var recipe_name = cljs.core.first.call(null,s__5213__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": recipe_name}),sablono.interpreter.interpret.call(null,recipe_name),React.createElement("button",({"onClick": ((function (recipe_name,s__5213__$2,temp__5457__auto__,recipe_names){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),cljs.core.disj,recipe_name);
});})(recipe_name,s__5213__$2,temp__5457__auto__,recipe_names))
}),"-")),busmaker$app$iter__5212.call(null,cljs.core.rest.call(null,s__5213__$2)));
}
} else {
return null;
}
break;
}
});})(recipe_names))
,null,null));
});})(recipe_names))
;
return iter__4324__auto__.call(null,recipe_names);
})())));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"recipe-name-list");
busmaker.app.components = rum.core.build_defc.call(null,(function (state){
var recipe_names = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892)], null)));
if(cljs.core.seq.call(null,recipe_names)){
return React.createElement("div",({"className": "card"}),React.createElement("h6",null,"Components"),React.createElement("ul",({"className": "components"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe_names){
return (function busmaker$app$iter__5219(s__5220){
return (new cljs.core.LazySeq(null,((function (recipe_names){
return (function (){
var s__5220__$1 = s__5220;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5220__$1);
if(temp__5457__auto__){
var s__5220__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5220__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5220__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5222 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5221 = (0);
while(true){
if((i__5221 < size__4323__auto__)){
var ingredient = cljs.core._nth.call(null,c__4322__auto__,i__5221);
cljs.core.chunk_append.call(null,b__5222,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)));

var G__5223 = (i__5221 + (1));
i__5221 = G__5223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5222),busmaker$app$iter__5219.call(null,cljs.core.chunk_rest.call(null,s__5220__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5222),null);
}
} else {
var ingredient = cljs.core.first.call(null,s__5220__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)),busmaker$app$iter__5219.call(null,cljs.core.rest.call(null,s__5220__$2)));
}
} else {
return null;
}
break;
}
});})(recipe_names))
,null,null));
});})(recipe_names))
;
return iter__4324__auto__.call(null,cljs.core.sort.call(null,cljs.core.set.call(null,cljs.core.mapcat.call(null,busmaker.main_bus.ingredients_by_recipe,recipe_names))));
})())));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"components");
busmaker.app.entity_details = rum.core.build_defc.call(null,(function (state){
var entity = clojure.walk.keywordize_keys.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null))));
var attrs5224 = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),null,(1),null)),(function (){var iter__4324__auto__ = ((function (entity){
return (function busmaker$app$iter__5225(s__5226){
return (new cljs.core.LazySeq(null,((function (entity){
return (function (){
var s__5226__$1 = s__5226;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5226__$1);
if(temp__5457__auto__){
var s__5226__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5226__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5226__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5228 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5227 = (0);
while(true){
if((i__5227 < size__4323__auto__)){
var vec__5229 = cljs.core._nth.call(null,c__4322__auto__,i__5227);
var key = cljs.core.nth.call(null,vec__5229,(0),null);
var value = cljs.core.nth.call(null,vec__5229,(1),null);
cljs.core.chunk_append.call(null,b__5228,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null));

var G__5235 = (i__5227 + (1));
i__5227 = G__5235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5228),busmaker$app$iter__5225.call(null,cljs.core.chunk_rest.call(null,s__5226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5228),null);
}
} else {
var vec__5232 = cljs.core.first.call(null,s__5226__$2);
var key = cljs.core.nth.call(null,vec__5232,(0),null);
var value = cljs.core.nth.call(null,vec__5232,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null),busmaker$app$iter__5225.call(null,cljs.core.rest.call(null,s__5226__$2)));
}
} else {
return null;
}
break;
}
});})(entity))
,null,null));
});})(entity))
;
return iter__4324__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.first,entity));
})()))));
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs5224))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table","table-dark","table-striped","entity-details"], null)], null),attrs5224)):({"className": "table table-dark table-striped entity-details"})),((cljs.core.map_QMARK_.call(null,attrs5224))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs5224)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"entity-details");
busmaker.app.wrap_entities = (function busmaker$app$wrap_entities(entities){
return new cljs.core.PersistentArrayMap(null, 1, ["blueprint",new cljs.core.PersistentArrayMap(null, 4, ["entities",cljs.core.vec.call(null,entities),"icons",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["index",(1),"signal",new cljs.core.PersistentArrayMap(null, 2, ["name","assembling-machine-2","type","item"], null)], null)], null),"item","blueprint","version",(68721836034)], null)], null);
});
busmaker.app.encode_blueprint = (function busmaker$app$encode_blueprint(blueprint){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeByteArray(module$home$tristan$me$projects$current$busmaker$node_modules$pako$index["default"].deflate(JSON.stringify(cljs.core.clj__GT_js.call(null,blueprint)))))].join('');
});
busmaker.app.decode_blueprint = (function busmaker$app$decode_blueprint(blueprint){
return JSON.parse(module$home$tristan$me$projects$current$busmaker$node_modules$pako$index["default"].inflate(goog.crypt.base64.decodeStringToByteArray(cljs.core.subs.call(null,blueprint,(1))),({"to": "string"})));
});
busmaker.app.blueprint_encoded = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",({"className": "card"}),sablono.interpreter.create_element.call(null,"textarea",({"value": (function (){var solution = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solution","solution",-1727231491)], null)));
return busmaker.app.encode_blueprint.call(null,busmaker.app.wrap_entities.call(null,solution));
})(), "onClick": (function (e){
e.target.select();

return document.execCommand("copy");
}), "className": "blueprint-encoded"})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint-encoded");
busmaker.app.blueprint_decoded = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",({"className": "card"}),sablono.interpreter.create_element.call(null,"textarea",({"onClick": (function (e){
e.target.select();

return document.execCommand("copy");
}), "value": (function (){var solution = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solution","solution",-1727231491)], null)));
return JSON.stringify(cljs.core.clj__GT_js.call(null,busmaker.app.wrap_entities.call(null,solution)));
})(), "className": "blueprint-decoded"})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint-decoded");
busmaker.app.generate_button = rum.core.build_defc.call(null,(function (state){
return React.createElement("button",({"onClick": (function (_){
var solution = cljs.core.doall.call(null,busmaker.plan.plan.call(null,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"solution","solution",-1727231491),solution);
}), "disabled": cljs.core.not.call(null,cljs.core.seq.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892)], null)))))}),"Generate");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"generate-button");
busmaker.app.blueprint = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",({"className": "bg-light d-flex"}),React.createElement("div",({"className": "d-flex flex-row"}),React.createElement("div",({"className": "d-flex flex-column"}),(function (){var attrs5239 = busmaker.app.recipe_selector.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs5239))?sablono.interpreter.attributes.call(null,attrs5239):null),((cljs.core.map_QMARK_.call(null,attrs5239))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs5239)], null)));
})(),sablono.interpreter.interpret.call(null,busmaker.app.generate_button.call(null,state)),React.createElement("button",({"onClick": (function (_){
return cljs.core.reset_BANG_.call(null,state,busmaker.app.default_value);
})}),"Clear"),sablono.interpreter.interpret.call(null,busmaker.app.recipe_name_list.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_encoded.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.components.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_decoded.call(null,state))),(function (){var attrs5236 = busmaker.pixi.panel.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs5236))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d-flex","flex-column","flex-grow-1"], null)], null),attrs5236)):({"className": "d-flex flex-column flex-grow-1"})),((cljs.core.map_QMARK_.call(null,attrs5236))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs5237 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs5237))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs5237)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs5237))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs5237)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs5236),(function (){var attrs5238 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs5238))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs5238)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs5238))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs5238)], null)));
})()], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint");
busmaker.app.init = (function busmaker$app$init(){
return rum.core.mount.call(null,busmaker.app.blueprint.call(null,busmaker.app.state),document.getElementById("container"));
});
busmaker.app.reload_BANG_ = (function busmaker$app$reload_BANG_(){
return busmaker.app.init.call(null);
});

//# sourceMappingURL=app.js.map
