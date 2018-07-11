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
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__4656){
var vec__4657 = p__4656;
var x = cljs.core.nth.call(null,vec__4657,(0),null);
var y = cljs.core.nth.call(null,vec__4657,(1),null);
var G__4660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__4660)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__4660)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__4660)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__4660)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4660)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__4661){
var vec__4662 = p__4661;
var x = cljs.core.nth.call(null,vec__4662,(0),null);
var y = cljs.core.nth.call(null,vec__4662,(1),null);
var G__4665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__4665)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__4665)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__4665)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__4665)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4665)].join('')));

}
}
}
}
});
busmaker.main_bus.fast_underground_belt = (function busmaker$main_bus$fast_underground_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4670 = arguments.length;
var i__4532__auto___4671 = (0);
while(true){
if((i__4532__auto___4671 < len__4531__auto___4670)){
args__4534__auto__.push((arguments[i__4532__auto___4671]));

var G__4672 = (i__4532__auto___4671 + (1));
i__4532__auto___4671 = G__4672;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.fast_underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__4667){
var map__4668 = p__4667;
var map__4668__$1 = ((((!((map__4668 == null)))?(((((map__4668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4668):map__4668);
var x = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","fast-underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.fast_underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_underground_belt.cljs$lang$applyTo = (function (seq4666){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4666));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4677 = arguments.length;
var i__4532__auto___4678 = (0);
while(true){
if((i__4532__auto___4678 < len__4531__auto___4677)){
args__4534__auto__.push((arguments[i__4532__auto___4678]));

var G__4679 = (i__4532__auto___4678 + (1));
i__4532__auto___4678 = G__4679;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__4674){
var map__4675 = p__4674;
var map__4675__$1 = ((((!((map__4675 == null)))?(((((map__4675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4675):map__4675);
var x = cljs.core.get.call(null,map__4675__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4675__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4675__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__4675__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq4673){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4673));
});

busmaker.main_bus.fast_splitter = (function busmaker$main_bus$fast_splitter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4684 = arguments.length;
var i__4532__auto___4685 = (0);
while(true){
if((i__4532__auto___4685 < len__4531__auto___4684)){
args__4534__auto__.push((arguments[i__4532__auto___4685]));

var G__4686 = (i__4532__auto___4685 + (1));
i__4532__auto___4685 = G__4686;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.fast_splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__4681){
var map__4682 = p__4681;
var map__4682__$1 = ((((!((map__4682 == null)))?(((((map__4682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4682):map__4682);
var x = cljs.core.get.call(null,map__4682__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4682__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4682__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","fast-splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.fast_splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_splitter.cljs$lang$applyTo = (function (seq4680){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4680));
});

busmaker.main_bus.fast_transport_belt = (function busmaker$main_bus$fast_transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4691 = arguments.length;
var i__4532__auto___4692 = (0);
while(true){
if((i__4532__auto___4692 < len__4531__auto___4691)){
args__4534__auto__.push((arguments[i__4532__auto___4692]));

var G__4693 = (i__4532__auto___4692 + (1));
i__4532__auto___4692 = G__4693;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.fast_transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__4688){
var map__4689 = p__4688;
var map__4689__$1 = ((((!((map__4689 == null)))?(((((map__4689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4689):map__4689);
var x = cljs.core.get.call(null,map__4689__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4689__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4689__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","fast-transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.fast_transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_transport_belt.cljs$lang$applyTo = (function (seq4687){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4687));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4698 = arguments.length;
var i__4532__auto___4699 = (0);
while(true){
if((i__4532__auto___4699 < len__4531__auto___4698)){
args__4534__auto__.push((arguments[i__4532__auto___4699]));

var G__4700 = (i__4532__auto___4699 + (1));
i__4532__auto___4699 = G__4700;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__4695){
var map__4696 = p__4695;
var map__4696__$1 = ((((!((map__4696 == null)))?(((((map__4696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4696):map__4696);
var x = cljs.core.get.call(null,map__4696__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4696__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq4694){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4694));
});

busmaker.main_bus.fast_inserter = (function busmaker$main_bus$fast_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4705 = arguments.length;
var i__4532__auto___4706 = (0);
while(true){
if((i__4532__auto___4706 < len__4531__auto___4705)){
args__4534__auto__.push((arguments[i__4532__auto___4706]));

var G__4707 = (i__4532__auto___4706 + (1));
i__4532__auto___4706 = G__4707;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.fast_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__4702){
var map__4703 = p__4702;
var map__4703__$1 = ((((!((map__4703 == null)))?(((((map__4703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4703):map__4703);
var x = cljs.core.get.call(null,map__4703__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4703__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4703__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","fast-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.fast_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_inserter.cljs$lang$applyTo = (function (seq4701){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4701));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4712 = arguments.length;
var i__4532__auto___4713 = (0);
while(true){
if((i__4532__auto___4713 < len__4531__auto___4712)){
args__4534__auto__.push((arguments[i__4532__auto___4713]));

var G__4714 = (i__4532__auto___4713 + (1));
i__4532__auto___4713 = G__4714;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__4709){
var map__4710 = p__4709;
var map__4710__$1 = ((((!((map__4710 == null)))?(((((map__4710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4710):map__4710);
var x = cljs.core.get.call(null,map__4710__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4710__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4710__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq4708){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4708));
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
var len__4531__auto___4719 = arguments.length;
var i__4532__auto___4720 = (0);
while(true){
if((i__4532__auto___4720 < len__4531__auto___4719)){
args__4534__auto__.push((arguments[i__4532__auto___4720]));

var G__4721 = (i__4532__auto___4720 + (1));
i__4532__auto___4720 = G__4721;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__4716){
var map__4717 = p__4716;
var map__4717__$1 = ((((!((map__4717 == null)))?(((((map__4717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4717):map__4717);
var x = cljs.core.get.call(null,map__4717__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4717__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var recipe = cljs.core.get.call(null,map__4717__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
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
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq4715){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4715));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4734 = arguments.length;
var i__4532__auto___4735 = (0);
while(true){
if((i__4532__auto___4735 < len__4531__auto___4734)){
args__4534__auto__.push((arguments[i__4532__auto___4735]));

var G__4736 = (i__4532__auto___4735 + (1));
i__4532__auto___4735 = G__4736;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4723){
var map__4724 = p__4723;
var map__4724__$1 = ((((!((map__4724 == null)))?(((((map__4724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4724):map__4724);
var x = cljs.core.get.call(null,map__4724__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4724__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__4724__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__4724,map__4724__$1,x,y,length){
return (function busmaker$main_bus$iter__4726(s__4727){
return (new cljs.core.LazySeq(null,((function (map__4724,map__4724__$1,x,y,length){
return (function (){
var s__4727__$1 = s__4727;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4727__$1);
if(temp__5457__auto__){
var s__4727__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4727__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4727__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4729 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4728 = (0);
while(true){
if((i__4728 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4728);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4729,(((i <= (1)))?(function (){var G__4730 = cljs.core.mod.call(null,i,(3));
switch (G__4730) {
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4730)].join('')));

}
})():(function (){var G__4731 = cljs.core.mod.call(null,i,(3));
switch (G__4731) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4731)].join('')));

}
})()));

var G__4739 = (i__4728 + (1));
i__4728 = G__4739;
continue;
} else {
var G__4740 = (i__4728 + (1));
i__4728 = G__4740;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4729),busmaker$main_bus$iter__4726.call(null,cljs.core.chunk_rest.call(null,s__4727__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4729),null);
}
} else {
var i = cljs.core.first.call(null,s__4727__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__4732 = cljs.core.mod.call(null,i,(3));
switch (G__4732) {
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4732)].join('')));

}
})():(function (){var G__4733 = cljs.core.mod.call(null,i,(3));
switch (G__4733) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4733)].join('')));

}
})()),busmaker$main_bus$iter__4726.call(null,cljs.core.rest.call(null,s__4727__$2)));
} else {
var G__4743 = cljs.core.rest.call(null,s__4727__$2);
s__4727__$1 = G__4743;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__4724,map__4724__$1,x,y,length))
,null,null));
});})(map__4724,map__4724__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq4722){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4722));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4748 = arguments.length;
var i__4532__auto___4749 = (0);
while(true){
if((i__4532__auto___4749 < len__4531__auto___4748)){
args__4534__auto__.push((arguments[i__4532__auto___4749]));

var G__4750 = (i__4532__auto___4749 + (1));
i__4532__auto___4749 = G__4750;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__4745){
var map__4746 = p__4745;
var map__4746__$1 = ((((!((map__4746 == null)))?(((((map__4746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4746):map__4746);
var x = cljs.core.get.call(null,map__4746__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4746__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4746__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq4744){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4744));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4759 = arguments.length;
var i__4532__auto___4760 = (0);
while(true){
if((i__4532__auto___4760 < len__4531__auto___4759)){
args__4534__auto__.push((arguments[i__4532__auto___4760]));

var G__4761 = (i__4532__auto___4760 + (1));
i__4532__auto___4760 = G__4761;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__4752){
var map__4753 = p__4752;
var map__4753__$1 = ((((!((map__4753 == null)))?(((((map__4753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4753):map__4753);
var x = cljs.core.get.call(null,map__4753__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4753__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__4753__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__4753,map__4753__$1,x,y,height){
return (function busmaker$main_bus$iter__4755(s__4756){
return (new cljs.core.LazySeq(null,((function (map__4753,map__4753__$1,x,y,height){
return (function (){
var s__4756__$1 = s__4756;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4756__$1);
if(temp__5457__auto__){
var s__4756__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4756__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4756__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4758 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4757 = (0);
while(true){
if((i__4757 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4757);
cljs.core.chunk_append.call(null,b__4758,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__4762 = (i__4757 + (1));
i__4757 = G__4762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4758),busmaker$main_bus$iter__4755.call(null,cljs.core.chunk_rest.call(null,s__4756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4758),null);
}
} else {
var i = cljs.core.first.call(null,s__4756__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__4755.call(null,cljs.core.rest.call(null,s__4756__$2)));
}
} else {
return null;
}
break;
}
});})(map__4753,map__4753__$1,x,y,height))
,null,null));
});})(map__4753,map__4753__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq4751){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4751));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4771 = arguments.length;
var i__4532__auto___4772 = (0);
while(true){
if((i__4532__auto___4772 < len__4531__auto___4771)){
args__4534__auto__.push((arguments[i__4532__auto___4772]));

var G__4773 = (i__4532__auto___4772 + (1));
i__4532__auto___4772 = G__4773;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__4764){
var map__4765 = p__4764;
var map__4765__$1 = ((((!((map__4765 == null)))?(((((map__4765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4765):map__4765);
var x = cljs.core.get.call(null,map__4765__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4765__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__4765__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__4765,map__4765__$1,x,y,height){
return (function busmaker$main_bus$iter__4767(s__4768){
return (new cljs.core.LazySeq(null,((function (map__4765,map__4765__$1,x,y,height){
return (function (){
var s__4768__$1 = s__4768;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4768__$1);
if(temp__5457__auto__){
var s__4768__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4768__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4768__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4770 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4769 = (0);
while(true){
if((i__4769 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4769);
cljs.core.chunk_append.call(null,b__4770,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__4774 = (i__4769 + (1));
i__4769 = G__4774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4770),busmaker$main_bus$iter__4767.call(null,cljs.core.chunk_rest.call(null,s__4768__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4770),null);
}
} else {
var i = cljs.core.first.call(null,s__4768__$2);
return cljs.core.cons.call(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__4767.call(null,cljs.core.rest.call(null,s__4768__$2)));
}
} else {
return null;
}
break;
}
});})(map__4765,map__4765__$1,x,y,height))
,null,null));
});})(map__4765,map__4765__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq4763){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4763));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4790 = arguments.length;
var i__4532__auto___4791 = (0);
while(true){
if((i__4532__auto___4791 < len__4531__auto___4790)){
args__4534__auto__.push((arguments[i__4532__auto___4791]));

var G__4792 = (i__4532__auto___4791 + (1));
i__4532__auto___4791 = G__4792;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__4777){
var map__4778 = p__4777;
var map__4778__$1 = ((((!((map__4778 == null)))?(((((map__4778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4778):map__4778);
var x = cljs.core.get.call(null,map__4778__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4778__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__4778,map__4778__$1,x,y){
return (function busmaker$main_bus$iter__4780(s__4781){
return (new cljs.core.LazySeq(null,((function (map__4778,map__4778__$1,x,y){
return (function (){
var s__4781__$1 = s__4781;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4781__$1);
if(temp__5457__auto__){
var s__4781__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4781__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4781__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4783 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4782 = (0);
while(true){
if((i__4782 < size__4323__auto__)){
var vec__4784 = cljs.core._nth.call(null,c__4322__auto__,i__4782);
var i = cljs.core.nth.call(null,vec__4784,(0),null);
var xi = cljs.core.nth.call(null,vec__4784,(1),null);
cljs.core.chunk_append.call(null,b__4783,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__4793 = (i__4782 + (1));
i__4782 = G__4793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4783),busmaker$main_bus$iter__4780.call(null,cljs.core.chunk_rest.call(null,s__4781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4783),null);
}
} else {
var vec__4787 = cljs.core.first.call(null,s__4781__$2);
var i = cljs.core.nth.call(null,vec__4787,(0),null);
var xi = cljs.core.nth.call(null,vec__4787,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__4780.call(null,cljs.core.rest.call(null,s__4781__$2)));
}
} else {
return null;
}
break;
}
});})(map__4778,map__4778__$1,x,y))
,null,null));
});})(map__4778,map__4778__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq4775){
var G__4776 = cljs.core.first.call(null,seq4775);
var seq4775__$1 = cljs.core.next.call(null,seq4775);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4776,seq4775__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4810 = arguments.length;
var i__4532__auto___4811 = (0);
while(true){
if((i__4532__auto___4811 < len__4531__auto___4810)){
args__4534__auto__.push((arguments[i__4532__auto___4811]));

var G__4812 = (i__4532__auto___4811 + (1));
i__4532__auto___4811 = G__4812;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__4795){
var map__4796 = p__4795;
var map__4796__$1 = ((((!((map__4796 == null)))?(((((map__4796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4796):map__4796);
var x = cljs.core.get.call(null,map__4796__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4796__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var ingredient = cljs.core.get.call(null,map__4796__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019));
var n_factories = cljs.core.get.call(null,map__4796__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var n_factories__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["assembling-machine-2",null,"electric-furnace",null,"chemical-plant",null,"oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?n_factories:(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories){
return (function busmaker$main_bus$iter__4798(s__4799){
return (new cljs.core.LazySeq(null,((function (n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories){
return (function (){
var s__4799__$1 = s__4799;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4799__$1);
if(temp__5457__auto__){
var s__4799__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4799__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4799__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4801 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4800 = (0);
while(true){
if((i__4800 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4800);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__4801,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__4800,dx,i,c__4322__auto__,size__4323__auto__,b__4801,s__4799__$2,temp__5457__auto__,n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories){
return (function busmaker$main_bus$iter__4798_$_iter__4802(s__4803){
return (new cljs.core.LazySeq(null,((function (i__4800,dx,i,c__4322__auto__,size__4323__auto__,b__4801,s__4799__$2,temp__5457__auto__,n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories){
return (function (){
var s__4803__$1 = s__4803;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4803__$1);
if(temp__5457__auto____$1){
var s__4803__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4803__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4803__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4805 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4804 = (0);
while(true){
if((i__4804 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__4804);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__4805,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__4813 = (i__4804 + (1));
i__4804 = G__4813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4805),busmaker$main_bus$iter__4798_$_iter__4802.call(null,cljs.core.chunk_rest.call(null,s__4803__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4805),null);
}
} else {
var j = cljs.core.first.call(null,s__4803__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__4798_$_iter__4802.call(null,cljs.core.rest.call(null,s__4803__$2)));
}
} else {
return null;
}
break;
}
});})(i__4800,dx,i,c__4322__auto__,size__4323__auto__,b__4801,s__4799__$2,temp__5457__auto__,n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories))
,null,null));
});})(i__4800,dx,i,c__4322__auto__,size__4323__auto__,b__4801,s__4799__$2,temp__5457__auto__,n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__4814 = (i__4800 + (1));
i__4800 = G__4814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4801),busmaker$main_bus$iter__4798.call(null,cljs.core.chunk_rest.call(null,s__4799__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4801),null);
}
} else {
var i = cljs.core.first.call(null,s__4799__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__4799__$2,temp__5457__auto__,n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories){
return (function busmaker$main_bus$iter__4798_$_iter__4806(s__4807){
return (new cljs.core.LazySeq(null,((function (dx,i,s__4799__$2,temp__5457__auto__,n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories){
return (function (){
var s__4807__$1 = s__4807;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4807__$1);
if(temp__5457__auto____$1){
var s__4807__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4807__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4807__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4809 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4808 = (0);
while(true){
if((i__4808 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__4808);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__4809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__4815 = (i__4808 + (1));
i__4808 = G__4815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4809),busmaker$main_bus$iter__4798_$_iter__4806.call(null,cljs.core.chunk_rest.call(null,s__4807__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4809),null);
}
} else {
var j = cljs.core.first.call(null,s__4807__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__4798_$_iter__4806.call(null,cljs.core.rest.call(null,s__4807__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__4799__$2,temp__5457__auto__,n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories))
,null,null));
});})(dx,i,s__4799__$2,temp__5457__auto__,n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__4798.call(null,cljs.core.rest.call(null,s__4799__$2)));
}
} else {
return null;
}
break;
}
});})(n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories))
,null,null));
});})(n_factories__$1,map__4796,map__4796__$1,x,y,ingredient,n_factories))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories__$1));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq4794){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4794));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4824 = arguments.length;
var i__4532__auto___4825 = (0);
while(true){
if((i__4532__auto___4825 < len__4531__auto___4824)){
args__4534__auto__.push((arguments[i__4532__auto___4825]));

var G__4826 = (i__4532__auto___4825 + (1));
i__4532__auto___4825 = G__4826;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4817){
var map__4818 = p__4817;
var map__4818__$1 = ((((!((map__4818 == null)))?(((((map__4818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4818):map__4818);
var x = cljs.core.get.call(null,map__4818__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4818__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__4818__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__4818__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__4818__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__4818__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__4818,map__4818__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__4820(s__4821){
return (new cljs.core.LazySeq(null,((function (n,map__4818,map__4818__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__4821__$1 = s__4821;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4821__$1);
if(temp__5457__auto__){
var s__4821__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4821__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4821__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4823 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4822 = (0);
while(true){
if((i__4822 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4822);
cljs.core.chunk_append.call(null,b__4823,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__4827 = (i__4822 + (1));
i__4822 = G__4827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4823),busmaker$main_bus$iter__4820.call(null,cljs.core.chunk_rest.call(null,s__4821__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4823),null);
}
} else {
var i = cljs.core.first.call(null,s__4821__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__4820.call(null,cljs.core.rest.call(null,s__4821__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__4818,map__4818__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__4818,map__4818__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq4816){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4816));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4832 = arguments.length;
var i__4532__auto___4833 = (0);
while(true){
if((i__4532__auto___4833 < len__4531__auto___4832)){
args__4534__auto__.push((arguments[i__4532__auto___4833]));

var G__4834 = (i__4532__auto___4833 + (1));
i__4532__auto___4833 = G__4834;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__4829){
var map__4830 = p__4829;
var map__4830__$1 = ((((!((map__4830 == null)))?(((((map__4830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4830):map__4830);
var x = cljs.core.get.call(null,map__4830__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4830__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__4830__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__4830__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__4830__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__4830__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq4828){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4828));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4843 = arguments.length;
var i__4532__auto___4844 = (0);
while(true){
if((i__4532__auto___4844 < len__4531__auto___4843)){
args__4534__auto__.push((arguments[i__4532__auto___4844]));

var G__4845 = (i__4532__auto___4844 + (1));
i__4532__auto___4844 = G__4845;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4836){
var map__4837 = p__4836;
var map__4837__$1 = ((((!((map__4837 == null)))?(((((map__4837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4837):map__4837);
var x = cljs.core.get.call(null,map__4837__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4837__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4837__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__4837__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__4837__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__4837,map__4837__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__4839(s__4840){
return (new cljs.core.LazySeq(null,((function (map__4837,map__4837__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__4840__$1 = s__4840;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4840__$1);
if(temp__5457__auto__){
var s__4840__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4840__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4840__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4842 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4841 = (0);
while(true){
if((i__4841 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4841);
cljs.core.chunk_append.call(null,b__4842,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__4846 = (i__4841 + (1));
i__4841 = G__4846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4842),busmaker$main_bus$iter__4839.call(null,cljs.core.chunk_rest.call(null,s__4840__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4842),null);
}
} else {
var i = cljs.core.first.call(null,s__4840__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__4839.call(null,cljs.core.rest.call(null,s__4840__$2)));
}
} else {
return null;
}
break;
}
});})(map__4837,map__4837__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__4837,map__4837__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq4835){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4835));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4857 = arguments.length;
var i__4532__auto___4858 = (0);
while(true){
if((i__4532__auto___4858 < len__4531__auto___4857)){
args__4534__auto__.push((arguments[i__4532__auto___4858]));

var G__4859 = (i__4532__auto___4858 + (1));
i__4532__auto___4858 = G__4859;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4848){
var map__4849 = p__4848;
var map__4849__$1 = ((((!((map__4849 == null)))?(((((map__4849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4849):map__4849);
var x = cljs.core.get.call(null,map__4849__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4849__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__4849__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__4849__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__4849,map__4849__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__4851(s__4852){
return (new cljs.core.LazySeq(null,((function (n,map__4849,map__4849__$1,x,y,input_index,bus_index){
return (function (){
var s__4852__$1 = s__4852;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4852__$1);
if(temp__5457__auto__){
var s__4852__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4852__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4852__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4854 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4853 = (0);
while(true){
if((i__4853 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4853);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4854,(function (){var G__4855 = cljs.core.mod.call(null,i,(3));
switch (G__4855) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4855)].join('')));

}
})());

var G__4861 = (i__4853 + (1));
i__4853 = G__4861;
continue;
} else {
var G__4862 = (i__4853 + (1));
i__4853 = G__4862;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4854),busmaker$main_bus$iter__4851.call(null,cljs.core.chunk_rest.call(null,s__4852__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4854),null);
}
} else {
var i = cljs.core.first.call(null,s__4852__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__4856 = cljs.core.mod.call(null,i,(3));
switch (G__4856) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4856)].join('')));

}
})(),busmaker$main_bus$iter__4851.call(null,cljs.core.rest.call(null,s__4852__$2)));
} else {
var G__4864 = cljs.core.rest.call(null,s__4852__$2);
s__4852__$1 = G__4864;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__4849,map__4849__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__4849,map__4849__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.fast_splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq4847){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4847));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4877 = arguments.length;
var i__4532__auto___4878 = (0);
while(true){
if((i__4532__auto___4878 < len__4531__auto___4877)){
args__4534__auto__.push((arguments[i__4532__auto___4878]));

var G__4879 = (i__4532__auto___4878 + (1));
i__4532__auto___4878 = G__4879;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4866){
var map__4867 = p__4866;
var map__4867__$1 = ((((!((map__4867 == null)))?(((((map__4867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4867):map__4867);
var x = cljs.core.get.call(null,map__4867__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4867__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4867__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__4867,map__4867__$1,x,y,output_index){
return (function busmaker$main_bus$iter__4869(s__4870){
return (new cljs.core.LazySeq(null,((function (n,map__4867,map__4867__$1,x,y,output_index){
return (function (){
var s__4870__$1 = s__4870;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4870__$1);
if(temp__5457__auto__){
var s__4870__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4870__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4870__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4872 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4871 = (0);
while(true){
if((i__4871 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4871);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4872,(((i >= n))?(function (){var G__4873 = cljs.core.mod.call(null,i,(3));
switch (G__4873) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4873)].join('')));

}
})():(function (){var G__4874 = cljs.core.mod.call(null,i,(3));
switch (G__4874) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4874)].join('')));

}
})()));

var G__4882 = (i__4871 + (1));
i__4871 = G__4882;
continue;
} else {
var G__4883 = (i__4871 + (1));
i__4871 = G__4883;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4872),busmaker$main_bus$iter__4869.call(null,cljs.core.chunk_rest.call(null,s__4870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4872),null);
}
} else {
var i = cljs.core.first.call(null,s__4870__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__4875 = cljs.core.mod.call(null,i,(3));
switch (G__4875) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4875)].join('')));

}
})():(function (){var G__4876 = cljs.core.mod.call(null,i,(3));
switch (G__4876) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4876)].join('')));

}
})()),busmaker$main_bus$iter__4869.call(null,cljs.core.rest.call(null,s__4870__$2)));
} else {
var G__4886 = cljs.core.rest.call(null,s__4870__$2);
s__4870__$1 = G__4886;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__4867,map__4867__$1,x,y,output_index))
,null,null));
});})(n,map__4867,map__4867__$1,x,y,output_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq4865){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4865));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4891 = arguments.length;
var i__4532__auto___4892 = (0);
while(true){
if((i__4532__auto___4892 < len__4531__auto___4891)){
args__4534__auto__.push((arguments[i__4532__auto___4892]));

var G__4893 = (i__4532__auto___4892 + (1));
i__4532__auto___4892 = G__4893;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__4888){
var map__4889 = p__4888;
var map__4889__$1 = ((((!((map__4889 == null)))?(((((map__4889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4889):map__4889);
var x = cljs.core.get.call(null,map__4889__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4889__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4889__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq4887){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4887));
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
var len__4531__auto___5005 = arguments.length;
var i__4532__auto___5006 = (0);
while(true){
if((i__4532__auto___5006 < len__4531__auto___5005)){
args__4534__auto__.push((arguments[i__4532__auto___5006]));

var G__5007 = (i__4532__auto___5006 + (1));
i__4532__auto___5006 = G__5007;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__4897){
var map__4898 = p__4897;
var map__4898__$1 = ((((!((map__4898 == null)))?(((((map__4898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4898):map__4898);
var x = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var n_factories = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var buses = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"buses","buses",214650120),cljs.core.PersistentVector.EMPTY);
var output_index = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446));
var ingredient = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),"iron-gear");
var input_indexes = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ready_indexes = cljs.core.get.call(null,map__4898__$1,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348));
var outputs = cljs.core.PersistentHashSet.createAsIfByAssoc([output_index]);
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-3):(0)
))));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (p1__4894_SHARP_,p2__4895_SHARP_){
return cljs.core.assoc.call(null,p1__4894_SHARP_,"entity_number",(p2__4895_SHARP_ + (1)));
});})(outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,(function (){var G__4900 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4901(s__4902){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4902__$1 = s__4902;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4902__$1);
if(temp__5457__auto__){
var s__4902__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4902__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4902__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4904 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4903 = (0);
while(true){
if((i__4903 < size__4323__auto__)){
var vec__4905 = cljs.core._nth.call(null,c__4322__auto__,i__4903);
var bus_ingredient = cljs.core.nth.call(null,vec__4905,(0),null);
var i = cljs.core.nth.call(null,vec__4905,(1),null);
cljs.core.chunk_append.call(null,b__4904,(function (){var t = busmaker.main_bus.factory_type.call(null,ingredient);
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

var G__5008 = (i__4903 + (1));
i__4903 = G__5008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4904),busmaker$main_bus$iter__4901.call(null,cljs.core.chunk_rest.call(null,s__4902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4904),null);
}
} else {
var vec__4908 = cljs.core.first.call(null,s__4902__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__4908,(0),null);
var i = cljs.core.nth.call(null,vec__4908,(1),null);
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
})(),busmaker$main_bus$iter__4901.call(null,cljs.core.rest.call(null,s__4902__$2)));
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
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
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4911(s__4912){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4912__$1 = s__4912;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4912__$1);
if(temp__5457__auto__){
var s__4912__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4912__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4912__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4914 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4913 = (0);
while(true){
if((i__4913 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4913);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__4914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__5009 = (i__4913 + (1));
i__4913 = G__5009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4914),busmaker$main_bus$iter__4911.call(null,cljs.core.chunk_rest.call(null,s__4912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4914),null);
}
} else {
var i = cljs.core.first.call(null,s__4912__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__4911.call(null,cljs.core.rest.call(null,s__4912__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4915(s__4916){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4916__$1 = s__4916;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4916__$1);
if(temp__5457__auto__){
var s__4916__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4916__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4916__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4918 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4917 = (0);
while(true){
if((i__4917 < size__4323__auto__)){
var vec__4919 = cljs.core._nth.call(null,c__4322__auto__,i__4917);
var input_index = cljs.core.nth.call(null,vec__4919,(0),null);
var bus_index = cljs.core.nth.call(null,vec__4919,(1),null);
cljs.core.chunk_append.call(null,b__4918,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__4917,x__$2,y__$4,y__$3,vec__4919,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4918,s__4916__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4915_$_iter__4922(s__4923){
return (new cljs.core.LazySeq(null,((function (i__4917,x__$2,y__$4,y__$3,vec__4919,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4918,s__4916__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4923__$1 = s__4923;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4923__$1);
if(temp__5457__auto____$1){
var s__4923__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4923__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4923__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4925 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4924 = (0);
while(true){
if((i__4924 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__4924);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__4925,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__5010 = (i__4924 + (1));
i__4924 = G__5010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4925),busmaker$main_bus$iter__4915_$_iter__4922.call(null,cljs.core.chunk_rest.call(null,s__4923__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4925),null);
}
} else {
var i = cljs.core.first.call(null,s__4923__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__4915_$_iter__4922.call(null,cljs.core.rest.call(null,s__4923__$2)));
}
} else {
return null;
}
break;
}
});})(i__4917,x__$2,y__$4,y__$3,vec__4919,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4918,s__4916__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__4917,x__$2,y__$4,y__$3,vec__4919,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4918,s__4916__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__5011 = (i__4917 + (1));
i__4917 = G__5011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4918),busmaker$main_bus$iter__4915.call(null,cljs.core.chunk_rest.call(null,s__4916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4918),null);
}
} else {
var vec__4926 = cljs.core.first.call(null,s__4916__$2);
var input_index = cljs.core.nth.call(null,vec__4926,(0),null);
var bus_index = cljs.core.nth.call(null,vec__4926,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$4,y__$3,vec__4926,input_index,bus_index,s__4916__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4915_$_iter__4929(s__4930){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$4,y__$3,vec__4926,input_index,bus_index,s__4916__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4930__$1 = s__4930;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4930__$1);
if(temp__5457__auto____$1){
var s__4930__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4930__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4930__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4932 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4931 = (0);
while(true){
if((i__4931 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4931);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__4932,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__5012 = (i__4931 + (1));
i__4931 = G__5012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4932),busmaker$main_bus$iter__4915_$_iter__4929.call(null,cljs.core.chunk_rest.call(null,s__4930__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4932),null);
}
} else {
var i = cljs.core.first.call(null,s__4930__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__4915_$_iter__4929.call(null,cljs.core.rest.call(null,s__4930__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$4,y__$3,vec__4926,input_index,bus_index,s__4916__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$2,y__$4,y__$3,vec__4926,input_index,bus_index,s__4916__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__4915.call(null,cljs.core.rest.call(null,s__4916__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4933(s__4934){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4934__$1 = s__4934;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4934__$1);
if(temp__5457__auto__){
var s__4934__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4934__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4934__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4936 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4935 = (0);
while(true){
if((i__4935 < size__4323__auto__)){
var vec__4937 = cljs.core._nth.call(null,c__4322__auto__,i__4935);
var output_recipe = cljs.core.nth.call(null,vec__4937,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4937,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__4936,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__4935,s__4934__$1,tap_x,x__$1,y__$2,vec__4937,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4936,s__4934__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4933_$_iter__4940(s__4941){
return (new cljs.core.LazySeq(null,((function (i__4935,s__4934__$1,tap_x,x__$1,y__$2,vec__4937,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4936,s__4934__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4941__$1 = s__4941;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4941__$1);
if(temp__5457__auto____$1){
var s__4941__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4941__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4941__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4943 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4942 = (0);
while(true){
if((i__4942 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__4942);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4943,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4944 = cljs.core.mod.call(null,i,(3));
switch (G__4944) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4944)].join('')));

}
})()));

var G__5014 = (i__4942 + (1));
i__4942 = G__5014;
continue;
} else {
var G__5015 = (i__4942 + (1));
i__4942 = G__5015;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4943),busmaker$main_bus$iter__4933_$_iter__4940.call(null,cljs.core.chunk_rest.call(null,s__4941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4943),null);
}
} else {
var i = cljs.core.first.call(null,s__4941__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4945 = cljs.core.mod.call(null,i,(3));
switch (G__4945) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4945)].join('')));

}
})()),busmaker$main_bus$iter__4933_$_iter__4940.call(null,cljs.core.rest.call(null,s__4941__$2)));
} else {
var G__5017 = cljs.core.rest.call(null,s__4941__$2);
s__4941__$1 = G__5017;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__4935,s__4934__$1,tap_x,x__$1,y__$2,vec__4937,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4936,s__4934__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__4935,s__4934__$1,tap_x,x__$1,y__$2,vec__4937,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4936,s__4934__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(0)
))))));
})());

var G__5018 = (i__4935 + (1));
i__4935 = G__5018;
continue;
} else {
var G__5019 = (i__4935 + (1));
i__4935 = G__5019;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4936),busmaker$main_bus$iter__4933.call(null,cljs.core.chunk_rest.call(null,s__4934__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4936),null);
}
} else {
var vec__4946 = cljs.core.first.call(null,s__4934__$2);
var output_recipe = cljs.core.nth.call(null,vec__4946,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4946,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__4934__$1,tap_x,x__$1,y__$2,vec__4946,output_recipe,output_index__$1,s__4934__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4933_$_iter__4949(s__4950){
return (new cljs.core.LazySeq(null,((function (s__4934__$1,tap_x,x__$1,y__$2,vec__4946,output_recipe,output_index__$1,s__4934__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4950__$1 = s__4950;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4950__$1);
if(temp__5457__auto____$1){
var s__4950__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4950__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4950__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4952 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4951 = (0);
while(true){
if((i__4951 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4951);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4952,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4953 = cljs.core.mod.call(null,i,(3));
switch (G__4953) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4953)].join('')));

}
})()));

var G__5021 = (i__4951 + (1));
i__4951 = G__5021;
continue;
} else {
var G__5022 = (i__4951 + (1));
i__4951 = G__5022;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4952),busmaker$main_bus$iter__4933_$_iter__4949.call(null,cljs.core.chunk_rest.call(null,s__4950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4952),null);
}
} else {
var i = cljs.core.first.call(null,s__4950__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4954 = cljs.core.mod.call(null,i,(3));
switch (G__4954) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4954)].join('')));

}
})()),busmaker$main_bus$iter__4933_$_iter__4949.call(null,cljs.core.rest.call(null,s__4950__$2)));
} else {
var G__5024 = cljs.core.rest.call(null,s__4950__$2);
s__4950__$1 = G__5024;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__4934__$1,tap_x,x__$1,y__$2,vec__4946,output_recipe,output_index__$1,s__4934__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__4934__$1,tap_x,x__$1,y__$2,vec__4946,output_recipe,output_index__$1,s__4934__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(0)
))))));
})(),busmaker$main_bus$iter__4933.call(null,cljs.core.rest.call(null,s__4934__$2)));
} else {
var G__5025 = cljs.core.rest.call(null,s__4934__$2);
s__4934__$1 = G__5025;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4955(s__4956){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4956__$1 = s__4956;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4956__$1);
if(temp__5457__auto__){
var s__4956__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4956__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4956__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4958 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4957 = (0);
while(true){
if((i__4957 < size__4323__auto__)){
var vec__4959 = cljs.core._nth.call(null,c__4322__auto__,i__4957);
var output_recipe = cljs.core.nth.call(null,vec__4959,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4959,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__4958,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = (y__$1 + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__4957,s__4956__$1,tap_x,x__$1,y__$2,vec__4959,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4958,s__4956__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4955_$_iter__4962(s__4963){
return (new cljs.core.LazySeq(null,((function (i__4957,s__4956__$1,tap_x,x__$1,y__$2,vec__4959,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4958,s__4956__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4963__$1 = s__4963;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4963__$1);
if(temp__5457__auto____$1){
var s__4963__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4963__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4963__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4965 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4964 = (0);
while(true){
if((i__4964 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__4964);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4965,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4966 = cljs.core.mod.call(null,i,(3));
switch (G__4966) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4966)].join('')));

}
})()));

var G__5027 = (i__4964 + (1));
i__4964 = G__5027;
continue;
} else {
var G__5028 = (i__4964 + (1));
i__4964 = G__5028;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4965),busmaker$main_bus$iter__4955_$_iter__4962.call(null,cljs.core.chunk_rest.call(null,s__4963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4965),null);
}
} else {
var i = cljs.core.first.call(null,s__4963__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4967 = cljs.core.mod.call(null,i,(3));
switch (G__4967) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4967)].join('')));

}
})()),busmaker$main_bus$iter__4955_$_iter__4962.call(null,cljs.core.rest.call(null,s__4963__$2)));
} else {
var G__5030 = cljs.core.rest.call(null,s__4963__$2);
s__4963__$1 = G__5030;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__4957,s__4956__$1,tap_x,x__$1,y__$2,vec__4959,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4958,s__4956__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__4957,s__4956__$1,tap_x,x__$1,y__$2,vec__4959,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4958,s__4956__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})());

var G__5031 = (i__4957 + (1));
i__4957 = G__5031;
continue;
} else {
var G__5032 = (i__4957 + (1));
i__4957 = G__5032;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4958),busmaker$main_bus$iter__4955.call(null,cljs.core.chunk_rest.call(null,s__4956__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4958),null);
}
} else {
var vec__4968 = cljs.core.first.call(null,s__4956__$2);
var output_recipe = cljs.core.nth.call(null,vec__4968,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4968,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__4956__$1,tap_x,x__$1,y__$2,vec__4968,output_recipe,output_index__$1,s__4956__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4955_$_iter__4971(s__4972){
return (new cljs.core.LazySeq(null,((function (s__4956__$1,tap_x,x__$1,y__$2,vec__4968,output_recipe,output_index__$1,s__4956__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4972__$1 = s__4972;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4972__$1);
if(temp__5457__auto____$1){
var s__4972__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4972__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4972__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4974 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4973 = (0);
while(true){
if((i__4973 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4973);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4974,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4975 = cljs.core.mod.call(null,i,(3));
switch (G__4975) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4975)].join('')));

}
})()));

var G__5034 = (i__4973 + (1));
i__4973 = G__5034;
continue;
} else {
var G__5035 = (i__4973 + (1));
i__4973 = G__5035;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4974),busmaker$main_bus$iter__4955_$_iter__4971.call(null,cljs.core.chunk_rest.call(null,s__4972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4974),null);
}
} else {
var i = cljs.core.first.call(null,s__4972__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4976 = cljs.core.mod.call(null,i,(3));
switch (G__4976) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4976)].join('')));

}
})()),busmaker$main_bus$iter__4955_$_iter__4971.call(null,cljs.core.rest.call(null,s__4972__$2)));
} else {
var G__5037 = cljs.core.rest.call(null,s__4972__$2);
s__4972__$1 = G__5037;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__4956__$1,tap_x,x__$1,y__$2,vec__4968,output_recipe,output_index__$1,s__4956__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__4956__$1,tap_x,x__$1,y__$2,vec__4968,output_recipe,output_index__$1,s__4956__$2,temp__5457__auto__,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})(),busmaker$main_bus$iter__4955.call(null,cljs.core.rest.call(null,s__4956__$2)));
} else {
var G__5038 = cljs.core.rest.call(null,s__4956__$2);
s__4956__$1 = G__5038;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__4900__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__4900,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$2 = (y__$1 + (6));
var iter__4324__auto__ = ((function (x__$1,y__$2,G__4900,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4977(s__4978){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,G__4900,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4978__$1 = s__4978;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4978__$1);
if(temp__5457__auto__){
var s__4978__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4978__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4978__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4980 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4979 = (0);
while(true){
if((i__4979 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4979);
cljs.core.chunk_append.call(null,b__4980,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index)));

var G__5039 = (i__4979 + (1));
i__4979 = G__5039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4980),busmaker$main_bus$iter__4977.call(null,cljs.core.chunk_rest.call(null,s__4978__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4980),null);
}
} else {
var i = cljs.core.first.call(null,s__4978__$2);
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index)),busmaker$main_bus$iter__4977.call(null,cljs.core.rest.call(null,s__4978__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,G__4900,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,G__4900,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__4900);
var G__4900__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient)))?cljs.core.concat.call(null,G__4900__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__4900,G__4900__$1,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4981(s__4982){
return (new cljs.core.LazySeq(null,((function (G__4900,G__4900__$1,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4982__$1 = s__4982;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4982__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__4982__$1,i,xs__6012__auto__,temp__5457__auto__,G__4900,G__4900__$1,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4981_$_iter__4983(s__4984){
return (new cljs.core.LazySeq(null,((function (s__4982__$1,i,xs__6012__auto__,temp__5457__auto__,G__4900,G__4900__$1,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4984__$1 = s__4984;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4984__$1);
if(temp__5457__auto____$1){
var s__4984__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4984__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4984__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4986 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4985 = (0);
while(true){
if((i__4985 < size__4323__auto__)){
var vec__4987 = cljs.core._nth.call(null,c__4322__auto__,i__4985);
var input_recipe = cljs.core.nth.call(null,vec__4987,(0),null);
var input_index = cljs.core.nth.call(null,vec__4987,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__4986,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)),args))))));

var G__5040 = (i__4985 + (1));
i__4985 = G__5040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4986),busmaker$main_bus$iter__4981_$_iter__4983.call(null,cljs.core.chunk_rest.call(null,s__4984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4986),null);
}
} else {
var vec__4990 = cljs.core.first.call(null,s__4984__$2);
var input_recipe = cljs.core.nth.call(null,vec__4990,(0),null);
var input_index = cljs.core.nth.call(null,vec__4990,(1),null);
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
)),args))))),busmaker$main_bus$iter__4981_$_iter__4983.call(null,cljs.core.rest.call(null,s__4984__$2)));
}
} else {
return null;
}
break;
}
});})(s__4982__$1,i,xs__6012__auto__,temp__5457__auto__,G__4900,G__4900__$1,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__4982__$1,i,xs__6012__auto__,temp__5457__auto__,G__4900,G__4900__$1,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__4981.call(null,cljs.core.rest.call(null,s__4982__$1)));
} else {
var G__5041 = cljs.core.rest.call(null,s__4982__$1);
s__4982__$1 = G__5041;
continue;
}
} else {
return null;
}
break;
}
});})(G__4900,G__4900__$1,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(G__4900,G__4900__$1,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__4900__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__4900__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$2,x__$1,G__4900,G__4900__$1,G__4900__$2,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4993(s__4994){
return (new cljs.core.LazySeq(null,((function (y__$2,x__$1,G__4900,G__4900__$1,G__4900__$2,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4994__$1 = s__4994;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4994__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__4994__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__4900,G__4900__$1,G__4900__$2,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4993_$_iter__4995(s__4996){
return (new cljs.core.LazySeq(null,((function (s__4994__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__4900,G__4900__$1,G__4900__$2,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4996__$1 = s__4996;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4996__$1);
if(temp__5457__auto____$1){
var s__4996__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4996__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4996__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4998 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4997 = (0);
while(true){
if((i__4997 < size__4323__auto__)){
var vec__4999 = cljs.core._nth.call(null,c__4322__auto__,i__4997);
var output_recipe = cljs.core.nth.call(null,vec__4999,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4999,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__4998,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)));

var G__5042 = (i__4997 + (1));
i__4997 = G__5042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4998),busmaker$main_bus$iter__4993_$_iter__4995.call(null,cljs.core.chunk_rest.call(null,s__4996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4998),null);
}
} else {
var vec__5002 = cljs.core.first.call(null,s__4996__$2);
var output_recipe = cljs.core.nth.call(null,vec__5002,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__5002,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)),busmaker$main_bus$iter__4993_$_iter__4995.call(null,cljs.core.rest.call(null,s__4996__$2)));
}
} else {
return null;
}
break;
}
});})(s__4994__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__4900,G__4900__$1,G__4900__$2,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__4994__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__4900,G__4900__$1,G__4900__$2,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__4993.call(null,cljs.core.rest.call(null,s__4994__$1)));
} else {
var G__5043 = cljs.core.rest.call(null,s__4994__$1);
s__4994__$1 = G__5043;
continue;
}
} else {
return null;
}
break;
}
});})(y__$2,x__$1,G__4900,G__4900__$1,G__4900__$2,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(y__$2,x__$1,G__4900,G__4900__$1,G__4900__$2,outputs,y__$1,map__4898,map__4898__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__4900__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq4896){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4896));
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
var G__5045 = arguments.length;
switch (G__5045) {
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
var G__5051 = null;
var G__5051__0 = (function (){
return rf.call(null);
});
var G__5051__1 = (function (result){
return rf.call(null,result);
});
var G__5051__2 = (function (result,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),input)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),input));

return rf.call(null,result,input);
}
});
G__5051 = function(result,input){
switch(arguments.length){
case 0:
return G__5051__0.call(this);
case 1:
return G__5051__1.call(this,result);
case 2:
return G__5051__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5051.cljs$core$IFn$_invoke$arity$0 = G__5051__0;
G__5051.cljs$core$IFn$_invoke$arity$1 = G__5051__1;
G__5051.cljs$core$IFn$_invoke$arity$2 = G__5051__2;
return G__5051;
})()
;})(seen))
});
});

busmaker.main_bus.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function busmaker$main_bus$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__5046,seen__$1){
while(true){
var vec__5047 = p__5046;
var h = cljs.core.nth.call(null,vec__5047,(0),null);
var xs__$1 = vec__5047;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f.call(null,h))){
var G__5052 = cljs.core.rest.call(null,s);
var G__5053 = seen__$1;
p__5046 = G__5052;
seen__$1 = G__5053;
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
var G__5055 = arguments.length;
switch (G__5055) {
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

busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5072 = arguments.length;
var i__4532__auto___5073 = (0);
while(true){
if((i__4532__auto___5073 < len__4531__auto___5072)){
args__4534__auto__.push((arguments[i__4532__auto___5073]));

var G__5074 = (i__4532__auto___5073 + (1));
i__4532__auto___5073 = G__5074;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.main_bus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.main_bus.cljs$core$IFn$_invoke$arity$variadic = (function (recipe_names,p__5062){
var map__5063 = p__5062;
var map__5063__$1 = ((((!((map__5063 == null)))?(((((map__5063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5063):map__5063);
var n_factories = cljs.core.get.call(null,map__5063__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var depth = cljs.core.get.call(null,map__5063__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),(1000));
var oil_QMARK_ = cljs.core.seq.call(null,cljs.core.mapcat.call(null,((function (map__5063,map__5063__$1,n_factories,depth){
return (function (recipe_name){
return cljs.core.filter.call(null,((function (map__5063,map__5063__$1,n_factories,depth){
return (function (p1__5057_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__5057_SHARP_));
});})(map__5063,map__5063__$1,n_factories,depth))
,busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name));
});})(map__5063,map__5063__$1,n_factories,depth))
,recipe_names));
var products = cljs.core.reduce.call(null,((function (oil_QMARK_,map__5063,map__5063__$1,n_factories,depth){
return (function (products,recipe_name){
return cljs.core.apply.call(null,cljs.core.conj,products,cljs.core.remove.call(null,cljs.core.set.call(null,products),cljs.core.remove.call(null,((function (oil_QMARK_,map__5063,map__5063__$1,n_factories,depth){
return (function (p1__5058_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__5058_SHARP_));
});})(oil_QMARK_,map__5063,map__5063__$1,n_factories,depth))
,busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name))));
});})(oil_QMARK_,map__5063,map__5063__$1,n_factories,depth))
,((oil_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heavy-oil"], null):cljs.core.PersistentVector.EMPTY),recipe_names);
var others = ((oil_QMARK_)?clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),busmaker.recipes.recipes))),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),busmaker.recipes.recipes))))),cljs.core.set.call(null,products)):null);
var deps = cljs.core.map_indexed.call(null,cljs.core.vector,products);
var bus_outputs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.concat.call(null,products,others))));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (oil_QMARK_,products,others,deps,bus_outputs,map__5063,map__5063__$1,n_factories,depth){
return (function (p__5065,p__5066){
var map__5067 = p__5065;
var map__5067__$1 = ((((!((map__5067 == null)))?(((((map__5067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5067):map__5067);
var acc = map__5067__$1;
var y = cljs.core.get.call(null,map__5067__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__5068 = p__5066;
var output_index = cljs.core.nth.call(null,vec__5068,(0),null);
var ingredient = cljs.core.nth.call(null,vec__5068,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,(function (){var input_indexes = cljs.core.map.call(null,bus_outputs,busmaker.main_bus.ingredients.call(null,ingredient));
return busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_outputs,new cljs.core.Keyword(null,"y","y",-1757859776),((y - busmaker.main_bus.ingredient_height.call(null,ingredient)) - (1)),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348),cljs.core.set.call(null,cljs.core.range.call(null,output_index)));
})()),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,busmaker.main_bus.ingredient_height.call(null,ingredient));
});})(oil_QMARK_,products,others,deps,bus_outputs,map__5063,map__5063__$1,n_factories,depth))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),cljs.core.remove.call(null,((function (oil_QMARK_,products,others,deps,bus_outputs,map__5063,map__5063__$1,n_factories,depth){
return (function (p1__5059_SHARP_){
return cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,cljs.core.second.call(null,p1__5059_SHARP_));
});})(oil_QMARK_,products,others,deps,bus_outputs,map__5063,map__5063__$1,n_factories,depth))
,cljs.core.take.call(null,depth,deps)))));
});

busmaker.main_bus.main_bus.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.main_bus.cljs$lang$applyTo = (function (seq5060){
var G__5061 = cljs.core.first.call(null,seq5060);
var seq5060__$1 = cljs.core.next.call(null,seq5060);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5061,seq5060__$1);
});

busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__5075_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__5075_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__5075_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
