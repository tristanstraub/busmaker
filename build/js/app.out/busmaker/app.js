// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.app');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.reader');
goog.require('busmaker.template');
goog.require('cljs.tools.reader.edn');
goog.require('clojure.walk');
goog.require('module$home$tristan$me$projects$busmaker$node_modules$pako$index');
goog.require('goog.crypt.base64');
goog.require('busmaker.recipes');
goog.require('busmaker.plan');
goog.require('busmaker.web');
goog.require('busmaker.main_bus');
goog.require('busmaker.pixi');
goog.require('busmaker.state');
goog.require('busmaker.bus');
goog.require('busmaker.recipe_data');
goog.require('impi.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Set `key' in browser's localStorage to `val`.
 */
busmaker.app.set_item_BANG_ = (function busmaker$app$set_item_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
/**
 * Returns value of `key' from browser's localStorage.
 */
busmaker.app.get_item = (function busmaker$app$get_item(key){
return window.localStorage.getItem(key);
});
/**
 * Remove the browser's localStorage value for the given `key`
 */
busmaker.app.remove_item_BANG_ = (function busmaker$app$remove_item_BANG_(key){
return window.localStorage.removeItem(key);
});
if((typeof busmaker !== 'undefined') && (typeof busmaker.app !== 'undefined') && (typeof busmaker.app.state !== 'undefined')){
} else {
busmaker.app.state = cljs.core.atom.call(null,busmaker.state.default_state.call(null));
}
busmaker.app.solve_BANG_ = (function busmaker$app$solve_BANG_(state){
var solution = cljs.core.doall.call(null,busmaker.plan.plan.call(null,new cljs.core.Keyword(null,"factories","factories",1443149712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"solution","solution",-1727231491),solution);
});
busmaker.app.recipe_selector = rum.core.build_defc.call(null,(function (state){
var recipe = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe","recipe",-17826617)], null)));
var recipes = cljs.core.remove.call(null,((function (recipe){
return (function (p1__8748_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,p1__8748_SHARP_);
});})(recipe))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipe_data.recipes));
return React.createElement("label",null,"Recipe",sablono.interpreter.create_element.call(null,"select",({"value": recipe, "onChange": ((function (recipe,recipes){
return (function (e){
var recipe__$1 = e.target.value;
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"recipe","recipe",-17826617),recipe__$1);
});})(recipe,recipes))
}),React.createElement("option",null,"Select recipe"),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe,recipes){
return (function busmaker$app$iter__8751(s__8752){
return (new cljs.core.LazySeq(null,((function (recipe,recipes){
return (function (){
var s__8752__$1 = s__8752;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8752__$1);
if(temp__5457__auto__){
var s__8752__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8752__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8752__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8754 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8753 = (0);
while(true){
if((i__8753 < size__4323__auto__)){
var recipe__$1 = cljs.core._nth.call(null,c__4322__auto__,i__8753);
cljs.core.chunk_append.call(null,b__8754,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)));

var G__8755 = (i__8753 + (1));
i__8753 = G__8755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8754),busmaker$app$iter__8751.call(null,cljs.core.chunk_rest.call(null,s__8752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8754),null);
}
} else {
var recipe__$1 = cljs.core.first.call(null,s__8752__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)),busmaker$app$iter__8751.call(null,cljs.core.rest.call(null,s__8752__$2)));
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
cljs.core.swap_BANG_.call(null,state,busmaker.state.add_recipe,recipe);

return busmaker.app.solve_BANG_.call(null,state);
});})(recipe,recipes))
}),"+"));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"recipe-selector");
busmaker.app.facilities = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stone-furnace","electric-furnace","steel-furnace","oil-refinery","chemical-plant","assembling-machine-1","assembling-machine-2","lab"], null);
busmaker.app.facility_selector = rum.core.build_defc.call(null,(function (state,p__8756){
var map__8757 = p__8756;
var map__8757__$1 = ((((!((map__8757 == null)))?(((((map__8757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8757):map__8757);
var factory = map__8757__$1;
var facility = cljs.core.get.call(null,map__8757__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return sablono.interpreter.create_element.call(null,"select",({"value": facility, "onChange": ((function (map__8757,map__8757__$1,factory,facility){
return (function (e){
cljs.core.swap_BANG_.call(null,state,busmaker.state.swap_facility,factory,e.target.value);

return busmaker.app.solve_BANG_.call(null,state);
});})(map__8757,map__8757__$1,factory,facility))
}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (map__8757,map__8757__$1,factory,facility){
return (function busmaker$app$iter__8759(s__8760){
return (new cljs.core.LazySeq(null,((function (map__8757,map__8757__$1,factory,facility){
return (function (){
var s__8760__$1 = s__8760;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8760__$1);
if(temp__5457__auto__){
var s__8760__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8760__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8760__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8762 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8761 = (0);
while(true){
if((i__8761 < size__4323__auto__)){
var facility__$1 = cljs.core._nth.call(null,c__4322__auto__,i__8761);
cljs.core.chunk_append.call(null,b__8762,React.createElement("option",({"key": facility__$1, "value": facility__$1}),sablono.interpreter.interpret.call(null,facility__$1)));

var G__8763 = (i__8761 + (1));
i__8761 = G__8763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8762),busmaker$app$iter__8759.call(null,cljs.core.chunk_rest.call(null,s__8760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8762),null);
}
} else {
var facility__$1 = cljs.core.first.call(null,s__8760__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": facility__$1, "value": facility__$1}),sablono.interpreter.interpret.call(null,facility__$1)),busmaker$app$iter__8759.call(null,cljs.core.rest.call(null,s__8760__$2)));
}
} else {
return null;
}
break;
}
});})(map__8757,map__8757__$1,factory,facility))
,null,null));
});})(map__8757,map__8757__$1,factory,facility))
;
return iter__4324__auto__.call(null,busmaker.app.facilities);
})()));
}),null,"facility-selector");
busmaker.app.bus = rum.core.build_defc.call(null,(function (state){
var factories = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712)], null)));
var bus_outputs = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584)], null)));
if(cljs.core.seq.call(null,bus_outputs)){
return React.createElement("div",({"className": "card"}),React.createElement("table",({"className": "components table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Output"),React.createElement("th",null,"Bus index"),React.createElement("th",null))),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (factories,bus_outputs){
return (function busmaker$app$iter__8766(s__8767){
return (new cljs.core.LazySeq(null,((function (factories,bus_outputs){
return (function (){
var s__8767__$1 = s__8767;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8767__$1);
if(temp__5457__auto__){
var s__8767__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8767__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8767__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8769 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8768 = (0);
while(true){
if((i__8768 < size__4323__auto__)){
var vec__8770 = cljs.core._nth.call(null,c__4322__auto__,i__8768);
var bus_index = cljs.core.nth.call(null,vec__8770,(0),null);
var output = cljs.core.nth.call(null,vec__8770,(1),null);
cljs.core.chunk_append.call(null,b__8769,React.createElement("tr",({"key": bus_index}),(function (){var attrs8773 = output;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8773))?sablono.interpreter.attributes.call(null,attrs8773):null),((cljs.core.map_QMARK_.call(null,attrs8773))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8773)], null)));
})(),(function (){var attrs8774 = bus_index;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8774))?sablono.interpreter.attributes.call(null,attrs8774):null),((cljs.core.map_QMARK_.call(null,attrs8774))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8774)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (i__8768,vec__8770,bus_index,output,c__4322__auto__,size__4323__auto__,b__8769,s__8767__$2,temp__5457__auto__,factories,bus_outputs){
return (function (_){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_bus,output);

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8768,vec__8770,bus_index,output,c__4322__auto__,size__4323__auto__,b__8769,s__8767__$2,temp__5457__auto__,factories,bus_outputs))
}),"-"))));

var G__8778 = (i__8768 + (1));
i__8768 = G__8778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8769),busmaker$app$iter__8766.call(null,cljs.core.chunk_rest.call(null,s__8767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8769),null);
}
} else {
var vec__8775 = cljs.core.first.call(null,s__8767__$2);
var bus_index = cljs.core.nth.call(null,vec__8775,(0),null);
var output = cljs.core.nth.call(null,vec__8775,(1),null);
return cljs.core.cons.call(null,React.createElement("tr",({"key": bus_index}),(function (){var attrs8773 = output;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8773))?sablono.interpreter.attributes.call(null,attrs8773):null),((cljs.core.map_QMARK_.call(null,attrs8773))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8773)], null)));
})(),(function (){var attrs8774 = bus_index;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8774))?sablono.interpreter.attributes.call(null,attrs8774):null),((cljs.core.map_QMARK_.call(null,attrs8774))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8774)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (vec__8775,bus_index,output,s__8767__$2,temp__5457__auto__,factories,bus_outputs){
return (function (_){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_bus,output);

return busmaker.app.solve_BANG_.call(null,state);
});})(vec__8775,bus_index,output,s__8767__$2,temp__5457__auto__,factories,bus_outputs))
}),"-"))),busmaker$app$iter__8766.call(null,cljs.core.rest.call(null,s__8767__$2)));
}
} else {
return null;
}
break;
}
});})(factories,bus_outputs))
,null,null));
});})(factories,bus_outputs))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,bus_outputs));
})()))));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"bus");
busmaker.app.factories = rum.core.build_defc.call(null,(function (state){
var factories = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712)], null)));
if(cljs.core.seq.call(null,factories)){
return React.createElement("div",({"className": "card"}),React.createElement("table",({"className": "components table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Recipes"),React.createElement("th",null,"Facility"),React.createElement("th",null,"Count"))),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (factories){
return (function busmaker$app$iter__8781(s__8782){
return (new cljs.core.LazySeq(null,((function (factories){
return (function (){
var s__8782__$1 = s__8782;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8782__$1);
if(temp__5457__auto__){
var s__8782__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8782__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8782__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8784 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8783 = (0);
while(true){
if((i__8783 < size__4323__auto__)){
var vec__8785 = cljs.core._nth.call(null,c__4322__auto__,i__8783);
var i = cljs.core.nth.call(null,vec__8785,(0),null);
var map__8788 = cljs.core.nth.call(null,vec__8785,(1),null);
var map__8788__$1 = ((((!((map__8788 == null)))?(((((map__8788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8788):map__8788);
var factory = map__8788__$1;
var facility = cljs.core.get.call(null,map__8788__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8788__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8788__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
cljs.core.chunk_append.call(null,b__8784,React.createElement("tr",({"key": i}),(function (){var attrs8790 = clojure.string.join.call(null,",",recipes);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8790))?sablono.interpreter.attributes.call(null,attrs8790):null),((cljs.core.map_QMARK_.call(null,attrs8790))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8790)], null)));
})(),(function (){var attrs8791 = busmaker.app.facility_selector.call(null,state,factory);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8791))?sablono.interpreter.attributes.call(null,attrs8791):null),((cljs.core.map_QMARK_.call(null,attrs8791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8791)], null)));
})(),React.createElement("td",null,sablono.interpreter.create_element.call(null,"input",({"type": "number", "value": n, "onChange": ((function (i__8783,vec__8785,i,map__8788,map__8788__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8784,s__8782__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.println.call(null,new cljs.core.Keyword(null,"change","change",-1163046502));

cljs.core.swap_BANG_.call(null,state,busmaker.state.change_facility_line_length,factory,parseInt(e.target.value));

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8783,vec__8785,i,map__8788,map__8788__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8784,s__8782__$2,temp__5457__auto__,factories))
}))),React.createElement("td",null,React.createElement("button",({"onClick": ((function (i__8783,vec__8785,i,map__8788,map__8788__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8784,s__8782__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_factory,factory);

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8783,vec__8785,i,map__8788,map__8788__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8784,s__8782__$2,temp__5457__auto__,factories))
}),"-"))));

var G__8797 = (i__8783 + (1));
i__8783 = G__8797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8784),busmaker$app$iter__8781.call(null,cljs.core.chunk_rest.call(null,s__8782__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8784),null);
}
} else {
var vec__8792 = cljs.core.first.call(null,s__8782__$2);
var i = cljs.core.nth.call(null,vec__8792,(0),null);
var map__8795 = cljs.core.nth.call(null,vec__8792,(1),null);
var map__8795__$1 = ((((!((map__8795 == null)))?(((((map__8795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8795):map__8795);
var factory = map__8795__$1;
var facility = cljs.core.get.call(null,map__8795__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8795__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8795__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
return cljs.core.cons.call(null,React.createElement("tr",({"key": i}),(function (){var attrs8790 = clojure.string.join.call(null,",",recipes);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8790))?sablono.interpreter.attributes.call(null,attrs8790):null),((cljs.core.map_QMARK_.call(null,attrs8790))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8790)], null)));
})(),(function (){var attrs8791 = busmaker.app.facility_selector.call(null,state,factory);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8791))?sablono.interpreter.attributes.call(null,attrs8791):null),((cljs.core.map_QMARK_.call(null,attrs8791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8791)], null)));
})(),React.createElement("td",null,sablono.interpreter.create_element.call(null,"input",({"type": "number", "value": n, "onChange": ((function (vec__8792,i,map__8795,map__8795__$1,factory,facility,n,recipes,s__8782__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.println.call(null,new cljs.core.Keyword(null,"change","change",-1163046502));

cljs.core.swap_BANG_.call(null,state,busmaker.state.change_facility_line_length,factory,parseInt(e.target.value));

return busmaker.app.solve_BANG_.call(null,state);
});})(vec__8792,i,map__8795,map__8795__$1,factory,facility,n,recipes,s__8782__$2,temp__5457__auto__,factories))
}))),React.createElement("td",null,React.createElement("button",({"onClick": ((function (vec__8792,i,map__8795,map__8795__$1,factory,facility,n,recipes,s__8782__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_factory,factory);

return busmaker.app.solve_BANG_.call(null,state);
});})(vec__8792,i,map__8795,map__8795__$1,factory,facility,n,recipes,s__8782__$2,temp__5457__auto__,factories))
}),"-"))),busmaker$app$iter__8781.call(null,cljs.core.rest.call(null,s__8782__$2)));
}
} else {
return null;
}
break;
}
});})(factories))
,null,null));
});})(factories))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,factories)));
})()))));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"factories");
busmaker.app.components = rum.core.build_defc.call(null,(function (state){
var recipe_names = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe-names","recipe-names",-94810892)], null)));
var factories = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712)], null)));
if(cljs.core.seq.call(null,recipe_names)){
return React.createElement("div",({"className": "card"}),React.createElement("h6",null,"Components"),React.createElement("ul",({"className": "components"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe_names,factories){
return (function busmaker$app$iter__8800(s__8801){
return (new cljs.core.LazySeq(null,((function (recipe_names,factories){
return (function (){
var s__8801__$1 = s__8801;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8801__$1);
if(temp__5457__auto__){
var s__8801__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8801__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8801__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8803 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8802 = (0);
while(true){
if((i__8802 < size__4323__auto__)){
var ingredient = cljs.core._nth.call(null,c__4322__auto__,i__8802);
cljs.core.chunk_append.call(null,b__8803,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)));

var G__8804 = (i__8802 + (1));
i__8802 = G__8804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8803),busmaker$app$iter__8800.call(null,cljs.core.chunk_rest.call(null,s__8801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8803),null);
}
} else {
var ingredient = cljs.core.first.call(null,s__8801__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)),busmaker$app$iter__8800.call(null,cljs.core.rest.call(null,s__8801__$2)));
}
} else {
return null;
}
break;
}
});})(recipe_names,factories))
,null,null));
});})(recipe_names,factories))
;
return iter__4324__auto__.call(null,cljs.core.sort.call(null,busmaker.recipes.required_ingredients.call(null,recipe_names)));
})())));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"components");
busmaker.app.entity_details = rum.core.build_defc.call(null,(function (state){
var entity = clojure.walk.keywordize_keys.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276)], null))));
var attrs8805 = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),null,(1),null)),(function (){var iter__4324__auto__ = ((function (entity){
return (function busmaker$app$iter__8806(s__8807){
return (new cljs.core.LazySeq(null,((function (entity){
return (function (){
var s__8807__$1 = s__8807;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8807__$1);
if(temp__5457__auto__){
var s__8807__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8807__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8807__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8809 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8808 = (0);
while(true){
if((i__8808 < size__4323__auto__)){
var vec__8810 = cljs.core._nth.call(null,c__4322__auto__,i__8808);
var key = cljs.core.nth.call(null,vec__8810,(0),null);
var value = cljs.core.nth.call(null,vec__8810,(1),null);
cljs.core.chunk_append.call(null,b__8809,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null));

var G__8816 = (i__8808 + (1));
i__8808 = G__8816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8809),busmaker$app$iter__8806.call(null,cljs.core.chunk_rest.call(null,s__8807__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8809),null);
}
} else {
var vec__8813 = cljs.core.first.call(null,s__8807__$2);
var key = cljs.core.nth.call(null,vec__8813,(0),null);
var value = cljs.core.nth.call(null,vec__8813,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null),busmaker$app$iter__8806.call(null,cljs.core.rest.call(null,s__8807__$2)));
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
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs8805))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table","table-dark","table-striped","entity-details"], null)], null),attrs8805)):({"className": "table table-dark table-striped entity-details"})),((cljs.core.map_QMARK_.call(null,attrs8805))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8805)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"entity-details");
busmaker.app.wrap_entities = (function busmaker$app$wrap_entities(entities){
return new cljs.core.PersistentArrayMap(null, 1, ["blueprint",new cljs.core.PersistentArrayMap(null, 4, ["entities",cljs.core.vec.call(null,entities),"icons",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["index",(1),"signal",new cljs.core.PersistentArrayMap(null, 2, ["name","assembling-machine-2","type","item"], null)], null)], null),"item","blueprint","version",(68721836034)], null)], null);
});
busmaker.app.encode_blueprint = (function busmaker$app$encode_blueprint(blueprint){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeByteArray(module$home$tristan$me$projects$busmaker$node_modules$pako$index["default"].deflate(JSON.stringify(cljs.core.clj__GT_js.call(null,blueprint)))))].join('');
});
busmaker.app.decode_blueprint = (function busmaker$app$decode_blueprint(blueprint){
return JSON.parse(module$home$tristan$me$projects$busmaker$node_modules$pako$index["default"].inflate(goog.crypt.base64.decodeStringToByteArray(cljs.core.subs.call(null,blueprint,(1))),({"to": "string"})));
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
return React.createElement("div",({"className": "bg-light d-flex"}),React.createElement("div",({"className": "d-flex flex-row"}),React.createElement("div",({"className": "d-flex flex-column"}),(function (){var attrs8820 = busmaker.app.recipe_selector.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8820))?sablono.interpreter.attributes.call(null,attrs8820):null),((cljs.core.map_QMARK_.call(null,attrs8820))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8820)], null)));
})(),React.createElement("button",({"onClick": (function (_){
return cljs.core.reset_BANG_.call(null,state,busmaker.state.empty_state.call(null));
})}),"Clear"),sablono.interpreter.interpret.call(null,busmaker.app.factories.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.bus.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_encoded.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.components.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_decoded.call(null,state))),(function (){var attrs8817 = busmaker.pixi.panel.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8817))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d-flex","flex-column","flex-grow-1"], null)], null),attrs8817)):({"className": "d-flex flex-column flex-grow-1"})),((cljs.core.map_QMARK_.call(null,attrs8817))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs8818 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8818))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8818)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8818))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8818)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8817),(function (){var attrs8819 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8819))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8819)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8819))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8819)], null)));
})()], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint");
busmaker.app.init = (function busmaker$app$init(){
busmaker.app.solve_BANG_.call(null,busmaker.app.state);

return rum.core.mount.call(null,busmaker.app.blueprint.call(null,busmaker.app.state),document.getElementById("container"));
});
busmaker.app.reload_BANG_ = (function busmaker$app$reload_BANG_(){
return busmaker.app.init.call(null);
});
