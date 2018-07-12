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
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__8206){
var vec__8207 = p__8206;
var x = cljs.core.nth.call(null,vec__8207,(0),null);
var y = cljs.core.nth.call(null,vec__8207,(1),null);
var G__8210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8210)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8210)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8210)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8210)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8210)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__8211){
var vec__8212 = p__8211;
var x = cljs.core.nth.call(null,vec__8212,(0),null);
var y = cljs.core.nth.call(null,vec__8212,(1),null);
var G__8215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8215)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8215)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8215)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8215)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8215)].join('')));

}
}
}
}
});
busmaker.main_bus.underground_belt = (function busmaker$main_bus$underground_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8220 = arguments.length;
var i__4532__auto___8221 = (0);
while(true){
if((i__4532__auto___8221 < len__4531__auto___8220)){
args__4534__auto__.push((arguments[i__4532__auto___8221]));

var G__8222 = (i__4532__auto___8221 + (1));
i__4532__auto___8221 = G__8222;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8217){
var map__8218 = p__8217;
var map__8218__$1 = ((((!((map__8218 == null)))?(((((map__8218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8218):map__8218);
var x = cljs.core.get.call(null,map__8218__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8218__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8218__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8218__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.underground_belt.cljs$lang$applyTo = (function (seq8216){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8216));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8227 = arguments.length;
var i__4532__auto___8228 = (0);
while(true){
if((i__4532__auto___8228 < len__4531__auto___8227)){
args__4534__auto__.push((arguments[i__4532__auto___8228]));

var G__8229 = (i__4532__auto___8228 + (1));
i__4532__auto___8228 = G__8229;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8224){
var map__8225 = p__8224;
var map__8225__$1 = ((((!((map__8225 == null)))?(((((map__8225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8225):map__8225);
var x = cljs.core.get.call(null,map__8225__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8225__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8225__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8225__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8223){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8223));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8234 = arguments.length;
var i__4532__auto___8235 = (0);
while(true){
if((i__4532__auto___8235 < len__4531__auto___8234)){
args__4534__auto__.push((arguments[i__4532__auto___8235]));

var G__8236 = (i__4532__auto___8235 + (1));
i__4532__auto___8235 = G__8236;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8231){
var map__8232 = p__8231;
var map__8232__$1 = ((((!((map__8232 == null)))?(((((map__8232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8232):map__8232);
var x = cljs.core.get.call(null,map__8232__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8232__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8232__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8230){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8230));
});

busmaker.main_bus.transport_belt = (function busmaker$main_bus$transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8241 = arguments.length;
var i__4532__auto___8242 = (0);
while(true){
if((i__4532__auto___8242 < len__4531__auto___8241)){
args__4534__auto__.push((arguments[i__4532__auto___8242]));

var G__8243 = (i__4532__auto___8242 + (1));
i__4532__auto___8242 = G__8243;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8238){
var map__8239 = p__8238;
var map__8239__$1 = ((((!((map__8239 == null)))?(((((map__8239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8239):map__8239);
var x = cljs.core.get.call(null,map__8239__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8239__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8239__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.transport_belt.cljs$lang$applyTo = (function (seq8237){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8237));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8248 = arguments.length;
var i__4532__auto___8249 = (0);
while(true){
if((i__4532__auto___8249 < len__4531__auto___8248)){
args__4534__auto__.push((arguments[i__4532__auto___8249]));

var G__8250 = (i__4532__auto___8249 + (1));
i__4532__auto___8249 = G__8250;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8245){
var map__8246 = p__8245;
var map__8246__$1 = ((((!((map__8246 == null)))?(((((map__8246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8246):map__8246);
var x = cljs.core.get.call(null,map__8246__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8246__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq8244){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8244));
});

busmaker.main_bus.inserter = (function busmaker$main_bus$inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8255 = arguments.length;
var i__4532__auto___8256 = (0);
while(true){
if((i__4532__auto___8256 < len__4531__auto___8255)){
args__4534__auto__.push((arguments[i__4532__auto___8256]));

var G__8257 = (i__4532__auto___8256 + (1));
i__4532__auto___8256 = G__8257;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8252){
var map__8253 = p__8252;
var map__8253__$1 = ((((!((map__8253 == null)))?(((((map__8253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8253):map__8253);
var x = cljs.core.get.call(null,map__8253__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8253__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8253__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.inserter.cljs$lang$applyTo = (function (seq8251){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8251));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
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
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8259){
var map__8260 = p__8259;
var map__8260__$1 = ((((!((map__8260 == null)))?(((((map__8260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8260):map__8260);
var x = cljs.core.get.call(null,map__8260__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8260__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8260__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8258){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8258));
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
var len__4531__auto___8269 = arguments.length;
var i__4532__auto___8270 = (0);
while(true){
if((i__4532__auto___8270 < len__4531__auto___8269)){
args__4534__auto__.push((arguments[i__4532__auto___8270]));

var G__8271 = (i__4532__auto___8270 + (1));
i__4532__auto___8270 = G__8271;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8266){
var map__8267 = p__8266;
var map__8267__$1 = ((((!((map__8267 == null)))?(((((map__8267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8267):map__8267);
var x = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
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
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq8265){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8265));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8284 = arguments.length;
var i__4532__auto___8285 = (0);
while(true){
if((i__4532__auto___8285 < len__4531__auto___8284)){
args__4534__auto__.push((arguments[i__4532__auto___8285]));

var G__8286 = (i__4532__auto___8285 + (1));
i__4532__auto___8285 = G__8286;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8273){
var map__8274 = p__8273;
var map__8274__$1 = ((((!((map__8274 == null)))?(((((map__8274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8274):map__8274);
var x = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8274,map__8274__$1,x,y,length){
return (function busmaker$main_bus$iter__8276(s__8277){
return (new cljs.core.LazySeq(null,((function (map__8274,map__8274__$1,x,y,length){
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
cljs.core.chunk_append.call(null,b__8279,(((i <= (1)))?(function (){var G__8280 = cljs.core.mod.call(null,i,(3));
switch (G__8280) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8280)].join('')));

}
})():(function (){var G__8281 = cljs.core.mod.call(null,i,(3));
switch (G__8281) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8281)].join('')));

}
})()));

var G__8289 = (i__8278 + (1));
i__8278 = G__8289;
continue;
} else {
var G__8290 = (i__8278 + (1));
i__8278 = G__8290;
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
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__8282 = cljs.core.mod.call(null,i,(3));
switch (G__8282) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8282)].join('')));

}
})():(function (){var G__8283 = cljs.core.mod.call(null,i,(3));
switch (G__8283) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8283)].join('')));

}
})()),busmaker$main_bus$iter__8276.call(null,cljs.core.rest.call(null,s__8277__$2)));
} else {
var G__8293 = cljs.core.rest.call(null,s__8277__$2);
s__8277__$1 = G__8293;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8274,map__8274__$1,x,y,length))
,null,null));
});})(map__8274,map__8274__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq8272){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8272));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
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
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8295){
var map__8296 = p__8295;
var map__8296__$1 = ((((!((map__8296 == null)))?(((((map__8296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8296):map__8296);
var x = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8294){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8294));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8309 = arguments.length;
var i__4532__auto___8310 = (0);
while(true){
if((i__4532__auto___8310 < len__4531__auto___8309)){
args__4534__auto__.push((arguments[i__4532__auto___8310]));

var G__8311 = (i__4532__auto___8310 + (1));
i__4532__auto___8310 = G__8311;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8302){
var map__8303 = p__8302;
var map__8303__$1 = ((((!((map__8303 == null)))?(((((map__8303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8303):map__8303);
var x = cljs.core.get.call(null,map__8303__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8303__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8303__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8303,map__8303__$1,x,y,height){
return (function busmaker$main_bus$iter__8305(s__8306){
return (new cljs.core.LazySeq(null,((function (map__8303,map__8303__$1,x,y,height){
return (function (){
var s__8306__$1 = s__8306;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8306__$1);
if(temp__5457__auto__){
var s__8306__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8306__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8306__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8308 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8307 = (0);
while(true){
if((i__8307 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8307);
cljs.core.chunk_append.call(null,b__8308,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8312 = (i__8307 + (1));
i__8307 = G__8312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8308),busmaker$main_bus$iter__8305.call(null,cljs.core.chunk_rest.call(null,s__8306__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8308),null);
}
} else {
var i = cljs.core.first.call(null,s__8306__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8305.call(null,cljs.core.rest.call(null,s__8306__$2)));
}
} else {
return null;
}
break;
}
});})(map__8303,map__8303__$1,x,y,height))
,null,null));
});})(map__8303,map__8303__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8301){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8301));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8321 = arguments.length;
var i__4532__auto___8322 = (0);
while(true){
if((i__4532__auto___8322 < len__4531__auto___8321)){
args__4534__auto__.push((arguments[i__4532__auto___8322]));

var G__8323 = (i__4532__auto___8322 + (1));
i__4532__auto___8322 = G__8323;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8314){
var map__8315 = p__8314;
var map__8315__$1 = ((((!((map__8315 == null)))?(((((map__8315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8315):map__8315);
var x = cljs.core.get.call(null,map__8315__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8315__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8315__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8315,map__8315__$1,x,y,height){
return (function busmaker$main_bus$iter__8317(s__8318){
return (new cljs.core.LazySeq(null,((function (map__8315,map__8315__$1,x,y,height){
return (function (){
var s__8318__$1 = s__8318;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8318__$1);
if(temp__5457__auto__){
var s__8318__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8318__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8318__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8320 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8319 = (0);
while(true){
if((i__8319 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8319);
cljs.core.chunk_append.call(null,b__8320,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8324 = (i__8319 + (1));
i__8319 = G__8324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8320),busmaker$main_bus$iter__8317.call(null,cljs.core.chunk_rest.call(null,s__8318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8320),null);
}
} else {
var i = cljs.core.first.call(null,s__8318__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8317.call(null,cljs.core.rest.call(null,s__8318__$2)));
}
} else {
return null;
}
break;
}
});})(map__8315,map__8315__$1,x,y,height))
,null,null));
});})(map__8315,map__8315__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8313){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8313));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8340 = arguments.length;
var i__4532__auto___8341 = (0);
while(true){
if((i__4532__auto___8341 < len__4531__auto___8340)){
args__4534__auto__.push((arguments[i__4532__auto___8341]));

var G__8342 = (i__4532__auto___8341 + (1));
i__4532__auto___8341 = G__8342;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__8327){
var map__8328 = p__8327;
var map__8328__$1 = ((((!((map__8328 == null)))?(((((map__8328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8328):map__8328);
var x = cljs.core.get.call(null,map__8328__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8328__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8328,map__8328__$1,x,y){
return (function busmaker$main_bus$iter__8330(s__8331){
return (new cljs.core.LazySeq(null,((function (map__8328,map__8328__$1,x,y){
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
var vec__8334 = cljs.core._nth.call(null,c__4322__auto__,i__8332);
var i = cljs.core.nth.call(null,vec__8334,(0),null);
var xi = cljs.core.nth.call(null,vec__8334,(1),null);
cljs.core.chunk_append.call(null,b__8333,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__8343 = (i__8332 + (1));
i__8332 = G__8343;
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
var vec__8337 = cljs.core.first.call(null,s__8331__$2);
var i = cljs.core.nth.call(null,vec__8337,(0),null);
var xi = cljs.core.nth.call(null,vec__8337,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__8330.call(null,cljs.core.rest.call(null,s__8331__$2)));
}
} else {
return null;
}
break;
}
});})(map__8328,map__8328__$1,x,y))
,null,null));
});})(map__8328,map__8328__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq8325){
var G__8326 = cljs.core.first.call(null,seq8325);
var seq8325__$1 = cljs.core.next.call(null,seq8325);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8326,seq8325__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8360 = arguments.length;
var i__4532__auto___8361 = (0);
while(true){
if((i__4532__auto___8361 < len__4531__auto___8360)){
args__4534__auto__.push((arguments[i__4532__auto___8361]));

var G__8362 = (i__4532__auto___8361 + (1));
i__4532__auto___8361 = G__8362;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8345){
var map__8346 = p__8345;
var map__8346__$1 = ((((!((map__8346 == null)))?(((((map__8346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8346):map__8346);
var x = cljs.core.get.call(null,map__8346__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8346__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var ingredient = cljs.core.get.call(null,map__8346__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019));
var n_factories = cljs.core.get.call(null,map__8346__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(1));
var facility = cljs.core.get.call(null,map__8346__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8346,map__8346__$1,x,y,ingredient,n_factories,facility){
return (function busmaker$main_bus$iter__8348(s__8349){
return (new cljs.core.LazySeq(null,((function (map__8346,map__8346__$1,x,y,ingredient,n_factories,facility){
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
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8351,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8350,dx,i,c__4322__auto__,size__4323__auto__,b__8351,s__8349__$2,temp__5457__auto__,map__8346,map__8346__$1,x,y,ingredient,n_factories,facility){
return (function busmaker$main_bus$iter__8348_$_iter__8352(s__8353){
return (new cljs.core.LazySeq(null,((function (i__8350,dx,i,c__4322__auto__,size__4323__auto__,b__8351,s__8349__$2,temp__5457__auto__,map__8346,map__8346__$1,x,y,ingredient,n_factories,facility){
return (function (){
var s__8353__$1 = s__8353;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8353__$1);
if(temp__5457__auto____$1){
var s__8353__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8353__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8353__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8355 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8354 = (0);
while(true){
if((i__8354 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8354);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8355,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8363 = (i__8354 + (1));
i__8354 = G__8363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8355),busmaker$main_bus$iter__8348_$_iter__8352.call(null,cljs.core.chunk_rest.call(null,s__8353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8355),null);
}
} else {
var j = cljs.core.first.call(null,s__8353__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8348_$_iter__8352.call(null,cljs.core.rest.call(null,s__8353__$2)));
}
} else {
return null;
}
break;
}
});})(i__8350,dx,i,c__4322__auto__,size__4323__auto__,b__8351,s__8349__$2,temp__5457__auto__,map__8346,map__8346__$1,x,y,ingredient,n_factories,facility))
,null,null));
});})(i__8350,dx,i,c__4322__auto__,size__4323__auto__,b__8351,s__8349__$2,temp__5457__auto__,map__8346,map__8346__$1,x,y,ingredient,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8364 = (i__8350 + (1));
i__8350 = G__8364;
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
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8349__$2,temp__5457__auto__,map__8346,map__8346__$1,x,y,ingredient,n_factories,facility){
return (function busmaker$main_bus$iter__8348_$_iter__8356(s__8357){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8349__$2,temp__5457__auto__,map__8346,map__8346__$1,x,y,ingredient,n_factories,facility){
return (function (){
var s__8357__$1 = s__8357;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8357__$1);
if(temp__5457__auto____$1){
var s__8357__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8357__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8357__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8359 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8358 = (0);
while(true){
if((i__8358 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8358);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8359,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8365 = (i__8358 + (1));
i__8358 = G__8365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8359),busmaker$main_bus$iter__8348_$_iter__8356.call(null,cljs.core.chunk_rest.call(null,s__8357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8359),null);
}
} else {
var j = cljs.core.first.call(null,s__8357__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8348_$_iter__8356.call(null,cljs.core.rest.call(null,s__8357__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8349__$2,temp__5457__auto__,map__8346,map__8346__$1,x,y,ingredient,n_factories,facility))
,null,null));
});})(dx,i,s__8349__$2,temp__5457__auto__,map__8346,map__8346__$1,x,y,ingredient,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__8348.call(null,cljs.core.rest.call(null,s__8349__$2)));
}
} else {
return null;
}
break;
}
});})(map__8346,map__8346__$1,x,y,ingredient,n_factories,facility))
,null,null));
});})(map__8346,map__8346__$1,x,y,ingredient,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq8344){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8344));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8374 = arguments.length;
var i__4532__auto___8375 = (0);
while(true){
if((i__4532__auto___8375 < len__4531__auto___8374)){
args__4534__auto__.push((arguments[i__4532__auto___8375]));

var G__8376 = (i__4532__auto___8375 + (1));
i__4532__auto___8375 = G__8376;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8367){
var map__8368 = p__8367;
var map__8368__$1 = ((((!((map__8368 == null)))?(((((map__8368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8368):map__8368);
var x = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8368,map__8368__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8370(s__8371){
return (new cljs.core.LazySeq(null,((function (n,map__8368,map__8368__$1,x,y,input_index,input_extension,x_extension,y_extension){
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
var i = cljs.core._nth.call(null,c__4322__auto__,i__8372);
cljs.core.chunk_append.call(null,b__8373,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8377 = (i__8372 + (1));
i__8372 = G__8377;
continue;
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
var i = cljs.core.first.call(null,s__8371__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8370.call(null,cljs.core.rest.call(null,s__8371__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8368,map__8368__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8368,map__8368__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8366){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8366));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8382 = arguments.length;
var i__4532__auto___8383 = (0);
while(true){
if((i__4532__auto___8383 < len__4531__auto___8382)){
args__4534__auto__.push((arguments[i__4532__auto___8383]));

var G__8384 = (i__4532__auto___8383 + (1));
i__4532__auto___8383 = G__8384;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8379){
var map__8380 = p__8379;
var map__8380__$1 = ((((!((map__8380 == null)))?(((((map__8380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8380):map__8380);
var x = cljs.core.get.call(null,map__8380__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8380__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8380__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8380__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8380__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8380__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8378){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8378));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8393 = arguments.length;
var i__4532__auto___8394 = (0);
while(true){
if((i__4532__auto___8394 < len__4531__auto___8393)){
args__4534__auto__.push((arguments[i__4532__auto___8394]));

var G__8395 = (i__4532__auto___8394 + (1));
i__4532__auto___8394 = G__8395;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8386){
var map__8387 = p__8386;
var map__8387__$1 = ((((!((map__8387 == null)))?(((((map__8387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8387):map__8387);
var x = cljs.core.get.call(null,map__8387__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8387__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8387__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8387__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8387__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8387,map__8387__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8389(s__8390){
return (new cljs.core.LazySeq(null,((function (map__8387,map__8387__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__8390__$1 = s__8390;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8390__$1);
if(temp__5457__auto__){
var s__8390__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8390__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8390__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8392 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8391 = (0);
while(true){
if((i__8391 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8391);
cljs.core.chunk_append.call(null,b__8392,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8396 = (i__8391 + (1));
i__8391 = G__8396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8392),busmaker$main_bus$iter__8389.call(null,cljs.core.chunk_rest.call(null,s__8390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8392),null);
}
} else {
var i = cljs.core.first.call(null,s__8390__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8389.call(null,cljs.core.rest.call(null,s__8390__$2)));
}
} else {
return null;
}
break;
}
});})(map__8387,map__8387__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8387,map__8387__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8385){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8385));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8407 = arguments.length;
var i__4532__auto___8408 = (0);
while(true){
if((i__4532__auto___8408 < len__4531__auto___8407)){
args__4534__auto__.push((arguments[i__4532__auto___8408]));

var G__8409 = (i__4532__auto___8408 + (1));
i__4532__auto___8408 = G__8409;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8398){
var map__8399 = p__8398;
var map__8399__$1 = ((((!((map__8399 == null)))?(((((map__8399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8399):map__8399);
var x = cljs.core.get.call(null,map__8399__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8399__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8399__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8399__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8399,map__8399__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__8401(s__8402){
return (new cljs.core.LazySeq(null,((function (n,map__8399,map__8399__$1,x,y,input_index,bus_index){
return (function (){
var s__8402__$1 = s__8402;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8402__$1);
if(temp__5457__auto__){
var s__8402__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8402__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8402__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8404 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8403 = (0);
while(true){
if((i__8403 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8403);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8404,(function (){var G__8405 = cljs.core.mod.call(null,i,(3));
switch (G__8405) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8405)].join('')));

}
})());

var G__8411 = (i__8403 + (1));
i__8403 = G__8411;
continue;
} else {
var G__8412 = (i__8403 + (1));
i__8403 = G__8412;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8404),busmaker$main_bus$iter__8401.call(null,cljs.core.chunk_rest.call(null,s__8402__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8404),null);
}
} else {
var i = cljs.core.first.call(null,s__8402__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__8406 = cljs.core.mod.call(null,i,(3));
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
})(),busmaker$main_bus$iter__8401.call(null,cljs.core.rest.call(null,s__8402__$2)));
} else {
var G__8414 = cljs.core.rest.call(null,s__8402__$2);
s__8402__$1 = G__8414;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8399,map__8399__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__8399,map__8399__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8397){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8397));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8423 = arguments.length;
var i__4532__auto___8424 = (0);
while(true){
if((i__4532__auto___8424 < len__4531__auto___8423)){
args__4534__auto__.push((arguments[i__4532__auto___8424]));

var G__8425 = (i__4532__auto___8424 + (1));
i__4532__auto___8424 = G__8425;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8416){
var map__8417 = p__8416;
var map__8417__$1 = ((((!((map__8417 == null)))?(((((map__8417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8417):map__8417);
var x = cljs.core.get.call(null,map__8417__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8417__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8417__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8417__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8417,map__8417__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8419(s__8420){
return (new cljs.core.LazySeq(null,((function (map__8417,map__8417__$1,x,y,output_index,y_extension){
return (function (){
var s__8420__$1 = s__8420;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8420__$1);
if(temp__5457__auto__){
var s__8420__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8420__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8420__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8422 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8421 = (0);
while(true){
if((i__8421 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8421);
cljs.core.chunk_append.call(null,b__8422,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

var G__8426 = (i__8421 + (1));
i__8421 = G__8426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8422),busmaker$main_bus$iter__8419.call(null,cljs.core.chunk_rest.call(null,s__8420__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8422),null);
}
} else {
var i = cljs.core.first.call(null,s__8420__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8419.call(null,cljs.core.rest.call(null,s__8420__$2)));
}
} else {
return null;
}
break;
}
});})(map__8417,map__8417__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8417,map__8417__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})(),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8415){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8415));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8439 = arguments.length;
var i__4532__auto___8440 = (0);
while(true){
if((i__4532__auto___8440 < len__4531__auto___8439)){
args__4534__auto__.push((arguments[i__4532__auto___8440]));

var G__8441 = (i__4532__auto___8440 + (1));
i__4532__auto___8440 = G__8441;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8428){
var map__8429 = p__8428;
var map__8429__$1 = ((((!((map__8429 == null)))?(((((map__8429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8429):map__8429);
var x = cljs.core.get.call(null,map__8429__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8429__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8429__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8429__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8429,map__8429__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8431(s__8432){
return (new cljs.core.LazySeq(null,((function (n,map__8429,map__8429__$1,x,y,output_index,y_extension){
return (function (){
var s__8432__$1 = s__8432;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8432__$1);
if(temp__5457__auto__){
var s__8432__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8432__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8432__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8434 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8433 = (0);
while(true){
if((i__8433 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8433);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8434,(((i >= n))?(function (){var G__8435 = cljs.core.mod.call(null,i,(3));
switch (G__8435) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8435)].join('')));

}
})():(function (){var G__8436 = cljs.core.mod.call(null,i,(3));
switch (G__8436) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8436)].join('')));

}
})()));

var G__8444 = (i__8433 + (1));
i__8433 = G__8444;
continue;
} else {
var G__8445 = (i__8433 + (1));
i__8433 = G__8445;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8434),busmaker$main_bus$iter__8431.call(null,cljs.core.chunk_rest.call(null,s__8432__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8434),null);
}
} else {
var i = cljs.core.first.call(null,s__8432__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8437 = cljs.core.mod.call(null,i,(3));
switch (G__8437) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8437)].join('')));

}
})():(function (){var G__8438 = cljs.core.mod.call(null,i,(3));
switch (G__8438) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8438)].join('')));

}
})()),busmaker$main_bus$iter__8431.call(null,cljs.core.rest.call(null,s__8432__$2)));
} else {
var G__8448 = cljs.core.rest.call(null,s__8432__$2);
s__8432__$1 = G__8448;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8429,map__8429__$1,x,y,output_index,y_extension))
,null,null));
});})(n,map__8429,map__8429__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8427){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8427));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8453 = arguments.length;
var i__4532__auto___8454 = (0);
while(true){
if((i__4532__auto___8454 < len__4531__auto___8453)){
args__4534__auto__.push((arguments[i__4532__auto___8454]));

var G__8455 = (i__4532__auto___8454 + (1));
i__4532__auto___8454 = G__8455;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8450){
var map__8451 = p__8450;
var map__8451__$1 = ((((!((map__8451 == null)))?(((((map__8451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8451):map__8451);
var x = cljs.core.get.call(null,map__8451__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8451__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8451__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8451__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8449){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8449));
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
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))){
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
var len__4531__auto___8567 = arguments.length;
var i__4532__auto___8568 = (0);
while(true){
if((i__4532__auto___8568 < len__4531__auto___8567)){
args__4534__auto__.push((arguments[i__4532__auto___8568]));

var G__8569 = (i__4532__auto___8568 + (1));
i__4532__auto___8568 = G__8569;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8459){
var map__8460 = p__8459;
var map__8460__$1 = ((((!((map__8460 == null)))?(((((map__8460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8460):map__8460);
var x = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var n_factories = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var facility = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var buses = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"buses","buses",214650120),cljs.core.PersistentVector.EMPTY);
var output_index = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446));
var ingredient = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),"iron-gear");
var input_indexes = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ready_indexes = cljs.core.get.call(null,map__8460__$1,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348));
var outputs = cljs.core.PersistentHashSet.createAsIfByAssoc([output_index]);
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(-3):(0)
))));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (p1__8456_SHARP_,p2__8457_SHARP_){
return cljs.core.assoc.call(null,p1__8456_SHARP_,"entity_number",(p2__8457_SHARP_ + (1)));
});})(outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,(function (){var G__8462 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8463(s__8464){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8464__$1 = s__8464;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8464__$1);
if(temp__5457__auto__){
var s__8464__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8464__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8464__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8466 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8465 = (0);
while(true){
if((i__8465 < size__4323__auto__)){
var vec__8467 = cljs.core._nth.call(null,c__4322__auto__,i__8465);
var bus_ingredient = cljs.core.nth.call(null,vec__8467,(0),null);
var i = cljs.core.nth.call(null,vec__8467,(1),null);
cljs.core.chunk_append.call(null,b__8466,(function (){var x__$1 = (x + (6));
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

var G__8570 = (i__8465 + (1));
i__8465 = G__8570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8466),busmaker$main_bus$iter__8463.call(null,cljs.core.chunk_rest.call(null,s__8464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8466),null);
}
} else {
var vec__8470 = cljs.core.first.call(null,s__8464__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__8470,(0),null);
var i = cljs.core.nth.call(null,vec__8470,(1),null);
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
})(),busmaker$main_bus$iter__8463.call(null,cljs.core.rest.call(null,s__8464__$2)));
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
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
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8473(s__8474){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8474__$1 = s__8474;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8474__$1);
if(temp__5457__auto__){
var s__8474__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8474__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8474__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8476 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8475 = (0);
while(true){
if((i__8475 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8475);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__8571 = (i__8475 + (1));
i__8475 = G__8571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8476),busmaker$main_bus$iter__8473.call(null,cljs.core.chunk_rest.call(null,s__8474__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8476),null);
}
} else {
var i = cljs.core.first.call(null,s__8474__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__8473.call(null,cljs.core.rest.call(null,s__8474__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8477(s__8478){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8478__$1 = s__8478;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8478__$1);
if(temp__5457__auto__){
var s__8478__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8478__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8478__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8480 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8479 = (0);
while(true){
if((i__8479 < size__4323__auto__)){
var vec__8481 = cljs.core._nth.call(null,c__4322__auto__,i__8479);
var input_index = cljs.core.nth.call(null,vec__8481,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8481,(1),null);
cljs.core.chunk_append.call(null,b__8480,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8479,x__$2,y__$4,y__$3,vec__8481,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8480,s__8478__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8477_$_iter__8484(s__8485){
return (new cljs.core.LazySeq(null,((function (i__8479,x__$2,y__$4,y__$3,vec__8481,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8480,s__8478__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8485__$1 = s__8485;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8485__$1);
if(temp__5457__auto____$1){
var s__8485__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8485__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8485__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8487 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8486 = (0);
while(true){
if((i__8486 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8486);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8572 = (i__8486 + (1));
i__8486 = G__8572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8487),busmaker$main_bus$iter__8477_$_iter__8484.call(null,cljs.core.chunk_rest.call(null,s__8485__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8487),null);
}
} else {
var i = cljs.core.first.call(null,s__8485__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8477_$_iter__8484.call(null,cljs.core.rest.call(null,s__8485__$2)));
}
} else {
return null;
}
break;
}
});})(i__8479,x__$2,y__$4,y__$3,vec__8481,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8480,s__8478__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8479,x__$2,y__$4,y__$3,vec__8481,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8480,s__8478__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__8573 = (i__8479 + (1));
i__8479 = G__8573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8480),busmaker$main_bus$iter__8477.call(null,cljs.core.chunk_rest.call(null,s__8478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8480),null);
}
} else {
var vec__8488 = cljs.core.first.call(null,s__8478__$2);
var input_index = cljs.core.nth.call(null,vec__8488,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8488,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$4,y__$3,vec__8488,input_index,bus_index,s__8478__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8477_$_iter__8491(s__8492){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$4,y__$3,vec__8488,input_index,bus_index,s__8478__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8492__$1 = s__8492;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8492__$1);
if(temp__5457__auto____$1){
var s__8492__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8492__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8492__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8494 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8493 = (0);
while(true){
if((i__8493 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8493);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8574 = (i__8493 + (1));
i__8493 = G__8574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8494),busmaker$main_bus$iter__8477_$_iter__8491.call(null,cljs.core.chunk_rest.call(null,s__8492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8494),null);
}
} else {
var i = cljs.core.first.call(null,s__8492__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8477_$_iter__8491.call(null,cljs.core.rest.call(null,s__8492__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$4,y__$3,vec__8488,input_index,bus_index,s__8478__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$2,y__$4,y__$3,vec__8488,input_index,bus_index,s__8478__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__8477.call(null,cljs.core.rest.call(null,s__8478__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8495(s__8496){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8496__$1 = s__8496;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8496__$1);
if(temp__5457__auto__){
var s__8496__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8496__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8496__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8498 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8497 = (0);
while(true){
if((i__8497 < size__4323__auto__)){
var vec__8499 = cljs.core._nth.call(null,c__4322__auto__,i__8497);
var output_recipe = cljs.core.nth.call(null,vec__8499,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8499,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8498,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8497,s__8496__$1,tap_x,x__$1,y__$2,vec__8499,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8498,s__8496__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8495_$_iter__8502(s__8503){
return (new cljs.core.LazySeq(null,((function (i__8497,s__8496__$1,tap_x,x__$1,y__$2,vec__8499,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8498,s__8496__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8503__$1 = s__8503;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8503__$1);
if(temp__5457__auto____$1){
var s__8503__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8503__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8503__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8505 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8504 = (0);
while(true){
if((i__8504 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8504);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8505,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8506 = cljs.core.mod.call(null,i,(3));
switch (G__8506) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8506)].join('')));

}
})()));

var G__8576 = (i__8504 + (1));
i__8504 = G__8576;
continue;
} else {
var G__8577 = (i__8504 + (1));
i__8504 = G__8577;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8505),busmaker$main_bus$iter__8495_$_iter__8502.call(null,cljs.core.chunk_rest.call(null,s__8503__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8505),null);
}
} else {
var i = cljs.core.first.call(null,s__8503__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8507 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8495_$_iter__8502.call(null,cljs.core.rest.call(null,s__8503__$2)));
} else {
var G__8579 = cljs.core.rest.call(null,s__8503__$2);
s__8503__$1 = G__8579;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8497,s__8496__$1,tap_x,x__$1,y__$2,vec__8499,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8498,s__8496__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8497,s__8496__$1,tap_x,x__$1,y__$2,vec__8499,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8498,s__8496__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8580 = (i__8497 + (1));
i__8497 = G__8580;
continue;
} else {
var G__8581 = (i__8497 + (1));
i__8497 = G__8581;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8498),busmaker$main_bus$iter__8495.call(null,cljs.core.chunk_rest.call(null,s__8496__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8498),null);
}
} else {
var vec__8508 = cljs.core.first.call(null,s__8496__$2);
var output_recipe = cljs.core.nth.call(null,vec__8508,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8508,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8496__$1,tap_x,x__$1,y__$2,vec__8508,output_recipe,output_index__$1,s__8496__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8495_$_iter__8511(s__8512){
return (new cljs.core.LazySeq(null,((function (s__8496__$1,tap_x,x__$1,y__$2,vec__8508,output_recipe,output_index__$1,s__8496__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8512__$1 = s__8512;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8512__$1);
if(temp__5457__auto____$1){
var s__8512__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8512__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8512__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8514 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8513 = (0);
while(true){
if((i__8513 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8513);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8514,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8515 = cljs.core.mod.call(null,i,(3));
switch (G__8515) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8515)].join('')));

}
})()));

var G__8583 = (i__8513 + (1));
i__8513 = G__8583;
continue;
} else {
var G__8584 = (i__8513 + (1));
i__8513 = G__8584;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8514),busmaker$main_bus$iter__8495_$_iter__8511.call(null,cljs.core.chunk_rest.call(null,s__8512__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8514),null);
}
} else {
var i = cljs.core.first.call(null,s__8512__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8516 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8495_$_iter__8511.call(null,cljs.core.rest.call(null,s__8512__$2)));
} else {
var G__8586 = cljs.core.rest.call(null,s__8512__$2);
s__8512__$1 = G__8586;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8496__$1,tap_x,x__$1,y__$2,vec__8508,output_recipe,output_index__$1,s__8496__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8496__$1,tap_x,x__$1,y__$2,vec__8508,output_recipe,output_index__$1,s__8496__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8495.call(null,cljs.core.rest.call(null,s__8496__$2)));
} else {
var G__8587 = cljs.core.rest.call(null,s__8496__$2);
s__8496__$1 = G__8587;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8517(s__8518){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8518__$1 = s__8518;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8518__$1);
if(temp__5457__auto__){
var s__8518__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8518__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8518__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8520 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8519 = (0);
while(true){
if((i__8519 < size__4323__auto__)){
var vec__8521 = cljs.core._nth.call(null,c__4322__auto__,i__8519);
var output_recipe = cljs.core.nth.call(null,vec__8521,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8521,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8520,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = (y__$1 + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8519,s__8518__$1,tap_x,x__$1,y__$2,vec__8521,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8520,s__8518__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8517_$_iter__8524(s__8525){
return (new cljs.core.LazySeq(null,((function (i__8519,s__8518__$1,tap_x,x__$1,y__$2,vec__8521,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8520,s__8518__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8525__$1 = s__8525;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8525__$1);
if(temp__5457__auto____$1){
var s__8525__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8525__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8525__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8527 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8526 = (0);
while(true){
if((i__8526 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8526);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8527,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8528 = cljs.core.mod.call(null,i,(3));
switch (G__8528) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8528)].join('')));

}
})()));

var G__8589 = (i__8526 + (1));
i__8526 = G__8589;
continue;
} else {
var G__8590 = (i__8526 + (1));
i__8526 = G__8590;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8527),busmaker$main_bus$iter__8517_$_iter__8524.call(null,cljs.core.chunk_rest.call(null,s__8525__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8527),null);
}
} else {
var i = cljs.core.first.call(null,s__8525__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8529 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8517_$_iter__8524.call(null,cljs.core.rest.call(null,s__8525__$2)));
} else {
var G__8592 = cljs.core.rest.call(null,s__8525__$2);
s__8525__$1 = G__8592;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8519,s__8518__$1,tap_x,x__$1,y__$2,vec__8521,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8520,s__8518__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__8519,s__8518__$1,tap_x,x__$1,y__$2,vec__8521,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__8520,s__8518__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})());

var G__8593 = (i__8519 + (1));
i__8519 = G__8593;
continue;
} else {
var G__8594 = (i__8519 + (1));
i__8519 = G__8594;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8520),busmaker$main_bus$iter__8517.call(null,cljs.core.chunk_rest.call(null,s__8518__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8520),null);
}
} else {
var vec__8530 = cljs.core.first.call(null,s__8518__$2);
var output_recipe = cljs.core.nth.call(null,vec__8530,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8530,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8518__$1,tap_x,x__$1,y__$2,vec__8530,output_recipe,output_index__$1,s__8518__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8517_$_iter__8533(s__8534){
return (new cljs.core.LazySeq(null,((function (s__8518__$1,tap_x,x__$1,y__$2,vec__8530,output_recipe,output_index__$1,s__8518__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8534__$1 = s__8534;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8534__$1);
if(temp__5457__auto____$1){
var s__8534__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8534__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8534__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8536 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8535 = (0);
while(true){
if((i__8535 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8535);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8536,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8537 = cljs.core.mod.call(null,i,(3));
switch (G__8537) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8537)].join('')));

}
})()));

var G__8596 = (i__8535 + (1));
i__8535 = G__8596;
continue;
} else {
var G__8597 = (i__8535 + (1));
i__8535 = G__8597;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8536),busmaker$main_bus$iter__8517_$_iter__8533.call(null,cljs.core.chunk_rest.call(null,s__8534__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8536),null);
}
} else {
var i = cljs.core.first.call(null,s__8534__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8538 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8517_$_iter__8533.call(null,cljs.core.rest.call(null,s__8534__$2)));
} else {
var G__8599 = cljs.core.rest.call(null,s__8534__$2);
s__8534__$1 = G__8599;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8518__$1,tap_x,x__$1,y__$2,vec__8530,output_recipe,output_index__$1,s__8518__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8518__$1,tap_x,x__$1,y__$2,vec__8530,output_recipe,output_index__$1,s__8518__$2,temp__5457__auto__,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})(),busmaker$main_bus$iter__8517.call(null,cljs.core.rest.call(null,s__8518__$2)));
} else {
var G__8600 = cljs.core.rest.call(null,s__8518__$2);
s__8518__$1 = G__8600;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__8462__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8462,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$2 = (y__$1 + (6));
var iter__4324__auto__ = ((function (x__$1,y__$2,G__8462,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8539(s__8540){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,G__8462,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8540__$1 = s__8540;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8540__$1);
if(temp__5457__auto__){
var s__8540__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8540__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8540__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8542 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8541 = (0);
while(true){
if((i__8541 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8541);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
cljs.core.chunk_append.call(null,b__8542,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)));

var G__8601 = (i__8541 + (1));
i__8541 = G__8601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8542),busmaker$main_bus$iter__8539.call(null,cljs.core.chunk_rest.call(null,s__8540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8542),null);
}
} else {
var i = cljs.core.first.call(null,s__8540__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)),busmaker$main_bus$iter__8539.call(null,cljs.core.rest.call(null,s__8540__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,G__8462,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,G__8462,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8462);
var G__8462__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient)))?cljs.core.concat.call(null,G__8462__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8462,G__8462__$1,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8543(s__8544){
return (new cljs.core.LazySeq(null,((function (G__8462,G__8462__$1,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8544__$1 = s__8544;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8544__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8544__$1,i,xs__6012__auto__,temp__5457__auto__,G__8462,G__8462__$1,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8543_$_iter__8545(s__8546){
return (new cljs.core.LazySeq(null,((function (s__8544__$1,i,xs__6012__auto__,temp__5457__auto__,G__8462,G__8462__$1,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8546__$1 = s__8546;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8546__$1);
if(temp__5457__auto____$1){
var s__8546__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8546__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8546__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8548 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8547 = (0);
while(true){
if((i__8547 < size__4323__auto__)){
var vec__8549 = cljs.core._nth.call(null,c__4322__auto__,i__8547);
var input_recipe = cljs.core.nth.call(null,vec__8549,(0),null);
var input_index = cljs.core.nth.call(null,vec__8549,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8548,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8602 = (i__8547 + (1));
i__8547 = G__8602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8548),busmaker$main_bus$iter__8543_$_iter__8545.call(null,cljs.core.chunk_rest.call(null,s__8546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8548),null);
}
} else {
var vec__8552 = cljs.core.first.call(null,s__8546__$2);
var input_recipe = cljs.core.nth.call(null,vec__8552,(0),null);
var input_index = cljs.core.nth.call(null,vec__8552,(1),null);
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
)),args))))),busmaker$main_bus$iter__8543_$_iter__8545.call(null,cljs.core.rest.call(null,s__8546__$2)));
}
} else {
return null;
}
break;
}
});})(s__8544__$1,i,xs__6012__auto__,temp__5457__auto__,G__8462,G__8462__$1,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8544__$1,i,xs__6012__auto__,temp__5457__auto__,G__8462,G__8462__$1,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8543.call(null,cljs.core.rest.call(null,s__8544__$1)));
} else {
var G__8603 = cljs.core.rest.call(null,s__8544__$1);
s__8544__$1 = G__8603;
continue;
}
} else {
return null;
}
break;
}
});})(G__8462,G__8462__$1,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(G__8462,G__8462__$1,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8462__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8462__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$2,x__$1,G__8462,G__8462__$1,G__8462__$2,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8555(s__8556){
return (new cljs.core.LazySeq(null,((function (y__$2,x__$1,G__8462,G__8462__$1,G__8462__$2,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8556__$1 = s__8556;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8556__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8556__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8462,G__8462__$1,G__8462__$2,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__8555_$_iter__8557(s__8558){
return (new cljs.core.LazySeq(null,((function (s__8556__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8462,G__8462__$1,G__8462__$2,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__8558__$1 = s__8558;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8558__$1);
if(temp__5457__auto____$1){
var s__8558__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8558__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8558__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8560 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8559 = (0);
while(true){
if((i__8559 < size__4323__auto__)){
var vec__8561 = cljs.core._nth.call(null,c__4322__auto__,i__8559);
var output_recipe = cljs.core.nth.call(null,vec__8561,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8561,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8560,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8604 = (i__8559 + (1));
i__8559 = G__8604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8560),busmaker$main_bus$iter__8555_$_iter__8557.call(null,cljs.core.chunk_rest.call(null,s__8558__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8560),null);
}
} else {
var vec__8564 = cljs.core.first.call(null,s__8558__$2);
var output_recipe = cljs.core.nth.call(null,vec__8564,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__8564,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8555_$_iter__8557.call(null,cljs.core.rest.call(null,s__8558__$2)));
}
} else {
return null;
}
break;
}
});})(s__8556__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8462,G__8462__$1,G__8462__$2,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__8556__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__8462,G__8462__$1,G__8462__$2,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8555.call(null,cljs.core.rest.call(null,s__8556__$1)));
} else {
var G__8605 = cljs.core.rest.call(null,s__8556__$1);
s__8556__$1 = G__8605;
continue;
}
} else {
return null;
}
break;
}
});})(y__$2,x__$1,G__8462,G__8462__$1,G__8462__$2,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(y__$2,x__$1,G__8462,G__8462__$1,G__8462__$2,outputs,y__$1,map__8460,map__8460__$1,x,y,n_factories,facility,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8462__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8458){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8458));
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
var G__8607 = arguments.length;
switch (G__8607) {
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
var G__8613 = null;
var G__8613__0 = (function (){
return rf.call(null);
});
var G__8613__1 = (function (result){
return rf.call(null,result);
});
var G__8613__2 = (function (result,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),input)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),input));

return rf.call(null,result,input);
}
});
G__8613 = function(result,input){
switch(arguments.length){
case 0:
return G__8613__0.call(this);
case 1:
return G__8613__1.call(this,result);
case 2:
return G__8613__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8613.cljs$core$IFn$_invoke$arity$0 = G__8613__0;
G__8613.cljs$core$IFn$_invoke$arity$1 = G__8613__1;
G__8613.cljs$core$IFn$_invoke$arity$2 = G__8613__2;
return G__8613;
})()
;})(seen))
});
});

busmaker.main_bus.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function busmaker$main_bus$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__8608,seen__$1){
while(true){
var vec__8609 = p__8608;
var h = cljs.core.nth.call(null,vec__8609,(0),null);
var xs__$1 = vec__8609;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f.call(null,h))){
var G__8614 = cljs.core.rest.call(null,s);
var G__8615 = seen__$1;
p__8608 = G__8614;
seen__$1 = G__8615;
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
var G__8617 = arguments.length;
switch (G__8617) {
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
return cljs.core.filter.call(null,(function (p1__8619_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__8619_SHARP_));
}),busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name));
}),recipe_names));
var products = cljs.core.reduce.call(null,((function (oil_QMARK_){
return (function (products,recipe_name){
return cljs.core.apply.call(null,cljs.core.conj,products,cljs.core.remove.call(null,cljs.core.set.call(null,products),cljs.core.remove.call(null,((function (oil_QMARK_){
return (function (p1__8620_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__8620_SHARP_));
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
var map__8622 = busmaker.main_bus.products.call(null,recipe_names);
var map__8622__$1 = ((((!((map__8622 == null)))?(((((map__8622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8622):map__8622);
var oil_QMARK_ = cljs.core.get.call(null,map__8622__$1,new cljs.core.Keyword(null,"oil?","oil?",1078295839));
var products = cljs.core.get.call(null,map__8622__$1,new cljs.core.Keyword(null,"products","products",1876973544));
var others = cljs.core.get.call(null,map__8622__$1,new cljs.core.Keyword(null,"others","others",2084874583));
var deps = cljs.core.get.call(null,map__8622__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var bus_outputs = cljs.core.get.call(null,map__8622__$1,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (map__8622,map__8622__$1,oil_QMARK_,products,others,deps,bus_outputs){
return (function (p__8624,p__8625){
var map__8626 = p__8624;
var map__8626__$1 = ((((!((map__8626 == null)))?(((((map__8626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8626):map__8626);
var acc = map__8626__$1;
var y = cljs.core.get.call(null,map__8626__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__8627 = p__8625;
var output_index = cljs.core.nth.call(null,vec__8627,(0),null);
var ingredient = cljs.core.nth.call(null,vec__8627,(1),null);
var input_indexes = cljs.core.map.call(null,bus_outputs,busmaker.main_bus.ingredients.call(null,ingredient));
var facility = cljs.core.get_in.call(null,factories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900)], null));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_outputs,new cljs.core.Keyword(null,"y","y",-1757859776),((y - busmaker.main_bus.ingredient_height.call(null,ingredient,facility)) - (1)),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),cljs.core.get_in.call(null,factories,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ingredient,new cljs.core.Keyword(null,"n","n",562130025)], null),(1)),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348),cljs.core.set.call(null,cljs.core.range.call(null,output_index)))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
});})(map__8622,map__8622__$1,oil_QMARK_,products,others,deps,bus_outputs))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),cljs.core.filter.call(null,((function (map__8622,map__8622__$1,oil_QMARK_,products,others,deps,bus_outputs){
return (function (p1__8621_SHARP_){
return busmaker.main_bus.created_QMARK_.call(null,cljs.core.second.call(null,p1__8621_SHARP_));
});})(map__8622,map__8622__$1,oil_QMARK_,products,others,deps,bus_outputs))
,deps))));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8631_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8631_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8631_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
