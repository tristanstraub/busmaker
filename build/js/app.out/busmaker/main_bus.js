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
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__8204){
var vec__8205 = p__8204;
var x = cljs.core.nth.call(null,vec__8205,(0),null);
var y = cljs.core.nth.call(null,vec__8205,(1),null);
var G__8208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8208)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8208)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8208)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8208)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8208)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__8209){
var vec__8210 = p__8209;
var x = cljs.core.nth.call(null,vec__8210,(0),null);
var y = cljs.core.nth.call(null,vec__8210,(1),null);
var G__8213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8213)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8213)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8213)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8213)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8213)].join('')));

}
}
}
}
});
busmaker.main_bus.underground_belt = (function busmaker$main_bus$underground_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8218 = arguments.length;
var i__4532__auto___8219 = (0);
while(true){
if((i__4532__auto___8219 < len__4531__auto___8218)){
args__4534__auto__.push((arguments[i__4532__auto___8219]));

var G__8220 = (i__4532__auto___8219 + (1));
i__4532__auto___8219 = G__8220;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8215){
var map__8216 = p__8215;
var map__8216__$1 = ((((!((map__8216 == null)))?(((((map__8216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8216):map__8216);
var x = cljs.core.get.call(null,map__8216__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8216__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8216__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8216__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.underground_belt.cljs$lang$applyTo = (function (seq8214){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8214));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8225 = arguments.length;
var i__4532__auto___8226 = (0);
while(true){
if((i__4532__auto___8226 < len__4531__auto___8225)){
args__4534__auto__.push((arguments[i__4532__auto___8226]));

var G__8227 = (i__4532__auto___8226 + (1));
i__4532__auto___8226 = G__8227;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8222){
var map__8223 = p__8222;
var map__8223__$1 = ((((!((map__8223 == null)))?(((((map__8223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8223):map__8223);
var x = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8221){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8221));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8232 = arguments.length;
var i__4532__auto___8233 = (0);
while(true){
if((i__4532__auto___8233 < len__4531__auto___8232)){
args__4534__auto__.push((arguments[i__4532__auto___8233]));

var G__8234 = (i__4532__auto___8233 + (1));
i__4532__auto___8233 = G__8234;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8229){
var map__8230 = p__8229;
var map__8230__$1 = ((((!((map__8230 == null)))?(((((map__8230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8230):map__8230);
var x = cljs.core.get.call(null,map__8230__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8230__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8230__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8228){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8228));
});

busmaker.main_bus.transport_belt = (function busmaker$main_bus$transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8239 = arguments.length;
var i__4532__auto___8240 = (0);
while(true){
if((i__4532__auto___8240 < len__4531__auto___8239)){
args__4534__auto__.push((arguments[i__4532__auto___8240]));

var G__8241 = (i__4532__auto___8240 + (1));
i__4532__auto___8240 = G__8241;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8236){
var map__8237 = p__8236;
var map__8237__$1 = ((((!((map__8237 == null)))?(((((map__8237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8237):map__8237);
var x = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.transport_belt.cljs$lang$applyTo = (function (seq8235){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8235));
});

busmaker.main_bus.small_electric_pole = (function busmaker$main_bus$small_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8246 = arguments.length;
var i__4532__auto___8247 = (0);
while(true){
if((i__4532__auto___8247 < len__4531__auto___8246)){
args__4534__auto__.push((arguments[i__4532__auto___8247]));

var G__8248 = (i__4532__auto___8247 + (1));
i__4532__auto___8247 = G__8248;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8243){
var map__8244 = p__8243;
var map__8244__$1 = ((((!((map__8244 == null)))?(((((map__8244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8244):map__8244);
var x = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","small-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.small_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.small_electric_pole.cljs$lang$applyTo = (function (seq8242){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8242));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8253 = arguments.length;
var i__4532__auto___8254 = (0);
while(true){
if((i__4532__auto___8254 < len__4531__auto___8253)){
args__4534__auto__.push((arguments[i__4532__auto___8254]));

var G__8255 = (i__4532__auto___8254 + (1));
i__4532__auto___8254 = G__8255;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8250){
var map__8251 = p__8250;
var map__8251__$1 = ((((!((map__8251 == null)))?(((((map__8251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8251):map__8251);
var x = cljs.core.get.call(null,map__8251__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8251__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq8249){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8249));
});

busmaker.main_bus.inserter = (function busmaker$main_bus$inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8260 = arguments.length;
var i__4532__auto___8261 = (0);
while(true){
if((i__4532__auto___8261 < len__4531__auto___8260)){
args__4534__auto__.push((arguments[i__4532__auto___8261]));

var G__8262 = (i__4532__auto___8261 + (1));
i__4532__auto___8261 = G__8262;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8257){
var map__8258 = p__8257;
var map__8258__$1 = ((((!((map__8258 == null)))?(((((map__8258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8258):map__8258);
var x = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.inserter.cljs$lang$applyTo = (function (seq8256){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8256));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8267 = arguments.length;
var i__4532__auto___8268 = (0);
while(true){
if((i__4532__auto___8268 < len__4531__auto___8267)){
args__4534__auto__.push((arguments[i__4532__auto___8268]));

var G__8269 = (i__4532__auto___8268 + (1));
i__4532__auto___8268 = G__8269;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8264){
var map__8265 = p__8264;
var map__8265__$1 = ((((!((map__8265 == null)))?(((((map__8265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8265):map__8265);
var x = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8263){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8263));
});

busmaker.main_bus.factory = (function busmaker$main_bus$factory(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8274 = arguments.length;
var i__4532__auto___8275 = (0);
while(true){
if((i__4532__auto___8275 < len__4531__auto___8274)){
args__4534__auto__.push((arguments[i__4532__auto___8275]));

var G__8276 = (i__4532__auto___8275 + (1));
i__4532__auto___8275 = G__8276;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8271){
var map__8272 = p__8271;
var map__8272__$1 = ((((!((map__8272 == null)))?(((((map__8272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8272):map__8272);
var x = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
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
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq8270){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8270));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8289 = arguments.length;
var i__4532__auto___8290 = (0);
while(true){
if((i__4532__auto___8290 < len__4531__auto___8289)){
args__4534__auto__.push((arguments[i__4532__auto___8290]));

var G__8291 = (i__4532__auto___8290 + (1));
i__4532__auto___8290 = G__8291;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8278){
var map__8279 = p__8278;
var map__8279__$1 = ((((!((map__8279 == null)))?(((((map__8279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8279):map__8279);
var x = cljs.core.get.call(null,map__8279__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8279__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__8279__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8279,map__8279__$1,x,y,length){
return (function busmaker$main_bus$iter__8281(s__8282){
return (new cljs.core.LazySeq(null,((function (map__8279,map__8279__$1,x,y,length){
return (function (){
var s__8282__$1 = s__8282;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8282__$1);
if(temp__5457__auto__){
var s__8282__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8282__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8282__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8284 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8283 = (0);
while(true){
if((i__8283 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8283);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8284,(((i <= (1)))?(function (){var G__8285 = cljs.core.mod.call(null,i,(3));
switch (G__8285) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8285)].join('')));

}
})():(function (){var G__8286 = cljs.core.mod.call(null,i,(3));
switch (G__8286) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8286)].join('')));

}
})()));

var G__8294 = (i__8283 + (1));
i__8283 = G__8294;
continue;
} else {
var G__8295 = (i__8283 + (1));
i__8283 = G__8295;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8284),busmaker$main_bus$iter__8281.call(null,cljs.core.chunk_rest.call(null,s__8282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8284),null);
}
} else {
var i = cljs.core.first.call(null,s__8282__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__8287 = cljs.core.mod.call(null,i,(3));
switch (G__8287) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8287)].join('')));

}
})():(function (){var G__8288 = cljs.core.mod.call(null,i,(3));
switch (G__8288) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8288)].join('')));

}
})()),busmaker$main_bus$iter__8281.call(null,cljs.core.rest.call(null,s__8282__$2)));
} else {
var G__8298 = cljs.core.rest.call(null,s__8282__$2);
s__8282__$1 = G__8298;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__8279,map__8279__$1,x,y,length))
,null,null));
});})(map__8279,map__8279__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq8277){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8277));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8303 = arguments.length;
var i__4532__auto___8304 = (0);
while(true){
if((i__4532__auto___8304 < len__4531__auto___8303)){
args__4534__auto__.push((arguments[i__4532__auto___8304]));

var G__8305 = (i__4532__auto___8304 + (1));
i__4532__auto___8304 = G__8305;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8300){
var map__8301 = p__8300;
var map__8301__$1 = ((((!((map__8301 == null)))?(((((map__8301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8301):map__8301);
var x = cljs.core.get.call(null,map__8301__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8301__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8301__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8299){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8299));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
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
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8307){
var map__8308 = p__8307;
var map__8308__$1 = ((((!((map__8308 == null)))?(((((map__8308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8308):map__8308);
var x = cljs.core.get.call(null,map__8308__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8308__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8308__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8308,map__8308__$1,x,y,height){
return (function busmaker$main_bus$iter__8310(s__8311){
return (new cljs.core.LazySeq(null,((function (map__8308,map__8308__$1,x,y,height){
return (function (){
var s__8311__$1 = s__8311;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8311__$1);
if(temp__5457__auto__){
var s__8311__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8311__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8311__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8313 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8312 = (0);
while(true){
if((i__8312 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8312);
cljs.core.chunk_append.call(null,b__8313,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8317 = (i__8312 + (1));
i__8312 = G__8317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8313),busmaker$main_bus$iter__8310.call(null,cljs.core.chunk_rest.call(null,s__8311__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8313),null);
}
} else {
var i = cljs.core.first.call(null,s__8311__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8310.call(null,cljs.core.rest.call(null,s__8311__$2)));
}
} else {
return null;
}
break;
}
});})(map__8308,map__8308__$1,x,y,height))
,null,null));
});})(map__8308,map__8308__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8306){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8306));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
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
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8319){
var map__8320 = p__8319;
var map__8320__$1 = ((((!((map__8320 == null)))?(((((map__8320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8320):map__8320);
var x = cljs.core.get.call(null,map__8320__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8320__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8320__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8320,map__8320__$1,x,y,height){
return (function busmaker$main_bus$iter__8322(s__8323){
return (new cljs.core.LazySeq(null,((function (map__8320,map__8320__$1,x,y,height){
return (function (){
var s__8323__$1 = s__8323;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8323__$1);
if(temp__5457__auto__){
var s__8323__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8323__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8323__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8325 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8324 = (0);
while(true){
if((i__8324 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8324);
cljs.core.chunk_append.call(null,b__8325,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8329 = (i__8324 + (1));
i__8324 = G__8329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8325),busmaker$main_bus$iter__8322.call(null,cljs.core.chunk_rest.call(null,s__8323__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8325),null);
}
} else {
var i = cljs.core.first.call(null,s__8323__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8322.call(null,cljs.core.rest.call(null,s__8323__$2)));
}
} else {
return null;
}
break;
}
});})(map__8320,map__8320__$1,x,y,height))
,null,null));
});})(map__8320,map__8320__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8318){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8318));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8345 = arguments.length;
var i__4532__auto___8346 = (0);
while(true){
if((i__4532__auto___8346 < len__4531__auto___8345)){
args__4534__auto__.push((arguments[i__4532__auto___8346]));

var G__8347 = (i__4532__auto___8346 + (1));
i__4532__auto___8346 = G__8347;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__8332){
var map__8333 = p__8332;
var map__8333__$1 = ((((!((map__8333 == null)))?(((((map__8333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8333):map__8333);
var x = cljs.core.get.call(null,map__8333__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8333__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8333,map__8333__$1,x,y){
return (function busmaker$main_bus$iter__8335(s__8336){
return (new cljs.core.LazySeq(null,((function (map__8333,map__8333__$1,x,y){
return (function (){
var s__8336__$1 = s__8336;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8336__$1);
if(temp__5457__auto__){
var s__8336__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8336__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8336__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8338 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8337 = (0);
while(true){
if((i__8337 < size__4323__auto__)){
var vec__8339 = cljs.core._nth.call(null,c__4322__auto__,i__8337);
var i = cljs.core.nth.call(null,vec__8339,(0),null);
var xi = cljs.core.nth.call(null,vec__8339,(1),null);
cljs.core.chunk_append.call(null,b__8338,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__8348 = (i__8337 + (1));
i__8337 = G__8348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8338),busmaker$main_bus$iter__8335.call(null,cljs.core.chunk_rest.call(null,s__8336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8338),null);
}
} else {
var vec__8342 = cljs.core.first.call(null,s__8336__$2);
var i = cljs.core.nth.call(null,vec__8342,(0),null);
var xi = cljs.core.nth.call(null,vec__8342,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__8335.call(null,cljs.core.rest.call(null,s__8336__$2)));
}
} else {
return null;
}
break;
}
});})(map__8333,map__8333__$1,x,y))
,null,null));
});})(map__8333,map__8333__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq8330){
var G__8331 = cljs.core.first.call(null,seq8330);
var seq8330__$1 = cljs.core.next.call(null,seq8330);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8331,seq8330__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8365 = arguments.length;
var i__4532__auto___8366 = (0);
while(true){
if((i__4532__auto___8366 < len__4531__auto___8365)){
args__4534__auto__.push((arguments[i__4532__auto___8366]));

var G__8367 = (i__4532__auto___8366 + (1));
i__4532__auto___8366 = G__8367;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8350){
var map__8351 = p__8350;
var map__8351__$1 = ((((!((map__8351 == null)))?(((((map__8351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8351):map__8351);
var x = cljs.core.get.call(null,map__8351__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8351__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var recipes = cljs.core.get.call(null,map__8351__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var n_factories = cljs.core.get.call(null,map__8351__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8351__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8351,map__8351__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8353(s__8354){
return (new cljs.core.LazySeq(null,((function (map__8351,map__8351__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8354__$1 = s__8354;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8354__$1);
if(temp__5457__auto__){
var s__8354__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8354__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8354__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8356 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8355 = (0);
while(true){
if((i__8355 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8355);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8356,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8355,dx,i,c__4322__auto__,size__4323__auto__,b__8356,s__8354__$2,temp__5457__auto__,map__8351,map__8351__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8353_$_iter__8357(s__8358){
return (new cljs.core.LazySeq(null,((function (i__8355,dx,i,c__4322__auto__,size__4323__auto__,b__8356,s__8354__$2,temp__5457__auto__,map__8351,map__8351__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8358__$1 = s__8358;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8358__$1);
if(temp__5457__auto____$1){
var s__8358__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8358__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8358__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8360 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8359 = (0);
while(true){
if((i__8359 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8359);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8360,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8368 = (i__8359 + (1));
i__8359 = G__8368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8360),busmaker$main_bus$iter__8353_$_iter__8357.call(null,cljs.core.chunk_rest.call(null,s__8358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8360),null);
}
} else {
var j = cljs.core.first.call(null,s__8358__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8353_$_iter__8357.call(null,cljs.core.rest.call(null,s__8358__$2)));
}
} else {
return null;
}
break;
}
});})(i__8355,dx,i,c__4322__auto__,size__4323__auto__,b__8356,s__8354__$2,temp__5457__auto__,map__8351,map__8351__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(i__8355,dx,i,c__4322__auto__,size__4323__auto__,b__8356,s__8354__$2,temp__5457__auto__,map__8351,map__8351__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8369 = (i__8355 + (1));
i__8355 = G__8369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8356),busmaker$main_bus$iter__8353.call(null,cljs.core.chunk_rest.call(null,s__8354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8356),null);
}
} else {
var i = cljs.core.first.call(null,s__8354__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8354__$2,temp__5457__auto__,map__8351,map__8351__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__8353_$_iter__8361(s__8362){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8354__$2,temp__5457__auto__,map__8351,map__8351__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8362__$1 = s__8362;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8362__$1);
if(temp__5457__auto____$1){
var s__8362__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8362__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8362__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8364 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8363 = (0);
while(true){
if((i__8363 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8363);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8364,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__8370 = (i__8363 + (1));
i__8363 = G__8370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8364),busmaker$main_bus$iter__8353_$_iter__8361.call(null,cljs.core.chunk_rest.call(null,s__8362__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8364),null);
}
} else {
var j = cljs.core.first.call(null,s__8362__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__8353_$_iter__8361.call(null,cljs.core.rest.call(null,s__8362__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8354__$2,temp__5457__auto__,map__8351,map__8351__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(dx,i,s__8354__$2,temp__5457__auto__,map__8351,map__8351__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__8353.call(null,cljs.core.rest.call(null,s__8354__$2)));
}
} else {
return null;
}
break;
}
});})(map__8351,map__8351__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(map__8351,map__8351__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq8349){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8349));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8379 = arguments.length;
var i__4532__auto___8380 = (0);
while(true){
if((i__4532__auto___8380 < len__4531__auto___8379)){
args__4534__auto__.push((arguments[i__4532__auto___8380]));

var G__8381 = (i__4532__auto___8380 + (1));
i__4532__auto___8380 = G__8381;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8372){
var map__8373 = p__8372;
var map__8373__$1 = ((((!((map__8373 == null)))?(((((map__8373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8373):map__8373);
var x = cljs.core.get.call(null,map__8373__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8373__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8373__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8373__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8373__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8373__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8373,map__8373__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8375(s__8376){
return (new cljs.core.LazySeq(null,((function (n,map__8373,map__8373__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__8376__$1 = s__8376;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8376__$1);
if(temp__5457__auto__){
var s__8376__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8376__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8376__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8378 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8377 = (0);
while(true){
if((i__8377 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8377);
cljs.core.chunk_append.call(null,b__8378,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8382 = (i__8377 + (1));
i__8377 = G__8382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8378),busmaker$main_bus$iter__8375.call(null,cljs.core.chunk_rest.call(null,s__8376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8378),null);
}
} else {
var i = cljs.core.first.call(null,s__8376__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8375.call(null,cljs.core.rest.call(null,s__8376__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8373,map__8373__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8373,map__8373__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8371){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8371));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8387 = arguments.length;
var i__4532__auto___8388 = (0);
while(true){
if((i__4532__auto___8388 < len__4531__auto___8387)){
args__4534__auto__.push((arguments[i__4532__auto___8388]));

var G__8389 = (i__4532__auto___8388 + (1));
i__4532__auto___8388 = G__8389;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8384){
var map__8385 = p__8384;
var map__8385__$1 = ((((!((map__8385 == null)))?(((((map__8385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8385):map__8385);
var x = cljs.core.get.call(null,map__8385__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8385__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8385__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8385__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8385__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8385__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8383){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8383));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8398 = arguments.length;
var i__4532__auto___8399 = (0);
while(true){
if((i__4532__auto___8399 < len__4531__auto___8398)){
args__4534__auto__.push((arguments[i__4532__auto___8399]));

var G__8400 = (i__4532__auto___8399 + (1));
i__4532__auto___8399 = G__8400;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8391){
var map__8392 = p__8391;
var map__8392__$1 = ((((!((map__8392 == null)))?(((((map__8392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8392):map__8392);
var x = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8392,map__8392__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8394(s__8395){
return (new cljs.core.LazySeq(null,((function (map__8392,map__8392__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__8395__$1 = s__8395;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8395__$1);
if(temp__5457__auto__){
var s__8395__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8395__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8395__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8397 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8396 = (0);
while(true){
if((i__8396 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8396);
cljs.core.chunk_append.call(null,b__8397,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8401 = (i__8396 + (1));
i__8396 = G__8401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8397),busmaker$main_bus$iter__8394.call(null,cljs.core.chunk_rest.call(null,s__8395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8397),null);
}
} else {
var i = cljs.core.first.call(null,s__8395__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8394.call(null,cljs.core.rest.call(null,s__8395__$2)));
}
} else {
return null;
}
break;
}
});})(map__8392,map__8392__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8392,map__8392__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8390){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8390));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
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
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8403){
var map__8404 = p__8403;
var map__8404__$1 = ((((!((map__8404 == null)))?(((((map__8404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8404):map__8404);
var x = cljs.core.get.call(null,map__8404__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8404__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8404__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8404__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8404,map__8404__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__8406(s__8407){
return (new cljs.core.LazySeq(null,((function (n,map__8404,map__8404__$1,x,y,input_index,bus_index){
return (function (){
var s__8407__$1 = s__8407;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8407__$1);
if(temp__5457__auto__){
var s__8407__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8407__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8407__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8409 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8408 = (0);
while(true){
if((i__8408 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8408);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8409,(function (){var G__8410 = cljs.core.mod.call(null,i,(3));
switch (G__8410) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8410)].join('')));

}
})());

var G__8416 = (i__8408 + (1));
i__8408 = G__8416;
continue;
} else {
var G__8417 = (i__8408 + (1));
i__8408 = G__8417;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8409),busmaker$main_bus$iter__8406.call(null,cljs.core.chunk_rest.call(null,s__8407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8409),null);
}
} else {
var i = cljs.core.first.call(null,s__8407__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__8411 = cljs.core.mod.call(null,i,(3));
switch (G__8411) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8411)].join('')));

}
})(),busmaker$main_bus$iter__8406.call(null,cljs.core.rest.call(null,s__8407__$2)));
} else {
var G__8419 = cljs.core.rest.call(null,s__8407__$2);
s__8407__$1 = G__8419;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8404,map__8404__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__8404,map__8404__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8402){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8402));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
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
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8421){
var map__8422 = p__8421;
var map__8422__$1 = ((((!((map__8422 == null)))?(((((map__8422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8422):map__8422);
var x = cljs.core.get.call(null,map__8422__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8422__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8422__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8422__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8422,map__8422__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8424(s__8425){
return (new cljs.core.LazySeq(null,((function (map__8422,map__8422__$1,x,y,output_index,y_extension){
return (function (){
var s__8425__$1 = s__8425;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8425__$1);
if(temp__5457__auto__){
var s__8425__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8425__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8425__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8427 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8426 = (0);
while(true){
if((i__8426 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8426);
cljs.core.chunk_append.call(null,b__8427,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

var G__8431 = (i__8426 + (1));
i__8426 = G__8431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8427),busmaker$main_bus$iter__8424.call(null,cljs.core.chunk_rest.call(null,s__8425__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8427),null);
}
} else {
var i = cljs.core.first.call(null,s__8425__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8424.call(null,cljs.core.rest.call(null,s__8425__$2)));
}
} else {
return null;
}
break;
}
});})(map__8422,map__8422__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8422,map__8422__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})(),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8420){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8420));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8444 = arguments.length;
var i__4532__auto___8445 = (0);
while(true){
if((i__4532__auto___8445 < len__4531__auto___8444)){
args__4534__auto__.push((arguments[i__4532__auto___8445]));

var G__8446 = (i__4532__auto___8445 + (1));
i__4532__auto___8445 = G__8446;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8433){
var map__8434 = p__8433;
var map__8434__$1 = ((((!((map__8434 == null)))?(((((map__8434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8434):map__8434);
var x = cljs.core.get.call(null,map__8434__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8434__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8434__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8434__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__8434,map__8434__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8436(s__8437){
return (new cljs.core.LazySeq(null,((function (n,map__8434,map__8434__$1,x,y,output_index,y_extension){
return (function (){
var s__8437__$1 = s__8437;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8437__$1);
if(temp__5457__auto__){
var s__8437__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8437__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8437__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8439 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8438 = (0);
while(true){
if((i__8438 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8438);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8439,(((i >= n))?(function (){var G__8440 = cljs.core.mod.call(null,i,(3));
switch (G__8440) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8440)].join('')));

}
})():(function (){var G__8441 = cljs.core.mod.call(null,i,(3));
switch (G__8441) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8441)].join('')));

}
})()));

var G__8449 = (i__8438 + (1));
i__8438 = G__8449;
continue;
} else {
var G__8450 = (i__8438 + (1));
i__8438 = G__8450;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8439),busmaker$main_bus$iter__8436.call(null,cljs.core.chunk_rest.call(null,s__8437__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8439),null);
}
} else {
var i = cljs.core.first.call(null,s__8437__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8442 = cljs.core.mod.call(null,i,(3));
switch (G__8442) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8442)].join('')));

}
})():(function (){var G__8443 = cljs.core.mod.call(null,i,(3));
switch (G__8443) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8443)].join('')));

}
})()),busmaker$main_bus$iter__8436.call(null,cljs.core.rest.call(null,s__8437__$2)));
} else {
var G__8453 = cljs.core.rest.call(null,s__8437__$2);
s__8437__$1 = G__8453;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8434,map__8434__$1,x,y,output_index,y_extension))
,null,null));
});})(n,map__8434,map__8434__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8432){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8432));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8458 = arguments.length;
var i__4532__auto___8459 = (0);
while(true){
if((i__4532__auto___8459 < len__4531__auto___8458)){
args__4534__auto__.push((arguments[i__4532__auto___8459]));

var G__8460 = (i__4532__auto___8459 + (1));
i__4532__auto___8459 = G__8460;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8455){
var map__8456 = p__8455;
var map__8456__$1 = ((((!((map__8456 == null)))?(((((map__8456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8456):map__8456);
var x = cljs.core.get.call(null,map__8456__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8456__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8456__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8456__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8454){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8454));
});

busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name,facility){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"basic-oil-processing":recipe_name);
var G__8461 = busmaker.recipes.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipe_data.recipes,recipe_name__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))){
return cljs.core.conj.call(null,G__8461,"coal");
} else {
return G__8461;
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
var len__4531__auto___8573 = arguments.length;
var i__4532__auto___8574 = (0);
while(true){
if((i__4532__auto___8574 < len__4531__auto___8573)){
args__4534__auto__.push((arguments[i__4532__auto___8574]));

var G__8575 = (i__4532__auto___8574 + (1));
i__4532__auto___8574 = G__8575;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8465){
var map__8466 = p__8465;
var map__8466__$1 = ((((!((map__8466 == null)))?(((((map__8466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8466):map__8466);
var x = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var n_factories = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipes = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var buses = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"buses","buses",214650120));
var input_indexes = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ingredient = cljs.core.first.call(null,recipes);
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (p1__8462_SHARP_,p2__8463_SHARP_){
return cljs.core.assoc.call(null,p1__8462_SHARP_,"entity_number",(p2__8463_SHARP_ + (1)));
});})(ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,(function (){var G__8468 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8469(s__8470){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8470__$1 = s__8470;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8470__$1);
if(temp__5457__auto__){
var s__8470__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8470__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8470__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8472 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8471 = (0);
while(true){
if((i__8471 < size__4323__auto__)){
var vec__8473 = cljs.core._nth.call(null,c__4322__auto__,i__8471);
var bus_ingredient = cljs.core.nth.call(null,vec__8473,(0),null);
var i = cljs.core.nth.call(null,vec__8473,(1),null);
cljs.core.chunk_append.call(null,b__8472,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})());

var G__8576 = (i__8471 + (1));
i__8471 = G__8576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8472),busmaker$main_bus$iter__8469.call(null,cljs.core.chunk_rest.call(null,s__8470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8472),null);
}
} else {
var vec__8476 = cljs.core.first.call(null,s__8470__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__8476,(0),null);
var i = cljs.core.nth.call(null,vec__8476,(1),null);
return cljs.core.cons.call(null,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})(),busmaker$main_bus$iter__8469.call(null,cljs.core.rest.call(null,s__8470__$2)));
}
} else {
return null;
}
break;
}
});})(ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
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
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8479(s__8480){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8480__$1 = s__8480;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8480__$1);
if(temp__5457__auto__){
var s__8480__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8480__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8480__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8482 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8481 = (0);
while(true){
if((i__8481 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8481);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__8577 = (i__8481 + (1));
i__8481 = G__8577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8482),busmaker$main_bus$iter__8479.call(null,cljs.core.chunk_rest.call(null,s__8480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8482),null);
}
} else {
var i = cljs.core.first.call(null,s__8480__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__8479.call(null,cljs.core.rest.call(null,s__8480__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8483(s__8484){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8484__$1 = s__8484;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8484__$1);
if(temp__5457__auto__){
var s__8484__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8484__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8484__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8486 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8485 = (0);
while(true){
if((i__8485 < size__4323__auto__)){
var vec__8487 = cljs.core._nth.call(null,c__4322__auto__,i__8485);
var input_index = cljs.core.nth.call(null,vec__8487,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8487,(1),null);
cljs.core.chunk_append.call(null,b__8486,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8485,x__$2,y__$3,y__$2,vec__8487,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8486,s__8484__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8483_$_iter__8490(s__8491){
return (new cljs.core.LazySeq(null,((function (i__8485,x__$2,y__$3,y__$2,vec__8487,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8486,s__8484__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8491__$1 = s__8491;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8491__$1);
if(temp__5457__auto____$1){
var s__8491__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8491__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8491__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8493 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8492 = (0);
while(true){
if((i__8492 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8492);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8493,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8578 = (i__8492 + (1));
i__8492 = G__8578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8493),busmaker$main_bus$iter__8483_$_iter__8490.call(null,cljs.core.chunk_rest.call(null,s__8491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8493),null);
}
} else {
var i = cljs.core.first.call(null,s__8491__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8483_$_iter__8490.call(null,cljs.core.rest.call(null,s__8491__$2)));
}
} else {
return null;
}
break;
}
});})(i__8485,x__$2,y__$3,y__$2,vec__8487,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8486,s__8484__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8485,x__$2,y__$3,y__$2,vec__8487,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8486,s__8484__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__8579 = (i__8485 + (1));
i__8485 = G__8579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8486),busmaker$main_bus$iter__8483.call(null,cljs.core.chunk_rest.call(null,s__8484__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8486),null);
}
} else {
var vec__8494 = cljs.core.first.call(null,s__8484__$2);
var input_index = cljs.core.nth.call(null,vec__8494,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8494,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$3,y__$2,vec__8494,input_index,bus_index,s__8484__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8483_$_iter__8497(s__8498){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$3,y__$2,vec__8494,input_index,bus_index,s__8484__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8498__$1 = s__8498;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8498__$1);
if(temp__5457__auto____$1){
var s__8498__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8498__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8498__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8500 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8499 = (0);
while(true){
if((i__8499 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8499);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__8580 = (i__8499 + (1));
i__8499 = G__8580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8500),busmaker$main_bus$iter__8483_$_iter__8497.call(null,cljs.core.chunk_rest.call(null,s__8498__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8500),null);
}
} else {
var i = cljs.core.first.call(null,s__8498__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__8483_$_iter__8497.call(null,cljs.core.rest.call(null,s__8498__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$3,y__$2,vec__8494,input_index,bus_index,s__8484__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$2,y__$3,y__$2,vec__8494,input_index,bus_index,s__8484__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__8483.call(null,cljs.core.rest.call(null,s__8484__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8501(s__8502){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8502__$1 = s__8502;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8502__$1);
if(temp__5457__auto__){
var s__8502__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8502__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8502__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8504 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8503 = (0);
while(true){
if((i__8503 < size__4323__auto__)){
var vec__8505 = cljs.core._nth.call(null,c__4322__auto__,i__8503);
var output_recipe = cljs.core.nth.call(null,vec__8505,(0),null);
var output_index = cljs.core.nth.call(null,vec__8505,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8504,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8503,s__8502__$1,tap_x,x__$1,y__$1,vec__8505,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8504,s__8502__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8501_$_iter__8508(s__8509){
return (new cljs.core.LazySeq(null,((function (i__8503,s__8502__$1,tap_x,x__$1,y__$1,vec__8505,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8504,s__8502__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8509__$1 = s__8509;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8509__$1);
if(temp__5457__auto____$1){
var s__8509__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8509__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8509__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8511 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8510 = (0);
while(true){
if((i__8510 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8510);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8511,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8512 = cljs.core.mod.call(null,i,(3));
switch (G__8512) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8512)].join('')));

}
})()));

var G__8582 = (i__8510 + (1));
i__8510 = G__8582;
continue;
} else {
var G__8583 = (i__8510 + (1));
i__8510 = G__8583;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8511),busmaker$main_bus$iter__8501_$_iter__8508.call(null,cljs.core.chunk_rest.call(null,s__8509__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8511),null);
}
} else {
var i = cljs.core.first.call(null,s__8509__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8513 = cljs.core.mod.call(null,i,(3));
switch (G__8513) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8513)].join('')));

}
})()),busmaker$main_bus$iter__8501_$_iter__8508.call(null,cljs.core.rest.call(null,s__8509__$2)));
} else {
var G__8585 = cljs.core.rest.call(null,s__8509__$2);
s__8509__$1 = G__8585;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8503,s__8502__$1,tap_x,x__$1,y__$1,vec__8505,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8504,s__8502__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8503,s__8502__$1,tap_x,x__$1,y__$1,vec__8505,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8504,s__8502__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8586 = (i__8503 + (1));
i__8503 = G__8586;
continue;
} else {
var G__8587 = (i__8503 + (1));
i__8503 = G__8587;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8504),busmaker$main_bus$iter__8501.call(null,cljs.core.chunk_rest.call(null,s__8502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8504),null);
}
} else {
var vec__8514 = cljs.core.first.call(null,s__8502__$2);
var output_recipe = cljs.core.nth.call(null,vec__8514,(0),null);
var output_index = cljs.core.nth.call(null,vec__8514,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8502__$1,tap_x,x__$1,y__$1,vec__8514,output_recipe,output_index,s__8502__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8501_$_iter__8517(s__8518){
return (new cljs.core.LazySeq(null,((function (s__8502__$1,tap_x,x__$1,y__$1,vec__8514,output_recipe,output_index,s__8502__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8518__$1 = s__8518;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8518__$1);
if(temp__5457__auto____$1){
var s__8518__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8518__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8518__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8520 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8519 = (0);
while(true){
if((i__8519 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8519);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8520,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8521 = cljs.core.mod.call(null,i,(3));
switch (G__8521) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8521)].join('')));

}
})()));

var G__8589 = (i__8519 + (1));
i__8519 = G__8589;
continue;
} else {
var G__8590 = (i__8519 + (1));
i__8519 = G__8590;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8520),busmaker$main_bus$iter__8501_$_iter__8517.call(null,cljs.core.chunk_rest.call(null,s__8518__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8520),null);
}
} else {
var i = cljs.core.first.call(null,s__8518__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8522 = cljs.core.mod.call(null,i,(3));
switch (G__8522) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8522)].join('')));

}
})()),busmaker$main_bus$iter__8501_$_iter__8517.call(null,cljs.core.rest.call(null,s__8518__$2)));
} else {
var G__8592 = cljs.core.rest.call(null,s__8518__$2);
s__8518__$1 = G__8592;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8502__$1,tap_x,x__$1,y__$1,vec__8514,output_recipe,output_index,s__8502__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8502__$1,tap_x,x__$1,y__$1,vec__8514,output_recipe,output_index,s__8502__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8501.call(null,cljs.core.rest.call(null,s__8502__$2)));
} else {
var G__8593 = cljs.core.rest.call(null,s__8502__$2);
s__8502__$1 = G__8593;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8523(s__8524){
return (new cljs.core.LazySeq(null,((function (ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8524__$1 = s__8524;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8524__$1);
if(temp__5457__auto__){
var s__8524__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8524__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8524__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8526 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8525 = (0);
while(true){
if((i__8525 < size__4323__auto__)){
var vec__8527 = cljs.core._nth.call(null,c__4322__auto__,i__8525);
var output_recipe = cljs.core.nth.call(null,vec__8527,(0),null);
var output_index = cljs.core.nth.call(null,vec__8527,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8526,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8525,s__8524__$1,tap_x,x__$1,y__$1,vec__8527,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8526,s__8524__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8523_$_iter__8530(s__8531){
return (new cljs.core.LazySeq(null,((function (i__8525,s__8524__$1,tap_x,x__$1,y__$1,vec__8527,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8526,s__8524__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8531__$1 = s__8531;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8531__$1);
if(temp__5457__auto____$1){
var s__8531__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8531__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8531__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8533 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8532 = (0);
while(true){
if((i__8532 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8532);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8533,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8534 = cljs.core.mod.call(null,i,(3));
switch (G__8534) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8534)].join('')));

}
})()));

var G__8595 = (i__8532 + (1));
i__8532 = G__8595;
continue;
} else {
var G__8596 = (i__8532 + (1));
i__8532 = G__8596;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8533),busmaker$main_bus$iter__8523_$_iter__8530.call(null,cljs.core.chunk_rest.call(null,s__8531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8533),null);
}
} else {
var i = cljs.core.first.call(null,s__8531__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8535 = cljs.core.mod.call(null,i,(3));
switch (G__8535) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8535)].join('')));

}
})()),busmaker$main_bus$iter__8523_$_iter__8530.call(null,cljs.core.rest.call(null,s__8531__$2)));
} else {
var G__8598 = cljs.core.rest.call(null,s__8531__$2);
s__8531__$1 = G__8598;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8525,s__8524__$1,tap_x,x__$1,y__$1,vec__8527,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8526,s__8524__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__8525,s__8524__$1,tap_x,x__$1,y__$1,vec__8527,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8526,s__8524__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})());

var G__8599 = (i__8525 + (1));
i__8525 = G__8599;
continue;
} else {
var G__8600 = (i__8525 + (1));
i__8525 = G__8600;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8526),busmaker$main_bus$iter__8523.call(null,cljs.core.chunk_rest.call(null,s__8524__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8526),null);
}
} else {
var vec__8536 = cljs.core.first.call(null,s__8524__$2);
var output_recipe = cljs.core.nth.call(null,vec__8536,(0),null);
var output_index = cljs.core.nth.call(null,vec__8536,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8524__$1,tap_x,x__$1,y__$1,vec__8536,output_recipe,output_index,s__8524__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8523_$_iter__8539(s__8540){
return (new cljs.core.LazySeq(null,((function (s__8524__$1,tap_x,x__$1,y__$1,vec__8536,output_recipe,output_index,s__8524__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8540__$1 = s__8540;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8540__$1);
if(temp__5457__auto____$1){
var s__8540__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8540__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8540__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8542 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8541 = (0);
while(true){
if((i__8541 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8541);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__8542,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8543 = cljs.core.mod.call(null,i,(3));
switch (G__8543) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8543)].join('')));

}
})()));

var G__8602 = (i__8541 + (1));
i__8541 = G__8602;
continue;
} else {
var G__8603 = (i__8541 + (1));
i__8541 = G__8603;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8542),busmaker$main_bus$iter__8523_$_iter__8539.call(null,cljs.core.chunk_rest.call(null,s__8540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8542),null);
}
} else {
var i = cljs.core.first.call(null,s__8540__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8544 = cljs.core.mod.call(null,i,(3));
switch (G__8544) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8544)].join('')));

}
})()),busmaker$main_bus$iter__8523_$_iter__8539.call(null,cljs.core.rest.call(null,s__8540__$2)));
} else {
var G__8605 = cljs.core.rest.call(null,s__8540__$2);
s__8540__$1 = G__8605;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8524__$1,tap_x,x__$1,y__$1,vec__8536,output_recipe,output_index,s__8524__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8524__$1,tap_x,x__$1,y__$1,vec__8536,output_recipe,output_index,s__8524__$2,temp__5457__auto__,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})(),busmaker$main_bus$iter__8523.call(null,cljs.core.rest.call(null,s__8524__$2)));
} else {
var G__8606 = cljs.core.rest.call(null,s__8524__$2);
s__8524__$1 = G__8606;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__8468__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8468,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var output_index = buses.call(null,ingredient);
var iter__4324__auto__ = ((function (x__$1,y__$1,output_index,G__8468,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8545(s__8546){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,output_index,G__8468,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8546__$1 = s__8546;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8546__$1);
if(temp__5457__auto__){
var s__8546__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8546__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8546__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8548 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8547 = (0);
while(true){
if((i__8547 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8547);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
cljs.core.chunk_append.call(null,b__8548,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)));

var G__8607 = (i__8547 + (1));
i__8547 = G__8607;
continue;
} else {
var G__8608 = (i__8547 + (1));
i__8547 = G__8608;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8548),busmaker$main_bus$iter__8545.call(null,cljs.core.chunk_rest.call(null,s__8546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8548),null);
}
} else {
var i = cljs.core.first.call(null,s__8546__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)),busmaker$main_bus$iter__8545.call(null,cljs.core.rest.call(null,s__8546__$2)));
} else {
var G__8609 = cljs.core.rest.call(null,s__8546__$2);
s__8546__$1 = G__8609;
continue;
}
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,output_index,G__8468,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,output_index,G__8468,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8468);
var G__8468__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))?cljs.core.concat.call(null,G__8468__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8468,G__8468__$1,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8549(s__8550){
return (new cljs.core.LazySeq(null,((function (G__8468,G__8468__$1,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8550__$1 = s__8550;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8550__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8550__$1,i,xs__6012__auto__,temp__5457__auto__,G__8468,G__8468__$1,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8549_$_iter__8551(s__8552){
return (new cljs.core.LazySeq(null,((function (s__8550__$1,i,xs__6012__auto__,temp__5457__auto__,G__8468,G__8468__$1,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8552__$1 = s__8552;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8552__$1);
if(temp__5457__auto____$1){
var s__8552__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8552__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8552__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8554 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8553 = (0);
while(true){
if((i__8553 < size__4323__auto__)){
var vec__8555 = cljs.core._nth.call(null,c__4322__auto__,i__8553);
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
cljs.core.chunk_append.call(null,b__8554,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8610 = (i__8553 + (1));
i__8553 = G__8610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8554),busmaker$main_bus$iter__8549_$_iter__8551.call(null,cljs.core.chunk_rest.call(null,s__8552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8554),null);
}
} else {
var vec__8558 = cljs.core.first.call(null,s__8552__$2);
var input_recipe = cljs.core.nth.call(null,vec__8558,(0),null);
var input_index = cljs.core.nth.call(null,vec__8558,(1),null);
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
)),args))))),busmaker$main_bus$iter__8549_$_iter__8551.call(null,cljs.core.rest.call(null,s__8552__$2)));
}
} else {
return null;
}
break;
}
});})(s__8550__$1,i,xs__6012__auto__,temp__5457__auto__,G__8468,G__8468__$1,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8550__$1,i,xs__6012__auto__,temp__5457__auto__,G__8468,G__8468__$1,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8549.call(null,cljs.core.rest.call(null,s__8550__$1)));
} else {
var G__8611 = cljs.core.rest.call(null,s__8550__$1);
s__8550__$1 = G__8611;
continue;
}
} else {
return null;
}
break;
}
});})(G__8468,G__8468__$1,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(G__8468,G__8468__$1,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8468__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8468__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$1,x__$1,G__8468,G__8468__$1,G__8468__$2,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8561(s__8562){
return (new cljs.core.LazySeq(null,((function (y__$1,x__$1,G__8468,G__8468__$1,G__8468__$2,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__8562__$1 = s__8562;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8562__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8562__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8468,G__8468__$1,G__8468__$2,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__8561_$_iter__8563(s__8564){
return (new cljs.core.LazySeq(null,((function (s__8562__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8468,G__8468__$1,G__8468__$2,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
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
var vec__8567 = cljs.core._nth.call(null,c__4322__auto__,i__8565);
var output_recipe = cljs.core.nth.call(null,vec__8567,(0),null);
var output_index = cljs.core.nth.call(null,vec__8567,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8566,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8612 = (i__8565 + (1));
i__8565 = G__8612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8566),busmaker$main_bus$iter__8561_$_iter__8563.call(null,cljs.core.chunk_rest.call(null,s__8564__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8566),null);
}
} else {
var vec__8570 = cljs.core.first.call(null,s__8564__$2);
var output_recipe = cljs.core.nth.call(null,vec__8570,(0),null);
var output_index = cljs.core.nth.call(null,vec__8570,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8561_$_iter__8563.call(null,cljs.core.rest.call(null,s__8564__$2)));
}
} else {
return null;
}
break;
}
});})(s__8562__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8468,G__8468__$1,G__8468__$2,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__8562__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8468,G__8468__$1,G__8468__$2,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8561.call(null,cljs.core.rest.call(null,s__8562__$1)));
} else {
var G__8613 = cljs.core.rest.call(null,s__8562__$1);
s__8562__$1 = G__8613;
continue;
}
} else {
return null;
}
break;
}
});})(y__$1,x__$1,G__8468,G__8468__$1,G__8468__$2,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(y__$1,x__$1,G__8468,G__8468__$1,G__8468__$2,ingredient,map__8466,map__8466__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8468__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8464){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8464));
});

busmaker.main_bus.raw_QMARK_ = (function busmaker$main_bus$raw_QMARK_(recipe_name){
return cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,recipe_name);
});
busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(factories,bus_outputs){
var bus_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (bus_index){
return (function (p__8614,factory){
var map__8615 = p__8614;
var map__8615__$1 = ((((!((map__8615 == null)))?(((((map__8615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8615):map__8615);
var acc = map__8615__$1;
var x = cljs.core.get.call(null,map__8615__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8615__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__8617 = factory;
var map__8617__$1 = ((((!((map__8617 == null)))?(((((map__8617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8617):map__8617);
var facility = cljs.core.get.call(null,map__8617__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8617__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8617__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var height = busmaker.main_bus.ingredient_height.call(null,cljs.core.first.call(null,recipes),facility);
var input_indexes = cljs.core.map.call(null,bus_index,busmaker.main_bus.ingredients.call(null,cljs.core.first.call(null,recipes),facility));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_index,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["assembling-machine-2",null,"chemical-plant",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
))),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,height);
});})(bus_index))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),factories)));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8619_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8619_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8619_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
