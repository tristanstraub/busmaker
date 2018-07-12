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
busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name,facility){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"advanced-oil-processing":recipe_name);
var G__8206 = busmaker.main_bus.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipes.recipes,recipe_name__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))){
return cljs.core.conj.call(null,G__8206,"coal");
} else {
return G__8206;
}
});
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__8207){
var vec__8208 = p__8207;
var x = cljs.core.nth.call(null,vec__8208,(0),null);
var y = cljs.core.nth.call(null,vec__8208,(1),null);
var G__8211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8211)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8211)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8211)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8211)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8211)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__8212){
var vec__8213 = p__8212;
var x = cljs.core.nth.call(null,vec__8213,(0),null);
var y = cljs.core.nth.call(null,vec__8213,(1),null);
var G__8216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8216)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8216)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8216)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8216)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8216)].join('')));

}
}
}
}
});
busmaker.main_bus.underground_belt = (function busmaker$main_bus$underground_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8221 = arguments.length;
var i__4532__auto___8222 = (0);
while(true){
if((i__4532__auto___8222 < len__4531__auto___8221)){
args__4534__auto__.push((arguments[i__4532__auto___8222]));

var G__8223 = (i__4532__auto___8222 + (1));
i__4532__auto___8222 = G__8223;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8218){
var map__8219 = p__8218;
var map__8219__$1 = ((((!((map__8219 == null)))?(((((map__8219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8219):map__8219);
var x = cljs.core.get.call(null,map__8219__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8219__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8219__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8219__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.underground_belt.cljs$lang$applyTo = (function (seq8217){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8217));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8228 = arguments.length;
var i__4532__auto___8229 = (0);
while(true){
if((i__4532__auto___8229 < len__4531__auto___8228)){
args__4534__auto__.push((arguments[i__4532__auto___8229]));

var G__8230 = (i__4532__auto___8229 + (1));
i__4532__auto___8229 = G__8230;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8225){
var map__8226 = p__8225;
var map__8226__$1 = ((((!((map__8226 == null)))?(((((map__8226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8226):map__8226);
var x = cljs.core.get.call(null,map__8226__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8226__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8226__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8226__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8224){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8224));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
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
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8232){
var map__8233 = p__8232;
var map__8233__$1 = ((((!((map__8233 == null)))?(((((map__8233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8233):map__8233);
var x = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8231){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8231));
});

busmaker.main_bus.transport_belt = (function busmaker$main_bus$transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8242 = arguments.length;
var i__4532__auto___8243 = (0);
while(true){
if((i__4532__auto___8243 < len__4531__auto___8242)){
args__4534__auto__.push((arguments[i__4532__auto___8243]));

var G__8244 = (i__4532__auto___8243 + (1));
i__4532__auto___8243 = G__8244;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8239){
var map__8240 = p__8239;
var map__8240__$1 = ((((!((map__8240 == null)))?(((((map__8240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8240):map__8240);
var x = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.transport_belt.cljs$lang$applyTo = (function (seq8238){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8238));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
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
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8246){
var map__8247 = p__8246;
var map__8247__$1 = ((((!((map__8247 == null)))?(((((map__8247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8247):map__8247);
var x = cljs.core.get.call(null,map__8247__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8247__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq8245){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8245));
});

busmaker.main_bus.inserter = (function busmaker$main_bus$inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8256 = arguments.length;
var i__4532__auto___8257 = (0);
while(true){
if((i__4532__auto___8257 < len__4531__auto___8256)){
args__4534__auto__.push((arguments[i__4532__auto___8257]));

var G__8258 = (i__4532__auto___8257 + (1));
i__4532__auto___8257 = G__8258;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8253){
var map__8254 = p__8253;
var map__8254__$1 = ((((!((map__8254 == null)))?(((((map__8254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8254):map__8254);
var x = cljs.core.get.call(null,map__8254__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8254__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8254__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.inserter.cljs$lang$applyTo = (function (seq8252){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8252));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8263 = arguments.length;
var i__4532__auto___8264 = (0);
while(true){
if((i__4532__auto___8264 < len__4531__auto___8263)){
args__4534__auto__.push((arguments[i__4532__auto___8264]));

var G__8265 = (i__4532__auto___8264 + (1));
i__4532__auto___8264 = G__8265;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8260){
var map__8261 = p__8260;
var map__8261__$1 = ((((!((map__8261 == null)))?(((((map__8261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8261):map__8261);
var x = cljs.core.get.call(null,map__8261__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8261__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8261__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8259){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8259));
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
var len__4531__auto___8270 = arguments.length;
var i__4532__auto___8271 = (0);
while(true){
if((i__4532__auto___8271 < len__4531__auto___8270)){
args__4534__auto__.push((arguments[i__4532__auto___8271]));

var G__8272 = (i__4532__auto___8271 + (1));
i__4532__auto___8271 = G__8272;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8267){
var map__8268 = p__8267;
var map__8268__$1 = ((((!((map__8268 == null)))?(((((map__8268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8268):map__8268);
var x = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
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
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq8266){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8266));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8285 = arguments.length;
var i__4532__auto___8286 = (0);
while(true){
if((i__4532__auto___8286 < len__4531__auto___8285)){
args__4534__auto__.push((arguments[i__4532__auto___8286]));

var G__8287 = (i__4532__auto___8286 + (1));
i__4532__auto___8286 = G__8287;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8274){
var map__8275 = p__8274;
var map__8275__$1 = ((((!((map__8275 == null)))?(((((map__8275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8275):map__8275);
var x = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8275,map__8275__$1,x,y,length){
return (function busmaker$main_bus$iter__8277(s__8278){
return (new cljs.core.LazySeq(null,((function (map__8275,map__8275__$1,x,y,length){
return (function (){
var s__8278__$1 = s__8278;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8278__$1);
if(temp__5457__auto__){
var s__8278__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8278__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8278__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8280 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8279 = (0);
while(true){
if((i__8279 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8279);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8280,(((i <= (1)))?(function (){var G__8281 = cljs.core.mod.call(null,i,(3));
switch (G__8281) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8281)].join('')));

}
})():(function (){var G__8282 = cljs.core.mod.call(null,i,(3));
switch (G__8282) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8282)].join('')));

}
})()));

var G__8290 = (i__8279 + (1));
i__8279 = G__8290;
continue;
} else {
var G__8291 = (i__8279 + (1));
i__8279 = G__8291;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8280),busmaker$main_bus$iter__8277.call(null,cljs.core.chunk_rest.call(null,s__8278__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8280),null);
}
} else {
var i = cljs.core.first.call(null,s__8278__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__8283 = cljs.core.mod.call(null,i,(3));
switch (G__8283) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8283)].join('')));

}
})():(function (){var G__8284 = cljs.core.mod.call(null,i,(3));
switch (G__8284) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8284)].join('')));

}
})()),busmaker$main_bus$iter__8277.call(null,cljs.core.rest.call(null,s__8278__$2)));
} else {
var G__8294 = cljs.core.rest.call(null,s__8278__$2);
s__8278__$1 = G__8294;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8275,map__8275__$1,x,y,length))
,null,null));
});})(map__8275,map__8275__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq8273){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8273));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8299 = arguments.length;
var i__4532__auto___8300 = (0);
while(true){
if((i__4532__auto___8300 < len__4531__auto___8299)){
args__4534__auto__.push((arguments[i__4532__auto___8300]));

var G__8301 = (i__4532__auto___8300 + (1));
i__4532__auto___8300 = G__8301;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8296){
var map__8297 = p__8296;
var map__8297__$1 = ((((!((map__8297 == null)))?(((((map__8297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8297):map__8297);
var x = cljs.core.get.call(null,map__8297__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8297__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8297__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8295){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8295));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
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
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8303){
var map__8304 = p__8303;
var map__8304__$1 = ((((!((map__8304 == null)))?(((((map__8304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8304):map__8304);
var x = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8304,map__8304__$1,x,y,height){
return (function busmaker$main_bus$iter__8306(s__8307){
return (new cljs.core.LazySeq(null,((function (map__8304,map__8304__$1,x,y,height){
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
cljs.core.chunk_append.call(null,b__8309,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8313 = (i__8308 + (1));
i__8308 = G__8313;
continue;
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
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8306.call(null,cljs.core.rest.call(null,s__8307__$2)));
}
} else {
return null;
}
break;
}
});})(map__8304,map__8304__$1,x,y,height))
,null,null));
});})(map__8304,map__8304__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8302){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8302));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8322 = arguments.length;
var i__4532__auto___8323 = (0);
while(true){
if((i__4532__auto___8323 < len__4531__auto___8322)){
args__4534__auto__.push((arguments[i__4532__auto___8323]));

var G__8324 = (i__4532__auto___8323 + (1));
i__4532__auto___8323 = G__8324;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8315){
var map__8316 = p__8315;
var map__8316__$1 = ((((!((map__8316 == null)))?(((((map__8316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8316):map__8316);
var x = cljs.core.get.call(null,map__8316__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8316__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8316__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8316,map__8316__$1,x,y,height){
return (function busmaker$main_bus$iter__8318(s__8319){
return (new cljs.core.LazySeq(null,((function (map__8316,map__8316__$1,x,y,height){
return (function (){
var s__8319__$1 = s__8319;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8319__$1);
if(temp__5457__auto__){
var s__8319__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8319__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8319__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8321 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8320 = (0);
while(true){
if((i__8320 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8320);
cljs.core.chunk_append.call(null,b__8321,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8325 = (i__8320 + (1));
i__8320 = G__8325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8321),busmaker$main_bus$iter__8318.call(null,cljs.core.chunk_rest.call(null,s__8319__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8321),null);
}
} else {
var i = cljs.core.first.call(null,s__8319__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8318.call(null,cljs.core.rest.call(null,s__8319__$2)));
}
} else {
return null;
}
break;
}
});})(map__8316,map__8316__$1,x,y,height))
,null,null));
});})(map__8316,map__8316__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8314){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8314));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8341 = arguments.length;
var i__4532__auto___8342 = (0);
while(true){
if((i__4532__auto___8342 < len__4531__auto___8341)){
args__4534__auto__.push((arguments[i__4532__auto___8342]));

var G__8343 = (i__4532__auto___8342 + (1));
i__4532__auto___8342 = G__8343;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__8328){
var map__8329 = p__8328;
var map__8329__$1 = ((((!((map__8329 == null)))?(((((map__8329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8329):map__8329);
var x = cljs.core.get.call(null,map__8329__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8329__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8329,map__8329__$1,x,y){
return (function busmaker$main_bus$iter__8331(s__8332){
return (new cljs.core.LazySeq(null,((function (map__8329,map__8329__$1,x,y){
return (function (){
var s__8332__$1 = s__8332;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8332__$1);
if(temp__5457__auto__){
var s__8332__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8332__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8332__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8334 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8333 = (0);
while(true){
if((i__8333 < size__4323__auto__)){
var vec__8335 = cljs.core._nth.call(null,c__4322__auto__,i__8333);
var i = cljs.core.nth.call(null,vec__8335,(0),null);
var xi = cljs.core.nth.call(null,vec__8335,(1),null);
cljs.core.chunk_append.call(null,b__8334,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__8344 = (i__8333 + (1));
i__8333 = G__8344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8334),busmaker$main_bus$iter__8331.call(null,cljs.core.chunk_rest.call(null,s__8332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8334),null);
}
} else {
var vec__8338 = cljs.core.first.call(null,s__8332__$2);
var i = cljs.core.nth.call(null,vec__8338,(0),null);
var xi = cljs.core.nth.call(null,vec__8338,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__8331.call(null,cljs.core.rest.call(null,s__8332__$2)));
}
} else {
return null;
}
break;
}
});})(map__8329,map__8329__$1,x,y))
,null,null));
});})(map__8329,map__8329__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq8326){
var G__8327 = cljs.core.first.call(null,seq8326);
var seq8326__$1 = cljs.core.next.call(null,seq8326);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8327,seq8326__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8361 = arguments.length;
var i__4532__auto___8362 = (0);
while(true){
if((i__4532__auto___8362 < len__4531__auto___8361)){
args__4534__auto__.push((arguments[i__4532__auto___8362]));

var G__8363 = (i__4532__auto___8362 + (1));
i__4532__auto___8362 = G__8363;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8346){
var map__8347 = p__8346;
var map__8347__$1 = ((((!((map__8347 == null)))?(((((map__8347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8347):map__8347);
var x = cljs.core.get.call(null,map__8347__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8347__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var ingredient = cljs.core.get.call(null,map__8347__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019));
var n_factories = cljs.core.get.call(null,map__8347__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(1));
var facility = cljs.core.get.call(null,map__8347__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8347,map__8347__$1,x,y,ingredient,n_factories,facility){
return (function busmaker$main_bus$iter__8349(s__8350){
return (new cljs.core.LazySeq(null,((function (map__8347,map__8347__$1,x,y,ingredient,n_factories,facility){
return (function (){
var s__8350__$1 = s__8350;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8350__$1);
if(temp__5457__auto__){
var s__8350__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8350__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8350__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8352 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8351 = (0);
while(true){
if((i__8351 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8351);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8352,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8351,dx,i,c__4322__auto__,size__4323__auto__,b__8352,s__8350__$2,temp__5457__auto__,map__8347,map__8347__$1,x,y,ingredient,n_factories,facility){
return (function busmaker$main_bus$iter__8349_$_iter__8353(s__8354){
return (new cljs.core.LazySeq(null,((function (i__8351,dx,i,c__4322__auto__,size__4323__auto__,b__8352,s__8350__$2,temp__5457__auto__,map__8347,map__8347__$1,x,y,ingredient,n_factories,facility){
return (function (){
var s__8354__$1 = s__8354;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8354__$1);
if(temp__5457__auto____$1){
var s__8354__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8354__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8354__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8356 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8355 = (0);
while(true){
if((i__8355 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8355);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8364 = (i__8355 + (1));
i__8355 = G__8364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8356),busmaker$main_bus$iter__8349_$_iter__8353.call(null,cljs.core.chunk_rest.call(null,s__8354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8356),null);
}
} else {
var j = cljs.core.first.call(null,s__8354__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8349_$_iter__8353.call(null,cljs.core.rest.call(null,s__8354__$2)));
}
} else {
return null;
}
break;
}
});})(i__8351,dx,i,c__4322__auto__,size__4323__auto__,b__8352,s__8350__$2,temp__5457__auto__,map__8347,map__8347__$1,x,y,ingredient,n_factories,facility))
,null,null));
});})(i__8351,dx,i,c__4322__auto__,size__4323__auto__,b__8352,s__8350__$2,temp__5457__auto__,map__8347,map__8347__$1,x,y,ingredient,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8365 = (i__8351 + (1));
i__8351 = G__8365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8352),busmaker$main_bus$iter__8349.call(null,cljs.core.chunk_rest.call(null,s__8350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8352),null);
}
} else {
var i = cljs.core.first.call(null,s__8350__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8350__$2,temp__5457__auto__,map__8347,map__8347__$1,x,y,ingredient,n_factories,facility){
return (function busmaker$main_bus$iter__8349_$_iter__8357(s__8358){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8350__$2,temp__5457__auto__,map__8347,map__8347__$1,x,y,ingredient,n_factories,facility){
return (function (){
var s__8358__$1 = s__8358;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8358__$1);
if(temp__5457__auto____$1){
var s__8358__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8358__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8358__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8360 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8359 = (0);
while(true){
if((i__8359 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8359);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8360,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8366 = (i__8359 + (1));
i__8359 = G__8366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8360),busmaker$main_bus$iter__8349_$_iter__8357.call(null,cljs.core.chunk_rest.call(null,s__8358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8360),null);
}
} else {
var j = cljs.core.first.call(null,s__8358__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8349_$_iter__8357.call(null,cljs.core.rest.call(null,s__8358__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8350__$2,temp__5457__auto__,map__8347,map__8347__$1,x,y,ingredient,n_factories,facility))
,null,null));
});})(dx,i,s__8350__$2,temp__5457__auto__,map__8347,map__8347__$1,x,y,ingredient,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__8349.call(null,cljs.core.rest.call(null,s__8350__$2)));
}
} else {
return null;
}
break;
}
});})(map__8347,map__8347__$1,x,y,ingredient,n_factories,facility))
,null,null));
});})(map__8347,map__8347__$1,x,y,ingredient,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq8345){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8345));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8375 = arguments.length;
var i__4532__auto___8376 = (0);
while(true){
if((i__4532__auto___8376 < len__4531__auto___8375)){
args__4534__auto__.push((arguments[i__4532__auto___8376]));

var G__8377 = (i__4532__auto___8376 + (1));
i__4532__auto___8376 = G__8377;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8368){
var map__8369 = p__8368;
var map__8369__$1 = ((((!((map__8369 == null)))?(((((map__8369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8369):map__8369);
var x = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8369,map__8369__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8371(s__8372){
return (new cljs.core.LazySeq(null,((function (n,map__8369,map__8369__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__8372__$1 = s__8372;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8372__$1);
if(temp__5457__auto__){
var s__8372__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8372__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8372__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8374 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8373 = (0);
while(true){
if((i__8373 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8373);
cljs.core.chunk_append.call(null,b__8374,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8378 = (i__8373 + (1));
i__8373 = G__8378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8374),busmaker$main_bus$iter__8371.call(null,cljs.core.chunk_rest.call(null,s__8372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8374),null);
}
} else {
var i = cljs.core.first.call(null,s__8372__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8371.call(null,cljs.core.rest.call(null,s__8372__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8369,map__8369__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8369,map__8369__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8367){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8367));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8383 = arguments.length;
var i__4532__auto___8384 = (0);
while(true){
if((i__4532__auto___8384 < len__4531__auto___8383)){
args__4534__auto__.push((arguments[i__4532__auto___8384]));

var G__8385 = (i__4532__auto___8384 + (1));
i__4532__auto___8384 = G__8385;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8380){
var map__8381 = p__8380;
var map__8381__$1 = ((((!((map__8381 == null)))?(((((map__8381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8381):map__8381);
var x = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8379){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8379));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8394 = arguments.length;
var i__4532__auto___8395 = (0);
while(true){
if((i__4532__auto___8395 < len__4531__auto___8394)){
args__4534__auto__.push((arguments[i__4532__auto___8395]));

var G__8396 = (i__4532__auto___8395 + (1));
i__4532__auto___8395 = G__8396;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8387){
var map__8388 = p__8387;
var map__8388__$1 = ((((!((map__8388 == null)))?(((((map__8388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8388):map__8388);
var x = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8388,map__8388__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8390(s__8391){
return (new cljs.core.LazySeq(null,((function (map__8388,map__8388__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__8391__$1 = s__8391;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8391__$1);
if(temp__5457__auto__){
var s__8391__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8391__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8391__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8393 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8392 = (0);
while(true){
if((i__8392 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8392);
cljs.core.chunk_append.call(null,b__8393,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8397 = (i__8392 + (1));
i__8392 = G__8397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8393),busmaker$main_bus$iter__8390.call(null,cljs.core.chunk_rest.call(null,s__8391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8393),null);
}
} else {
var i = cljs.core.first.call(null,s__8391__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8390.call(null,cljs.core.rest.call(null,s__8391__$2)));
}
} else {
return null;
}
break;
}
});})(map__8388,map__8388__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8388,map__8388__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8386){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8386));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8408 = arguments.length;
var i__4532__auto___8409 = (0);
while(true){
if((i__4532__auto___8409 < len__4531__auto___8408)){
args__4534__auto__.push((arguments[i__4532__auto___8409]));

var G__8410 = (i__4532__auto___8409 + (1));
i__4532__auto___8409 = G__8410;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8399){
var map__8400 = p__8399;
var map__8400__$1 = ((((!((map__8400 == null)))?(((((map__8400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8400):map__8400);
var x = cljs.core.get.call(null,map__8400__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8400__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8400__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8400__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8400,map__8400__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__8402(s__8403){
return (new cljs.core.LazySeq(null,((function (n,map__8400,map__8400__$1,x,y,input_index,bus_index){
return (function (){
var s__8403__$1 = s__8403;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8403__$1);
if(temp__5457__auto__){
var s__8403__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8403__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8403__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8405 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8404 = (0);
while(true){
if((i__8404 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8404);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8405,(function (){var G__8406 = cljs.core.mod.call(null,i,(3));
switch (G__8406) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8406)].join('')));

}
})());

var G__8412 = (i__8404 + (1));
i__8404 = G__8412;
continue;
} else {
var G__8413 = (i__8404 + (1));
i__8404 = G__8413;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8405),busmaker$main_bus$iter__8402.call(null,cljs.core.chunk_rest.call(null,s__8403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8405),null);
}
} else {
var i = cljs.core.first.call(null,s__8403__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__8407 = cljs.core.mod.call(null,i,(3));
switch (G__8407) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8407)].join('')));

}
})(),busmaker$main_bus$iter__8402.call(null,cljs.core.rest.call(null,s__8403__$2)));
} else {
var G__8415 = cljs.core.rest.call(null,s__8403__$2);
s__8403__$1 = G__8415;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8400,map__8400__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__8400,map__8400__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8398){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8398));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
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
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8417){
var map__8418 = p__8417;
var map__8418__$1 = ((((!((map__8418 == null)))?(((((map__8418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8418):map__8418);
var x = cljs.core.get.call(null,map__8418__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8418__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8418__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8418__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8418,map__8418__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8420(s__8421){
return (new cljs.core.LazySeq(null,((function (map__8418,map__8418__$1,x,y,output_index,y_extension){
return (function (){
var s__8421__$1 = s__8421;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8421__$1);
if(temp__5457__auto__){
var s__8421__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8421__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8421__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8423 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8422 = (0);
while(true){
if((i__8422 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8422);
cljs.core.chunk_append.call(null,b__8423,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

var G__8427 = (i__8422 + (1));
i__8422 = G__8427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8423),busmaker$main_bus$iter__8420.call(null,cljs.core.chunk_rest.call(null,s__8421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8423),null);
}
} else {
var i = cljs.core.first.call(null,s__8421__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8420.call(null,cljs.core.rest.call(null,s__8421__$2)));
}
} else {
return null;
}
break;
}
});})(map__8418,map__8418__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8418,map__8418__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})(),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8416){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8416));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8440 = arguments.length;
var i__4532__auto___8441 = (0);
while(true){
if((i__4532__auto___8441 < len__4531__auto___8440)){
args__4534__auto__.push((arguments[i__4532__auto___8441]));

var G__8442 = (i__4532__auto___8441 + (1));
i__4532__auto___8441 = G__8442;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8429){
var map__8430 = p__8429;
var map__8430__$1 = ((((!((map__8430 == null)))?(((((map__8430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8430):map__8430);
var x = cljs.core.get.call(null,map__8430__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8430__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8430__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8430__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8430,map__8430__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8432(s__8433){
return (new cljs.core.LazySeq(null,((function (n,map__8430,map__8430__$1,x,y,output_index,y_extension){
return (function (){
var s__8433__$1 = s__8433;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8433__$1);
if(temp__5457__auto__){
var s__8433__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8433__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8433__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8435 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8434 = (0);
while(true){
if((i__8434 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8434);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8435,(((i >= n))?(function (){var G__8436 = cljs.core.mod.call(null,i,(3));
switch (G__8436) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8436)].join('')));

}
})():(function (){var G__8437 = cljs.core.mod.call(null,i,(3));
switch (G__8437) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8437)].join('')));

}
})()));

var G__8445 = (i__8434 + (1));
i__8434 = G__8445;
continue;
} else {
var G__8446 = (i__8434 + (1));
i__8434 = G__8446;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8435),busmaker$main_bus$iter__8432.call(null,cljs.core.chunk_rest.call(null,s__8433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8435),null);
}
} else {
var i = cljs.core.first.call(null,s__8433__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8438 = cljs.core.mod.call(null,i,(3));
switch (G__8438) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8438)].join('')));

}
})():(function (){var G__8439 = cljs.core.mod.call(null,i,(3));
switch (G__8439) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8439)].join('')));

}
})()),busmaker$main_bus$iter__8432.call(null,cljs.core.rest.call(null,s__8433__$2)));
} else {
var G__8449 = cljs.core.rest.call(null,s__8433__$2);
s__8433__$1 = G__8449;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8430,map__8430__$1,x,y,output_index,y_extension))
,null,null));
});})(n,map__8430,map__8430__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8428){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8428));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8454 = arguments.length;
var i__4532__auto___8455 = (0);
while(true){
if((i__4532__auto___8455 < len__4531__auto___8454)){
args__4534__auto__.push((arguments[i__4532__auto___8455]));

var G__8456 = (i__4532__auto___8455 + (1));
i__4532__auto___8455 = G__8456;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8451){
var map__8452 = p__8451;
var map__8452__$1 = ((((!((map__8452 == null)))?(((((map__8452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8452):map__8452);
var x = cljs.core.get.call(null,map__8452__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8452__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8452__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8452__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8450){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8450));
});

busmaker.main_bus.ingredient_height = (function busmaker$main_bus$ingredient_height(ingredient,facility){
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient,facility));
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
var len__4531__auto___8568 = arguments.length;
var i__4532__auto___8569 = (0);
while(true){
if((i__4532__auto___8569 < len__4531__auto___8568)){
args__4534__auto__.push((arguments[i__4532__auto___8569]));

var G__8570 = (i__4532__auto___8569 + (1));
i__4532__auto___8569 = G__8570;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8460){
var map__8461 = p__8460;
var map__8461__$1 = ((((!((map__8461 == null)))?(((((map__8461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8461):map__8461);
var x = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var n_factories = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var facility = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var buses = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"buses","buses",214650120),cljs.core.PersistentVector.EMPTY);
var output_index = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446));
var ingredient = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),"iron-gear");
var input_indexes = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ready_indexes = cljs.core.get.call(null,map__8461__$1,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348));
var outputs = cljs.core.PersistentHashSet.createAsIfByAssoc([output_index]);
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(-3):(0)
))));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (p1__8457_SHARP_,p2__8458_SHARP_){
return cljs.core.assoc.call(null,p1__8457_SHARP_,"entity_number",(p2__8458_SHARP_ + (1)));
});})(outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,(function (){var G__8463 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8464(s__8465){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8465__$1 = s__8465;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8465__$1);
if(temp__5457__auto__){
var s__8465__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8465__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8465__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8467 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8466 = (0);
while(true){
if((i__8466 < size__4323__auto__)){
var vec__8468 = cljs.core._nth.call(null,c__4322__auto__,i__8466);
var bus_ingredient = cljs.core.nth.call(null,vec__8468,(0),null);
var i = cljs.core.nth.call(null,vec__8468,(1),null);
cljs.core.chunk_append.call(null,b__8467,(function (){var x__$1 = (x + (6));
var y__$2 = (((y__$1 + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(3):(0)
));
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient,facility));
var dy = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?((3) + (((n > (3)))?((1) + (n - (3))):(0))):(0)
))));
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})());

var G__8571 = (i__8466 + (1));
i__8466 = G__8571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8467),busmaker$main_bus$iter__8464.call(null,cljs.core.chunk_rest.call(null,s__8465__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8467),null);
}
} else {
var vec__8471 = cljs.core.first.call(null,s__8465__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__8471,(0),null);
var i = cljs.core.nth.call(null,vec__8471,(1),null);
return cljs.core.cons.call(null,(function (){var x__$1 = (x + (6));
var y__$2 = (((y__$1 + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(3):(0)
));
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient,facility));
var dy = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?((3) + (((n > (3)))?((1) + (n - (3))):(0))):(0)
))));
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})(),busmaker$main_bus$iter__8464.call(null,cljs.core.rest.call(null,s__8465__$2)));
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,buses);
})())),(function (){var x__$1 = (x + (6));
var y__$2 = (y__$1 + (6));
var non_fluid_ingredients = cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,cljs.core.map.call(null,buses,cljs.core.remove.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))));
return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3938__auto__ = (cljs.core.count.call(null,non_fluid_ingredients) > (3));
if(and__3938__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"electric-furnace",null], null), null).call(null,facility);
} else {
return and__3938__auto__;
}
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8474(s__8475){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8475__$1 = s__8475;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8475__$1);
if(temp__5457__auto__){
var s__8475__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8475__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8475__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8477 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8476 = (0);
while(true){
if((i__8476 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8476);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8477,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__8572 = (i__8476 + (1));
i__8476 = G__8572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8477),busmaker$main_bus$iter__8474.call(null,cljs.core.chunk_rest.call(null,s__8475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8477),null);
}
} else {
var i = cljs.core.first.call(null,s__8475__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__8474.call(null,cljs.core.rest.call(null,s__8475__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8478(s__8479){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8479__$1 = s__8479;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8479__$1);
if(temp__5457__auto__){
var s__8479__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8479__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8479__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8481 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8480 = (0);
while(true){
if((i__8480 < size__4323__auto__)){
var vec__8482 = cljs.core._nth.call(null,c__4322__auto__,i__8480);
var input_index = cljs.core.nth.call(null,vec__8482,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8482,(1),null);
cljs.core.chunk_append.call(null,b__8481,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8480,x__$2,y__$4,y__$3,vec__8482,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8481,s__8479__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8478_$_iter__8485(s__8486){
return (new cljs.core.LazySeq(null,((function (i__8480,x__$2,y__$4,y__$3,vec__8482,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8481,s__8479__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8486__$1 = s__8486;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8486__$1);
if(temp__5457__auto____$1){
var s__8486__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8486__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8486__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8488 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8487 = (0);
while(true){
if((i__8487 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8487);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8573 = (i__8487 + (1));
i__8487 = G__8573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8488),busmaker$main_bus$iter__8478_$_iter__8485.call(null,cljs.core.chunk_rest.call(null,s__8486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8488),null);
}
} else {
var i = cljs.core.first.call(null,s__8486__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8478_$_iter__8485.call(null,cljs.core.rest.call(null,s__8486__$2)));
}
} else {
return null;
}
break;
}
});})(i__8480,x__$2,y__$4,y__$3,vec__8482,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8481,s__8479__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8480,x__$2,y__$4,y__$3,vec__8482,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8481,s__8479__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__8574 = (i__8480 + (1));
i__8480 = G__8574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8481),busmaker$main_bus$iter__8478.call(null,cljs.core.chunk_rest.call(null,s__8479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8481),null);
}
} else {
var vec__8489 = cljs.core.first.call(null,s__8479__$2);
var input_index = cljs.core.nth.call(null,vec__8489,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8489,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$4,y__$3,vec__8489,input_index,bus_index,s__8479__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8478_$_iter__8492(s__8493){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$4,y__$3,vec__8489,input_index,bus_index,s__8479__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8493__$1 = s__8493;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8493__$1);
if(temp__5457__auto____$1){
var s__8493__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8493__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8493__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8495 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8494 = (0);
while(true){
if((i__8494 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8494);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8575 = (i__8494 + (1));
i__8494 = G__8575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8495),busmaker$main_bus$iter__8478_$_iter__8492.call(null,cljs.core.chunk_rest.call(null,s__8493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8495),null);
}
} else {
var i = cljs.core.first.call(null,s__8493__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8478_$_iter__8492.call(null,cljs.core.rest.call(null,s__8493__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$4,y__$3,vec__8489,input_index,bus_index,s__8479__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$2,y__$4,y__$3,vec__8489,input_index,bus_index,s__8479__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__8478.call(null,cljs.core.rest.call(null,s__8479__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8496(s__8497){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8497__$1 = s__8497;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8497__$1);
if(temp__5457__auto__){
var s__8497__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8497__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8497__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8499 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8498 = (0);
while(true){
if((i__8498 < size__4323__auto__)){
var vec__8500 = cljs.core._nth.call(null,c__4322__auto__,i__8498);
var output_recipe = cljs.core.nth.call(null,vec__8500,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8500,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8499,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8498,s__8497__$1,tap_x,x__$1,y__$2,vec__8500,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8499,s__8497__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8496_$_iter__8503(s__8504){
return (new cljs.core.LazySeq(null,((function (i__8498,s__8497__$1,tap_x,x__$1,y__$2,vec__8500,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8499,s__8497__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8504__$1 = s__8504;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8504__$1);
if(temp__5457__auto____$1){
var s__8504__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8504__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8504__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8506 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8505 = (0);
while(true){
if((i__8505 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8505);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8506,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8507 = cljs.core.mod.call(null,i,(3));
switch (G__8507) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8507)].join('')));

}
})()));

var G__8577 = (i__8505 + (1));
i__8505 = G__8577;
continue;
} else {
var G__8578 = (i__8505 + (1));
i__8505 = G__8578;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8506),busmaker$main_bus$iter__8496_$_iter__8503.call(null,cljs.core.chunk_rest.call(null,s__8504__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8506),null);
}
} else {
var i = cljs.core.first.call(null,s__8504__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8508 = cljs.core.mod.call(null,i,(3));
switch (G__8508) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8508)].join('')));

}
})()),busmaker$main_bus$iter__8496_$_iter__8503.call(null,cljs.core.rest.call(null,s__8504__$2)));
} else {
var G__8580 = cljs.core.rest.call(null,s__8504__$2);
s__8504__$1 = G__8580;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8498,s__8497__$1,tap_x,x__$1,y__$2,vec__8500,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8499,s__8497__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8498,s__8497__$1,tap_x,x__$1,y__$2,vec__8500,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8499,s__8497__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8581 = (i__8498 + (1));
i__8498 = G__8581;
continue;
} else {
var G__8582 = (i__8498 + (1));
i__8498 = G__8582;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8499),busmaker$main_bus$iter__8496.call(null,cljs.core.chunk_rest.call(null,s__8497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8499),null);
}
} else {
var vec__8509 = cljs.core.first.call(null,s__8497__$2);
var output_recipe = cljs.core.nth.call(null,vec__8509,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8509,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8497__$1,tap_x,x__$1,y__$2,vec__8509,output_recipe,output_index__$1,s__8497__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8496_$_iter__8512(s__8513){
return (new cljs.core.LazySeq(null,((function (s__8497__$1,tap_x,x__$1,y__$2,vec__8509,output_recipe,output_index__$1,s__8497__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8513__$1 = s__8513;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8513__$1);
if(temp__5457__auto____$1){
var s__8513__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8513__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8513__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8515 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8514 = (0);
while(true){
if((i__8514 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8514);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8515,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8516 = cljs.core.mod.call(null,i,(3));
switch (G__8516) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8516)].join('')));

}
})()));

var G__8584 = (i__8514 + (1));
i__8514 = G__8584;
continue;
} else {
var G__8585 = (i__8514 + (1));
i__8514 = G__8585;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8515),busmaker$main_bus$iter__8496_$_iter__8512.call(null,cljs.core.chunk_rest.call(null,s__8513__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8515),null);
}
} else {
var i = cljs.core.first.call(null,s__8513__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8517 = cljs.core.mod.call(null,i,(3));
switch (G__8517) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8517)].join('')));

}
})()),busmaker$main_bus$iter__8496_$_iter__8512.call(null,cljs.core.rest.call(null,s__8513__$2)));
} else {
var G__8587 = cljs.core.rest.call(null,s__8513__$2);
s__8513__$1 = G__8587;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8497__$1,tap_x,x__$1,y__$2,vec__8509,output_recipe,output_index__$1,s__8497__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8497__$1,tap_x,x__$1,y__$2,vec__8509,output_recipe,output_index__$1,s__8497__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8496.call(null,cljs.core.rest.call(null,s__8497__$2)));
} else {
var G__8588 = cljs.core.rest.call(null,s__8497__$2);
s__8497__$1 = G__8588;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8518(s__8519){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8519__$1 = s__8519;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8519__$1);
if(temp__5457__auto__){
var s__8519__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8519__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8519__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8521 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8520 = (0);
while(true){
if((i__8520 < size__4323__auto__)){
var vec__8522 = cljs.core._nth.call(null,c__4322__auto__,i__8520);
var output_recipe = cljs.core.nth.call(null,vec__8522,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8522,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8521,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = (y__$1 + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8520,s__8519__$1,tap_x,x__$1,y__$2,vec__8522,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8521,s__8519__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8518_$_iter__8525(s__8526){
return (new cljs.core.LazySeq(null,((function (i__8520,s__8519__$1,tap_x,x__$1,y__$2,vec__8522,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8521,s__8519__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8526__$1 = s__8526;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8526__$1);
if(temp__5457__auto____$1){
var s__8526__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8526__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8526__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8528 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8527 = (0);
while(true){
if((i__8527 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8527);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8528,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8529 = cljs.core.mod.call(null,i,(3));
switch (G__8529) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8529)].join('')));

}
})()));

var G__8590 = (i__8527 + (1));
i__8527 = G__8590;
continue;
} else {
var G__8591 = (i__8527 + (1));
i__8527 = G__8591;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8528),busmaker$main_bus$iter__8518_$_iter__8525.call(null,cljs.core.chunk_rest.call(null,s__8526__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8528),null);
}
} else {
var i = cljs.core.first.call(null,s__8526__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8530 = cljs.core.mod.call(null,i,(3));
switch (G__8530) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8530)].join('')));

}
})()),busmaker$main_bus$iter__8518_$_iter__8525.call(null,cljs.core.rest.call(null,s__8526__$2)));
} else {
var G__8593 = cljs.core.rest.call(null,s__8526__$2);
s__8526__$1 = G__8593;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8520,s__8519__$1,tap_x,x__$1,y__$2,vec__8522,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8521,s__8519__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8520,s__8519__$1,tap_x,x__$1,y__$2,vec__8522,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8521,s__8519__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})());

var G__8594 = (i__8520 + (1));
i__8520 = G__8594;
continue;
} else {
var G__8595 = (i__8520 + (1));
i__8520 = G__8595;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8521),busmaker$main_bus$iter__8518.call(null,cljs.core.chunk_rest.call(null,s__8519__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8521),null);
}
} else {
var vec__8531 = cljs.core.first.call(null,s__8519__$2);
var output_recipe = cljs.core.nth.call(null,vec__8531,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8531,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8519__$1,tap_x,x__$1,y__$2,vec__8531,output_recipe,output_index__$1,s__8519__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8518_$_iter__8534(s__8535){
return (new cljs.core.LazySeq(null,((function (s__8519__$1,tap_x,x__$1,y__$2,vec__8531,output_recipe,output_index__$1,s__8519__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8535__$1 = s__8535;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8535__$1);
if(temp__5457__auto____$1){
var s__8535__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8535__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8535__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8537 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8536 = (0);
while(true){
if((i__8536 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8536);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8537,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8538 = cljs.core.mod.call(null,i,(3));
switch (G__8538) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8538)].join('')));

}
})()));

var G__8597 = (i__8536 + (1));
i__8536 = G__8597;
continue;
} else {
var G__8598 = (i__8536 + (1));
i__8536 = G__8598;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8537),busmaker$main_bus$iter__8518_$_iter__8534.call(null,cljs.core.chunk_rest.call(null,s__8535__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8537),null);
}
} else {
var i = cljs.core.first.call(null,s__8535__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8539 = cljs.core.mod.call(null,i,(3));
switch (G__8539) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8539)].join('')));

}
})()),busmaker$main_bus$iter__8518_$_iter__8534.call(null,cljs.core.rest.call(null,s__8535__$2)));
} else {
var G__8600 = cljs.core.rest.call(null,s__8535__$2);
s__8535__$1 = G__8600;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8519__$1,tap_x,x__$1,y__$2,vec__8531,output_recipe,output_index__$1,s__8519__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8519__$1,tap_x,x__$1,y__$2,vec__8531,output_recipe,output_index__$1,s__8519__$2,temp__5457__auto__,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})(),busmaker$main_bus$iter__8518.call(null,cljs.core.rest.call(null,s__8519__$2)));
} else {
var G__8601 = cljs.core.rest.call(null,s__8519__$2);
s__8519__$1 = G__8601;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__8463__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8463,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$2 = (y__$1 + (6));
var iter__4324__auto__ = ((function (x__$1,y__$2,G__8463,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8540(s__8541){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,G__8463,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8541__$1 = s__8541;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8541__$1);
if(temp__5457__auto__){
var s__8541__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8541__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8541__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8543 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8542 = (0);
while(true){
if((i__8542 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8542);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
cljs.core.chunk_append.call(null,b__8543,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)));

var G__8602 = (i__8542 + (1));
i__8542 = G__8602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8543),busmaker$main_bus$iter__8540.call(null,cljs.core.chunk_rest.call(null,s__8541__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8543),null);
}
} else {
var i = cljs.core.first.call(null,s__8541__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)),busmaker$main_bus$iter__8540.call(null,cljs.core.rest.call(null,s__8541__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,G__8463,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,G__8463,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8463);
var G__8463__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))?cljs.core.concat.call(null,G__8463__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8463,G__8463__$1,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8544(s__8545){
return (new cljs.core.LazySeq(null,((function (G__8463,G__8463__$1,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8545__$1 = s__8545;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8545__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8545__$1,i,xs__6012__auto__,temp__5457__auto__,G__8463,G__8463__$1,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8544_$_iter__8546(s__8547){
return (new cljs.core.LazySeq(null,((function (s__8545__$1,i,xs__6012__auto__,temp__5457__auto__,G__8463,G__8463__$1,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8547__$1 = s__8547;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8547__$1);
if(temp__5457__auto____$1){
var s__8547__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8547__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8547__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8549 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8548 = (0);
while(true){
if((i__8548 < size__4323__auto__)){
var vec__8550 = cljs.core._nth.call(null,c__4322__auto__,i__8548);
var input_recipe = cljs.core.nth.call(null,vec__8550,(0),null);
var input_index = cljs.core.nth.call(null,vec__8550,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8549,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8603 = (i__8548 + (1));
i__8548 = G__8603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8549),busmaker$main_bus$iter__8544_$_iter__8546.call(null,cljs.core.chunk_rest.call(null,s__8547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8549),null);
}
} else {
var vec__8553 = cljs.core.first.call(null,s__8547__$2);
var input_recipe = cljs.core.nth.call(null,vec__8553,(0),null);
var input_index = cljs.core.nth.call(null,vec__8553,(1),null);
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
)),args))))),busmaker$main_bus$iter__8544_$_iter__8546.call(null,cljs.core.rest.call(null,s__8547__$2)));
}
} else {
return null;
}
break;
}
});})(s__8545__$1,i,xs__6012__auto__,temp__5457__auto__,G__8463,G__8463__$1,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8545__$1,i,xs__6012__auto__,temp__5457__auto__,G__8463,G__8463__$1,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8544.call(null,cljs.core.rest.call(null,s__8545__$1)));
} else {
var G__8604 = cljs.core.rest.call(null,s__8545__$1);
s__8545__$1 = G__8604;
continue;
}
} else {
return null;
}
break;
}
});})(G__8463,G__8463__$1,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(G__8463,G__8463__$1,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8463__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8463__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$2,x__$1,G__8463,G__8463__$1,G__8463__$2,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8556(s__8557){
return (new cljs.core.LazySeq(null,((function (y__$2,x__$1,G__8463,G__8463__$1,G__8463__$2,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8557__$1 = s__8557;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8557__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8557__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8463,G__8463__$1,G__8463__$2,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8556_$_iter__8558(s__8559){
return (new cljs.core.LazySeq(null,((function (s__8557__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8463,G__8463__$1,G__8463__$2,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8559__$1 = s__8559;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8559__$1);
if(temp__5457__auto____$1){
var s__8559__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8559__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8559__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8561 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8560 = (0);
while(true){
if((i__8560 < size__4323__auto__)){
var vec__8562 = cljs.core._nth.call(null,c__4322__auto__,i__8560);
var output_recipe = cljs.core.nth.call(null,vec__8562,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8562,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8561,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8605 = (i__8560 + (1));
i__8560 = G__8605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8561),busmaker$main_bus$iter__8556_$_iter__8558.call(null,cljs.core.chunk_rest.call(null,s__8559__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8561),null);
}
} else {
var vec__8565 = cljs.core.first.call(null,s__8559__$2);
var output_recipe = cljs.core.nth.call(null,vec__8565,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8565,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8556_$_iter__8558.call(null,cljs.core.rest.call(null,s__8559__$2)));
}
} else {
return null;
}
break;
}
});})(s__8557__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8463,G__8463__$1,G__8463__$2,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8557__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8463,G__8463__$1,G__8463__$2,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8556.call(null,cljs.core.rest.call(null,s__8557__$1)));
} else {
var G__8606 = cljs.core.rest.call(null,s__8557__$1);
s__8557__$1 = G__8606;
continue;
}
} else {
return null;
}
break;
}
});})(y__$2,x__$1,G__8463,G__8463__$1,G__8463__$2,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(y__$2,x__$1,G__8463,G__8463__$1,G__8463__$2,outputs,y__$1,map__8461,map__8461__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8463__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8459){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8459));
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
var G__8608 = arguments.length;
switch (G__8608) {
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
var G__8614 = null;
var G__8614__0 = (function (){
return rf.call(null);
});
var G__8614__1 = (function (result){
return rf.call(null,result);
});
var G__8614__2 = (function (result,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),input)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),input));

return rf.call(null,result,input);
}
});
G__8614 = function(result,input){
switch(arguments.length){
case 0:
return G__8614__0.call(this);
case 1:
return G__8614__1.call(this,result);
case 2:
return G__8614__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8614.cljs$core$IFn$_invoke$arity$0 = G__8614__0;
G__8614.cljs$core$IFn$_invoke$arity$1 = G__8614__1;
G__8614.cljs$core$IFn$_invoke$arity$2 = G__8614__2;
return G__8614;
})()
;})(seen))
});
});

busmaker.main_bus.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function busmaker$main_bus$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__8609,seen__$1){
while(true){
var vec__8610 = p__8609;
var h = cljs.core.nth.call(null,vec__8610,(0),null);
var xs__$1 = vec__8610;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f.call(null,h))){
var G__8615 = cljs.core.rest.call(null,s);
var G__8616 = seen__$1;
p__8609 = G__8615;
seen__$1 = G__8616;
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

busmaker.main_bus.ingredients_by_recipe = (function busmaker$main_bus$ingredients_by_recipe(recipe_name,facility){
var ingredients = busmaker.main_bus.sorted_recipe_order.call(null,recipe_name);
return cljs.core.distinct.call(null,(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["coal"], null),ingredients):ingredients
));
});
busmaker.main_bus.recipe_products = (function busmaker$main_bus$recipe_products(var_args){
var G__8620 = arguments.length;
switch (G__8620) {
case 1:
return busmaker.main_bus.recipe_products.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return busmaker.main_bus.recipe_products.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

busmaker.main_bus.recipe_products.cljs$core$IFn$_invoke$arity$1 = (function (recipe_names){
return busmaker.main_bus.recipe_products.call(null,recipe_names,null);
});

busmaker.main_bus.recipe_products.cljs$core$IFn$_invoke$arity$2 = (function (recipe_names,factories){
var oil_QMARK_ = cljs.core.seq.call(null,cljs.core.mapcat.call(null,(function (recipe_name){
var facility = cljs.core.get_in.call(null,factories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_name,new cljs.core.Keyword(null,"facility","facility",-2118099900)], null),busmaker.main_bus.factory_type.call(null,recipe_name));
return cljs.core.filter.call(null,((function (facility){
return (function (p1__8617_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__8617_SHARP_));
});})(facility))
,busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name,facility));
}),recipe_names));
var products = cljs.core.reduce.call(null,((function (oil_QMARK_){
return (function (products,recipe_name){
var facility = cljs.core.get_in.call(null,factories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [recipe_name,new cljs.core.Keyword(null,"facility","facility",-2118099900)], null),busmaker.main_bus.factory_type.call(null,recipe_name));
return cljs.core.apply.call(null,cljs.core.conj,products,cljs.core.remove.call(null,cljs.core.set.call(null,products),cljs.core.remove.call(null,((function (facility,oil_QMARK_){
return (function (p1__8618_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__8618_SHARP_));
});})(facility,oil_QMARK_))
,busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name,facility))));
});})(oil_QMARK_))
,((oil_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heavy-oil"], null):cljs.core.PersistentVector.EMPTY),recipe_names);
var others = ((oil_QMARK_)?clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),busmaker.recipes.recipes))),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),busmaker.recipes.recipes))))),cljs.core.set.call(null,products)):null);
var bus_outputs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.concat.call(null,others,products))));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oil?","oil?",1078295839),oil_QMARK_,new cljs.core.Keyword(null,"products","products",1876973544),products,new cljs.core.Keyword(null,"others","others",2084874583),others,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),bus_outputs], null);
});

busmaker.main_bus.recipe_products.cljs$lang$maxFixedArity = 2;

busmaker.main_bus.created_QMARK_ = (function busmaker$main_bus$created_QMARK_(recipe_name){
return cljs.core.not.call(null,cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,recipe_name));
});
busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(recipe_names,factories){
var map__8623 = busmaker.main_bus.recipe_products.call(null,recipe_names,factories);
var map__8623__$1 = ((((!((map__8623 == null)))?(((((map__8623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8623):map__8623);
var oil_QMARK_ = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"oil?","oil?",1078295839));
var products = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"products","products",1876973544));
var others = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"others","others",2084874583));
var bus_outputs = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584));
var coal_QMARK_ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null),cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"facility","facility",-2118099900),cljs.core.second),factories));
var products__$1 = (cljs.core.truth_(coal_QMARK_)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["coal"], null),products):products);
var deps = cljs.core.map_indexed.call(null,cljs.core.vector,products__$1);
cljs.core.println.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319),deps);

return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (map__8623,map__8623__$1,oil_QMARK_,products,others,bus_outputs,coal_QMARK_,products__$1,deps){
return (function (p__8625,p__8626){
var map__8627 = p__8625;
var map__8627__$1 = ((((!((map__8627 == null)))?(((((map__8627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8627):map__8627);
var acc = map__8627__$1;
var y = cljs.core.get.call(null,map__8627__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__8628 = p__8626;
var output_index = cljs.core.nth.call(null,vec__8628,(0),null);
var ingredient = cljs.core.nth.call(null,vec__8628,(1),null);
var facility = cljs.core.get_in.call(null,factories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900)], null));
var input_indexes = cljs.core.map.call(null,bus_outputs,busmaker.main_bus.ingredients.call(null,ingredient,facility));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_outputs,new cljs.core.Keyword(null,"y","y",-1757859776),((y - busmaker.main_bus.ingredient_height.call(null,ingredient,facility)) - (1)),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),cljs.core.get_in.call(null,factories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ingredient,new cljs.core.Keyword(null,"n","n",562130025)], null),(1)),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348),cljs.core.set.call(null,cljs.core.range.call(null,output_index)))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
});})(map__8623,map__8623__$1,oil_QMARK_,products,others,bus_outputs,coal_QMARK_,products__$1,deps))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),cljs.core.filter.call(null,((function (map__8623,map__8623__$1,oil_QMARK_,products,others,bus_outputs,coal_QMARK_,products__$1,deps){
return (function (p1__8622_SHARP_){
return busmaker.main_bus.created_QMARK_.call(null,cljs.core.second.call(null,p1__8622_SHARP_));
});})(map__8623,map__8623__$1,oil_QMARK_,products,others,bus_outputs,coal_QMARK_,products__$1,deps))
,deps))));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8632_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8632_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8632_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
