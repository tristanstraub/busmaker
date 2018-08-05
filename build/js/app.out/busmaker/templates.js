// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.templates');
goog.require('cljs.core');
goog.require('busmaker.recipes');
busmaker.templates.blueprint_direction_inserter = (function busmaker$templates$blueprint_direction_inserter(p__8209){
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
busmaker.templates.blueprint_direction = (function busmaker$templates$blueprint_direction(p__8214){
var vec__8215 = p__8214;
var x = cljs.core.nth.call(null,vec__8215,(0),null);
var y = cljs.core.nth.call(null,vec__8215,(1),null);
var G__8218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),G__8218)){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),G__8218)){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),G__8218)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),G__8218)){
return (6);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8218)].join('')));

}
}
}
}
});
busmaker.templates.direction_blueprint = (function busmaker$templates$direction_blueprint(d){
var G__8219 = d;
switch (G__8219) {
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);

break;
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8219)].join('')));

}
});
busmaker.templates.inserter = (function busmaker$templates$inserter(var_args){
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
return busmaker.templates.inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.templates.inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8222){
var map__8223 = p__8222;
var map__8223__$1 = ((((!((map__8223 == null)))?(((((map__8223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8223):map__8223);
var x = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8223__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.templates.blueprint_direction_inserter.call(null,direction),"name","inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null)], null);
});

busmaker.templates.inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.templates.inserter.cljs$lang$applyTo = (function (seq8221){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8221));
});

busmaker.templates.transport_belt = (function busmaker$templates$transport_belt(var_args){
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
return busmaker.templates.transport_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.templates.transport_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8229){
var map__8230 = p__8229;
var map__8230__$1 = ((((!((map__8230 == null)))?(((((map__8230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8230):map__8230);
var x = cljs.core.get.call(null,map__8230__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8230__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8230__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.templates.blueprint_direction.call(null,direction),"name","transport-belt","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null)], null);
});

busmaker.templates.transport_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.templates.transport_belt.cljs$lang$applyTo = (function (seq8228){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8228));
});

busmaker.templates.underground_belt = (function busmaker$templates$underground_belt(var_args){
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
return busmaker.templates.underground_belt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.templates.underground_belt.cljs$core$IFn$_invoke$arity$variadic = (function (p__8236){
var map__8237 = p__8236;
var map__8237__$1 = ((((!((map__8237 == null)))?(((((map__8237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8237):map__8237);
var x = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"type","type",1174270348),"input");
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, ["direction",busmaker.templates.blueprint_direction.call(null,direction),"name","underground-belt","type",type,"position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null)], null);
});

busmaker.templates.underground_belt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.templates.underground_belt.cljs$lang$applyTo = (function (seq8235){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8235));
});

busmaker.templates.small_electric_pole = (function busmaker$templates$small_electric_pole(var_args){
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
return busmaker.templates.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.templates.small_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8243){
var map__8244 = p__8243;
var map__8244__$1 = ((((!((map__8244 == null)))?(((((map__8244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8244):map__8244);
var x = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8244__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["name","small-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null)], null);
});

busmaker.templates.small_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.templates.small_electric_pole.cljs$lang$applyTo = (function (seq8242){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8242));
});

busmaker.templates.factory = (function busmaker$templates$factory(var_args){
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
return busmaker.templates.factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.templates.factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__8250){
var map__8251 = p__8250;
var map__8251__$1 = ((((!((map__8251 == null)))?(((((map__8251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8251):map__8251);
var x = cljs.core.get.call(null,map__8251__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8251__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var facility = cljs.core.get.call(null,map__8251__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipe = cljs.core.get.call(null,map__8251__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, ["name",facility,"recipe",busmaker.recipes.recipe_type.call(null,recipe),"position",new cljs.core.PersistentArrayMap(null, 2, ["x",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(x + 0.5):(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not.call(null,busmaker.recipes.fluid_QMARK_.call(null,recipe));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["battery",null,"sulfur",null,"sulfuric-acid",null,"lubricant",null], null), null).call(null,recipe);
}
})())?x:(x - (1))
)),"y",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(y + 0.5):y
)], null),"direction",(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?busmaker.templates.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)):busmaker.templates.blueprint_direction_inserter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))
)], null)], null);
});

busmaker.templates.factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.templates.factory.cljs$lang$applyTo = (function (seq8249){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8249));
});

busmaker.templates.medium_electric_pole = (function busmaker$templates$medium_electric_pole(var_args){
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
return busmaker.templates.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.templates.medium_electric_pole.cljs$core$IFn$_invoke$arity$variadic = (function (p__8257){
var map__8258 = p__8257;
var map__8258__$1 = ((((!((map__8258 == null)))?(((((map__8258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8258):map__8258);
var x = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8258__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["name","medium-electric-pole","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null)], null);
});

busmaker.templates.medium_electric_pole.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.templates.medium_electric_pole.cljs$lang$applyTo = (function (seq8256){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8256));
});

busmaker.templates.factory_line = (function busmaker$templates$factory_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8279 = arguments.length;
var i__4532__auto___8280 = (0);
while(true){
if((i__4532__auto___8280 < len__4531__auto___8279)){
args__4534__auto__.push((arguments[i__4532__auto___8280]));

var G__8281 = (i__4532__auto___8280 + (1));
i__4532__auto___8280 = G__8281;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.templates.factory_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.templates.factory_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8264){
var map__8265 = p__8264;
var map__8265__$1 = ((((!((map__8265 == null)))?(((((map__8265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8265):map__8265);
var x = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var recipes = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var n_factories = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),(1));
var facility = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900),"assembling-machine-1");
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8265,map__8265__$1,x,y,recipes,n_factories,facility){
return (function busmaker$templates$iter__8267(s__8268){
return (new cljs.core.LazySeq(null,((function (map__8265,map__8265__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8268__$1 = s__8268;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8268__$1);
if(temp__5457__auto__){
var s__8268__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8268__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8268__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8270 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8269 = (0);
while(true){
if((i__8269 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8269);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8270,cljs.core.concat.call(null,busmaker.templates.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.templates.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.templates.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8269,dx,i,c__4322__auto__,size__4323__auto__,b__8270,s__8268__$2,temp__5457__auto__,map__8265,map__8265__$1,x,y,recipes,n_factories,facility){
return (function busmaker$templates$iter__8267_$_iter__8271(s__8272){
return (new cljs.core.LazySeq(null,((function (i__8269,dx,i,c__4322__auto__,size__4323__auto__,b__8270,s__8268__$2,temp__5457__auto__,map__8265,map__8265__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8272__$1 = s__8272;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8272__$1);
if(temp__5457__auto____$1){
var s__8272__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8272__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8272__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8274 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8273 = (0);
while(true){
if((i__8273 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8273);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8274,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")));

var G__8282 = (i__8273 + (1));
i__8273 = G__8282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8274),busmaker$templates$iter__8267_$_iter__8271.call(null,cljs.core.chunk_rest.call(null,s__8272__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8274),null);
}
} else {
var j = cljs.core.first.call(null,s__8272__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")),busmaker$templates$iter__8267_$_iter__8271.call(null,cljs.core.rest.call(null,s__8272__$2)));
}
} else {
return null;
}
break;
}
});})(i__8269,dx,i,c__4322__auto__,size__4323__auto__,b__8270,s__8268__$2,temp__5457__auto__,map__8265,map__8265__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(i__8269,dx,i,c__4322__auto__,size__4323__auto__,b__8270,s__8268__$2,temp__5457__auto__,map__8265,map__8265__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())));

var G__8283 = (i__8269 + (1));
i__8269 = G__8283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8270),busmaker$templates$iter__8267.call(null,cljs.core.chunk_rest.call(null,s__8268__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8270),null);
}
} else {
var i = cljs.core.first.call(null,s__8268__$2);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,cljs.core.concat.call(null,busmaker.templates.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.templates.medium_electric_pole.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (4))),busmaker.templates.factory.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (-2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"recipe","recipe",-17826617),cljs.core.first.call(null,recipes),new cljs.core.Keyword(null,"facility","facility",-2118099900),facility),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (3)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (dx,i,s__8268__$2,temp__5457__auto__,map__8265,map__8265__$1,x,y,recipes,n_factories,facility){
return (function busmaker$templates$iter__8267_$_iter__8275(s__8276){
return (new cljs.core.LazySeq(null,((function (dx,i,s__8268__$2,temp__5457__auto__,map__8265,map__8265__$1,x,y,recipes,n_factories,facility){
return (function (){
var s__8276__$1 = s__8276;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8276__$1);
if(temp__5457__auto____$1){
var s__8276__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8276__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8276__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8278 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8277 = (0);
while(true){
if((i__8277 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8277);
var y__$1 = (((3) + y) + (- j));
cljs.core.chunk_append.call(null,b__8278,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")));

var G__8284 = (i__8277 + (1));
i__8277 = G__8284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8278),busmaker$templates$iter__8267_$_iter__8275.call(null,cljs.core.chunk_rest.call(null,s__8276__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8278),null);
}
} else {
var j = cljs.core.first.call(null,s__8276__$2);
var y__$1 = (((3) + y) + (- j));
return cljs.core.cons.call(null,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (1)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + (2)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output")),busmaker$templates$iter__8267_$_iter__8275.call(null,cljs.core.rest.call(null,s__8276__$2)));
}
} else {
return null;
}
break;
}
});})(dx,i,s__8268__$2,temp__5457__auto__,map__8265,map__8265__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(dx,i,s__8268__$2,temp__5457__auto__,map__8265,map__8265__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(3)));
})())),busmaker$templates$iter__8267.call(null,cljs.core.rest.call(null,s__8268__$2)));
}
} else {
return null;
}
break;
}
});})(map__8265,map__8265__$1,x,y,recipes,n_factories,facility))
,null,null));
});})(map__8265,map__8265__$1,x,y,recipes,n_factories,facility))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})());
});

busmaker.templates.factory_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.templates.factory_line.cljs$lang$applyTo = (function (seq8263){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8263));
});

busmaker.templates.input_tap_indexes = cljs.core.PersistentHashMap.fromArrays(["electric-engine-unit","battery","sulfur","sulfuric-acid","concrete","petroleum-gas","light-oil","heavy-oil","processing-unit","plastic-bar","lubricant"],[new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["water",(0),"petroleum-gas",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["water",(0)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 2, ["crude-oil",(0),"water",(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["petroleum-gas",(0)], null),new cljs.core.PersistentArrayMap(null, 1, ["heavy-oil",(0)], null)]);
busmaker.templates.output_tap_indexes = new cljs.core.PersistentArrayMap(null, 5, ["lubricant",new cljs.core.PersistentArrayMap(null, 1, ["lubricant",(0)], null),"light-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"heavy-oil",new cljs.core.PersistentArrayMap(null, 3, ["heavy-oil",(2),"light-oil",(1),"petroleum-gas",(0)], null),"petroleum-gas",new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",(0),"light-oil",(1),"heavy-oil",(2)], null),"sulfuric-acid",new cljs.core.PersistentArrayMap(null, 1, ["sulfuric-acid",(0)], null)], null);
busmaker.templates.templates = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("template","constructor","template/constructor",986592735),new cljs.core.Var(function(){return busmaker.templates.inserter;},new cljs.core.Symbol("busmaker.templates","inserter","busmaker.templates/inserter",1937554625,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"busmaker.templates","busmaker.templates",-1352843112,null),new cljs.core.Symbol(null,"inserter","inserter",-1477267374,null),"/home/tristan/.boot/cache/tmp/home/tristan/me/projects/current/busmaker/5j9/idqqty/busmaker/templates.cljc",15,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,28,28,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),null,(cljs.core.truth_(busmaker.templates.inserter)?busmaker.templates.inserter.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"underground-belt","underground-belt",1685227668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("template","constructor","template/constructor",986592735),new cljs.core.Var(function(){return busmaker.templates.underground_belt;},new cljs.core.Symbol("busmaker.templates","underground-belt","busmaker.templates/underground-belt",313592170,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"busmaker.templates","busmaker.templates",-1352843112,null),new cljs.core.Symbol(null,"underground-belt","underground-belt",-969208101,null),"/home/tristan/.boot/cache/tmp/home/tristan/me/projects/current/busmaker/5j9/idqqty/busmaker/templates.cljc",23,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null),"input",new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null),"input",new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,46,46,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null),"input",new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),null,(cljs.core.truth_(busmaker.templates.underground_belt)?busmaker.templates.underground_belt.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("template","constructor","template/constructor",986592735),new cljs.core.Var(function(){return busmaker.templates.transport_belt;},new cljs.core.Symbol("busmaker.templates","transport-belt","busmaker.templates/transport-belt",-180788099,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"busmaker.templates","busmaker.templates",-1352843112,null),new cljs.core.Symbol(null,"transport-belt","transport-belt",-1581293556,null),"/home/tristan/.boot/cache/tmp/home/tristan/me/projects/current/busmaker/5j9/idqqty/busmaker/templates.cljc",21,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),null,(cljs.core.truth_(busmaker.templates.transport_belt)?busmaker.templates.transport_belt.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"small-electric-pole","small-electric-pole",-1343945590),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("template","constructor","template/constructor",986592735),new cljs.core.Var(function(){return busmaker.templates.small_electric_pole;},new cljs.core.Symbol("busmaker.templates","small-electric-pole","busmaker.templates/small-electric-pole",-48001248,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"busmaker.templates","busmaker.templates",-1352843112,null),new cljs.core.Symbol(null,"small-electric-pole","small-electric-pole",296585937,null),"/home/tristan/.boot/cache/tmp/home/tristan/me/projects/current/busmaker/5j9/idqqty/busmaker/templates.cljc",26,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,57,57,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),null,(cljs.core.truth_(busmaker.templates.small_electric_pole)?busmaker.templates.small_electric_pole.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("template","constructor","template/constructor",986592735),new cljs.core.Var(function(){return busmaker.templates.factory;},new cljs.core.Symbol("busmaker.templates","factory","busmaker.templates/factory",-1721339926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"busmaker.templates","busmaker.templates",-1352843112,null),new cljs.core.Symbol(null,"factory","factory",1704465273,null),"/home/tristan/.boot/cache/tmp/home/tristan/me/projects/current/busmaker/5j9/idqqty/busmaker/templates.cljc",14,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"facility","facility",-477568373,null),new cljs.core.Symbol(null,"recipe","recipe",1622704910,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"facility","facility",-477568373,null),new cljs.core.Symbol(null,"recipe","recipe",1622704910,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,65,65,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"facility","facility",-477568373,null),new cljs.core.Symbol(null,"recipe","recipe",1622704910,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0)], null)], null)], null)),null,(cljs.core.truth_(busmaker.templates.factory)?busmaker.templates.factory.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"factory-line","factory-line",-1949597433),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("template","constructor","template/constructor",986592735),new cljs.core.Var(function(){return busmaker.templates.factory_line;},new cljs.core.Symbol("busmaker.templates","factory-line","busmaker.templates/factory-line",-1860301631,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"busmaker.templates","busmaker.templates",-1352843112,null),new cljs.core.Symbol(null,"factory-line","factory-line",-309065906,null),"/home/tristan/.boot/cache/tmp/home/tristan/me/projects/current/busmaker/5j9/idqqty/busmaker/templates.cljc",19,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"recipes","recipes",1315295318,null),new cljs.core.Symbol(null,"n-factories","n-factories",101924033,null),new cljs.core.Symbol(null,"facility","facility",-477568373,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0),new cljs.core.Symbol(null,"n-factories","n-factories",101924033,null),(1),new cljs.core.Symbol(null,"facility","facility",-477568373,null),"assembling-machine-1"], null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"recipes","recipes",1315295318,null),new cljs.core.Symbol(null,"n-factories","n-factories",101924033,null),new cljs.core.Symbol(null,"facility","facility",-477568373,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0),new cljs.core.Symbol(null,"n-factories","n-factories",101924033,null),(1),new cljs.core.Symbol(null,"facility","facility",-477568373,null),"assembling-machine-1"], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,89,89,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"recipes","recipes",1315295318,null),new cljs.core.Symbol(null,"n-factories","n-factories",101924033,null),new cljs.core.Symbol(null,"facility","facility",-477568373,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"x","x",-555367584,null),(0),new cljs.core.Symbol(null,"y","y",-117328249,null),(0),new cljs.core.Symbol(null,"n-factories","n-factories",101924033,null),(1),new cljs.core.Symbol(null,"facility","facility",-477568373,null),"assembling-machine-1"], null)], null)], null)),null,(cljs.core.truth_(busmaker.templates.factory_line)?busmaker.templates.factory_line.cljs$lang$test:null)]))], null)], null);
busmaker.templates.template = (function busmaker$templates$template(var_args){
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

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return busmaker.templates.template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

busmaker.templates.template.cljs$core$IFn$_invoke$arity$variadic = (function (key,options){
var map__8287 = busmaker.templates.templates.call(null,key);
var map__8287__$1 = ((((!((map__8287 == null)))?(((((map__8287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8287):map__8287);
var constructor$ = cljs.core.get.call(null,map__8287__$1,new cljs.core.Keyword("template","constructor","template/constructor",986592735));
if(cljs.core.truth_(constructor$)){
} else {
throw (new Error("Assert failed: constructor"));
}

return cljs.core.apply.call(null,constructor$,options);
});

busmaker.templates.template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
busmaker.templates.template.cljs$lang$applyTo = (function (seq8285){
var G__8286 = cljs.core.first.call(null,seq8285);
var seq8285__$1 = cljs.core.next.call(null,seq8285);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8286,seq8285__$1);
});

