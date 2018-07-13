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
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__8195){
var vec__8196 = p__8195;
var x = cljs.core.nth.call(null,vec__8196,(0),null);
var y = cljs.core.nth.call(null,vec__8196,(1),null);
var G__8199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8199)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8199)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8199)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8199)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8199)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__8200){
var vec__8201 = p__8200;
var x = cljs.core.nth.call(null,vec__8201,(0),null);
var y = cljs.core.nth.call(null,vec__8201,(1),null);
var G__8204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8204)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8204)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8204)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8204)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8204)].join('')));

}
}
}
}
});
busmaker.main_bus.underground_belt = (function busmaker$main_bus$underground_belt(var_args){
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

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8206){
var map__8207 = p__8206;
var map__8207__$1 = ((((!((map__8207 == null)))?(((((map__8207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8207):map__8207);
var x = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.underground_belt.cljs$lang$applyTo = (function (seq8205){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8205));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8216 = arguments.length;
var i__4532__auto___8217 = (0);
while(true){
if((i__4532__auto___8217 < len__4531__auto___8216)){
args__4534__auto__.push((arguments[i__4532__auto___8217]));

var G__8218 = (i__4532__auto___8217 + (1));
i__4532__auto___8217 = G__8218;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8213){
var map__8214 = p__8213;
var map__8214__$1 = ((((!((map__8214 == null)))?(((((map__8214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8214):map__8214);
var x = cljs.core.get.call(null,map__8214__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8214__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8214__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8214__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8212){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8212));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8223 = arguments.length;
var i__4532__auto___8224 = (0);
while(true){
if((i__4532__auto___8224 < len__4531__auto___8223)){
args__4534__auto__.push((arguments[i__4532__auto___8224]));

var G__8225 = (i__4532__auto___8224 + (1));
i__4532__auto___8224 = G__8225;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8220){
var map__8221 = p__8220;
var map__8221__$1 = ((((!((map__8221 == null)))?(((((map__8221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8221):map__8221);
var x = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8221__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8219){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8219));
});

busmaker.main_bus.transport_belt = (function busmaker$main_bus$transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8230 = arguments.length;
var i__4532__auto___8231 = (0);
while(true){
if((i__4532__auto___8231 < len__4531__auto___8230)){
args__4534__auto__.push((arguments[i__4532__auto___8231]));

var G__8232 = (i__4532__auto___8231 + (1));
i__4532__auto___8231 = G__8232;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8227){
var map__8228 = p__8227;
var map__8228__$1 = ((((!((map__8228 == null)))?(((((map__8228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8228):map__8228);
var x = cljs.core.get.call(null,map__8228__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8228__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8228__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.transport_belt.cljs$lang$applyTo = (function (seq8226){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8226));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8237 = arguments.length;
var i__4532__auto___8238 = (0);
while(true){
if((i__4532__auto___8238 < len__4531__auto___8237)){
args__4534__auto__.push((arguments[i__4532__auto___8238]));

var G__8239 = (i__4532__auto___8238 + (1));
i__4532__auto___8238 = G__8239;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8234){
var map__8235 = p__8234;
var map__8235__$1 = ((((!((map__8235 == null)))?(((((map__8235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8235):map__8235);
var x = cljs.core.get.call(null,map__8235__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8235__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq8233){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8233));
});

busmaker.main_bus.inserter = (function busmaker$main_bus$inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8244 = arguments.length;
var i__4532__auto___8245 = (0);
while(true){
if((i__4532__auto___8245 < len__4531__auto___8244)){
args__4534__auto__.push((arguments[i__4532__auto___8245]));

var G__8246 = (i__4532__auto___8245 + (1));
i__4532__auto___8245 = G__8246;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8241){
var map__8242 = p__8241;
var map__8242__$1 = ((((!((map__8242 == null)))?(((((map__8242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8242):map__8242);
var x = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.inserter.cljs$lang$applyTo = (function (seq8240){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8240));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
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
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8248){
var map__8249 = p__8248;
var map__8249__$1 = ((((!((map__8249 == null)))?(((((map__8249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8249):map__8249);
var x = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8249__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8247){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8247));
});

busmaker.main_bus.factory = (function busmaker$main_bus$factory(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8258 = arguments.length;
var i__4532__auto___8259 = (0);
while(true){
if((i__4532__auto___8259 < len__4531__auto___8258)){
args__4534__auto__.push((arguments[i__4532__auto___8259]));

var G__8260 = (i__4532__auto___8259 + (1));
i__4532__auto___8259 = G__8260;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8255){
var map__8256 = p__8255;
var map__8256__$1 = ((((!((map__8256 == null)))?(((((map__8256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8256):map__8256);
var x = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__8256__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
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
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq8254){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8254));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8273 = arguments.length;
var i__4532__auto___8274 = (0);
while(true){
if((i__4532__auto___8274 < len__4531__auto___8273)){
args__4534__auto__.push((arguments[i__4532__auto___8274]));

var G__8275 = (i__4532__auto___8274 + (1));
i__4532__auto___8274 = G__8275;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8262){
var map__8263 = p__8262;
var map__8263__$1 = ((((!((map__8263 == null)))?(((((map__8263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8263):map__8263);
var x = cljs.core.get.call(null,map__8263__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8263__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__8263__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8263,map__8263__$1,x,y,length){
return (function busmaker$main_bus$iter__8265(s__8266){
return (new cljs.core.LazySeq(null,((function (map__8263,map__8263__$1,x,y,length){
return (function (){
var s__8266__$1 = s__8266;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8266__$1);
if(temp__5457__auto__){
var s__8266__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8266__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8266__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8268 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8267 = (0);
while(true){
if((i__8267 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8267);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8268,(((i <= (1)))?(function (){var G__8269 = cljs.core.mod.call(null,i,(3));
switch (G__8269) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8269)].join('')));

}
})():(function (){var G__8270 = cljs.core.mod.call(null,i,(3));
switch (G__8270) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8270)].join('')));

}
})()));

var G__8278 = (i__8267 + (1));
i__8267 = G__8278;
continue;
} else {
var G__8279 = (i__8267 + (1));
i__8267 = G__8279;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8268),busmaker$main_bus$iter__8265.call(null,cljs.core.chunk_rest.call(null,s__8266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8268),null);
}
} else {
var i = cljs.core.first.call(null,s__8266__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__8271 = cljs.core.mod.call(null,i,(3));
switch (G__8271) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8271)].join('')));

}
})():(function (){var G__8272 = cljs.core.mod.call(null,i,(3));
switch (G__8272) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8272)].join('')));

}
})()),busmaker$main_bus$iter__8265.call(null,cljs.core.rest.call(null,s__8266__$2)));
} else {
var G__8282 = cljs.core.rest.call(null,s__8266__$2);
s__8266__$1 = G__8282;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8263,map__8263__$1,x,y,length))
,null,null));
});})(map__8263,map__8263__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq8261){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8261));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8287 = arguments.length;
var i__4532__auto___8288 = (0);
while(true){
if((i__4532__auto___8288 < len__4531__auto___8287)){
args__4534__auto__.push((arguments[i__4532__auto___8288]));

var G__8289 = (i__4532__auto___8288 + (1));
i__4532__auto___8288 = G__8289;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8284){
var map__8285 = p__8284;
var map__8285__$1 = ((((!((map__8285 == null)))?(((((map__8285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8285):map__8285);
var x = cljs.core.get.call(null,map__8285__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8285__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8285__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8283){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8283));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
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
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8291){
var map__8292 = p__8291;
var map__8292__$1 = ((((!((map__8292 == null)))?(((((map__8292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8292):map__8292);
var x = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8292,map__8292__$1,x,y,height){
return (function busmaker$main_bus$iter__8294(s__8295){
return (new cljs.core.LazySeq(null,((function (map__8292,map__8292__$1,x,y,height){
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
cljs.core.chunk_append.call(null,b__8297,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

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
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8294.call(null,cljs.core.rest.call(null,s__8295__$2)));
}
} else {
return null;
}
break;
}
});})(map__8292,map__8292__$1,x,y,height))
,null,null));
});})(map__8292,map__8292__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8290){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8290));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
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
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8303){
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
cljs.core.chunk_append.call(null,b__8309,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

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
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8306.call(null,cljs.core.rest.call(null,s__8307__$2)));
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

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8302){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8302));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8329 = arguments.length;
var i__4532__auto___8330 = (0);
while(true){
if((i__4532__auto___8330 < len__4531__auto___8329)){
args__4534__auto__.push((arguments[i__4532__auto___8330]));

var G__8331 = (i__4532__auto___8330 + (1));
i__4532__auto___8330 = G__8331;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__8316){
var map__8317 = p__8316;
var map__8317__$1 = ((((!((map__8317 == null)))?(((((map__8317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8317):map__8317);
var x = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8317,map__8317__$1,x,y){
return (function busmaker$main_bus$iter__8319(s__8320){
return (new cljs.core.LazySeq(null,((function (map__8317,map__8317__$1,x,y){
return (function (){
var s__8320__$1 = s__8320;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8320__$1);
if(temp__5457__auto__){
var s__8320__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8320__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8320__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8322 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8321 = (0);
while(true){
if((i__8321 < size__4323__auto__)){
var vec__8323 = cljs.core._nth.call(null,c__4322__auto__,i__8321);
var i = cljs.core.nth.call(null,vec__8323,(0),null);
var xi = cljs.core.nth.call(null,vec__8323,(1),null);
cljs.core.chunk_append.call(null,b__8322,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__8332 = (i__8321 + (1));
i__8321 = G__8332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8322),busmaker$main_bus$iter__8319.call(null,cljs.core.chunk_rest.call(null,s__8320__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8322),null);
}
} else {
var vec__8326 = cljs.core.first.call(null,s__8320__$2);
var i = cljs.core.nth.call(null,vec__8326,(0),null);
var xi = cljs.core.nth.call(null,vec__8326,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__8319.call(null,cljs.core.rest.call(null,s__8320__$2)));
}
} else {
return null;
}
break;
}
});})(map__8317,map__8317__$1,x,y))
,null,null));
});})(map__8317,map__8317__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq8314){
var G__8315 = cljs.core.first.call(null,seq8314);
var seq8314__$1 = cljs.core.next.call(null,seq8314);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8315,seq8314__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8349 = arguments.length;
var i__4532__auto___8350 = (0);
while(true){
if((i__4532__auto___8350 < len__4531__auto___8349)){
args__4534__auto__.push((arguments[i__4532__auto___8350]));

var G__8351 = (i__4532__auto___8350 + (1));
i__4532__auto___8350 = G__8351;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8334){
var map__8335 = p__8334;
var map__8335__$1 = ((((!((map__8335 == null)))?(((((map__8335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8335):map__8335);
var x = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var recipes = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var n_factories = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8335,map__8335__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8337(s__8338){
return (new cljs.core.LazySeq(null,((function (map__8335,map__8335__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8338__$1 = s__8338;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8338__$1);
if(temp__5457__auto__){
var s__8338__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8338__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8338__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8340 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8339 = (0);
while(true){
if((i__8339 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8339);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8340,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8339,dx,i,c__4322__auto__,size__4323__auto__,b__8340,s__8338__$2,temp__5457__auto__,map__8335,map__8335__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8337_$_iter__8341(s__8342){
return (new cljs.core.LazySeq(null,((function (i__8339,dx,i,c__4322__auto__,size__4323__auto__,b__8340,s__8338__$2,temp__5457__auto__,map__8335,map__8335__$1,x,y,recipes,n_factories,facility){
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
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8343);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8344,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8352 = (i__8343 + (1));
i__8343 = G__8352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8344),busmaker$main_bus$iter__8337_$_iter__8341.call(null,cljs.core.chunk_rest.call(null,s__8342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8344),null);
}
} else {
var j = cljs.core.first.call(null,s__8342__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8337_$_iter__8341.call(null,cljs.core.rest.call(null,s__8342__$2)));
}
} else {
return null;
}
break;
}
});})(i__8339,dx,i,c__4322__auto__,size__4323__auto__,b__8340,s__8338__$2,temp__5457__auto__,map__8335,map__8335__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(i__8339,dx,i,c__4322__auto__,size__4323__auto__,b__8340,s__8338__$2,temp__5457__auto__,map__8335,map__8335__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8353 = (i__8339 + (1));
i__8339 = G__8353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8340),busmaker$main_bus$iter__8337.call(null,cljs.core.chunk_rest.call(null,s__8338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8340),null);
}
} else {
var i = cljs.core.first.call(null,s__8338__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8338__$2,temp__5457__auto__,map__8335,map__8335__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8337_$_iter__8345(s__8346){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8338__$2,temp__5457__auto__,map__8335,map__8335__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8346__$1 = s__8346;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8346__$1);
if(temp__5457__auto____$1){
var s__8346__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8346__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8346__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8348 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8347 = (0);
while(true){
if((i__8347 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8347);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8354 = (i__8347 + (1));
i__8347 = G__8354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8348),busmaker$main_bus$iter__8337_$_iter__8345.call(null,cljs.core.chunk_rest.call(null,s__8346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8348),null);
}
} else {
var j = cljs.core.first.call(null,s__8346__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8337_$_iter__8345.call(null,cljs.core.rest.call(null,s__8346__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8338__$2,temp__5457__auto__,map__8335,map__8335__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(dx,i,s__8338__$2,temp__5457__auto__,map__8335,map__8335__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__8337.call(null,cljs.core.rest.call(null,s__8338__$2)));
}
} else {
return null;
}
break;
}
});})(map__8335,map__8335__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(map__8335,map__8335__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq8333){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8333));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8363 = arguments.length;
var i__4532__auto___8364 = (0);
while(true){
if((i__4532__auto___8364 < len__4531__auto___8363)){
args__4534__auto__.push((arguments[i__4532__auto___8364]));

var G__8365 = (i__4532__auto___8364 + (1));
i__4532__auto___8364 = G__8365;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8356){
var map__8357 = p__8356;
var map__8357__$1 = ((((!((map__8357 == null)))?(((((map__8357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8357):map__8357);
var x = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8357,map__8357__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8359(s__8360){
return (new cljs.core.LazySeq(null,((function (n,map__8357,map__8357__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__8360__$1 = s__8360;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8360__$1);
if(temp__5457__auto__){
var s__8360__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8360__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8360__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8362 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8361 = (0);
while(true){
if((i__8361 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8361);
cljs.core.chunk_append.call(null,b__8362,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8366 = (i__8361 + (1));
i__8361 = G__8366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8362),busmaker$main_bus$iter__8359.call(null,cljs.core.chunk_rest.call(null,s__8360__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8362),null);
}
} else {
var i = cljs.core.first.call(null,s__8360__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8359.call(null,cljs.core.rest.call(null,s__8360__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8357,map__8357__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8357,map__8357__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8355){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8355));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8371 = arguments.length;
var i__4532__auto___8372 = (0);
while(true){
if((i__4532__auto___8372 < len__4531__auto___8371)){
args__4534__auto__.push((arguments[i__4532__auto___8372]));

var G__8373 = (i__4532__auto___8372 + (1));
i__4532__auto___8372 = G__8373;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8368){
var map__8369 = p__8368;
var map__8369__$1 = ((((!((map__8369 == null)))?(((((map__8369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8369):map__8369);
var x = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8367){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8367));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
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
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8375){
var map__8376 = p__8375;
var map__8376__$1 = ((((!((map__8376 == null)))?(((((map__8376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8376):map__8376);
var x = cljs.core.get.call(null,map__8376__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8376__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8376__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8376__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8376__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8376,map__8376__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8378(s__8379){
return (new cljs.core.LazySeq(null,((function (map__8376,map__8376__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__8379__$1 = s__8379;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8379__$1);
if(temp__5457__auto__){
var s__8379__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8379__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8379__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8381 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8380 = (0);
while(true){
if((i__8380 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8380);
cljs.core.chunk_append.call(null,b__8381,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8385 = (i__8380 + (1));
i__8380 = G__8385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8381),busmaker$main_bus$iter__8378.call(null,cljs.core.chunk_rest.call(null,s__8379__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8381),null);
}
} else {
var i = cljs.core.first.call(null,s__8379__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8378.call(null,cljs.core.rest.call(null,s__8379__$2)));
}
} else {
return null;
}
break;
}
});})(map__8376,map__8376__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8376,map__8376__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8374){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8374));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8396 = arguments.length;
var i__4532__auto___8397 = (0);
while(true){
if((i__4532__auto___8397 < len__4531__auto___8396)){
args__4534__auto__.push((arguments[i__4532__auto___8397]));

var G__8398 = (i__4532__auto___8397 + (1));
i__4532__auto___8397 = G__8398;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8387){
var map__8388 = p__8387;
var map__8388__$1 = ((((!((map__8388 == null)))?(((((map__8388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8388):map__8388);
var x = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8388,map__8388__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__8390(s__8391){
return (new cljs.core.LazySeq(null,((function (n,map__8388,map__8388__$1,x,y,input_index,bus_index){
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
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8393,(function (){var G__8394 = cljs.core.mod.call(null,i,(3));
switch (G__8394) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8394)].join('')));

}
})());

var G__8400 = (i__8392 + (1));
i__8392 = G__8400;
continue;
} else {
var G__8401 = (i__8392 + (1));
i__8392 = G__8401;
continue;
}
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
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__8395 = cljs.core.mod.call(null,i,(3));
switch (G__8395) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8395)].join('')));

}
})(),busmaker$main_bus$iter__8390.call(null,cljs.core.rest.call(null,s__8391__$2)));
} else {
var G__8403 = cljs.core.rest.call(null,s__8391__$2);
s__8391__$1 = G__8403;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8388,map__8388__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__8388,map__8388__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8386){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8386));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8412 = arguments.length;
var i__4532__auto___8413 = (0);
while(true){
if((i__4532__auto___8413 < len__4531__auto___8412)){
args__4534__auto__.push((arguments[i__4532__auto___8413]));

var G__8414 = (i__4532__auto___8413 + (1));
i__4532__auto___8413 = G__8414;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8405){
var map__8406 = p__8405;
var map__8406__$1 = ((((!((map__8406 == null)))?(((((map__8406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8406):map__8406);
var x = cljs.core.get.call(null,map__8406__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8406__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8406__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8406__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8406,map__8406__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8408(s__8409){
return (new cljs.core.LazySeq(null,((function (map__8406,map__8406__$1,x,y,output_index,y_extension){
return (function (){
var s__8409__$1 = s__8409;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8409__$1);
if(temp__5457__auto__){
var s__8409__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8409__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8409__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8411 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8410 = (0);
while(true){
if((i__8410 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8410);
cljs.core.chunk_append.call(null,b__8411,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

var G__8415 = (i__8410 + (1));
i__8410 = G__8415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8411),busmaker$main_bus$iter__8408.call(null,cljs.core.chunk_rest.call(null,s__8409__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8411),null);
}
} else {
var i = cljs.core.first.call(null,s__8409__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8408.call(null,cljs.core.rest.call(null,s__8409__$2)));
}
} else {
return null;
}
break;
}
});})(map__8406,map__8406__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8406,map__8406__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})(),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8404){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8404));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8428 = arguments.length;
var i__4532__auto___8429 = (0);
while(true){
if((i__4532__auto___8429 < len__4531__auto___8428)){
args__4534__auto__.push((arguments[i__4532__auto___8429]));

var G__8430 = (i__4532__auto___8429 + (1));
i__4532__auto___8429 = G__8430;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8417){
var map__8418 = p__8417;
var map__8418__$1 = ((((!((map__8418 == null)))?(((((map__8418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8418):map__8418);
var x = cljs.core.get.call(null,map__8418__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8418__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8418__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8418__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8418,map__8418__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8420(s__8421){
return (new cljs.core.LazySeq(null,((function (n,map__8418,map__8418__$1,x,y,output_index,y_extension){
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
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8423,(((i >= n))?(function (){var G__8424 = cljs.core.mod.call(null,i,(3));
switch (G__8424) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8424)].join('')));

}
})():(function (){var G__8425 = cljs.core.mod.call(null,i,(3));
switch (G__8425) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8425)].join('')));

}
})()));

var G__8433 = (i__8422 + (1));
i__8422 = G__8433;
continue;
} else {
var G__8434 = (i__8422 + (1));
i__8422 = G__8434;
continue;
}
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
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8426 = cljs.core.mod.call(null,i,(3));
switch (G__8426) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8426)].join('')));

}
})():(function (){var G__8427 = cljs.core.mod.call(null,i,(3));
switch (G__8427) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8427)].join('')));

}
})()),busmaker$main_bus$iter__8420.call(null,cljs.core.rest.call(null,s__8421__$2)));
} else {
var G__8437 = cljs.core.rest.call(null,s__8421__$2);
s__8421__$1 = G__8437;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8418,map__8418__$1,x,y,output_index,y_extension))
,null,null));
});})(n,map__8418,map__8418__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8416){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8416));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
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
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8439){
var map__8440 = p__8439;
var map__8440__$1 = ((((!((map__8440 == null)))?(((((map__8440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8440):map__8440);
var x = cljs.core.get.call(null,map__8440__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8440__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8440__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8440__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8438){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8438));
});

busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name,facility){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"advanced-oil-processing":recipe_name);
var G__8445 = busmaker.recipes.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipe_data.recipes,recipe_name__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))){
return cljs.core.conj.call(null,G__8445,"coal");
} else {
return G__8445;
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
var len__4531__auto___8557 = arguments.length;
var i__4532__auto___8558 = (0);
while(true){
if((i__4532__auto___8558 < len__4531__auto___8557)){
args__4534__auto__.push((arguments[i__4532__auto___8558]));

var G__8559 = (i__4532__auto___8558 + (1));
i__4532__auto___8558 = G__8559;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8449){
var map__8450 = p__8449;
var map__8450__$1 = ((((!((map__8450 == null)))?(((((map__8450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8450):map__8450);
var x = cljs.core.get.call(null,map__8450__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8450__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var n_factories = cljs.core.get.call(null,map__8450__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8450__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipes = cljs.core.get.call(null,map__8450__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var buses = cljs.core.get.call(null,map__8450__$1,new cljs.core.Keyword(null,"buses","buses",214650120));
var input_indexes = cljs.core.get.call(null,map__8450__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ingredient = cljs.core.first.call(null,recipes);
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (p1__8446_SHARP_,p2__8447_SHARP_){
return cljs.core.assoc.call(null,p1__8446_SHARP_,"entity_number",(p2__8447_SHARP_ + (1)));
});})(ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,(function (){var G__8452 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8453(s__8454){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8454__$1 = s__8454;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8454__$1);
if(temp__5457__auto__){
var s__8454__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8454__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8454__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8456 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8455 = (0);
while(true){
if((i__8455 < size__4323__auto__)){
var vec__8457 = cljs.core._nth.call(null,c__4322__auto__,i__8455);
var bus_ingredient = cljs.core.nth.call(null,vec__8457,(0),null);
var i = cljs.core.nth.call(null,vec__8457,(1),null);
cljs.core.chunk_append.call(null,b__8456,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})());

var G__8560 = (i__8455 + (1));
i__8455 = G__8560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8456),busmaker$main_bus$iter__8453.call(null,cljs.core.chunk_rest.call(null,s__8454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8456),null);
}
} else {
var vec__8460 = cljs.core.first.call(null,s__8454__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__8460,(0),null);
var i = cljs.core.nth.call(null,vec__8460,(1),null);
return cljs.core.cons.call(null,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})(),busmaker$main_bus$iter__8453.call(null,cljs.core.rest.call(null,s__8454__$2)));
}
} else {
return null;
}
break;
}
});})(ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
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
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8463(s__8464){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
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
var i = cljs.core._nth.call(null,c__4322__auto__,i__8465);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8466,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__8561 = (i__8465 + (1));
i__8465 = G__8561;
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
var i = cljs.core.first.call(null,s__8464__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__8463.call(null,cljs.core.rest.call(null,s__8464__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8467(s__8468){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8468__$1 = s__8468;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8468__$1);
if(temp__5457__auto__){
var s__8468__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8468__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8468__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8470 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8469 = (0);
while(true){
if((i__8469 < size__4323__auto__)){
var vec__8471 = cljs.core._nth.call(null,c__4322__auto__,i__8469);
var input_index = cljs.core.nth.call(null,vec__8471,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8471,(1),null);
cljs.core.chunk_append.call(null,b__8470,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8469,x__$2,y__$3,y__$2,vec__8471,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8470,s__8468__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8467_$_iter__8474(s__8475){
return (new cljs.core.LazySeq(null,((function (i__8469,x__$2,y__$3,y__$2,vec__8471,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8470,s__8468__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8475__$1 = s__8475;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8475__$1);
if(temp__5457__auto____$1){
var s__8475__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8475__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8475__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8477 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8476 = (0);
while(true){
if((i__8476 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8476);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8477,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8562 = (i__8476 + (1));
i__8476 = G__8562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8477),busmaker$main_bus$iter__8467_$_iter__8474.call(null,cljs.core.chunk_rest.call(null,s__8475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8477),null);
}
} else {
var i = cljs.core.first.call(null,s__8475__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8467_$_iter__8474.call(null,cljs.core.rest.call(null,s__8475__$2)));
}
} else {
return null;
}
break;
}
});})(i__8469,x__$2,y__$3,y__$2,vec__8471,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8470,s__8468__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8469,x__$2,y__$3,y__$2,vec__8471,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8470,s__8468__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__8563 = (i__8469 + (1));
i__8469 = G__8563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8470),busmaker$main_bus$iter__8467.call(null,cljs.core.chunk_rest.call(null,s__8468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8470),null);
}
} else {
var vec__8478 = cljs.core.first.call(null,s__8468__$2);
var input_index = cljs.core.nth.call(null,vec__8478,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8478,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$3,y__$2,vec__8478,input_index,bus_index,s__8468__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8467_$_iter__8481(s__8482){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$3,y__$2,vec__8478,input_index,bus_index,s__8468__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8482__$1 = s__8482;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8482__$1);
if(temp__5457__auto____$1){
var s__8482__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8482__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8482__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8484 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8483 = (0);
while(true){
if((i__8483 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8483);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8564 = (i__8483 + (1));
i__8483 = G__8564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8484),busmaker$main_bus$iter__8467_$_iter__8481.call(null,cljs.core.chunk_rest.call(null,s__8482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8484),null);
}
} else {
var i = cljs.core.first.call(null,s__8482__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8467_$_iter__8481.call(null,cljs.core.rest.call(null,s__8482__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$3,y__$2,vec__8478,input_index,bus_index,s__8468__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$2,y__$3,y__$2,vec__8478,input_index,bus_index,s__8468__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__8467.call(null,cljs.core.rest.call(null,s__8468__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8485(s__8486){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8486__$1 = s__8486;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8486__$1);
if(temp__5457__auto__){
var s__8486__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8486__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8486__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8488 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8487 = (0);
while(true){
if((i__8487 < size__4323__auto__)){
var vec__8489 = cljs.core._nth.call(null,c__4322__auto__,i__8487);
var output_recipe = cljs.core.nth.call(null,vec__8489,(0),null);
var output_index = cljs.core.nth.call(null,vec__8489,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8488,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8487,s__8486__$1,tap_x,x__$1,y__$1,vec__8489,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8488,s__8486__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8485_$_iter__8492(s__8493){
return (new cljs.core.LazySeq(null,((function (i__8487,s__8486__$1,tap_x,x__$1,y__$1,vec__8489,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8488,s__8486__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8493__$1 = s__8493;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8493__$1);
if(temp__5457__auto____$1){
var s__8493__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8493__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8493__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8495 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8494 = (0);
while(true){
if((i__8494 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8494);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8495,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8496 = cljs.core.mod.call(null,i,(3));
switch (G__8496) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8496)].join('')));

}
})()));

var G__8566 = (i__8494 + (1));
i__8494 = G__8566;
continue;
} else {
var G__8567 = (i__8494 + (1));
i__8494 = G__8567;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8495),busmaker$main_bus$iter__8485_$_iter__8492.call(null,cljs.core.chunk_rest.call(null,s__8493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8495),null);
}
} else {
var i = cljs.core.first.call(null,s__8493__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8497 = cljs.core.mod.call(null,i,(3));
switch (G__8497) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8497)].join('')));

}
})()),busmaker$main_bus$iter__8485_$_iter__8492.call(null,cljs.core.rest.call(null,s__8493__$2)));
} else {
var G__8569 = cljs.core.rest.call(null,s__8493__$2);
s__8493__$1 = G__8569;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8487,s__8486__$1,tap_x,x__$1,y__$1,vec__8489,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8488,s__8486__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8487,s__8486__$1,tap_x,x__$1,y__$1,vec__8489,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8488,s__8486__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8570 = (i__8487 + (1));
i__8487 = G__8570;
continue;
} else {
var G__8571 = (i__8487 + (1));
i__8487 = G__8571;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8488),busmaker$main_bus$iter__8485.call(null,cljs.core.chunk_rest.call(null,s__8486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8488),null);
}
} else {
var vec__8498 = cljs.core.first.call(null,s__8486__$2);
var output_recipe = cljs.core.nth.call(null,vec__8498,(0),null);
var output_index = cljs.core.nth.call(null,vec__8498,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8486__$1,tap_x,x__$1,y__$1,vec__8498,output_recipe,output_index,s__8486__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8485_$_iter__8501(s__8502){
return (new cljs.core.LazySeq(null,((function (s__8486__$1,tap_x,x__$1,y__$1,vec__8498,output_recipe,output_index,s__8486__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8502__$1 = s__8502;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8502__$1);
if(temp__5457__auto____$1){
var s__8502__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8502__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8502__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8504 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8503 = (0);
while(true){
if((i__8503 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8503);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8504,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8505 = cljs.core.mod.call(null,i,(3));
switch (G__8505) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8505)].join('')));

}
})()));

var G__8573 = (i__8503 + (1));
i__8503 = G__8573;
continue;
} else {
var G__8574 = (i__8503 + (1));
i__8503 = G__8574;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8504),busmaker$main_bus$iter__8485_$_iter__8501.call(null,cljs.core.chunk_rest.call(null,s__8502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8504),null);
}
} else {
var i = cljs.core.first.call(null,s__8502__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8506 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8485_$_iter__8501.call(null,cljs.core.rest.call(null,s__8502__$2)));
} else {
var G__8576 = cljs.core.rest.call(null,s__8502__$2);
s__8502__$1 = G__8576;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8486__$1,tap_x,x__$1,y__$1,vec__8498,output_recipe,output_index,s__8486__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8486__$1,tap_x,x__$1,y__$1,vec__8498,output_recipe,output_index,s__8486__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8485.call(null,cljs.core.rest.call(null,s__8486__$2)));
} else {
var G__8577 = cljs.core.rest.call(null,s__8486__$2);
s__8486__$1 = G__8577;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8507(s__8508){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8508__$1 = s__8508;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8508__$1);
if(temp__5457__auto__){
var s__8508__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8508__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8508__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8510 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8509 = (0);
while(true){
if((i__8509 < size__4323__auto__)){
var vec__8511 = cljs.core._nth.call(null,c__4322__auto__,i__8509);
var output_recipe = cljs.core.nth.call(null,vec__8511,(0),null);
var output_index = cljs.core.nth.call(null,vec__8511,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8510,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8509,s__8508__$1,tap_x,x__$1,y__$1,vec__8511,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8510,s__8508__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8507_$_iter__8514(s__8515){
return (new cljs.core.LazySeq(null,((function (i__8509,s__8508__$1,tap_x,x__$1,y__$1,vec__8511,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8510,s__8508__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8515__$1 = s__8515;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8515__$1);
if(temp__5457__auto____$1){
var s__8515__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8515__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8515__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8517 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8516 = (0);
while(true){
if((i__8516 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8516);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8517,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8518 = cljs.core.mod.call(null,i,(3));
switch (G__8518) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8518)].join('')));

}
})()));

var G__8579 = (i__8516 + (1));
i__8516 = G__8579;
continue;
} else {
var G__8580 = (i__8516 + (1));
i__8516 = G__8580;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8517),busmaker$main_bus$iter__8507_$_iter__8514.call(null,cljs.core.chunk_rest.call(null,s__8515__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8517),null);
}
} else {
var i = cljs.core.first.call(null,s__8515__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8519 = cljs.core.mod.call(null,i,(3));
switch (G__8519) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8519)].join('')));

}
})()),busmaker$main_bus$iter__8507_$_iter__8514.call(null,cljs.core.rest.call(null,s__8515__$2)));
} else {
var G__8582 = cljs.core.rest.call(null,s__8515__$2);
s__8515__$1 = G__8582;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8509,s__8508__$1,tap_x,x__$1,y__$1,vec__8511,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8510,s__8508__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8509,s__8508__$1,tap_x,x__$1,y__$1,vec__8511,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8510,s__8508__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})());

var G__8583 = (i__8509 + (1));
i__8509 = G__8583;
continue;
} else {
var G__8584 = (i__8509 + (1));
i__8509 = G__8584;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8510),busmaker$main_bus$iter__8507.call(null,cljs.core.chunk_rest.call(null,s__8508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8510),null);
}
} else {
var vec__8520 = cljs.core.first.call(null,s__8508__$2);
var output_recipe = cljs.core.nth.call(null,vec__8520,(0),null);
var output_index = cljs.core.nth.call(null,vec__8520,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8508__$1,tap_x,x__$1,y__$1,vec__8520,output_recipe,output_index,s__8508__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8507_$_iter__8523(s__8524){
return (new cljs.core.LazySeq(null,((function (s__8508__$1,tap_x,x__$1,y__$1,vec__8520,output_recipe,output_index,s__8508__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8524__$1 = s__8524;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8524__$1);
if(temp__5457__auto____$1){
var s__8524__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8524__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8524__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8526 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8525 = (0);
while(true){
if((i__8525 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8525);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8526,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8527 = cljs.core.mod.call(null,i,(3));
switch (G__8527) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8527)].join('')));

}
})()));

var G__8586 = (i__8525 + (1));
i__8525 = G__8586;
continue;
} else {
var G__8587 = (i__8525 + (1));
i__8525 = G__8587;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8526),busmaker$main_bus$iter__8507_$_iter__8523.call(null,cljs.core.chunk_rest.call(null,s__8524__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8526),null);
}
} else {
var i = cljs.core.first.call(null,s__8524__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8528 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8507_$_iter__8523.call(null,cljs.core.rest.call(null,s__8524__$2)));
} else {
var G__8589 = cljs.core.rest.call(null,s__8524__$2);
s__8524__$1 = G__8589;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8508__$1,tap_x,x__$1,y__$1,vec__8520,output_recipe,output_index,s__8508__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8508__$1,tap_x,x__$1,y__$1,vec__8520,output_recipe,output_index,s__8508__$2,temp__5457__auto__,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})(),busmaker$main_bus$iter__8507.call(null,cljs.core.rest.call(null,s__8508__$2)));
} else {
var G__8590 = cljs.core.rest.call(null,s__8508__$2);
s__8508__$1 = G__8590;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__8452__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8452,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var output_index = buses.call(null,ingredient);
var iter__4324__auto__ = ((function (x__$1,y__$1,output_index,G__8452,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8529(s__8530){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,output_index,G__8452,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8530__$1 = s__8530;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8530__$1);
if(temp__5457__auto__){
var s__8530__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8530__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8530__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8532 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8531 = (0);
while(true){
if((i__8531 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8531);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
cljs.core.chunk_append.call(null,b__8532,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)));

var G__8591 = (i__8531 + (1));
i__8531 = G__8591;
continue;
} else {
var G__8592 = (i__8531 + (1));
i__8531 = G__8592;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8532),busmaker$main_bus$iter__8529.call(null,cljs.core.chunk_rest.call(null,s__8530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8532),null);
}
} else {
var i = cljs.core.first.call(null,s__8530__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)),busmaker$main_bus$iter__8529.call(null,cljs.core.rest.call(null,s__8530__$2)));
} else {
var G__8593 = cljs.core.rest.call(null,s__8530__$2);
s__8530__$1 = G__8593;
continue;
}
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,output_index,G__8452,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,output_index,G__8452,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8452);
var G__8452__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))?cljs.core.concat.call(null,G__8452__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8452,G__8452__$1,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8533(s__8534){
return (new cljs.core.LazySeq(null,((function (G__8452,G__8452__$1,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8534__$1 = s__8534;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8534__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8534__$1,i,xs__6012__auto__,temp__5457__auto__,G__8452,G__8452__$1,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8533_$_iter__8535(s__8536){
return (new cljs.core.LazySeq(null,((function (s__8534__$1,i,xs__6012__auto__,temp__5457__auto__,G__8452,G__8452__$1,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8536__$1 = s__8536;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8536__$1);
if(temp__5457__auto____$1){
var s__8536__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8536__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8536__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8538 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8537 = (0);
while(true){
if((i__8537 < size__4323__auto__)){
var vec__8539 = cljs.core._nth.call(null,c__4322__auto__,i__8537);
var input_recipe = cljs.core.nth.call(null,vec__8539,(0),null);
var input_index = cljs.core.nth.call(null,vec__8539,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8538,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8594 = (i__8537 + (1));
i__8537 = G__8594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8538),busmaker$main_bus$iter__8533_$_iter__8535.call(null,cljs.core.chunk_rest.call(null,s__8536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8538),null);
}
} else {
var vec__8542 = cljs.core.first.call(null,s__8536__$2);
var input_recipe = cljs.core.nth.call(null,vec__8542,(0),null);
var input_index = cljs.core.nth.call(null,vec__8542,(1),null);
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
)),args))))),busmaker$main_bus$iter__8533_$_iter__8535.call(null,cljs.core.rest.call(null,s__8536__$2)));
}
} else {
return null;
}
break;
}
});})(s__8534__$1,i,xs__6012__auto__,temp__5457__auto__,G__8452,G__8452__$1,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8534__$1,i,xs__6012__auto__,temp__5457__auto__,G__8452,G__8452__$1,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8533.call(null,cljs.core.rest.call(null,s__8534__$1)));
} else {
var G__8595 = cljs.core.rest.call(null,s__8534__$1);
s__8534__$1 = G__8595;
continue;
}
} else {
return null;
}
break;
}
});})(G__8452,G__8452__$1,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(G__8452,G__8452__$1,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8452__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8452__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$1,x__$1,G__8452,G__8452__$1,G__8452__$2,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8545(s__8546){
return (new cljs.core.LazySeq(null,((function (y__$1,x__$1,G__8452,G__8452__$1,G__8452__$2,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8546__$1 = s__8546;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8546__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8546__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8452,G__8452__$1,G__8452__$2,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8545_$_iter__8547(s__8548){
return (new cljs.core.LazySeq(null,((function (s__8546__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8452,G__8452__$1,G__8452__$2,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8548__$1 = s__8548;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8548__$1);
if(temp__5457__auto____$1){
var s__8548__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8548__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8548__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8550 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8549 = (0);
while(true){
if((i__8549 < size__4323__auto__)){
var vec__8551 = cljs.core._nth.call(null,c__4322__auto__,i__8549);
var output_recipe = cljs.core.nth.call(null,vec__8551,(0),null);
var output_index = cljs.core.nth.call(null,vec__8551,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8550,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8596 = (i__8549 + (1));
i__8549 = G__8596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8550),busmaker$main_bus$iter__8545_$_iter__8547.call(null,cljs.core.chunk_rest.call(null,s__8548__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8550),null);
}
} else {
var vec__8554 = cljs.core.first.call(null,s__8548__$2);
var output_recipe = cljs.core.nth.call(null,vec__8554,(0),null);
var output_index = cljs.core.nth.call(null,vec__8554,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8545_$_iter__8547.call(null,cljs.core.rest.call(null,s__8548__$2)));
}
} else {
return null;
}
break;
}
});})(s__8546__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8452,G__8452__$1,G__8452__$2,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8546__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8452,G__8452__$1,G__8452__$2,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8545.call(null,cljs.core.rest.call(null,s__8546__$1)));
} else {
var G__8597 = cljs.core.rest.call(null,s__8546__$1);
s__8546__$1 = G__8597;
continue;
}
} else {
return null;
}
break;
}
});})(y__$1,x__$1,G__8452,G__8452__$1,G__8452__$2,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(y__$1,x__$1,G__8452,G__8452__$1,G__8452__$2,ingredient,map__8450,map__8450__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8452__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8448){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8448));
});

busmaker.main_bus.raw_QMARK_ = (function busmaker$main_bus$raw_QMARK_(recipe_name){
return cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,recipe_name);
});
busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(factories,bus_outputs){
var bus_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (bus_index){
return (function (p__8598,factory){
var map__8599 = p__8598;
var map__8599__$1 = ((((!((map__8599 == null)))?(((((map__8599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8599):map__8599);
var acc = map__8599__$1;
var x = cljs.core.get.call(null,map__8599__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8599__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__8601 = factory;
var map__8601__$1 = ((((!((map__8601 == null)))?(((((map__8601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8601):map__8601);
var facility = cljs.core.get.call(null,map__8601__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8601__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8601__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var height = busmaker.main_bus.ingredient_height.call(null,cljs.core.first.call(null,recipes),facility);
var input_indexes = cljs.core.map.call(null,bus_index,busmaker.main_bus.ingredients.call(null,cljs.core.first.call(null,recipes),facility));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_index,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["chemical-plant",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
))),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,height);
});})(bus_index))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),factories)));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8603_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8603_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8603_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
