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
busmaker.app.busmaker_store_key = "busmaker-0.0.5";
busmaker.app.encode_store = (function busmaker$app$encode_store(blueprint){
return goog.crypt.base64.encodeByteArray(module$home$tristan$me$projects$current$busmaker$node_modules$pako$index["default"].deflate(cljs.core.pr_str.call(null,blueprint)));
});
busmaker.app.decode_store = (function busmaker$app$decode_store(blueprint){
return cljs.reader.read_string.call(null,module$home$tristan$me$projects$current$busmaker$node_modules$pako$index["default"].inflate(goog.crypt.base64.decodeStringToByteArray(blueprint),({"to": "string"})));
});
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
return busmaker.app.decode_store.call(null,busmaker.app.get_item.call(null,busmaker.app.busmaker_store_key));
});
busmaker.app.serialize_to_store_BANG_ = (function busmaker$app$serialize_to_store_BANG_(state){
var new_value = busmaker.app.encode_store.call(null,new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
busmaker.app.set_item_BANG_.call(null,busmaker.app.busmaker_store_key,new_value);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),busmaker.app.busmaker_store.call(null))){
} else {
throw (new Error(["Assert failed: ","Save was unsuccessful","\n","(= (:store (clojure.core/deref state)) (busmaker-store))"].join('')));
}

return cljs.core.println.call(null,"Saved!");
});
busmaker.app.wrap_entities = (function busmaker$app$wrap_entities(entities){
return new cljs.core.PersistentArrayMap(null, 1, ["blueprint",new cljs.core.PersistentArrayMap(null, 4, ["entities",cljs.core.vec.call(null,entities),"icons",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["index",(1),"signal",new cljs.core.PersistentArrayMap(null, 2, ["name","assembling-machine-2","type","item"], null)], null)], null),"item","blueprint","version",(68721836034)], null)], null);
});
busmaker.app.encode_blueprint = (function busmaker$app$encode_blueprint(blueprint){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeByteArray(module$home$tristan$me$projects$current$busmaker$node_modules$pako$index["default"].deflate(JSON.stringify(cljs.core.clj__GT_js.call(null,blueprint)))))].join('');
});
busmaker.app.decode_blueprint = (function busmaker$app$decode_blueprint(blueprint){
return JSON.parse(module$home$tristan$me$projects$current$busmaker$node_modules$pako$index["default"].inflate(goog.crypt.base64.decodeStringToByteArray(cljs.core.subs.call(null,blueprint,(1))),({"to": "string"})));
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
busmaker.app.solve_part_BANG_ = (function busmaker$app$solve_part_BANG_(state,factory_index){
var part = cljs.core.doall.call(null,busmaker.plan.plan.call(null,cljs.core.take.call(null,(1),cljs.core.drop.call(null,factory_index,new cljs.core.Keyword(null,"factories","factories",1443149712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))),new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"part","part",77757738),part);
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
return (function (p1__8765_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["basic-oil-processing",null,"advanced-oil-processing",null], null), null).call(null,p1__8765_SHARP_);
});})(recipe))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipe_data.recipes));
return React.createElement("label",null,"Recipe",sablono.interpreter.create_element.call(null,"select",({"value": recipe, "onChange": ((function (recipe,recipes){
return (function (e){
var recipe__$1 = e.target.value;
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"recipe","recipe",-17826617),recipe__$1);
});})(recipe,recipes))
}),React.createElement("option",null,"Select recipe"),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (recipe,recipes){
return (function busmaker$app$iter__8768(s__8769){
return (new cljs.core.LazySeq(null,((function (recipe,recipes){
return (function (){
var s__8769__$1 = s__8769;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8769__$1);
if(temp__5457__auto__){
var s__8769__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8769__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8769__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8771 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8770 = (0);
while(true){
if((i__8770 < size__4323__auto__)){
var recipe__$1 = cljs.core._nth.call(null,c__4322__auto__,i__8770);
cljs.core.chunk_append.call(null,b__8771,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)));

var G__8772 = (i__8770 + (1));
i__8770 = G__8772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8771),busmaker$app$iter__8768.call(null,cljs.core.chunk_rest.call(null,s__8769__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8771),null);
}
} else {
var recipe__$1 = cljs.core.first.call(null,s__8769__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": recipe__$1, "value": recipe__$1}),sablono.interpreter.interpret.call(null,recipe__$1)),busmaker$app$iter__8768.call(null,cljs.core.rest.call(null,s__8769__$2)));
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
busmaker.app.facility_selector = rum.core.build_defc.call(null,(function (state,p__8773){
var map__8774 = p__8773;
var map__8774__$1 = ((((!((map__8774 == null)))?(((((map__8774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8774):map__8774);
var factory = map__8774__$1;
var facility = cljs.core.get.call(null,map__8774__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return sablono.interpreter.create_element.call(null,"select",({"value": facility, "onChange": ((function (map__8774,map__8774__$1,factory,facility){
return (function (e){
cljs.core.swap_BANG_.call(null,state,busmaker.state.swap_facility,factory,e.target.value);

return busmaker.app.solve_BANG_.call(null,state);
});})(map__8774,map__8774__$1,factory,facility))
}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (map__8774,map__8774__$1,factory,facility){
return (function busmaker$app$iter__8776(s__8777){
return (new cljs.core.LazySeq(null,((function (map__8774,map__8774__$1,factory,facility){
return (function (){
var s__8777__$1 = s__8777;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8777__$1);
if(temp__5457__auto__){
var s__8777__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8777__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8777__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8779 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8778 = (0);
while(true){
if((i__8778 < size__4323__auto__)){
var facility__$1 = cljs.core._nth.call(null,c__4322__auto__,i__8778);
cljs.core.chunk_append.call(null,b__8779,React.createElement("option",({"key": facility__$1, "value": facility__$1}),sablono.interpreter.interpret.call(null,facility__$1)));

var G__8780 = (i__8778 + (1));
i__8778 = G__8780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8779),busmaker$app$iter__8776.call(null,cljs.core.chunk_rest.call(null,s__8777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8779),null);
}
} else {
var facility__$1 = cljs.core.first.call(null,s__8777__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": facility__$1, "value": facility__$1}),sablono.interpreter.interpret.call(null,facility__$1)),busmaker$app$iter__8776.call(null,cljs.core.rest.call(null,s__8777__$2)));
}
} else {
return null;
}
break;
}
});})(map__8774,map__8774__$1,factory,facility))
,null,null));
});})(map__8774,map__8774__$1,factory,facility))
;
return iter__4324__auto__.call(null,busmaker.app.facilities);
})()));
}),null,"facility-selector");
busmaker.app.bus = rum.core.build_defc.call(null,(function (state){
var factories = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712)], null)));
var bus_outputs = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584)], null)));
if(cljs.core.seq.call(null,bus_outputs)){
return React.createElement("div",({"className": "card"}),React.createElement("table",({"className": "components table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Output"),React.createElement("th",null,"Bus index"),React.createElement("th",null))),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (factories,bus_outputs){
return (function busmaker$app$iter__8783(s__8784){
return (new cljs.core.LazySeq(null,((function (factories,bus_outputs){
return (function (){
var s__8784__$1 = s__8784;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8784__$1);
if(temp__5457__auto__){
var s__8784__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8784__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8784__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8786 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8785 = (0);
while(true){
if((i__8785 < size__4323__auto__)){
var vec__8787 = cljs.core._nth.call(null,c__4322__auto__,i__8785);
var bus_index = cljs.core.nth.call(null,vec__8787,(0),null);
var output = cljs.core.nth.call(null,vec__8787,(1),null);
cljs.core.chunk_append.call(null,b__8786,React.createElement("tr",({"key": bus_index}),(function (){var attrs8790 = output;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8790))?sablono.interpreter.attributes.call(null,attrs8790):null),((cljs.core.map_QMARK_.call(null,attrs8790))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8790)], null)));
})(),(function (){var attrs8791 = bus_index;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8791))?sablono.interpreter.attributes.call(null,attrs8791):null),((cljs.core.map_QMARK_.call(null,attrs8791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8791)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (i__8785,vec__8787,bus_index,output,c__4322__auto__,size__4323__auto__,b__8786,s__8784__$2,temp__5457__auto__,factories,bus_outputs){
return (function (_){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_bus,output);

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8785,vec__8787,bus_index,output,c__4322__auto__,size__4323__auto__,b__8786,s__8784__$2,temp__5457__auto__,factories,bus_outputs))
}),"-"))));

var G__8795 = (i__8785 + (1));
i__8785 = G__8795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8786),busmaker$app$iter__8783.call(null,cljs.core.chunk_rest.call(null,s__8784__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8786),null);
}
} else {
var vec__8792 = cljs.core.first.call(null,s__8784__$2);
var bus_index = cljs.core.nth.call(null,vec__8792,(0),null);
var output = cljs.core.nth.call(null,vec__8792,(1),null);
return cljs.core.cons.call(null,React.createElement("tr",({"key": bus_index}),(function (){var attrs8790 = output;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8790))?sablono.interpreter.attributes.call(null,attrs8790):null),((cljs.core.map_QMARK_.call(null,attrs8790))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8790)], null)));
})(),(function (){var attrs8791 = bus_index;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8791))?sablono.interpreter.attributes.call(null,attrs8791):null),((cljs.core.map_QMARK_.call(null,attrs8791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8791)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (vec__8792,bus_index,output,s__8784__$2,temp__5457__auto__,factories,bus_outputs){
return (function (_){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_bus,output);

return busmaker.app.solve_BANG_.call(null,state);
});})(vec__8792,bus_index,output,s__8784__$2,temp__5457__auto__,factories,bus_outputs))
}),"-"))),busmaker$app$iter__8783.call(null,cljs.core.rest.call(null,s__8784__$2)));
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
return iter__4324__auto__.call(null,cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,bus_outputs)));
})()))));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"bus");
busmaker.app.factories = rum.core.build_defc.call(null,(function (state){
var factories = rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"factories","factories",1443149712)], null)));
if(cljs.core.seq.call(null,factories)){
return React.createElement("div",({"className": "card"}),React.createElement("table",({"className": "components table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Recipes"),React.createElement("th",null,"Facility"),React.createElement("th",null,"Count"),React.createElement("th",null))),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (factories){
return (function busmaker$app$iter__8798(s__8799){
return (new cljs.core.LazySeq(null,((function (factories){
return (function (){
var s__8799__$1 = s__8799;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8799__$1);
if(temp__5457__auto__){
var s__8799__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8799__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8799__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8801 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8800 = (0);
while(true){
if((i__8800 < size__4323__auto__)){
var vec__8802 = cljs.core._nth.call(null,c__4322__auto__,i__8800);
var i = cljs.core.nth.call(null,vec__8802,(0),null);
var map__8805 = cljs.core.nth.call(null,vec__8802,(1),null);
var map__8805__$1 = ((((!((map__8805 == null)))?(((((map__8805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8805):map__8805);
var factory = map__8805__$1;
var facility = cljs.core.get.call(null,map__8805__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8805__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8805__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
cljs.core.chunk_append.call(null,b__8801,React.createElement("tr",({"key": i}),(function (){var attrs8807 = clojure.string.join.call(null,",",recipes);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8807))?sablono.interpreter.attributes.call(null,attrs8807):null),((cljs.core.map_QMARK_.call(null,attrs8807))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8807)], null)));
})(),(function (){var attrs8808 = busmaker.app.facility_selector.call(null,state,factory);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8808))?sablono.interpreter.attributes.call(null,attrs8808):null),((cljs.core.map_QMARK_.call(null,attrs8808))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8808)], null)));
})(),React.createElement("td",null,sablono.interpreter.create_element.call(null,"input",({"type": "number", "value": n, "onChange": ((function (i__8800,vec__8802,i,map__8805,map__8805__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8801,s__8799__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.println.call(null,new cljs.core.Keyword(null,"change","change",-1163046502));

cljs.core.swap_BANG_.call(null,state,busmaker.state.change_facility_line_length,factory,parseInt(e.target.value));

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8800,vec__8802,i,map__8805,map__8805__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8801,s__8799__$2,temp__5457__auto__,factories))
}))),React.createElement("td",null,React.createElement("button",({"onClick": ((function (i__8800,vec__8802,i,map__8805,map__8805__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8801,s__8799__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_factory,factory);

return busmaker.app.solve_BANG_.call(null,state);
});})(i__8800,vec__8802,i,map__8805,map__8805__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8801,s__8799__$2,temp__5457__auto__,factories))
}),"-")),React.createElement("td",null,React.createElement("button",({"onClick": ((function (i__8800,vec__8802,i,map__8805,map__8805__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8801,s__8799__$2,temp__5457__auto__,factories){
return (function (e){
return busmaker.app.solve_part_BANG_.call(null,state,i);
});})(i__8800,vec__8802,i,map__8805,map__8805__$1,factory,facility,n,recipes,c__4322__auto__,size__4323__auto__,b__8801,s__8799__$2,temp__5457__auto__,factories))
, "data-toggle": "modal", "data-target": "#blueprint-part"}),"Blueprint"))));

var G__8814 = (i__8800 + (1));
i__8800 = G__8814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8801),busmaker$app$iter__8798.call(null,cljs.core.chunk_rest.call(null,s__8799__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8801),null);
}
} else {
var vec__8809 = cljs.core.first.call(null,s__8799__$2);
var i = cljs.core.nth.call(null,vec__8809,(0),null);
var map__8812 = cljs.core.nth.call(null,vec__8809,(1),null);
var map__8812__$1 = ((((!((map__8812 == null)))?(((((map__8812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8812):map__8812);
var factory = map__8812__$1;
var facility = cljs.core.get.call(null,map__8812__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8812__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8812__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
return cljs.core.cons.call(null,React.createElement("tr",({"key": i}),(function (){var attrs8807 = clojure.string.join.call(null,",",recipes);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8807))?sablono.interpreter.attributes.call(null,attrs8807):null),((cljs.core.map_QMARK_.call(null,attrs8807))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8807)], null)));
})(),(function (){var attrs8808 = busmaker.app.facility_selector.call(null,state,factory);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8808))?sablono.interpreter.attributes.call(null,attrs8808):null),((cljs.core.map_QMARK_.call(null,attrs8808))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8808)], null)));
})(),React.createElement("td",null,sablono.interpreter.create_element.call(null,"input",({"type": "number", "value": n, "onChange": ((function (vec__8809,i,map__8812,map__8812__$1,factory,facility,n,recipes,s__8799__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.println.call(null,new cljs.core.Keyword(null,"change","change",-1163046502));

cljs.core.swap_BANG_.call(null,state,busmaker.state.change_facility_line_length,factory,parseInt(e.target.value));

return busmaker.app.solve_BANG_.call(null,state);
});})(vec__8809,i,map__8812,map__8812__$1,factory,facility,n,recipes,s__8799__$2,temp__5457__auto__,factories))
}))),React.createElement("td",null,React.createElement("button",({"onClick": ((function (vec__8809,i,map__8812,map__8812__$1,factory,facility,n,recipes,s__8799__$2,temp__5457__auto__,factories){
return (function (e){
cljs.core.swap_BANG_.call(null,state,busmaker.state.remove_factory,factory);

return busmaker.app.solve_BANG_.call(null,state);
});})(vec__8809,i,map__8812,map__8812__$1,factory,facility,n,recipes,s__8799__$2,temp__5457__auto__,factories))
}),"-")),React.createElement("td",null,React.createElement("button",({"onClick": ((function (vec__8809,i,map__8812,map__8812__$1,factory,facility,n,recipes,s__8799__$2,temp__5457__auto__,factories){
return (function (e){
return busmaker.app.solve_part_BANG_.call(null,state,i);
});})(vec__8809,i,map__8812,map__8812__$1,factory,facility,n,recipes,s__8799__$2,temp__5457__auto__,factories))
, "data-toggle": "modal", "data-target": "#blueprint-part"}),"Blueprint"))),busmaker$app$iter__8798.call(null,cljs.core.rest.call(null,s__8799__$2)));
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
return iter__4324__auto__.call(null,cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,factories)));
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
return (function busmaker$app$iter__8817(s__8818){
return (new cljs.core.LazySeq(null,((function (recipe_names,factories){
return (function (){
var s__8818__$1 = s__8818;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8818__$1);
if(temp__5457__auto__){
var s__8818__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8818__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8818__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8820 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8819 = (0);
while(true){
if((i__8819 < size__4323__auto__)){
var ingredient = cljs.core._nth.call(null,c__4322__auto__,i__8819);
cljs.core.chunk_append.call(null,b__8820,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)));

var G__8821 = (i__8819 + (1));
i__8819 = G__8821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8820),busmaker$app$iter__8817.call(null,cljs.core.chunk_rest.call(null,s__8818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8820),null);
}
} else {
var ingredient = cljs.core.first.call(null,s__8818__$2);
return cljs.core.cons.call(null,React.createElement("li",({"key": ingredient}),sablono.interpreter.interpret.call(null,ingredient)),busmaker$app$iter__8817.call(null,cljs.core.rest.call(null,s__8818__$2)));
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
var attrs8822 = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),null,(1),null)),(function (){var iter__4324__auto__ = ((function (entity){
return (function busmaker$app$iter__8823(s__8824){
return (new cljs.core.LazySeq(null,((function (entity){
return (function (){
var s__8824__$1 = s__8824;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8824__$1);
if(temp__5457__auto__){
var s__8824__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8824__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8824__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8826 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8825 = (0);
while(true){
if((i__8825 < size__4323__auto__)){
var vec__8827 = cljs.core._nth.call(null,c__4322__auto__,i__8825);
var key = cljs.core.nth.call(null,vec__8827,(0),null);
var value = cljs.core.nth.call(null,vec__8827,(1),null);
cljs.core.chunk_append.call(null,b__8826,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null));

var G__8833 = (i__8825 + (1));
i__8825 = G__8833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8826),busmaker$app$iter__8823.call(null,cljs.core.chunk_rest.call(null,s__8824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8826),null);
}
} else {
var vec__8830 = cljs.core.first.call(null,s__8824__$2);
var key = cljs.core.nth.call(null,vec__8830,(0),null);
var value = cljs.core.nth.call(null,vec__8830,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,value)], null)], null),busmaker$app$iter__8823.call(null,cljs.core.rest.call(null,s__8824__$2)));
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
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs8822))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table","table-dark","table-striped","entity-details"], null)], null),attrs8822)):({"className": "table table-dark table-striped entity-details"})),((cljs.core.map_QMARK_.call(null,attrs8822))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8822)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"entity-details");
busmaker.app.solution_encoded = rum.core.build_defc.call(null,(function (solution){
return React.createElement("div",({"className": "card"}),sablono.interpreter.create_element.call(null,"textarea",({"value": busmaker.app.encode_blueprint.call(null,busmaker.app.wrap_entities.call(null,solution)), "onClick": (function (e){
e.target.select();

return document.execCommand("copy");
}), "className": "blueprint-encoded"})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"solution-encoded");
busmaker.app.blueprint_encoded = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",({"id": "blueprint", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog"}),(function (){var attrs8834 = busmaker.app.solution_encoded.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solution","solution",-1727231491)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8834))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-content"], null)], null),attrs8834)):({"className": "modal-content"})),((cljs.core.map_QMARK_.call(null,attrs8834))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8834)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint-encoded");
busmaker.app.blueprint_part_encoded = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",({"id": "blueprint-part", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog"}),(function (){var attrs8835 = busmaker.app.solution_encoded.call(null,rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8835))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-content"], null)], null),attrs8835)):({"className": "modal-content"})),((cljs.core.map_QMARK_.call(null,attrs8835))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8835)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"blueprint-part-encoded");
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
})}),"Save"),React.createElement("button",({"data-toggle": "modal", "data-target": "#blueprint"}),"Blueprint"),React.createElement("table",null,React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = (function busmaker$app$iter__8838(s__8839){
return (new cljs.core.LazySeq(null,(function (){
var s__8839__$1 = s__8839;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8839__$1);
if(temp__5457__auto__){
var s__8839__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8839__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8839__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8841 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8840 = (0);
while(true){
if((i__8840 < size__4323__auto__)){
var vec__8842 = cljs.core._nth.call(null,c__4322__auto__,i__8840);
var blueprint_name = cljs.core.nth.call(null,vec__8842,(0),null);
var blueprint_state = cljs.core.nth.call(null,vec__8842,(1),null);
cljs.core.chunk_append.call(null,b__8841,React.createElement("tr",({"key": [blueprint_name]}),(function (){var attrs8845 = blueprint_name;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8845))?sablono.interpreter.attributes.call(null,attrs8845):null),((cljs.core.map_QMARK_.call(null,attrs8845))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8845)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (i__8840,vec__8842,blueprint_name,blueprint_state,c__4322__auto__,size__4323__auto__,b__8841,s__8839__$2,temp__5457__auto__){
return (function (_){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177),blueprint_name);

return busmaker.app.load_BANG_.call(null,state);
});})(i__8840,vec__8842,blueprint_name,blueprint_state,c__4322__auto__,size__4323__auto__,b__8841,s__8839__$2,temp__5457__auto__))
}),"Load"),React.createElement("button",({"onClick": ((function (i__8840,vec__8842,blueprint_name,blueprint_state,c__4322__auto__,size__4323__auto__,b__8841,s__8839__$2,temp__5457__auto__){
return (function (_){
if(cljs.core.truth_(confirm("Are you sure?"))){
return busmaker.app.delete_blueprint_BANG_.call(null,state,blueprint_name);
} else {
return null;
}
});})(i__8840,vec__8842,blueprint_name,blueprint_state,c__4322__auto__,size__4323__auto__,b__8841,s__8839__$2,temp__5457__auto__))
}),"Delete"))));

var G__8849 = (i__8840 + (1));
i__8840 = G__8849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8841),busmaker$app$iter__8838.call(null,cljs.core.chunk_rest.call(null,s__8839__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8841),null);
}
} else {
var vec__8846 = cljs.core.first.call(null,s__8839__$2);
var blueprint_name = cljs.core.nth.call(null,vec__8846,(0),null);
var blueprint_state = cljs.core.nth.call(null,vec__8846,(1),null);
return cljs.core.cons.call(null,React.createElement("tr",({"key": [blueprint_name]}),(function (){var attrs8845 = blueprint_name;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs8845))?sablono.interpreter.attributes.call(null,attrs8845):null),((cljs.core.map_QMARK_.call(null,attrs8845))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8845)], null)));
})(),React.createElement("td",null,React.createElement("button",({"onClick": ((function (vec__8846,blueprint_name,blueprint_state,s__8839__$2,temp__5457__auto__){
return (function (_){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177),blueprint_name);

return busmaker.app.load_BANG_.call(null,state);
});})(vec__8846,blueprint_name,blueprint_state,s__8839__$2,temp__5457__auto__))
}),"Load"),React.createElement("button",({"onClick": ((function (vec__8846,blueprint_name,blueprint_state,s__8839__$2,temp__5457__auto__){
return (function (_){
if(cljs.core.truth_(confirm("Are you sure?"))){
return busmaker.app.delete_blueprint_BANG_.call(null,state,blueprint_name);
} else {
return null;
}
});})(vec__8846,blueprint_name,blueprint_state,s__8839__$2,temp__5457__auto__))
}),"Delete"))),busmaker$app$iter__8838.call(null,cljs.core.rest.call(null,s__8839__$2)));
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
return React.createElement("div",({"className": "bg-light d-flex"}),React.createElement("div",({"className": "d-flex flex-row"}),React.createElement("div",({"className": "d-flex flex-column"}),(function (){var attrs8853 = busmaker.app.recipe_selector.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8853))?sablono.interpreter.attributes.call(null,attrs8853):null),((cljs.core.map_QMARK_.call(null,attrs8853))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8853)], null)));
})(),React.createElement("button",({"onClick": (function (_){
return cljs.core.reset_BANG_.call(null,state,cljs.core.assoc.call(null,busmaker.state.empty_state.call(null),new cljs.core.Keyword(null,"store","store",1512230022),busmaker.app.busmaker_store.call(null)));
})}),"Clear"),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_load_save.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.factories.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.bus.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_encoded.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_part_encoded.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.components.call(null,state)),sablono.interpreter.interpret.call(null,busmaker.app.blueprint_decoded.call(null,state))),(function (){var attrs8850 = busmaker.pixi.panel.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8850))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d-flex","flex-column","flex-grow-1"], null)], null),attrs8850)):({"className": "d-flex flex-column flex-grow-1"})),((cljs.core.map_QMARK_.call(null,attrs8850))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs8851 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8851))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8851)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8851))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8851)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8850),(function (){var attrs8852 = busmaker.app.entity_details.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs8852))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity-details-wrapper"], null)], null),attrs8852)):({"className": "entity-details-wrapper"})),((cljs.core.map_QMARK_.call(null,attrs8852))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs8852)], null)));
})()], null)));
})()));
}),null,"blueprint");
busmaker.app.init = (function busmaker$app$init(){
cljs.core.swap_BANG_.call(null,busmaker.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"store","store",1512230022),busmaker.app.busmaker_store.call(null));

busmaker.app.solve_BANG_.call(null,busmaker.app.state);

rum.core.mount.call(null,busmaker.app.blueprint.call(null,busmaker.app.state),document.getElementById("container"));

return cljs.core.enable_console_print_BANG_.call(null);
});
busmaker.app.reload_BANG_ = (function busmaker$app$reload_BANG_(){
return busmaker.app.init.call(null);
});
