// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.state');
goog.require('cljs.core');
goog.require('busmaker.bus');
goog.require('busmaker.recipe_data');
goog.require('busmaker.recipes');
goog.require('busmaker.plan');
busmaker.state.default_recipe_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electronic-circuit",null], null), null);
busmaker.state.empty_state = (function busmaker$state$empty_state(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177),"blueprint-1",new cljs.core.Keyword(null,"factories","factories",1443149712),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),(4)], null);
});
busmaker.state.default_state = (function busmaker$state$default_state(){
var factories = busmaker.bus.default_factories.call(null,busmaker.state.default_recipe_names);
var bus_outputs = busmaker.bus.default_buses.call(null,busmaker.state.default_recipe_names);
var state = busmaker.state.empty_state.call(null);
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"factories","factories",1443149712),factories,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),bus_outputs,new cljs.core.Keyword(null,"solution","solution",-1727231491),busmaker.plan.plan.call(null,factories,bus_outputs,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167).cljs$core$IFn$_invoke$arity$1(state))], null));
});
busmaker.state.add_recipe = (function busmaker$state$add_recipe(state,recipe_name){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.Keyword(null,"factories","factories",1443149712).cljs$core$IFn$_invoke$arity$1(state))))){
return state;
} else {
var bus_outputs = busmaker.bus.add_bus_outputs.call(null,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584).cljs$core$IFn$_invoke$arity$1(state),busmaker.bus.default_buses.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_name], null)));
var factories = busmaker.bus.add_factories.call(null,new cljs.core.Keyword(null,"factories","factories",1443149712).cljs$core$IFn$_invoke$arity$1(state),busmaker.bus.default_factories.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_name], null)));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"factories","factories",1443149712),factories),new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),bus_outputs);
}
});
busmaker.state.add_bus_output = (function busmaker$state$add_bus_output(state,recipe_name){
if(cljs.core.not.call(null,(function (){var or__3949__auto__ = recipe_name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.seq.call(null,recipe_name);
}
})())){
return state;
} else {
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipe_data.extra_buses)).call(null,recipe_name))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),busmaker.bus.add_bus_outputs_multi,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_name], null));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.Keyword(null,"factories","factories",1443149712).cljs$core$IFn$_invoke$arity$1(state))))){
return state;
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),busmaker.bus.add_bus_outputs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_name], null));

}
}
}
});
busmaker.state.remove_factory = (function busmaker$state$remove_factory(state,factory){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"factories","factories",1443149712),busmaker.bus.remove_factory,factory);
});
busmaker.state.remove_recipe = (function busmaker$state$remove_recipe(state,recipe_name){
return busmaker.state.remove_factory.call(null,state,busmaker.bus.get_factory.call(null,new cljs.core.Keyword(null,"factories","factories",1443149712).cljs$core$IFn$_invoke$arity$1(state),recipe_name));
});
busmaker.state.remove_bus = (function busmaker$state$remove_bus(state,recipe_name){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),(function (p1__8635_SHARP_){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),p1__8635_SHARP_));
}));
});
busmaker.state.set_bus_output_recipe = (function busmaker$state$set_bus_output_recipe(state,bus_index,recipe){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),(function (bus_outputs){
return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (index,output){
if(cljs.core._EQ_.call(null,index,bus_index)){
return recipe;
} else {
return output;
}
}),bus_outputs));
}));
});
busmaker.state.move_bus_output_up = (function busmaker$state$move_bus_output_up(state,bus_index){
var map__8636 = state;
var map__8636__$1 = ((((!((map__8636 == null)))?(((((map__8636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8636):map__8636);
var bus_outputs = cljs.core.get.call(null,map__8636__$1,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584));
var vec__8637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.call(null,bus_outputs,(0),bus_index),cljs.core.subvec.call(null,bus_outputs,bus_index,(bus_index + (1))),cljs.core.subvec.call(null,bus_outputs,(bus_index + (1)))], null);
var left = cljs.core.nth.call(null,vec__8637,(0),null);
var middle = cljs.core.nth.call(null,vec__8637,(1),null);
var right = cljs.core.nth.call(null,vec__8637,(2),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),cljs.core.vec.call(null,cljs.core.concat.call(null,left,cljs.core.take.call(null,(1),right),middle,cljs.core.drop.call(null,(1),right))));
});
busmaker.state.move_bus_output_down = (function busmaker$state$move_bus_output_down(state,bus_index){
var map__8641 = state;
var map__8641__$1 = ((((!((map__8641 == null)))?(((((map__8641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8641):map__8641);
var bus_outputs = cljs.core.get.call(null,map__8641__$1,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584));
var vec__8642 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.call(null,bus_outputs,(0),bus_index),cljs.core.subvec.call(null,bus_outputs,bus_index,(bus_index + (1))),cljs.core.subvec.call(null,bus_outputs,(bus_index + (1)))], null);
var left = cljs.core.nth.call(null,vec__8642,(0),null);
var middle = cljs.core.nth.call(null,vec__8642,(1),null);
var right = cljs.core.nth.call(null,vec__8642,(2),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.butlast.call(null,left),middle,cljs.core.take_last.call(null,(1),left),right)));
});
busmaker.state.swap_facility = (function busmaker$state$swap_facility(state,factory,facility){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"factories","factories",1443149712),(function (p1__8646_SHARP_){
return cljs.core.mapv.call(null,(function (f){
if(cljs.core._EQ_.call(null,factory,f)){
return cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility);
} else {
return f;
}
}),p1__8646_SHARP_);
}));
});
busmaker.state.change_facility_line_length = (function busmaker$state$change_facility_line_length(state,factory,n){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"factories","factories",1443149712),(function (p1__8647_SHARP_){
return cljs.core.mapv.call(null,(function (f){
if(cljs.core._EQ_.call(null,factory,f)){
return cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"n","n",562130025),n);
} else {
return f;
}
}),p1__8647_SHARP_);
}));
});
busmaker.state.set_bus_width = (function busmaker$state$set_bus_width(state,bus_width){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width);
});
