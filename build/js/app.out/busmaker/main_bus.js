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
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__8201){
var vec__8202 = p__8201;
var x = cljs.core.nth.call(null,vec__8202,(0),null);
var y = cljs.core.nth.call(null,vec__8202,(1),null);
var G__8205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8205)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8205)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8205)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8205)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8205)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__8206){
var vec__8207 = p__8206;
var x = cljs.core.nth.call(null,vec__8207,(0),null);
var y = cljs.core.nth.call(null,vec__8207,(1),null);
var G__8210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8210)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8210)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8210)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8210)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8210)].join('')));

}
}
}
}
});
busmaker.main_bus.underground_belt = (function busmaker$main_bus$underground_belt(var_args){
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

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8212){
var map__8213 = p__8212;
var map__8213__$1 = ((((!((map__8213 == null)))?(((((map__8213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8213):map__8213);
var x = cljs.core.get.call(null,map__8213__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8213__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8213__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8213__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.underground_belt.cljs$lang$applyTo = (function (seq8211){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8211));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8222 = arguments.length;
var i__4532__auto___8223 = (0);
while(true){
if((i__4532__auto___8223 < len__4531__auto___8222)){
args__4534__auto__.push((arguments[i__4532__auto___8223]));

var G__8224 = (i__4532__auto___8223 + (1));
i__4532__auto___8223 = G__8224;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8219){
var map__8220 = p__8219;
var map__8220__$1 = ((((!((map__8220 == null)))?(((((map__8220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8220):map__8220);
var x = cljs.core.get.call(null,map__8220__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8220__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8220__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8220__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8218){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8218));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
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
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8226){
var map__8227 = p__8226;
var map__8227__$1 = ((((!((map__8227 == null)))?(((((map__8227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8227):map__8227);
var x = cljs.core.get.call(null,map__8227__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8227__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8227__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8225){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8225));
});

busmaker.main_bus.transport_belt = (function busmaker$main_bus$transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8236 = arguments.length;
var i__4532__auto___8237 = (0);
while(true){
if((i__4532__auto___8237 < len__4531__auto___8236)){
args__4534__auto__.push((arguments[i__4532__auto___8237]));

var G__8238 = (i__4532__auto___8237 + (1));
i__4532__auto___8237 = G__8238;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8233){
var map__8234 = p__8233;
var map__8234__$1 = ((((!((map__8234 == null)))?(((((map__8234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8234):map__8234);
var x = cljs.core.get.call(null,map__8234__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8234__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8234__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.transport_belt.cljs$lang$applyTo = (function (seq8232){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8232));
});

busmaker.main_bus.small_electric_pole = (function busmaker$main_bus$small_electric_pole(var_args){
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
return busmaker.main_bus.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8240){
var map__8241 = p__8240;
var map__8241__$1 = ((((!((map__8241 == null)))?(((((map__8241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8241):map__8241);
var x = cljs.core.get.call(null,map__8241__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8241__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","small-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.small_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.small_electric_pole.cljs$lang$applyTo = (function (seq8239){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8239));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8250 = arguments.length;
var i__4532__auto___8251 = (0);
while(true){
if((i__4532__auto___8251 < len__4531__auto___8250)){
args__4534__auto__.push((arguments[i__4532__auto___8251]));

var G__8252 = (i__4532__auto___8251 + (1));
i__4532__auto___8251 = G__8252;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8247){
var map__8248 = p__8247;
var map__8248__$1 = ((((!((map__8248 == null)))?(((((map__8248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8248):map__8248);
var x = cljs.core.get.call(null,map__8248__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8248__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq8246){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8246));
});

busmaker.main_bus.inserter = (function busmaker$main_bus$inserter(var_args){
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
return busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8254){
var map__8255 = p__8254;
var map__8255__$1 = ((((!((map__8255 == null)))?(((((map__8255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8255):map__8255);
var x = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8255__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.inserter.cljs$lang$applyTo = (function (seq8253){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8253));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8264 = arguments.length;
var i__4532__auto___8265 = (0);
while(true){
if((i__4532__auto___8265 < len__4531__auto___8264)){
args__4534__auto__.push((arguments[i__4532__auto___8265]));

var G__8266 = (i__4532__auto___8265 + (1));
i__4532__auto___8265 = G__8266;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8261){
var map__8262 = p__8261;
var map__8262__$1 = ((((!((map__8262 == null)))?(((((map__8262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8262):map__8262);
var x = cljs.core.get.call(null,map__8262__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8262__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8262__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8260){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8260));
});

busmaker.main_bus.factory = (function busmaker$main_bus$factory(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8271 = arguments.length;
var i__4532__auto___8272 = (0);
while(true){
if((i__4532__auto___8272 < len__4531__auto___8271)){
args__4534__auto__.push((arguments[i__4532__auto___8272]));

var G__8273 = (i__4532__auto___8272 + (1));
i__4532__auto___8272 = G__8273;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8268){
var map__8269 = p__8268;
var map__8269__$1 = ((((!((map__8269 == null)))?(((((map__8269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8269):map__8269);
var x = cljs.core.get.call(null,map__8269__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8269__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__8269__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__8269__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
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
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq8267){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8267));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8286 = arguments.length;
var i__4532__auto___8287 = (0);
while(true){
if((i__4532__auto___8287 < len__4531__auto___8286)){
args__4534__auto__.push((arguments[i__4532__auto___8287]));

var G__8288 = (i__4532__auto___8287 + (1));
i__4532__auto___8287 = G__8288;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8275){
var map__8276 = p__8275;
var map__8276__$1 = ((((!((map__8276 == null)))?(((((map__8276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8276):map__8276);
var x = cljs.core.get.call(null,map__8276__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8276__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__8276__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8276,map__8276__$1,x,y,length){
return (function busmaker$main_bus$iter__8278(s__8279){
return (new cljs.core.LazySeq(null,((function (map__8276,map__8276__$1,x,y,length){
return (function (){
var s__8279__$1 = s__8279;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8279__$1);
if(temp__5457__auto__){
var s__8279__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8279__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8279__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8281 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8280 = (0);
while(true){
if((i__8280 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8280);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8281,(((i <= (1)))?(function (){var G__8282 = cljs.core.mod.call(null,i,(3));
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
})()));

var G__8291 = (i__8280 + (1));
i__8280 = G__8291;
continue;
} else {
var G__8292 = (i__8280 + (1));
i__8280 = G__8292;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8281),busmaker$main_bus$iter__8278.call(null,cljs.core.chunk_rest.call(null,s__8279__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8281),null);
}
} else {
var i = cljs.core.first.call(null,s__8279__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__8284 = cljs.core.mod.call(null,i,(3));
switch (G__8284) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8284)].join('')));

}
})():(function (){var G__8285 = cljs.core.mod.call(null,i,(3));
switch (G__8285) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8285)].join('')));

}
})()),busmaker$main_bus$iter__8278.call(null,cljs.core.rest.call(null,s__8279__$2)));
} else {
var G__8295 = cljs.core.rest.call(null,s__8279__$2);
s__8279__$1 = G__8295;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8276,map__8276__$1,x,y,length))
,null,null));
});})(map__8276,map__8276__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq8274){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8274));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8300 = arguments.length;
var i__4532__auto___8301 = (0);
while(true){
if((i__4532__auto___8301 < len__4531__auto___8300)){
args__4534__auto__.push((arguments[i__4532__auto___8301]));

var G__8302 = (i__4532__auto___8301 + (1));
i__4532__auto___8301 = G__8302;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8297){
var map__8298 = p__8297;
var map__8298__$1 = ((((!((map__8298 == null)))?(((((map__8298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8298):map__8298);
var x = cljs.core.get.call(null,map__8298__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8298__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8298__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8296){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8296));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8311 = arguments.length;
var i__4532__auto___8312 = (0);
while(true){
if((i__4532__auto___8312 < len__4531__auto___8311)){
args__4534__auto__.push((arguments[i__4532__auto___8312]));

var G__8313 = (i__4532__auto___8312 + (1));
i__4532__auto___8312 = G__8313;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8304){
var map__8305 = p__8304;
var map__8305__$1 = ((((!((map__8305 == null)))?(((((map__8305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8305):map__8305);
var x = cljs.core.get.call(null,map__8305__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8305__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8305__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8305,map__8305__$1,x,y,height){
return (function busmaker$main_bus$iter__8307(s__8308){
return (new cljs.core.LazySeq(null,((function (map__8305,map__8305__$1,x,y,height){
return (function (){
var s__8308__$1 = s__8308;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8308__$1);
if(temp__5457__auto__){
var s__8308__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8308__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8308__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8310 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8309 = (0);
while(true){
if((i__8309 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8309);
cljs.core.chunk_append.call(null,b__8310,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8314 = (i__8309 + (1));
i__8309 = G__8314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8310),busmaker$main_bus$iter__8307.call(null,cljs.core.chunk_rest.call(null,s__8308__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8310),null);
}
} else {
var i = cljs.core.first.call(null,s__8308__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8307.call(null,cljs.core.rest.call(null,s__8308__$2)));
}
} else {
return null;
}
break;
}
});})(map__8305,map__8305__$1,x,y,height))
,null,null));
});})(map__8305,map__8305__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8303){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8303));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8323 = arguments.length;
var i__4532__auto___8324 = (0);
while(true){
if((i__4532__auto___8324 < len__4531__auto___8323)){
args__4534__auto__.push((arguments[i__4532__auto___8324]));

var G__8325 = (i__4532__auto___8324 + (1));
i__4532__auto___8324 = G__8325;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8316){
var map__8317 = p__8316;
var map__8317__$1 = ((((!((map__8317 == null)))?(((((map__8317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8317):map__8317);
var x = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8317__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8317,map__8317__$1,x,y,height){
return (function busmaker$main_bus$iter__8319(s__8320){
return (new cljs.core.LazySeq(null,((function (map__8317,map__8317__$1,x,y,height){
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
var i = cljs.core._nth.call(null,c__4322__auto__,i__8321);
cljs.core.chunk_append.call(null,b__8322,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8326 = (i__8321 + (1));
i__8321 = G__8326;
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
var i = cljs.core.first.call(null,s__8320__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8319.call(null,cljs.core.rest.call(null,s__8320__$2)));
}
} else {
return null;
}
break;
}
});})(map__8317,map__8317__$1,x,y,height))
,null,null));
});})(map__8317,map__8317__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8315){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8315));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8342 = arguments.length;
var i__4532__auto___8343 = (0);
while(true){
if((i__4532__auto___8343 < len__4531__auto___8342)){
args__4534__auto__.push((arguments[i__4532__auto___8343]));

var G__8344 = (i__4532__auto___8343 + (1));
i__4532__auto___8343 = G__8344;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__8329){
var map__8330 = p__8329;
var map__8330__$1 = ((((!((map__8330 == null)))?(((((map__8330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8330):map__8330);
var x = cljs.core.get.call(null,map__8330__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8330__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8330,map__8330__$1,x,y){
return (function busmaker$main_bus$iter__8332(s__8333){
return (new cljs.core.LazySeq(null,((function (map__8330,map__8330__$1,x,y){
return (function (){
var s__8333__$1 = s__8333;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8333__$1);
if(temp__5457__auto__){
var s__8333__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8333__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8333__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8335 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8334 = (0);
while(true){
if((i__8334 < size__4323__auto__)){
var vec__8336 = cljs.core._nth.call(null,c__4322__auto__,i__8334);
var i = cljs.core.nth.call(null,vec__8336,(0),null);
var xi = cljs.core.nth.call(null,vec__8336,(1),null);
cljs.core.chunk_append.call(null,b__8335,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__8345 = (i__8334 + (1));
i__8334 = G__8345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8335),busmaker$main_bus$iter__8332.call(null,cljs.core.chunk_rest.call(null,s__8333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8335),null);
}
} else {
var vec__8339 = cljs.core.first.call(null,s__8333__$2);
var i = cljs.core.nth.call(null,vec__8339,(0),null);
var xi = cljs.core.nth.call(null,vec__8339,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__8332.call(null,cljs.core.rest.call(null,s__8333__$2)));
}
} else {
return null;
}
break;
}
});})(map__8330,map__8330__$1,x,y))
,null,null));
});})(map__8330,map__8330__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq8327){
var G__8328 = cljs.core.first.call(null,seq8327);
var seq8327__$1 = cljs.core.next.call(null,seq8327);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8328,seq8327__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8362 = arguments.length;
var i__4532__auto___8363 = (0);
while(true){
if((i__4532__auto___8363 < len__4531__auto___8362)){
args__4534__auto__.push((arguments[i__4532__auto___8363]));

var G__8364 = (i__4532__auto___8363 + (1));
i__4532__auto___8363 = G__8364;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8347){
var map__8348 = p__8347;
var map__8348__$1 = ((((!((map__8348 == null)))?(((((map__8348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8348):map__8348);
var x = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var recipes = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var n_factories = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8348,map__8348__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8350(s__8351){
return (new cljs.core.LazySeq(null,((function (map__8348,map__8348__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8351__$1 = s__8351;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8351__$1);
if(temp__5457__auto__){
var s__8351__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8351__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8351__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8353 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8352 = (0);
while(true){
if((i__8352 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8352);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8353,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8352,dx,i,c__4322__auto__,size__4323__auto__,b__8353,s__8351__$2,temp__5457__auto__,map__8348,map__8348__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8350_$_iter__8354(s__8355){
return (new cljs.core.LazySeq(null,((function (i__8352,dx,i,c__4322__auto__,size__4323__auto__,b__8353,s__8351__$2,temp__5457__auto__,map__8348,map__8348__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8355__$1 = s__8355;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8355__$1);
if(temp__5457__auto____$1){
var s__8355__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8355__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8355__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8357 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8356 = (0);
while(true){
if((i__8356 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8356);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8357,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8365 = (i__8356 + (1));
i__8356 = G__8365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8357),busmaker$main_bus$iter__8350_$_iter__8354.call(null,cljs.core.chunk_rest.call(null,s__8355__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8357),null);
}
} else {
var j = cljs.core.first.call(null,s__8355__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8350_$_iter__8354.call(null,cljs.core.rest.call(null,s__8355__$2)));
}
} else {
return null;
}
break;
}
});})(i__8352,dx,i,c__4322__auto__,size__4323__auto__,b__8353,s__8351__$2,temp__5457__auto__,map__8348,map__8348__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(i__8352,dx,i,c__4322__auto__,size__4323__auto__,b__8353,s__8351__$2,temp__5457__auto__,map__8348,map__8348__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8366 = (i__8352 + (1));
i__8352 = G__8366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8353),busmaker$main_bus$iter__8350.call(null,cljs.core.chunk_rest.call(null,s__8351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8353),null);
}
} else {
var i = cljs.core.first.call(null,s__8351__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8351__$2,temp__5457__auto__,map__8348,map__8348__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8350_$_iter__8358(s__8359){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8351__$2,temp__5457__auto__,map__8348,map__8348__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8359__$1 = s__8359;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8359__$1);
if(temp__5457__auto____$1){
var s__8359__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8359__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8359__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8361 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8360 = (0);
while(true){
if((i__8360 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8360);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8361,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8367 = (i__8360 + (1));
i__8360 = G__8367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8361),busmaker$main_bus$iter__8350_$_iter__8358.call(null,cljs.core.chunk_rest.call(null,s__8359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8361),null);
}
} else {
var j = cljs.core.first.call(null,s__8359__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8350_$_iter__8358.call(null,cljs.core.rest.call(null,s__8359__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8351__$2,temp__5457__auto__,map__8348,map__8348__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(dx,i,s__8351__$2,temp__5457__auto__,map__8348,map__8348__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__8350.call(null,cljs.core.rest.call(null,s__8351__$2)));
}
} else {
return null;
}
break;
}
});})(map__8348,map__8348__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(map__8348,map__8348__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq8346){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8346));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8376 = arguments.length;
var i__4532__auto___8377 = (0);
while(true){
if((i__4532__auto___8377 < len__4531__auto___8376)){
args__4534__auto__.push((arguments[i__4532__auto___8377]));

var G__8378 = (i__4532__auto___8377 + (1));
i__4532__auto___8377 = G__8378;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8369){
var map__8370 = p__8369;
var map__8370__$1 = ((((!((map__8370 == null)))?(((((map__8370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8370):map__8370);
var x = cljs.core.get.call(null,map__8370__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8370__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8370__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8370__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8370__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8370__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8370,map__8370__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8372(s__8373){
return (new cljs.core.LazySeq(null,((function (n,map__8370,map__8370__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__8373__$1 = s__8373;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8373__$1);
if(temp__5457__auto__){
var s__8373__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8373__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8373__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8375 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8374 = (0);
while(true){
if((i__8374 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8374);
cljs.core.chunk_append.call(null,b__8375,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8379 = (i__8374 + (1));
i__8374 = G__8379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8375),busmaker$main_bus$iter__8372.call(null,cljs.core.chunk_rest.call(null,s__8373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8375),null);
}
} else {
var i = cljs.core.first.call(null,s__8373__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8372.call(null,cljs.core.rest.call(null,s__8373__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8370,map__8370__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8370,map__8370__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8368){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8368));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8384 = arguments.length;
var i__4532__auto___8385 = (0);
while(true){
if((i__4532__auto___8385 < len__4531__auto___8384)){
args__4534__auto__.push((arguments[i__4532__auto___8385]));

var G__8386 = (i__4532__auto___8385 + (1));
i__4532__auto___8385 = G__8386;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8381){
var map__8382 = p__8381;
var map__8382__$1 = ((((!((map__8382 == null)))?(((((map__8382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8382):map__8382);
var x = cljs.core.get.call(null,map__8382__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8382__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8382__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8382__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8382__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8382__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8380){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8380));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8395 = arguments.length;
var i__4532__auto___8396 = (0);
while(true){
if((i__4532__auto___8396 < len__4531__auto___8395)){
args__4534__auto__.push((arguments[i__4532__auto___8396]));

var G__8397 = (i__4532__auto___8396 + (1));
i__4532__auto___8396 = G__8397;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8388){
var map__8389 = p__8388;
var map__8389__$1 = ((((!((map__8389 == null)))?(((((map__8389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8389):map__8389);
var x = cljs.core.get.call(null,map__8389__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8389__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8389__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8389__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8389__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8389,map__8389__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8391(s__8392){
return (new cljs.core.LazySeq(null,((function (map__8389,map__8389__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__8392__$1 = s__8392;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8392__$1);
if(temp__5457__auto__){
var s__8392__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8392__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8392__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8394 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8393 = (0);
while(true){
if((i__8393 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8393);
cljs.core.chunk_append.call(null,b__8394,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8398 = (i__8393 + (1));
i__8393 = G__8398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8394),busmaker$main_bus$iter__8391.call(null,cljs.core.chunk_rest.call(null,s__8392__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8394),null);
}
} else {
var i = cljs.core.first.call(null,s__8392__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8391.call(null,cljs.core.rest.call(null,s__8392__$2)));
}
} else {
return null;
}
break;
}
});})(map__8389,map__8389__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8389,map__8389__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8387){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8387));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8409 = arguments.length;
var i__4532__auto___8410 = (0);
while(true){
if((i__4532__auto___8410 < len__4531__auto___8409)){
args__4534__auto__.push((arguments[i__4532__auto___8410]));

var G__8411 = (i__4532__auto___8410 + (1));
i__4532__auto___8410 = G__8411;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8400){
var map__8401 = p__8400;
var map__8401__$1 = ((((!((map__8401 == null)))?(((((map__8401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8401):map__8401);
var x = cljs.core.get.call(null,map__8401__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8401__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8401__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8401__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8401,map__8401__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__8403(s__8404){
return (new cljs.core.LazySeq(null,((function (n,map__8401,map__8401__$1,x,y,input_index,bus_index){
return (function (){
var s__8404__$1 = s__8404;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8404__$1);
if(temp__5457__auto__){
var s__8404__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8404__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8404__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8406 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8405 = (0);
while(true){
if((i__8405 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8405);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8406,(function (){var G__8407 = cljs.core.mod.call(null,i,(3));
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
})());

var G__8413 = (i__8405 + (1));
i__8405 = G__8413;
continue;
} else {
var G__8414 = (i__8405 + (1));
i__8405 = G__8414;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8406),busmaker$main_bus$iter__8403.call(null,cljs.core.chunk_rest.call(null,s__8404__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8406),null);
}
} else {
var i = cljs.core.first.call(null,s__8404__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__8408 = cljs.core.mod.call(null,i,(3));
switch (G__8408) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8408)].join('')));

}
})(),busmaker$main_bus$iter__8403.call(null,cljs.core.rest.call(null,s__8404__$2)));
} else {
var G__8416 = cljs.core.rest.call(null,s__8404__$2);
s__8404__$1 = G__8416;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8401,map__8401__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__8401,map__8401__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8399){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8399));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8425 = arguments.length;
var i__4532__auto___8426 = (0);
while(true){
if((i__4532__auto___8426 < len__4531__auto___8425)){
args__4534__auto__.push((arguments[i__4532__auto___8426]));

var G__8427 = (i__4532__auto___8426 + (1));
i__4532__auto___8426 = G__8427;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8418){
var map__8419 = p__8418;
var map__8419__$1 = ((((!((map__8419 == null)))?(((((map__8419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8419):map__8419);
var x = cljs.core.get.call(null,map__8419__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8419__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8419__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8419__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8419,map__8419__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8421(s__8422){
return (new cljs.core.LazySeq(null,((function (map__8419,map__8419__$1,x,y,output_index,y_extension){
return (function (){
var s__8422__$1 = s__8422;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8422__$1);
if(temp__5457__auto__){
var s__8422__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8422__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8422__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8424 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8423 = (0);
while(true){
if((i__8423 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8423);
cljs.core.chunk_append.call(null,b__8424,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

var G__8428 = (i__8423 + (1));
i__8423 = G__8428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8424),busmaker$main_bus$iter__8421.call(null,cljs.core.chunk_rest.call(null,s__8422__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8424),null);
}
} else {
var i = cljs.core.first.call(null,s__8422__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8421.call(null,cljs.core.rest.call(null,s__8422__$2)));
}
} else {
return null;
}
break;
}
});})(map__8419,map__8419__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8419,map__8419__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})(),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8417){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8417));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8441 = arguments.length;
var i__4532__auto___8442 = (0);
while(true){
if((i__4532__auto___8442 < len__4531__auto___8441)){
args__4534__auto__.push((arguments[i__4532__auto___8442]));

var G__8443 = (i__4532__auto___8442 + (1));
i__4532__auto___8442 = G__8443;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8430){
var map__8431 = p__8430;
var map__8431__$1 = ((((!((map__8431 == null)))?(((((map__8431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8431):map__8431);
var x = cljs.core.get.call(null,map__8431__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8431__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8431__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8431__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8431,map__8431__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8433(s__8434){
return (new cljs.core.LazySeq(null,((function (n,map__8431,map__8431__$1,x,y,output_index,y_extension){
return (function (){
var s__8434__$1 = s__8434;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8434__$1);
if(temp__5457__auto__){
var s__8434__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8434__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8434__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8436 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8435 = (0);
while(true){
if((i__8435 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8435);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8436,(((i >= n))?(function (){var G__8437 = cljs.core.mod.call(null,i,(3));
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
})()));

var G__8446 = (i__8435 + (1));
i__8435 = G__8446;
continue;
} else {
var G__8447 = (i__8435 + (1));
i__8435 = G__8447;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8436),busmaker$main_bus$iter__8433.call(null,cljs.core.chunk_rest.call(null,s__8434__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8436),null);
}
} else {
var i = cljs.core.first.call(null,s__8434__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8439 = cljs.core.mod.call(null,i,(3));
switch (G__8439) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8439)].join('')));

}
})():(function (){var G__8440 = cljs.core.mod.call(null,i,(3));
switch (G__8440) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8440)].join('')));

}
})()),busmaker$main_bus$iter__8433.call(null,cljs.core.rest.call(null,s__8434__$2)));
} else {
var G__8450 = cljs.core.rest.call(null,s__8434__$2);
s__8434__$1 = G__8450;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8431,map__8431__$1,x,y,output_index,y_extension))
,null,null));
});})(n,map__8431,map__8431__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8429){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8429));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
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
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8452){
var map__8453 = p__8452;
var map__8453__$1 = ((((!((map__8453 == null)))?(((((map__8453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8453):map__8453);
var x = cljs.core.get.call(null,map__8453__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8453__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8453__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8453__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8451){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8451));
});

busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name,facility){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"advanced-oil-processing":recipe_name);
var G__8458 = busmaker.recipes.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipe_data.recipes,recipe_name__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))){
return cljs.core.conj.call(null,G__8458,"coal");
} else {
return G__8458;
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
var len__4531__auto___8570 = arguments.length;
var i__4532__auto___8571 = (0);
while(true){
if((i__4532__auto___8571 < len__4531__auto___8570)){
args__4534__auto__.push((arguments[i__4532__auto___8571]));

var G__8572 = (i__4532__auto___8571 + (1));
i__4532__auto___8571 = G__8572;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8462){
var map__8463 = p__8462;
var map__8463__$1 = ((((!((map__8463 == null)))?(((((map__8463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8463):map__8463);
var x = cljs.core.get.call(null,map__8463__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8463__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var n_factories = cljs.core.get.call(null,map__8463__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8463__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipes = cljs.core.get.call(null,map__8463__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var buses = cljs.core.get.call(null,map__8463__$1,new cljs.core.Keyword(null,"buses","buses",214650120));
var input_indexes = cljs.core.get.call(null,map__8463__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ingredient = cljs.core.first.call(null,recipes);
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (p1__8459_SHARP_,p2__8460_SHARP_){
return cljs.core.assoc.call(null,p1__8459_SHARP_,"entity_number",(p2__8460_SHARP_ + (1)));
});})(ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,(function (){var G__8465 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8466(s__8467){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8467__$1 = s__8467;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8467__$1);
if(temp__5457__auto__){
var s__8467__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8467__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8467__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8469 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8468 = (0);
while(true){
if((i__8468 < size__4323__auto__)){
var vec__8470 = cljs.core._nth.call(null,c__4322__auto__,i__8468);
var bus_ingredient = cljs.core.nth.call(null,vec__8470,(0),null);
var i = cljs.core.nth.call(null,vec__8470,(1),null);
cljs.core.chunk_append.call(null,b__8469,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})());

var G__8573 = (i__8468 + (1));
i__8468 = G__8573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8469),busmaker$main_bus$iter__8466.call(null,cljs.core.chunk_rest.call(null,s__8467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8469),null);
}
} else {
var vec__8473 = cljs.core.first.call(null,s__8467__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__8473,(0),null);
var i = cljs.core.nth.call(null,vec__8473,(1),null);
return cljs.core.cons.call(null,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})(),busmaker$main_bus$iter__8466.call(null,cljs.core.rest.call(null,s__8467__$2)));
}
} else {
return null;
}
break;
}
});})(ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
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
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8476(s__8477){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8477__$1 = s__8477;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8477__$1);
if(temp__5457__auto__){
var s__8477__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8477__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8477__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8479 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8478 = (0);
while(true){
if((i__8478 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8478);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8479,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__8574 = (i__8478 + (1));
i__8478 = G__8574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8479),busmaker$main_bus$iter__8476.call(null,cljs.core.chunk_rest.call(null,s__8477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8479),null);
}
} else {
var i = cljs.core.first.call(null,s__8477__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__8476.call(null,cljs.core.rest.call(null,s__8477__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8480(s__8481){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8481__$1 = s__8481;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8481__$1);
if(temp__5457__auto__){
var s__8481__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8481__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8481__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8483 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8482 = (0);
while(true){
if((i__8482 < size__4323__auto__)){
var vec__8484 = cljs.core._nth.call(null,c__4322__auto__,i__8482);
var input_index = cljs.core.nth.call(null,vec__8484,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8484,(1),null);
cljs.core.chunk_append.call(null,b__8483,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8482,x__$2,y__$3,y__$2,vec__8484,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8483,s__8481__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8480_$_iter__8487(s__8488){
return (new cljs.core.LazySeq(null,((function (i__8482,x__$2,y__$3,y__$2,vec__8484,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8483,s__8481__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8488__$1 = s__8488;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8488__$1);
if(temp__5457__auto____$1){
var s__8488__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8488__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8488__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8490 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8489 = (0);
while(true){
if((i__8489 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8489);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8490,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8575 = (i__8489 + (1));
i__8489 = G__8575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8490),busmaker$main_bus$iter__8480_$_iter__8487.call(null,cljs.core.chunk_rest.call(null,s__8488__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8490),null);
}
} else {
var i = cljs.core.first.call(null,s__8488__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8480_$_iter__8487.call(null,cljs.core.rest.call(null,s__8488__$2)));
}
} else {
return null;
}
break;
}
});})(i__8482,x__$2,y__$3,y__$2,vec__8484,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8483,s__8481__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8482,x__$2,y__$3,y__$2,vec__8484,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8483,s__8481__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__8576 = (i__8482 + (1));
i__8482 = G__8576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8483),busmaker$main_bus$iter__8480.call(null,cljs.core.chunk_rest.call(null,s__8481__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8483),null);
}
} else {
var vec__8491 = cljs.core.first.call(null,s__8481__$2);
var input_index = cljs.core.nth.call(null,vec__8491,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8491,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$3,y__$2,vec__8491,input_index,bus_index,s__8481__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8480_$_iter__8494(s__8495){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$3,y__$2,vec__8491,input_index,bus_index,s__8481__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8495__$1 = s__8495;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8495__$1);
if(temp__5457__auto____$1){
var s__8495__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8495__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8495__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8497 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8496 = (0);
while(true){
if((i__8496 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8496);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8577 = (i__8496 + (1));
i__8496 = G__8577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8497),busmaker$main_bus$iter__8480_$_iter__8494.call(null,cljs.core.chunk_rest.call(null,s__8495__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8497),null);
}
} else {
var i = cljs.core.first.call(null,s__8495__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8480_$_iter__8494.call(null,cljs.core.rest.call(null,s__8495__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$3,y__$2,vec__8491,input_index,bus_index,s__8481__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$2,y__$3,y__$2,vec__8491,input_index,bus_index,s__8481__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__8480.call(null,cljs.core.rest.call(null,s__8481__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8498(s__8499){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8499__$1 = s__8499;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8499__$1);
if(temp__5457__auto__){
var s__8499__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8499__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8499__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8501 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8500 = (0);
while(true){
if((i__8500 < size__4323__auto__)){
var vec__8502 = cljs.core._nth.call(null,c__4322__auto__,i__8500);
var output_recipe = cljs.core.nth.call(null,vec__8502,(0),null);
var output_index = cljs.core.nth.call(null,vec__8502,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8501,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8500,s__8499__$1,tap_x,x__$1,y__$1,vec__8502,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8501,s__8499__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8498_$_iter__8505(s__8506){
return (new cljs.core.LazySeq(null,((function (i__8500,s__8499__$1,tap_x,x__$1,y__$1,vec__8502,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8501,s__8499__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8506__$1 = s__8506;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8506__$1);
if(temp__5457__auto____$1){
var s__8506__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8506__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8506__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8508 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8507 = (0);
while(true){
if((i__8507 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8507);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8508,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8509 = cljs.core.mod.call(null,i,(3));
switch (G__8509) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8509)].join('')));

}
})()));

var G__8579 = (i__8507 + (1));
i__8507 = G__8579;
continue;
} else {
var G__8580 = (i__8507 + (1));
i__8507 = G__8580;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8508),busmaker$main_bus$iter__8498_$_iter__8505.call(null,cljs.core.chunk_rest.call(null,s__8506__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8508),null);
}
} else {
var i = cljs.core.first.call(null,s__8506__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8510 = cljs.core.mod.call(null,i,(3));
switch (G__8510) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8510)].join('')));

}
})()),busmaker$main_bus$iter__8498_$_iter__8505.call(null,cljs.core.rest.call(null,s__8506__$2)));
} else {
var G__8582 = cljs.core.rest.call(null,s__8506__$2);
s__8506__$1 = G__8582;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8500,s__8499__$1,tap_x,x__$1,y__$1,vec__8502,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8501,s__8499__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8500,s__8499__$1,tap_x,x__$1,y__$1,vec__8502,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8501,s__8499__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8583 = (i__8500 + (1));
i__8500 = G__8583;
continue;
} else {
var G__8584 = (i__8500 + (1));
i__8500 = G__8584;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8501),busmaker$main_bus$iter__8498.call(null,cljs.core.chunk_rest.call(null,s__8499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8501),null);
}
} else {
var vec__8511 = cljs.core.first.call(null,s__8499__$2);
var output_recipe = cljs.core.nth.call(null,vec__8511,(0),null);
var output_index = cljs.core.nth.call(null,vec__8511,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8499__$1,tap_x,x__$1,y__$1,vec__8511,output_recipe,output_index,s__8499__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8498_$_iter__8514(s__8515){
return (new cljs.core.LazySeq(null,((function (s__8499__$1,tap_x,x__$1,y__$1,vec__8511,output_recipe,output_index,s__8499__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8515__$1 = s__8515;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8515__$1);
if(temp__5457__auto____$1){
var s__8515__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8515__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8515__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8517 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8516 = (0);
while(true){
if((i__8516 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8516);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8517,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8518 = cljs.core.mod.call(null,i,(3));
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

var G__8586 = (i__8516 + (1));
i__8516 = G__8586;
continue;
} else {
var G__8587 = (i__8516 + (1));
i__8516 = G__8587;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8517),busmaker$main_bus$iter__8498_$_iter__8514.call(null,cljs.core.chunk_rest.call(null,s__8515__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8517),null);
}
} else {
var i = cljs.core.first.call(null,s__8515__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8519 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8498_$_iter__8514.call(null,cljs.core.rest.call(null,s__8515__$2)));
} else {
var G__8589 = cljs.core.rest.call(null,s__8515__$2);
s__8515__$1 = G__8589;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8499__$1,tap_x,x__$1,y__$1,vec__8511,output_recipe,output_index,s__8499__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8499__$1,tap_x,x__$1,y__$1,vec__8511,output_recipe,output_index,s__8499__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8498.call(null,cljs.core.rest.call(null,s__8499__$2)));
} else {
var G__8590 = cljs.core.rest.call(null,s__8499__$2);
s__8499__$1 = G__8590;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8520(s__8521){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8521__$1 = s__8521;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8521__$1);
if(temp__5457__auto__){
var s__8521__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8521__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8521__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8523 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8522 = (0);
while(true){
if((i__8522 < size__4323__auto__)){
var vec__8524 = cljs.core._nth.call(null,c__4322__auto__,i__8522);
var output_recipe = cljs.core.nth.call(null,vec__8524,(0),null);
var output_index = cljs.core.nth.call(null,vec__8524,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8523,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8522,s__8521__$1,tap_x,x__$1,y__$1,vec__8524,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8523,s__8521__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8520_$_iter__8527(s__8528){
return (new cljs.core.LazySeq(null,((function (i__8522,s__8521__$1,tap_x,x__$1,y__$1,vec__8524,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8523,s__8521__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8528__$1 = s__8528;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8528__$1);
if(temp__5457__auto____$1){
var s__8528__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8528__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8528__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8530 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8529 = (0);
while(true){
if((i__8529 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8529);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8530,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8531 = cljs.core.mod.call(null,i,(3));
switch (G__8531) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8531)].join('')));

}
})()));

var G__8592 = (i__8529 + (1));
i__8529 = G__8592;
continue;
} else {
var G__8593 = (i__8529 + (1));
i__8529 = G__8593;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8530),busmaker$main_bus$iter__8520_$_iter__8527.call(null,cljs.core.chunk_rest.call(null,s__8528__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8530),null);
}
} else {
var i = cljs.core.first.call(null,s__8528__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8532 = cljs.core.mod.call(null,i,(3));
switch (G__8532) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8532)].join('')));

}
})()),busmaker$main_bus$iter__8520_$_iter__8527.call(null,cljs.core.rest.call(null,s__8528__$2)));
} else {
var G__8595 = cljs.core.rest.call(null,s__8528__$2);
s__8528__$1 = G__8595;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8522,s__8521__$1,tap_x,x__$1,y__$1,vec__8524,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8523,s__8521__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8522,s__8521__$1,tap_x,x__$1,y__$1,vec__8524,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8523,s__8521__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})());

var G__8596 = (i__8522 + (1));
i__8522 = G__8596;
continue;
} else {
var G__8597 = (i__8522 + (1));
i__8522 = G__8597;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8523),busmaker$main_bus$iter__8520.call(null,cljs.core.chunk_rest.call(null,s__8521__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8523),null);
}
} else {
var vec__8533 = cljs.core.first.call(null,s__8521__$2);
var output_recipe = cljs.core.nth.call(null,vec__8533,(0),null);
var output_index = cljs.core.nth.call(null,vec__8533,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8521__$1,tap_x,x__$1,y__$1,vec__8533,output_recipe,output_index,s__8521__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8520_$_iter__8536(s__8537){
return (new cljs.core.LazySeq(null,((function (s__8521__$1,tap_x,x__$1,y__$1,vec__8533,output_recipe,output_index,s__8521__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8537__$1 = s__8537;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8537__$1);
if(temp__5457__auto____$1){
var s__8537__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8537__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8537__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8539 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8538 = (0);
while(true){
if((i__8538 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8538);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8539,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8540 = cljs.core.mod.call(null,i,(3));
switch (G__8540) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8540)].join('')));

}
})()));

var G__8599 = (i__8538 + (1));
i__8538 = G__8599;
continue;
} else {
var G__8600 = (i__8538 + (1));
i__8538 = G__8600;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8539),busmaker$main_bus$iter__8520_$_iter__8536.call(null,cljs.core.chunk_rest.call(null,s__8537__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8539),null);
}
} else {
var i = cljs.core.first.call(null,s__8537__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8541 = cljs.core.mod.call(null,i,(3));
switch (G__8541) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8541)].join('')));

}
})()),busmaker$main_bus$iter__8520_$_iter__8536.call(null,cljs.core.rest.call(null,s__8537__$2)));
} else {
var G__8602 = cljs.core.rest.call(null,s__8537__$2);
s__8537__$1 = G__8602;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8521__$1,tap_x,x__$1,y__$1,vec__8533,output_recipe,output_index,s__8521__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8521__$1,tap_x,x__$1,y__$1,vec__8533,output_recipe,output_index,s__8521__$2,temp__5457__auto__,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})(),busmaker$main_bus$iter__8520.call(null,cljs.core.rest.call(null,s__8521__$2)));
} else {
var G__8603 = cljs.core.rest.call(null,s__8521__$2);
s__8521__$1 = G__8603;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__8465__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8465,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var output_index = buses.call(null,ingredient);
var iter__4324__auto__ = ((function (x__$1,y__$1,output_index,G__8465,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8542(s__8543){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,output_index,G__8465,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8543__$1 = s__8543;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8543__$1);
if(temp__5457__auto__){
var s__8543__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8543__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8543__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8545 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8544 = (0);
while(true){
if((i__8544 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8544);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
cljs.core.chunk_append.call(null,b__8545,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)));

var G__8604 = (i__8544 + (1));
i__8544 = G__8604;
continue;
} else {
var G__8605 = (i__8544 + (1));
i__8544 = G__8605;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8545),busmaker$main_bus$iter__8542.call(null,cljs.core.chunk_rest.call(null,s__8543__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8545),null);
}
} else {
var i = cljs.core.first.call(null,s__8543__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)),busmaker$main_bus$iter__8542.call(null,cljs.core.rest.call(null,s__8543__$2)));
} else {
var G__8606 = cljs.core.rest.call(null,s__8543__$2);
s__8543__$1 = G__8606;
continue;
}
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,output_index,G__8465,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,output_index,G__8465,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8465);
var G__8465__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))?cljs.core.concat.call(null,G__8465__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8465,G__8465__$1,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8546(s__8547){
return (new cljs.core.LazySeq(null,((function (G__8465,G__8465__$1,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8547__$1 = s__8547;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8547__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8547__$1,i,xs__6012__auto__,temp__5457__auto__,G__8465,G__8465__$1,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8546_$_iter__8548(s__8549){
return (new cljs.core.LazySeq(null,((function (s__8547__$1,i,xs__6012__auto__,temp__5457__auto__,G__8465,G__8465__$1,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8549__$1 = s__8549;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8549__$1);
if(temp__5457__auto____$1){
var s__8549__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8549__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8549__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8551 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8550 = (0);
while(true){
if((i__8550 < size__4323__auto__)){
var vec__8552 = cljs.core._nth.call(null,c__4322__auto__,i__8550);
var input_recipe = cljs.core.nth.call(null,vec__8552,(0),null);
var input_index = cljs.core.nth.call(null,vec__8552,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8551,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8607 = (i__8550 + (1));
i__8550 = G__8607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8551),busmaker$main_bus$iter__8546_$_iter__8548.call(null,cljs.core.chunk_rest.call(null,s__8549__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8551),null);
}
} else {
var vec__8555 = cljs.core.first.call(null,s__8549__$2);
var input_recipe = cljs.core.nth.call(null,vec__8555,(0),null);
var input_index = cljs.core.nth.call(null,vec__8555,(1),null);
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
)),args))))),busmaker$main_bus$iter__8546_$_iter__8548.call(null,cljs.core.rest.call(null,s__8549__$2)));
}
} else {
return null;
}
break;
}
});})(s__8547__$1,i,xs__6012__auto__,temp__5457__auto__,G__8465,G__8465__$1,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8547__$1,i,xs__6012__auto__,temp__5457__auto__,G__8465,G__8465__$1,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8546.call(null,cljs.core.rest.call(null,s__8547__$1)));
} else {
var G__8608 = cljs.core.rest.call(null,s__8547__$1);
s__8547__$1 = G__8608;
continue;
}
} else {
return null;
}
break;
}
});})(G__8465,G__8465__$1,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(G__8465,G__8465__$1,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8465__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8465__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$1,x__$1,G__8465,G__8465__$1,G__8465__$2,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8558(s__8559){
return (new cljs.core.LazySeq(null,((function (y__$1,x__$1,G__8465,G__8465__$1,G__8465__$2,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8559__$1 = s__8559;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8559__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8559__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8465,G__8465__$1,G__8465__$2,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8558_$_iter__8560(s__8561){
return (new cljs.core.LazySeq(null,((function (s__8559__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8465,G__8465__$1,G__8465__$2,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8561__$1 = s__8561;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8561__$1);
if(temp__5457__auto____$1){
var s__8561__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8561__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8561__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8563 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8562 = (0);
while(true){
if((i__8562 < size__4323__auto__)){
var vec__8564 = cljs.core._nth.call(null,c__4322__auto__,i__8562);
var output_recipe = cljs.core.nth.call(null,vec__8564,(0),null);
var output_index = cljs.core.nth.call(null,vec__8564,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8563,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8609 = (i__8562 + (1));
i__8562 = G__8609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8563),busmaker$main_bus$iter__8558_$_iter__8560.call(null,cljs.core.chunk_rest.call(null,s__8561__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8563),null);
}
} else {
var vec__8567 = cljs.core.first.call(null,s__8561__$2);
var output_recipe = cljs.core.nth.call(null,vec__8567,(0),null);
var output_index = cljs.core.nth.call(null,vec__8567,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8558_$_iter__8560.call(null,cljs.core.rest.call(null,s__8561__$2)));
}
} else {
return null;
}
break;
}
});})(s__8559__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8465,G__8465__$1,G__8465__$2,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8559__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8465,G__8465__$1,G__8465__$2,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8558.call(null,cljs.core.rest.call(null,s__8559__$1)));
} else {
var G__8610 = cljs.core.rest.call(null,s__8559__$1);
s__8559__$1 = G__8610;
continue;
}
} else {
return null;
}
break;
}
});})(y__$1,x__$1,G__8465,G__8465__$1,G__8465__$2,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(y__$1,x__$1,G__8465,G__8465__$1,G__8465__$2,ingredient,map__8463,map__8463__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8465__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8461){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8461));
});

busmaker.main_bus.raw_QMARK_ = (function busmaker$main_bus$raw_QMARK_(recipe_name){
return cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,recipe_name);
});
busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(factories,bus_outputs){
var bus_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (bus_index){
return (function (p__8611,factory){
var map__8612 = p__8611;
var map__8612__$1 = ((((!((map__8612 == null)))?(((((map__8612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8612):map__8612);
var acc = map__8612__$1;
var x = cljs.core.get.call(null,map__8612__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8612__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__8614 = factory;
var map__8614__$1 = ((((!((map__8614 == null)))?(((((map__8614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8614):map__8614);
var facility = cljs.core.get.call(null,map__8614__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8614__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8614__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var height = busmaker.main_bus.ingredient_height.call(null,cljs.core.first.call(null,recipes),facility);
var input_indexes = cljs.core.map.call(null,bus_index,busmaker.main_bus.ingredients.call(null,cljs.core.first.call(null,recipes),facility));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_index,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["stone-furnace",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["assembling-machine-2",null,"chemical-plant",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
))),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,height);
});})(bus_index))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),factories)));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8616_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8616_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8616_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
