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
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__4642){
var vec__4643 = p__4642;
var x = cljs.core.nth.call(null,vec__4643,(0),null);
var y = cljs.core.nth.call(null,vec__4643,(1),null);
var G__4646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__4646)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__4646)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__4646)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__4646)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4646)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__4647){
var vec__4648 = p__4647;
var x = cljs.core.nth.call(null,vec__4648,(0),null);
var y = cljs.core.nth.call(null,vec__4648,(1),null);
var G__4651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__4651)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__4651)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__4651)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__4651)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4651)].join('')));

}
}
}
}
});
busmaker.main_bus.fast_underground_belt = (function busmaker$main_bus$fast_underground_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4656 = arguments.length;
var i__4532__auto___4657 = (0);
while(true){
if((i__4532__auto___4657 < len__4531__auto___4656)){
args__4534__auto__.push((arguments[i__4532__auto___4657]));

var G__4658 = (i__4532__auto___4657 + (1));
i__4532__auto___4657 = G__4658;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.fast_underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__4653){
var map__4654 = p__4653;
var map__4654__$1 = ((((!((map__4654 == null)))?(((((map__4654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4654):map__4654);
var x = cljs.core.get.call(null,map__4654__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4654__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4654__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__4654__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","fast-underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.fast_underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_underground_belt.cljs$lang$applyTo = (function (seq4652){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4652));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4663 = arguments.length;
var i__4532__auto___4664 = (0);
while(true){
if((i__4532__auto___4664 < len__4531__auto___4663)){
args__4534__auto__.push((arguments[i__4532__auto___4664]));

var G__4665 = (i__4532__auto___4664 + (1));
i__4532__auto___4664 = G__4665;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__4660){
var map__4661 = p__4660;
var map__4661__$1 = ((((!((map__4661 == null)))?(((((map__4661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4661):map__4661);
var x = cljs.core.get.call(null,map__4661__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4661__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4661__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__4661__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq4659){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4659));
});

busmaker.main_bus.fast_splitter = (function busmaker$main_bus$fast_splitter(var_args){
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
return busmaker.main_bus.fast_splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__4667){
var map__4668 = p__4667;
var map__4668__$1 = ((((!((map__4668 == null)))?(((((map__4668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4668):map__4668);
var x = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","fast-splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.fast_splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_splitter.cljs$lang$applyTo = (function (seq4666){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4666));
});

busmaker.main_bus.fast_transport_belt = (function busmaker$main_bus$fast_transport_belt(var_args){
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
return busmaker.main_bus.fast_transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__4674){
var map__4675 = p__4674;
var map__4675__$1 = ((((!((map__4675 == null)))?(((((map__4675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4675):map__4675);
var x = cljs.core.get.call(null,map__4675__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4675__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4675__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","fast-transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.fast_transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_transport_belt.cljs$lang$applyTo = (function (seq4673){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4673));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
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
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__4681){
var map__4682 = p__4681;
var map__4682__$1 = ((((!((map__4682 == null)))?(((((map__4682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4682):map__4682);
var x = cljs.core.get.call(null,map__4682__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4682__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq4680){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4680));
});

busmaker.main_bus.fast_inserter = (function busmaker$main_bus$fast_inserter(var_args){
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
return busmaker.main_bus.fast_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.fast_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__4688){
var map__4689 = p__4688;
var map__4689__$1 = ((((!((map__4689 == null)))?(((((map__4689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4689):map__4689);
var x = cljs.core.get.call(null,map__4689__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4689__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4689__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","fast-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.fast_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.fast_inserter.cljs$lang$applyTo = (function (seq4687){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4687));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
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
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__4695){
var map__4696 = p__4695;
var map__4696__$1 = ((((!((map__4696 == null)))?(((((map__4696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4696):map__4696);
var x = cljs.core.get.call(null,map__4696__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4696__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4696__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq4694){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4694));
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
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__4702){
var map__4703 = p__4702;
var map__4703__$1 = ((((!((map__4703 == null)))?(((((map__4703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4703):map__4703);
var x = cljs.core.get.call(null,map__4703__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4703__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var recipe = cljs.core.get.call(null,map__4703__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
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
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq4701){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4701));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4720 = arguments.length;
var i__4532__auto___4721 = (0);
while(true){
if((i__4532__auto___4721 < len__4531__auto___4720)){
args__4534__auto__.push((arguments[i__4532__auto___4721]));

var G__4722 = (i__4532__auto___4721 + (1));
i__4532__auto___4721 = G__4722;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4709){
var map__4710 = p__4709;
var map__4710__$1 = ((((!((map__4710 == null)))?(((((map__4710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4710):map__4710);
var x = cljs.core.get.call(null,map__4710__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4710__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__4710__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__4710,map__4710__$1,x,y,length){
return (function busmaker$main_bus$iter__4712(s__4713){
return (new cljs.core.LazySeq(null,((function (map__4710,map__4710__$1,x,y,length){
return (function (){
var s__4713__$1 = s__4713;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4713__$1);
if(temp__5457__auto__){
var s__4713__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4713__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4713__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4715 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4714 = (0);
while(true){
if((i__4714 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4714);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4715,(((i <= (1)))?(function (){var G__4716 = cljs.core.mod.call(null,i,(3));
switch (G__4716) {
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4716)].join('')));

}
})():(function (){var G__4717 = cljs.core.mod.call(null,i,(3));
switch (G__4717) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4717)].join('')));

}
})()));

var G__4725 = (i__4714 + (1));
i__4714 = G__4725;
continue;
} else {
var G__4726 = (i__4714 + (1));
i__4714 = G__4726;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4715),busmaker$main_bus$iter__4712.call(null,cljs.core.chunk_rest.call(null,s__4713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4715),null);
}
} else {
var i = cljs.core.first.call(null,s__4713__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__4718 = cljs.core.mod.call(null,i,(3));
switch (G__4718) {
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4718)].join('')));

}
})():(function (){var G__4719 = cljs.core.mod.call(null,i,(3));
switch (G__4719) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4719)].join('')));

}
})()),busmaker$main_bus$iter__4712.call(null,cljs.core.rest.call(null,s__4713__$2)));
} else {
var G__4729 = cljs.core.rest.call(null,s__4713__$2);
s__4713__$1 = G__4729;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__4710,map__4710__$1,x,y,length))
,null,null));
});})(map__4710,map__4710__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq4708){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4708));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
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
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__4731){
var map__4732 = p__4731;
var map__4732__$1 = ((((!((map__4732 == null)))?(((((map__4732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4732):map__4732);
var x = cljs.core.get.call(null,map__4732__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4732__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4732__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq4730){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4730));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4745 = arguments.length;
var i__4532__auto___4746 = (0);
while(true){
if((i__4532__auto___4746 < len__4531__auto___4745)){
args__4534__auto__.push((arguments[i__4532__auto___4746]));

var G__4747 = (i__4532__auto___4746 + (1));
i__4532__auto___4746 = G__4747;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__4738){
var map__4739 = p__4738;
var map__4739__$1 = ((((!((map__4739 == null)))?(((((map__4739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4739):map__4739);
var x = cljs.core.get.call(null,map__4739__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4739__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__4739__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__4739,map__4739__$1,x,y,height){
return (function busmaker$main_bus$iter__4741(s__4742){
return (new cljs.core.LazySeq(null,((function (map__4739,map__4739__$1,x,y,height){
return (function (){
var s__4742__$1 = s__4742;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4742__$1);
if(temp__5457__auto__){
var s__4742__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4742__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4742__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4744 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4743 = (0);
while(true){
if((i__4743 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4743);
cljs.core.chunk_append.call(null,b__4744,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__4748 = (i__4743 + (1));
i__4743 = G__4748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4744),busmaker$main_bus$iter__4741.call(null,cljs.core.chunk_rest.call(null,s__4742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4744),null);
}
} else {
var i = cljs.core.first.call(null,s__4742__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__4741.call(null,cljs.core.rest.call(null,s__4742__$2)));
}
} else {
return null;
}
break;
}
});})(map__4739,map__4739__$1,x,y,height))
,null,null));
});})(map__4739,map__4739__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq4737){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4737));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4757 = arguments.length;
var i__4532__auto___4758 = (0);
while(true){
if((i__4532__auto___4758 < len__4531__auto___4757)){
args__4534__auto__.push((arguments[i__4532__auto___4758]));

var G__4759 = (i__4532__auto___4758 + (1));
i__4532__auto___4758 = G__4759;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__4750){
var map__4751 = p__4750;
var map__4751__$1 = ((((!((map__4751 == null)))?(((((map__4751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4751):map__4751);
var x = cljs.core.get.call(null,map__4751__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4751__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__4751__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__4751,map__4751__$1,x,y,height){
return (function busmaker$main_bus$iter__4753(s__4754){
return (new cljs.core.LazySeq(null,((function (map__4751,map__4751__$1,x,y,height){
return (function (){
var s__4754__$1 = s__4754;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4754__$1);
if(temp__5457__auto__){
var s__4754__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4754__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4754__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4756 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4755 = (0);
while(true){
if((i__4755 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4755);
cljs.core.chunk_append.call(null,b__4756,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__4760 = (i__4755 + (1));
i__4755 = G__4760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4756),busmaker$main_bus$iter__4753.call(null,cljs.core.chunk_rest.call(null,s__4754__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4756),null);
}
} else {
var i = cljs.core.first.call(null,s__4754__$2);
return cljs.core.cons.call(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__4753.call(null,cljs.core.rest.call(null,s__4754__$2)));
}
} else {
return null;
}
break;
}
});})(map__4751,map__4751__$1,x,y,height))
,null,null));
});})(map__4751,map__4751__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq4749){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4749));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4776 = arguments.length;
var i__4532__auto___4777 = (0);
while(true){
if((i__4532__auto___4777 < len__4531__auto___4776)){
args__4534__auto__.push((arguments[i__4532__auto___4777]));

var G__4778 = (i__4532__auto___4777 + (1));
i__4532__auto___4777 = G__4778;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__4763){
var map__4764 = p__4763;
var map__4764__$1 = ((((!((map__4764 == null)))?(((((map__4764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4764):map__4764);
var x = cljs.core.get.call(null,map__4764__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4764__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__4764,map__4764__$1,x,y){
return (function busmaker$main_bus$iter__4766(s__4767){
return (new cljs.core.LazySeq(null,((function (map__4764,map__4764__$1,x,y){
return (function (){
var s__4767__$1 = s__4767;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4767__$1);
if(temp__5457__auto__){
var s__4767__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4767__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4767__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4769 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4768 = (0);
while(true){
if((i__4768 < size__4323__auto__)){
var vec__4770 = cljs.core._nth.call(null,c__4322__auto__,i__4768);
var i = cljs.core.nth.call(null,vec__4770,(0),null);
var xi = cljs.core.nth.call(null,vec__4770,(1),null);
cljs.core.chunk_append.call(null,b__4769,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__4779 = (i__4768 + (1));
i__4768 = G__4779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4769),busmaker$main_bus$iter__4766.call(null,cljs.core.chunk_rest.call(null,s__4767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4769),null);
}
} else {
var vec__4773 = cljs.core.first.call(null,s__4767__$2);
var i = cljs.core.nth.call(null,vec__4773,(0),null);
var xi = cljs.core.nth.call(null,vec__4773,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__4766.call(null,cljs.core.rest.call(null,s__4767__$2)));
}
} else {
return null;
}
break;
}
});})(map__4764,map__4764__$1,x,y))
,null,null));
});})(map__4764,map__4764__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq4761){
var G__4762 = cljs.core.first.call(null,seq4761);
var seq4761__$1 = cljs.core.next.call(null,seq4761);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4762,seq4761__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4796 = arguments.length;
var i__4532__auto___4797 = (0);
while(true){
if((i__4532__auto___4797 < len__4531__auto___4796)){
args__4534__auto__.push((arguments[i__4532__auto___4797]));

var G__4798 = (i__4532__auto___4797 + (1));
i__4532__auto___4797 = G__4798;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__4781){
var map__4782 = p__4781;
var map__4782__$1 = ((((!((map__4782 == null)))?(((((map__4782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4782):map__4782);
var x = cljs.core.get.call(null,map__4782__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4782__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var ingredient = cljs.core.get.call(null,map__4782__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019));
var n_factories = cljs.core.get.call(null,map__4782__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var n_factories__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["assembling-machine-2",null,"electric-furnace",null,"chemical-plant",null,"oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?n_factories:(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories){
return (function busmaker$main_bus$iter__4784(s__4785){
return (new cljs.core.LazySeq(null,((function (n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories){
return (function (){
var s__4785__$1 = s__4785;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4785__$1);
if(temp__5457__auto__){
var s__4785__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4785__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4785__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4787 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4786 = (0);
while(true){
if((i__4786 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4786);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__4787,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__4786,dx,i,c__4322__auto__,size__4323__auto__,b__4787,s__4785__$2,temp__5457__auto__,n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories){
return (function busmaker$main_bus$iter__4784_$_iter__4788(s__4789){
return (new cljs.core.LazySeq(null,((function (i__4786,dx,i,c__4322__auto__,size__4323__auto__,b__4787,s__4785__$2,temp__5457__auto__,n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories){
return (function (){
var s__4789__$1 = s__4789;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4789__$1);
if(temp__5457__auto____$1){
var s__4789__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4789__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4789__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4791 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4790 = (0);
while(true){
if((i__4790 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__4790);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__4791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__4799 = (i__4790 + (1));
i__4790 = G__4799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4791),busmaker$main_bus$iter__4784_$_iter__4788.call(null,cljs.core.chunk_rest.call(null,s__4789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4791),null);
}
} else {
var j = cljs.core.first.call(null,s__4789__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__4784_$_iter__4788.call(null,cljs.core.rest.call(null,s__4789__$2)));
}
} else {
return null;
}
break;
}
});})(i__4786,dx,i,c__4322__auto__,size__4323__auto__,b__4787,s__4785__$2,temp__5457__auto__,n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories))
,null,null));
});})(i__4786,dx,i,c__4322__auto__,size__4323__auto__,b__4787,s__4785__$2,temp__5457__auto__,n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__4800 = (i__4786 + (1));
i__4786 = G__4800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4787),busmaker$main_bus$iter__4784.call(null,cljs.core.chunk_rest.call(null,s__4785__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4787),null);
}
} else {
var i = cljs.core.first.call(null,s__4785__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),ingredient),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__4785__$2,temp__5457__auto__,n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories){
return (function busmaker$main_bus$iter__4784_$_iter__4792(s__4793){
return (new cljs.core.LazySeq(null,((function (dx,i,s__4785__$2,temp__5457__auto__,n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories){
return (function (){
var s__4793__$1 = s__4793;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4793__$1);
if(temp__5457__auto____$1){
var s__4793__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4793__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4793__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4795 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4794 = (0);
while(true){
if((i__4794 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__4794);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__4795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__4801 = (i__4794 + (1));
i__4794 = G__4801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4795),busmaker$main_bus$iter__4784_$_iter__4792.call(null,cljs.core.chunk_rest.call(null,s__4793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4795),null);
}
} else {
var j = cljs.core.first.call(null,s__4793__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__4784_$_iter__4792.call(null,cljs.core.rest.call(null,s__4793__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__4785__$2,temp__5457__auto__,n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories))
,null,null));
});})(dx,i,s__4785__$2,temp__5457__auto__,n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__4784.call(null,cljs.core.rest.call(null,s__4785__$2)));
}
} else {
return null;
}
break;
}
});})(n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories))
,null,null));
});})(n_factories__$1,map__4782,map__4782__$1,x,y,ingredient,n_factories))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories__$1));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq4780){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4780));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
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
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4803){
var map__4804 = p__4803;
var map__4804__$1 = ((((!((map__4804 == null)))?(((((map__4804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4804):map__4804);
var x = cljs.core.get.call(null,map__4804__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4804__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__4804__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__4804__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__4804__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__4804__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__4804,map__4804__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__4806(s__4807){
return (new cljs.core.LazySeq(null,((function (n,map__4804,map__4804__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__4807__$1 = s__4807;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4807__$1);
if(temp__5457__auto__){
var s__4807__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4807__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4807__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4809 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4808 = (0);
while(true){
if((i__4808 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4808);
cljs.core.chunk_append.call(null,b__4809,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__4813 = (i__4808 + (1));
i__4808 = G__4813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4809),busmaker$main_bus$iter__4806.call(null,cljs.core.chunk_rest.call(null,s__4807__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4809),null);
}
} else {
var i = cljs.core.first.call(null,s__4807__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__4806.call(null,cljs.core.rest.call(null,s__4807__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__4804,map__4804__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__4804,map__4804__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq4802){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4802));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4818 = arguments.length;
var i__4532__auto___4819 = (0);
while(true){
if((i__4532__auto___4819 < len__4531__auto___4818)){
args__4534__auto__.push((arguments[i__4532__auto___4819]));

var G__4820 = (i__4532__auto___4819 + (1));
i__4532__auto___4819 = G__4820;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__4815){
var map__4816 = p__4815;
var map__4816__$1 = ((((!((map__4816 == null)))?(((((map__4816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4816):map__4816);
var x = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq4814){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4814));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4829 = arguments.length;
var i__4532__auto___4830 = (0);
while(true){
if((i__4532__auto___4830 < len__4531__auto___4829)){
args__4534__auto__.push((arguments[i__4532__auto___4830]));

var G__4831 = (i__4532__auto___4830 + (1));
i__4532__auto___4830 = G__4831;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4822){
var map__4823 = p__4822;
var map__4823__$1 = ((((!((map__4823 == null)))?(((((map__4823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4823):map__4823);
var x = cljs.core.get.call(null,map__4823__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4823__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4823__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__4823__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__4823__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__4823,map__4823__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__4825(s__4826){
return (new cljs.core.LazySeq(null,((function (map__4823,map__4823__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__4826__$1 = s__4826;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4826__$1);
if(temp__5457__auto__){
var s__4826__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4826__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4826__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4828 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4827 = (0);
while(true){
if((i__4827 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4827);
cljs.core.chunk_append.call(null,b__4828,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__4832 = (i__4827 + (1));
i__4827 = G__4832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4828),busmaker$main_bus$iter__4825.call(null,cljs.core.chunk_rest.call(null,s__4826__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4828),null);
}
} else {
var i = cljs.core.first.call(null,s__4826__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__4825.call(null,cljs.core.rest.call(null,s__4826__$2)));
}
} else {
return null;
}
break;
}
});})(map__4823,map__4823__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__4823,map__4823__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq4821){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4821));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
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
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4834){
var map__4835 = p__4834;
var map__4835__$1 = ((((!((map__4835 == null)))?(((((map__4835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4835):map__4835);
var x = cljs.core.get.call(null,map__4835__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4835__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__4835__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__4835__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__4835,map__4835__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__4837(s__4838){
return (new cljs.core.LazySeq(null,((function (n,map__4835,map__4835__$1,x,y,input_index,bus_index){
return (function (){
var s__4838__$1 = s__4838;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4838__$1);
if(temp__5457__auto__){
var s__4838__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4838__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4838__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4840 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4839 = (0);
while(true){
if((i__4839 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4839);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4840,(function (){var G__4841 = cljs.core.mod.call(null,i,(3));
switch (G__4841) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4841)].join('')));

}
})());

var G__4847 = (i__4839 + (1));
i__4839 = G__4847;
continue;
} else {
var G__4848 = (i__4839 + (1));
i__4839 = G__4848;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4840),busmaker$main_bus$iter__4837.call(null,cljs.core.chunk_rest.call(null,s__4838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4840),null);
}
} else {
var i = cljs.core.first.call(null,s__4838__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__4842 = cljs.core.mod.call(null,i,(3));
switch (G__4842) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4842)].join('')));

}
})(),busmaker$main_bus$iter__4837.call(null,cljs.core.rest.call(null,s__4838__$2)));
} else {
var G__4850 = cljs.core.rest.call(null,s__4838__$2);
s__4838__$1 = G__4850;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__4835,map__4835__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__4835,map__4835__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.fast_splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq4833){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4833));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4863 = arguments.length;
var i__4532__auto___4864 = (0);
while(true){
if((i__4532__auto___4864 < len__4531__auto___4863)){
args__4534__auto__.push((arguments[i__4532__auto___4864]));

var G__4865 = (i__4532__auto___4864 + (1));
i__4532__auto___4864 = G__4865;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4852){
var map__4853 = p__4852;
var map__4853__$1 = ((((!((map__4853 == null)))?(((((map__4853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4853):map__4853);
var x = cljs.core.get.call(null,map__4853__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4853__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4853__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__4853,map__4853__$1,x,y,output_index){
return (function busmaker$main_bus$iter__4855(s__4856){
return (new cljs.core.LazySeq(null,((function (n,map__4853,map__4853__$1,x,y,output_index){
return (function (){
var s__4856__$1 = s__4856;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4856__$1);
if(temp__5457__auto__){
var s__4856__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4856__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4856__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4858 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4857 = (0);
while(true){
if((i__4857 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4857);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4858,(((i >= n))?(function (){var G__4859 = cljs.core.mod.call(null,i,(3));
switch (G__4859) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4859)].join('')));

}
})():(function (){var G__4860 = cljs.core.mod.call(null,i,(3));
switch (G__4860) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4860)].join('')));

}
})()));

var G__4868 = (i__4857 + (1));
i__4857 = G__4868;
continue;
} else {
var G__4869 = (i__4857 + (1));
i__4857 = G__4869;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4858),busmaker$main_bus$iter__4855.call(null,cljs.core.chunk_rest.call(null,s__4856__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4858),null);
}
} else {
var i = cljs.core.first.call(null,s__4856__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__4861 = cljs.core.mod.call(null,i,(3));
switch (G__4861) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4861)].join('')));

}
})():(function (){var G__4862 = cljs.core.mod.call(null,i,(3));
switch (G__4862) {
case (0):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4862)].join('')));

}
})()),busmaker$main_bus$iter__4855.call(null,cljs.core.rest.call(null,s__4856__$2)));
} else {
var G__4872 = cljs.core.rest.call(null,s__4856__$2);
s__4856__$1 = G__4872;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__4853,map__4853__$1,x,y,output_index))
,null,null));
});})(n,map__4853,map__4853__$1,x,y,output_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq4851){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4851));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
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
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__4874){
var map__4875 = p__4874;
var map__4875__$1 = ((((!((map__4875 == null)))?(((((map__4875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4875):map__4875);
var x = cljs.core.get.call(null,map__4875__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4875__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4875__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.fast_transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq4873){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4873));
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
var len__4531__auto___4991 = arguments.length;
var i__4532__auto___4992 = (0);
while(true){
if((i__4532__auto___4992 < len__4531__auto___4991)){
args__4534__auto__.push((arguments[i__4532__auto___4992]));

var G__4993 = (i__4532__auto___4992 + (1));
i__4532__auto___4992 = G__4993;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__4883){
var map__4884 = p__4883;
var map__4884__$1 = ((((!((map__4884 == null)))?(((((map__4884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4884):map__4884);
var x = cljs.core.get.call(null,map__4884__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4884__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var n_factories = cljs.core.get.call(null,map__4884__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var buses = cljs.core.get.call(null,map__4884__$1,new cljs.core.Keyword(null,"buses","buses",214650120),cljs.core.PersistentVector.EMPTY);
var output_index = cljs.core.get.call(null,map__4884__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446));
var ingredient = cljs.core.get.call(null,map__4884__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),"iron-gear");
var input_indexes = cljs.core.get.call(null,map__4884__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ready_indexes = cljs.core.get.call(null,map__4884__$1,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348));
var outputs = cljs.core.PersistentHashSet.createAsIfByAssoc([output_index]);
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-3):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-3):(0)
))));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (p1__4880_SHARP_,p2__4881_SHARP_){
return cljs.core.assoc.call(null,p1__4880_SHARP_,"entity_number",(p2__4881_SHARP_ + (1)));
});})(outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,(function (){var G__4886 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4887(s__4888){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4888__$1 = s__4888;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4888__$1);
if(temp__5457__auto__){
var s__4888__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4888__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4888__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4890 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4889 = (0);
while(true){
if((i__4889 < size__4323__auto__)){
var vec__4891 = cljs.core._nth.call(null,c__4322__auto__,i__4889);
var bus_ingredient = cljs.core.nth.call(null,vec__4891,(0),null);
var i = cljs.core.nth.call(null,vec__4891,(1),null);
cljs.core.chunk_append.call(null,b__4890,(function (){var t = busmaker.main_bus.factory_type.call(null,ingredient);
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

var G__4994 = (i__4889 + (1));
i__4889 = G__4994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4890),busmaker$main_bus$iter__4887.call(null,cljs.core.chunk_rest.call(null,s__4888__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4890),null);
}
} else {
var vec__4894 = cljs.core.first.call(null,s__4888__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__4894,(0),null);
var i = cljs.core.nth.call(null,vec__4894,(1),null);
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
})(),busmaker$main_bus$iter__4887.call(null,cljs.core.rest.call(null,s__4888__$2)));
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
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
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4897(s__4898){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4898__$1 = s__4898;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4898__$1);
if(temp__5457__auto__){
var s__4898__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4898__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4898__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4900 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4899 = (0);
while(true){
if((i__4899 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4899);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__4900,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__4995 = (i__4899 + (1));
i__4899 = G__4995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4900),busmaker$main_bus$iter__4897.call(null,cljs.core.chunk_rest.call(null,s__4898__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4900),null);
}
} else {
var i = cljs.core.first.call(null,s__4898__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.fast_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$3 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__4897.call(null,cljs.core.rest.call(null,s__4898__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4901(s__4902){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
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
var input_index = cljs.core.nth.call(null,vec__4905,(0),null);
var bus_index = cljs.core.nth.call(null,vec__4905,(1),null);
cljs.core.chunk_append.call(null,b__4904,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__4903,x__$2,y__$4,y__$3,vec__4905,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4904,s__4902__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4901_$_iter__4908(s__4909){
return (new cljs.core.LazySeq(null,((function (i__4903,x__$2,y__$4,y__$3,vec__4905,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4904,s__4902__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4909__$1 = s__4909;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4909__$1);
if(temp__5457__auto____$1){
var s__4909__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4909__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4909__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4911 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4910 = (0);
while(true){
if((i__4910 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__4910);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__4911,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__4996 = (i__4910 + (1));
i__4910 = G__4996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4911),busmaker$main_bus$iter__4901_$_iter__4908.call(null,cljs.core.chunk_rest.call(null,s__4909__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4911),null);
}
} else {
var i = cljs.core.first.call(null,s__4909__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__4901_$_iter__4908.call(null,cljs.core.rest.call(null,s__4909__$2)));
}
} else {
return null;
}
break;
}
});})(i__4903,x__$2,y__$4,y__$3,vec__4905,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4904,s__4902__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__4903,x__$2,y__$4,y__$3,vec__4905,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4904,s__4902__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__4997 = (i__4903 + (1));
i__4903 = G__4997;
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
var vec__4912 = cljs.core.first.call(null,s__4902__$2);
var input_index = cljs.core.nth.call(null,vec__4912,(0),null);
var bus_index = cljs.core.nth.call(null,vec__4912,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$3 = (y__$2 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$3 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$4 = (((((-5) + y__$3) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$4,y__$3,vec__4912,input_index,bus_index,s__4902__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4901_$_iter__4915(s__4916){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$4,y__$3,vec__4912,input_index,bus_index,s__4902__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4916__$1 = s__4916;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4916__$1);
if(temp__5457__auto____$1){
var s__4916__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4916__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4916__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4918 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4917 = (0);
while(true){
if((i__4917 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4917);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__4918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__4998 = (i__4917 + (1));
i__4917 = G__4998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4918),busmaker$main_bus$iter__4901_$_iter__4915.call(null,cljs.core.chunk_rest.call(null,s__4916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4918),null);
}
} else {
var i = cljs.core.first.call(null,s__4916__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.fast_underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$4,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__4901_$_iter__4915.call(null,cljs.core.rest.call(null,s__4916__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$4,y__$3,vec__4912,input_index,bus_index,s__4902__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$2,y__$4,y__$3,vec__4912,input_index,bus_index,s__4902__$2,temp__5457__auto__,x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__4901.call(null,cljs.core.rest.call(null,s__4902__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,non_fluid_ingredients,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4919(s__4920){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4920__$1 = s__4920;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4920__$1);
if(temp__5457__auto__){
var s__4920__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4920__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4920__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4922 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4921 = (0);
while(true){
if((i__4921 < size__4323__auto__)){
var vec__4923 = cljs.core._nth.call(null,c__4322__auto__,i__4921);
var output_recipe = cljs.core.nth.call(null,vec__4923,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4923,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__4922,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__4921,s__4920__$1,tap_x,x__$1,y__$2,vec__4923,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4922,s__4920__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4919_$_iter__4926(s__4927){
return (new cljs.core.LazySeq(null,((function (i__4921,s__4920__$1,tap_x,x__$1,y__$2,vec__4923,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4922,s__4920__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4927__$1 = s__4927;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4927__$1);
if(temp__5457__auto____$1){
var s__4927__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4927__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4927__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4929 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4928 = (0);
while(true){
if((i__4928 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__4928);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4929,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4930 = cljs.core.mod.call(null,i,(3));
switch (G__4930) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4930)].join('')));

}
})()));

var G__5000 = (i__4928 + (1));
i__4928 = G__5000;
continue;
} else {
var G__5001 = (i__4928 + (1));
i__4928 = G__5001;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4929),busmaker$main_bus$iter__4919_$_iter__4926.call(null,cljs.core.chunk_rest.call(null,s__4927__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4929),null);
}
} else {
var i = cljs.core.first.call(null,s__4927__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4931 = cljs.core.mod.call(null,i,(3));
switch (G__4931) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4931)].join('')));

}
})()),busmaker$main_bus$iter__4919_$_iter__4926.call(null,cljs.core.rest.call(null,s__4927__$2)));
} else {
var G__5003 = cljs.core.rest.call(null,s__4927__$2);
s__4927__$1 = G__5003;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__4921,s__4920__$1,tap_x,x__$1,y__$2,vec__4923,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4922,s__4920__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__4921,s__4920__$1,tap_x,x__$1,y__$2,vec__4923,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4922,s__4920__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(0)
))))));
})());

var G__5004 = (i__4921 + (1));
i__4921 = G__5004;
continue;
} else {
var G__5005 = (i__4921 + (1));
i__4921 = G__5005;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4922),busmaker$main_bus$iter__4919.call(null,cljs.core.chunk_rest.call(null,s__4920__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4922),null);
}
} else {
var vec__4932 = cljs.core.first.call(null,s__4920__$2);
var output_recipe = cljs.core.nth.call(null,vec__4932,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4932,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__4920__$1,tap_x,x__$1,y__$2,vec__4932,output_recipe,output_index__$1,s__4920__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4919_$_iter__4935(s__4936){
return (new cljs.core.LazySeq(null,((function (s__4920__$1,tap_x,x__$1,y__$2,vec__4932,output_recipe,output_index__$1,s__4920__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4936__$1 = s__4936;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4936__$1);
if(temp__5457__auto____$1){
var s__4936__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4936__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4936__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4938 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4937 = (0);
while(true){
if((i__4937 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4937);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4938,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4939 = cljs.core.mod.call(null,i,(3));
switch (G__4939) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4939)].join('')));

}
})()));

var G__5007 = (i__4937 + (1));
i__4937 = G__5007;
continue;
} else {
var G__5008 = (i__4937 + (1));
i__4937 = G__5008;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4938),busmaker$main_bus$iter__4919_$_iter__4935.call(null,cljs.core.chunk_rest.call(null,s__4936__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4938),null);
}
} else {
var i = cljs.core.first.call(null,s__4936__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$2) + ((2) * output_index__$1)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4940 = cljs.core.mod.call(null,i,(3));
switch (G__4940) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4940)].join('')));

}
})()),busmaker$main_bus$iter__4919_$_iter__4935.call(null,cljs.core.rest.call(null,s__4936__$2)));
} else {
var G__5010 = cljs.core.rest.call(null,s__4936__$2);
s__4936__$1 = G__5010;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__4920__$1,tap_x,x__$1,y__$2,vec__4932,output_recipe,output_index__$1,s__4920__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__4920__$1,tap_x,x__$1,y__$2,vec__4932,output_recipe,output_index__$1,s__4920__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$2) + ((2) * output_index__$1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(2):(0)
))))));
})(),busmaker$main_bus$iter__4919.call(null,cljs.core.rest.call(null,s__4920__$2)));
} else {
var G__5011 = cljs.core.rest.call(null,s__4920__$2);
s__4920__$1 = G__5011;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4941(s__4942){
return (new cljs.core.LazySeq(null,((function (outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4942__$1 = s__4942;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4942__$1);
if(temp__5457__auto__){
var s__4942__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4942__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4942__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4944 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4943 = (0);
while(true){
if((i__4943 < size__4323__auto__)){
var vec__4945 = cljs.core._nth.call(null,c__4322__auto__,i__4943);
var output_recipe = cljs.core.nth.call(null,vec__4945,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4945,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__4944,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$2 = (y__$1 + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__4943,s__4942__$1,tap_x,x__$1,y__$2,vec__4945,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4944,s__4942__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4941_$_iter__4948(s__4949){
return (new cljs.core.LazySeq(null,((function (i__4943,s__4942__$1,tap_x,x__$1,y__$2,vec__4945,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4944,s__4942__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4949__$1 = s__4949;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4949__$1);
if(temp__5457__auto____$1){
var s__4949__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4949__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4949__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4951 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4950 = (0);
while(true){
if((i__4950 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__4950);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4951,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4952 = cljs.core.mod.call(null,i,(3));
switch (G__4952) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4952)].join('')));

}
})()));

var G__5013 = (i__4950 + (1));
i__4950 = G__5013;
continue;
} else {
var G__5014 = (i__4950 + (1));
i__4950 = G__5014;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4951),busmaker$main_bus$iter__4941_$_iter__4948.call(null,cljs.core.chunk_rest.call(null,s__4949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4951),null);
}
} else {
var i = cljs.core.first.call(null,s__4949__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4953 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__4941_$_iter__4948.call(null,cljs.core.rest.call(null,s__4949__$2)));
} else {
var G__5016 = cljs.core.rest.call(null,s__4949__$2);
s__4949__$1 = G__5016;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__4943,s__4942__$1,tap_x,x__$1,y__$2,vec__4945,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4944,s__4942__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(i__4943,s__4942__$1,tap_x,x__$1,y__$2,vec__4945,output_recipe,output_index__$1,c__4322__auto__,size__4323__auto__,b__4944,s__4942__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})());

var G__5017 = (i__4943 + (1));
i__4943 = G__5017;
continue;
} else {
var G__5018 = (i__4943 + (1));
i__4943 = G__5018;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4944),busmaker$main_bus$iter__4941.call(null,cljs.core.chunk_rest.call(null,s__4942__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4944),null);
}
} else {
var vec__4954 = cljs.core.first.call(null,s__4942__$2);
var output_recipe = cljs.core.nth.call(null,vec__4954,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4954,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__4942__$1,tap_x,x__$1,y__$2,vec__4954,output_recipe,output_index__$1,s__4942__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4941_$_iter__4957(s__4958){
return (new cljs.core.LazySeq(null,((function (s__4942__$1,tap_x,x__$1,y__$2,vec__4954,output_recipe,output_index__$1,s__4942__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4958__$1 = s__4958;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4958__$1);
if(temp__5457__auto____$1){
var s__4958__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4958__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4958__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4960 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4959 = (0);
while(true){
if((i__4959 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4959);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4960,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4961 = cljs.core.mod.call(null,i,(3));
switch (G__4961) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4961)].join('')));

}
})()));

var G__5020 = (i__4959 + (1));
i__4959 = G__5020;
continue;
} else {
var G__5021 = (i__4959 + (1));
i__4959 = G__5021;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4960),busmaker$main_bus$iter__4941_$_iter__4957.call(null,cljs.core.chunk_rest.call(null,s__4958__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4960),null);
}
} else {
var i = cljs.core.first.call(null,s__4958__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4962 = cljs.core.mod.call(null,i,(3));
switch (G__4962) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4962)].join('')));

}
})()),busmaker$main_bus$iter__4941_$_iter__4957.call(null,cljs.core.rest.call(null,s__4958__$2)));
} else {
var G__5023 = cljs.core.rest.call(null,s__4958__$2);
s__4958__$1 = G__5023;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__4942__$1,tap_x,x__$1,y__$2,vec__4954,output_recipe,output_index__$1,s__4942__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__4942__$1,tap_x,x__$1,y__$2,vec__4954,output_recipe,output_index__$1,s__4942__$2,temp__5457__auto__,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (- ((2) * output_index__$1)))));
})(),busmaker$main_bus$iter__4941.call(null,cljs.core.rest.call(null,s__4942__$2)));
} else {
var G__5024 = cljs.core.rest.call(null,s__4942__$2);
s__4942__$1 = G__5024;
continue;
}
}
} else {
return null;
}
break;
}
});})(outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__4886__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__4886,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$2 = (y__$1 + (6));
var iter__4324__auto__ = ((function (x__$1,y__$2,G__4886,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4963(s__4964){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$2,G__4886,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4964__$1 = s__4964;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4964__$1);
if(temp__5457__auto__){
var s__4964__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4964__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4964__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4966 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4965 = (0);
while(true){
if((i__4965 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4965);
cljs.core.chunk_append.call(null,b__4966,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index)));

var G__5025 = (i__4965 + (1));
i__4965 = G__5025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4966),busmaker$main_bus$iter__4963.call(null,cljs.core.chunk_rest.call(null,s__4964__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4966),null);
}
} else {
var i = cljs.core.first.call(null,s__4964__$2);
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index)),busmaker$main_bus$iter__4963.call(null,cljs.core.rest.call(null,s__4964__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$2,G__4886,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(x__$1,y__$2,G__4886,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__4886);
var G__4886__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient)))?cljs.core.concat.call(null,G__4886__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__4886,G__4886__$1,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4967(s__4968){
return (new cljs.core.LazySeq(null,((function (G__4886,G__4886__$1,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4968__$1 = s__4968;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4968__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__4968__$1,i,xs__6012__auto__,temp__5457__auto__,G__4886,G__4886__$1,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4967_$_iter__4969(s__4970){
return (new cljs.core.LazySeq(null,((function (s__4968__$1,i,xs__6012__auto__,temp__5457__auto__,G__4886,G__4886__$1,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4970__$1 = s__4970;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4970__$1);
if(temp__5457__auto____$1){
var s__4970__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4970__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4970__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4972 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4971 = (0);
while(true){
if((i__4971 < size__4323__auto__)){
var vec__4973 = cljs.core._nth.call(null,c__4322__auto__,i__4971);
var input_recipe = cljs.core.nth.call(null,vec__4973,(0),null);
var input_index = cljs.core.nth.call(null,vec__4973,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["assembling-machine-2",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__4972,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)),args))))));

var G__5026 = (i__4971 + (1));
i__4971 = G__5026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4972),busmaker$main_bus$iter__4967_$_iter__4969.call(null,cljs.core.chunk_rest.call(null,s__4970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4972),null);
}
} else {
var vec__4976 = cljs.core.first.call(null,s__4970__$2);
var input_recipe = cljs.core.nth.call(null,vec__4976,(0),null);
var input_index = cljs.core.nth.call(null,vec__4976,(1),null);
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
)),args))))),busmaker$main_bus$iter__4967_$_iter__4969.call(null,cljs.core.rest.call(null,s__4970__$2)));
}
} else {
return null;
}
break;
}
});})(s__4968__$1,i,xs__6012__auto__,temp__5457__auto__,G__4886,G__4886__$1,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__4968__$1,i,xs__6012__auto__,temp__5457__auto__,G__4886,G__4886__$1,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__4967.call(null,cljs.core.rest.call(null,s__4968__$1)));
} else {
var G__5027 = cljs.core.rest.call(null,s__4968__$1);
s__4968__$1 = G__5027;
continue;
}
} else {
return null;
}
break;
}
});})(G__4886,G__4886__$1,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(G__4886,G__4886__$1,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__4886__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__4886__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$2 = ((y__$1 + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$2,x__$1,G__4886,G__4886__$1,G__4886__$2,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4979(s__4980){
return (new cljs.core.LazySeq(null,((function (y__$2,x__$1,G__4886,G__4886__$1,G__4886__$2,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4980__$1 = s__4980;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4980__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__4980__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__4886,G__4886__$1,G__4886__$2,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function busmaker$main_bus$iter__4979_$_iter__4981(s__4982){
return (new cljs.core.LazySeq(null,((function (s__4980__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__4886,G__4886__$1,G__4886__$2,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes){
return (function (){
var s__4982__$1 = s__4982;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4982__$1);
if(temp__5457__auto____$1){
var s__4982__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4982__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4982__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4984 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4983 = (0);
while(true){
if((i__4983 < size__4323__auto__)){
var vec__4985 = cljs.core._nth.call(null,c__4322__auto__,i__4983);
var output_recipe = cljs.core.nth.call(null,vec__4985,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4985,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__4984,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)));

var G__5028 = (i__4983 + (1));
i__4983 = G__5028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4984),busmaker$main_bus$iter__4979_$_iter__4981.call(null,cljs.core.chunk_rest.call(null,s__4982__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4984),null);
}
} else {
var vec__4988 = cljs.core.first.call(null,s__4982__$2);
var output_recipe = cljs.core.nth.call(null,vec__4988,(0),null);
var output_index__$1 = cljs.core.nth.call(null,vec__4988,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index__$1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$2 + (-7)) + (- ((2) * output_index__$1))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,busmaker.main_bus.factory_type.call(null,ingredient)))?(1):(0)
)),busmaker$main_bus$iter__4979_$_iter__4981.call(null,cljs.core.rest.call(null,s__4982__$2)));
}
} else {
return null;
}
break;
}
});})(s__4980__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__4886,G__4886__$1,G__4886__$2,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(s__4980__$1,i,xs__6012__auto__,temp__5457__auto__,y__$2,x__$1,G__4886,G__4886__$1,G__4886__$2,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__4979.call(null,cljs.core.rest.call(null,s__4980__$1)));
} else {
var G__5029 = cljs.core.rest.call(null,s__4980__$1);
s__4980__$1 = G__5029;
continue;
}
} else {
return null;
}
break;
}
});})(y__$2,x__$1,G__4886,G__4886__$1,G__4886__$2,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
,null,null));
});})(y__$2,x__$1,G__4886,G__4886__$1,G__4886__$2,outputs,y__$1,map__4884,map__4884__$1,x,y,n_factories,buses,output_index,ingredient,input_indexes,ready_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__4886__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq4882){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4882));
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
var G__5031 = arguments.length;
switch (G__5031) {
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
var G__5037 = null;
var G__5037__0 = (function (){
return rf.call(null);
});
var G__5037__1 = (function (result){
return rf.call(null,result);
});
var G__5037__2 = (function (result,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),input)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),input));

return rf.call(null,result,input);
}
});
G__5037 = function(result,input){
switch(arguments.length){
case 0:
return G__5037__0.call(this);
case 1:
return G__5037__1.call(this,result);
case 2:
return G__5037__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5037.cljs$core$IFn$_invoke$arity$0 = G__5037__0;
G__5037.cljs$core$IFn$_invoke$arity$1 = G__5037__1;
G__5037.cljs$core$IFn$_invoke$arity$2 = G__5037__2;
return G__5037;
})()
;})(seen))
});
});

busmaker.main_bus.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function busmaker$main_bus$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__5032,seen__$1){
while(true){
var vec__5033 = p__5032;
var h = cljs.core.nth.call(null,vec__5033,(0),null);
var xs__$1 = vec__5033;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f.call(null,h))){
var G__5038 = cljs.core.rest.call(null,s);
var G__5039 = seen__$1;
p__5032 = G__5038;
seen__$1 = G__5039;
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
var G__5041 = arguments.length;
switch (G__5041) {
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
var len__4531__auto___5058 = arguments.length;
var i__4532__auto___5059 = (0);
while(true){
if((i__4532__auto___5059 < len__4531__auto___5058)){
args__4534__auto__.push((arguments[i__4532__auto___5059]));

var G__5060 = (i__4532__auto___5059 + (1));
i__4532__auto___5059 = G__5060;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.main_bus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.main_bus.cljs$core$IFn$_invoke$arity$variadic = (function (recipe_names,p__5048){
var map__5049 = p__5048;
var map__5049__$1 = ((((!((map__5049 == null)))?(((((map__5049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5049):map__5049);
var n_factories = cljs.core.get.call(null,map__5049__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(2));
var depth = cljs.core.get.call(null,map__5049__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),(1000));
var oil_QMARK_ = cljs.core.seq.call(null,cljs.core.mapcat.call(null,((function (map__5049,map__5049__$1,n_factories,depth){
return (function (recipe_name){
return cljs.core.filter.call(null,((function (map__5049,map__5049__$1,n_factories,depth){
return (function (p1__5043_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__5043_SHARP_));
});})(map__5049,map__5049__$1,n_factories,depth))
,busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name));
});})(map__5049,map__5049__$1,n_factories,depth))
,recipe_names));
var products = cljs.core.reduce.call(null,((function (oil_QMARK_,map__5049,map__5049__$1,n_factories,depth){
return (function (products,recipe_name){
return cljs.core.apply.call(null,cljs.core.conj,products,cljs.core.remove.call(null,cljs.core.set.call(null,products),cljs.core.remove.call(null,((function (oil_QMARK_,map__5049,map__5049__$1,n_factories,depth){
return (function (p1__5044_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null).call(null,busmaker.main_bus.recipe_type.call(null,p1__5044_SHARP_));
});})(oil_QMARK_,map__5049,map__5049__$1,n_factories,depth))
,busmaker.main_bus.ingredients_by_recipe.call(null,recipe_name))));
});})(oil_QMARK_,map__5049,map__5049__$1,n_factories,depth))
,((oil_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["heavy-oil"], null):cljs.core.PersistentVector.EMPTY),recipe_names);
var others = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),busmaker.recipes.recipes))),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["advanced-oil-processing",null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),busmaker.recipes.recipes))))),cljs.core.set.call(null,products));
var deps = cljs.core.map_indexed.call(null,cljs.core.vector,products);
var bus_outputs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.concat.call(null,products,others))));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (oil_QMARK_,products,others,deps,bus_outputs,map__5049,map__5049__$1,n_factories,depth){
return (function (p__5051,p__5052){
var map__5053 = p__5051;
var map__5053__$1 = ((((!((map__5053 == null)))?(((((map__5053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5053):map__5053);
var acc = map__5053__$1;
var y = cljs.core.get.call(null,map__5053__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__5054 = p__5052;
var output_index = cljs.core.nth.call(null,vec__5054,(0),null);
var ingredient = cljs.core.nth.call(null,vec__5054,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,(function (){var input_indexes = cljs.core.map.call(null,bus_outputs,busmaker.main_bus.ingredients.call(null,ingredient));
return busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_outputs,new cljs.core.Keyword(null,"y","y",-1757859776),((y - busmaker.main_bus.ingredient_height.call(null,ingredient)) - (1)),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes,new cljs.core.Keyword(null,"ready-indexes","ready-indexes",-491713348),cljs.core.set.call(null,cljs.core.range.call(null,output_index)));
})()),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,busmaker.main_bus.ingredient_height.call(null,ingredient));
});})(oil_QMARK_,products,others,deps,bus_outputs,map__5049,map__5049__$1,n_factories,depth))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),cljs.core.remove.call(null,((function (oil_QMARK_,products,others,deps,bus_outputs,map__5049,map__5049__$1,n_factories,depth){
return (function (p1__5045_SHARP_){
return cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,cljs.core.second.call(null,p1__5045_SHARP_));
});})(oil_QMARK_,products,others,deps,bus_outputs,map__5049,map__5049__$1,n_factories,depth))
,cljs.core.take.call(null,depth,deps)))));
});

busmaker.main_bus.main_bus.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.main_bus.cljs$lang$applyTo = (function (seq5046){
var G__5047 = cljs.core.first.call(null,seq5046);
var seq5046__$1 = cljs.core.next.call(null,seq5046);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5047,seq5046__$1);
});

busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__5061_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__5061_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__5061_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});

//# sourceMappingURL=main_bus.js.map
