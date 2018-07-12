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
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__8081){
var vec__8082 = p__8081;
var x = cljs.core.nth.call(null,vec__8082,(0),null);
var y = cljs.core.nth.call(null,vec__8082,(1),null);
var G__8085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8085)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8085)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8085)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8085)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8085)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__8086){
var vec__8087 = p__8086;
var x = cljs.core.nth.call(null,vec__8087,(0),null);
var y = cljs.core.nth.call(null,vec__8087,(1),null);
var G__8090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8090)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8090)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8090)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8090)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8090)].join('')));

}
}
}
}
});
busmaker.main_bus.underground_belt = (function busmaker$main_bus$underground_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8095 = arguments.length;
var i__4532__auto___8096 = (0);
while(true){
if((i__4532__auto___8096 < len__4531__auto___8095)){
args__4534__auto__.push((arguments[i__4532__auto___8096]));

var G__8097 = (i__4532__auto___8096 + (1));
i__4532__auto___8096 = G__8097;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8092){
var map__8093 = p__8092;
var map__8093__$1 = ((((!((map__8093 == null)))?(((((map__8093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8093):map__8093);
var x = cljs.core.get.call(null,map__8093__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8093__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8093__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8093__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.underground_belt.cljs$lang$applyTo = (function (seq8091){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8091));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8102 = arguments.length;
var i__4532__auto___8103 = (0);
while(true){
if((i__4532__auto___8103 < len__4531__auto___8102)){
args__4534__auto__.push((arguments[i__4532__auto___8103]));

var G__8104 = (i__4532__auto___8103 + (1));
i__4532__auto___8103 = G__8104;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8099){
var map__8100 = p__8099;
var map__8100__$1 = ((((!((map__8100 == null)))?(((((map__8100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8100):map__8100);
var x = cljs.core.get.call(null,map__8100__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8100__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8100__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8100__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8098){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8098));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8109 = arguments.length;
var i__4532__auto___8110 = (0);
while(true){
if((i__4532__auto___8110 < len__4531__auto___8109)){
args__4534__auto__.push((arguments[i__4532__auto___8110]));

var G__8111 = (i__4532__auto___8110 + (1));
i__4532__auto___8110 = G__8111;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8106){
var map__8107 = p__8106;
var map__8107__$1 = ((((!((map__8107 == null)))?(((((map__8107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8107):map__8107);
var x = cljs.core.get.call(null,map__8107__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8107__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8107__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8105){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8105));
});

busmaker.main_bus.transport_belt = (function busmaker$main_bus$transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8116 = arguments.length;
var i__4532__auto___8117 = (0);
while(true){
if((i__4532__auto___8117 < len__4531__auto___8116)){
args__4534__auto__.push((arguments[i__4532__auto___8117]));

var G__8118 = (i__4532__auto___8117 + (1));
i__4532__auto___8117 = G__8118;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8113){
var map__8114 = p__8113;
var map__8114__$1 = ((((!((map__8114 == null)))?(((((map__8114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8114):map__8114);
var x = cljs.core.get.call(null,map__8114__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8114__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8114__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.transport_belt.cljs$lang$applyTo = (function (seq8112){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8112));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8123 = arguments.length;
var i__4532__auto___8124 = (0);
while(true){
if((i__4532__auto___8124 < len__4531__auto___8123)){
args__4534__auto__.push((arguments[i__4532__auto___8124]));

var G__8125 = (i__4532__auto___8124 + (1));
i__4532__auto___8124 = G__8125;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8120){
var map__8121 = p__8120;
var map__8121__$1 = ((((!((map__8121 == null)))?(((((map__8121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8121):map__8121);
var x = cljs.core.get.call(null,map__8121__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8121__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq8119){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8119));
});

busmaker.main_bus.inserter = (function busmaker$main_bus$inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8130 = arguments.length;
var i__4532__auto___8131 = (0);
while(true){
if((i__4532__auto___8131 < len__4531__auto___8130)){
args__4534__auto__.push((arguments[i__4532__auto___8131]));

var G__8132 = (i__4532__auto___8131 + (1));
i__4532__auto___8131 = G__8132;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8127){
var map__8128 = p__8127;
var map__8128__$1 = ((((!((map__8128 == null)))?(((((map__8128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8128):map__8128);
var x = cljs.core.get.call(null,map__8128__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8128__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8128__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.inserter.cljs$lang$applyTo = (function (seq8126){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8126));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8137 = arguments.length;
var i__4532__auto___8138 = (0);
while(true){
if((i__4532__auto___8138 < len__4531__auto___8137)){
args__4534__auto__.push((arguments[i__4532__auto___8138]));

var G__8139 = (i__4532__auto___8138 + (1));
i__4532__auto___8138 = G__8139;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8134){
var map__8135 = p__8134;
var map__8135__$1 = ((((!((map__8135 == null)))?(((((map__8135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8135):map__8135);
var x = cljs.core.get.call(null,map__8135__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8135__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8135__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8133){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8133));
});

busmaker.main_bus.factory_type = (function busmaker$main_bus$factory_type(recipe){
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
var len__4531__auto___8144 = arguments.length;
var i__4532__auto___8145 = (0);
while(true){
if((i__4532__auto___8145 < len__4531__auto___8144)){
args__4534__auto__.push((arguments[i__4532__auto___8145]));

var G__8146 = (i__4532__auto___8145 + (1));
i__4532__auto___8145 = G__8146;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8141){
var map__8142 = p__8141;
var map__8142__$1 = ((((!((map__8142 == null)))?(((((map__8142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8142):map__8142);
var x = cljs.core.get.call(null,map__8142__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8142__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__8142__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__8142__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
return new cljs.core.PersistentArrayMap(null, 4, ["name",facility,"recipe",busmaker.main_bus.recipe_type.call(null,recipe),"position",new cljs.core.PersistentArrayMap(null, 2, ["x",(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,recipe));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["battery",null,"sulfur",null,"sulfuric-acid",null,"lubricant",null], null), null).call(null,recipe);
}
})())?x:(x - (1))
),"y",y], null),"direction",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?busmaker.main_bus.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)):busmaker.main_bus.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))
)], null);
});

busmaker.main_bus.factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq8140){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8140));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8159 = arguments.length;
var i__4532__auto___8160 = (0);
while(true){
if((i__4532__auto___8160 < len__4531__auto___8159)){
args__4534__auto__.push((arguments[i__4532__auto___8160]));

var G__8161 = (i__4532__auto___8160 + (1));
i__4532__auto___8160 = G__8161;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8148){
var map__8149 = p__8148;
var map__8149__$1 = ((((!((map__8149 == null)))?(((((map__8149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8149):map__8149);
var x = cljs.core.get.call(null,map__8149__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8149__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__8149__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8149,map__8149__$1,x,y,length){
return (function busmaker$main_bus$iter__8151(s__8152){
return (new cljs.core.LazySeq(null,((function (map__8149,map__8149__$1,x,y,length){
return (function (){
var s__8152__$1 = s__8152;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8152__$1);
if(temp__5457__auto__){
var s__8152__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8152__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8152__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8154 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8153 = (0);
while(true){
if((i__8153 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8153);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8154,(((i <= (1)))?(function (){var G__8155 = cljs.core.mod.call(null,i,(3));
switch (G__8155) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8155)].join('')));

}
})():(function (){var G__8156 = cljs.core.mod.call(null,i,(3));
switch (G__8156) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8156)].join('')));

}
})()));

var G__8164 = (i__8153 + (1));
i__8153 = G__8164;
continue;
} else {
var G__8165 = (i__8153 + (1));
i__8153 = G__8165;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8154),busmaker$main_bus$iter__8151.call(null,cljs.core.chunk_rest.call(null,s__8152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8154),null);
}
} else {
var i = cljs.core.first.call(null,s__8152__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__8157 = cljs.core.mod.call(null,i,(3));
switch (G__8157) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8157)].join('')));

}
})():(function (){var G__8158 = cljs.core.mod.call(null,i,(3));
switch (G__8158) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8158)].join('')));

}
})()),busmaker$main_bus$iter__8151.call(null,cljs.core.rest.call(null,s__8152__$2)));
} else {
var G__8168 = cljs.core.rest.call(null,s__8152__$2);
s__8152__$1 = G__8168;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8149,map__8149__$1,x,y,length))
,null,null));
});})(map__8149,map__8149__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq8147){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8147));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8173 = arguments.length;
var i__4532__auto___8174 = (0);
while(true){
if((i__4532__auto___8174 < len__4531__auto___8173)){
args__4534__auto__.push((arguments[i__4532__auto___8174]));

var G__8175 = (i__4532__auto___8174 + (1));
i__4532__auto___8174 = G__8175;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8170){
var map__8171 = p__8170;
var map__8171__$1 = ((((!((map__8171 == null)))?(((((map__8171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8171):map__8171);
var x = cljs.core.get.call(null,map__8171__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8171__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8171__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8169){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8169));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8184 = arguments.length;
var i__4532__auto___8185 = (0);
while(true){
if((i__4532__auto___8185 < len__4531__auto___8184)){
args__4534__auto__.push((arguments[i__4532__auto___8185]));

var G__8186 = (i__4532__auto___8185 + (1));
i__4532__auto___8185 = G__8186;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8177){
var map__8178 = p__8177;
var map__8178__$1 = ((((!((map__8178 == null)))?(((((map__8178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8178):map__8178);
var x = cljs.core.get.call(null,map__8178__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8178__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8178__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8178,map__8178__$1,x,y,height){
return (function busmaker$main_bus$iter__8180(s__8181){
return (new cljs.core.LazySeq(null,((function (map__8178,map__8178__$1,x,y,height){
return (function (){
var s__8181__$1 = s__8181;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8181__$1);
if(temp__5457__auto__){
var s__8181__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8181__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8181__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8183 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8182 = (0);
while(true){
if((i__8182 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8182);
cljs.core.chunk_append.call(null,b__8183,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8187 = (i__8182 + (1));
i__8182 = G__8187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8183),busmaker$main_bus$iter__8180.call(null,cljs.core.chunk_rest.call(null,s__8181__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8183),null);
}
} else {
var i = cljs.core.first.call(null,s__8181__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8180.call(null,cljs.core.rest.call(null,s__8181__$2)));
}
} else {
return null;
}
break;
}
});})(map__8178,map__8178__$1,x,y,height))
,null,null));
});})(map__8178,map__8178__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8176){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8176));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8196 = arguments.length;
var i__4532__auto___8197 = (0);
while(true){
if((i__4532__auto___8197 < len__4531__auto___8196)){
args__4534__auto__.push((arguments[i__4532__auto___8197]));

var G__8198 = (i__4532__auto___8197 + (1));
i__4532__auto___8197 = G__8198;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8189){
var map__8190 = p__8189;
var map__8190__$1 = ((((!((map__8190 == null)))?(((((map__8190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8190):map__8190);
var x = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8190,map__8190__$1,x,y,height){
return (function busmaker$main_bus$iter__8192(s__8193){
return (new cljs.core.LazySeq(null,((function (map__8190,map__8190__$1,x,y,height){
return (function (){
var s__8193__$1 = s__8193;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8193__$1);
if(temp__5457__auto__){
var s__8193__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8193__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8193__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8195 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8194 = (0);
while(true){
if((i__8194 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8194);
cljs.core.chunk_append.call(null,b__8195,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8199 = (i__8194 + (1));
i__8194 = G__8199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8195),busmaker$main_bus$iter__8192.call(null,cljs.core.chunk_rest.call(null,s__8193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8195),null);
}
} else {
var i = cljs.core.first.call(null,s__8193__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8192.call(null,cljs.core.rest.call(null,s__8193__$2)));
}
} else {
return null;
}
break;
}
});})(map__8190,map__8190__$1,x,y,height))
,null,null));
});})(map__8190,map__8190__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8188){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8188));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8215 = arguments.length;
var i__4532__auto___8216 = (0);
while(true){
if((i__4532__auto___8216 < len__4531__auto___8215)){
args__4534__auto__.push((arguments[i__4532__auto___8216]));

var G__8217 = (i__4532__auto___8216 + (1));
i__4532__auto___8216 = G__8217;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__8202){
var map__8203 = p__8202;
var map__8203__$1 = ((((!((map__8203 == null)))?(((((map__8203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8203):map__8203);
var x = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8203,map__8203__$1,x,y){
return (function busmaker$main_bus$iter__8205(s__8206){
return (new cljs.core.LazySeq(null,((function (map__8203,map__8203__$1,x,y){
return (function (){
var s__8206__$1 = s__8206;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8206__$1);
if(temp__5457__auto__){
var s__8206__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8206__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8206__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8208 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8207 = (0);
while(true){
if((i__8207 < size__4323__auto__)){
var vec__8209 = cljs.core._nth.call(null,c__4322__auto__,i__8207);
var i = cljs.core.nth.call(null,vec__8209,(0),null);
var xi = cljs.core.nth.call(null,vec__8209,(1),null);
cljs.core.chunk_append.call(null,b__8208,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__8218 = (i__8207 + (1));
i__8207 = G__8218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8208),busmaker$main_bus$iter__8205.call(null,cljs.core.chunk_rest.call(null,s__8206__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8208),null);
}
} else {
var vec__8212 = cljs.core.first.call(null,s__8206__$2);
var i = cljs.core.nth.call(null,vec__8212,(0),null);
var xi = cljs.core.nth.call(null,vec__8212,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__8205.call(null,cljs.core.rest.call(null,s__8206__$2)));
}
} else {
return null;
}
break;
}
});})(map__8203,map__8203__$1,x,y))
,null,null));
});})(map__8203,map__8203__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq8200){
var G__8201 = cljs.core.first.call(null,seq8200);
var seq8200__$1 = cljs.core.next.call(null,seq8200);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8201,seq8200__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8235 = arguments.length;
var i__4532__auto___8236 = (0);
while(true){
if((i__4532__auto___8236 < len__4531__auto___8235)){
args__4534__auto__.push((arguments[i__4532__auto___8236]));

var G__8237 = (i__4532__auto___8236 + (1));
i__4532__auto___8236 = G__8237;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8220){
var map__8221 = p__8220;
var map__8221__$1 = ((((!((map__8221 == null)))?(((((map__8221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8221):map__8221);
var x = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var ingredient = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019));
var n_factories = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(1));
var facility = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8221,map__8221__$1,x,y,ingredient,n_factories,facility){
return (function busmaker$main_bus$iter__8223(s__8224){
return (new cljs.core.LazySeq(null,((function (map__8221,map__8221__$1,x,y,ingredient,n_factories,facility){
return (function (){
var s__8224__$1 = s__8224;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8224__$1);
if(temp__5457__auto__){
var s__8224__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8224__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8224__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8226 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8225 = (0);
while(true){
if((i__8225 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8225);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8226,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8225,dx,i,c__4322__auto__,size__4323__auto__,b__8226,s__8224__$2,temp__5457__auto__,map__8221,map__8221__$1,x,y,ingredient,n_factories,facility){
return (function busmaker$main_bus$iter__8223_$_iter__8227(s__8228){
return (new cljs.core.LazySeq(null,((function (i__8225,dx,i,c__4322__auto__,size__4323__auto__,b__8226,s__8224__$2,temp__5457__auto__,map__8221,map__8221__$1,x,y,ingredient,n_factories,facility){
return (function (){
var s__8228__$1 = s__8228;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8228__$1);
if(temp__5457__auto____$1){
var s__8228__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8228__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8228__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8230 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8229 = (0);
while(true){
if((i__8229 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8229);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8238 = (i__8229 + (1));
i__8229 = G__8238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8230),busmaker$main_bus$iter__8223_$_iter__8227.call(null,cljs.core.chunk_rest.call(null,s__8228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8230),null);
}
} else {
var j = cljs.core.first.call(null,s__8228__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8223_$_iter__8227.call(null,cljs.core.rest.call(null,s__8228__$2)));
}
} else {
return null;
}
break;
}
});})(i__8225,dx,i,c__4322__auto__,size__4323__auto__,b__8226,s__8224__$2,temp__5457__auto__,map__8221,map__8221__$1,x,y,ingredient,n_factories,facility))
,null,null));
});})(i__8225,dx,i,c__4322__auto__,size__4323__auto__,b__8226,s__8224__$2,temp__5457__auto__,map__8221,map__8221__$1,x,y,ingredient,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8239 = (i__8225 + (1));
i__8225 = G__8239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8226),busmaker$main_bus$iter__8223.call(null,cljs.core.chunk_rest.call(null,s__8224__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8226),null);
}
} else {
var i = cljs.core.first.call(null,s__8224__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8224__$2,temp__5457__auto__,map__8221,map__8221__$1,x,y,ingredient,n_factories,facility){
return (function busmaker$main_bus$iter__8223_$_iter__8231(s__8232){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8224__$2,temp__5457__auto__,map__8221,map__8221__$1,x,y,ingredient,n_factories,facility){
return (function (){
var s__8232__$1 = s__8232;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8232__$1);
if(temp__5457__auto____$1){
var s__8232__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8232__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8232__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8234 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8233 = (0);
while(true){
if((i__8233 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8233);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8240 = (i__8233 + (1));
i__8233 = G__8240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8234),busmaker$main_bus$iter__8223_$_iter__8231.call(null,cljs.core.chunk_rest.call(null,s__8232__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8234),null);
}
} else {
var j = cljs.core.first.call(null,s__8232__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8223_$_iter__8231.call(null,cljs.core.rest.call(null,s__8232__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8224__$2,temp__5457__auto__,map__8221,map__8221__$1,x,y,ingredient,n_factories,facility))
,null,null));
});})(dx,i,s__8224__$2,temp__5457__auto__,map__8221,map__8221__$1,x,y,ingredient,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__8223.call(null,cljs.core.rest.call(null,s__8224__$2)));
}
} else {
return null;
}
break;
}
});})(map__8221,map__8221__$1,x,y,ingredient,n_factories,facility))
,null,null));
});})(map__8221,map__8221__$1,x,y,ingredient,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq8219){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8219));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8249 = arguments.length;
var i__4532__auto___8250 = (0);
while(true){
if((i__4532__auto___8250 < len__4531__auto___8249)){
args__4534__auto__.push((arguments[i__4532__auto___8250]));

var G__8251 = (i__4532__auto___8250 + (1));
i__4532__auto___8250 = G__8251;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8242){
var map__8243 = p__8242;
var map__8243__$1 = ((((!((map__8243 == null)))?(((((map__8243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8243):map__8243);
var x = cljs.core.get.call(null,map__8243__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8243__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8243__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8243__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8243__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8243__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8243,map__8243__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8245(s__8246){
return (new cljs.core.LazySeq(null,((function (n,map__8243,map__8243__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__8246__$1 = s__8246;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8246__$1);
if(temp__5457__auto__){
var s__8246__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8246__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8246__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8248 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8247 = (0);
while(true){
if((i__8247 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8247);
cljs.core.chunk_append.call(null,b__8248,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8252 = (i__8247 + (1));
i__8247 = G__8252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8248),busmaker$main_bus$iter__8245.call(null,cljs.core.chunk_rest.call(null,s__8246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8248),null);
}
} else {
var i = cljs.core.first.call(null,s__8246__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8245.call(null,cljs.core.rest.call(null,s__8246__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8243,map__8243__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8243,map__8243__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8241){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8241));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8257 = arguments.length;
var i__4532__auto___8258 = (0);
while(true){
if((i__4532__auto___8258 < len__4531__auto___8257)){
args__4534__auto__.push((arguments[i__4532__auto___8258]));

var G__8259 = (i__4532__auto___8258 + (1));
i__4532__auto___8258 = G__8259;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8254){
var map__8255 = p__8254;
var map__8255__$1 = ((((!((map__8255 == null)))?(((((map__8255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8255):map__8255);
var x = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8253){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8253));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8268 = arguments.length;
var i__4532__auto___8269 = (0);
while(true){
if((i__4532__auto___8269 < len__4531__auto___8268)){
args__4534__auto__.push((arguments[i__4532__auto___8269]));

var G__8270 = (i__4532__auto___8269 + (1));
i__4532__auto___8269 = G__8270;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8261){
var map__8262 = p__8261;
var map__8262__$1 = ((((!((map__8262 == null)))?(((((map__8262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8262):map__8262);
var x = cljs.core.get.call(null,map__8262__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8262__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8262__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8262__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8262__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8262,map__8262__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8264(s__8265){
return (new cljs.core.LazySeq(null,((function (map__8262,map__8262__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__8265__$1 = s__8265;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8265__$1);
if(temp__5457__auto__){
var s__8265__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8265__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8265__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8267 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8266 = (0);
while(true){
if((i__8266 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8266);
cljs.core.chunk_append.call(null,b__8267,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8271 = (i__8266 + (1));
i__8266 = G__8271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8267),busmaker$main_bus$iter__8264.call(null,cljs.core.chunk_rest.call(null,s__8265__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8267),null);
}
} else {
var i = cljs.core.first.call(null,s__8265__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8264.call(null,cljs.core.rest.call(null,s__8265__$2)));
}
} else {
return null;
}
break;
}
});})(map__8262,map__8262__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8262,map__8262__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8260){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8260));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8282 = arguments.length;
var i__4532__auto___8283 = (0);
while(true){
if((i__4532__auto___8283 < len__4531__auto___8282)){
args__4534__auto__.push((arguments[i__4532__auto___8283]));

var G__8284 = (i__4532__auto___8283 + (1));
i__4532__auto___8283 = G__8284;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8273){
var map__8274 = p__8273;
var map__8274__$1 = ((((!((map__8274 == null)))?(((((map__8274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8274):map__8274);
var x = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8274,map__8274__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__8276(s__8277){
return (new cljs.core.LazySeq(null,((function (n,map__8274,map__8274__$1,x,y,input_index,bus_index){
return (function (){
var s__8277__$1 = s__8277;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8277__$1);
if(temp__5457__auto__){
var s__8277__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8277__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8277__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8279 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8278 = (0);
while(true){
if((i__8278 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8278);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8279,(function (){var G__8280 = cljs.core.mod.call(null,i,(3));
switch (G__8280) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8280)].join('')));

}
})());

var G__8286 = (i__8278 + (1));
i__8278 = G__8286;
continue;
} else {
var G__8287 = (i__8278 + (1));
i__8278 = G__8287;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8279),busmaker$main_bus$iter__8276.call(null,cljs.core.chunk_rest.call(null,s__8277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8279),null);
}
} else {
var i = cljs.core.first.call(null,s__8277__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__8281 = cljs.core.mod.call(null,i,(3));
switch (G__8281) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8281)].join('')));

}
})(),busmaker$main_bus$iter__8276.call(null,cljs.core.rest.call(null,s__8277__$2)));
} else {
var G__8289 = cljs.core.rest.call(null,s__8277__$2);
s__8277__$1 = G__8289;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8274,map__8274__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__8274,map__8274__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8272){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8272));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8298 = arguments.length;
var i__4532__auto___8299 = (0);
while(true){
if((i__4532__auto___8299 < len__4531__auto___8298)){
args__4534__auto__.push((arguments[i__4532__auto___8299]));

var G__8300 = (i__4532__auto___8299 + (1));
i__4532__auto___8299 = G__8300;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8291){
var map__8292 = p__8291;
var map__8292__$1 = ((((!((map__8292 == null)))?(((((map__8292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8292):map__8292);
var x = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8292,map__8292__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8294(s__8295){
return (new cljs.core.LazySeq(null,((function (map__8292,map__8292__$1,x,y,output_index,y_extension){
return (function (){
var s__8295__$1 = s__8295;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8295__$1);
if(temp__5457__auto__){
var s__8295__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8295__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8295__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8297 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8296 = (0);
while(true){
if((i__8296 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8296);
cljs.core.chunk_append.call(null,b__8297,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

var G__8301 = (i__8296 + (1));
i__8296 = G__8301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8297),busmaker$main_bus$iter__8294.call(null,cljs.core.chunk_rest.call(null,s__8295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8297),null);
}
} else {
var i = cljs.core.first.call(null,s__8295__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8294.call(null,cljs.core.rest.call(null,s__8295__$2)));
}
} else {
return null;
}
break;
}
});})(map__8292,map__8292__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8292,map__8292__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})(),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8290){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8290));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8314 = arguments.length;
var i__4532__auto___8315 = (0);
while(true){
if((i__4532__auto___8315 < len__4531__auto___8314)){
args__4534__auto__.push((arguments[i__4532__auto___8315]));

var G__8316 = (i__4532__auto___8315 + (1));
i__4532__auto___8315 = G__8316;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8303){
var map__8304 = p__8303;
var map__8304__$1 = ((((!((map__8304 == null)))?(((((map__8304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8304):map__8304);
var x = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8304,map__8304__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8306(s__8307){
return (new cljs.core.LazySeq(null,((function (n,map__8304,map__8304__$1,x,y,output_index,y_extension){
return (function (){
var s__8307__$1 = s__8307;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8307__$1);
if(temp__5457__auto__){
var s__8307__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8307__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8307__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8309 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8308 = (0);
while(true){
if((i__8308 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8308);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8309,(((i >= n))?(function (){var G__8310 = cljs.core.mod.call(null,i,(3));
switch (G__8310) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8310)].join('')));

}
})():(function (){var G__8311 = cljs.core.mod.call(null,i,(3));
switch (G__8311) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8311)].join('')));

}
})()));

var G__8319 = (i__8308 + (1));
i__8308 = G__8319;
continue;
} else {
var G__8320 = (i__8308 + (1));
i__8308 = G__8320;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8309),busmaker$main_bus$iter__8306.call(null,cljs.core.chunk_rest.call(null,s__8307__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8309),null);
}
} else {
var i = cljs.core.first.call(null,s__8307__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8312 = cljs.core.mod.call(null,i,(3));
switch (G__8312) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8312)].join('')));

}
})():(function (){var G__8313 = cljs.core.mod.call(null,i,(3));
switch (G__8313) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8313)].join('')));

}
})()),busmaker$main_bus$iter__8306.call(null,cljs.core.rest.call(null,s__8307__$2)));
} else {
var G__8323 = cljs.core.rest.call(null,s__8307__$2);
s__8307__$1 = G__8323;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8304,map__8304__$1,x,y,output_index,y_extension))
,null,null));
});})(n,map__8304,map__8304__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8302){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8302));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8328 = arguments.length;
var i__4532__auto___8329 = (0);
while(true){
if((i__4532__auto___8329 < len__4531__auto___8328)){
args__4534__auto__.push((arguments[i__4532__auto___8329]));

var G__8330 = (i__4532__auto___8329 + (1));
i__4532__auto___8329 = G__8330;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8325){
var map__8326 = p__8325;
var map__8326__$1 = ((((!((map__8326 == null)))?(((((map__8326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8326):map__8326);
var x = cljs.core.get.call(null,map__8326__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8326__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8326__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8326__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8324){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8324));
});

busmaker.main_bus.ingredient_height = (function busmaker$main_bus$ingredient_height(ingredient,facility){
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))){
return (11);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))){
return (9);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))){
return (16);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))){
return ((11) + (((n > (3)))?((n - (3)) + (1)):(0)));
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))){
return (12);
} else {
throw cljs.core.ex_info.call(null,"Unknown ingredient height",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
});
busmaker.main_bus.main_bus_line = (function busmaker$main_bus$main_bus_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8442 = arguments.length;
var i__4532__auto___8443 = (0);
while(true){
if((i__4532__auto___8443 < len__4531__auto___8442)){
args__4534__auto__.push((arguments[i__4532__auto___8443]));

var G__8444 = (i__4532__auto___8443 + (1));
i__4532__auto___8443 = G__8444;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8334){
var map__8335 = p__8334;
var map__8335__$1 = ((((!((map__8335 == null)))?(((((map__8335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8335):map__8335);
var x = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var n_factories = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var facility = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var buses = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"buses","buses",214650120),cljs.core.PersistentVector.EMPTY);
var output_index = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446));
var ingredient = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),"iron-gear");
var input_indexes = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ready_indexes = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348));
var outputs = cljs.core.PersistentHashSet.createAsIfByAssoc([output_index]);
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(-3):(0)
))));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (p1__8331_SHARP_,p2__8332_SHARP_){
return cljs.core.assoc.call(null,p1__8331_SHARP_,"entity_number",(p2__8332_SHARP_ + (1)));
});})(outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,(function (){var G__8337 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8338(s__8339){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8339__$1 = s__8339;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8339__$1);
if(temp__5457__auto__){
var s__8339__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8339__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8339__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8341 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8340 = (0);
while(true){
if((i__8340 < size__4323__auto__)){
var vec__8342 = cljs.core._nth.call(null,c__4322__auto__,i__8340);
var bus_ingredient = cljs.core.nth.call(null,vec__8342,(0),null);
var i = cljs.core.nth.call(null,vec__8342,(1),null);
cljs.core.chunk_append.call(null,b__8341,(function (){var x__$1 = (x + (6));
var y__$2 = (((y__$1 + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(3):(0)
));
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient));
var dy = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?((3) + (((n > (3)))?((1) + (n - (3))):(0))):(0)
))));
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})());

var G__8445 = (i__8340 + (1));
i__8340 = G__8445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8341),busmaker$main_bus$iter__8338.call(null,cljs.core.chunk_rest.call(null,s__8339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8341),null);
}
} else {
var vec__8345 = cljs.core.first.call(null,s__8339__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__8345,(0),null);
var i = cljs.core.nth.call(null,vec__8345,(1),null);
return cljs.core.cons.call(null,(function (){var x__$1 = (x + (6));
var y__$2 = (((y__$1 + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(3):(0)
));
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient));
var dy = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?((3) + (((n > (3)))?((1) + (n - (3))):(0))):(0)
))));
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})(),busmaker$main_bus$iter__8338.call(null,cljs.core.rest.call(null,s__8339__$2)));
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,buses);
})())),(function (){var x__$1 = (x + (6));
var y__$2 = (y__$1 + (6));
var non_fluid_ingredients = cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,cljs.core.map.call(null,buses,cljs.core.remove.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient)))));
return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3938__auto__ = (cljs.core.count.call(null,non_fluid_ingredients) > (3));
if(and__3938__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"electric-furnace",null], null), null).call(null,facility);
} else {
return and__3938__auto__;
}
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8348(s__8349){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8349__$1 = s__8349;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8349__$1);
if(temp__5457__auto__){
var s__8349__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8349__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8349__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8351 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8350 = (0);
while(true){
if((i__8350 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8350);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8351,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__8446 = (i__8350 + (1));
i__8350 = G__8446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8351),busmaker$main_bus$iter__8348.call(null,cljs.core.chunk_rest.call(null,s__8349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8351),null);
}
} else {
var i = cljs.core.first.call(null,s__8349__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__8348.call(null,cljs.core.rest.call(null,s__8349__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8352(s__8353){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
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
var input_index = cljs.core.nth.call(null,vec__8356,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8356,(1),null);
cljs.core.chunk_append.call(null,b__8355,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8354,x__$2,y__$4,y__$3,vec__8356,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8355,s__8353__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8352_$_iter__8359(s__8360){
return (new cljs.core.LazySeq(null,((function (i__8354,x__$2,y__$4,y__$3,vec__8356,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8355,s__8353__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
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
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8362,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8447 = (i__8361 + (1));
i__8361 = G__8447;
continue;
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
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8352_$_iter__8359.call(null,cljs.core.rest.call(null,s__8360__$2)));
}
} else {
return null;
}
break;
}
});})(i__8354,x__$2,y__$4,y__$3,vec__8356,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8355,s__8353__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8354,x__$2,y__$4,y__$3,vec__8356,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8355,s__8353__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__8448 = (i__8354 + (1));
i__8354 = G__8448;
continue;
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
var vec__8363 = cljs.core.first.call(null,s__8353__$2);
var input_index = cljs.core.nth.call(null,vec__8363,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8363,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$4,y__$3,vec__8363,input_index,bus_index,s__8353__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8352_$_iter__8366(s__8367){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$4,y__$3,vec__8363,input_index,bus_index,s__8353__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8367__$1 = s__8367;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8367__$1);
if(temp__5457__auto____$1){
var s__8367__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8367__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8367__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8369 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8368 = (0);
while(true){
if((i__8368 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8368);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8449 = (i__8368 + (1));
i__8368 = G__8449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8369),busmaker$main_bus$iter__8352_$_iter__8366.call(null,cljs.core.chunk_rest.call(null,s__8367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8369),null);
}
} else {
var i = cljs.core.first.call(null,s__8367__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8352_$_iter__8366.call(null,cljs.core.rest.call(null,s__8367__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$4,y__$3,vec__8363,input_index,bus_index,s__8353__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$2,y__$4,y__$3,vec__8363,input_index,bus_index,s__8353__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__8352.call(null,cljs.core.rest.call(null,s__8353__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8370(s__8371){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8371__$1 = s__8371;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8371__$1);
if(temp__5457__auto__){
var s__8371__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8371__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8371__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8373 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8372 = (0);
while(true){
if((i__8372 < size__4323__auto__)){
var vec__8374 = cljs.core._nth.call(null,c__4322__auto__,i__8372);
var output_recipe = cljs.core.nth.call(null,vec__8374,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8374,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8373,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8372,s__8371__$1,tap_x,x__$1,y__$2,vec__8374,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8373,s__8371__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8370_$_iter__8377(s__8378){
return (new cljs.core.LazySeq(null,((function (i__8372,s__8371__$1,tap_x,x__$1,y__$2,vec__8374,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8373,s__8371__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8378__$1 = s__8378;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8378__$1);
if(temp__5457__auto____$1){
var s__8378__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8378__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8378__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8380 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8379 = (0);
while(true){
if((i__8379 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8379);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8380,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8381 = cljs.core.mod.call(null,i,(3));
switch (G__8381) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8381)].join('')));

}
})()));

var G__8451 = (i__8379 + (1));
i__8379 = G__8451;
continue;
} else {
var G__8452 = (i__8379 + (1));
i__8379 = G__8452;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8380),busmaker$main_bus$iter__8370_$_iter__8377.call(null,cljs.core.chunk_rest.call(null,s__8378__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8380),null);
}
} else {
var i = cljs.core.first.call(null,s__8378__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8382 = cljs.core.mod.call(null,i,(3));
switch (G__8382) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8382)].join('')));

}
})()),busmaker$main_bus$iter__8370_$_iter__8377.call(null,cljs.core.rest.call(null,s__8378__$2)));
} else {
var G__8454 = cljs.core.rest.call(null,s__8378__$2);
s__8378__$1 = G__8454;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8372,s__8371__$1,tap_x,x__$1,y__$2,vec__8374,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8373,s__8371__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8372,s__8371__$1,tap_x,x__$1,y__$2,vec__8374,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8373,s__8371__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8455 = (i__8372 + (1));
i__8372 = G__8455;
continue;
} else {
var G__8456 = (i__8372 + (1));
i__8372 = G__8456;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8373),busmaker$main_bus$iter__8370.call(null,cljs.core.chunk_rest.call(null,s__8371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8373),null);
}
} else {
var vec__8383 = cljs.core.first.call(null,s__8371__$2);
var output_recipe = cljs.core.nth.call(null,vec__8383,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8383,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cons.call(null,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8371__$1,tap_x,x__$1,y__$2,vec__8383,output_recipe,output_index__$1,s__8371__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8370_$_iter__8386(s__8387){
return (new cljs.core.LazySeq(null,((function (s__8371__$1,tap_x,x__$1,y__$2,vec__8383,output_recipe,output_index__$1,s__8371__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8387__$1 = s__8387;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8387__$1);
if(temp__5457__auto____$1){
var s__8387__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8387__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8387__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8389 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8388 = (0);
while(true){
if((i__8388 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8388);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8389,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8390 = cljs.core.mod.call(null,i,(3));
switch (G__8390) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8390)].join('')));

}
})()));

var G__8458 = (i__8388 + (1));
i__8388 = G__8458;
continue;
} else {
var G__8459 = (i__8388 + (1));
i__8388 = G__8459;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8389),busmaker$main_bus$iter__8370_$_iter__8386.call(null,cljs.core.chunk_rest.call(null,s__8387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8389),null);
}
} else {
var i = cljs.core.first.call(null,s__8387__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8391 = cljs.core.mod.call(null,i,(3));
switch (G__8391) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8391)].join('')));

}
})()),busmaker$main_bus$iter__8370_$_iter__8386.call(null,cljs.core.rest.call(null,s__8387__$2)));
} else {
var G__8461 = cljs.core.rest.call(null,s__8387__$2);
s__8387__$1 = G__8461;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8371__$1,tap_x,x__$1,y__$2,vec__8383,output_recipe,output_index__$1,s__8371__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8371__$1,tap_x,x__$1,y__$2,vec__8383,output_recipe,output_index__$1,s__8371__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8370.call(null,cljs.core.rest.call(null,s__8371__$2)));
} else {
var G__8462 = cljs.core.rest.call(null,s__8371__$2);
s__8371__$1 = G__8462;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8392(s__8393){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8393__$1 = s__8393;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8393__$1);
if(temp__5457__auto__){
var s__8393__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8393__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8393__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8395 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8394 = (0);
while(true){
if((i__8394 < size__4323__auto__)){
var vec__8396 = cljs.core._nth.call(null,c__4322__auto__,i__8394);
var output_recipe = cljs.core.nth.call(null,vec__8396,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8396,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8395,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = (y__$1 + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8394,s__8393__$1,tap_x,x__$1,y__$2,vec__8396,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8395,s__8393__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8392_$_iter__8399(s__8400){
return (new cljs.core.LazySeq(null,((function (i__8394,s__8393__$1,tap_x,x__$1,y__$2,vec__8396,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8395,s__8393__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8400__$1 = s__8400;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8400__$1);
if(temp__5457__auto____$1){
var s__8400__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8400__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8400__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8402 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8401 = (0);
while(true){
if((i__8401 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8401);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8402,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8403 = cljs.core.mod.call(null,i,(3));
switch (G__8403) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8403)].join('')));

}
})()));

var G__8464 = (i__8401 + (1));
i__8401 = G__8464;
continue;
} else {
var G__8465 = (i__8401 + (1));
i__8401 = G__8465;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),busmaker$main_bus$iter__8392_$_iter__8399.call(null,cljs.core.chunk_rest.call(null,s__8400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),null);
}
} else {
var i = cljs.core.first.call(null,s__8400__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8404 = cljs.core.mod.call(null,i,(3));
switch (G__8404) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8404)].join('')));

}
})()),busmaker$main_bus$iter__8392_$_iter__8399.call(null,cljs.core.rest.call(null,s__8400__$2)));
} else {
var G__8467 = cljs.core.rest.call(null,s__8400__$2);
s__8400__$1 = G__8467;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8394,s__8393__$1,tap_x,x__$1,y__$2,vec__8396,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8395,s__8393__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8394,s__8393__$1,tap_x,x__$1,y__$2,vec__8396,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8395,s__8393__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})());

var G__8468 = (i__8394 + (1));
i__8394 = G__8468;
continue;
} else {
var G__8469 = (i__8394 + (1));
i__8394 = G__8469;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8395),busmaker$main_bus$iter__8392.call(null,cljs.core.chunk_rest.call(null,s__8393__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8395),null);
}
} else {
var vec__8405 = cljs.core.first.call(null,s__8393__$2);
var output_recipe = cljs.core.nth.call(null,vec__8405,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8405,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cons.call(null,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = (y__$1 + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8393__$1,tap_x,x__$1,y__$2,vec__8405,output_recipe,output_index__$1,s__8393__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8392_$_iter__8408(s__8409){
return (new cljs.core.LazySeq(null,((function (s__8393__$1,tap_x,x__$1,y__$2,vec__8405,output_recipe,output_index__$1,s__8393__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8409__$1 = s__8409;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8409__$1);
if(temp__5457__auto____$1){
var s__8409__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8409__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8409__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8411 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8410 = (0);
while(true){
if((i__8410 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8410);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8411,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8412 = cljs.core.mod.call(null,i,(3));
switch (G__8412) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8412)].join('')));

}
})()));

var G__8471 = (i__8410 + (1));
i__8410 = G__8471;
continue;
} else {
var G__8472 = (i__8410 + (1));
i__8410 = G__8472;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8411),busmaker$main_bus$iter__8392_$_iter__8408.call(null,cljs.core.chunk_rest.call(null,s__8409__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8411),null);
}
} else {
var i = cljs.core.first.call(null,s__8409__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8413 = cljs.core.mod.call(null,i,(3));
switch (G__8413) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8413)].join('')));

}
})()),busmaker$main_bus$iter__8392_$_iter__8408.call(null,cljs.core.rest.call(null,s__8409__$2)));
} else {
var G__8474 = cljs.core.rest.call(null,s__8409__$2);
s__8409__$1 = G__8474;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8393__$1,tap_x,x__$1,y__$2,vec__8405,output_recipe,output_index__$1,s__8393__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8393__$1,tap_x,x__$1,y__$2,vec__8405,output_recipe,output_index__$1,s__8393__$2,temp__5457__auto__,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})(),busmaker$main_bus$iter__8392.call(null,cljs.core.rest.call(null,s__8393__$2)));
} else {
var G__8475 = cljs.core.rest.call(null,s__8393__$2);
s__8393__$1 = G__8475;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__8337__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8337,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$2 = (y__$1 + (6));
var iter__4324__auto__ = ((function (x__$1,y__$2,G__8337,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8414(s__8415){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,G__8337,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8415__$1 = s__8415;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8415__$1);
if(temp__5457__auto__){
var s__8415__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8415__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8415__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8417 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8416 = (0);
while(true){
if((i__8416 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8416);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
cljs.core.chunk_append.call(null,b__8417,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)));

var G__8476 = (i__8416 + (1));
i__8416 = G__8476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8417),busmaker$main_bus$iter__8414.call(null,cljs.core.chunk_rest.call(null,s__8415__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8417),null);
}
} else {
var i = cljs.core.first.call(null,s__8415__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)),busmaker$main_bus$iter__8414.call(null,cljs.core.rest.call(null,s__8415__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,G__8337,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,G__8337,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8337);
var G__8337__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient)))?cljs.core.concat.call(null,G__8337__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8337,G__8337__$1,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8418(s__8419){
return (new cljs.core.LazySeq(null,((function (G__8337,G__8337__$1,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8419__$1 = s__8419;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8419__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8419__$1,i,xs__6012__auto__,temp__5457__auto__,G__8337,G__8337__$1,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8418_$_iter__8420(s__8421){
return (new cljs.core.LazySeq(null,((function (s__8419__$1,i,xs__6012__auto__,temp__5457__auto__,G__8337,G__8337__$1,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8421__$1 = s__8421;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8421__$1);
if(temp__5457__auto____$1){
var s__8421__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8421__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8421__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8423 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8422 = (0);
while(true){
if((i__8422 < size__4323__auto__)){
var vec__8424 = cljs.core._nth.call(null,c__4322__auto__,i__8422);
var input_recipe = cljs.core.nth.call(null,vec__8424,(0),null);
var input_index = cljs.core.nth.call(null,vec__8424,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8423,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8477 = (i__8422 + (1));
i__8422 = G__8477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8423),busmaker$main_bus$iter__8418_$_iter__8420.call(null,cljs.core.chunk_rest.call(null,s__8421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8423),null);
}
} else {
var vec__8427 = cljs.core.first.call(null,s__8421__$2);
var input_recipe = cljs.core.nth.call(null,vec__8427,(0),null);
var input_index = cljs.core.nth.call(null,vec__8427,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))),busmaker$main_bus$iter__8418_$_iter__8420.call(null,cljs.core.rest.call(null,s__8421__$2)));
}
} else {
return null;
}
break;
}
});})(s__8419__$1,i,xs__6012__auto__,temp__5457__auto__,G__8337,G__8337__$1,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8419__$1,i,xs__6012__auto__,temp__5457__auto__,G__8337,G__8337__$1,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8418.call(null,cljs.core.rest.call(null,s__8419__$1)));
} else {
var G__8478 = cljs.core.rest.call(null,s__8419__$1);
s__8419__$1 = G__8478;
continue;
}
} else {
return null;
}
break;
}
});})(G__8337,G__8337__$1,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(G__8337,G__8337__$1,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8337__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8337__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$2,x__$1,G__8337,G__8337__$1,G__8337__$2,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8430(s__8431){
return (new cljs.core.LazySeq(null,((function (y__$2,x__$1,G__8337,G__8337__$1,G__8337__$2,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8431__$1 = s__8431;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8431__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8431__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8337,G__8337__$1,G__8337__$2,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8430_$_iter__8432(s__8433){
return (new cljs.core.LazySeq(null,((function (s__8431__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8337,G__8337__$1,G__8337__$2,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8433__$1 = s__8433;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8433__$1);
if(temp__5457__auto____$1){
var s__8433__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8433__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8433__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8435 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8434 = (0);
while(true){
if((i__8434 < size__4323__auto__)){
var vec__8436 = cljs.core._nth.call(null,c__4322__auto__,i__8434);
var output_recipe = cljs.core.nth.call(null,vec__8436,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8436,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8435,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8479 = (i__8434 + (1));
i__8434 = G__8479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8435),busmaker$main_bus$iter__8430_$_iter__8432.call(null,cljs.core.chunk_rest.call(null,s__8433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8435),null);
}
} else {
var vec__8439 = cljs.core.first.call(null,s__8433__$2);
var output_recipe = cljs.core.nth.call(null,vec__8439,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8439,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8430_$_iter__8432.call(null,cljs.core.rest.call(null,s__8433__$2)));
}
} else {
return null;
}
break;
}
});})(s__8431__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8337,G__8337__$1,G__8337__$2,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8431__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8337,G__8337__$1,G__8337__$2,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8430.call(null,cljs.core.rest.call(null,s__8431__$1)));
} else {
var G__8480 = cljs.core.rest.call(null,s__8431__$1);
s__8431__$1 = G__8480;
continue;
}
} else {
return null;
}
break;
}
});})(y__$2,x__$1,G__8337,G__8337__$1,G__8337__$2,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(y__$2,x__$1,G__8337,G__8337__$1,G__8337__$2,outputs,y__$1,map__8335,map__8335__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8337__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8333){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8333));
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
var G__8482 = arguments.length;
switch (G__8482) {
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
var G__8488 = null;
var G__8488__0 = (function (){
return rf.call(null);
});
var G__8488__1 = (function (result){
return rf.call(null,result);
});
var G__8488__2 = (function (result,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),input)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),input));

return rf.call(null,result,input);
}
});
G__8488 = function(result,input){
switch(arguments.length){
case 0:
return G__8488__0.call(this);
case 1:
return G__8488__1.call(this,result);
case 2:
return G__8488__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8488.cljs$core$IFn$_invoke$arity$0 = G__8488__0;
G__8488.cljs$core$IFn$_invoke$arity$1 = G__8488__1;
G__8488.cljs$core$IFn$_invoke$arity$2 = G__8488__2;
return G__8488;
})()
;})(seen))
});
});

busmaker.main_bus.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function busmaker$main_bus$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__8483,seen__$1){
while(true){
var vec__8484 = p__8483;
var h = cljs.core.nth.call(null,vec__8484,(0),null);
var xs__$1 = vec__8484;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f.call(null,h))){
var G__8489 = cljs.core.rest.call(null,s);
var G__8490 = seen__$1;
p__8483 = G__8489;
seen__$1 = G__8490;
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
var G__8492 = arguments.length;
switch (G__8492) {
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
return busmaker.main_bus.ingredients_by_recipe.call(null,"underground-belt");
});

busmaker.main_bus.ingredients_by_recipe.cljs$core$IFn$_invoke$arity$1 = (function (name){
return cljs.core.distinct.call(null,busmaker.main_bus.sorted_recipe_order.call(null,name));
});

busmaker.main_bus.ingredients_by_recipe.cljs$lang$maxFixedArity = 1;

busmaker.main_bus.products = (function busmaker$main_bus$products(recipe_names){
var oil_QMARK_ = cljs.core.seq.call(null,cljs.core.mapcat.call(null,(function (recipe_name){
return cljs.core.filter.call(null,(function (p1__8494_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__8494_SHARP_));
}),busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name));
}),recipe_names));
var products = cljs.core.reduce.call(null,((function (oil_QMARK_){
return (function (products,recipe_name){
return cljs.core.apply.call(null,cljs.core.conj,products,cljs.core.remove.call(null,cljs.core.set.call(null,products),cljs.core.remove.call(null,((function (oil_QMARK_){
return (function (p1__8495_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__8495_SHARP_));
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
var map__8497 = busmaker.main_bus.products.call(null,recipe_names);
var map__8497__$1 = ((((!((map__8497 == null)))?(((((map__8497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8497):map__8497);
var oil_QMARK_ = cljs.core.get.call(null,map__8497__$1,new cljs.core.Keyword(null,"oil?","oil?",1078295839));
var products = cljs.core.get.call(null,map__8497__$1,new cljs.core.Keyword(null,"products","products",1876973544));
var others = cljs.core.get.call(null,map__8497__$1,new cljs.core.Keyword(null,"others","others",2084874583));
var deps = cljs.core.get.call(null,map__8497__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var bus_outputs = cljs.core.get.call(null,map__8497__$1,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (map__8497,map__8497__$1,oil_QMARK_,products,others,deps,bus_outputs){
return (function (p__8499,p__8500){
var map__8501 = p__8499;
var map__8501__$1 = ((((!((map__8501 == null)))?(((((map__8501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8501):map__8501);
var acc = map__8501__$1;
var y = cljs.core.get.call(null,map__8501__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__8502 = p__8500;
var output_index = cljs.core.nth.call(null,vec__8502,(0),null);
var ingredient = cljs.core.nth.call(null,vec__8502,(1),null);
var input_indexes = cljs.core.map.call(null,bus_outputs,busmaker.main_bus.ingredients.call(null,ingredient));
var facility = cljs.core.get_in.call(null,factories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900)], null));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_outputs,new cljs.core.Keyword(null,"y","y",-1757859776),((y - busmaker.main_bus.ingredient_height.call(null,ingredient,facility)) - (1)),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),cljs.core.get_in.call(null,factories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ingredient,new cljs.core.Keyword(null,"n","n",562130025)], null),(1)),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348),cljs.core.set.call(null,cljs.core.range.call(null,output_index)))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
});})(map__8497,map__8497__$1,oil_QMARK_,products,others,deps,bus_outputs))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),cljs.core.filter.call(null,((function (map__8497,map__8497__$1,oil_QMARK_,products,others,deps,bus_outputs){
return (function (p1__8496_SHARP_){
return busmaker.main_bus.created_QMARK_.call(null,cljs.core.second.call(null,p1__8496_SHARP_));
});})(map__8497,map__8497__$1,oil_QMARK_,products,others,deps,bus_outputs))
,deps))));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8506_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8506_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8506_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
