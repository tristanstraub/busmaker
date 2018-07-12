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
busmaker.app.empty_value = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),busmaker.widgets.widgets,new cljs.core.Keyword(null,"recipes","recipes",-325236209),cljs.core.remove.call(null,(function (p1__8646_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,p1__8646_SHARP_);
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipes.recipes))], null);
busmaker.app.default_factories = (function busmaker$app$default_factories(recipe_names){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__8647_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8647_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"facility","facility",-2118099900),busmaker.main_bus.factory_type.call(null,p1__8647_SHARP_)], null)],null));
}),cljs.core.filter.call(null,busmaker.main_bus.created_QMARK_,new cljs.core.Keyword(null,"products","products",1876973544).cljs$core$IFn$_invoke$arity$1(busmaker.main_bus.products.call(null,recipe_names)))));
});
busmaker.app.default_value = cljs.core.merge.call(null,busmaker.app.empty_value,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),busmaker.app.default_recipe_names,new cljs.core.Keyword(null,"factories","factories",1443149712),busmaker.app.default_factories.call(null,busmaker.app.default_recipe_names),new cljs.core.Keyword(null,"solution","solution",-1727231491),busmaker.plan.plan.call(null,busmaker.app.default_recipe_names,busmaker.app.default_factories.call(null,busmaker.app.default_recipe_names))], null));
if((typeof busmaker !== 'undefined') && (typeof busmaker.app !== 'undefined') && (typeof busmaker.app.state !== 'undefined')){
} else {
busmaker.app.state = cljs.core.atom.call(null,busmaker.app.default_value);
}
busmaker.app.solve_BANG_ = (function busmaker$app$solve_BANG_(state){
var solution = cljs.core.doall.call(null,busmaker.plan.plan.call(null,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"factories","factories",1443149712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"solution","solution",-1727231491),solution);
});
busmaker.app.recipe_selector = rum.core.build_defc.call(null,(function (state){
var recipe = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe","recipe",-17826617)], null)));
var recipes = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
return React.createElement("label",null,"Recipe",sablono.interpreter.create_element.call(null,"select",({"value": recipe, "onChange": ((function (recipe,recipes){
return (function (e){
var recipe__$1 = e.target.value;
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"recipe","recipe",-17826617),recipe__$1);
});})(recipe,recipes))
}),React.createElement("option",null,"Select recipe"),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe,recipes){
return (function busmaker$app$iter__8651(s__8652){
return (new cljs.core.LazySeq(null,((function (recipe,recipes){
return (function (){
var s__8652__$1 = s__8652;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8652__$1);
if(temp__5457__auto__){
var s__8652__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8652__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8652__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8654 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8653 = (0);
while(true){
if((i__8653 < size__4323__auto__)){
var recipe__$1 = cljs.core._nth.call(null,c__4322__auto__,i__8653);
cljs.core.chunk_append.call(null,b__8654,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)));

var G__8655 = (i__8653 + (1));
i__8653 = G__8655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8654),busmaker$app$iter__8651.call(null,cljs.core.chunk_rest.call(null,s__8652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8654),null);
}
} else {
var recipe__$1 = cljs.core.first.call(null,s__8652__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)),busmaker$app$iter__8651.call(null,cljs.core.rest.call(null,s__8652__$2)));
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
})())),React.createElement("button",({"disabled": cljs.core.not.call(null,cljs.core.seq.call(null,recipe)), "onClick": ((function (recipe,recipes){
return (function (_){
var recipe_names = cljs.core.conj.call(null,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),recipe);
cljs.core.swap_BANG_.call(null,state,((function (recipe_names,recipe,recipes){
return (function (p1__8648_SHARP_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,p1__8648_SHARP_,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),recipe_names),new cljs.core.Keyword(null,"factories","factories",1443149712),((function (recipe_names,recipe,recipes){
return (function (factories){
return cljs.core.merge.call(null,busmaker.app.default_factories.call(null,recipe_names),factories);
});})(recipe_names,recipe,recipes))
);
});})(recipe_names,recipe,recipes))
);

return busmaker.app.solve_BANG_.call(null,state);
});})(recipe,recipes))
}),"+"));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"recipe-selector");
busmaker.app.canvas = rum.core.build_defc.call(null,(function (state){
var solution = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solution","solution",-1727231491)], null)));
var widgets = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978)], null)));
var attrs8656 = busmaker.web.print_entities.call(null,state,solution,widgets);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8656))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor"], null)], null),attrs8656)):({"className": "cursor"})),((cljs.core.map_QMARK_.call(null,attrs8656))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8656)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"canvas");
busmaker.app.recipe_name_list = rum.core.build_defc.call(null,(function (state){
var recipe_names = new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,state));
if(cljs.core.seq.call(null,recipe_names)){
return React.createElement("div",({"className": "card"}),React.createElement("h6",null,"Recipes"),React.createElement("ul",({"className": "components"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe_names){
return (function busmaker$app$iter__8660(s__8661){
return (new cljs.core.LazySeq(null,((function (recipe_names){
return (function (){
var s__8661__$1 = s__8661;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8661__$1);
if(temp__5457__auto__){
var s__8661__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8661__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8661__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8663 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8662 = (0);
while(true){
if((i__8662 < size__4323__auto__)){
var recipe_name = cljs.core._nth.call(null,c__4322__auto__,i__8662);
cljs.core.chunk_append.call(null,b__8663,React.createElement("li",({"key": recipe_name}),sablono.interpreter.interpret.call(null,recipe_name),React.createElement("button",({"onClick": ((function (i__8662,recipe_name,c__4322__auto__,size__4323__auto__,b__8663,s__8661__$2,temp__5457__auto__,recipe_names){
return (function (_){
cljs.core.swap_BANG_.call(null,state,((function (i__8662,recipe_name,c__4322__auto__,size__4323__auto__,b__8663,s__8661__$2,temp__5457__auto__,recipe_names){
return (function (p1__8657_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__8657_SHARP_,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),cljs.core.disj,recipe_name),new cljs.core.Keyword(null,"factories","factories",1443149712),cljs.core.dissoc,recipe_name);
});})(i__8662,recipe_name,c__4322__auto__,size__4323__auto__,b__8663,s__8661__$2,temp__5457__auto__,recipe_names))
);

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8662,recipe_name,c__4322__auto__,size__4323__auto__,b__8663,s__8661__$2,temp__5457__auto__,recipe_names))
}),"-")));

var G__8664 = (i__8662 + (1));
i__8662 = G__8664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8663),busmaker$app$iter__8660.call(null,cljs.core.chunk_rest.call(null,s__8661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8663),null);
}
} else {
var recipe_name = cljs.core.first.call(null,s__8661__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": recipe_name}),sablono.interpreter.interpret.call(null,recipe_name),React.createElement("button",({"onClick": ((function (recipe_name,s__8661__$2,temp__5457__auto__,recipe_names){
return (function (_){
cljs.core.swap_BANG_.call(null,state,((function (recipe_name,s__8661__$2,temp__5457__auto__,recipe_names){
return (function (p1__8657_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__8657_SHARP_,new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892),cljs.core.disj,recipe_name),new cljs.core.Keyword(null,"factories","factories",1443149712),cljs.core.dissoc,recipe_name);
});})(recipe_name,s__8661__$2,temp__5457__auto__,recipe_names))
);

return busmaker.app.solve_BANG_.call(null,state);
});})(recipe_name,s__8661__$2,temp__5457__auto__,recipe_names))
}),"-")),busmaker$app$iter__8660.call(null,cljs.core.rest.call(null,s__8661__$2)));
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
busmaker.app.facilities = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stone-furnace","electric-furnace","steel-furnace","oil-refinery","chemical-plant"], null);
busmaker.app.facility_selector = rum.core.build_defc.call(null,(function (state,ingredient,facility){
return sablono.interpreter.create_element.call(null,"select",({"value": facility, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900)], null),e.target.value);

busmaker.app.solve_BANG_.call(null,state);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"solving","solving",-175043197));
})}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = (function busmaker$app$iter__8665(s__8666){
return (new cljs.core.LazySeq(null,(function (){
var s__8666__$1 = s__8666;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8666__$1);
if(temp__5457__auto__){
var s__8666__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8666__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8666__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8668 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8667 = (0);
while(true){
if((i__8667 < size__4323__auto__)){
var facility__$1 = cljs.core._nth.call(null,c__4322__auto__,i__8667);
cljs.core.chunk_append.call(null,b__8668,React.createElement("option",({"key": facility__$1, "value": facility__$1}),sablono.interpreter.interpret.call(null,facility__$1)));

var G__8669 = (i__8667 + (1));
i__8667 = G__8669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8668),busmaker$app$iter__8665.call(null,cljs.core.chunk_rest.call(null,s__8666__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8668),null);
}
} else {
var facility__$1 = cljs.core.first.call(null,s__8666__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": facility__$1, "value": facility__$1}),sablono.interpreter.interpret.call(null,facility__$1)),busmaker$app$iter__8665.call(null,cljs.core.rest.call(null,s__8666__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,busmaker.app.facilities);
})()));
}),null,"facility-selector");
busmaker.app.factories = rum.core.build_defc.call(null,(function (state){
var factories = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712)], null)));
var recipe_names = cljs.core.keys.call(null,factories);
var products = cljs.core.filter.call(null,((function (factories,recipe_names){
return (function (p1__8670_SHARP_){
return busmaker.main_bus.created_QMARK_.call(null,p1__8670_SHARP_);
});})(factories,recipe_names))
,new cljs.core.Keyword(null,"products","products",1876973544).cljs$core$IFn$_invoke$arity$1(busmaker.main_bus.products.call(null,recipe_names)));
if(cljs.core.seq.call(null,factories)){
return React.createElement("div",({"className": "card"}),React.createElement("table",({"className": "components table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Recipe"),React.createElement("th",null,"Facility"),React.createElement("th",null,"Count"))),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (factories,recipe_names,products){
return (function busmaker$app$iter__8673(s__8674){
return (new cljs.core.LazySeq(null,((function (factories,recipe_names,products){
return (function (){
var s__8674__$1 = s__8674;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8674__$1);
if(temp__5457__auto__){
var s__8674__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8674__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8674__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8676 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8675 = (0);
while(true){
if((i__8675 < size__4323__auto__)){
var ingredient = cljs.core._nth.call(null,c__4322__auto__,i__8675);
var map__8677 = cljs.core.get.call(null,factories,ingredient);
var map__8677__$1 = ((((!((map__8677 == null)))?(((((map__8677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8677):map__8677);
var facility = cljs.core.get.call(null,map__8677__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8677__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.chunk_append.call(null,b__8676,React.createElement("tr",({"key": ingredient}),(function (){var attrs8679 = ingredient;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8679))?sablono.interpreter.attributes.call(null,attrs8679):null),((cljs.core.map_QMARK_.call(null,attrs8679))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8679)], null)));
})(),(function (){var attrs8680 = busmaker.app.facility_selector.call(null,state,ingredient,facility);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8680))?sablono.interpreter.attributes.call(null,attrs8680):null),((cljs.core.map_QMARK_.call(null,attrs8680))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8680)], null)));
})(),React.createElement("td",null,sablono.interpreter.create_element.call(null,"input",({"type": "number", "value": n, "onChange": ((function (i__8675,map__8677,map__8677__$1,facility,n,ingredient,c__4322__auto__,size__4323__auto__,b__8676,s__8674__$2,temp__5457__auto__,factories,recipe_names,products){
return (function (e){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712),ingredient,new cljs.core.Keyword(null,"n","n",562130025)], null),parseInt(e.target.value));

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8675,map__8677,map__8677__$1,facility,n,ingredient,c__4322__auto__,size__4323__auto__,b__8676,s__8674__$2,temp__5457__auto__,factories,recipe_names,products))
})))));

var G__8683 = (i__8675 + (1));
i__8675 = G__8683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8676),busmaker$app$iter__8673.call(null,cljs.core.chunk_rest.call(null,s__8674__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8676),null);
}
} else {
var ingredient = cljs.core.first.call(null,s__8674__$2);
var map__8681 = cljs.core.get.call(null,factories,ingredient);
var map__8681__$1 = ((((!((map__8681 == null)))?(((((map__8681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8681):map__8681);
var facility = cljs.core.get.call(null,map__8681__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8681__$1,new cljs.core.Keyword(null,"n","n",562130025));
return cljs.core.cons.call(null,React.createElement("tr",({"key": ingredient}),(function (){var attrs8679 = ingredient;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8679))?sablono.interpreter.attributes.call(null,attrs8679):null),((cljs.core.map_QMARK_.call(null,attrs8679))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8679)], null)));
})(),(function (){var attrs8680 = busmaker.app.facility_selector.call(null,state,ingredient,facility);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8680))?sablono.interpreter.attributes.call(null,attrs8680):null),((cljs.core.map_QMARK_.call(null,attrs8680))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8680)], null)));
})(),React.createElement("td",null,sablono.interpreter.create_element.call(null,"input",({"type": "number", "value": n, "onChange": ((function (map__8681,map__8681__$1,facility,n,ingredient,s__8674__$2,temp__5457__auto__,factories,recipe_names,products){
return (function (e){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712),ingredient,new cljs.core.Keyword(null,"n","n",562130025)], null),parseInt(e.target.value));

return busmaker.app.solve_BANG_.call(null,state);
});})(map__8681,map__8681__$1,facility,n,ingredient,s__8674__$2,temp__5457__auto__,factories,recipe_names,products))
})))),busmaker$app$iter__8673.call(null,cljs.core.rest.call(null,s__8674__$2)));
}
} else {
return null;
}
break;
}
});})(factories,recipe_names,products))
,null,null));
});})(factories,recipe_names,products))
;
return iter__4324__auto__.call(null,cljs.core.reverse.call(null,products));
})()))));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"factories");
busmaker.app.components = rum.core.build_defc.call(null,(function (state){
var recipe_names = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892)], null)));
if(cljs.core.seq.call(null,recipe_names)){
return React.createElement("div",({"className": "card"}),React.createElement("h6",null,"Components"),React.createElement("ul",({"className": "components"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe_names){
return (function busmaker$app$iter__8686(s__8687){
return (new cljs.core.LazySeq(null,((function (recipe_names){
return (function (){
var s__8687__$1 = s__8687;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8687__$1);
if(temp__5457__auto__){
var s__8687__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8687__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8687__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8689 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8688 = (0);
while(true){
if((i__8688 < size__4323__auto__)){
var ingredient = cljs.core._nth.call(null,c__4322__auto__,i__8688);
cljs.core.chunk_append.call(null,b__8689,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)));

var G__8690 = (i__8688 + (1));
i__8688 = G__8690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8689),busmaker$app$iter__8686.call(null,cljs.core.chunk_rest.call(null,s__8687__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8689),null);
}
} else {
var ingredient = cljs.core.first.call(null,s__8687__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)),busmaker$app$iter__8686.call(null,cljs.core.rest.call(null,s__8687__$2)));
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
var attrs8691 = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),null,(1),null)),(function (){var iter__4324__auto__ = ((function (entity){
return (function busmaker$app$iter__8692(s__8693){
return (new cljs.core.LazySeq(null,((function (entity){
return (function (){
var s__8693__$1 = s__8693;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8693__$1);
if(temp__5457__auto__){
var s__8693__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8693__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8693__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8695 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8694 = (0);
while(true){
if((i__8694 < size__4323__auto__)){
var vec__8696 = cljs.core._nth.call(null,c__4322__auto__,i__8694);
var key = cljs.core.nth.call(null,vec__8696,(0),null);
var value = cljs.core.nth.call(null,vec__8696,(1),null);
cljs.core.chunk_append.call(null,b__8695,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null));

var G__8702 = (i__8694 + (1));
i__8694 = G__8702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8695),busmaker$app$iter__8692.call(null,cljs.core.chunk_rest.call(null,s__8693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8695),null);
}
} else {
var vec__8699 = cljs.core.first.call(null,s__8693__$2);
var key = cljs.core.nth.call(null,vec__8699,(0),null);
var value = cljs.core.nth.call(null,vec__8699,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null),busmaker$app$iter__8692.call(null,cljs.core.rest.call(null,s__8693__$2)));
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
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs8691))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table","table-dark","table-striped","entity-details"], null)], null),attrs8691)):({"className": "table table-dark table-striped entity-details"})),((cljs.core.map_QMARK_.call(null,attrs8691))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8691)], null)));
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
return busmaker.app.solve_BANG_.call(null,state);
}), "disabled": cljs.core.not.call(null,cljs.core.seq.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892)], null)))))}),"Generate");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"generate-button");
busmaker.app.blueprint = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",({"className": "bg-light d-flex"}),React.createElement("div",({"className": "d-flex flex-row"}),React.createElement("div",({"className": "d-flex flex-column"}),(function (){var attrs8706 = busmaker.app.recipe_selector.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8706))?sablono.interpreter.attributes.call(null,attrs8706):null),((cljs.core.map_QMARK_.call(null,attrs8706))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8706)], null)));
})(),React.createElement("button",({"onClick": (function (_){
return cljs.core.reset_BANG_.call(null,state,busmaker.app.empty_value);
})}),"Clear"),sablono.interpreter.interpret.call(null,busmaker.app.recipe_name_list.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.factories.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_encoded.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.components.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_decoded.call(null,state))),(function (){var attrs8703 = busmaker.pixi.panel.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8703))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d-flex","flex-column","flex-grow-1"], null)], null),attrs8703)):({"className": "d-flex flex-column flex-grow-1"})),((cljs.core.map_QMARK_.call(null,attrs8703))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs8704 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8704))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8704)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8704))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8704)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8703),(function (){var attrs8705 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8705))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8705)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8705))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8705)], null)));
})()], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint");
busmaker.app.init = (function busmaker$app$init(){
return rum.core.mount.call(null,busmaker.app.blueprint.call(null,busmaker.app.state),document.getElementById("container"));
});
busmaker.app.reload_BANG_ = (function busmaker$app$reload_BANG_(){
return busmaker.app.init.call(null);
});
