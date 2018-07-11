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
busmaker.app.default_recipe_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["copper-plate",null,"iron-plate",null], null), null);
busmaker.app.default_value = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),busmaker.widgets.widgets,new cljs.core.Keyword(null,"recipes","recipes",-325236209),cljs.core.remove.call(null,(function (p1__8634_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,p1__8634_SHARP_);
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipes.recipes)),new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),busmaker.app.default_recipe_names,new cljs.core.Keyword(null,"solution","solution",-1727231491),busmaker.plan.plan.call(null,busmaker.app.default_recipe_names)], null);
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
return (function busmaker$app$iter__8637(s__8638){
return (new cljs.core.LazySeq(null,((function (recipe,recipes){
return (function (){
var s__8638__$1 = s__8638;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8638__$1);
if(temp__5457__auto__){
var s__8638__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8638__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8638__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8640 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8639 = (0);
while(true){
if((i__8639 < size__4323__auto__)){
var recipe__$1 = cljs.core._nth.call(null,c__4322__auto__,i__8639);
cljs.core.chunk_append.call(null,b__8640,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)));

var G__8641 = (i__8639 + (1));
i__8639 = G__8641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8640),busmaker$app$iter__8637.call(null,cljs.core.chunk_rest.call(null,s__8638__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8640),null);
}
} else {
var recipe__$1 = cljs.core.first.call(null,s__8638__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)),busmaker$app$iter__8637.call(null,cljs.core.rest.call(null,s__8638__$2)));
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
var attrs8642 = busmaker.web.print_entities.call(null,state,solution,widgets);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8642))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor"], null)], null),attrs8642)):({"className": "cursor"})),((cljs.core.map_QMARK_.call(null,attrs8642))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8642)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"canvas");
busmaker.app.recipe_name_list = rum.core.build_defc.call(null,(function (state){
var recipe_names = new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state));
if(cljs.core.seq.call(null,recipe_names)){
return React.createElement("div",({"className": "card"}),React.createElement("h6",null,"Recipes"),React.createElement("ul",({"className": "components"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe_names){
return (function busmaker$app$iter__8645(s__8646){
return (new cljs.core.LazySeq(null,((function (recipe_names){
return (function (){
var s__8646__$1 = s__8646;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8646__$1);
if(temp__5457__auto__){
var s__8646__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8646__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8646__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8648 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8647 = (0);
while(true){
if((i__8647 < size__4323__auto__)){
var recipe_name = cljs.core._nth.call(null,c__4322__auto__,i__8647);
cljs.core.chunk_append.call(null,b__8648,React.createElement("li",({"key": recipe_name}),sablono.interpreter.interpret.call(null,recipe_name),React.createElement("button",({"onClick": ((function (i__8647,recipe_name,c__4322__auto__,size__4323__auto__,b__8648,s__8646__$2,temp__5457__auto__,recipe_names){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),cljs.core.disj,recipe_name);
});})(i__8647,recipe_name,c__4322__auto__,size__4323__auto__,b__8648,s__8646__$2,temp__5457__auto__,recipe_names))
}),"-")));

var G__8649 = (i__8647 + (1));
i__8647 = G__8649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8648),busmaker$app$iter__8645.call(null,cljs.core.chunk_rest.call(null,s__8646__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8648),null);
}
} else {
var recipe_name = cljs.core.first.call(null,s__8646__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": recipe_name}),sablono.interpreter.interpret.call(null,recipe_name),React.createElement("button",({"onClick": ((function (recipe_name,s__8646__$2,temp__5457__auto__,recipe_names){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),cljs.core.disj,recipe_name);
});})(recipe_name,s__8646__$2,temp__5457__auto__,recipe_names))
}),"-")),busmaker$app$iter__8645.call(null,cljs.core.rest.call(null,s__8646__$2)));
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
return (function busmaker$app$iter__8652(s__8653){
return (new cljs.core.LazySeq(null,((function (recipe_names){
return (function (){
var s__8653__$1 = s__8653;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8653__$1);
if(temp__5457__auto__){
var s__8653__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8653__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8653__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8655 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8654 = (0);
while(true){
if((i__8654 < size__4323__auto__)){
var ingredient = cljs.core._nth.call(null,c__4322__auto__,i__8654);
cljs.core.chunk_append.call(null,b__8655,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)));

var G__8656 = (i__8654 + (1));
i__8654 = G__8656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8655),busmaker$app$iter__8652.call(null,cljs.core.chunk_rest.call(null,s__8653__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8655),null);
}
} else {
var ingredient = cljs.core.first.call(null,s__8653__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)),busmaker$app$iter__8652.call(null,cljs.core.rest.call(null,s__8653__$2)));
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
var attrs8657 = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),null,(1),null)),(function (){var iter__4324__auto__ = ((function (entity){
return (function busmaker$app$iter__8658(s__8659){
return (new cljs.core.LazySeq(null,((function (entity){
return (function (){
var s__8659__$1 = s__8659;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8659__$1);
if(temp__5457__auto__){
var s__8659__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8659__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8659__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8661 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8660 = (0);
while(true){
if((i__8660 < size__4323__auto__)){
var vec__8662 = cljs.core._nth.call(null,c__4322__auto__,i__8660);
var key = cljs.core.nth.call(null,vec__8662,(0),null);
var value = cljs.core.nth.call(null,vec__8662,(1),null);
cljs.core.chunk_append.call(null,b__8661,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null));

var G__8668 = (i__8660 + (1));
i__8660 = G__8668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8661),busmaker$app$iter__8658.call(null,cljs.core.chunk_rest.call(null,s__8659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8661),null);
}
} else {
var vec__8665 = cljs.core.first.call(null,s__8659__$2);
var key = cljs.core.nth.call(null,vec__8665,(0),null);
var value = cljs.core.nth.call(null,vec__8665,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null),busmaker$app$iter__8658.call(null,cljs.core.rest.call(null,s__8659__$2)));
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
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs8657))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table","table-dark","table-striped","entity-details"], null)], null),attrs8657)):({"className": "table table-dark table-striped entity-details"})),((cljs.core.map_QMARK_.call(null,attrs8657))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8657)], null)));
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
return React.createElement("div",({"className": "bg-light d-flex"}),React.createElement("div",({"className": "d-flex flex-row"}),React.createElement("div",({"className": "d-flex flex-column"}),(function (){var attrs8672 = busmaker.app.recipe_selector.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8672))?sablono.interpreter.attributes.call(null,attrs8672):null),((cljs.core.map_QMARK_.call(null,attrs8672))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8672)], null)));
})(),sablono.interpreter.interpret.call(null,busmaker.app.generate_button.call(null,state)),React.createElement("button",({"onClick": (function (_){
return cljs.core.reset_BANG_.call(null,state,busmaker.app.default_value);
})}),"Clear"),sablono.interpreter.interpret.call(null,busmaker.app.recipe_name_list.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_encoded.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.components.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_decoded.call(null,state))),(function (){var attrs8669 = busmaker.pixi.panel.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8669))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d-flex","flex-column","flex-grow-1"], null)], null),attrs8669)):({"className": "d-flex flex-column flex-grow-1"})),((cljs.core.map_QMARK_.call(null,attrs8669))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs8670 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8670))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8670)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8670))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8670)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8669),(function (){var attrs8671 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8671))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8671)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8671))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8671)], null)));
})()], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint");
busmaker.app.init = (function busmaker$app$init(){
return rum.core.mount.call(null,busmaker.app.blueprint.call(null,busmaker.app.state),document.getElementById("container"));
});
busmaker.app.reload_BANG_ = (function busmaker$app$reload_BANG_(){
return busmaker.app.init.call(null);
});
