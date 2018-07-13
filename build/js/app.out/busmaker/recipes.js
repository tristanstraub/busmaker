// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.recipes');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('busmaker.recipe_data');
busmaker.recipes.factory_type = (function busmaker$recipes$factory_type(recipe){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["_research_",null], null), null).call(null,recipe))){
return "lab";
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["copper-plate",null,"iron-plate",null,"stone-brick",null,"steel-plate",null], null), null).call(null,recipe))){
return "stone-furnace";
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe))){
return "oil-refinery";
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["battery",null,"explosives",null,"sulfur",null,"sulfuric-acid",null,"plastic-bar",null,"lubricant",null], null), null).call(null,recipe))){
return "chemical-plant";
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/ore/,recipe))){
return "electric-mining-drill";
} else {
return "assembling-machine-1";

}
}
}
}
}
});
busmaker.recipes.recipe_type = (function busmaker$recipes$recipe_type(recipe){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe))){
return "advanced-oil-processing";
} else {
return recipe;

}
});
busmaker.recipes.recipe_by_name = (function busmaker$recipes$recipe_by_name(recipes,recipe_name){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),new cljs.core.Keyword(null,"name","name",1843675177)),recipes));
});
busmaker.recipes.ingredient = (function busmaker$recipes$ingredient(i){
if(cljs.core.map_QMARK_.call(null,i)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
} else {
if(cljs.core.vector_QMARK_.call(null,i)){
return cljs.core.first.call(null,i);
} else {
return cljs.core.ex_info.call(null,"Unknown ingredient",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),i], null));

}
}
});
busmaker.recipes.recipe_ingredients = (function busmaker$recipes$recipe_ingredients(recipe){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(recipe))){
return cljs.core.map.call(null,busmaker.recipes.ingredient,cljs.core.get_in.call(null,recipe,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null)));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"normal","normal",-1519123858).cljs$core$IFn$_invoke$arity$1(recipe))){
return cljs.core.map.call(null,busmaker.recipes.ingredient,cljs.core.get_in.call(null,recipe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null)));
} else {
return null;

}
}
});
busmaker.recipes.recipe_order = (function busmaker$recipes$recipe_order(g,recipes,recipe_name){
var r = busmaker.recipes.recipe_by_name.call(null,recipes,recipe_name);
if(cljs.core.not.call(null,r)){
return g;
} else {
return cljs.core.reduce.call(null,((function (r){
return (function (g__$1,ingredient){
var g__$2 = com.stuartsierra.dependency.depend.call(null,g__$1,recipe_name,ingredient);
return busmaker.recipes.recipe_order.call(null,g__$2,recipes,ingredient);
});})(r))
,g,busmaker.recipes.recipe_ingredients.call(null,r));
}
});
busmaker.recipes.sorted_recipe_order = (function busmaker$recipes$sorted_recipe_order(recipe_name){
return com.stuartsierra.dependency.topo_sort.call(null,busmaker.recipes.recipe_order.call(null,com.stuartsierra.dependency.graph.call(null),busmaker.recipe_data.recipes,recipe_name));
});
busmaker.recipes.ingredients_by_recipe_recursive = (function busmaker$recipes$ingredients_by_recipe_recursive(recipe_name){
var ingredients = busmaker.recipes.sorted_recipe_order.call(null,recipe_name);
var coal_QMARK_ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null),cljs.core.map.call(null,busmaker.recipes.factory_type,ingredients));
return cljs.core.distinct.call(null,(cljs.core.truth_(coal_QMARK_)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["coal"], null),ingredients):ingredients
));
});
busmaker.recipes.required_ingredients = (function busmaker$recipes$required_ingredients(recipe_names){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (recipe_name){
return busmaker.recipes.ingredients_by_recipe_recursive.call(null,recipe_name);
}),recipe_names));
});
busmaker.recipes.raw_QMARK_ = (function busmaker$recipes$raw_QMARK_(recipe_name){
return cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,recipe_name);
});
