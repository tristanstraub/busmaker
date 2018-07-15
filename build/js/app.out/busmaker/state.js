// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.state');
goog.require('cljs.core');
goog.require('busmaker.bus');
goog.require('busmaker.recipe_data');
goog.require('busmaker.recipes');
goog.require('busmaker.plan');
busmaker.state.default_recipe_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["_research_",null], null), null);
busmaker.state.empty_state = (function busmaker$state$empty_state(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blueprint-name","blueprint-name",64242177),"blueprint-1",new cljs.core.Keyword(null,"factories","factories",1443149712),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),cljs.core.PersistentVector.EMPTY], null);
});
busmaker.state.default_state = (function busmaker$state$default_state(){
var factories = busmaker.bus.default_factories.call(null,busmaker.state.default_recipe_names);
var bus_outputs = busmaker.bus.default_buses.call(null,busmaker.state.default_recipe_names);
return cljs.core.merge.call(null,busmaker.state.empty_state.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"factories","factories",1443149712),factories,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),bus_outputs,new cljs.core.Keyword(null,"solution","solution",-1727231491),busmaker.plan.plan.call(null,factories,bus_outputs)], null));
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
busmaker.state.remove_factory = (function busmaker$state$remove_factory(state,factory){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"factories","factories",1443149712),busmaker.bus.remove_factory,factory);
});
busmaker.state.remove_recipe = (function busmaker$state$remove_recipe(state,recipe_name){
return busmaker.state.remove_factory.call(null,state,busmaker.bus.get_factory.call(null,new cljs.core.Keyword(null,"factories","factories",1443149712).cljs$core$IFn$_invoke$arity$1(state),recipe_name));
});
busmaker.state.remove_bus = (function busmaker$state$remove_bus(state,recipe_name){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),(function (p1__8522_SHARP_){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),p1__8522_SHARP_));
}));
});
busmaker.state.swap_facility = (function busmaker$state$swap_facility(state,factory,facility){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"factories","factories",1443149712),(function (p1__8523_SHARP_){
return cljs.core.mapv.call(null,(function (f){
if(cljs.core._EQ_.call(null,factory,f)){
return cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility);
} else {
return f;
}
}),p1__8523_SHARP_);
}));
});
busmaker.state.change_facility_line_length = (function busmaker$state$change_facility_line_length(state,factory,n){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"factories","factories",1443149712),(function (p1__8524_SHARP_){
return cljs.core.mapv.call(null,(function (f){
if(cljs.core._EQ_.call(null,factory,f)){
return cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"n","n",562130025),n);
} else {
return f;
}
}),p1__8524_SHARP_);
}));
});
