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
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__8228){
var vec__8229 = p__8228;
var x = cljs.core.nth.call(null,vec__8229,(0),null);
var y = cljs.core.nth.call(null,vec__8229,(1),null);
var G__8232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8232)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8232)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8232)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8232)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8232)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__8233){
var vec__8234 = p__8233;
var x = cljs.core.nth.call(null,vec__8234,(0),null);
var y = cljs.core.nth.call(null,vec__8234,(1),null);
var G__8237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8237)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8237)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8237)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8237)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8237)].join('')));

}
}
}
}
});
busmaker.main_bus.underground_belt = (function busmaker$main_bus$underground_belt(var_args){
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
return busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8239){
var map__8240 = p__8239;
var map__8240__$1 = ((((!((map__8240 == null)))?(((((map__8240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8240):map__8240);
var x = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8240__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.underground_belt.cljs$lang$applyTo = (function (seq8238){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8238));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
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
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8246){
var map__8247 = p__8246;
var map__8247__$1 = ((((!((map__8247 == null)))?(((((map__8247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8247):map__8247);
var x = cljs.core.get.call(null,map__8247__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8247__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8247__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8247__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8245){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8245));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
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
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8253){
var map__8254 = p__8253;
var map__8254__$1 = ((((!((map__8254 == null)))?(((((map__8254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8254):map__8254);
var x = cljs.core.get.call(null,map__8254__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8254__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8254__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8252){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8252));
});

busmaker.main_bus.transport_belt = (function busmaker$main_bus$transport_belt(var_args){
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
return busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8260){
var map__8261 = p__8260;
var map__8261__$1 = ((((!((map__8261 == null)))?(((((map__8261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8261):map__8261);
var x = cljs.core.get.call(null,map__8261__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8261__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8261__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.transport_belt.cljs$lang$applyTo = (function (seq8259){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8259));
});

busmaker.main_bus.small_electric_pole = (function busmaker$main_bus$small_electric_pole(var_args){
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
return busmaker.main_bus.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8267){
var map__8268 = p__8267;
var map__8268__$1 = ((((!((map__8268 == null)))?(((((map__8268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8268):map__8268);
var x = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8268__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","small-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.small_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.small_electric_pole.cljs$lang$applyTo = (function (seq8266){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8266));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8277 = arguments.length;
var i__4532__auto___8278 = (0);
while(true){
if((i__4532__auto___8278 < len__4531__auto___8277)){
args__4534__auto__.push((arguments[i__4532__auto___8278]));

var G__8279 = (i__4532__auto___8278 + (1));
i__4532__auto___8278 = G__8279;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8274){
var map__8275 = p__8274;
var map__8275__$1 = ((((!((map__8275 == null)))?(((((map__8275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8275):map__8275);
var x = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq8273){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8273));
});

busmaker.main_bus.inserter = (function busmaker$main_bus$inserter(var_args){
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
return busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8281){
var map__8282 = p__8281;
var map__8282__$1 = ((((!((map__8282 == null)))?(((((map__8282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8282):map__8282);
var x = cljs.core.get.call(null,map__8282__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8282__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8282__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.inserter.cljs$lang$applyTo = (function (seq8280){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8280));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8291 = arguments.length;
var i__4532__auto___8292 = (0);
while(true){
if((i__4532__auto___8292 < len__4531__auto___8291)){
args__4534__auto__.push((arguments[i__4532__auto___8292]));

var G__8293 = (i__4532__auto___8292 + (1));
i__4532__auto___8292 = G__8293;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8288){
var map__8289 = p__8288;
var map__8289__$1 = ((((!((map__8289 == null)))?(((((map__8289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8289):map__8289);
var x = cljs.core.get.call(null,map__8289__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8289__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8289__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8287){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8287));
});

busmaker.main_bus.factory = (function busmaker$main_bus$factory(var_args){
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
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8295){
var map__8296 = p__8295;
var map__8296__$1 = ((((!((map__8296 == null)))?(((((map__8296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8296):map__8296);
var x = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
return new cljs.core.PersistentArrayMap(null, 4, ["name",facility,"recipe",busmaker.recipes.recipe_type.call(null,recipe),"position",new cljs.core.PersistentArrayMap(null, 2, ["x",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(x + 0.5):(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,recipe));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["battery",null,"sulfur",null,"sulfuric-acid",null,"lubricant",null], null), null).call(null,recipe);
}
})())?x:(x - (1))
)),"y",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(y + 0.5):y
)], null),"direction",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?busmaker.main_bus.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)):busmaker.main_bus.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))
)], null);
});

busmaker.main_bus.factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq8294){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8294));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8313 = arguments.length;
var i__4532__auto___8314 = (0);
while(true){
if((i__4532__auto___8314 < len__4531__auto___8313)){
args__4534__auto__.push((arguments[i__4532__auto___8314]));

var G__8315 = (i__4532__auto___8314 + (1));
i__4532__auto___8314 = G__8315;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8302){
var map__8303 = p__8302;
var map__8303__$1 = ((((!((map__8303 == null)))?(((((map__8303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8303):map__8303);
var x = cljs.core.get.call(null,map__8303__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8303__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__8303__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8303,map__8303__$1,x,y,length){
return (function busmaker$main_bus$iter__8305(s__8306){
return (new cljs.core.LazySeq(null,((function (map__8303,map__8303__$1,x,y,length){
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
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8308,(((i <= (1)))?(function (){var G__8309 = cljs.core.mod.call(null,i,(3));
switch (G__8309) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8309)].join('')));

}
})():(function (){var G__8310 = cljs.core.mod.call(null,i,(3));
switch (G__8310) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8310)].join('')));

}
})()));

var G__8318 = (i__8307 + (1));
i__8307 = G__8318;
continue;
} else {
var G__8319 = (i__8307 + (1));
i__8307 = G__8319;
continue;
}
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
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__8311 = cljs.core.mod.call(null,i,(3));
switch (G__8311) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8311)].join('')));

}
})():(function (){var G__8312 = cljs.core.mod.call(null,i,(3));
switch (G__8312) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8312)].join('')));

}
})()),busmaker$main_bus$iter__8305.call(null,cljs.core.rest.call(null,s__8306__$2)));
} else {
var G__8322 = cljs.core.rest.call(null,s__8306__$2);
s__8306__$1 = G__8322;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8303,map__8303__$1,x,y,length))
,null,null));
});})(map__8303,map__8303__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq8301){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8301));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8327 = arguments.length;
var i__4532__auto___8328 = (0);
while(true){
if((i__4532__auto___8328 < len__4531__auto___8327)){
args__4534__auto__.push((arguments[i__4532__auto___8328]));

var G__8329 = (i__4532__auto___8328 + (1));
i__4532__auto___8328 = G__8329;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8324){
var map__8325 = p__8324;
var map__8325__$1 = ((((!((map__8325 == null)))?(((((map__8325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8325):map__8325);
var x = cljs.core.get.call(null,map__8325__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8325__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8325__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8323){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8323));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8338 = arguments.length;
var i__4532__auto___8339 = (0);
while(true){
if((i__4532__auto___8339 < len__4531__auto___8338)){
args__4534__auto__.push((arguments[i__4532__auto___8339]));

var G__8340 = (i__4532__auto___8339 + (1));
i__4532__auto___8339 = G__8340;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8331){
var map__8332 = p__8331;
var map__8332__$1 = ((((!((map__8332 == null)))?(((((map__8332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8332):map__8332);
var x = cljs.core.get.call(null,map__8332__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8332__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8332__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8332,map__8332__$1,x,y,height){
return (function busmaker$main_bus$iter__8334(s__8335){
return (new cljs.core.LazySeq(null,((function (map__8332,map__8332__$1,x,y,height){
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
var i = cljs.core._nth.call(null,c__4322__auto__,i__8336);
cljs.core.chunk_append.call(null,b__8337,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8341 = (i__8336 + (1));
i__8336 = G__8341;
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
var i = cljs.core.first.call(null,s__8335__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8334.call(null,cljs.core.rest.call(null,s__8335__$2)));
}
} else {
return null;
}
break;
}
});})(map__8332,map__8332__$1,x,y,height))
,null,null));
});})(map__8332,map__8332__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8330){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8330));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8350 = arguments.length;
var i__4532__auto___8351 = (0);
while(true){
if((i__4532__auto___8351 < len__4531__auto___8350)){
args__4534__auto__.push((arguments[i__4532__auto___8351]));

var G__8352 = (i__4532__auto___8351 + (1));
i__4532__auto___8351 = G__8352;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8343){
var map__8344 = p__8343;
var map__8344__$1 = ((((!((map__8344 == null)))?(((((map__8344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8344):map__8344);
var x = cljs.core.get.call(null,map__8344__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8344__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8344__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8344,map__8344__$1,x,y,height){
return (function busmaker$main_bus$iter__8346(s__8347){
return (new cljs.core.LazySeq(null,((function (map__8344,map__8344__$1,x,y,height){
return (function (){
var s__8347__$1 = s__8347;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8347__$1);
if(temp__5457__auto__){
var s__8347__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8347__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8347__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8349 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8348 = (0);
while(true){
if((i__8348 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8348);
cljs.core.chunk_append.call(null,b__8349,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8353 = (i__8348 + (1));
i__8348 = G__8353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8349),busmaker$main_bus$iter__8346.call(null,cljs.core.chunk_rest.call(null,s__8347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8349),null);
}
} else {
var i = cljs.core.first.call(null,s__8347__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8346.call(null,cljs.core.rest.call(null,s__8347__$2)));
}
} else {
return null;
}
break;
}
});})(map__8344,map__8344__$1,x,y,height))
,null,null));
});})(map__8344,map__8344__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8342){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8342));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8369 = arguments.length;
var i__4532__auto___8370 = (0);
while(true){
if((i__4532__auto___8370 < len__4531__auto___8369)){
args__4534__auto__.push((arguments[i__4532__auto___8370]));

var G__8371 = (i__4532__auto___8370 + (1));
i__4532__auto___8370 = G__8371;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__8356){
var map__8357 = p__8356;
var map__8357__$1 = ((((!((map__8357 == null)))?(((((map__8357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8357):map__8357);
var x = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8357,map__8357__$1,x,y){
return (function busmaker$main_bus$iter__8359(s__8360){
return (new cljs.core.LazySeq(null,((function (map__8357,map__8357__$1,x,y){
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
var vec__8363 = cljs.core._nth.call(null,c__4322__auto__,i__8361);
var i = cljs.core.nth.call(null,vec__8363,(0),null);
var xi = cljs.core.nth.call(null,vec__8363,(1),null);
cljs.core.chunk_append.call(null,b__8362,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__8372 = (i__8361 + (1));
i__8361 = G__8372;
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
var vec__8366 = cljs.core.first.call(null,s__8360__$2);
var i = cljs.core.nth.call(null,vec__8366,(0),null);
var xi = cljs.core.nth.call(null,vec__8366,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__8359.call(null,cljs.core.rest.call(null,s__8360__$2)));
}
} else {
return null;
}
break;
}
});})(map__8357,map__8357__$1,x,y))
,null,null));
});})(map__8357,map__8357__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq8354){
var G__8355 = cljs.core.first.call(null,seq8354);
var seq8354__$1 = cljs.core.next.call(null,seq8354);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8355,seq8354__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8389 = arguments.length;
var i__4532__auto___8390 = (0);
while(true){
if((i__4532__auto___8390 < len__4531__auto___8389)){
args__4534__auto__.push((arguments[i__4532__auto___8390]));

var G__8391 = (i__4532__auto___8390 + (1));
i__4532__auto___8390 = G__8391;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8374){
var map__8375 = p__8374;
var map__8375__$1 = ((((!((map__8375 == null)))?(((((map__8375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8375):map__8375);
var x = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var recipes = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var n_factories = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8375__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8375,map__8375__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8377(s__8378){
return (new cljs.core.LazySeq(null,((function (map__8375,map__8375__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8378__$1 = s__8378;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8378__$1);
if(temp__5457__auto__){
var s__8378__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8378__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8378__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8380 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8379 = (0);
while(true){
if((i__8379 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8379);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8380,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8379,dx,i,c__4322__auto__,size__4323__auto__,b__8380,s__8378__$2,temp__5457__auto__,map__8375,map__8375__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8377_$_iter__8381(s__8382){
return (new cljs.core.LazySeq(null,((function (i__8379,dx,i,c__4322__auto__,size__4323__auto__,b__8380,s__8378__$2,temp__5457__auto__,map__8375,map__8375__$1,x,y,recipes,n_factories,facility){
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
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8383);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8384,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8392 = (i__8383 + (1));
i__8383 = G__8392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8384),busmaker$main_bus$iter__8377_$_iter__8381.call(null,cljs.core.chunk_rest.call(null,s__8382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8384),null);
}
} else {
var j = cljs.core.first.call(null,s__8382__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8377_$_iter__8381.call(null,cljs.core.rest.call(null,s__8382__$2)));
}
} else {
return null;
}
break;
}
});})(i__8379,dx,i,c__4322__auto__,size__4323__auto__,b__8380,s__8378__$2,temp__5457__auto__,map__8375,map__8375__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(i__8379,dx,i,c__4322__auto__,size__4323__auto__,b__8380,s__8378__$2,temp__5457__auto__,map__8375,map__8375__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8393 = (i__8379 + (1));
i__8379 = G__8393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8380),busmaker$main_bus$iter__8377.call(null,cljs.core.chunk_rest.call(null,s__8378__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8380),null);
}
} else {
var i = cljs.core.first.call(null,s__8378__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8378__$2,temp__5457__auto__,map__8375,map__8375__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8377_$_iter__8385(s__8386){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8378__$2,temp__5457__auto__,map__8375,map__8375__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8386__$1 = s__8386;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8386__$1);
if(temp__5457__auto____$1){
var s__8386__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8386__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8386__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8388 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8387 = (0);
while(true){
if((i__8387 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8387);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8388,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8394 = (i__8387 + (1));
i__8387 = G__8394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8388),busmaker$main_bus$iter__8377_$_iter__8385.call(null,cljs.core.chunk_rest.call(null,s__8386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8388),null);
}
} else {
var j = cljs.core.first.call(null,s__8386__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8377_$_iter__8385.call(null,cljs.core.rest.call(null,s__8386__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8378__$2,temp__5457__auto__,map__8375,map__8375__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(dx,i,s__8378__$2,temp__5457__auto__,map__8375,map__8375__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__8377.call(null,cljs.core.rest.call(null,s__8378__$2)));
}
} else {
return null;
}
break;
}
});})(map__8375,map__8375__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(map__8375,map__8375__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq8373){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8373));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8403 = arguments.length;
var i__4532__auto___8404 = (0);
while(true){
if((i__4532__auto___8404 < len__4531__auto___8403)){
args__4534__auto__.push((arguments[i__4532__auto___8404]));

var G__8405 = (i__4532__auto___8404 + (1));
i__4532__auto___8404 = G__8405;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8396){
var map__8397 = p__8396;
var map__8397__$1 = ((((!((map__8397 == null)))?(((((map__8397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8397):map__8397);
var x = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8397__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8397,map__8397__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8399(s__8400){
return (new cljs.core.LazySeq(null,((function (n,map__8397,map__8397__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__8400__$1 = s__8400;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8400__$1);
if(temp__5457__auto__){
var s__8400__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8400__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8400__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8402 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8401 = (0);
while(true){
if((i__8401 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8401);
cljs.core.chunk_append.call(null,b__8402,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8406 = (i__8401 + (1));
i__8401 = G__8406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),busmaker$main_bus$iter__8399.call(null,cljs.core.chunk_rest.call(null,s__8400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),null);
}
} else {
var i = cljs.core.first.call(null,s__8400__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8399.call(null,cljs.core.rest.call(null,s__8400__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8397,map__8397__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8397,map__8397__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8395){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8395));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8411 = arguments.length;
var i__4532__auto___8412 = (0);
while(true){
if((i__4532__auto___8412 < len__4531__auto___8411)){
args__4534__auto__.push((arguments[i__4532__auto___8412]));

var G__8413 = (i__4532__auto___8412 + (1));
i__4532__auto___8412 = G__8413;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8408){
var map__8409 = p__8408;
var map__8409__$1 = ((((!((map__8409 == null)))?(((((map__8409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8409):map__8409);
var x = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8407){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8407));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8422 = arguments.length;
var i__4532__auto___8423 = (0);
while(true){
if((i__4532__auto___8423 < len__4531__auto___8422)){
args__4534__auto__.push((arguments[i__4532__auto___8423]));

var G__8424 = (i__4532__auto___8423 + (1));
i__4532__auto___8423 = G__8424;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8415){
var map__8416 = p__8415;
var map__8416__$1 = ((((!((map__8416 == null)))?(((((map__8416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8416):map__8416);
var x = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8416,map__8416__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8418(s__8419){
return (new cljs.core.LazySeq(null,((function (map__8416,map__8416__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__8419__$1 = s__8419;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8419__$1);
if(temp__5457__auto__){
var s__8419__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8419__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8419__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8421 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8420 = (0);
while(true){
if((i__8420 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8420);
cljs.core.chunk_append.call(null,b__8421,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8425 = (i__8420 + (1));
i__8420 = G__8425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8421),busmaker$main_bus$iter__8418.call(null,cljs.core.chunk_rest.call(null,s__8419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8421),null);
}
} else {
var i = cljs.core.first.call(null,s__8419__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8418.call(null,cljs.core.rest.call(null,s__8419__$2)));
}
} else {
return null;
}
break;
}
});})(map__8416,map__8416__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8416,map__8416__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8414){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8414));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8436 = arguments.length;
var i__4532__auto___8437 = (0);
while(true){
if((i__4532__auto___8437 < len__4531__auto___8436)){
args__4534__auto__.push((arguments[i__4532__auto___8437]));

var G__8438 = (i__4532__auto___8437 + (1));
i__4532__auto___8437 = G__8438;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8427){
var map__8428 = p__8427;
var map__8428__$1 = ((((!((map__8428 == null)))?(((((map__8428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8428):map__8428);
var x = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8428,map__8428__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__8430(s__8431){
return (new cljs.core.LazySeq(null,((function (n,map__8428,map__8428__$1,x,y,input_index,bus_index){
return (function (){
var s__8431__$1 = s__8431;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8431__$1);
if(temp__5457__auto__){
var s__8431__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8431__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8431__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8433 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8432 = (0);
while(true){
if((i__8432 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8432);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8433,(function (){var G__8434 = cljs.core.mod.call(null,i,(3));
switch (G__8434) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8434)].join('')));

}
})());

var G__8440 = (i__8432 + (1));
i__8432 = G__8440;
continue;
} else {
var G__8441 = (i__8432 + (1));
i__8432 = G__8441;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8433),busmaker$main_bus$iter__8430.call(null,cljs.core.chunk_rest.call(null,s__8431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8433),null);
}
} else {
var i = cljs.core.first.call(null,s__8431__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__8435 = cljs.core.mod.call(null,i,(3));
switch (G__8435) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8435)].join('')));

}
})(),busmaker$main_bus$iter__8430.call(null,cljs.core.rest.call(null,s__8431__$2)));
} else {
var G__8443 = cljs.core.rest.call(null,s__8431__$2);
s__8431__$1 = G__8443;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8428,map__8428__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__8428,map__8428__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8426){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8426));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8452 = arguments.length;
var i__4532__auto___8453 = (0);
while(true){
if((i__4532__auto___8453 < len__4531__auto___8452)){
args__4534__auto__.push((arguments[i__4532__auto___8453]));

var G__8454 = (i__4532__auto___8453 + (1));
i__4532__auto___8453 = G__8454;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8445){
var map__8446 = p__8445;
var map__8446__$1 = ((((!((map__8446 == null)))?(((((map__8446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8446):map__8446);
var x = cljs.core.get.call(null,map__8446__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8446__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8446__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8446__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8446,map__8446__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8448(s__8449){
return (new cljs.core.LazySeq(null,((function (map__8446,map__8446__$1,x,y,output_index,y_extension){
return (function (){
var s__8449__$1 = s__8449;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8449__$1);
if(temp__5457__auto__){
var s__8449__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8449__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8449__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8451 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8450 = (0);
while(true){
if((i__8450 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8450);
cljs.core.chunk_append.call(null,b__8451,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

var G__8455 = (i__8450 + (1));
i__8450 = G__8455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8451),busmaker$main_bus$iter__8448.call(null,cljs.core.chunk_rest.call(null,s__8449__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8451),null);
}
} else {
var i = cljs.core.first.call(null,s__8449__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8448.call(null,cljs.core.rest.call(null,s__8449__$2)));
}
} else {
return null;
}
break;
}
});})(map__8446,map__8446__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8446,map__8446__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})(),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8444){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8444));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8468 = arguments.length;
var i__4532__auto___8469 = (0);
while(true){
if((i__4532__auto___8469 < len__4531__auto___8468)){
args__4534__auto__.push((arguments[i__4532__auto___8469]));

var G__8470 = (i__4532__auto___8469 + (1));
i__4532__auto___8469 = G__8470;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8457){
var map__8458 = p__8457;
var map__8458__$1 = ((((!((map__8458 == null)))?(((((map__8458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8458):map__8458);
var x = cljs.core.get.call(null,map__8458__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8458__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8458__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8458__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8458,map__8458__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8460(s__8461){
return (new cljs.core.LazySeq(null,((function (n,map__8458,map__8458__$1,x,y,output_index,y_extension){
return (function (){
var s__8461__$1 = s__8461;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8461__$1);
if(temp__5457__auto__){
var s__8461__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8461__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8461__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8463 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8462 = (0);
while(true){
if((i__8462 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8462);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8463,(((i >= n))?(function (){var G__8464 = cljs.core.mod.call(null,i,(3));
switch (G__8464) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8464)].join('')));

}
})():(function (){var G__8465 = cljs.core.mod.call(null,i,(3));
switch (G__8465) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8465)].join('')));

}
})()));

var G__8473 = (i__8462 + (1));
i__8462 = G__8473;
continue;
} else {
var G__8474 = (i__8462 + (1));
i__8462 = G__8474;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8463),busmaker$main_bus$iter__8460.call(null,cljs.core.chunk_rest.call(null,s__8461__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8463),null);
}
} else {
var i = cljs.core.first.call(null,s__8461__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8466 = cljs.core.mod.call(null,i,(3));
switch (G__8466) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8466)].join('')));

}
})():(function (){var G__8467 = cljs.core.mod.call(null,i,(3));
switch (G__8467) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8467)].join('')));

}
})()),busmaker$main_bus$iter__8460.call(null,cljs.core.rest.call(null,s__8461__$2)));
} else {
var G__8477 = cljs.core.rest.call(null,s__8461__$2);
s__8461__$1 = G__8477;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8458,map__8458__$1,x,y,output_index,y_extension))
,null,null));
});})(n,map__8458,map__8458__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8456){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8456));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8482 = arguments.length;
var i__4532__auto___8483 = (0);
while(true){
if((i__4532__auto___8483 < len__4531__auto___8482)){
args__4534__auto__.push((arguments[i__4532__auto___8483]));

var G__8484 = (i__4532__auto___8483 + (1));
i__4532__auto___8483 = G__8484;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8479){
var map__8480 = p__8479;
var map__8480__$1 = ((((!((map__8480 == null)))?(((((map__8480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8480):map__8480);
var x = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8478){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8478));
});

busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name,facility){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"basic-oil-processing":recipe_name);
var G__8485 = busmaker.recipes.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipe_data.recipes,recipe_name__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))){
return cljs.core.conj.call(null,G__8485,"coal");
} else {
return G__8485;
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
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))){
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
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))){
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
var len__4531__auto___8597 = arguments.length;
var i__4532__auto___8598 = (0);
while(true){
if((i__4532__auto___8598 < len__4531__auto___8597)){
args__4534__auto__.push((arguments[i__4532__auto___8598]));

var G__8599 = (i__4532__auto___8598 + (1));
i__4532__auto___8598 = G__8599;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8489){
var map__8490 = p__8489;
var map__8490__$1 = ((((!((map__8490 == null)))?(((((map__8490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8490):map__8490);
var x = cljs.core.get.call(null,map__8490__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8490__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var n_factories = cljs.core.get.call(null,map__8490__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8490__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipes = cljs.core.get.call(null,map__8490__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var buses = cljs.core.get.call(null,map__8490__$1,new cljs.core.Keyword(null,"buses","buses",214650120));
var input_indexes = cljs.core.get.call(null,map__8490__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ingredient = cljs.core.first.call(null,recipes);
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (p1__8486_SHARP_,p2__8487_SHARP_){
return cljs.core.assoc.call(null,p1__8486_SHARP_,"entity_number",(p2__8487_SHARP_ + (1)));
});})(ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,(function (){var G__8492 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8493(s__8494){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8494__$1 = s__8494;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8494__$1);
if(temp__5457__auto__){
var s__8494__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8494__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8494__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8496 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8495 = (0);
while(true){
if((i__8495 < size__4323__auto__)){
var vec__8497 = cljs.core._nth.call(null,c__4322__auto__,i__8495);
var bus_ingredient = cljs.core.nth.call(null,vec__8497,(0),null);
var i = cljs.core.nth.call(null,vec__8497,(1),null);
cljs.core.chunk_append.call(null,b__8496,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})());

var G__8600 = (i__8495 + (1));
i__8495 = G__8600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8496),busmaker$main_bus$iter__8493.call(null,cljs.core.chunk_rest.call(null,s__8494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8496),null);
}
} else {
var vec__8500 = cljs.core.first.call(null,s__8494__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__8500,(0),null);
var i = cljs.core.nth.call(null,vec__8500,(1),null);
return cljs.core.cons.call(null,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})(),busmaker$main_bus$iter__8493.call(null,cljs.core.rest.call(null,s__8494__$2)));
}
} else {
return null;
}
break;
}
});})(ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
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
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8503(s__8504){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8504__$1 = s__8504;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8504__$1);
if(temp__5457__auto__){
var s__8504__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8504__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8504__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8506 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8505 = (0);
while(true){
if((i__8505 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8505);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8506,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__8601 = (i__8505 + (1));
i__8505 = G__8601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8506),busmaker$main_bus$iter__8503.call(null,cljs.core.chunk_rest.call(null,s__8504__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8506),null);
}
} else {
var i = cljs.core.first.call(null,s__8504__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__8503.call(null,cljs.core.rest.call(null,s__8504__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8507(s__8508){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
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
var input_index = cljs.core.nth.call(null,vec__8511,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8511,(1),null);
cljs.core.chunk_append.call(null,b__8510,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8509,x__$2,y__$3,y__$2,vec__8511,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8510,s__8508__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8507_$_iter__8514(s__8515){
return (new cljs.core.LazySeq(null,((function (i__8509,x__$2,y__$3,y__$2,vec__8511,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8510,s__8508__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
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
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8517,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8602 = (i__8516 + (1));
i__8516 = G__8602;
continue;
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
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8507_$_iter__8514.call(null,cljs.core.rest.call(null,s__8515__$2)));
}
} else {
return null;
}
break;
}
});})(i__8509,x__$2,y__$3,y__$2,vec__8511,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8510,s__8508__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8509,x__$2,y__$3,y__$2,vec__8511,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8510,s__8508__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__8603 = (i__8509 + (1));
i__8509 = G__8603;
continue;
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
var vec__8518 = cljs.core.first.call(null,s__8508__$2);
var input_index = cljs.core.nth.call(null,vec__8518,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8518,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$3,y__$2,vec__8518,input_index,bus_index,s__8508__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8507_$_iter__8521(s__8522){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$3,y__$2,vec__8518,input_index,bus_index,s__8508__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8522__$1 = s__8522;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8522__$1);
if(temp__5457__auto____$1){
var s__8522__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8522__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8522__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8524 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8523 = (0);
while(true){
if((i__8523 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8523);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8524,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8604 = (i__8523 + (1));
i__8523 = G__8604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8524),busmaker$main_bus$iter__8507_$_iter__8521.call(null,cljs.core.chunk_rest.call(null,s__8522__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8524),null);
}
} else {
var i = cljs.core.first.call(null,s__8522__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8507_$_iter__8521.call(null,cljs.core.rest.call(null,s__8522__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$3,y__$2,vec__8518,input_index,bus_index,s__8508__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$2,y__$3,y__$2,vec__8518,input_index,bus_index,s__8508__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__8507.call(null,cljs.core.rest.call(null,s__8508__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8525(s__8526){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8526__$1 = s__8526;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8526__$1);
if(temp__5457__auto__){
var s__8526__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8526__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8526__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8528 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8527 = (0);
while(true){
if((i__8527 < size__4323__auto__)){
var vec__8529 = cljs.core._nth.call(null,c__4322__auto__,i__8527);
var output_recipe = cljs.core.nth.call(null,vec__8529,(0),null);
var output_index = cljs.core.nth.call(null,vec__8529,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8528,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8527,s__8526__$1,tap_x,x__$1,y__$1,vec__8529,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8528,s__8526__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8525_$_iter__8532(s__8533){
return (new cljs.core.LazySeq(null,((function (i__8527,s__8526__$1,tap_x,x__$1,y__$1,vec__8529,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8528,s__8526__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8533__$1 = s__8533;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8533__$1);
if(temp__5457__auto____$1){
var s__8533__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8533__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8533__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8535 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8534 = (0);
while(true){
if((i__8534 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8534);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8535,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8536 = cljs.core.mod.call(null,i,(3));
switch (G__8536) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8536)].join('')));

}
})()));

var G__8606 = (i__8534 + (1));
i__8534 = G__8606;
continue;
} else {
var G__8607 = (i__8534 + (1));
i__8534 = G__8607;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8535),busmaker$main_bus$iter__8525_$_iter__8532.call(null,cljs.core.chunk_rest.call(null,s__8533__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8535),null);
}
} else {
var i = cljs.core.first.call(null,s__8533__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8537 = cljs.core.mod.call(null,i,(3));
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
})()),busmaker$main_bus$iter__8525_$_iter__8532.call(null,cljs.core.rest.call(null,s__8533__$2)));
} else {
var G__8609 = cljs.core.rest.call(null,s__8533__$2);
s__8533__$1 = G__8609;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8527,s__8526__$1,tap_x,x__$1,y__$1,vec__8529,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8528,s__8526__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8527,s__8526__$1,tap_x,x__$1,y__$1,vec__8529,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8528,s__8526__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8610 = (i__8527 + (1));
i__8527 = G__8610;
continue;
} else {
var G__8611 = (i__8527 + (1));
i__8527 = G__8611;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8528),busmaker$main_bus$iter__8525.call(null,cljs.core.chunk_rest.call(null,s__8526__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8528),null);
}
} else {
var vec__8538 = cljs.core.first.call(null,s__8526__$2);
var output_recipe = cljs.core.nth.call(null,vec__8538,(0),null);
var output_index = cljs.core.nth.call(null,vec__8538,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8526__$1,tap_x,x__$1,y__$1,vec__8538,output_recipe,output_index,s__8526__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8525_$_iter__8541(s__8542){
return (new cljs.core.LazySeq(null,((function (s__8526__$1,tap_x,x__$1,y__$1,vec__8538,output_recipe,output_index,s__8526__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8542__$1 = s__8542;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8542__$1);
if(temp__5457__auto____$1){
var s__8542__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8542__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8542__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8544 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8543 = (0);
while(true){
if((i__8543 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8543);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8544,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8545 = cljs.core.mod.call(null,i,(3));
switch (G__8545) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8545)].join('')));

}
})()));

var G__8613 = (i__8543 + (1));
i__8543 = G__8613;
continue;
} else {
var G__8614 = (i__8543 + (1));
i__8543 = G__8614;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8544),busmaker$main_bus$iter__8525_$_iter__8541.call(null,cljs.core.chunk_rest.call(null,s__8542__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8544),null);
}
} else {
var i = cljs.core.first.call(null,s__8542__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8546 = cljs.core.mod.call(null,i,(3));
switch (G__8546) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8546)].join('')));

}
})()),busmaker$main_bus$iter__8525_$_iter__8541.call(null,cljs.core.rest.call(null,s__8542__$2)));
} else {
var G__8616 = cljs.core.rest.call(null,s__8542__$2);
s__8542__$1 = G__8616;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8526__$1,tap_x,x__$1,y__$1,vec__8538,output_recipe,output_index,s__8526__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8526__$1,tap_x,x__$1,y__$1,vec__8538,output_recipe,output_index,s__8526__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8525.call(null,cljs.core.rest.call(null,s__8526__$2)));
} else {
var G__8617 = cljs.core.rest.call(null,s__8526__$2);
s__8526__$1 = G__8617;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8547(s__8548){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8548__$1 = s__8548;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8548__$1);
if(temp__5457__auto__){
var s__8548__$2 = temp__5457__auto__;
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
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8550,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8549,s__8548__$1,tap_x,x__$1,y__$1,vec__8551,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8550,s__8548__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8547_$_iter__8554(s__8555){
return (new cljs.core.LazySeq(null,((function (i__8549,s__8548__$1,tap_x,x__$1,y__$1,vec__8551,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8550,s__8548__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8555__$1 = s__8555;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8555__$1);
if(temp__5457__auto____$1){
var s__8555__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8555__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8555__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8557 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8556 = (0);
while(true){
if((i__8556 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8556);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8557,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8558 = cljs.core.mod.call(null,i,(3));
switch (G__8558) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8558)].join('')));

}
})()));

var G__8619 = (i__8556 + (1));
i__8556 = G__8619;
continue;
} else {
var G__8620 = (i__8556 + (1));
i__8556 = G__8620;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8557),busmaker$main_bus$iter__8547_$_iter__8554.call(null,cljs.core.chunk_rest.call(null,s__8555__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8557),null);
}
} else {
var i = cljs.core.first.call(null,s__8555__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8559 = cljs.core.mod.call(null,i,(3));
switch (G__8559) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8559)].join('')));

}
})()),busmaker$main_bus$iter__8547_$_iter__8554.call(null,cljs.core.rest.call(null,s__8555__$2)));
} else {
var G__8622 = cljs.core.rest.call(null,s__8555__$2);
s__8555__$1 = G__8622;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8549,s__8548__$1,tap_x,x__$1,y__$1,vec__8551,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8550,s__8548__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8549,s__8548__$1,tap_x,x__$1,y__$1,vec__8551,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8550,s__8548__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})());

var G__8623 = (i__8549 + (1));
i__8549 = G__8623;
continue;
} else {
var G__8624 = (i__8549 + (1));
i__8549 = G__8624;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8550),busmaker$main_bus$iter__8547.call(null,cljs.core.chunk_rest.call(null,s__8548__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8550),null);
}
} else {
var vec__8560 = cljs.core.first.call(null,s__8548__$2);
var output_recipe = cljs.core.nth.call(null,vec__8560,(0),null);
var output_index = cljs.core.nth.call(null,vec__8560,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8548__$1,tap_x,x__$1,y__$1,vec__8560,output_recipe,output_index,s__8548__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8547_$_iter__8563(s__8564){
return (new cljs.core.LazySeq(null,((function (s__8548__$1,tap_x,x__$1,y__$1,vec__8560,output_recipe,output_index,s__8548__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8564__$1 = s__8564;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8564__$1);
if(temp__5457__auto____$1){
var s__8564__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8564__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8564__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8566 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8565 = (0);
while(true){
if((i__8565 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8565);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8566,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8567 = cljs.core.mod.call(null,i,(3));
switch (G__8567) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8567)].join('')));

}
})()));

var G__8626 = (i__8565 + (1));
i__8565 = G__8626;
continue;
} else {
var G__8627 = (i__8565 + (1));
i__8565 = G__8627;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8566),busmaker$main_bus$iter__8547_$_iter__8563.call(null,cljs.core.chunk_rest.call(null,s__8564__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8566),null);
}
} else {
var i = cljs.core.first.call(null,s__8564__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8568 = cljs.core.mod.call(null,i,(3));
switch (G__8568) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8568)].join('')));

}
})()),busmaker$main_bus$iter__8547_$_iter__8563.call(null,cljs.core.rest.call(null,s__8564__$2)));
} else {
var G__8629 = cljs.core.rest.call(null,s__8564__$2);
s__8564__$1 = G__8629;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8548__$1,tap_x,x__$1,y__$1,vec__8560,output_recipe,output_index,s__8548__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8548__$1,tap_x,x__$1,y__$1,vec__8560,output_recipe,output_index,s__8548__$2,temp__5457__auto__,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})(),busmaker$main_bus$iter__8547.call(null,cljs.core.rest.call(null,s__8548__$2)));
} else {
var G__8630 = cljs.core.rest.call(null,s__8548__$2);
s__8548__$1 = G__8630;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__8492__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8492,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var output_index = buses.call(null,ingredient);
var iter__4324__auto__ = ((function (x__$1,y__$1,output_index,G__8492,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8569(s__8570){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,output_index,G__8492,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8570__$1 = s__8570;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8570__$1);
if(temp__5457__auto__){
var s__8570__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8570__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8570__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8572 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8571 = (0);
while(true){
if((i__8571 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8571);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
cljs.core.chunk_append.call(null,b__8572,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)));

var G__8631 = (i__8571 + (1));
i__8571 = G__8631;
continue;
} else {
var G__8632 = (i__8571 + (1));
i__8571 = G__8632;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8572),busmaker$main_bus$iter__8569.call(null,cljs.core.chunk_rest.call(null,s__8570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8572),null);
}
} else {
var i = cljs.core.first.call(null,s__8570__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)),busmaker$main_bus$iter__8569.call(null,cljs.core.rest.call(null,s__8570__$2)));
} else {
var G__8633 = cljs.core.rest.call(null,s__8570__$2);
s__8570__$1 = G__8633;
continue;
}
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,output_index,G__8492,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,output_index,G__8492,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8492);
var G__8492__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))?cljs.core.concat.call(null,G__8492__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8492,G__8492__$1,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8573(s__8574){
return (new cljs.core.LazySeq(null,((function (G__8492,G__8492__$1,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8574__$1 = s__8574;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8574__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8574__$1,i,xs__6012__auto__,temp__5457__auto__,G__8492,G__8492__$1,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8573_$_iter__8575(s__8576){
return (new cljs.core.LazySeq(null,((function (s__8574__$1,i,xs__6012__auto__,temp__5457__auto__,G__8492,G__8492__$1,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8576__$1 = s__8576;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8576__$1);
if(temp__5457__auto____$1){
var s__8576__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8576__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8576__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8578 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8577 = (0);
while(true){
if((i__8577 < size__4323__auto__)){
var vec__8579 = cljs.core._nth.call(null,c__4322__auto__,i__8577);
var input_recipe = cljs.core.nth.call(null,vec__8579,(0),null);
var input_index = cljs.core.nth.call(null,vec__8579,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8578,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8634 = (i__8577 + (1));
i__8577 = G__8634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8578),busmaker$main_bus$iter__8573_$_iter__8575.call(null,cljs.core.chunk_rest.call(null,s__8576__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8578),null);
}
} else {
var vec__8582 = cljs.core.first.call(null,s__8576__$2);
var input_recipe = cljs.core.nth.call(null,vec__8582,(0),null);
var input_index = cljs.core.nth.call(null,vec__8582,(1),null);
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
)),args))))),busmaker$main_bus$iter__8573_$_iter__8575.call(null,cljs.core.rest.call(null,s__8576__$2)));
}
} else {
return null;
}
break;
}
});})(s__8574__$1,i,xs__6012__auto__,temp__5457__auto__,G__8492,G__8492__$1,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8574__$1,i,xs__6012__auto__,temp__5457__auto__,G__8492,G__8492__$1,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8573.call(null,cljs.core.rest.call(null,s__8574__$1)));
} else {
var G__8635 = cljs.core.rest.call(null,s__8574__$1);
s__8574__$1 = G__8635;
continue;
}
} else {
return null;
}
break;
}
});})(G__8492,G__8492__$1,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(G__8492,G__8492__$1,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8492__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8492__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$1,x__$1,G__8492,G__8492__$1,G__8492__$2,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8585(s__8586){
return (new cljs.core.LazySeq(null,((function (y__$1,x__$1,G__8492,G__8492__$1,G__8492__$2,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8586__$1 = s__8586;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8586__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8586__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8492,G__8492__$1,G__8492__$2,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8585_$_iter__8587(s__8588){
return (new cljs.core.LazySeq(null,((function (s__8586__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8492,G__8492__$1,G__8492__$2,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8588__$1 = s__8588;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8588__$1);
if(temp__5457__auto____$1){
var s__8588__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8588__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8588__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8590 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8589 = (0);
while(true){
if((i__8589 < size__4323__auto__)){
var vec__8591 = cljs.core._nth.call(null,c__4322__auto__,i__8589);
var output_recipe = cljs.core.nth.call(null,vec__8591,(0),null);
var output_index = cljs.core.nth.call(null,vec__8591,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8590,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8636 = (i__8589 + (1));
i__8589 = G__8636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8590),busmaker$main_bus$iter__8585_$_iter__8587.call(null,cljs.core.chunk_rest.call(null,s__8588__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8590),null);
}
} else {
var vec__8594 = cljs.core.first.call(null,s__8588__$2);
var output_recipe = cljs.core.nth.call(null,vec__8594,(0),null);
var output_index = cljs.core.nth.call(null,vec__8594,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8585_$_iter__8587.call(null,cljs.core.rest.call(null,s__8588__$2)));
}
} else {
return null;
}
break;
}
});})(s__8586__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8492,G__8492__$1,G__8492__$2,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8586__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8492,G__8492__$1,G__8492__$2,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8585.call(null,cljs.core.rest.call(null,s__8586__$1)));
} else {
var G__8637 = cljs.core.rest.call(null,s__8586__$1);
s__8586__$1 = G__8637;
continue;
}
} else {
return null;
}
break;
}
});})(y__$1,x__$1,G__8492,G__8492__$1,G__8492__$2,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(y__$1,x__$1,G__8492,G__8492__$1,G__8492__$2,ingredient,map__8490,map__8490__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8492__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8488){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8488));
});

busmaker.main_bus.raw_QMARK_ = (function busmaker$main_bus$raw_QMARK_(recipe_name){
return cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,recipe_name);
});
busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(factories,bus_outputs){
var bus_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (bus_index){
return (function (p__8638,factory){
var map__8639 = p__8638;
var map__8639__$1 = ((((!((map__8639 == null)))?(((((map__8639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8639):map__8639);
var acc = map__8639__$1;
var x = cljs.core.get.call(null,map__8639__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8639__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__8641 = factory;
var map__8641__$1 = ((((!((map__8641 == null)))?(((((map__8641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8641):map__8641);
var facility = cljs.core.get.call(null,map__8641__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8641__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8641__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var height = busmaker.main_bus.ingredient_height.call(null,cljs.core.first.call(null,recipes),facility);
var input_indexes = cljs.core.map.call(null,bus_index,busmaker.main_bus.ingredients.call(null,cljs.core.first.call(null,recipes),facility));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_index,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["assembling-machine-2",null,"chemical-plant",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
))),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,height);
});})(bus_index))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),factories)));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8643_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8643_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8643_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
