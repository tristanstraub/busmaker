// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.app');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.reader');
goog.require('busmaker.template');
goog.require('cljs.tools.reader.edn');
goog.require('clojure.walk');
goog.require('module$home$tristan$me$projects$current$busmaker$node_modules$pako$index');
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
busmaker.app.busmaker_store_key = "busmaker-0.0.4";
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
busmaker.app.busmaker_store = (function busmaker$app$busmaker_store(){
return cljs.reader.read_string.call(null,busmaker.app.get_item.call(null,busmaker.app.busmaker_store_key));
});
busmaker.app.serialize_to_store_BANG_ = (function busmaker$app$serialize_to_store_BANG_(state){
return busmaker.app.set_item_BANG_.call(null,busmaker.app.busmaker_store_key,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
});
if((typeof busmaker !== 'undefined') && (typeof busmaker.app !== 'undefined') && (typeof busmaker.app.state !== 'undefined')){
} else {
busmaker.app.state = cljs.core.atom.call(null,busmaker.state.default_state.call(null));
}
busmaker.app.save_BANG_ = (function busmaker$app$save_BANG_(state){
cljs.core.swap_BANG_.call(null,state,(function (state__$1){
return cljs.core.assoc_in.call(null,state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177).cljs$core$IFn$_invoke$arity$1(state__$1)], null),cljs.core.dissoc.call(null,state__$1,new cljs.core.Keyword(null,"store","store",1512230022)));
}));

return busmaker.app.serialize_to_store_BANG_.call(null,state);
});
busmaker.app.delete_blueprint_BANG_ = (function busmaker$app$delete_blueprint_BANG_(state,blueprint_name){
cljs.core.swap_BANG_.call(null,state,(function (state__$1){
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"settings","settings",1556144875)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177).cljs$core$IFn$_invoke$arity$1(state__$1));
}));

return busmaker.app.serialize_to_store_BANG_.call(null,state);
});
busmaker.app.solve_BANG_ = (function busmaker$app$solve_BANG_(state){
var solution = cljs.core.doall.call(null,busmaker.plan.plan.call(null,new cljs.core.Keyword(null,"factories","factories",1443149712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"solution","solution",-1727231491),solution);
});
busmaker.app.load_BANG_ = (function busmaker$app$load_BANG_(state){
cljs.core.swap_BANG_.call(null,state,(function (state__$1){
return cljs.core.merge.call(null,state__$1,cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177).cljs$core$IFn$_invoke$arity$1(state__$1)], null)));
}));

return busmaker.app.solve_BANG_.call(null,state);
});
busmaker.app.recipe_selector = rum.core.build_defc.call(null,(function (state){
var recipe = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe","recipe",-17826617)], null)));
var recipes = cljs.core.remove.call(null,((function (recipe){
return (function (p1__8761_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,p1__8761_SHARP_);
});})(recipe))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipe_data.recipes));
return React.createElement("label",null,"Recipe",sablono.interpreter.create_element.call(null,"select",({"value": recipe, "onChange": ((function (recipe,recipes){
return (function (e){
var recipe__$1 = e.target.value;
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"recipe","recipe",-17826617),recipe__$1);
});})(recipe,recipes))
}),React.createElement("option",null,"Select recipe"),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe,recipes){
return (function busmaker$app$iter__8764(s__8765){
return (new cljs.core.LazySeq(null,((function (recipe,recipes){
return (function (){
var s__8765__$1 = s__8765;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8765__$1);
if(temp__5457__auto__){
var s__8765__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8765__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8765__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8767 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8766 = (0);
while(true){
if((i__8766 < size__4323__auto__)){
var recipe__$1 = cljs.core._nth.call(null,c__4322__auto__,i__8766);
cljs.core.chunk_append.call(null,b__8767,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)));

var G__8768 = (i__8766 + (1));
i__8766 = G__8768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8767),busmaker$app$iter__8764.call(null,cljs.core.chunk_rest.call(null,s__8765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8767),null);
}
} else {
var recipe__$1 = cljs.core.first.call(null,s__8765__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)),busmaker$app$iter__8764.call(null,cljs.core.rest.call(null,s__8765__$2)));
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
busmaker.app.facility_selector = rum.core.build_defc.call(null,(function (state,p__8769){
var map__8770 = p__8769;
var map__8770__$1 = ((((!((map__8770 == null)))?(((((map__8770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8770):map__8770);
var factory = map__8770__$1;
var facility = cljs.core.get.call(null,map__8770__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return sablono.interpreter.create_element.call(null,"select",({"value": facility, "onChange": ((function (map__8770,map__8770__$1,factory,facility){
return (function (e){
cljs.core.swap_BANG_.call(null,state,busmaker.state.swap_facility,factory,e.target.value);

return busmaker.app.solve_BANG_.call(null,state);
});})(map__8770,map__8770__$1,factory,facility))
}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (map__8770,map__8770__$1,factory,facility){
return (function busmaker$app$iter__8772(s__8773){
return (new cljs.core.LazySeq(null,((function (map__8770,map__8770__$1,factory,facility){
return (function (){
var s__8773__$1 = s__8773;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8773__$1);
if(temp__5457__auto__){
var s__8773__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8773__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8773__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8775 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8774 = (0);
while(true){
if((i__8774 < size__4323__auto__)){
var facility__$1 = cljs.core._nth.call(null,c__4322__auto__,i__8774);
cljs.core.chunk_append.call(null,b__8775,React.createElement("option",({"key": facility__$1, "value": facility__$1}),sablono.interpreter.interpret.call(null,facility__$1)));

var G__8776 = (i__8774 + (1));
i__8774 = G__8776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8775),busmaker$app$iter__8772.call(null,cljs.core.chunk_rest.call(null,s__8773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8775),null);
}
} else {
var facility__$1 = cljs.core.first.call(null,s__8773__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": facility__$1, "value": facility__$1}),sablono.interpreter.interpret.call(null,facility__$1)),busmaker$app$iter__8772.call(null,cljs.core.rest.call(null,s__8773__$2)));
}
} else {
return null;
}
break;
}
});})(map__8770,map__8770__$1,factory,facility))
,null,null));
});})(map__8770,map__8770__$1,factory,facility))
;
return iter__4324__auto__.call(null,busmaker.app.facilities);
})()));
}),null,"facility-selector");
busmaker.app.bus = rum.core.build_defc.call(null,(function (state){
var factories = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712)], null)));
var bus_outputs = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584)], null)));
if(cljs.core.seq.call(null,bus_outputs)){
return React.createElement("div",({"className": "card"}),React.createElement("table",({"className": "components table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Output"),React.createElement("th",null,"Bus index"),React.createElement("th",null))),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (factories,bus_outputs){
return (function busmaker$app$iter__8779(s__8780){
return (new cljs.core.LazySeq(null,((function (factories,bus_outputs){
return (function (){
var s__8780__$1 = s__8780;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8780__$1);
if(temp__5457__auto__){
var s__8780__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8780__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8780__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8782 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8781 = (0);
while(true){
if((i__8781 < size__4323__auto__)){
var vec__8783 = cljs.core._nth.call(null,c__4322__auto__,i__8781);
var bus_index = cljs.core.nth.call(null,vec__8783,(0),null);
var output = cljs.core.nth.call(null,vec__8783,(1),null);
cljs.core.chunk_append.call(null,b__8782,React.createElement("tr",({"key": bus_index}),(function (){var attrs8786 = output;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8786))?sablono.interpreter.attributes.call(null,attrs8786):null),((cljs.core.map_QMARK_.call(null,attrs8786))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8786)], null)));
})(),(function (){var attrs8787 = bus_index;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8787))?sablono.interpreter.attributes.call(null,attrs8787):null),((cljs.core.map_QMARK_.call(null,attrs8787))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8787)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (i__8781,vec__8783,bus_index,output,c__4322__auto__,size__4323__auto__,b__8782,s__8780__$2,temp__5457__auto__,factories,bus_outputs){
return (function (_){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_bus,output);

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8781,vec__8783,bus_index,output,c__4322__auto__,size__4323__auto__,b__8782,s__8780__$2,temp__5457__auto__,factories,bus_outputs))
}),"-"))));

var G__8791 = (i__8781 + (1));
i__8781 = G__8791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8782),busmaker$app$iter__8779.call(null,cljs.core.chunk_rest.call(null,s__8780__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8782),null);
}
} else {
var vec__8788 = cljs.core.first.call(null,s__8780__$2);
var bus_index = cljs.core.nth.call(null,vec__8788,(0),null);
var output = cljs.core.nth.call(null,vec__8788,(1),null);
return cljs.core.cons.call(null,React.createElement("tr",({"key": bus_index}),(function (){var attrs8786 = output;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8786))?sablono.interpreter.attributes.call(null,attrs8786):null),((cljs.core.map_QMARK_.call(null,attrs8786))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8786)], null)));
})(),(function (){var attrs8787 = bus_index;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8787))?sablono.interpreter.attributes.call(null,attrs8787):null),((cljs.core.map_QMARK_.call(null,attrs8787))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8787)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (vec__8788,bus_index,output,s__8780__$2,temp__5457__auto__,factories,bus_outputs){
return (function (_){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_bus,output);

return busmaker.app.solve_BANG_.call(null,state);
});})(vec__8788,bus_index,output,s__8780__$2,temp__5457__auto__,factories,bus_outputs))
}),"-"))),busmaker$app$iter__8779.call(null,cljs.core.rest.call(null,s__8780__$2)));
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
return (function busmaker$app$iter__8794(s__8795){
return (new cljs.core.LazySeq(null,((function (factories){
return (function (){
var s__8795__$1 = s__8795;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8795__$1);
if(temp__5457__auto__){
var s__8795__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8795__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8795__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8797 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8796 = (0);
while(true){
if((i__8796 < size__4323__auto__)){
var vec__8798 = cljs.core._nth.call(null,c__4322__auto__,i__8796);
var i = cljs.core.nth.call(null,vec__8798,(0),null);
var map__8801 = cljs.core.nth.call(null,vec__8798,(1),null);
var map__8801__$1 = ((((!((map__8801 == null)))?(((((map__8801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8801):map__8801);
var factory = map__8801__$1;
var facility = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
cljs.core.chunk_append.call(null,b__8797,React.createElement("tr",({"key": i}),(function (){var attrs8803 = clojure.string.join.call(null,",",recipes);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8803))?sablono.interpreter.attributes.call(null,attrs8803):null),((cljs.core.map_QMARK_.call(null,attrs8803))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8803)], null)));
})(),(function (){var attrs8804 = busmaker.app.facility_selector.call(null,state,factory);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8804))?sablono.interpreter.attributes.call(null,attrs8804):null),((cljs.core.map_QMARK_.call(null,attrs8804))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8804)], null)));
})(),React.createElement("td",null,sablono.interpreter.create_element.call(null,"input",({"type": "number", "value": n, "onChange": ((function (i__8796,vec__8798,i,map__8801,map__8801__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8797,s__8795__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.println.call(null,new cljs.core.Keyword(null,"change","change",-1163046502));

cljs.core.swap_BANG_.call(null,state,busmaker.state.change_facility_line_length,factory,parseInt(e.target.value));

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8796,vec__8798,i,map__8801,map__8801__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8797,s__8795__$2,temp__5457__auto__,factories))
}))),React.createElement("td",null,React.createElement("button",({"onClick": ((function (i__8796,vec__8798,i,map__8801,map__8801__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8797,s__8795__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_factory,factory);

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8796,vec__8798,i,map__8801,map__8801__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8797,s__8795__$2,temp__5457__auto__,factories))
}),"-"))));

var G__8810 = (i__8796 + (1));
i__8796 = G__8810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8797),busmaker$app$iter__8794.call(null,cljs.core.chunk_rest.call(null,s__8795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8797),null);
}
} else {
var vec__8805 = cljs.core.first.call(null,s__8795__$2);
var i = cljs.core.nth.call(null,vec__8805,(0),null);
var map__8808 = cljs.core.nth.call(null,vec__8805,(1),null);
var map__8808__$1 = ((((!((map__8808 == null)))?(((((map__8808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8808):map__8808);
var factory = map__8808__$1;
var facility = cljs.core.get.call(null,map__8808__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8808__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8808__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
return cljs.core.cons.call(null,React.createElement("tr",({"key": i}),(function (){var attrs8803 = clojure.string.join.call(null,",",recipes);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8803))?sablono.interpreter.attributes.call(null,attrs8803):null),((cljs.core.map_QMARK_.call(null,attrs8803))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8803)], null)));
})(),(function (){var attrs8804 = busmaker.app.facility_selector.call(null,state,factory);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8804))?sablono.interpreter.attributes.call(null,attrs8804):null),((cljs.core.map_QMARK_.call(null,attrs8804))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8804)], null)));
})(),React.createElement("td",null,sablono.interpreter.create_element.call(null,"input",({"type": "number", "value": n, "onChange": ((function (vec__8805,i,map__8808,map__8808__$1,factory,facility,n,recipes,s__8795__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.println.call(null,new cljs.core.Keyword(null,"change","change",-1163046502));

cljs.core.swap_BANG_.call(null,state,busmaker.state.change_facility_line_length,factory,parseInt(e.target.value));

return busmaker.app.solve_BANG_.call(null,state);
});})(vec__8805,i,map__8808,map__8808__$1,factory,facility,n,recipes,s__8795__$2,temp__5457__auto__,factories))
}))),React.createElement("td",null,React.createElement("button",({"onClick": ((function (vec__8805,i,map__8808,map__8808__$1,factory,facility,n,recipes,s__8795__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_factory,factory);

return busmaker.app.solve_BANG_.call(null,state);
});})(vec__8805,i,map__8808,map__8808__$1,factory,facility,n,recipes,s__8795__$2,temp__5457__auto__,factories))
}),"-"))),busmaker$app$iter__8794.call(null,cljs.core.rest.call(null,s__8795__$2)));
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
return (function busmaker$app$iter__8813(s__8814){
return (new cljs.core.LazySeq(null,((function (recipe_names,factories){
return (function (){
var s__8814__$1 = s__8814;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8814__$1);
if(temp__5457__auto__){
var s__8814__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8814__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8814__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8816 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8815 = (0);
while(true){
if((i__8815 < size__4323__auto__)){
var ingredient = cljs.core._nth.call(null,c__4322__auto__,i__8815);
cljs.core.chunk_append.call(null,b__8816,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)));

var G__8817 = (i__8815 + (1));
i__8815 = G__8817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8816),busmaker$app$iter__8813.call(null,cljs.core.chunk_rest.call(null,s__8814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8816),null);
}
} else {
var ingredient = cljs.core.first.call(null,s__8814__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)),busmaker$app$iter__8813.call(null,cljs.core.rest.call(null,s__8814__$2)));
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
var attrs8818 = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),null,(1),null)),(function (){var iter__4324__auto__ = ((function (entity){
return (function busmaker$app$iter__8819(s__8820){
return (new cljs.core.LazySeq(null,((function (entity){
return (function (){
var s__8820__$1 = s__8820;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8820__$1);
if(temp__5457__auto__){
var s__8820__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8820__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8820__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8822 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8821 = (0);
while(true){
if((i__8821 < size__4323__auto__)){
var vec__8823 = cljs.core._nth.call(null,c__4322__auto__,i__8821);
var key = cljs.core.nth.call(null,vec__8823,(0),null);
var value = cljs.core.nth.call(null,vec__8823,(1),null);
cljs.core.chunk_append.call(null,b__8822,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null));

var G__8829 = (i__8821 + (1));
i__8821 = G__8829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8822),busmaker$app$iter__8819.call(null,cljs.core.chunk_rest.call(null,s__8820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8822),null);
}
} else {
var vec__8826 = cljs.core.first.call(null,s__8820__$2);
var key = cljs.core.nth.call(null,vec__8826,(0),null);
var value = cljs.core.nth.call(null,vec__8826,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null),busmaker$app$iter__8819.call(null,cljs.core.rest.call(null,s__8820__$2)));
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
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs8818))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table","table-dark","table-striped","entity-details"], null)], null),attrs8818)):({"className": "table table-dark table-striped entity-details"})),((cljs.core.map_QMARK_.call(null,attrs8818))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8818)], null)));
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
busmaker.app.blueprint_load_save = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",null,React.createElement("label",null,"Blueprint name",sablono.interpreter.create_element.call(null,"input",({"value": rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177)], null))), "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177),e.target.value);
})}))),React.createElement("button",({"onClick": (function (_){
return busmaker.app.save_BANG_.call(null,state);
})}),"Save"),React.createElement("table",null,React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = (function busmaker$app$iter__8830(s__8831){
return (new cljs.core.LazySeq(null,(function (){
var s__8831__$1 = s__8831;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8831__$1);
if(temp__5457__auto__){
var s__8831__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8831__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8831__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8833 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8832 = (0);
while(true){
if((i__8832 < size__4323__auto__)){
var vec__8834 = cljs.core._nth.call(null,c__4322__auto__,i__8832);
var blueprint_name = cljs.core.nth.call(null,vec__8834,(0),null);
var blueprint_state = cljs.core.nth.call(null,vec__8834,(1),null);
cljs.core.chunk_append.call(null,b__8833,React.createElement("tr",({"key": [blueprint_name]}),(function (){var attrs8837 = blueprint_name;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8837))?sablono.interpreter.attributes.call(null,attrs8837):null),((cljs.core.map_QMARK_.call(null,attrs8837))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8837)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (i__8832,vec__8834,blueprint_name,blueprint_state,c__4322__auto__,size__4323__auto__,b__8833,s__8831__$2,temp__5457__auto__){
return (function (_){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177),blueprint_name);

return busmaker.app.load_BANG_.call(null,state);
});})(i__8832,vec__8834,blueprint_name,blueprint_state,c__4322__auto__,size__4323__auto__,b__8833,s__8831__$2,temp__5457__auto__))
}),"Load"),React.createElement("button",({"onClick": ((function (i__8832,vec__8834,blueprint_name,blueprint_state,c__4322__auto__,size__4323__auto__,b__8833,s__8831__$2,temp__5457__auto__){
return (function (_){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177),blueprint_name);

return busmaker.app.delete_blueprint_BANG_.call(null,state,blueprint_name);
});})(i__8832,vec__8834,blueprint_name,blueprint_state,c__4322__auto__,size__4323__auto__,b__8833,s__8831__$2,temp__5457__auto__))
}),"Delete"))));

var G__8841 = (i__8832 + (1));
i__8832 = G__8841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8833),busmaker$app$iter__8830.call(null,cljs.core.chunk_rest.call(null,s__8831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8833),null);
}
} else {
var vec__8838 = cljs.core.first.call(null,s__8831__$2);
var blueprint_name = cljs.core.nth.call(null,vec__8838,(0),null);
var blueprint_state = cljs.core.nth.call(null,vec__8838,(1),null);
return cljs.core.cons.call(null,React.createElement("tr",({"key": [blueprint_name]}),(function (){var attrs8837 = blueprint_name;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8837))?sablono.interpreter.attributes.call(null,attrs8837):null),((cljs.core.map_QMARK_.call(null,attrs8837))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8837)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (vec__8838,blueprint_name,blueprint_state,s__8831__$2,temp__5457__auto__){
return (function (_){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177),blueprint_name);

return busmaker.app.load_BANG_.call(null,state);
});})(vec__8838,blueprint_name,blueprint_state,s__8831__$2,temp__5457__auto__))
}),"Load"),React.createElement("button",({"onClick": ((function (vec__8838,blueprint_name,blueprint_state,s__8831__$2,temp__5457__auto__){
return (function (_){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177),blueprint_name);

return busmaker.app.delete_blueprint_BANG_.call(null,state,blueprint_name);
});})(vec__8838,blueprint_name,blueprint_state,s__8831__$2,temp__5457__auto__))
}),"Delete"))),busmaker$app$iter__8830.call(null,cljs.core.rest.call(null,s__8831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"settings","settings",1556144875)], null))));
})()))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint-load-save");
busmaker.app.blueprint = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",({"className": "bg-light d-flex"}),React.createElement("div",({"className": "d-flex flex-row"}),React.createElement("div",({"className": "d-flex flex-column"}),(function (){var attrs8845 = busmaker.app.recipe_selector.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8845))?sablono.interpreter.attributes.call(null,attrs8845):null),((cljs.core.map_QMARK_.call(null,attrs8845))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8845)], null)));
})(),React.createElement("button",({"onClick": (function (_){
return cljs.core.reset_BANG_.call(null,state,cljs.core.assoc.call(null,busmaker.state.empty_state.call(null),new cljs.core.Keyword(null,"store","store",1512230022),busmaker.app.busmaker_store.call(null)));
})}),"Clear"),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_load_save.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.factories.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.bus.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_encoded.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.components.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_decoded.call(null,state))),(function (){var attrs8842 = busmaker.pixi.panel.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8842))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d-flex","flex-column","flex-grow-1"], null)], null),attrs8842)):({"className": "d-flex flex-column flex-grow-1"})),((cljs.core.map_QMARK_.call(null,attrs8842))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs8843 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8843))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8843)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8843))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8843)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8842),(function (){var attrs8844 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8844))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8844)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8844))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8844)], null)));
})()], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint");
busmaker.app.init = (function busmaker$app$init(){
cljs.core.swap_BANG_.call(null,busmaker.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"store","store",1512230022),busmaker.app.busmaker_store.call(null));

busmaker.app.solve_BANG_.call(null,busmaker.app.state);

rum.core.mount.call(null,busmaker.app.blueprint.call(null,busmaker.app.state),document.getElementById("container"));

return cljs.core.enable_console_print_BANG_.call(null);
});
busmaker.app.reload_BANG_ = (function busmaker$app$reload_BANG_(){
return busmaker.app.init.call(null);
});
