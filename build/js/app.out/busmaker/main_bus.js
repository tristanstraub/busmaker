// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.main_bus');
goog.require('cljs.core');
goog.require('busmaker.bus');
goog.require('busmaker.recipe_data');
goog.require('busmaker.recipes');
busmaker.main_bus.fluid_QMARK_ = (function busmaker$main_bus$fluid_QMARK_(bus_ingredient){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["crude-oil",null,"sulfuric-acid",null,"water",null,"petroleum-gas",null,"light-oil",null,"heavy-oil",null,"lubricant",null], null), null).call(null,bus_ingredient);
});
busmaker.main_bus.recipe = (function busmaker$main_bus$recipe(recipes,recipe_name){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),new cljs.core.Keyword(null,"name","name",1843675177)),recipes));
});
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__8093){
var vec__8094 = p__8093;
var x = cljs.core.nth.call(null,vec__8094,(0),null);
var y = cljs.core.nth.call(null,vec__8094,(1),null);
var G__8097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8097)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8097)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8097)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8097)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8097)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__8098){
var vec__8099 = p__8098;
var x = cljs.core.nth.call(null,vec__8099,(0),null);
var y = cljs.core.nth.call(null,vec__8099,(1),null);
var G__8102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8102)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8102)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8102)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8102)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8102)].join('')));

}
}
}
}
});
busmaker.main_bus.underground_belt = (function busmaker$main_bus$underground_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8107 = arguments.length;
var i__4532__auto___8108 = (0);
while(true){
if((i__4532__auto___8108 < len__4531__auto___8107)){
args__4534__auto__.push((arguments[i__4532__auto___8108]));

var G__8109 = (i__4532__auto___8108 + (1));
i__4532__auto___8108 = G__8109;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8104){
var map__8105 = p__8104;
var map__8105__$1 = ((((!((map__8105 == null)))?(((((map__8105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8105):map__8105);
var x = cljs.core.get.call(null,map__8105__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8105__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8105__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8105__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.underground_belt.cljs$lang$applyTo = (function (seq8103){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8103));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8114 = arguments.length;
var i__4532__auto___8115 = (0);
while(true){
if((i__4532__auto___8115 < len__4531__auto___8114)){
args__4534__auto__.push((arguments[i__4532__auto___8115]));

var G__8116 = (i__4532__auto___8115 + (1));
i__4532__auto___8115 = G__8116;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8111){
var map__8112 = p__8111;
var map__8112__$1 = ((((!((map__8112 == null)))?(((((map__8112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8112):map__8112);
var x = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8110){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8110));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8121 = arguments.length;
var i__4532__auto___8122 = (0);
while(true){
if((i__4532__auto___8122 < len__4531__auto___8121)){
args__4534__auto__.push((arguments[i__4532__auto___8122]));

var G__8123 = (i__4532__auto___8122 + (1));
i__4532__auto___8122 = G__8123;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8118){
var map__8119 = p__8118;
var map__8119__$1 = ((((!((map__8119 == null)))?(((((map__8119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8119):map__8119);
var x = cljs.core.get.call(null,map__8119__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8119__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8119__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8117){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8117));
});

busmaker.main_bus.transport_belt = (function busmaker$main_bus$transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8128 = arguments.length;
var i__4532__auto___8129 = (0);
while(true){
if((i__4532__auto___8129 < len__4531__auto___8128)){
args__4534__auto__.push((arguments[i__4532__auto___8129]));

var G__8130 = (i__4532__auto___8129 + (1));
i__4532__auto___8129 = G__8130;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8125){
var map__8126 = p__8125;
var map__8126__$1 = ((((!((map__8126 == null)))?(((((map__8126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8126):map__8126);
var x = cljs.core.get.call(null,map__8126__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8126__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8126__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.transport_belt.cljs$lang$applyTo = (function (seq8124){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8124));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8135 = arguments.length;
var i__4532__auto___8136 = (0);
while(true){
if((i__4532__auto___8136 < len__4531__auto___8135)){
args__4534__auto__.push((arguments[i__4532__auto___8136]));

var G__8137 = (i__4532__auto___8136 + (1));
i__4532__auto___8136 = G__8137;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8132){
var map__8133 = p__8132;
var map__8133__$1 = ((((!((map__8133 == null)))?(((((map__8133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8133):map__8133);
var x = cljs.core.get.call(null,map__8133__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8133__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq8131){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8131));
});

busmaker.main_bus.inserter = (function busmaker$main_bus$inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8142 = arguments.length;
var i__4532__auto___8143 = (0);
while(true){
if((i__4532__auto___8143 < len__4531__auto___8142)){
args__4534__auto__.push((arguments[i__4532__auto___8143]));

var G__8144 = (i__4532__auto___8143 + (1));
i__4532__auto___8143 = G__8144;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8139){
var map__8140 = p__8139;
var map__8140__$1 = ((((!((map__8140 == null)))?(((((map__8140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8140):map__8140);
var x = cljs.core.get.call(null,map__8140__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8140__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8140__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.inserter.cljs$lang$applyTo = (function (seq8138){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8138));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8149 = arguments.length;
var i__4532__auto___8150 = (0);
while(true){
if((i__4532__auto___8150 < len__4531__auto___8149)){
args__4534__auto__.push((arguments[i__4532__auto___8150]));

var G__8151 = (i__4532__auto___8150 + (1));
i__4532__auto___8150 = G__8151;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8146){
var map__8147 = p__8146;
var map__8147__$1 = ((((!((map__8147 == null)))?(((((map__8147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8147):map__8147);
var x = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8145){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8145));
});

busmaker.main_bus.factory = (function busmaker$main_bus$factory(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8156 = arguments.length;
var i__4532__auto___8157 = (0);
while(true){
if((i__4532__auto___8157 < len__4531__auto___8156)){
args__4534__auto__.push((arguments[i__4532__auto___8157]));

var G__8158 = (i__4532__auto___8157 + (1));
i__4532__auto___8157 = G__8158;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8153){
var map__8154 = p__8153;
var map__8154__$1 = ((((!((map__8154 == null)))?(((((map__8154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8154):map__8154);
var x = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
return new cljs.core.PersistentArrayMap(null, 4, ["name",facility,"recipe",busmaker.recipes.recipe_type.call(null,recipe),"position",new cljs.core.PersistentArrayMap(null, 2, ["x",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(x + 0.5):(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,recipe));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["battery",null,"sulfur",null,"sulfuric-acid",null,"lubricant",null], null), null).call(null,recipe);
}
})())?x:(x - (1))
)),"y",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(y + 0.5):y
)], null),"direction",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?busmaker.main_bus.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)):busmaker.main_bus.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))
)], null);
});

busmaker.main_bus.factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq8152){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8152));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8171 = arguments.length;
var i__4532__auto___8172 = (0);
while(true){
if((i__4532__auto___8172 < len__4531__auto___8171)){
args__4534__auto__.push((arguments[i__4532__auto___8172]));

var G__8173 = (i__4532__auto___8172 + (1));
i__4532__auto___8172 = G__8173;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8160){
var map__8161 = p__8160;
var map__8161__$1 = ((((!((map__8161 == null)))?(((((map__8161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8161):map__8161);
var x = cljs.core.get.call(null,map__8161__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8161__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__8161__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8161,map__8161__$1,x,y,length){
return (function busmaker$main_bus$iter__8163(s__8164){
return (new cljs.core.LazySeq(null,((function (map__8161,map__8161__$1,x,y,length){
return (function (){
var s__8164__$1 = s__8164;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8164__$1);
if(temp__5457__auto__){
var s__8164__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8164__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8164__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8166 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8165 = (0);
while(true){
if((i__8165 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8165);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8166,(((i <= (1)))?(function (){var G__8167 = cljs.core.mod.call(null,i,(3));
switch (G__8167) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8167)].join('')));

}
})():(function (){var G__8168 = cljs.core.mod.call(null,i,(3));
switch (G__8168) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8168)].join('')));

}
})()));

var G__8176 = (i__8165 + (1));
i__8165 = G__8176;
continue;
} else {
var G__8177 = (i__8165 + (1));
i__8165 = G__8177;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8166),busmaker$main_bus$iter__8163.call(null,cljs.core.chunk_rest.call(null,s__8164__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8166),null);
}
} else {
var i = cljs.core.first.call(null,s__8164__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__8169 = cljs.core.mod.call(null,i,(3));
switch (G__8169) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8169)].join('')));

}
})():(function (){var G__8170 = cljs.core.mod.call(null,i,(3));
switch (G__8170) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8170)].join('')));

}
})()),busmaker$main_bus$iter__8163.call(null,cljs.core.rest.call(null,s__8164__$2)));
} else {
var G__8180 = cljs.core.rest.call(null,s__8164__$2);
s__8164__$1 = G__8180;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8161,map__8161__$1,x,y,length))
,null,null));
});})(map__8161,map__8161__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq8159){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8159));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8185 = arguments.length;
var i__4532__auto___8186 = (0);
while(true){
if((i__4532__auto___8186 < len__4531__auto___8185)){
args__4534__auto__.push((arguments[i__4532__auto___8186]));

var G__8187 = (i__4532__auto___8186 + (1));
i__4532__auto___8186 = G__8187;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8182){
var map__8183 = p__8182;
var map__8183__$1 = ((((!((map__8183 == null)))?(((((map__8183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8183):map__8183);
var x = cljs.core.get.call(null,map__8183__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8183__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8183__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8181){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8181));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
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
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8189){
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
cljs.core.chunk_append.call(null,b__8195,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

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
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8192.call(null,cljs.core.rest.call(null,s__8193__$2)));
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

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8188){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8188));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8208 = arguments.length;
var i__4532__auto___8209 = (0);
while(true){
if((i__4532__auto___8209 < len__4531__auto___8208)){
args__4534__auto__.push((arguments[i__4532__auto___8209]));

var G__8210 = (i__4532__auto___8209 + (1));
i__4532__auto___8209 = G__8210;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8201){
var map__8202 = p__8201;
var map__8202__$1 = ((((!((map__8202 == null)))?(((((map__8202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8202):map__8202);
var x = cljs.core.get.call(null,map__8202__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8202__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8202__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8202,map__8202__$1,x,y,height){
return (function busmaker$main_bus$iter__8204(s__8205){
return (new cljs.core.LazySeq(null,((function (map__8202,map__8202__$1,x,y,height){
return (function (){
var s__8205__$1 = s__8205;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8205__$1);
if(temp__5457__auto__){
var s__8205__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8205__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8205__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8207 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8206 = (0);
while(true){
if((i__8206 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8206);
cljs.core.chunk_append.call(null,b__8207,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8211 = (i__8206 + (1));
i__8206 = G__8211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8207),busmaker$main_bus$iter__8204.call(null,cljs.core.chunk_rest.call(null,s__8205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8207),null);
}
} else {
var i = cljs.core.first.call(null,s__8205__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8204.call(null,cljs.core.rest.call(null,s__8205__$2)));
}
} else {
return null;
}
break;
}
});})(map__8202,map__8202__$1,x,y,height))
,null,null));
});})(map__8202,map__8202__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8200){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8200));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
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

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__8214){
var map__8215 = p__8214;
var map__8215__$1 = ((((!((map__8215 == null)))?(((((map__8215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8215):map__8215);
var x = cljs.core.get.call(null,map__8215__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8215__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8215,map__8215__$1,x,y){
return (function busmaker$main_bus$iter__8217(s__8218){
return (new cljs.core.LazySeq(null,((function (map__8215,map__8215__$1,x,y){
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
var vec__8221 = cljs.core._nth.call(null,c__4322__auto__,i__8219);
var i = cljs.core.nth.call(null,vec__8221,(0),null);
var xi = cljs.core.nth.call(null,vec__8221,(1),null);
cljs.core.chunk_append.call(null,b__8220,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__8230 = (i__8219 + (1));
i__8219 = G__8230;
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
var vec__8224 = cljs.core.first.call(null,s__8218__$2);
var i = cljs.core.nth.call(null,vec__8224,(0),null);
var xi = cljs.core.nth.call(null,vec__8224,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__8217.call(null,cljs.core.rest.call(null,s__8218__$2)));
}
} else {
return null;
}
break;
}
});})(map__8215,map__8215__$1,x,y))
,null,null));
});})(map__8215,map__8215__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq8212){
var G__8213 = cljs.core.first.call(null,seq8212);
var seq8212__$1 = cljs.core.next.call(null,seq8212);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8213,seq8212__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8247 = arguments.length;
var i__4532__auto___8248 = (0);
while(true){
if((i__4532__auto___8248 < len__4531__auto___8247)){
args__4534__auto__.push((arguments[i__4532__auto___8248]));

var G__8249 = (i__4532__auto___8248 + (1));
i__4532__auto___8248 = G__8249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8232){
var map__8233 = p__8232;
var map__8233__$1 = ((((!((map__8233 == null)))?(((((map__8233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8233):map__8233);
var x = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var recipes = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var n_factories = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8233__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8233,map__8233__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8235(s__8236){
return (new cljs.core.LazySeq(null,((function (map__8233,map__8233__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8236__$1 = s__8236;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8236__$1);
if(temp__5457__auto__){
var s__8236__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8236__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8236__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8238 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8237 = (0);
while(true){
if((i__8237 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8237);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8238,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8237,dx,i,c__4322__auto__,size__4323__auto__,b__8238,s__8236__$2,temp__5457__auto__,map__8233,map__8233__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8235_$_iter__8239(s__8240){
return (new cljs.core.LazySeq(null,((function (i__8237,dx,i,c__4322__auto__,size__4323__auto__,b__8238,s__8236__$2,temp__5457__auto__,map__8233,map__8233__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8240__$1 = s__8240;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8240__$1);
if(temp__5457__auto____$1){
var s__8240__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8240__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8240__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8242 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8241 = (0);
while(true){
if((i__8241 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8241);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8250 = (i__8241 + (1));
i__8241 = G__8250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8242),busmaker$main_bus$iter__8235_$_iter__8239.call(null,cljs.core.chunk_rest.call(null,s__8240__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8242),null);
}
} else {
var j = cljs.core.first.call(null,s__8240__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8235_$_iter__8239.call(null,cljs.core.rest.call(null,s__8240__$2)));
}
} else {
return null;
}
break;
}
});})(i__8237,dx,i,c__4322__auto__,size__4323__auto__,b__8238,s__8236__$2,temp__5457__auto__,map__8233,map__8233__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(i__8237,dx,i,c__4322__auto__,size__4323__auto__,b__8238,s__8236__$2,temp__5457__auto__,map__8233,map__8233__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8251 = (i__8237 + (1));
i__8237 = G__8251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8238),busmaker$main_bus$iter__8235.call(null,cljs.core.chunk_rest.call(null,s__8236__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8238),null);
}
} else {
var i = cljs.core.first.call(null,s__8236__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8236__$2,temp__5457__auto__,map__8233,map__8233__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8235_$_iter__8243(s__8244){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8236__$2,temp__5457__auto__,map__8233,map__8233__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8244__$1 = s__8244;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8244__$1);
if(temp__5457__auto____$1){
var s__8244__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8244__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8244__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8246 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8245 = (0);
while(true){
if((i__8245 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8245);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8246,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8252 = (i__8245 + (1));
i__8245 = G__8252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8246),busmaker$main_bus$iter__8235_$_iter__8243.call(null,cljs.core.chunk_rest.call(null,s__8244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8246),null);
}
} else {
var j = cljs.core.first.call(null,s__8244__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8235_$_iter__8243.call(null,cljs.core.rest.call(null,s__8244__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8236__$2,temp__5457__auto__,map__8233,map__8233__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(dx,i,s__8236__$2,temp__5457__auto__,map__8233,map__8233__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__8235.call(null,cljs.core.rest.call(null,s__8236__$2)));
}
} else {
return null;
}
break;
}
});})(map__8233,map__8233__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(map__8233,map__8233__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq8231){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8231));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8261 = arguments.length;
var i__4532__auto___8262 = (0);
while(true){
if((i__4532__auto___8262 < len__4531__auto___8261)){
args__4534__auto__.push((arguments[i__4532__auto___8262]));

var G__8263 = (i__4532__auto___8262 + (1));
i__4532__auto___8262 = G__8263;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8254){
var map__8255 = p__8254;
var map__8255__$1 = ((((!((map__8255 == null)))?(((((map__8255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8255):map__8255);
var x = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8255,map__8255__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8257(s__8258){
return (new cljs.core.LazySeq(null,((function (n,map__8255,map__8255__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__8258__$1 = s__8258;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8258__$1);
if(temp__5457__auto__){
var s__8258__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8258__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8258__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8260 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8259 = (0);
while(true){
if((i__8259 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8259);
cljs.core.chunk_append.call(null,b__8260,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8264 = (i__8259 + (1));
i__8259 = G__8264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8260),busmaker$main_bus$iter__8257.call(null,cljs.core.chunk_rest.call(null,s__8258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8260),null);
}
} else {
var i = cljs.core.first.call(null,s__8258__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8257.call(null,cljs.core.rest.call(null,s__8258__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8255,map__8255__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8255,map__8255__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8253){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8253));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
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
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8266){
var map__8267 = p__8266;
var map__8267__$1 = ((((!((map__8267 == null)))?(((((map__8267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8267):map__8267);
var x = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8267__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8265){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8265));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8280 = arguments.length;
var i__4532__auto___8281 = (0);
while(true){
if((i__4532__auto___8281 < len__4531__auto___8280)){
args__4534__auto__.push((arguments[i__4532__auto___8281]));

var G__8282 = (i__4532__auto___8281 + (1));
i__4532__auto___8281 = G__8282;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8273){
var map__8274 = p__8273;
var map__8274__$1 = ((((!((map__8274 == null)))?(((((map__8274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8274):map__8274);
var x = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8274,map__8274__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8276(s__8277){
return (new cljs.core.LazySeq(null,((function (map__8274,map__8274__$1,x,y,output_index,output_extension,y_extension){
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
cljs.core.chunk_append.call(null,b__8279,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8283 = (i__8278 + (1));
i__8278 = G__8283;
continue;
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
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8276.call(null,cljs.core.rest.call(null,s__8277__$2)));
}
} else {
return null;
}
break;
}
});})(map__8274,map__8274__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8274,map__8274__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8272){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8272));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8294 = arguments.length;
var i__4532__auto___8295 = (0);
while(true){
if((i__4532__auto___8295 < len__4531__auto___8294)){
args__4534__auto__.push((arguments[i__4532__auto___8295]));

var G__8296 = (i__4532__auto___8295 + (1));
i__4532__auto___8295 = G__8296;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8285){
var map__8286 = p__8285;
var map__8286__$1 = ((((!((map__8286 == null)))?(((((map__8286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8286):map__8286);
var x = cljs.core.get.call(null,map__8286__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8286__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8286__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8286__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8286,map__8286__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__8288(s__8289){
return (new cljs.core.LazySeq(null,((function (n,map__8286,map__8286__$1,x,y,input_index,bus_index){
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
cljs.core.chunk_append.call(null,b__8291,(function (){var G__8292 = cljs.core.mod.call(null,i,(3));
switch (G__8292) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8292)].join('')));

}
})());

var G__8298 = (i__8290 + (1));
i__8290 = G__8298;
continue;
} else {
var G__8299 = (i__8290 + (1));
i__8290 = G__8299;
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
return cljs.core.cons.call(null,(function (){var G__8293 = cljs.core.mod.call(null,i,(3));
switch (G__8293) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8293)].join('')));

}
})(),busmaker$main_bus$iter__8288.call(null,cljs.core.rest.call(null,s__8289__$2)));
} else {
var G__8301 = cljs.core.rest.call(null,s__8289__$2);
s__8289__$1 = G__8301;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8286,map__8286__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__8286,map__8286__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8284){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8284));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
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
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8303){
var map__8304 = p__8303;
var map__8304__$1 = ((((!((map__8304 == null)))?(((((map__8304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8304):map__8304);
var x = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8304,map__8304__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8306(s__8307){
return (new cljs.core.LazySeq(null,((function (map__8304,map__8304__$1,x,y,output_index,y_extension){
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
cljs.core.chunk_append.call(null,b__8309,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

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
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8306.call(null,cljs.core.rest.call(null,s__8307__$2)));
}
} else {
return null;
}
break;
}
});})(map__8304,map__8304__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8304,map__8304__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})(),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8302){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8302));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8326 = arguments.length;
var i__4532__auto___8327 = (0);
while(true){
if((i__4532__auto___8327 < len__4531__auto___8326)){
args__4534__auto__.push((arguments[i__4532__auto___8327]));

var G__8328 = (i__4532__auto___8327 + (1));
i__4532__auto___8327 = G__8328;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8315){
var map__8316 = p__8315;
var map__8316__$1 = ((((!((map__8316 == null)))?(((((map__8316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8316):map__8316);
var x = cljs.core.get.call(null,map__8316__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8316__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8316__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8316__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8316,map__8316__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8318(s__8319){
return (new cljs.core.LazySeq(null,((function (n,map__8316,map__8316__$1,x,y,output_index,y_extension){
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
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8321,(((i >= n))?(function (){var G__8322 = cljs.core.mod.call(null,i,(3));
switch (G__8322) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8322)].join('')));

}
})():(function (){var G__8323 = cljs.core.mod.call(null,i,(3));
switch (G__8323) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8323)].join('')));

}
})()));

var G__8331 = (i__8320 + (1));
i__8320 = G__8331;
continue;
} else {
var G__8332 = (i__8320 + (1));
i__8320 = G__8332;
continue;
}
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
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8324 = cljs.core.mod.call(null,i,(3));
switch (G__8324) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8324)].join('')));

}
})():(function (){var G__8325 = cljs.core.mod.call(null,i,(3));
switch (G__8325) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8325)].join('')));

}
})()),busmaker$main_bus$iter__8318.call(null,cljs.core.rest.call(null,s__8319__$2)));
} else {
var G__8335 = cljs.core.rest.call(null,s__8319__$2);
s__8319__$1 = G__8335;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8316,map__8316__$1,x,y,output_index,y_extension))
,null,null));
});})(n,map__8316,map__8316__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8314){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8314));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
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

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8337){
var map__8338 = p__8337;
var map__8338__$1 = ((((!((map__8338 == null)))?(((((map__8338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8338):map__8338);
var x = cljs.core.get.call(null,map__8338__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8338__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8338__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8338__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8336){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8336));
});

busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name,facility){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"advanced-oil-processing":recipe_name);
var G__8343 = busmaker.recipes.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipe_data.recipes,recipe_name__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))){
return cljs.core.conj.call(null,G__8343,"coal");
} else {
return G__8343;
}
});
busmaker.main_bus.ingredient_height = (function busmaker$main_bus$ingredient_height(ingredient,facility){
if(cljs.core.seq.call(null,facility)){
} else {
throw (new Error("Assert failed: (seq facility)"));
}

var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient,facility));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["lab",null], null), null).call(null,facility))){
return (12);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))){
return (8);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))){
return (12);
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
cljs.core.enable_console_print_BANG_.call(null);

console.log(cljs.core.ex_info.call(null,"Unknown ingredient height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility], null)));

throw cljs.core.ex_info.call(null,"Unknown ingredient height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility], null));

}
}
}
}
}
}
});
busmaker.main_bus.facility_dy = (function busmaker$main_bus$facility_dy(ingredient,facility){
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient,facility));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))){
return (4);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["lab",null], null), null).call(null,facility))){
return (5);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))){
return (1);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))){
return (5);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))){
return (1);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))){
return ((4) + (((n > (3)))?(0):(0)));
} else {
return (0);

}
}
}
}
}
}
});
busmaker.main_bus.main_bus_line = (function busmaker$main_bus$main_bus_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8455 = arguments.length;
var i__4532__auto___8456 = (0);
while(true){
if((i__4532__auto___8456 < len__4531__auto___8455)){
args__4534__auto__.push((arguments[i__4532__auto___8456]));

var G__8457 = (i__4532__auto___8456 + (1));
i__4532__auto___8456 = G__8457;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8347){
var map__8348 = p__8347;
var map__8348__$1 = ((((!((map__8348 == null)))?(((((map__8348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8348):map__8348);
var x = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var n_factories = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipes = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var buses = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"buses","buses",214650120));
var input_indexes = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ingredient = cljs.core.first.call(null,recipes);
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (p1__8344_SHARP_,p2__8345_SHARP_){
return cljs.core.assoc.call(null,p1__8344_SHARP_,"entity_number",(p2__8345_SHARP_ + (1)));
});})(ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,(function (){var G__8350 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8351(s__8352){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8352__$1 = s__8352;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8352__$1);
if(temp__5457__auto__){
var s__8352__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8352__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8352__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8354 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8353 = (0);
while(true){
if((i__8353 < size__4323__auto__)){
var vec__8355 = cljs.core._nth.call(null,c__4322__auto__,i__8353);
var bus_ingredient = cljs.core.nth.call(null,vec__8355,(0),null);
var i = cljs.core.nth.call(null,vec__8355,(1),null);
cljs.core.chunk_append.call(null,b__8354,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})());

var G__8458 = (i__8353 + (1));
i__8353 = G__8458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8354),busmaker$main_bus$iter__8351.call(null,cljs.core.chunk_rest.call(null,s__8352__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8354),null);
}
} else {
var vec__8358 = cljs.core.first.call(null,s__8352__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__8358,(0),null);
var i = cljs.core.nth.call(null,vec__8358,(1),null);
return cljs.core.cons.call(null,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})(),busmaker$main_bus$iter__8351.call(null,cljs.core.rest.call(null,s__8352__$2)));
}
} else {
return null;
}
break;
}
});})(ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,buses);
})())),(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var non_fluid_ingredients = cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,cljs.core.map.call(null,buses,cljs.core.remove.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))));
return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3938__auto__ = (cljs.core.count.call(null,non_fluid_ingredients) > (3));
if(and__3938__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["assembling-machine-2",null,"electric-furnace",null,"assembling-machine-1",null], null), null).call(null,facility);
} else {
return and__3938__auto__;
}
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8361(s__8362){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8362__$1 = s__8362;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8362__$1);
if(temp__5457__auto__){
var s__8362__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8362__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8362__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8364 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8363 = (0);
while(true){
if((i__8363 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8363);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8364,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__8459 = (i__8363 + (1));
i__8363 = G__8459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8364),busmaker$main_bus$iter__8361.call(null,cljs.core.chunk_rest.call(null,s__8362__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8364),null);
}
} else {
var i = cljs.core.first.call(null,s__8362__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__8361.call(null,cljs.core.rest.call(null,s__8362__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8365(s__8366){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8366__$1 = s__8366;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8366__$1);
if(temp__5457__auto__){
var s__8366__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8366__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8366__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8368 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8367 = (0);
while(true){
if((i__8367 < size__4323__auto__)){
var vec__8369 = cljs.core._nth.call(null,c__4322__auto__,i__8367);
var input_index = cljs.core.nth.call(null,vec__8369,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8369,(1),null);
cljs.core.chunk_append.call(null,b__8368,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8367,x__$2,y__$3,y__$2,vec__8369,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8368,s__8366__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8365_$_iter__8372(s__8373){
return (new cljs.core.LazySeq(null,((function (i__8367,x__$2,y__$3,y__$2,vec__8369,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8368,s__8366__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8373__$1 = s__8373;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8373__$1);
if(temp__5457__auto____$1){
var s__8373__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8373__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8373__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8375 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8374 = (0);
while(true){
if((i__8374 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8374);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8460 = (i__8374 + (1));
i__8374 = G__8460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8375),busmaker$main_bus$iter__8365_$_iter__8372.call(null,cljs.core.chunk_rest.call(null,s__8373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8375),null);
}
} else {
var i = cljs.core.first.call(null,s__8373__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8365_$_iter__8372.call(null,cljs.core.rest.call(null,s__8373__$2)));
}
} else {
return null;
}
break;
}
});})(i__8367,x__$2,y__$3,y__$2,vec__8369,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8368,s__8366__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8367,x__$2,y__$3,y__$2,vec__8369,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8368,s__8366__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__8461 = (i__8367 + (1));
i__8367 = G__8461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8368),busmaker$main_bus$iter__8365.call(null,cljs.core.chunk_rest.call(null,s__8366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8368),null);
}
} else {
var vec__8376 = cljs.core.first.call(null,s__8366__$2);
var input_index = cljs.core.nth.call(null,vec__8376,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8376,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$3,y__$2,vec__8376,input_index,bus_index,s__8366__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8365_$_iter__8379(s__8380){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$3,y__$2,vec__8376,input_index,bus_index,s__8366__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8380__$1 = s__8380;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8380__$1);
if(temp__5457__auto____$1){
var s__8380__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8380__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8380__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8382 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8381 = (0);
while(true){
if((i__8381 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8381);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8382,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8462 = (i__8381 + (1));
i__8381 = G__8462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8382),busmaker$main_bus$iter__8365_$_iter__8379.call(null,cljs.core.chunk_rest.call(null,s__8380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8382),null);
}
} else {
var i = cljs.core.first.call(null,s__8380__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8365_$_iter__8379.call(null,cljs.core.rest.call(null,s__8380__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$3,y__$2,vec__8376,input_index,bus_index,s__8366__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$2,y__$3,y__$2,vec__8376,input_index,bus_index,s__8366__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__8365.call(null,cljs.core.rest.call(null,s__8366__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8383(s__8384){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8384__$1 = s__8384;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8384__$1);
if(temp__5457__auto__){
var s__8384__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8384__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8384__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8386 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8385 = (0);
while(true){
if((i__8385 < size__4323__auto__)){
var vec__8387 = cljs.core._nth.call(null,c__4322__auto__,i__8385);
var output_recipe = cljs.core.nth.call(null,vec__8387,(0),null);
var output_index = cljs.core.nth.call(null,vec__8387,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8386,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8385,s__8384__$1,tap_x,x__$1,y__$1,vec__8387,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8386,s__8384__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8383_$_iter__8390(s__8391){
return (new cljs.core.LazySeq(null,((function (i__8385,s__8384__$1,tap_x,x__$1,y__$1,vec__8387,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8386,s__8384__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8391__$1 = s__8391;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8391__$1);
if(temp__5457__auto____$1){
var s__8391__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8391__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8391__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8393 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8392 = (0);
while(true){
if((i__8392 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8392);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8393,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8394 = cljs.core.mod.call(null,i,(3));
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

var G__8464 = (i__8392 + (1));
i__8392 = G__8464;
continue;
} else {
var G__8465 = (i__8392 + (1));
i__8392 = G__8465;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8393),busmaker$main_bus$iter__8383_$_iter__8390.call(null,cljs.core.chunk_rest.call(null,s__8391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8393),null);
}
} else {
var i = cljs.core.first.call(null,s__8391__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8395 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8383_$_iter__8390.call(null,cljs.core.rest.call(null,s__8391__$2)));
} else {
var G__8467 = cljs.core.rest.call(null,s__8391__$2);
s__8391__$1 = G__8467;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8385,s__8384__$1,tap_x,x__$1,y__$1,vec__8387,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8386,s__8384__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8385,s__8384__$1,tap_x,x__$1,y__$1,vec__8387,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8386,s__8384__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8468 = (i__8385 + (1));
i__8385 = G__8468;
continue;
} else {
var G__8469 = (i__8385 + (1));
i__8385 = G__8469;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8386),busmaker$main_bus$iter__8383.call(null,cljs.core.chunk_rest.call(null,s__8384__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8386),null);
}
} else {
var vec__8396 = cljs.core.first.call(null,s__8384__$2);
var output_recipe = cljs.core.nth.call(null,vec__8396,(0),null);
var output_index = cljs.core.nth.call(null,vec__8396,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cons.call(null,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8384__$1,tap_x,x__$1,y__$1,vec__8396,output_recipe,output_index,s__8384__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8383_$_iter__8399(s__8400){
return (new cljs.core.LazySeq(null,((function (s__8384__$1,tap_x,x__$1,y__$1,vec__8396,output_recipe,output_index,s__8384__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8400__$1 = s__8400;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8400__$1);
if(temp__5457__auto____$1){
var s__8400__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8400__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8400__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8402 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8401 = (0);
while(true){
if((i__8401 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8401);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8402,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8403 = cljs.core.mod.call(null,i,(3));
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

var G__8471 = (i__8401 + (1));
i__8401 = G__8471;
continue;
} else {
var G__8472 = (i__8401 + (1));
i__8401 = G__8472;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),busmaker$main_bus$iter__8383_$_iter__8399.call(null,cljs.core.chunk_rest.call(null,s__8400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),null);
}
} else {
var i = cljs.core.first.call(null,s__8400__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8404 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8383_$_iter__8399.call(null,cljs.core.rest.call(null,s__8400__$2)));
} else {
var G__8474 = cljs.core.rest.call(null,s__8400__$2);
s__8400__$1 = G__8474;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8384__$1,tap_x,x__$1,y__$1,vec__8396,output_recipe,output_index,s__8384__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8384__$1,tap_x,x__$1,y__$1,vec__8396,output_recipe,output_index,s__8384__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8383.call(null,cljs.core.rest.call(null,s__8384__$2)));
} else {
var G__8475 = cljs.core.rest.call(null,s__8384__$2);
s__8384__$1 = G__8475;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8405(s__8406){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8406__$1 = s__8406;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8406__$1);
if(temp__5457__auto__){
var s__8406__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8406__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8406__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8408 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8407 = (0);
while(true){
if((i__8407 < size__4323__auto__)){
var vec__8409 = cljs.core._nth.call(null,c__4322__auto__,i__8407);
var output_recipe = cljs.core.nth.call(null,vec__8409,(0),null);
var output_index = cljs.core.nth.call(null,vec__8409,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8408,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8407,s__8406__$1,tap_x,x__$1,y__$1,vec__8409,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8408,s__8406__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8405_$_iter__8412(s__8413){
return (new cljs.core.LazySeq(null,((function (i__8407,s__8406__$1,tap_x,x__$1,y__$1,vec__8409,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8408,s__8406__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8413__$1 = s__8413;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8413__$1);
if(temp__5457__auto____$1){
var s__8413__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8413__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8413__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8415 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8414 = (0);
while(true){
if((i__8414 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8414);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8415,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8416 = cljs.core.mod.call(null,i,(3));
switch (G__8416) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8416)].join('')));

}
})()));

var G__8477 = (i__8414 + (1));
i__8414 = G__8477;
continue;
} else {
var G__8478 = (i__8414 + (1));
i__8414 = G__8478;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8415),busmaker$main_bus$iter__8405_$_iter__8412.call(null,cljs.core.chunk_rest.call(null,s__8413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8415),null);
}
} else {
var i = cljs.core.first.call(null,s__8413__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8417 = cljs.core.mod.call(null,i,(3));
switch (G__8417) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8417)].join('')));

}
})()),busmaker$main_bus$iter__8405_$_iter__8412.call(null,cljs.core.rest.call(null,s__8413__$2)));
} else {
var G__8480 = cljs.core.rest.call(null,s__8413__$2);
s__8413__$1 = G__8480;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8407,s__8406__$1,tap_x,x__$1,y__$1,vec__8409,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8408,s__8406__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8407,s__8406__$1,tap_x,x__$1,y__$1,vec__8409,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8408,s__8406__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})());

var G__8481 = (i__8407 + (1));
i__8407 = G__8481;
continue;
} else {
var G__8482 = (i__8407 + (1));
i__8407 = G__8482;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8408),busmaker$main_bus$iter__8405.call(null,cljs.core.chunk_rest.call(null,s__8406__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8408),null);
}
} else {
var vec__8418 = cljs.core.first.call(null,s__8406__$2);
var output_recipe = cljs.core.nth.call(null,vec__8418,(0),null);
var output_index = cljs.core.nth.call(null,vec__8418,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cons.call(null,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8406__$1,tap_x,x__$1,y__$1,vec__8418,output_recipe,output_index,s__8406__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8405_$_iter__8421(s__8422){
return (new cljs.core.LazySeq(null,((function (s__8406__$1,tap_x,x__$1,y__$1,vec__8418,output_recipe,output_index,s__8406__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8422__$1 = s__8422;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8422__$1);
if(temp__5457__auto____$1){
var s__8422__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8422__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8422__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8424 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8423 = (0);
while(true){
if((i__8423 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8423);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8424,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8425 = cljs.core.mod.call(null,i,(3));
switch (G__8425) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8425)].join('')));

}
})()));

var G__8484 = (i__8423 + (1));
i__8423 = G__8484;
continue;
} else {
var G__8485 = (i__8423 + (1));
i__8423 = G__8485;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8424),busmaker$main_bus$iter__8405_$_iter__8421.call(null,cljs.core.chunk_rest.call(null,s__8422__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8424),null);
}
} else {
var i = cljs.core.first.call(null,s__8422__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8426 = cljs.core.mod.call(null,i,(3));
switch (G__8426) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8426)].join('')));

}
})()),busmaker$main_bus$iter__8405_$_iter__8421.call(null,cljs.core.rest.call(null,s__8422__$2)));
} else {
var G__8487 = cljs.core.rest.call(null,s__8422__$2);
s__8422__$1 = G__8487;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8406__$1,tap_x,x__$1,y__$1,vec__8418,output_recipe,output_index,s__8406__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8406__$1,tap_x,x__$1,y__$1,vec__8418,output_recipe,output_index,s__8406__$2,temp__5457__auto__,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})(),busmaker$main_bus$iter__8405.call(null,cljs.core.rest.call(null,s__8406__$2)));
} else {
var G__8488 = cljs.core.rest.call(null,s__8406__$2);
s__8406__$1 = G__8488;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__8350__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8350,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var output_index = buses.call(null,ingredient);
var iter__4324__auto__ = ((function (x__$1,y__$1,output_index,G__8350,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8427(s__8428){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,output_index,G__8350,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8428__$1 = s__8428;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8428__$1);
if(temp__5457__auto__){
var s__8428__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8428__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8428__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8430 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8429 = (0);
while(true){
if((i__8429 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8429);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
cljs.core.chunk_append.call(null,b__8430,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)));

var G__8489 = (i__8429 + (1));
i__8429 = G__8489;
continue;
} else {
var G__8490 = (i__8429 + (1));
i__8429 = G__8490;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8430),busmaker$main_bus$iter__8427.call(null,cljs.core.chunk_rest.call(null,s__8428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8430),null);
}
} else {
var i = cljs.core.first.call(null,s__8428__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)),busmaker$main_bus$iter__8427.call(null,cljs.core.rest.call(null,s__8428__$2)));
} else {
var G__8491 = cljs.core.rest.call(null,s__8428__$2);
s__8428__$1 = G__8491;
continue;
}
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,output_index,G__8350,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,output_index,G__8350,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8350);
var G__8350__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))?cljs.core.concat.call(null,G__8350__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8350,G__8350__$1,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8431(s__8432){
return (new cljs.core.LazySeq(null,((function (G__8350,G__8350__$1,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8432__$1 = s__8432;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8432__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8432__$1,i,xs__6012__auto__,temp__5457__auto__,G__8350,G__8350__$1,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8431_$_iter__8433(s__8434){
return (new cljs.core.LazySeq(null,((function (s__8432__$1,i,xs__6012__auto__,temp__5457__auto__,G__8350,G__8350__$1,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8434__$1 = s__8434;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8434__$1);
if(temp__5457__auto____$1){
var s__8434__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8434__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8434__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8436 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8435 = (0);
while(true){
if((i__8435 < size__4323__auto__)){
var vec__8437 = cljs.core._nth.call(null,c__4322__auto__,i__8435);
var input_recipe = cljs.core.nth.call(null,vec__8437,(0),null);
var input_index = cljs.core.nth.call(null,vec__8437,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8436,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8492 = (i__8435 + (1));
i__8435 = G__8492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8436),busmaker$main_bus$iter__8431_$_iter__8433.call(null,cljs.core.chunk_rest.call(null,s__8434__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8436),null);
}
} else {
var vec__8440 = cljs.core.first.call(null,s__8434__$2);
var input_recipe = cljs.core.nth.call(null,vec__8440,(0),null);
var input_index = cljs.core.nth.call(null,vec__8440,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))),busmaker$main_bus$iter__8431_$_iter__8433.call(null,cljs.core.rest.call(null,s__8434__$2)));
}
} else {
return null;
}
break;
}
});})(s__8432__$1,i,xs__6012__auto__,temp__5457__auto__,G__8350,G__8350__$1,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8432__$1,i,xs__6012__auto__,temp__5457__auto__,G__8350,G__8350__$1,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8431.call(null,cljs.core.rest.call(null,s__8432__$1)));
} else {
var G__8493 = cljs.core.rest.call(null,s__8432__$1);
s__8432__$1 = G__8493;
continue;
}
} else {
return null;
}
break;
}
});})(G__8350,G__8350__$1,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(G__8350,G__8350__$1,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8350__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8350__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$1,x__$1,G__8350,G__8350__$1,G__8350__$2,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8443(s__8444){
return (new cljs.core.LazySeq(null,((function (y__$1,x__$1,G__8350,G__8350__$1,G__8350__$2,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8444__$1 = s__8444;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8444__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8444__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8350,G__8350__$1,G__8350__$2,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8443_$_iter__8445(s__8446){
return (new cljs.core.LazySeq(null,((function (s__8444__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8350,G__8350__$1,G__8350__$2,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8446__$1 = s__8446;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8446__$1);
if(temp__5457__auto____$1){
var s__8446__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8446__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8446__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8448 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8447 = (0);
while(true){
if((i__8447 < size__4323__auto__)){
var vec__8449 = cljs.core._nth.call(null,c__4322__auto__,i__8447);
var output_recipe = cljs.core.nth.call(null,vec__8449,(0),null);
var output_index = cljs.core.nth.call(null,vec__8449,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8448,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8494 = (i__8447 + (1));
i__8447 = G__8494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8448),busmaker$main_bus$iter__8443_$_iter__8445.call(null,cljs.core.chunk_rest.call(null,s__8446__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8448),null);
}
} else {
var vec__8452 = cljs.core.first.call(null,s__8446__$2);
var output_recipe = cljs.core.nth.call(null,vec__8452,(0),null);
var output_index = cljs.core.nth.call(null,vec__8452,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8443_$_iter__8445.call(null,cljs.core.rest.call(null,s__8446__$2)));
}
} else {
return null;
}
break;
}
});})(s__8444__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8350,G__8350__$1,G__8350__$2,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8444__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8350,G__8350__$1,G__8350__$2,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8443.call(null,cljs.core.rest.call(null,s__8444__$1)));
} else {
var G__8495 = cljs.core.rest.call(null,s__8444__$1);
s__8444__$1 = G__8495;
continue;
}
} else {
return null;
}
break;
}
});})(y__$1,x__$1,G__8350,G__8350__$1,G__8350__$2,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(y__$1,x__$1,G__8350,G__8350__$1,G__8350__$2,ingredient,map__8348,map__8348__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8350__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8346){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8346));
});

busmaker.main_bus.raw_QMARK_ = (function busmaker$main_bus$raw_QMARK_(recipe_name){
return cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,recipe_name);
});
busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(factories,bus_outputs){
var bus_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (bus_index){
return (function (p__8496,factory){
var map__8497 = p__8496;
var map__8497__$1 = ((((!((map__8497 == null)))?(((((map__8497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8497):map__8497);
var acc = map__8497__$1;
var x = cljs.core.get.call(null,map__8497__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8497__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__8499 = factory;
var map__8499__$1 = ((((!((map__8499 == null)))?(((((map__8499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8499):map__8499);
var facility = cljs.core.get.call(null,map__8499__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8499__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8499__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var height = busmaker.main_bus.ingredient_height.call(null,cljs.core.first.call(null,recipes),facility);
var input_indexes = cljs.core.map.call(null,bus_index,busmaker.main_bus.ingredients.call(null,cljs.core.first.call(null,recipes),facility));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_index,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["chemical-plant",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
))),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,height);
});})(bus_index))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),factories)));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8501_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8501_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8501_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
