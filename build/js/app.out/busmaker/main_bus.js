// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.main_bus');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('busmaker.recipes');
goog.require('com.stuartsierra.dependency');
busmaker.main_bus.fluid_QMARK_ = (function busmaker$main_bus$fluid_QMARK_(bus_ingredient){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["crude-oil",null,"sulfuric-acid",null,"water",null,"petroleum-gas",null,"light-oil",null,"heavy-oil",null,"lubricant",null], null), null).call(null,bus_ingredient);
});
busmaker.main_bus.recipe = (function busmaker$main_bus$recipe(recipes,recipe_name){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),new cljs.core.Keyword(null,"name","name",1843675177)),recipes));
});
busmaker.main_bus.ingredient = (function busmaker$main_bus$ingredient(i){
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
busmaker.main_bus.recipe_ingredients = (function busmaker$main_bus$recipe_ingredients(recipe){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(recipe))){
return cljs.core.map.call(null,busmaker.main_bus.ingredient,cljs.core.get_in.call(null,recipe,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null)));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"normal","normal",-1519123858).cljs$core$IFn$_invoke$arity$1(recipe))){
return cljs.core.map.call(null,busmaker.main_bus.ingredient,cljs.core.get_in.call(null,recipe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null)));
} else {
return null;

}
}
});
busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"advanced-oil-processing":recipe_name);
return busmaker.main_bus.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipes.recipes,recipe_name__$1));
});
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__8075){
var vec__8076 = p__8075;
var x = cljs.core.nth.call(null,vec__8076,(0),null);
var y = cljs.core.nth.call(null,vec__8076,(1),null);
var G__8079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8079)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8079)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8079)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8079)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8079)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__8080){
var vec__8081 = p__8080;
var x = cljs.core.nth.call(null,vec__8081,(0),null);
var y = cljs.core.nth.call(null,vec__8081,(1),null);
var G__8084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8084)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8084)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8084)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8084)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8084)].join('')));

}
}
}
}
});
busmaker.main_bus.fast_underground_belt = (function busmaker$main_bus$fast_underground_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8089 = arguments.length;
var i__4532__auto___8090 = (0);
while(true){
if((i__4532__auto___8090 < len__4531__auto___8089)){
args__4534__auto__.push((arguments[i__4532__auto___8090]));

var G__8091 = (i__4532__auto___8090 + (1));
i__4532__auto___8090 = G__8091;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.fast_underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8086){
var map__8087 = p__8086;
var map__8087__$1 = ((((!((map__8087 == null)))?(((((map__8087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8087):map__8087);
var x = cljs.core.get.call(null,map__8087__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8087__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8087__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8087__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","fast-underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.fast_underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_underground_belt.cljs$lang$applyTo = (function (seq8085){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8085));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8096 = arguments.length;
var i__4532__auto___8097 = (0);
while(true){
if((i__4532__auto___8097 < len__4531__auto___8096)){
args__4534__auto__.push((arguments[i__4532__auto___8097]));

var G__8098 = (i__4532__auto___8097 + (1));
i__4532__auto___8097 = G__8098;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8093){
var map__8094 = p__8093;
var map__8094__$1 = ((((!((map__8094 == null)))?(((((map__8094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8094):map__8094);
var x = cljs.core.get.call(null,map__8094__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8094__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8094__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8094__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8092){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8092));
});

busmaker.main_bus.fast_splitter = (function busmaker$main_bus$fast_splitter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8103 = arguments.length;
var i__4532__auto___8104 = (0);
while(true){
if((i__4532__auto___8104 < len__4531__auto___8103)){
args__4534__auto__.push((arguments[i__4532__auto___8104]));

var G__8105 = (i__4532__auto___8104 + (1));
i__4532__auto___8104 = G__8105;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.fast_splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8100){
var map__8101 = p__8100;
var map__8101__$1 = ((((!((map__8101 == null)))?(((((map__8101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8101):map__8101);
var x = cljs.core.get.call(null,map__8101__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8101__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8101__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","fast-splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.fast_splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_splitter.cljs$lang$applyTo = (function (seq8099){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8099));
});

busmaker.main_bus.fast_transport_belt = (function busmaker$main_bus$fast_transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8110 = arguments.length;
var i__4532__auto___8111 = (0);
while(true){
if((i__4532__auto___8111 < len__4531__auto___8110)){
args__4534__auto__.push((arguments[i__4532__auto___8111]));

var G__8112 = (i__4532__auto___8111 + (1));
i__4532__auto___8111 = G__8112;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.fast_transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8107){
var map__8108 = p__8107;
var map__8108__$1 = ((((!((map__8108 == null)))?(((((map__8108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8108):map__8108);
var x = cljs.core.get.call(null,map__8108__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8108__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8108__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","fast-transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.fast_transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_transport_belt.cljs$lang$applyTo = (function (seq8106){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8106));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8117 = arguments.length;
var i__4532__auto___8118 = (0);
while(true){
if((i__4532__auto___8118 < len__4531__auto___8117)){
args__4534__auto__.push((arguments[i__4532__auto___8118]));

var G__8119 = (i__4532__auto___8118 + (1));
i__4532__auto___8118 = G__8119;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8114){
var map__8115 = p__8114;
var map__8115__$1 = ((((!((map__8115 == null)))?(((((map__8115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8115):map__8115);
var x = cljs.core.get.call(null,map__8115__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8115__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq8113){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8113));
});

busmaker.main_bus.fast_inserter = (function busmaker$main_bus$fast_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8124 = arguments.length;
var i__4532__auto___8125 = (0);
while(true){
if((i__4532__auto___8125 < len__4531__auto___8124)){
args__4534__auto__.push((arguments[i__4532__auto___8125]));

var G__8126 = (i__4532__auto___8125 + (1));
i__4532__auto___8125 = G__8126;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.fast_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8121){
var map__8122 = p__8121;
var map__8122__$1 = ((((!((map__8122 == null)))?(((((map__8122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8122):map__8122);
var x = cljs.core.get.call(null,map__8122__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8122__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8122__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","fast-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.fast_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_inserter.cljs$lang$applyTo = (function (seq8120){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8120));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8131 = arguments.length;
var i__4532__auto___8132 = (0);
while(true){
if((i__4532__auto___8132 < len__4531__auto___8131)){
args__4534__auto__.push((arguments[i__4532__auto___8132]));

var G__8133 = (i__4532__auto___8132 + (1));
i__4532__auto___8132 = G__8133;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8128){
var map__8129 = p__8128;
var map__8129__$1 = ((((!((map__8129 == null)))?(((((map__8129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8129):map__8129);
var x = cljs.core.get.call(null,map__8129__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8129__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8129__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8127){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8127));
});

busmaker.main_bus.factory_type = (function busmaker$main_bus$factory_type(recipe){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["copper-plate",null,"iron-plate",null,"stone-brick",null,"steel-plate",null], null), null).call(null,recipe))){
return "electric-furnace";
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
return "assembling-machine-2";

}
}
}
}
});
busmaker.main_bus.recipe_type = (function busmaker$main_bus$recipe_type(recipe){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe))){
return "advanced-oil-processing";
} else {
return recipe;

}
});
busmaker.main_bus.factory = (function busmaker$main_bus$factory(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8138 = arguments.length;
var i__4532__auto___8139 = (0);
while(true){
if((i__4532__auto___8139 < len__4531__auto___8138)){
args__4534__auto__.push((arguments[i__4532__auto___8139]));

var G__8140 = (i__4532__auto___8139 + (1));
i__4532__auto___8139 = G__8140;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8135){
var map__8136 = p__8135;
var map__8136__$1 = ((((!((map__8136 == null)))?(((((map__8136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8136):map__8136);
var x = cljs.core.get.call(null,map__8136__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8136__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var recipe = cljs.core.get.call(null,map__8136__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
return new cljs.core.PersistentArrayMap(null, 4, ["name",busmaker.main_bus.factory_type.call(null,recipe),"recipe",busmaker.main_bus.recipe_type.call(null,recipe),"position",new cljs.core.PersistentArrayMap(null, 2, ["x",(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,recipe));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["battery",null,"sulfur",null,"sulfuric-acid",null,"lubricant",null], null), null).call(null,recipe);
}
})())?x:(x - (1))
),"y",y], null),"direction",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,recipe)))?busmaker.main_bus.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)):busmaker.main_bus.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))
)], null);
});

busmaker.main_bus.factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq8134){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8134));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8153 = arguments.length;
var i__4532__auto___8154 = (0);
while(true){
if((i__4532__auto___8154 < len__4531__auto___8153)){
args__4534__auto__.push((arguments[i__4532__auto___8154]));

var G__8155 = (i__4532__auto___8154 + (1));
i__4532__auto___8154 = G__8155;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8142){
var map__8143 = p__8142;
var map__8143__$1 = ((((!((map__8143 == null)))?(((((map__8143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8143):map__8143);
var x = cljs.core.get.call(null,map__8143__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8143__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__8143__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8143,map__8143__$1,x,y,length){
return (function busmaker$main_bus$iter__8145(s__8146){
return (new cljs.core.LazySeq(null,((function (map__8143,map__8143__$1,x,y,length){
return (function (){
var s__8146__$1 = s__8146;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8146__$1);
if(temp__5457__auto__){
var s__8146__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8146__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8146__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8148 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8147 = (0);
while(true){
if((i__8147 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8147);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8148,(((i <= (1)))?(function (){var G__8149 = cljs.core.mod.call(null,i,(3));
switch (G__8149) {
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8149)].join('')));

}
})():(function (){var G__8150 = cljs.core.mod.call(null,i,(3));
switch (G__8150) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8150)].join('')));

}
})()));

var G__8158 = (i__8147 + (1));
i__8147 = G__8158;
continue;
} else {
var G__8159 = (i__8147 + (1));
i__8147 = G__8159;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8148),busmaker$main_bus$iter__8145.call(null,cljs.core.chunk_rest.call(null,s__8146__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8148),null);
}
} else {
var i = cljs.core.first.call(null,s__8146__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__8151 = cljs.core.mod.call(null,i,(3));
switch (G__8151) {
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8151)].join('')));

}
})():(function (){var G__8152 = cljs.core.mod.call(null,i,(3));
switch (G__8152) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8152)].join('')));

}
})()),busmaker$main_bus$iter__8145.call(null,cljs.core.rest.call(null,s__8146__$2)));
} else {
var G__8162 = cljs.core.rest.call(null,s__8146__$2);
s__8146__$1 = G__8162;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8143,map__8143__$1,x,y,length))
,null,null));
});})(map__8143,map__8143__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq8141){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8141));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8167 = arguments.length;
var i__4532__auto___8168 = (0);
while(true){
if((i__4532__auto___8168 < len__4531__auto___8167)){
args__4534__auto__.push((arguments[i__4532__auto___8168]));

var G__8169 = (i__4532__auto___8168 + (1));
i__4532__auto___8168 = G__8169;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8164){
var map__8165 = p__8164;
var map__8165__$1 = ((((!((map__8165 == null)))?(((((map__8165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8165):map__8165);
var x = cljs.core.get.call(null,map__8165__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8165__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8165__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8163){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8163));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8178 = arguments.length;
var i__4532__auto___8179 = (0);
while(true){
if((i__4532__auto___8179 < len__4531__auto___8178)){
args__4534__auto__.push((arguments[i__4532__auto___8179]));

var G__8180 = (i__4532__auto___8179 + (1));
i__4532__auto___8179 = G__8180;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8171){
var map__8172 = p__8171;
var map__8172__$1 = ((((!((map__8172 == null)))?(((((map__8172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8172):map__8172);
var x = cljs.core.get.call(null,map__8172__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8172__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8172__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8172,map__8172__$1,x,y,height){
return (function busmaker$main_bus$iter__8174(s__8175){
return (new cljs.core.LazySeq(null,((function (map__8172,map__8172__$1,x,y,height){
return (function (){
var s__8175__$1 = s__8175;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8175__$1);
if(temp__5457__auto__){
var s__8175__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8175__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8175__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8177 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8176 = (0);
while(true){
if((i__8176 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8176);
cljs.core.chunk_append.call(null,b__8177,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8181 = (i__8176 + (1));
i__8176 = G__8181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8177),busmaker$main_bus$iter__8174.call(null,cljs.core.chunk_rest.call(null,s__8175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8177),null);
}
} else {
var i = cljs.core.first.call(null,s__8175__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8174.call(null,cljs.core.rest.call(null,s__8175__$2)));
}
} else {
return null;
}
break;
}
});})(map__8172,map__8172__$1,x,y,height))
,null,null));
});})(map__8172,map__8172__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8170){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8170));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8190 = arguments.length;
var i__4532__auto___8191 = (0);
while(true){
if((i__4532__auto___8191 < len__4531__auto___8190)){
args__4534__auto__.push((arguments[i__4532__auto___8191]));

var G__8192 = (i__4532__auto___8191 + (1));
i__4532__auto___8191 = G__8192;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8183){
var map__8184 = p__8183;
var map__8184__$1 = ((((!((map__8184 == null)))?(((((map__8184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8184):map__8184);
var x = cljs.core.get.call(null,map__8184__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8184__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8184__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8184,map__8184__$1,x,y,height){
return (function busmaker$main_bus$iter__8186(s__8187){
return (new cljs.core.LazySeq(null,((function (map__8184,map__8184__$1,x,y,height){
return (function (){
var s__8187__$1 = s__8187;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8187__$1);
if(temp__5457__auto__){
var s__8187__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8187__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8187__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8189 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8188 = (0);
while(true){
if((i__8188 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8188);
cljs.core.chunk_append.call(null,b__8189,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8193 = (i__8188 + (1));
i__8188 = G__8193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8189),busmaker$main_bus$iter__8186.call(null,cljs.core.chunk_rest.call(null,s__8187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8189),null);
}
} else {
var i = cljs.core.first.call(null,s__8187__$2);
return cljs.core.cons.call(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8186.call(null,cljs.core.rest.call(null,s__8187__$2)));
}
} else {
return null;
}
break;
}
});})(map__8184,map__8184__$1,x,y,height))
,null,null));
});})(map__8184,map__8184__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8182){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8182));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8209 = arguments.length;
var i__4532__auto___8210 = (0);
while(true){
if((i__4532__auto___8210 < len__4531__auto___8209)){
args__4534__auto__.push((arguments[i__4532__auto___8210]));

var G__8211 = (i__4532__auto___8210 + (1));
i__4532__auto___8210 = G__8211;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__8196){
var map__8197 = p__8196;
var map__8197__$1 = ((((!((map__8197 == null)))?(((((map__8197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8197):map__8197);
var x = cljs.core.get.call(null,map__8197__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8197__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8197,map__8197__$1,x,y){
return (function busmaker$main_bus$iter__8199(s__8200){
return (new cljs.core.LazySeq(null,((function (map__8197,map__8197__$1,x,y){
return (function (){
var s__8200__$1 = s__8200;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8200__$1);
if(temp__5457__auto__){
var s__8200__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8200__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8200__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8202 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8201 = (0);
while(true){
if((i__8201 < size__4323__auto__)){
var vec__8203 = cljs.core._nth.call(null,c__4322__auto__,i__8201);
var i = cljs.core.nth.call(null,vec__8203,(0),null);
var xi = cljs.core.nth.call(null,vec__8203,(1),null);
cljs.core.chunk_append.call(null,b__8202,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__8212 = (i__8201 + (1));
i__8201 = G__8212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8202),busmaker$main_bus$iter__8199.call(null,cljs.core.chunk_rest.call(null,s__8200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8202),null);
}
} else {
var vec__8206 = cljs.core.first.call(null,s__8200__$2);
var i = cljs.core.nth.call(null,vec__8206,(0),null);
var xi = cljs.core.nth.call(null,vec__8206,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__8199.call(null,cljs.core.rest.call(null,s__8200__$2)));
}
} else {
return null;
}
break;
}
});})(map__8197,map__8197__$1,x,y))
,null,null));
});})(map__8197,map__8197__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq8194){
var G__8195 = cljs.core.first.call(null,seq8194);
var seq8194__$1 = cljs.core.next.call(null,seq8194);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8195,seq8194__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8229 = arguments.length;
var i__4532__auto___8230 = (0);
while(true){
if((i__4532__auto___8230 < len__4531__auto___8229)){
args__4534__auto__.push((arguments[i__4532__auto___8230]));

var G__8231 = (i__4532__auto___8230 + (1));
i__4532__auto___8230 = G__8231;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8214){
var map__8215 = p__8214;
var map__8215__$1 = ((((!((map__8215 == null)))?(((((map__8215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8215):map__8215);
var x = cljs.core.get.call(null,map__8215__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8215__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var ingredient = cljs.core.get.call(null,map__8215__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019));
var n_factories = cljs.core.get.call(null,map__8215__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var n_factories__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["assembling-machine-2",null,"electric-furnace",null,"chemical-plant",null,"oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?n_factories:(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories){
return (function busmaker$main_bus$iter__8217(s__8218){
return (new cljs.core.LazySeq(null,((function (n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories){
return (function (){
var s__8218__$1 = s__8218;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8218__$1);
if(temp__5457__auto__){
var s__8218__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8218__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8218__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8220 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8219 = (0);
while(true){
if((i__8219 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8219);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8220,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8219,dx,i,c__4322__auto__,size__4323__auto__,b__8220,s__8218__$2,temp__5457__auto__,n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories){
return (function busmaker$main_bus$iter__8217_$_iter__8221(s__8222){
return (new cljs.core.LazySeq(null,((function (i__8219,dx,i,c__4322__auto__,size__4323__auto__,b__8220,s__8218__$2,temp__5457__auto__,n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories){
return (function (){
var s__8222__$1 = s__8222;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8222__$1);
if(temp__5457__auto____$1){
var s__8222__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8222__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8222__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8224 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8223 = (0);
while(true){
if((i__8223 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8223);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8224,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8232 = (i__8223 + (1));
i__8223 = G__8232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8224),busmaker$main_bus$iter__8217_$_iter__8221.call(null,cljs.core.chunk_rest.call(null,s__8222__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8224),null);
}
} else {
var j = cljs.core.first.call(null,s__8222__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8217_$_iter__8221.call(null,cljs.core.rest.call(null,s__8222__$2)));
}
} else {
return null;
}
break;
}
});})(i__8219,dx,i,c__4322__auto__,size__4323__auto__,b__8220,s__8218__$2,temp__5457__auto__,n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories))
,null,null));
});})(i__8219,dx,i,c__4322__auto__,size__4323__auto__,b__8220,s__8218__$2,temp__5457__auto__,n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8233 = (i__8219 + (1));
i__8219 = G__8233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8220),busmaker$main_bus$iter__8217.call(null,cljs.core.chunk_rest.call(null,s__8218__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8220),null);
}
} else {
var i = cljs.core.first.call(null,s__8218__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8218__$2,temp__5457__auto__,n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories){
return (function busmaker$main_bus$iter__8217_$_iter__8225(s__8226){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8218__$2,temp__5457__auto__,n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories){
return (function (){
var s__8226__$1 = s__8226;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8226__$1);
if(temp__5457__auto____$1){
var s__8226__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8226__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8226__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8228 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8227 = (0);
while(true){
if((i__8227 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8227);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8234 = (i__8227 + (1));
i__8227 = G__8234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8228),busmaker$main_bus$iter__8217_$_iter__8225.call(null,cljs.core.chunk_rest.call(null,s__8226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8228),null);
}
} else {
var j = cljs.core.first.call(null,s__8226__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8217_$_iter__8225.call(null,cljs.core.rest.call(null,s__8226__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8218__$2,temp__5457__auto__,n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories))
,null,null));
});})(dx,i,s__8218__$2,temp__5457__auto__,n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__8217.call(null,cljs.core.rest.call(null,s__8218__$2)));
}
} else {
return null;
}
break;
}
});})(n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories))
,null,null));
});})(n_factories__$1,map__8215,map__8215__$1,x,y,ingredient,n_factories))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories__$1));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq8213){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8213));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8243 = arguments.length;
var i__4532__auto___8244 = (0);
while(true){
if((i__4532__auto___8244 < len__4531__auto___8243)){
args__4534__auto__.push((arguments[i__4532__auto___8244]));

var G__8245 = (i__4532__auto___8244 + (1));
i__4532__auto___8244 = G__8245;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8236){
var map__8237 = p__8236;
var map__8237__$1 = ((((!((map__8237 == null)))?(((((map__8237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8237):map__8237);
var x = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8237,map__8237__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8239(s__8240){
return (new cljs.core.LazySeq(null,((function (n,map__8237,map__8237__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__8240__$1 = s__8240;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8240__$1);
if(temp__5457__auto__){
var s__8240__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8240__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8240__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8242 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8241 = (0);
while(true){
if((i__8241 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8241);
cljs.core.chunk_append.call(null,b__8242,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8246 = (i__8241 + (1));
i__8241 = G__8246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8242),busmaker$main_bus$iter__8239.call(null,cljs.core.chunk_rest.call(null,s__8240__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8242),null);
}
} else {
var i = cljs.core.first.call(null,s__8240__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8239.call(null,cljs.core.rest.call(null,s__8240__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8237,map__8237__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8237,map__8237__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8235){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8235));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8251 = arguments.length;
var i__4532__auto___8252 = (0);
while(true){
if((i__4532__auto___8252 < len__4531__auto___8251)){
args__4534__auto__.push((arguments[i__4532__auto___8252]));

var G__8253 = (i__4532__auto___8252 + (1));
i__4532__auto___8252 = G__8253;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8248){
var map__8249 = p__8248;
var map__8249__$1 = ((((!((map__8249 == null)))?(((((map__8249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8249):map__8249);
var x = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8247){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8247));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8262 = arguments.length;
var i__4532__auto___8263 = (0);
while(true){
if((i__4532__auto___8263 < len__4531__auto___8262)){
args__4534__auto__.push((arguments[i__4532__auto___8263]));

var G__8264 = (i__4532__auto___8263 + (1));
i__4532__auto___8263 = G__8264;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8255){
var map__8256 = p__8255;
var map__8256__$1 = ((((!((map__8256 == null)))?(((((map__8256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8256):map__8256);
var x = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8256,map__8256__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8258(s__8259){
return (new cljs.core.LazySeq(null,((function (map__8256,map__8256__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__8259__$1 = s__8259;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8259__$1);
if(temp__5457__auto__){
var s__8259__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8259__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8259__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8261 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8260 = (0);
while(true){
if((i__8260 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8260);
cljs.core.chunk_append.call(null,b__8261,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8265 = (i__8260 + (1));
i__8260 = G__8265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8261),busmaker$main_bus$iter__8258.call(null,cljs.core.chunk_rest.call(null,s__8259__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8261),null);
}
} else {
var i = cljs.core.first.call(null,s__8259__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8258.call(null,cljs.core.rest.call(null,s__8259__$2)));
}
} else {
return null;
}
break;
}
});})(map__8256,map__8256__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8256,map__8256__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8254){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8254));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8276 = arguments.length;
var i__4532__auto___8277 = (0);
while(true){
if((i__4532__auto___8277 < len__4531__auto___8276)){
args__4534__auto__.push((arguments[i__4532__auto___8277]));

var G__8278 = (i__4532__auto___8277 + (1));
i__4532__auto___8277 = G__8278;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8267){
var map__8268 = p__8267;
var map__8268__$1 = ((((!((map__8268 == null)))?(((((map__8268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8268):map__8268);
var x = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8268,map__8268__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__8270(s__8271){
return (new cljs.core.LazySeq(null,((function (n,map__8268,map__8268__$1,x,y,input_index,bus_index){
return (function (){
var s__8271__$1 = s__8271;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8271__$1);
if(temp__5457__auto__){
var s__8271__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8271__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8271__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8273 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8272 = (0);
while(true){
if((i__8272 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8272);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8273,(function (){var G__8274 = cljs.core.mod.call(null,i,(3));
switch (G__8274) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8274)].join('')));

}
})());

var G__8280 = (i__8272 + (1));
i__8272 = G__8280;
continue;
} else {
var G__8281 = (i__8272 + (1));
i__8272 = G__8281;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8273),busmaker$main_bus$iter__8270.call(null,cljs.core.chunk_rest.call(null,s__8271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8273),null);
}
} else {
var i = cljs.core.first.call(null,s__8271__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__8275 = cljs.core.mod.call(null,i,(3));
switch (G__8275) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8275)].join('')));

}
})(),busmaker$main_bus$iter__8270.call(null,cljs.core.rest.call(null,s__8271__$2)));
} else {
var G__8283 = cljs.core.rest.call(null,s__8271__$2);
s__8271__$1 = G__8283;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8268,map__8268__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__8268,map__8268__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.fast_splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8266){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8266));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8296 = arguments.length;
var i__4532__auto___8297 = (0);
while(true){
if((i__4532__auto___8297 < len__4531__auto___8296)){
args__4534__auto__.push((arguments[i__4532__auto___8297]));

var G__8298 = (i__4532__auto___8297 + (1));
i__4532__auto___8297 = G__8298;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8285){
var map__8286 = p__8285;
var map__8286__$1 = ((((!((map__8286 == null)))?(((((map__8286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8286):map__8286);
var x = cljs.core.get.call(null,map__8286__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8286__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8286__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8286,map__8286__$1,x,y,output_index){
return (function busmaker$main_bus$iter__8288(s__8289){
return (new cljs.core.LazySeq(null,((function (n,map__8286,map__8286__$1,x,y,output_index){
return (function (){
var s__8289__$1 = s__8289;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8289__$1);
if(temp__5457__auto__){
var s__8289__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8289__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8289__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8291 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8290 = (0);
while(true){
if((i__8290 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8290);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8291,(((i >= n))?(function (){var G__8292 = cljs.core.mod.call(null,i,(3));
switch (G__8292) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8292)].join('')));

}
})():(function (){var G__8293 = cljs.core.mod.call(null,i,(3));
switch (G__8293) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8293)].join('')));

}
})()));

var G__8301 = (i__8290 + (1));
i__8290 = G__8301;
continue;
} else {
var G__8302 = (i__8290 + (1));
i__8290 = G__8302;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8291),busmaker$main_bus$iter__8288.call(null,cljs.core.chunk_rest.call(null,s__8289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8291),null);
}
} else {
var i = cljs.core.first.call(null,s__8289__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8294 = cljs.core.mod.call(null,i,(3));
switch (G__8294) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8294)].join('')));

}
})():(function (){var G__8295 = cljs.core.mod.call(null,i,(3));
switch (G__8295) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8295)].join('')));

}
})()),busmaker$main_bus$iter__8288.call(null,cljs.core.rest.call(null,s__8289__$2)));
} else {
var G__8305 = cljs.core.rest.call(null,s__8289__$2);
s__8289__$1 = G__8305;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8286,map__8286__$1,x,y,output_index))
,null,null));
});})(n,map__8286,map__8286__$1,x,y,output_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8284){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8284));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8310 = arguments.length;
var i__4532__auto___8311 = (0);
while(true){
if((i__4532__auto___8311 < len__4531__auto___8310)){
args__4534__auto__.push((arguments[i__4532__auto___8311]));

var G__8312 = (i__4532__auto___8311 + (1));
i__4532__auto___8311 = G__8312;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8307){
var map__8308 = p__8307;
var map__8308__$1 = ((((!((map__8308 == null)))?(((((map__8308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8308):map__8308);
var x = cljs.core.get.call(null,map__8308__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8308__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8308__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8306){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8306));
});

busmaker.main_bus.ingredient_height = (function busmaker$main_bus$ingredient_height(ingredient){
var t = busmaker.main_bus.factory_type.call(null,ingredient);
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,t))){
return (9);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,t))){
return (16);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,t))){
return ((11) + (((n > (3)))?((n - (3)) + (1)):(0)));
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,t))){
return (12);
} else {
throw cljs.core.ex_info.call(null,"Unknown ingredient height",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
busmaker.main_bus.main_bus_line = (function busmaker$main_bus$main_bus_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8424 = arguments.length;
var i__4532__auto___8425 = (0);
while(true){
if((i__4532__auto___8425 < len__4531__auto___8424)){
args__4534__auto__.push((arguments[i__4532__auto___8425]));

var G__8426 = (i__4532__auto___8425 + (1));
i__4532__auto___8425 = G__8426;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8316){
var map__8317 = p__8316;
var map__8317__$1 = ((((!((map__8317 == null)))?(((((map__8317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8317):map__8317);
var x = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var n_factories = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var buses = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"buses","buses",214650120),cljs.core.PersistentVector.EMPTY);
var output_index = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446));
var ingredient = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),"iron-gear");
var input_indexes = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ready_indexes = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348));
var outputs = cljs.core.PersistentHashSet.createAsIfByAssoc([output_index]);
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-3):(0)
))));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (p1__8313_SHARP_,p2__8314_SHARP_){
return cljs.core.assoc.call(null,p1__8313_SHARP_,"entity_number",(p2__8314_SHARP_ + (1)));
});})(outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,(function (){var G__8319 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8320(s__8321){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8321__$1 = s__8321;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8321__$1);
if(temp__5457__auto__){
var s__8321__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8321__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8321__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8323 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8322 = (0);
while(true){
if((i__8322 < size__4323__auto__)){
var vec__8324 = cljs.core._nth.call(null,c__4322__auto__,i__8322);
var bus_ingredient = cljs.core.nth.call(null,vec__8324,(0),null);
var i = cljs.core.nth.call(null,vec__8324,(1),null);
cljs.core.chunk_append.call(null,b__8323,(function (){var t = busmaker.main_bus.factory_type.call(null,ingredient);
var x__$1 = (x + (6));
var y__$2 = (((y__$1 + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,t))?(3):(0)
));
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient));
var dy = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,t))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,t))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,t))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,t))?((3) + (((n > (3)))?((1) + (n - (3))):(0))):(0)
))));
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient));
}
})());

var G__8427 = (i__8322 + (1));
i__8322 = G__8427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8323),busmaker$main_bus$iter__8320.call(null,cljs.core.chunk_rest.call(null,s__8321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8323),null);
}
} else {
var vec__8327 = cljs.core.first.call(null,s__8321__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__8327,(0),null);
var i = cljs.core.nth.call(null,vec__8327,(1),null);
return cljs.core.cons.call(null,(function (){var t = busmaker.main_bus.factory_type.call(null,ingredient);
var x__$1 = (x + (6));
var y__$2 = (((y__$1 + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,t))?(3):(0)
));
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient));
var dy = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,t))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,t))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,t))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,t))?((3) + (((n > (3)))?((1) + (n - (3))):(0))):(0)
))));
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient));
}
})(),busmaker$main_bus$iter__8320.call(null,cljs.core.rest.call(null,s__8321__$2)));
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,buses);
})())),(function (){var x__$1 = (x + (6));
var y__$2 = (y__$1 + (6));
var non_fluid_ingredients = cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,cljs.core.map.call(null,buses,cljs.core.remove.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient)))));
return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3938__auto__ = (cljs.core.count.call(null,non_fluid_ingredients) > (3));
if(and__3938__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"electric-furnace",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient));
} else {
return and__3938__auto__;
}
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8330(s__8331){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8331__$1 = s__8331;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8331__$1);
if(temp__5457__auto__){
var s__8331__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8331__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8331__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8333 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8332 = (0);
while(true){
if((i__8332 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8332);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__8428 = (i__8332 + (1));
i__8332 = G__8428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),busmaker$main_bus$iter__8330.call(null,cljs.core.chunk_rest.call(null,s__8331__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),null);
}
} else {
var i = cljs.core.first.call(null,s__8331__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__8330.call(null,cljs.core.rest.call(null,s__8331__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8334(s__8335){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8335__$1 = s__8335;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8335__$1);
if(temp__5457__auto__){
var s__8335__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8335__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8335__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8337 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8336 = (0);
while(true){
if((i__8336 < size__4323__auto__)){
var vec__8338 = cljs.core._nth.call(null,c__4322__auto__,i__8336);
var input_index = cljs.core.nth.call(null,vec__8338,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8338,(1),null);
cljs.core.chunk_append.call(null,b__8337,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8336,x__$2,y__$4,y__$3,vec__8338,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8337,s__8335__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8334_$_iter__8341(s__8342){
return (new cljs.core.LazySeq(null,((function (i__8336,x__$2,y__$4,y__$3,vec__8338,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8337,s__8335__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8342__$1 = s__8342;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8342__$1);
if(temp__5457__auto____$1){
var s__8342__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8342__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8342__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8344 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8343 = (0);
while(true){
if((i__8343 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8343);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8344,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8429 = (i__8343 + (1));
i__8343 = G__8429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8344),busmaker$main_bus$iter__8334_$_iter__8341.call(null,cljs.core.chunk_rest.call(null,s__8342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8344),null);
}
} else {
var i = cljs.core.first.call(null,s__8342__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8334_$_iter__8341.call(null,cljs.core.rest.call(null,s__8342__$2)));
}
} else {
return null;
}
break;
}
});})(i__8336,x__$2,y__$4,y__$3,vec__8338,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8337,s__8335__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8336,x__$2,y__$4,y__$3,vec__8338,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8337,s__8335__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__8430 = (i__8336 + (1));
i__8336 = G__8430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8337),busmaker$main_bus$iter__8334.call(null,cljs.core.chunk_rest.call(null,s__8335__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8337),null);
}
} else {
var vec__8345 = cljs.core.first.call(null,s__8335__$2);
var input_index = cljs.core.nth.call(null,vec__8345,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8345,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$4,y__$3,vec__8345,input_index,bus_index,s__8335__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8334_$_iter__8348(s__8349){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$4,y__$3,vec__8345,input_index,bus_index,s__8335__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8349__$1 = s__8349;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8349__$1);
if(temp__5457__auto____$1){
var s__8349__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8349__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8349__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8351 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8350 = (0);
while(true){
if((i__8350 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8350);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8351,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8431 = (i__8350 + (1));
i__8350 = G__8431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8351),busmaker$main_bus$iter__8334_$_iter__8348.call(null,cljs.core.chunk_rest.call(null,s__8349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8351),null);
}
} else {
var i = cljs.core.first.call(null,s__8349__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8334_$_iter__8348.call(null,cljs.core.rest.call(null,s__8349__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$4,y__$3,vec__8345,input_index,bus_index,s__8335__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$2,y__$4,y__$3,vec__8345,input_index,bus_index,s__8335__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__8334.call(null,cljs.core.rest.call(null,s__8335__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8352(s__8353){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8353__$1 = s__8353;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8353__$1);
if(temp__5457__auto__){
var s__8353__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8353__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8353__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8355 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8354 = (0);
while(true){
if((i__8354 < size__4323__auto__)){
var vec__8356 = cljs.core._nth.call(null,c__4322__auto__,i__8354);
var output_recipe = cljs.core.nth.call(null,vec__8356,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8356,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8355,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8354,s__8353__$1,tap_x,x__$1,y__$2,vec__8356,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8355,s__8353__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8352_$_iter__8359(s__8360){
return (new cljs.core.LazySeq(null,((function (i__8354,s__8353__$1,tap_x,x__$1,y__$2,vec__8356,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8355,s__8353__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8360__$1 = s__8360;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8360__$1);
if(temp__5457__auto____$1){
var s__8360__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8360__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8360__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8362 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8361 = (0);
while(true){
if((i__8361 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8361);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8362,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8363 = cljs.core.mod.call(null,i,(3));
switch (G__8363) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8363)].join('')));

}
})()));

var G__8433 = (i__8361 + (1));
i__8361 = G__8433;
continue;
} else {
var G__8434 = (i__8361 + (1));
i__8361 = G__8434;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8362),busmaker$main_bus$iter__8352_$_iter__8359.call(null,cljs.core.chunk_rest.call(null,s__8360__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8362),null);
}
} else {
var i = cljs.core.first.call(null,s__8360__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8364 = cljs.core.mod.call(null,i,(3));
switch (G__8364) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8364)].join('')));

}
})()),busmaker$main_bus$iter__8352_$_iter__8359.call(null,cljs.core.rest.call(null,s__8360__$2)));
} else {
var G__8436 = cljs.core.rest.call(null,s__8360__$2);
s__8360__$1 = G__8436;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8354,s__8353__$1,tap_x,x__$1,y__$2,vec__8356,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8355,s__8353__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8354,s__8353__$1,tap_x,x__$1,y__$2,vec__8356,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8355,s__8353__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(0)
))))));
})());

var G__8437 = (i__8354 + (1));
i__8354 = G__8437;
continue;
} else {
var G__8438 = (i__8354 + (1));
i__8354 = G__8438;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8355),busmaker$main_bus$iter__8352.call(null,cljs.core.chunk_rest.call(null,s__8353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8355),null);
}
} else {
var vec__8365 = cljs.core.first.call(null,s__8353__$2);
var output_recipe = cljs.core.nth.call(null,vec__8365,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8365,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cons.call(null,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8353__$1,tap_x,x__$1,y__$2,vec__8365,output_recipe,output_index__$1,s__8353__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8352_$_iter__8368(s__8369){
return (new cljs.core.LazySeq(null,((function (s__8353__$1,tap_x,x__$1,y__$2,vec__8365,output_recipe,output_index__$1,s__8353__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8369__$1 = s__8369;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8369__$1);
if(temp__5457__auto____$1){
var s__8369__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8369__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8369__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8371 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8370 = (0);
while(true){
if((i__8370 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8370);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8371,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8372 = cljs.core.mod.call(null,i,(3));
switch (G__8372) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8372)].join('')));

}
})()));

var G__8440 = (i__8370 + (1));
i__8370 = G__8440;
continue;
} else {
var G__8441 = (i__8370 + (1));
i__8370 = G__8441;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8371),busmaker$main_bus$iter__8352_$_iter__8368.call(null,cljs.core.chunk_rest.call(null,s__8369__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8371),null);
}
} else {
var i = cljs.core.first.call(null,s__8369__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8373 = cljs.core.mod.call(null,i,(3));
switch (G__8373) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8373)].join('')));

}
})()),busmaker$main_bus$iter__8352_$_iter__8368.call(null,cljs.core.rest.call(null,s__8369__$2)));
} else {
var G__8443 = cljs.core.rest.call(null,s__8369__$2);
s__8369__$1 = G__8443;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8353__$1,tap_x,x__$1,y__$2,vec__8365,output_recipe,output_index__$1,s__8353__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8353__$1,tap_x,x__$1,y__$2,vec__8365,output_recipe,output_index__$1,s__8353__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8352.call(null,cljs.core.rest.call(null,s__8353__$2)));
} else {
var G__8444 = cljs.core.rest.call(null,s__8353__$2);
s__8353__$1 = G__8444;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8374(s__8375){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8375__$1 = s__8375;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8375__$1);
if(temp__5457__auto__){
var s__8375__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8375__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8375__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8377 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8376 = (0);
while(true){
if((i__8376 < size__4323__auto__)){
var vec__8378 = cljs.core._nth.call(null,c__4322__auto__,i__8376);
var output_recipe = cljs.core.nth.call(null,vec__8378,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8378,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8377,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = (y__$1 + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8376,s__8375__$1,tap_x,x__$1,y__$2,vec__8378,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8377,s__8375__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8374_$_iter__8381(s__8382){
return (new cljs.core.LazySeq(null,((function (i__8376,s__8375__$1,tap_x,x__$1,y__$2,vec__8378,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8377,s__8375__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8382__$1 = s__8382;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8382__$1);
if(temp__5457__auto____$1){
var s__8382__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8382__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8382__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8384 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8383 = (0);
while(true){
if((i__8383 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8383);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8384,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8385 = cljs.core.mod.call(null,i,(3));
switch (G__8385) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8385)].join('')));

}
})()));

var G__8446 = (i__8383 + (1));
i__8383 = G__8446;
continue;
} else {
var G__8447 = (i__8383 + (1));
i__8383 = G__8447;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8384),busmaker$main_bus$iter__8374_$_iter__8381.call(null,cljs.core.chunk_rest.call(null,s__8382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8384),null);
}
} else {
var i = cljs.core.first.call(null,s__8382__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8386 = cljs.core.mod.call(null,i,(3));
switch (G__8386) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8386)].join('')));

}
})()),busmaker$main_bus$iter__8374_$_iter__8381.call(null,cljs.core.rest.call(null,s__8382__$2)));
} else {
var G__8449 = cljs.core.rest.call(null,s__8382__$2);
s__8382__$1 = G__8449;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8376,s__8375__$1,tap_x,x__$1,y__$2,vec__8378,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8377,s__8375__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8376,s__8375__$1,tap_x,x__$1,y__$2,vec__8378,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8377,s__8375__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})());

var G__8450 = (i__8376 + (1));
i__8376 = G__8450;
continue;
} else {
var G__8451 = (i__8376 + (1));
i__8376 = G__8451;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8377),busmaker$main_bus$iter__8374.call(null,cljs.core.chunk_rest.call(null,s__8375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8377),null);
}
} else {
var vec__8387 = cljs.core.first.call(null,s__8375__$2);
var output_recipe = cljs.core.nth.call(null,vec__8387,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8387,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cons.call(null,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = (y__$1 + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8375__$1,tap_x,x__$1,y__$2,vec__8387,output_recipe,output_index__$1,s__8375__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8374_$_iter__8390(s__8391){
return (new cljs.core.LazySeq(null,((function (s__8375__$1,tap_x,x__$1,y__$2,vec__8387,output_recipe,output_index__$1,s__8375__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8391__$1 = s__8391;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8391__$1);
if(temp__5457__auto____$1){
var s__8391__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8391__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8391__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8393 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8392 = (0);
while(true){
if((i__8392 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8392);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8393,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8394 = cljs.core.mod.call(null,i,(3));
switch (G__8394) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8394)].join('')));

}
})()));

var G__8453 = (i__8392 + (1));
i__8392 = G__8453;
continue;
} else {
var G__8454 = (i__8392 + (1));
i__8392 = G__8454;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8393),busmaker$main_bus$iter__8374_$_iter__8390.call(null,cljs.core.chunk_rest.call(null,s__8391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8393),null);
}
} else {
var i = cljs.core.first.call(null,s__8391__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8395 = cljs.core.mod.call(null,i,(3));
switch (G__8395) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8395)].join('')));

}
})()),busmaker$main_bus$iter__8374_$_iter__8390.call(null,cljs.core.rest.call(null,s__8391__$2)));
} else {
var G__8456 = cljs.core.rest.call(null,s__8391__$2);
s__8391__$1 = G__8456;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8375__$1,tap_x,x__$1,y__$2,vec__8387,output_recipe,output_index__$1,s__8375__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8375__$1,tap_x,x__$1,y__$2,vec__8387,output_recipe,output_index__$1,s__8375__$2,temp__5457__auto__,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})(),busmaker$main_bus$iter__8374.call(null,cljs.core.rest.call(null,s__8375__$2)));
} else {
var G__8457 = cljs.core.rest.call(null,s__8375__$2);
s__8375__$1 = G__8457;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__8319__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8319,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$2 = (y__$1 + (6));
var iter__4324__auto__ = ((function (x__$1,y__$2,G__8319,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8396(s__8397){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,G__8319,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8397__$1 = s__8397;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8397__$1);
if(temp__5457__auto__){
var s__8397__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8397__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8397__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8399 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8398 = (0);
while(true){
if((i__8398 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8398);
cljs.core.chunk_append.call(null,b__8399,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index)));

var G__8458 = (i__8398 + (1));
i__8398 = G__8458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8399),busmaker$main_bus$iter__8396.call(null,cljs.core.chunk_rest.call(null,s__8397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8399),null);
}
} else {
var i = cljs.core.first.call(null,s__8397__$2);
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index)),busmaker$main_bus$iter__8396.call(null,cljs.core.rest.call(null,s__8397__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,G__8319,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,G__8319,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8319);
var G__8319__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient)))?cljs.core.concat.call(null,G__8319__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8319,G__8319__$1,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8400(s__8401){
return (new cljs.core.LazySeq(null,((function (G__8319,G__8319__$1,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8401__$1 = s__8401;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8401__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8401__$1,i,xs__6012__auto__,temp__5457__auto__,G__8319,G__8319__$1,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8400_$_iter__8402(s__8403){
return (new cljs.core.LazySeq(null,((function (s__8401__$1,i,xs__6012__auto__,temp__5457__auto__,G__8319,G__8319__$1,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8403__$1 = s__8403;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8403__$1);
if(temp__5457__auto____$1){
var s__8403__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8403__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8403__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8405 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8404 = (0);
while(true){
if((i__8404 < size__4323__auto__)){
var vec__8406 = cljs.core._nth.call(null,c__4322__auto__,i__8404);
var input_recipe = cljs.core.nth.call(null,vec__8406,(0),null);
var input_index = cljs.core.nth.call(null,vec__8406,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8405,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)),args))))));

var G__8459 = (i__8404 + (1));
i__8404 = G__8459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8405),busmaker$main_bus$iter__8400_$_iter__8402.call(null,cljs.core.chunk_rest.call(null,s__8403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8405),null);
}
} else {
var vec__8409 = cljs.core.first.call(null,s__8403__$2);
var input_recipe = cljs.core.nth.call(null,vec__8409,(0),null);
var input_index = cljs.core.nth.call(null,vec__8409,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)),args))))),busmaker$main_bus$iter__8400_$_iter__8402.call(null,cljs.core.rest.call(null,s__8403__$2)));
}
} else {
return null;
}
break;
}
});})(s__8401__$1,i,xs__6012__auto__,temp__5457__auto__,G__8319,G__8319__$1,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8401__$1,i,xs__6012__auto__,temp__5457__auto__,G__8319,G__8319__$1,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8400.call(null,cljs.core.rest.call(null,s__8401__$1)));
} else {
var G__8460 = cljs.core.rest.call(null,s__8401__$1);
s__8401__$1 = G__8460;
continue;
}
} else {
return null;
}
break;
}
});})(G__8319,G__8319__$1,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(G__8319,G__8319__$1,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8319__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8319__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$2,x__$1,G__8319,G__8319__$1,G__8319__$2,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8412(s__8413){
return (new cljs.core.LazySeq(null,((function (y__$2,x__$1,G__8319,G__8319__$1,G__8319__$2,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8413__$1 = s__8413;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8413__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8413__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8319,G__8319__$1,G__8319__$2,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8412_$_iter__8414(s__8415){
return (new cljs.core.LazySeq(null,((function (s__8413__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8319,G__8319__$1,G__8319__$2,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8415__$1 = s__8415;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8415__$1);
if(temp__5457__auto____$1){
var s__8415__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8415__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8415__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8417 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8416 = (0);
while(true){
if((i__8416 < size__4323__auto__)){
var vec__8418 = cljs.core._nth.call(null,c__4322__auto__,i__8416);
var output_recipe = cljs.core.nth.call(null,vec__8418,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8418,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8417,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)));

var G__8461 = (i__8416 + (1));
i__8416 = G__8461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8417),busmaker$main_bus$iter__8412_$_iter__8414.call(null,cljs.core.chunk_rest.call(null,s__8415__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8417),null);
}
} else {
var vec__8421 = cljs.core.first.call(null,s__8415__$2);
var output_recipe = cljs.core.nth.call(null,vec__8421,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8421,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)),busmaker$main_bus$iter__8412_$_iter__8414.call(null,cljs.core.rest.call(null,s__8415__$2)));
}
} else {
return null;
}
break;
}
});})(s__8413__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8319,G__8319__$1,G__8319__$2,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8413__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8319,G__8319__$1,G__8319__$2,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8412.call(null,cljs.core.rest.call(null,s__8413__$1)));
} else {
var G__8462 = cljs.core.rest.call(null,s__8413__$1);
s__8413__$1 = G__8462;
continue;
}
} else {
return null;
}
break;
}
});})(y__$2,x__$1,G__8319,G__8319__$1,G__8319__$2,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(y__$2,x__$1,G__8319,G__8319__$1,G__8319__$2,outputs,y__$1,map__8317,map__8317__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8319__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8315){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8315));
});

busmaker.main_bus.recipe_by_name = (function busmaker$main_bus$recipe_by_name(recipes,recipe_name){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),new cljs.core.Keyword(null,"name","name",1843675177)),recipes));
});
busmaker.main_bus.recipe_order = (function busmaker$main_bus$recipe_order(g,recipes,recipe_name){
var r = busmaker.main_bus.recipe_by_name.call(null,recipes,recipe_name);
if(cljs.core.not.call(null,r)){
return g;
} else {
return cljs.core.reduce.call(null,((function (r){
return (function (g__$1,ingredient){
var g__$2 = com.stuartsierra.dependency.depend.call(null,g__$1,recipe_name,ingredient);
return busmaker.main_bus.recipe_order.call(null,g__$2,recipes,ingredient);
});})(r))
,g,busmaker.main_bus.recipe_ingredients.call(null,r));
}
});
busmaker.main_bus.sorted_recipe_order = (function busmaker$main_bus$sorted_recipe_order(recipe_name){
return com.stuartsierra.dependency.topo_sort.call(null,busmaker.main_bus.recipe_order.call(null,com.stuartsierra.dependency.graph.call(null),busmaker.recipes.recipes,recipe_name));
});
/**
 * Returns a lazy sequence of the elements of coll removing duplicates of (f item).
 *   Returns a stateful transducer when no collection is provided.
 */
busmaker.main_bus.distinct_by = (function busmaker$main_bus$distinct_by(var_args){
var G__8464 = arguments.length;
switch (G__8464) {
case 1:
return busmaker.main_bus.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return busmaker.main_bus.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

busmaker.main_bus.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__8470 = null;
var G__8470__0 = (function (){
return rf.call(null);
});
var G__8470__1 = (function (result){
return rf.call(null,result);
});
var G__8470__2 = (function (result,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),input)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),input));

return rf.call(null,result,input);
}
});
G__8470 = function(result,input){
switch(arguments.length){
case 0:
return G__8470__0.call(this);
case 1:
return G__8470__1.call(this,result);
case 2:
return G__8470__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8470.cljs$core$IFn$_invoke$arity$0 = G__8470__0;
G__8470.cljs$core$IFn$_invoke$arity$1 = G__8470__1;
G__8470.cljs$core$IFn$_invoke$arity$2 = G__8470__2;
return G__8470;
})()
;})(seen))
});
});

busmaker.main_bus.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function busmaker$main_bus$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__8465,seen__$1){
while(true){
var vec__8466 = p__8465;
var h = cljs.core.nth.call(null,vec__8466,(0),null);
var xs__$1 = vec__8466;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f.call(null,h))){
var G__8471 = cljs.core.rest.call(null,s);
var G__8472 = seen__$1;
p__8465 = G__8471;
seen__$1 = G__8472;
continue;
} else {
return cljs.core.cons.call(null,h,busmaker$main_bus$step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,f.call(null,h))));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

busmaker.main_bus.distinct_by.cljs$lang$maxFixedArity = 2;

busmaker.main_bus.ingredients_by_recipe = (function busmaker$main_bus$ingredients_by_recipe(var_args){
var G__8474 = arguments.length;
switch (G__8474) {
case 0:
return busmaker.main_bus.ingredients_by_recipe.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return busmaker.main_bus.ingredients_by_recipe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

busmaker.main_bus.ingredients_by_recipe.cljs$core$IFn$_invoke$arity$0 = (function (){
return busmaker.main_bus.ingredients_by_recipe.call(null,"fast-underground-belt");
});

busmaker.main_bus.ingredients_by_recipe.cljs$core$IFn$_invoke$arity$1 = (function (name){
return cljs.core.distinct.call(null,busmaker.main_bus.sorted_recipe_order.call(null,name));
});

busmaker.main_bus.ingredients_by_recipe.cljs$lang$maxFixedArity = 1;

busmaker.main_bus.products = (function busmaker$main_bus$products(recipe_names){
var oil_QMARK_ = cljs.core.seq.call(null,cljs.core.mapcat.call(null,(function (recipe_name){
return cljs.core.filter.call(null,(function (p1__8476_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__8476_SHARP_));
}),busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name));
}),recipe_names));
var products = cljs.core.reduce.call(null,((function (oil_QMARK_){
return (function (products,recipe_name){
return cljs.core.apply.call(null,cljs.core.conj,products,cljs.core.remove.call(null,cljs.core.set.call(null,products),cljs.core.remove.call(null,((function (oil_QMARK_){
return (function (p1__8477_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__8477_SHARP_));
});})(oil_QMARK_))
,busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name))));
});})(oil_QMARK_))
,((oil_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heavy-oil"], null):cljs.core.PersistentVector.EMPTY),recipe_names);
var others = ((oil_QMARK_)?clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),busmaker.recipes.recipes))),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),busmaker.recipes.recipes))))),cljs.core.set.call(null,products)):null);
var deps = cljs.core.map_indexed.call(null,cljs.core.vector,products);
var bus_outputs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.concat.call(null,products,others))));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"oil?","oil?",1078295839),oil_QMARK_,new cljs.core.Keyword(null,"products","products",1876973544),products,new cljs.core.Keyword(null,"others","others",2084874583),others,new cljs.core.Keyword(null,"deps","deps",1883360319),deps,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),bus_outputs], null);
});
busmaker.main_bus.created_QMARK_ = (function busmaker$main_bus$created_QMARK_(recipe_name){
return cljs.core.not.call(null,cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,recipe_name));
});
busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(recipe_names,factories){
var map__8479 = busmaker.main_bus.products.call(null,recipe_names);
var map__8479__$1 = ((((!((map__8479 == null)))?(((((map__8479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8479):map__8479);
var oil_QMARK_ = cljs.core.get.call(null,map__8479__$1,new cljs.core.Keyword(null,"oil?","oil?",1078295839));
var products = cljs.core.get.call(null,map__8479__$1,new cljs.core.Keyword(null,"products","products",1876973544));
var others = cljs.core.get.call(null,map__8479__$1,new cljs.core.Keyword(null,"others","others",2084874583));
var deps = cljs.core.get.call(null,map__8479__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var bus_outputs = cljs.core.get.call(null,map__8479__$1,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (map__8479,map__8479__$1,oil_QMARK_,products,others,deps,bus_outputs){
return (function (p__8481,p__8482){
var map__8483 = p__8481;
var map__8483__$1 = ((((!((map__8483 == null)))?(((((map__8483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8483):map__8483);
var acc = map__8483__$1;
var y = cljs.core.get.call(null,map__8483__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__8484 = p__8482;
var output_index = cljs.core.nth.call(null,vec__8484,(0),null);
var ingredient = cljs.core.nth.call(null,vec__8484,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,(function (){var input_indexes = cljs.core.map.call(null,bus_outputs,busmaker.main_bus.ingredients.call(null,ingredient));
return busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_outputs,new cljs.core.Keyword(null,"y","y",-1757859776),((y - busmaker.main_bus.ingredient_height.call(null,ingredient)) - (1)),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),cljs.core.get_in.call(null,factories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ingredient,new cljs.core.Keyword(null,"n","n",562130025)], null),(1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348),cljs.core.set.call(null,cljs.core.range.call(null,output_index)));
})()),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,busmaker.main_bus.ingredient_height.call(null,ingredient));
});})(map__8479,map__8479__$1,oil_QMARK_,products,others,deps,bus_outputs))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),cljs.core.filter.call(null,((function (map__8479,map__8479__$1,oil_QMARK_,products,others,deps,bus_outputs){
return (function (p1__8478_SHARP_){
return busmaker.main_bus.created_QMARK_.call(null,cljs.core.second.call(null,p1__8478_SHARP_));
});})(map__8479,map__8479__$1,oil_QMARK_,products,others,deps,bus_outputs))
,deps))));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8488_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8488_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8488_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
