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
busmaker.main_bus.blueprint_direction = (function busmaker$main_bus$blueprint_direction(p__4669){
var vec__4670 = p__4669;
var x = cljs.core.nth.call(null,vec__4670,(0),null);
var y = cljs.core.nth.call(null,vec__4670,(1),null);
var G__4673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__4673)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__4673)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__4673)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__4673)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4673)].join('')));

}
}
}
}
});
busmaker.main_bus.blueprint_direction_inserter = (function busmaker$main_bus$blueprint_direction_inserter(p__4674){
var vec__4675 = p__4674;
var x = cljs.core.nth.call(null,vec__4675,(0),null);
var y = cljs.core.nth.call(null,vec__4675,(1),null);
var G__4678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__4678)){
return (6);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__4678)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__4678)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__4678)){
return (2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4678)].join('')));

}
}
}
}
});
busmaker.main_bus.underground_belt = (function busmaker$main_bus$underground_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4683 = arguments.length;
var i__4532__auto___4684 = (0);
while(true){
if((i__4532__auto___4684 < len__4531__auto___4683)){
args__4534__auto__.push((arguments[i__4532__auto___4684]));

var G__4685 = (i__4532__auto___4684 + (1));
i__4532__auto___4684 = G__4685;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__4680){
var map__4681 = p__4680;
var map__4681__$1 = ((((!((map__4681 == null)))?(((((map__4681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4681):map__4681);
var x = cljs.core.get.call(null,map__4681__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4681__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4681__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__4681__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.underground_belt.cljs$lang$applyTo = (function (seq4679){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4679));
});

busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4690 = arguments.length;
var i__4532__auto___4691 = (0);
while(true){
if((i__4532__auto___4691 < len__4531__auto___4690)){
args__4534__auto__.push((arguments[i__4532__auto___4691]));

var G__4692 = (i__4532__auto___4691 + (1));
i__4532__auto___4691 = G__4692;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__4687){
var map__4688 = p__4687;
var map__4688__$1 = ((((!((map__4688 == null)))?(((((map__4688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4688):map__4688);
var x = cljs.core.get.call(null,map__4688__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4688__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4688__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__4688__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq4686){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4686));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4697 = arguments.length;
var i__4532__auto___4698 = (0);
while(true){
if((i__4532__auto___4698 < len__4531__auto___4697)){
args__4534__auto__.push((arguments[i__4532__auto___4698]));

var G__4699 = (i__4532__auto___4698 + (1));
i__4532__auto___4698 = G__4699;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__4694){
var map__4695 = p__4694;
var map__4695__$1 = ((((!((map__4695 == null)))?(((((map__4695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4695):map__4695);
var x = cljs.core.get.call(null,map__4695__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4695__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4695__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",(0.5 + x),"y",y], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq4693){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4693));
});

busmaker.main_bus.transport_belt = (function busmaker$main_bus$transport_belt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4704 = arguments.length;
var i__4532__auto___4705 = (0);
while(true){
if((i__4532__auto___4705 < len__4531__auto___4704)){
args__4534__auto__.push((arguments[i__4532__auto___4705]));

var G__4706 = (i__4532__auto___4705 + (1));
i__4532__auto___4705 = G__4706;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__4701){
var map__4702 = p__4701;
var map__4702__$1 = ((((!((map__4702 == null)))?(((((map__4702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4702):map__4702);
var x = cljs.core.get.call(null,map__4702__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4702__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4702__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.transport_belt.cljs$lang$applyTo = (function (seq4700){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4700));
});

busmaker.main_bus.small_electric_pole = (function busmaker$main_bus$small_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4711 = arguments.length;
var i__4532__auto___4712 = (0);
while(true){
if((i__4532__auto___4712 < len__4531__auto___4711)){
args__4534__auto__.push((arguments[i__4532__auto___4712]));

var G__4713 = (i__4532__auto___4712 + (1));
i__4532__auto___4712 = G__4713;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__4708){
var map__4709 = p__4708;
var map__4709__$1 = ((((!((map__4709 == null)))?(((((map__4709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4709):map__4709);
var x = cljs.core.get.call(null,map__4709__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4709__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","small-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.small_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.small_electric_pole.cljs$lang$applyTo = (function (seq4707){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4707));
});

busmaker.main_bus.medium_electric_pole = (function busmaker$main_bus$medium_electric_pole(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4718 = arguments.length;
var i__4532__auto___4719 = (0);
while(true){
if((i__4532__auto___4719 < len__4531__auto___4718)){
args__4534__auto__.push((arguments[i__4532__auto___4719]));

var G__4720 = (i__4532__auto___4719 + (1));
i__4532__auto___4719 = G__4720;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__4715){
var map__4716 = p__4715;
var map__4716__$1 = ((((!((map__4716 == null)))?(((((map__4716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4716):map__4716);
var x = cljs.core.get.call(null,map__4716__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4716__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.medium_electric_pole.cljs$lang$applyTo = (function (seq4714){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4714));
});

busmaker.main_bus.inserter = (function busmaker$main_bus$inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4725 = arguments.length;
var i__4532__auto___4726 = (0);
while(true){
if((i__4532__auto___4726 < len__4531__auto___4725)){
args__4534__auto__.push((arguments[i__4532__auto___4726]));

var G__4727 = (i__4532__auto___4726 + (1));
i__4532__auto___4726 = G__4727;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__4722){
var map__4723 = p__4722;
var map__4723__$1 = ((((!((map__4723 == null)))?(((((map__4723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4723):map__4723);
var x = cljs.core.get.call(null,map__4723__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4723__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4723__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.inserter.cljs$lang$applyTo = (function (seq4721){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4721));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4732 = arguments.length;
var i__4532__auto___4733 = (0);
while(true){
if((i__4532__auto___4733 < len__4531__auto___4732)){
args__4534__auto__.push((arguments[i__4532__auto___4733]));

var G__4734 = (i__4532__auto___4733 + (1));
i__4532__auto___4733 = G__4734;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__4729){
var map__4730 = p__4729;
var map__4730__$1 = ((((!((map__4730 == null)))?(((((map__4730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4730):map__4730);
var x = cljs.core.get.call(null,map__4730__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4730__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4730__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.main_bus.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq4728){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4728));
});

busmaker.main_bus.factory = (function busmaker$main_bus$factory(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4739 = arguments.length;
var i__4532__auto___4740 = (0);
while(true){
if((i__4532__auto___4740 < len__4531__auto___4739)){
args__4534__auto__.push((arguments[i__4532__auto___4740]));

var G__4741 = (i__4532__auto___4740 + (1));
i__4532__auto___4740 = G__4741;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__4736){
var map__4737 = p__4736;
var map__4737__$1 = ((((!((map__4737 == null)))?(((((map__4737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4737):map__4737);
var x = cljs.core.get.call(null,map__4737__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4737__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__4737__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__4737__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
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
busmaker.main_bus.factory.cljs$lang$applyTo = (function (seq4735){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4735));
});

busmaker.main_bus.tap = (function busmaker$main_bus$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4754 = arguments.length;
var i__4532__auto___4755 = (0);
while(true){
if((i__4532__auto___4755 < len__4531__auto___4754)){
args__4534__auto__.push((arguments[i__4532__auto___4755]));

var G__4756 = (i__4532__auto___4755 + (1));
i__4532__auto___4755 = G__4756;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4743){
var map__4744 = p__4743;
var map__4744__$1 = ((((!((map__4744 == null)))?(((((map__4744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4744):map__4744);
var x = cljs.core.get.call(null,map__4744__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4744__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var length = cljs.core.get.call(null,map__4744__$1,new cljs.core.Keyword(null,"length","length",588987862),(1));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__4744,map__4744__$1,x,y,length){
return (function busmaker$main_bus$iter__4746(s__4747){
return (new cljs.core.LazySeq(null,((function (map__4744,map__4744__$1,x,y,length){
return (function (){
var s__4747__$1 = s__4747;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4747__$1);
if(temp__5457__auto__){
var s__4747__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4747__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4747__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4749 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4748 = (0);
while(true){
if((i__4748 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4748);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4749,(((i <= (1)))?(function (){var G__4750 = cljs.core.mod.call(null,i,(3));
switch (G__4750) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4750)].join('')));

}
})():(function (){var G__4751 = cljs.core.mod.call(null,i,(3));
switch (G__4751) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4751)].join('')));

}
})()));

var G__4759 = (i__4748 + (1));
i__4748 = G__4759;
continue;
} else {
var G__4760 = (i__4748 + (1));
i__4748 = G__4760;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4749),busmaker$main_bus$iter__4746.call(null,cljs.core.chunk_rest.call(null,s__4747__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4749),null);
}
} else {
var i = cljs.core.first.call(null,s__4747__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i <= (1)))?(function (){var G__4752 = cljs.core.mod.call(null,i,(3));
switch (G__4752) {
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (0):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4752)].join('')));

}
})():(function (){var G__4753 = cljs.core.mod.call(null,i,(3));
switch (G__4753) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x - i) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (-2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4753)].join('')));

}
})()),busmaker$main_bus$iter__4746.call(null,cljs.core.rest.call(null,s__4747__$2)));
} else {
var G__4763 = cljs.core.rest.call(null,s__4747__$2);
s__4747__$1 = G__4763;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__4744,map__4744__$1,x,y,length))
,null,null));
});})(map__4744,map__4744__$1,x,y,length))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,length));
})()))));
});

busmaker.main_bus.tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.tap.cljs$lang$applyTo = (function (seq4742){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4742));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4768 = arguments.length;
var i__4532__auto___4769 = (0);
while(true){
if((i__4532__auto___4769 < len__4531__auto___4768)){
args__4534__auto__.push((arguments[i__4532__auto___4769]));

var G__4770 = (i__4532__auto___4769 + (1));
i__4532__auto___4769 = G__4770;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__4765){
var map__4766 = p__4765;
var map__4766__$1 = ((((!((map__4766 == null)))?(((((map__4766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4766):map__4766);
var x = cljs.core.get.call(null,map__4766__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4766__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__4766__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq4764){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4764));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4779 = arguments.length;
var i__4532__auto___4780 = (0);
while(true){
if((i__4532__auto___4780 < len__4531__auto___4779)){
args__4534__auto__.push((arguments[i__4532__auto___4780]));

var G__4781 = (i__4532__auto___4780 + (1));
i__4532__auto___4780 = G__4781;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__4772){
var map__4773 = p__4772;
var map__4773__$1 = ((((!((map__4773 == null)))?(((((map__4773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4773):map__4773);
var x = cljs.core.get.call(null,map__4773__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4773__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__4773__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__4773,map__4773__$1,x,y,height){
return (function busmaker$main_bus$iter__4775(s__4776){
return (new cljs.core.LazySeq(null,((function (map__4773,map__4773__$1,x,y,height){
return (function (){
var s__4776__$1 = s__4776;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4776__$1);
if(temp__5457__auto__){
var s__4776__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4776__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4776__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4778 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4777 = (0);
while(true){
if((i__4777 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4777);
cljs.core.chunk_append.call(null,b__4778,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__4782 = (i__4777 + (1));
i__4777 = G__4782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4778),busmaker$main_bus$iter__4775.call(null,cljs.core.chunk_rest.call(null,s__4776__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4778),null);
}
} else {
var i = cljs.core.first.call(null,s__4776__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__4775.call(null,cljs.core.rest.call(null,s__4776__$2)));
}
} else {
return null;
}
break;
}
});})(map__4773,map__4773__$1,x,y,height))
,null,null));
});})(map__4773,map__4773__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq4771){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4771));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4791 = arguments.length;
var i__4532__auto___4792 = (0);
while(true){
if((i__4532__auto___4792 < len__4531__auto___4791)){
args__4534__auto__.push((arguments[i__4532__auto___4792]));

var G__4793 = (i__4532__auto___4792 + (1));
i__4532__auto___4792 = G__4793;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__4784){
var map__4785 = p__4784;
var map__4785__$1 = ((((!((map__4785 == null)))?(((((map__4785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4785):map__4785);
var x = cljs.core.get.call(null,map__4785__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4785__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__4785__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__4785,map__4785__$1,x,y,height){
return (function busmaker$main_bus$iter__4787(s__4788){
return (new cljs.core.LazySeq(null,((function (map__4785,map__4785__$1,x,y,height){
return (function (){
var s__4788__$1 = s__4788;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4788__$1);
if(temp__5457__auto__){
var s__4788__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4788__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4788__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4790 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4789 = (0);
while(true){
if((i__4789 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4789);
cljs.core.chunk_append.call(null,b__4790,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__4794 = (i__4789 + (1));
i__4789 = G__4794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4790),busmaker$main_bus$iter__4787.call(null,cljs.core.chunk_rest.call(null,s__4788__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4790),null);
}
} else {
var i = cljs.core.first.call(null,s__4788__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__4787.call(null,cljs.core.rest.call(null,s__4788__$2)));
}
} else {
return null;
}
break;
}
});})(map__4785,map__4785__$1,x,y,height))
,null,null));
});})(map__4785,map__4785__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq4783){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4783));
});

busmaker.main_bus.ingredient_taps = (function busmaker$main_bus$ingredient_taps(var_args){
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

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.main_bus.ingredient_taps.cljs$core$IFn$_invoke$arity$variadic = (function (xs,p__4797){
var map__4798 = p__4797;
var map__4798__$1 = ((((!((map__4798 == null)))?(((((map__4798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4798):map__4798);
var x = cljs.core.get.call(null,map__4798__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4798__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__4798,map__4798__$1,x,y){
return (function busmaker$main_bus$iter__4800(s__4801){
return (new cljs.core.LazySeq(null,((function (map__4798,map__4798__$1,x,y){
return (function (){
var s__4801__$1 = s__4801;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4801__$1);
if(temp__5457__auto__){
var s__4801__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4801__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4801__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4803 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4802 = (0);
while(true){
if((i__4802 < size__4323__auto__)){
var vec__4804 = cljs.core._nth.call(null,c__4322__auto__,i__4802);
var i = cljs.core.nth.call(null,vec__4804,(0),null);
var xi = cljs.core.nth.call(null,vec__4804,(1),null);
cljs.core.chunk_append.call(null,b__4803,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))));

var G__4813 = (i__4802 + (1));
i__4802 = G__4813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4803),busmaker$main_bus$iter__4800.call(null,cljs.core.chunk_rest.call(null,s__4801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4803),null);
}
} else {
var vec__4807 = cljs.core.first.call(null,s__4801__$2);
var i = cljs.core.nth.call(null,vec__4807,(0),null);
var xi = cljs.core.nth.call(null,vec__4807,(1),null);
return cljs.core.cons.call(null,busmaker.main_bus.tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),xi,new cljs.core.Keyword(null,"y","y",-1757859776),((y - i) - (1)),new cljs.core.Keyword(null,"length","length",588987862),((xi - x) + (1))),busmaker$main_bus$iter__4800.call(null,cljs.core.rest.call(null,s__4801__$2)));
}
} else {
return null;
}
break;
}
});})(map__4798,map__4798__$1,x,y))
,null,null));
});})(map__4798,map__4798__$1,x,y))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,xs)));
})());
});

busmaker.main_bus.ingredient_taps.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.main_bus.ingredient_taps.cljs$lang$applyTo = (function (seq4795){
var G__4796 = cljs.core.first.call(null,seq4795);
var seq4795__$1 = cljs.core.next.call(null,seq4795);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4796,seq4795__$1);
});

busmaker.main_bus.factory_line = (function busmaker$main_bus$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4830 = arguments.length;
var i__4532__auto___4831 = (0);
while(true){
if((i__4532__auto___4831 < len__4531__auto___4830)){
args__4534__auto__.push((arguments[i__4532__auto___4831]));

var G__4832 = (i__4532__auto___4831 + (1));
i__4532__auto___4831 = G__4832;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__4815){
var map__4816 = p__4815;
var map__4816__$1 = ((((!((map__4816 == null)))?(((((map__4816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4816):map__4816);
var x = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var recipes = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var n_factories = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__4816__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__4816,map__4816__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__4818(s__4819){
return (new cljs.core.LazySeq(null,((function (map__4816,map__4816__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__4819__$1 = s__4819;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4819__$1);
if(temp__5457__auto__){
var s__4819__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4819__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4819__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4821 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4820 = (0);
while(true){
if((i__4820 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4820);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__4821,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__4820,dx,i,c__4322__auto__,size__4323__auto__,b__4821,s__4819__$2,temp__5457__auto__,map__4816,map__4816__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__4818_$_iter__4822(s__4823){
return (new cljs.core.LazySeq(null,((function (i__4820,dx,i,c__4322__auto__,size__4323__auto__,b__4821,s__4819__$2,temp__5457__auto__,map__4816,map__4816__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__4823__$1 = s__4823;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4823__$1);
if(temp__5457__auto____$1){
var s__4823__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4823__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4823__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4825 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4824 = (0);
while(true){
if((i__4824 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__4824);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__4825,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__4833 = (i__4824 + (1));
i__4824 = G__4833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4825),busmaker$main_bus$iter__4818_$_iter__4822.call(null,cljs.core.chunk_rest.call(null,s__4823__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4825),null);
}
} else {
var j = cljs.core.first.call(null,s__4823__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__4818_$_iter__4822.call(null,cljs.core.rest.call(null,s__4823__$2)));
}
} else {
return null;
}
break;
}
});})(i__4820,dx,i,c__4322__auto__,size__4323__auto__,b__4821,s__4819__$2,temp__5457__auto__,map__4816,map__4816__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(i__4820,dx,i,c__4322__auto__,size__4323__auto__,b__4821,s__4819__$2,temp__5457__auto__,map__4816,map__4816__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__4834 = (i__4820 + (1));
i__4820 = G__4834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4821),busmaker$main_bus$iter__4818.call(null,cljs.core.chunk_rest.call(null,s__4819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4821),null);
}
} else {
var i = cljs.core.first.call(null,s__4819__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.small_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.main_bus.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__4819__$2,temp__5457__auto__,map__4816,map__4816__$1,x,y,recipes,n_factories,facility){
return (function busmaker$main_bus$iter__4818_$_iter__4826(s__4827){
return (new cljs.core.LazySeq(null,((function (dx,i,s__4819__$2,temp__5457__auto__,map__4816,map__4816__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__4827__$1 = s__4827;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4827__$1);
if(temp__5457__auto____$1){
var s__4827__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4827__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4827__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4829 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4828 = (0);
while(true){
if((i__4828 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__4828);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__4829,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null));

var G__4835 = (i__4828 + (1));
i__4828 = G__4835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4829),busmaker$main_bus$iter__4818_$_iter__4826.call(null,cljs.core.chunk_rest.call(null,s__4827__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4829),null);
}
} else {
var j = cljs.core.first.call(null,s__4827__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")], null),busmaker$main_bus$iter__4818_$_iter__4826.call(null,cljs.core.rest.call(null,s__4827__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__4819__$2,temp__5457__auto__,map__4816,map__4816__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(dx,i,s__4819__$2,temp__5457__auto__,map__4816,map__4816__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$main_bus$iter__4818.call(null,cljs.core.rest.call(null,s__4819__$2)));
}
} else {
return null;
}
break;
}
});})(map__4816,map__4816__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(map__4816,map__4816__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())))));
});

busmaker.main_bus.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.factory_line.cljs$lang$applyTo = (function (seq4814){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4814));
});

busmaker.main_bus.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.main_bus.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4844 = arguments.length;
var i__4532__auto___4845 = (0);
while(true){
if((i__4532__auto___4845 < len__4531__auto___4844)){
args__4534__auto__.push((arguments[i__4532__auto___4845]));

var G__4846 = (i__4532__auto___4845 + (1));
i__4532__auto___4845 = G__4846;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4837){
var map__4838 = p__4837;
var map__4838__$1 = ((((!((map__4838 == null)))?(((((map__4838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4838):map__4838);
var x = cljs.core.get.call(null,map__4838__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4838__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__4838__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__4838__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__4838__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__4838__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__4838,map__4838__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__4840(s__4841){
return (new cljs.core.LazySeq(null,((function (n,map__4838,map__4838__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__4841__$1 = s__4841;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4841__$1);
if(temp__5457__auto__){
var s__4841__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4841__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4841__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4843 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4842 = (0);
while(true){
if((i__4842 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4842);
cljs.core.chunk_append.call(null,b__4843,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__4847 = (i__4842 + (1));
i__4842 = G__4847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4843),busmaker$main_bus$iter__4840.call(null,cljs.core.chunk_rest.call(null,s__4841__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4843),null);
}
} else {
var i = cljs.core.first.call(null,s__4841__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__4840.call(null,cljs.core.rest.call(null,s__4841__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__4838,map__4838__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__4838,map__4838__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq4836){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4836));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4852 = arguments.length;
var i__4532__auto___4853 = (0);
while(true){
if((i__4532__auto___4853 < len__4531__auto___4852)){
args__4534__auto__.push((arguments[i__4532__auto___4853]));

var G__4854 = (i__4532__auto___4853 + (1));
i__4532__auto___4853 = G__4854;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__4849){
var map__4850 = p__4849;
var map__4850__$1 = ((((!((map__4850 == null)))?(((((map__4850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4850):map__4850);
var x = cljs.core.get.call(null,map__4850__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4850__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__4850__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__4850__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__4850__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__4850__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq4848){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4848));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
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
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4856){
var map__4857 = p__4856;
var map__4857__$1 = ((((!((map__4857 == null)))?(((((map__4857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4857):map__4857);
var x = cljs.core.get.call(null,map__4857__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4857__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4857__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__4857__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__4857__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__4857,map__4857__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__4859(s__4860){
return (new cljs.core.LazySeq(null,((function (map__4857,map__4857__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__4860__$1 = s__4860;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4860__$1);
if(temp__5457__auto__){
var s__4860__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4860__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4860__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4862 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4861 = (0);
while(true){
if((i__4861 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4861);
cljs.core.chunk_append.call(null,b__4862,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__4866 = (i__4861 + (1));
i__4861 = G__4866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4862),busmaker$main_bus$iter__4859.call(null,cljs.core.chunk_rest.call(null,s__4860__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4862),null);
}
} else {
var i = cljs.core.first.call(null,s__4860__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__4859.call(null,cljs.core.rest.call(null,s__4860__$2)));
}
} else {
return null;
}
break;
}
});})(map__4857,map__4857__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__4857,map__4857__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq4855){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4855));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
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
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4868){
var map__4869 = p__4868;
var map__4869__$1 = ((((!((map__4869 == null)))?(((((map__4869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4869):map__4869);
var x = cljs.core.get.call(null,map__4869__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4869__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__4869__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__4869__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
if(cljs.core.truth_(bus_index)){
var n = ((3) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__4869,map__4869__$1,x,y,input_index,bus_index){
return (function busmaker$main_bus$iter__4871(s__4872){
return (new cljs.core.LazySeq(null,((function (n,map__4869,map__4869__$1,x,y,input_index,bus_index){
return (function (){
var s__4872__$1 = s__4872;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4872__$1);
if(temp__5457__auto__){
var s__4872__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4872__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4872__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4874 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4873 = (0);
while(true){
if((i__4873 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4873);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4874,(function (){var G__4875 = cljs.core.mod.call(null,i,(3));
switch (G__4875) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4875)].join('')));

}
})());

var G__4881 = (i__4873 + (1));
i__4873 = G__4881;
continue;
} else {
var G__4882 = (i__4873 + (1));
i__4873 = G__4882;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4874),busmaker$main_bus$iter__4871.call(null,cljs.core.chunk_rest.call(null,s__4872__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4874),null);
}
} else {
var i = cljs.core.first.call(null,s__4872__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(function (){var G__4876 = cljs.core.mod.call(null,i,(3));
switch (G__4876) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4876)].join('')));

}
})(),busmaker$main_bus$iter__4871.call(null,cljs.core.rest.call(null,s__4872__$2)));
} else {
var G__4884 = cljs.core.rest.call(null,s__4872__$2);
s__4872__$1 = G__4884;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__4869,map__4869__$1,x,y,input_index,bus_index))
,null,null));
});})(n,map__4869,map__4869__$1,x,y,input_index,bus_index))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + ((3) * bus_index)) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (4))),null,(1),null))))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq4867){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4867));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4893 = arguments.length;
var i__4532__auto___4894 = (0);
while(true){
if((i__4532__auto___4894 < len__4531__auto___4893)){
args__4534__auto__.push((arguments[i__4532__auto___4894]));

var G__4895 = (i__4532__auto___4894 + (1));
i__4532__auto___4894 = G__4895;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__4886){
var map__4887 = p__4886;
var map__4887__$1 = ((((!((map__4887 == null)))?(((((map__4887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4887):map__4887);
var x = cljs.core.get.call(null,map__4887__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4887__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4887__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__4887__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__4887,map__4887__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__4889(s__4890){
return (new cljs.core.LazySeq(null,((function (map__4887,map__4887__$1,x,y,output_index,y_extension){
return (function (){
var s__4890__$1 = s__4890;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4890__$1);
if(temp__5457__auto__){
var s__4890__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4890__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4890__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4892 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4891 = (0);
while(true){
if((i__4891 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4891);
cljs.core.chunk_append.call(null,b__4892,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

var G__4896 = (i__4891 + (1));
i__4891 = G__4896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4892),busmaker$main_bus$iter__4889.call(null,cljs.core.chunk_rest.call(null,s__4890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4892),null);
}
} else {
var i = cljs.core.first.call(null,s__4890__$2);
return cljs.core.cons.call(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__4889.call(null,cljs.core.rest.call(null,s__4890__$2)));
}
} else {
return null;
}
break;
}
});})(map__4887,map__4887__$1,x,y,output_index,y_extension))
,null,null));
});})(map__4887,map__4887__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})(),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq4885){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4885));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4909 = arguments.length;
var i__4532__auto___4910 = (0);
while(true){
if((i__4532__auto___4910 < len__4531__auto___4909)){
args__4534__auto__.push((arguments[i__4532__auto___4910]));

var G__4911 = (i__4532__auto___4910 + (1));
i__4532__auto___4910 = G__4911;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__4898){
var map__4899 = p__4898;
var map__4899__$1 = ((((!((map__4899 == null)))?(((((map__4899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4899):map__4899);
var x = cljs.core.get.call(null,map__4899__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4899__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4899__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__4899__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),(new cljs.core.List(null,busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (n,map__4899,map__4899__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__4901(s__4902){
return (new cljs.core.LazySeq(null,((function (n,map__4899,map__4899__$1,x,y,output_index,y_extension){
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
var i = cljs.core._nth.call(null,c__4322__auto__,i__4903);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4904,(((i >= n))?(function (){var G__4905 = cljs.core.mod.call(null,i,(3));
switch (G__4905) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4905)].join('')));

}
})():(function (){var G__4906 = cljs.core.mod.call(null,i,(3));
switch (G__4906) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4906)].join('')));

}
})()));

var G__4914 = (i__4903 + (1));
i__4903 = G__4914;
continue;
} else {
var G__4915 = (i__4903 + (1));
i__4903 = G__4915;
continue;
}
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
var i = cljs.core.first.call(null,s__4902__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__4907 = cljs.core.mod.call(null,i,(3));
switch (G__4907) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4907)].join('')));

}
})():(function (){var G__4908 = cljs.core.mod.call(null,i,(3));
switch (G__4908) {
case (0):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4908)].join('')));

}
})()),busmaker$main_bus$iter__4901.call(null,cljs.core.rest.call(null,s__4902__$2)));
} else {
var G__4918 = cljs.core.rest.call(null,s__4902__$2);
s__4902__$1 = G__4918;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__4899,map__4899__$1,x,y,output_index,y_extension))
,null,null));
});})(n,map__4899,map__4899__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq4897){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4897));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4923 = arguments.length;
var i__4532__auto___4924 = (0);
while(true){
if((i__4532__auto___4924 < len__4531__auto___4923)){
args__4534__auto__.push((arguments[i__4532__auto___4924]));

var G__4925 = (i__4532__auto___4924 + (1));
i__4532__auto___4924 = G__4925;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__4920){
var map__4921 = p__4920;
var map__4921__$1 = ((((!((map__4921 == null)))?(((((map__4921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4921):map__4921);
var x = cljs.core.get.call(null,map__4921__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__4921__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__4921__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__4921__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var n = ((3) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq4919){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4919));
});

busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name,facility){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"basic-oil-processing":recipe_name);
var G__4926 = busmaker.recipes.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipe_data.recipes,recipe_name__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))){
return cljs.core.conj.call(null,G__4926,"coal");
} else {
return G__4926;
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
var len__4531__auto___5038 = arguments.length;
var i__4532__auto___5039 = (0);
while(true){
if((i__4532__auto___5039 < len__4531__auto___5038)){
args__4534__auto__.push((arguments[i__4532__auto___5039]));

var G__5040 = (i__4532__auto___5039 + (1));
i__4532__auto___5039 = G__5040;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__4930){
var map__4931 = p__4930;
var map__4931__$1 = ((((!((map__4931 == null)))?(((((map__4931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4931):map__4931);
var x = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var n_factories = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipes = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var buses = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"buses","buses",214650120));
var input_indexes = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var ingredient = cljs.core.first.call(null,recipes);
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (p1__4927_SHARP_,p2__4928_SHARP_){
return cljs.core.assoc.call(null,p1__4927_SHARP_,"entity_number",(p2__4928_SHARP_ + (1)));
});})(ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,(function (){var G__4933 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.main_bus.factory_line.call(null,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4934(s__4935){
return (new cljs.core.LazySeq(null,((function (ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4935__$1 = s__4935;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4935__$1);
if(temp__5457__auto__){
var s__4935__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4935__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4935__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4937 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4936 = (0);
while(true){
if((i__4936 < size__4323__auto__)){
var vec__4938 = cljs.core._nth.call(null,c__4322__auto__,i__4936);
var bus_ingredient = cljs.core.nth.call(null,vec__4938,(0),null);
var i = cljs.core.nth.call(null,vec__4938,(1),null);
cljs.core.chunk_append.call(null,b__4937,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})());

var G__5041 = (i__4936 + (1));
i__4936 = G__5041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4937),busmaker$main_bus$iter__4934.call(null,cljs.core.chunk_rest.call(null,s__4935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4937),null);
}
} else {
var vec__4941 = cljs.core.first.call(null,s__4935__$2);
var bus_ingredient = cljs.core.nth.call(null,vec__4941,(0),null);
var i = cljs.core.nth.call(null,vec__4941,(1),null);
return cljs.core.cons.call(null,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
} else {
return busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (3))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility));
}
})(),busmaker$main_bus$iter__4934.call(null,cljs.core.rest.call(null,s__4935__$2)));
}
} else {
return null;
}
break;
}
});})(ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
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
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4944(s__4945){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4945__$1 = s__4945;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4945__$1);
if(temp__5457__auto__){
var s__4945__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4945__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4945__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4947 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4946 = (0);
while(true){
if((i__4946 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4946);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__4947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null));

var G__5042 = (i__4946 + (1));
i__4946 = G__5042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4947),busmaker$main_bus$iter__4944.call(null,cljs.core.chunk_rest.call(null,s__4945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4947),null);
}
} else {
var i = cljs.core.first.call(null,s__4945__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker.main_bus.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))], null),busmaker$main_bus$iter__4944.call(null,cljs.core.rest.call(null,s__4945__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4948(s__4949){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4949__$1 = s__4949;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4949__$1);
if(temp__5457__auto__){
var s__4949__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4949__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4949__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4951 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4950 = (0);
while(true){
if((i__4950 < size__4323__auto__)){
var vec__4952 = cljs.core._nth.call(null,c__4322__auto__,i__4950);
var input_index = cljs.core.nth.call(null,vec__4952,(0),null);
var bus_index = cljs.core.nth.call(null,vec__4952,(1),null);
cljs.core.chunk_append.call(null,b__4951,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__4950,x__$2,y__$3,y__$2,vec__4952,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4951,s__4949__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4948_$_iter__4955(s__4956){
return (new cljs.core.LazySeq(null,((function (i__4950,x__$2,y__$3,y__$2,vec__4952,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4951,s__4949__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4956__$1 = s__4956;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4956__$1);
if(temp__5457__auto____$1){
var s__4956__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4956__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4956__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4958 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4957 = (0);
while(true){
if((i__4957 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__4957);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__4958,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__5043 = (i__4957 + (1));
i__4957 = G__5043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4958),busmaker$main_bus$iter__4948_$_iter__4955.call(null,cljs.core.chunk_rest.call(null,s__4956__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4958),null);
}
} else {
var i = cljs.core.first.call(null,s__4956__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__4948_$_iter__4955.call(null,cljs.core.rest.call(null,s__4956__$2)));
}
} else {
return null;
}
break;
}
});})(i__4950,x__$2,y__$3,y__$2,vec__4952,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4951,s__4949__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__4950,x__$2,y__$3,y__$2,vec__4952,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__4951,s__4949__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)));

var G__5044 = (i__4950 + (1));
i__4950 = G__5044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4951),busmaker$main_bus$iter__4948.call(null,cljs.core.chunk_rest.call(null,s__4949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4951),null);
}
} else {
var vec__4959 = cljs.core.first.call(null,s__4949__$2);
var input_index = cljs.core.nth.call(null,vec__4959,(0),null);
var bus_index = cljs.core.nth.call(null,vec__4959,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$3,y__$2,vec__4959,input_index,bus_index,s__4949__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4948_$_iter__4962(s__4963){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$3,y__$2,vec__4959,input_index,bus_index,s__4949__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4963__$1 = s__4963;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4963__$1);
if(temp__5457__auto____$1){
var s__4963__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4963__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4963__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4965 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4964 = (0);
while(true){
if((i__4964 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4964);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__4965,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null));

var G__5045 = (i__4964 + (1));
i__4964 = G__5045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4965),busmaker$main_bus$iter__4948_$_iter__4962.call(null,cljs.core.chunk_rest.call(null,s__4963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4965),null);
}
} else {
var i = cljs.core.first.call(null,s__4963__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.main_bus.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")], null),busmaker$main_bus$iter__4948_$_iter__4962.call(null,cljs.core.rest.call(null,s__4963__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$3,y__$2,vec__4959,input_index,bus_index,s__4949__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$2,y__$3,y__$2,vec__4959,input_index,bus_index,s__4949__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index)),busmaker$main_bus$iter__4948.call(null,cljs.core.rest.call(null,s__4949__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4966(s__4967){
return (new cljs.core.LazySeq(null,((function (ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4967__$1 = s__4967;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4967__$1);
if(temp__5457__auto__){
var s__4967__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4967__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4967__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4969 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4968 = (0);
while(true){
if((i__4968 < size__4323__auto__)){
var vec__4970 = cljs.core._nth.call(null,c__4322__auto__,i__4968);
var output_recipe = cljs.core.nth.call(null,vec__4970,(0),null);
var output_index = cljs.core.nth.call(null,vec__4970,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__4969,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__4968,s__4967__$1,tap_x,x__$1,y__$1,vec__4970,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__4969,s__4967__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4966_$_iter__4973(s__4974){
return (new cljs.core.LazySeq(null,((function (i__4968,s__4967__$1,tap_x,x__$1,y__$1,vec__4970,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__4969,s__4967__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4974__$1 = s__4974;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4974__$1);
if(temp__5457__auto____$1){
var s__4974__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4974__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4974__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4976 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4975 = (0);
while(true){
if((i__4975 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__4975);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4976,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4977 = cljs.core.mod.call(null,i,(3));
switch (G__4977) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4977)].join('')));

}
})()));

var G__5047 = (i__4975 + (1));
i__4975 = G__5047;
continue;
} else {
var G__5048 = (i__4975 + (1));
i__4975 = G__5048;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4976),busmaker$main_bus$iter__4966_$_iter__4973.call(null,cljs.core.chunk_rest.call(null,s__4974__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4976),null);
}
} else {
var i = cljs.core.first.call(null,s__4974__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4978 = cljs.core.mod.call(null,i,(3));
switch (G__4978) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4978)].join('')));

}
})()),busmaker$main_bus$iter__4966_$_iter__4973.call(null,cljs.core.rest.call(null,s__4974__$2)));
} else {
var G__5050 = cljs.core.rest.call(null,s__4974__$2);
s__4974__$1 = G__5050;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__4968,s__4967__$1,tap_x,x__$1,y__$1,vec__4970,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__4969,s__4967__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__4968,s__4967__$1,tap_x,x__$1,y__$1,vec__4970,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__4969,s__4967__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__5051 = (i__4968 + (1));
i__4968 = G__5051;
continue;
} else {
var G__5052 = (i__4968 + (1));
i__4968 = G__5052;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4969),busmaker$main_bus$iter__4966.call(null,cljs.core.chunk_rest.call(null,s__4967__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4969),null);
}
} else {
var vec__4979 = cljs.core.first.call(null,s__4967__$2);
var output_recipe = cljs.core.nth.call(null,vec__4979,(0),null);
var output_index = cljs.core.nth.call(null,vec__4979,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__4967__$1,tap_x,x__$1,y__$1,vec__4979,output_recipe,output_index,s__4967__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4966_$_iter__4982(s__4983){
return (new cljs.core.LazySeq(null,((function (s__4967__$1,tap_x,x__$1,y__$1,vec__4979,output_recipe,output_index,s__4967__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4983__$1 = s__4983;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4983__$1);
if(temp__5457__auto____$1){
var s__4983__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4983__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4983__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4985 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4984 = (0);
while(true){
if((i__4984 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__4984);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4985,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4986 = cljs.core.mod.call(null,i,(3));
switch (G__4986) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4986)].join('')));

}
})()));

var G__5054 = (i__4984 + (1));
i__4984 = G__5054;
continue;
} else {
var G__5055 = (i__4984 + (1));
i__4984 = G__5055;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4985),busmaker$main_bus$iter__4966_$_iter__4982.call(null,cljs.core.chunk_rest.call(null,s__4983__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4985),null);
}
} else {
var i = cljs.core.first.call(null,s__4983__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4987 = cljs.core.mod.call(null,i,(3));
switch (G__4987) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4987)].join('')));

}
})()),busmaker$main_bus$iter__4966_$_iter__4982.call(null,cljs.core.rest.call(null,s__4983__$2)));
} else {
var G__5057 = cljs.core.rest.call(null,s__4983__$2);
s__4983__$1 = G__5057;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__4967__$1,tap_x,x__$1,y__$1,vec__4979,output_recipe,output_index,s__4967__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__4967__$1,tap_x,x__$1,y__$1,vec__4979,output_recipe,output_index,s__4967__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__4966.call(null,cljs.core.rest.call(null,s__4967__$2)));
} else {
var G__5058 = cljs.core.rest.call(null,s__4967__$2);
s__4967__$1 = G__5058;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4988(s__4989){
return (new cljs.core.LazySeq(null,((function (ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4989__$1 = s__4989;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4989__$1);
if(temp__5457__auto__){
var s__4989__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4989__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4989__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4991 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4990 = (0);
while(true){
if((i__4990 < size__4323__auto__)){
var vec__4992 = cljs.core._nth.call(null,c__4322__auto__,i__4990);
var output_recipe = cljs.core.nth.call(null,vec__4992,(0),null);
var output_index = cljs.core.nth.call(null,vec__4992,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.main_bus.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__4991,(function (){var tap_x = ((4) + ((3) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (2));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__4990,s__4989__$1,tap_x,x__$1,y__$1,vec__4992,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__4991,s__4989__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4988_$_iter__4995(s__4996){
return (new cljs.core.LazySeq(null,((function (i__4990,s__4989__$1,tap_x,x__$1,y__$1,vec__4992,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__4991,s__4989__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__4996__$1 = s__4996;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4996__$1);
if(temp__5457__auto____$1){
var s__4996__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4996__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__4996__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__4998 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__4997 = (0);
while(true){
if((i__4997 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__4997);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__4998,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__4999 = cljs.core.mod.call(null,i,(3));
switch (G__4999) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4999)].join('')));

}
})()));

var G__5060 = (i__4997 + (1));
i__4997 = G__5060;
continue;
} else {
var G__5061 = (i__4997 + (1));
i__4997 = G__5061;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4998),busmaker$main_bus$iter__4988_$_iter__4995.call(null,cljs.core.chunk_rest.call(null,s__4996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4998),null);
}
} else {
var i = cljs.core.first.call(null,s__4996__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__5000 = cljs.core.mod.call(null,i,(3));
switch (G__5000) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5000)].join('')));

}
})()),busmaker$main_bus$iter__4988_$_iter__4995.call(null,cljs.core.rest.call(null,s__4996__$2)));
} else {
var G__5063 = cljs.core.rest.call(null,s__4996__$2);
s__4996__$1 = G__5063;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__4990,s__4989__$1,tap_x,x__$1,y__$1,vec__4992,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__4991,s__4989__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(i__4990,s__4989__$1,tap_x,x__$1,y__$1,vec__4992,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__4991,s__4989__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})());

var G__5064 = (i__4990 + (1));
i__4990 = G__5064;
continue;
} else {
var G__5065 = (i__4990 + (1));
i__4990 = G__5065;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4991),busmaker$main_bus$iter__4988.call(null,cljs.core.chunk_rest.call(null,s__4989__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4991),null);
}
} else {
var vec__5001 = cljs.core.first.call(null,s__4989__$2);
var output_recipe = cljs.core.nth.call(null,vec__5001,(0),null);
var output_index = cljs.core.nth.call(null,vec__5001,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__4989__$1,tap_x,x__$1,y__$1,vec__5001,output_recipe,output_index,s__4989__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__4988_$_iter__5004(s__5005){
return (new cljs.core.LazySeq(null,((function (s__4989__$1,tap_x,x__$1,y__$1,vec__5001,output_recipe,output_index,s__4989__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__5005__$1 = s__5005;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__5005__$1);
if(temp__5457__auto____$1){
var s__5005__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5005__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5005__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5007 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5006 = (0);
while(true){
if((i__5006 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__5006);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
cljs.core.chunk_append.call(null,b__5007,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__5008 = cljs.core.mod.call(null,i,(3));
switch (G__5008) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5008)].join('')));

}
})()));

var G__5067 = (i__5006 + (1));
i__5006 = G__5067;
continue;
} else {
var G__5068 = (i__5006 + (1));
i__5006 = G__5068;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5007),busmaker$main_bus$iter__4988_$_iter__5004.call(null,cljs.core.chunk_rest.call(null,s__5005__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5007),null);
}
} else {
var i = cljs.core.first.call(null,s__5005__$2);
if(cljs.core.not_EQ_.call(null,(2),cljs.core.mod.call(null,i,(3)))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__5009 = cljs.core.mod.call(null,i,(3));
switch (G__5009) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5009)].join('')));

}
})()),busmaker$main_bus$iter__4988_$_iter__5004.call(null,cljs.core.rest.call(null,s__5005__$2)));
} else {
var G__5070 = cljs.core.rest.call(null,s__5005__$2);
s__5005__$1 = G__5070;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__4989__$1,tap_x,x__$1,y__$1,vec__5001,output_recipe,output_index,s__4989__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__4989__$1,tap_x,x__$1,y__$1,vec__5001,output_recipe,output_index,s__4989__$2,temp__5457__auto__,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})(),busmaker$main_bus$iter__4988.call(null,cljs.core.rest.call(null,s__4989__$2)));
} else {
var G__5071 = cljs.core.rest.call(null,s__4989__$2);
s__4989__$1 = G__5071;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient));
})()));
var G__4933__$1 = ((cljs.core.not.call(null,busmaker.main_bus.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__4933,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var output_index = buses.call(null,ingredient);
var iter__4324__auto__ = ((function (x__$1,y__$1,output_index,G__4933,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__5010(s__5011){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,output_index,G__4933,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__5011__$1 = s__5011;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5011__$1);
if(temp__5457__auto__){
var s__5011__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5011__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5011__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5013 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5012 = (0);
while(true){
if((i__5012 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__5012);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
cljs.core.chunk_append.call(null,b__5013,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)));

var G__5072 = (i__5012 + (1));
i__5012 = G__5072;
continue;
} else {
var G__5073 = (i__5012 + (1));
i__5012 = G__5073;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5013),busmaker$main_bus$iter__5010.call(null,cljs.core.chunk_rest.call(null,s__5011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5013),null);
}
} else {
var i = cljs.core.first.call(null,s__5011__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension)),busmaker$main_bus$iter__5010.call(null,cljs.core.rest.call(null,s__5011__$2)));
} else {
var G__5074 = cljs.core.rest.call(null,s__5011__$2);
s__5011__$1 = G__5074;
continue;
}
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,output_index,G__4933,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(x__$1,y__$1,output_index,G__4933,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__4933);
var G__4933__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.main_bus.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))?cljs.core.concat.call(null,G__4933__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__4933,G__4933__$1,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__5014(s__5015){
return (new cljs.core.LazySeq(null,((function (G__4933,G__4933__$1,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__5015__$1 = s__5015;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5015__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__5015__$1,i,xs__6012__auto__,temp__5457__auto__,G__4933,G__4933__$1,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__5014_$_iter__5016(s__5017){
return (new cljs.core.LazySeq(null,((function (s__5015__$1,i,xs__6012__auto__,temp__5457__auto__,G__4933,G__4933__$1,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__5017__$1 = s__5017;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__5017__$1);
if(temp__5457__auto____$1){
var s__5017__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5017__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5017__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5019 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5018 = (0);
while(true){
if((i__5018 < size__4323__auto__)){
var vec__5020 = cljs.core._nth.call(null,c__4322__auto__,i__5018);
var input_recipe = cljs.core.nth.call(null,vec__5020,(0),null);
var input_index = cljs.core.nth.call(null,vec__5020,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__5019,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__5075 = (i__5018 + (1));
i__5018 = G__5075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5019),busmaker$main_bus$iter__5014_$_iter__5016.call(null,cljs.core.chunk_rest.call(null,s__5017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5019),null);
}
} else {
var vec__5023 = cljs.core.first.call(null,s__5017__$2);
var input_recipe = cljs.core.nth.call(null,vec__5023,(0),null);
var input_index = cljs.core.nth.call(null,vec__5023,(1),null);
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
)),args))))),busmaker$main_bus$iter__5014_$_iter__5016.call(null,cljs.core.rest.call(null,s__5017__$2)));
}
} else {
return null;
}
break;
}
});})(s__5015__$1,i,xs__6012__auto__,temp__5457__auto__,G__4933,G__4933__$1,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__5015__$1,i,xs__6012__auto__,temp__5457__auto__,G__4933,G__4933__$1,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__5014.call(null,cljs.core.rest.call(null,s__5015__$1)));
} else {
var G__5076 = cljs.core.rest.call(null,s__5015__$1);
s__5015__$1 = G__5076;
continue;
}
} else {
return null;
}
break;
}
});})(G__4933,G__4933__$1,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(G__4933,G__4933__$1,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__4933__$1);
if(cljs.core.truth_(busmaker.main_bus.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__4933__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$1,x__$1,G__4933,G__4933__$1,G__4933__$2,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__5026(s__5027){
return (new cljs.core.LazySeq(null,((function (y__$1,x__$1,G__4933,G__4933__$1,G__4933__$2,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__5027__$1 = s__5027;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5027__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__5027__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__4933,G__4933__$1,G__4933__$2,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function busmaker$main_bus$iter__5026_$_iter__5028(s__5029){
return (new cljs.core.LazySeq(null,((function (s__5027__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__4933,G__4933__$1,G__4933__$2,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes){
return (function (){
var s__5029__$1 = s__5029;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__5029__$1);
if(temp__5457__auto____$1){
var s__5029__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5029__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5029__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5031 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5030 = (0);
while(true){
if((i__5030 < size__4323__auto__)){
var vec__5032 = cljs.core._nth.call(null,c__4322__auto__,i__5030);
var output_recipe = cljs.core.nth.call(null,vec__5032,(0),null);
var output_index = cljs.core.nth.call(null,vec__5032,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__5031,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__5077 = (i__5030 + (1));
i__5030 = G__5077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5031),busmaker$main_bus$iter__5026_$_iter__5028.call(null,cljs.core.chunk_rest.call(null,s__5029__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5031),null);
}
} else {
var vec__5035 = cljs.core.first.call(null,s__5029__$2);
var output_recipe = cljs.core.nth.call(null,vec__5035,(0),null);
var output_index = cljs.core.nth.call(null,vec__5035,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__5026_$_iter__5028.call(null,cljs.core.rest.call(null,s__5029__$2)));
}
} else {
return null;
}
break;
}
});})(s__5027__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__4933,G__4933__$1,G__4933__$2,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(s__5027__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__4933,G__4933__$1,G__4933__$2,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.main_bus.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__5026.call(null,cljs.core.rest.call(null,s__5027__$1)));
} else {
var G__5078 = cljs.core.rest.call(null,s__5027__$1);
s__5027__$1 = G__5078;
continue;
}
} else {
return null;
}
break;
}
});})(y__$1,x__$1,G__4933,G__4933__$1,G__4933__$2,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
,null,null));
});})(y__$1,x__$1,G__4933,G__4933__$1,G__4933__$2,ingredient,map__4931,map__4931__$1,x,y,n_factories,facility,recipes,buses,input_indexes))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__4933__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq4929){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4929));
});

busmaker.main_bus.raw_QMARK_ = (function busmaker$main_bus$raw_QMARK_(recipe_name){
return cljs.core.re_find.call(null,/.*ore|water|coal|^stone$/,recipe_name);
});
busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(factories,bus_outputs){
var bus_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (bus_index){
return (function (p__5079,factory){
var map__5080 = p__5079;
var map__5080__$1 = ((((!((map__5080 == null)))?(((((map__5080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5080):map__5080);
var acc = map__5080__$1;
var x = cljs.core.get.call(null,map__5080__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5080__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__5082 = factory;
var map__5082__$1 = ((((!((map__5082 == null)))?(((((map__5082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5082):map__5082);
var facility = cljs.core.get.call(null,map__5082__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__5082__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__5082__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var height = busmaker.main_bus.ingredient_height.call(null,cljs.core.first.call(null,recipes),facility);
var input_indexes = cljs.core.map.call(null,bus_index,busmaker.main_bus.ingredients.call(null,cljs.core.first.call(null,recipes),facility));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_index,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["assembling-machine-2",null,"chemical-plant",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
))),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,height);
});})(bus_index))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),factories)));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__5084_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__5084_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__5084_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
}),cljs.core.identity),entities)));
});
