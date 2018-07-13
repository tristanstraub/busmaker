// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.bus');
goog.require('cljs.core');
goog.require('busmaker.recipes');
goog.require('clojure.set');
goog.require('busmaker.recipe_data');
busmaker.bus.default_buses = (function busmaker$bus$default_buses(recipe_names){
return cljs.core.distinct.call(null,cljs.core.mapcat.call(null,busmaker.recipes.ingredients_by_recipe_recursive,recipe_names));
});
busmaker.bus.factory_outputs = (function busmaker$bus$factory_outputs(factory_type,recipe_name){
if(cljs.core._EQ_.call(null,factory_type,"oil-refinery")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heavy-oil","light-oil","petroleum-gas"], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_name], null);

}
});
busmaker.bus.default_factories = (function busmaker$bus$default_factories(recipe_names){
return cljs.core.mapv.call(null,(function (p1__4660_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.Keyword(null,"facility","facility",-2118099900)],[(1),busmaker.bus.factory_outputs.call(null,busmaker.recipes.factory_type.call(null,p1__4660_SHARP_),p1__4660_SHARP_),busmaker.recipes.factory_type.call(null,p1__4660_SHARP_)]);
}),cljs.core.remove.call(null,busmaker.recipes.raw_QMARK_,busmaker.bus.default_buses.call(null,recipe_names)));
});
busmaker.bus.add_factories = (function busmaker$bus$add_factories(factories,new_factories){
var existing_recipes = cljs.core.set.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"recipes","recipes",-325236209),factories));
return cljs.core.into.call(null,cljs.core.vec.call(null,factories),cljs.core.remove.call(null,((function (existing_recipes){
return (function (p1__4661_SHARP_){
return cljs.core.every_QMARK_.call(null,existing_recipes,new cljs.core.Keyword(null,"recipes","recipes",-325236209).cljs$core$IFn$_invoke$arity$1(p1__4661_SHARP_));
});})(existing_recipes))
,new_factories));
});
busmaker.bus.add_bus_outputs = (function busmaker$bus$add_bus_outputs(bus_outputs,new_bus_outputs){
var existing_bus_outputs = cljs.core.set.call(null,bus_outputs);
return cljs.core.into.call(null,cljs.core.vec.call(null,bus_outputs),cljs.core.remove.call(null,existing_bus_outputs,new_bus_outputs));
});
busmaker.bus.remove_factory = (function busmaker$bus$remove_factory(factories,factory){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([factory]),factories));
});
busmaker.bus.get_factory = (function busmaker$bus$get_factory(factories,recipe_name){
var _PERCENT_ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__4662_SHARP_){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),new cljs.core.Keyword(null,"recipes","recipes",-325236209).cljs$core$IFn$_invoke$arity$1(p1__4662_SHARP_));
}),factories));
if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});
