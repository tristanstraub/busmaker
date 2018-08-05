// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.main_bus');
goog.require('cljs.core');
goog.require('busmaker.bus');
goog.require('busmaker.recipe_data');
goog.require('busmaker.recipes');
goog.require('busmaker.templates');
busmaker.main_bus.rotate_90 = (function busmaker$main_bus$rotate_90(p__8294){
var vec__8295 = p__8294;
var x = cljs.core.nth.call(null,vec__8295,(0),null);
var y = cljs.core.nth.call(null,vec__8295,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
});
busmaker.main_bus.entity_direction = (function busmaker$main_bus$entity_direction(entity){
var temp__5457__auto__ = cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["direction"], null));
if(cljs.core.truth_(temp__5457__auto__)){
var dir = temp__5457__auto__;
return busmaker.templates.direction_blueprint.call(null,dir);
} else {
return null;
}
});
busmaker.main_bus.entity_coord = (function busmaker$main_bus$entity_coord(entity){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.floor(cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0)),(Math.floor(cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0))],null));
});
busmaker.main_bus.entity_coords = (function busmaker$main_bus$entity_coords(var_args){
var G__8299 = arguments.length;
switch (G__8299) {
case 1:
return busmaker.main_bus.entity_coords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return busmaker.main_bus.entity_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

busmaker.main_bus.entity_coords.cljs$core$IFn$_invoke$arity$1 = (function (entity){
return busmaker.main_bus.entity_coords.call(null,entity,busmaker.main_bus.entity_direction.call(null,entity));
});

busmaker.main_bus.entity_coords.cljs$core$IFn$_invoke$arity$2 = (function (entity,dir){
var coord = busmaker.main_bus.entity_coord.call(null,entity);
var dir__$1 = (function (){var vec__8300 = busmaker.main_bus.rotate_90.call(null,dir);
var x = cljs.core.nth.call(null,vec__8300,(0),null);
var y = cljs.core.nth.call(null,vec__8300,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.abs(x),Math.abs(y)], null);
})();
var G__8303 = cljs.core.get.call(null,entity,"name");
if(cljs.core._EQ_.call(null,"splitter",G__8303)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,cljs.core.mapv.call(null,cljs.core._PLUS_,coord,dir__$1)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"entity","entity",1189561251,null),G__8303)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8303)].join('')));

}
}
});

busmaker.main_bus.entity_coords.cljs$lang$maxFixedArity = 2;

busmaker.main_bus.recipe = (function busmaker$main_bus$recipe(recipes,recipe_name){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),new cljs.core.Keyword(null,"name","name",1843675177)),recipes));
});
busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
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
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8306){
var map__8307 = p__8306;
var map__8307__$1 = ((((!((map__8307 == null)))?(((((map__8307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8307):map__8307);
var x = cljs.core.get.call(null,map__8307__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8307__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8307__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8307__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.templates.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8305){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8305));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8319 = arguments.length;
var i__4532__auto___8320 = (0);
while(true){
if((i__4532__auto___8320 < len__4531__auto___8319)){
args__4534__auto__.push((arguments[i__4532__auto___8320]));

var G__8321 = (i__4532__auto___8320 + (1));
i__4532__auto___8320 = G__8321;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8313){
var map__8314 = p__8313;
var map__8314__$1 = ((((!((map__8314 == null)))?(((((map__8314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8314):map__8314);
var x = cljs.core.get.call(null,map__8314__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8314__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8314__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var vec__8316 = busmaker.main_bus.rotate_90.call(null,direction);
var dx = cljs.core.nth.call(null,vec__8316,(0),null);
var dy = cljs.core.nth.call(null,vec__8316,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.templates.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",((Math.abs(dx) * 0.5) + x),"y",((Math.abs(dy) * 0.5) + y)], null)], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8312){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8312));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
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
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8323){
var map__8324 = p__8323;
var map__8324__$1 = ((((!((map__8324 == null)))?(((((map__8324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8324):map__8324);
var x = cljs.core.get.call(null,map__8324__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8324__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8324__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.templates.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8322){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8322));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8333 = arguments.length;
var i__4532__auto___8334 = (0);
while(true){
if((i__4532__auto___8334 < len__4531__auto___8333)){
args__4534__auto__.push((arguments[i__4532__auto___8334]));

var G__8335 = (i__4532__auto___8334 + (1));
i__4532__auto___8334 = G__8335;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8330){
var map__8331 = p__8330;
var map__8331__$1 = ((((!((map__8331 == null)))?(((((map__8331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8331):map__8331);
var x = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8329){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8329));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8344 = arguments.length;
var i__4532__auto___8345 = (0);
while(true){
if((i__4532__auto___8345 < len__4531__auto___8344)){
args__4534__auto__.push((arguments[i__4532__auto___8345]));

var G__8346 = (i__4532__auto___8345 + (1));
i__4532__auto___8345 = G__8346;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8337){
var map__8338 = p__8337;
var map__8338__$1 = ((((!((map__8338 == null)))?(((((map__8338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8338):map__8338);
var x = cljs.core.get.call(null,map__8338__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8338__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8338__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8338,map__8338__$1,x,y,height){
return (function busmaker$main_bus$iter__8340(s__8341){
return (new cljs.core.LazySeq(null,((function (map__8338,map__8338__$1,x,y,height){
return (function (){
var s__8341__$1 = s__8341;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8341__$1);
if(temp__5457__auto__){
var s__8341__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8341__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8341__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8343 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8342 = (0);
while(true){
if((i__8342 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8342);
cljs.core.chunk_append.call(null,b__8343,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8347 = (i__8342 + (1));
i__8342 = G__8347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8343),busmaker$main_bus$iter__8340.call(null,cljs.core.chunk_rest.call(null,s__8341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8343),null);
}
} else {
var i = cljs.core.first.call(null,s__8341__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8340.call(null,cljs.core.rest.call(null,s__8341__$2)));
}
} else {
return null;
}
break;
}
});})(map__8338,map__8338__$1,x,y,height))
,null,null));
});})(map__8338,map__8338__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8336){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8336));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8356 = arguments.length;
var i__4532__auto___8357 = (0);
while(true){
if((i__4532__auto___8357 < len__4531__auto___8356)){
args__4534__auto__.push((arguments[i__4532__auto___8357]));

var G__8358 = (i__4532__auto___8357 + (1));
i__4532__auto___8357 = G__8358;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8349){
var map__8350 = p__8349;
var map__8350__$1 = ((((!((map__8350 == null)))?(((((map__8350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8350):map__8350);
var x = cljs.core.get.call(null,map__8350__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8350__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8350__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8350,map__8350__$1,x,y,height){
return (function busmaker$main_bus$iter__8352(s__8353){
return (new cljs.core.LazySeq(null,((function (map__8350,map__8350__$1,x,y,height){
return (function (){
var s__8353__$1 = s__8353;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8353__$1);
if(temp__5457__auto__){
var s__8353__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8353__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8353__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8355 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8354 = (0);
while(true){
if((i__8354 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8354);
cljs.core.chunk_append.call(null,b__8355,busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8359 = (i__8354 + (1));
i__8354 = G__8359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8355),busmaker$main_bus$iter__8352.call(null,cljs.core.chunk_rest.call(null,s__8353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8355),null);
}
} else {
var i = cljs.core.first.call(null,s__8353__$2);
return cljs.core.cons.call(null,busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8352.call(null,cljs.core.rest.call(null,s__8353__$2)));
}
} else {
return null;
}
break;
}
});})(map__8350,map__8350__$1,x,y,height))
,null,null));
});})(map__8350,map__8350__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
})());
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8348){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8348));
});

busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8368 = arguments.length;
var i__4532__auto___8369 = (0);
while(true){
if((i__4532__auto___8369 < len__4531__auto___8368)){
args__4534__auto__.push((arguments[i__4532__auto___8369]));

var G__8370 = (i__4532__auto___8369 + (1));
i__4532__auto___8369 = G__8370;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8361){
var map__8362 = p__8361;
var map__8362__$1 = ((((!((map__8362 == null)))?(((((map__8362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8362):map__8362);
var x = cljs.core.get.call(null,map__8362__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8362__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8362__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8362__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8362__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8362__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8362,map__8362__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8364(s__8365){
return (new cljs.core.LazySeq(null,((function (n,map__8362,map__8362__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function (){
var s__8365__$1 = s__8365;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8365__$1);
if(temp__5457__auto__){
var s__8365__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8365__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8365__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8367 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8366 = (0);
while(true){
if((i__8366 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8366);
cljs.core.chunk_append.call(null,b__8367,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8371 = (i__8366 + (1));
i__8366 = G__8371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8367),busmaker$main_bus$iter__8364.call(null,cljs.core.chunk_rest.call(null,s__8365__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8367),null);
}
} else {
var i = cljs.core.first.call(null,s__8365__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8364.call(null,cljs.core.rest.call(null,s__8365__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8362,map__8362__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8362,map__8362__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8360){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8360));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
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
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8373){
var map__8374 = p__8373;
var map__8374__$1 = ((((!((map__8374 == null)))?(((((map__8374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8374):map__8374);
var x = cljs.core.get.call(null,map__8374__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8374__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8374__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8374__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8374__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8374__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8372){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8372));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
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
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8380){
var map__8381 = p__8380;
var map__8381__$1 = ((((!((map__8381 == null)))?(((((map__8381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8381):map__8381);
var x = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8381,map__8381__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8383(s__8384){
return (new cljs.core.LazySeq(null,((function (map__8381,map__8381__$1,x,y,output_index,output_extension,y_extension){
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
var i = cljs.core._nth.call(null,c__4322__auto__,i__8385);
cljs.core.chunk_append.call(null,b__8386,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8390 = (i__8385 + (1));
i__8385 = G__8390;
continue;
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
var i = cljs.core.first.call(null,s__8384__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8383.call(null,cljs.core.rest.call(null,s__8384__$2)));
}
} else {
return null;
}
break;
}
});})(map__8381,map__8381__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8381,map__8381__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8379){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8379));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8405 = arguments.length;
var i__4532__auto___8406 = (0);
while(true){
if((i__4532__auto___8406 < len__4531__auto___8405)){
args__4534__auto__.push((arguments[i__4532__auto___8406]));

var G__8407 = (i__4532__auto___8406 + (1));
i__4532__auto___8406 = G__8407;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8392){
var map__8393 = p__8392;
var map__8393__$1 = ((((!((map__8393 == null)))?(((((map__8393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8393):map__8393);
var x = cljs.core.get.call(null,map__8393__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8393__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8393__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8393__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
var bus_width = cljs.core.get.call(null,map__8393__$1,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),(1));
if(cljs.core.truth_(bus_index)){
var n = (((2) + bus_width) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n,map__8393,map__8393__$1,x,y,input_index,bus_index,bus_width){
return (function busmaker$main_bus$iter__8395(s__8396){
return (new cljs.core.LazySeq(null,((function (n,map__8393,map__8393__$1,x,y,input_index,bus_index,bus_width){
return (function (){
var s__8396__$1 = s__8396;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8396__$1);
if(temp__5457__auto__){
var s__8396__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8396__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8396__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8398 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8397 = (0);
while(true){
if((i__8397 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8397);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
cljs.core.chunk_append.call(null,b__8398,(function (){var G__8399 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8399) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8399)].join('')));

}
})());

var G__8409 = (i__8397 + (1));
i__8397 = G__8409;
continue;
} else {
var G__8410 = (i__8397 + (1));
i__8397 = G__8410;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8398),busmaker$main_bus$iter__8395.call(null,cljs.core.chunk_rest.call(null,s__8396__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8398),null);
}
} else {
var i = cljs.core.first.call(null,s__8396__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
return cljs.core.cons.call(null,(function (){var G__8400 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8400) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8400)].join('')));

}
})(),busmaker$main_bus$iter__8395.call(null,cljs.core.rest.call(null,s__8396__$2)));
} else {
var G__8412 = cljs.core.rest.call(null,s__8396__$2);
s__8396__$1 = G__8412;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8393,map__8393__$1,x,y,input_index,bus_index,bus_width))
,null,null));
});})(n,map__8393,map__8393__$1,x,y,input_index,bus_index,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n,map__8393,map__8393__$1,x,y,input_index,bus_index,bus_width){
return (function busmaker$main_bus$iter__8401(s__8402){
return (new cljs.core.LazySeq(null,((function (n,map__8393,map__8393__$1,x,y,input_index,bus_index,bus_width){
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
var k = cljs.core._nth.call(null,c__4322__auto__,i__8403);
cljs.core.chunk_append.call(null,b__8404,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x + (((2) + bus_width) * bus_index)) + (-4)) + k),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (-4)) + k)));

var G__8413 = (i__8403 + (1));
i__8403 = G__8413;
continue;
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
var k = cljs.core.first.call(null,s__8402__$2);
return cljs.core.cons.call(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x + (((2) + bus_width) * bus_index)) + (-4)) + k),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (-4)) + k)),busmaker$main_bus$iter__8401.call(null,cljs.core.rest.call(null,s__8402__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8393,map__8393__$1,x,y,input_index,bus_index,bus_width))
,null,null));
});})(n,map__8393,map__8393__$1,x,y,input_index,bus_index,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,bus_width));
})())))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8391){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8391));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
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
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8415){
var map__8416 = p__8415;
var map__8416__$1 = ((((!((map__8416 == null)))?(((((map__8416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8416):map__8416);
var x = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8416,map__8416__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8418(s__8419){
return (new cljs.core.LazySeq(null,((function (map__8416,map__8416__$1,x,y,output_index,y_extension){
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
cljs.core.chunk_append.call(null,b__8421,busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

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
return cljs.core.cons.call(null,busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8418.call(null,cljs.core.rest.call(null,s__8419__$2)));
}
} else {
return null;
}
break;
}
});})(map__8416,map__8416__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8416,map__8416__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})()),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (6)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (6)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8414){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8414));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
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
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8427){
var map__8428 = p__8427;
var map__8428__$1 = ((((!((map__8428 == null)))?(((((map__8428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8428):map__8428);
var x = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var bus_width = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),(1));
var n = (((2) + bus_width) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n,map__8428,map__8428__$1,x,y,output_index,y_extension,bus_width){
return (function busmaker$main_bus$iter__8430(s__8431){
return (new cljs.core.LazySeq(null,((function (n,map__8428,map__8428__$1,x,y,output_index,y_extension,bus_width){
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
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
cljs.core.chunk_append.call(null,b__8433,(((i >= n))?(function (){var G__8434 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8434) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8434)].join('')));

}
})():(function (){var G__8435 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8435) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8435)].join('')));

}
})()));

var G__8447 = (i__8432 + (1));
i__8432 = G__8447;
continue;
} else {
var G__8448 = (i__8432 + (1));
i__8432 = G__8448;
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
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8436 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8436) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8436)].join('')));

}
})():(function (){var G__8437 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8437) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8437)].join('')));

}
})()),busmaker$main_bus$iter__8430.call(null,cljs.core.rest.call(null,s__8431__$2)));
} else {
var G__8451 = cljs.core.rest.call(null,s__8431__$2);
s__8431__$1 = G__8451;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8428,map__8428__$1,x,y,output_index,y_extension,bus_width))
,null,null));
});})(n,map__8428,map__8428__$1,x,y,output_index,y_extension,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n,map__8428,map__8428__$1,x,y,output_index,y_extension,bus_width){
return (function busmaker$main_bus$iter__8438(s__8439){
return (new cljs.core.LazySeq(null,((function (n,map__8428,map__8428__$1,x,y,output_index,y_extension,bus_width){
return (function (){
var s__8439__$1 = s__8439;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8439__$1);
if(temp__5457__auto__){
var s__8439__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8439__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8439__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8441 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8440 = (0);
while(true){
if((i__8440 < size__4323__auto__)){
var k = cljs.core._nth.call(null,c__4322__auto__,i__8440);
cljs.core.chunk_append.call(null,b__8441,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x + n) + k) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (-6)) + (- k))));

var G__8452 = (i__8440 + (1));
i__8440 = G__8452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8441),busmaker$main_bus$iter__8438.call(null,cljs.core.chunk_rest.call(null,s__8439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8441),null);
}
} else {
var k = cljs.core.first.call(null,s__8439__$2);
return cljs.core.cons.call(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x + n) + k) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (-6)) + (- k))),busmaker$main_bus$iter__8438.call(null,cljs.core.rest.call(null,s__8439__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8428,map__8428__$1,x,y,output_index,y_extension,bus_width))
,null,null));
});})(n,map__8428,map__8428__$1,x,y,output_index,y_extension,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,bus_width));
})())))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8426){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8426));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8457 = arguments.length;
var i__4532__auto___8458 = (0);
while(true){
if((i__4532__auto___8458 < len__4531__auto___8457)){
args__4534__auto__.push((arguments[i__4532__auto___8458]));

var G__8459 = (i__4532__auto___8458 + (1));
i__4532__auto___8458 = G__8459;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8454){
var map__8455 = p__8454;
var map__8455__$1 = ((((!((map__8455 == null)))?(((((map__8455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8455):map__8455);
var x = cljs.core.get.call(null,map__8455__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8455__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8455__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8455__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var bus_width = cljs.core.get.call(null,map__8455__$1,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),(1));
var n = (((2) + bus_width) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8453){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8453));
});

busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name,facility){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"basic-oil-processing":recipe_name);
var G__8460 = busmaker.recipes.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipe_data.recipes,recipe_name__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))){
return cljs.core.conj.call(null,G__8460,"coal");
} else {
return G__8460;
}
});
busmaker.main_bus.ingredient_height = (function busmaker$main_bus$ingredient_height(ingredient,facility,bus_width){
if(cljs.core.seq.call(null,facility)){
} else {
throw (new Error("Assert failed: (seq facility)"));
}

var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient,facility));
return (((bus_width - (1)) + (bus_width - (1))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["lab",null], null), null).call(null,facility))?(12):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(8):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))?(12):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(16):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?((11) + (((n > (3)))?((n - (3)) + (1)):(0))):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(12):(function (){
cljs.core.enable_console_print_BANG_.call(null);

console.log(cljs.core.ex_info.call(null,"Unknown ingredient height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility], null)));

throw cljs.core.ex_info.call(null,"Unknown ingredient height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),ingredient,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility], null));
})()

)))))));
});
busmaker.main_bus.facility_dy = (function busmaker$main_bus$facility_dy(ingredient,facility,bus_width){
var n = cljs.core.count.call(null,busmaker.main_bus.ingredients.call(null,ingredient,facility));
return ((bus_width - (1)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["lab",null], null), null).call(null,facility))?(5):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(5):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["electric-furnace",null], null), null).call(null,facility))?(5):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?((4) + (((n > (3)))?(0):(0))):(0)
)))))));
});
busmaker.main_bus.main_bus_line = (function busmaker$main_bus$main_bus_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8580 = arguments.length;
var i__4532__auto___8581 = (0);
while(true){
if((i__4532__auto___8581 < len__4531__auto___8580)){
args__4534__auto__.push((arguments[i__4532__auto___8581]));

var G__8582 = (i__4532__auto___8581 + (1));
i__4532__auto___8581 = G__8582;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8464){
var map__8465 = p__8464;
var map__8465__$1 = ((((!((map__8465 == null)))?(((((map__8465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8465):map__8465);
var x = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var n_factories = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipes = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var bus_outputs = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584));
var input_indexes = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var bus_width = cljs.core.get.call(null,map__8465__$1,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167));
var ingredient = cljs.core.first.call(null,recipes);
var buses = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
cljs.core.println.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_outputs);

return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (p1__8461_SHARP_,p2__8462_SHARP_){
return cljs.core.assoc.call(null,p1__8461_SHARP_,"entity_number",(p2__8462_SHARP_ + (1)));
});})(ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,(function (){var G__8467 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.templates.template.call(null,new cljs.core.Keyword(null,"factory-line","factory-line",-1949597433),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8468(s__8469){
return (new cljs.core.LazySeq(null,((function (ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8469__$1 = s__8469;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8469__$1);
if(temp__5457__auto__){
var s__8469__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8469__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8469__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8471 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8470 = (0);
while(true){
if((i__8470 < size__4323__auto__)){
var vec__8472 = cljs.core._nth.call(null,c__4322__auto__,i__8470);
var i = cljs.core.nth.call(null,vec__8472,(0),null);
var bus_ingredient = cljs.core.nth.call(null,vec__8472,(1),null);
cljs.core.chunk_append.call(null,b__8471,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility,bus_width);
if(cljs.core.truth_(busmaker.recipes.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (bus_width + (2)))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([bus_ingredient]),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipe_data.extra_buses)))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8470,x__$1,y__$1,dy,vec__8472,i,bus_ingredient,c__4322__auto__,size__4323__auto__,b__8471,s__8469__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8468_$_iter__8475(s__8476){
return (new cljs.core.LazySeq(null,((function (i__8470,x__$1,y__$1,dy,vec__8472,i,bus_ingredient,c__4322__auto__,size__4323__auto__,b__8471,s__8469__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8476__$1 = s__8476;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8476__$1);
if(temp__5457__auto____$1){
var s__8476__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8476__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8476__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8478 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8477 = (0);
while(true){
if((i__8477 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8477);
cljs.core.chunk_append.call(null,b__8478,busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$1 + (i * (bus_width + (2)))) + j),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width)));

var G__8583 = (i__8477 + (1));
i__8477 = G__8583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8478),busmaker$main_bus$iter__8468_$_iter__8475.call(null,cljs.core.chunk_rest.call(null,s__8476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8478),null);
}
} else {
var j = cljs.core.first.call(null,s__8476__$2);
return cljs.core.cons.call(null,busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$1 + (i * (bus_width + (2)))) + j),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width)),busmaker$main_bus$iter__8468_$_iter__8475.call(null,cljs.core.rest.call(null,s__8476__$2)));
}
} else {
return null;
}
break;
}
});})(i__8470,x__$1,y__$1,dy,vec__8472,i,bus_ingredient,c__4322__auto__,size__4323__auto__,b__8471,s__8469__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(i__8470,x__$1,y__$1,dy,vec__8472,i,bus_ingredient,c__4322__auto__,size__4323__auto__,b__8471,s__8469__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,bus_width));
})());

}
}
})());

var G__8584 = (i__8470 + (1));
i__8470 = G__8584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8471),busmaker$main_bus$iter__8468.call(null,cljs.core.chunk_rest.call(null,s__8469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8471),null);
}
} else {
var vec__8479 = cljs.core.first.call(null,s__8469__$2);
var i = cljs.core.nth.call(null,vec__8479,(0),null);
var bus_ingredient = cljs.core.nth.call(null,vec__8479,(1),null);
return cljs.core.cons.call(null,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility,bus_width);
if(cljs.core.truth_(busmaker.recipes.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (bus_width + (2)))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([bus_ingredient]),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipe_data.extra_buses)))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,dy,vec__8479,i,bus_ingredient,s__8469__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8468_$_iter__8482(s__8483){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,dy,vec__8479,i,bus_ingredient,s__8469__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8483__$1 = s__8483;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8483__$1);
if(temp__5457__auto____$1){
var s__8483__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8483__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8483__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8485 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8484 = (0);
while(true){
if((i__8484 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__8484);
cljs.core.chunk_append.call(null,b__8485,busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$1 + (i * (bus_width + (2)))) + j),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width)));

var G__8585 = (i__8484 + (1));
i__8484 = G__8585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8485),busmaker$main_bus$iter__8468_$_iter__8482.call(null,cljs.core.chunk_rest.call(null,s__8483__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8485),null);
}
} else {
var j = cljs.core.first.call(null,s__8483__$2);
return cljs.core.cons.call(null,busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$1 + (i * (bus_width + (2)))) + j),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width)),busmaker$main_bus$iter__8468_$_iter__8482.call(null,cljs.core.rest.call(null,s__8483__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,dy,vec__8479,i,bus_ingredient,s__8469__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$1,y__$1,dy,vec__8479,i,bus_ingredient,s__8469__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,bus_width));
})());

}
}
})(),busmaker$main_bus$iter__8468.call(null,cljs.core.rest.call(null,s__8469__$2)));
}
} else {
return null;
}
break;
}
});})(ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,bus_outputs));
})())),(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var non_fluid_ingredients = cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.sort.call(null,cljs.core.map.call(null,buses,cljs.core.remove.call(null,busmaker.recipes.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))));
return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3938__auto__ = (cljs.core.count.call(null,non_fluid_ingredients) > (3));
if(and__3938__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["assembling-machine-2",null,"electric-furnace",null,"assembling-machine-1",null], null), null).call(null,facility);
} else {
return and__3938__auto__;
}
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8486(s__8487){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8487__$1 = s__8487;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8487__$1);
if(temp__5457__auto__){
var s__8487__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8487__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8487__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8489 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8488 = (0);
while(true){
if((i__8488 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8488);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8489,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)))))));

var G__8586 = (i__8488 + (1));
i__8488 = G__8586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8489),busmaker$main_bus$iter__8486.call(null,cljs.core.chunk_rest.call(null,s__8487__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8489),null);
}
} else {
var i = cljs.core.first.call(null,s__8487__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)))))),busmaker$main_bus$iter__8486.call(null,cljs.core.rest.call(null,s__8487__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8490(s__8491){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8491__$1 = s__8491;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8491__$1);
if(temp__5457__auto__){
var s__8491__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8491__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8491__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8493 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8492 = (0);
while(true){
if((i__8492 < size__4323__auto__)){
var vec__8494 = cljs.core._nth.call(null,c__4322__auto__,i__8492);
var input_index = cljs.core.nth.call(null,vec__8494,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8494,(1),null);
cljs.core.chunk_append.call(null,b__8493,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8492,x__$2,y__$3,y__$2,vec__8494,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8493,s__8491__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8490_$_iter__8497(s__8498){
return (new cljs.core.LazySeq(null,((function (i__8492,x__$2,y__$3,y__$2,vec__8494,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8493,s__8491__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8498__$1 = s__8498;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8498__$1);
if(temp__5457__auto____$1){
var s__8498__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8498__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8498__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8500 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8499 = (0);
while(true){
if((i__8499 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8499);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8500,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")));

var G__8587 = (i__8499 + (1));
i__8499 = G__8587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8500),busmaker$main_bus$iter__8490_$_iter__8497.call(null,cljs.core.chunk_rest.call(null,s__8498__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8500),null);
}
} else {
var i = cljs.core.first.call(null,s__8498__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")),busmaker$main_bus$iter__8490_$_iter__8497.call(null,cljs.core.rest.call(null,s__8498__$2)));
}
} else {
return null;
}
break;
}
});})(i__8492,x__$2,y__$3,y__$2,vec__8494,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8493,s__8491__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(i__8492,x__$2,y__$3,y__$2,vec__8494,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8493,s__8491__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)));

var G__8588 = (i__8492 + (1));
i__8492 = G__8588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8493),busmaker$main_bus$iter__8490.call(null,cljs.core.chunk_rest.call(null,s__8491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8493),null);
}
} else {
var vec__8501 = cljs.core.first.call(null,s__8491__$2);
var input_index = cljs.core.nth.call(null,vec__8501,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8501,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$3,y__$2,vec__8501,input_index,bus_index,s__8491__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8490_$_iter__8504(s__8505){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$3,y__$2,vec__8501,input_index,bus_index,s__8491__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8505__$1 = s__8505;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8505__$1);
if(temp__5457__auto____$1){
var s__8505__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8505__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8505__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8507 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8506 = (0);
while(true){
if((i__8506 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8506);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8507,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")));

var G__8589 = (i__8506 + (1));
i__8506 = G__8589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8507),busmaker$main_bus$iter__8490_$_iter__8504.call(null,cljs.core.chunk_rest.call(null,s__8505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8507),null);
}
} else {
var i = cljs.core.first.call(null,s__8505__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")),busmaker$main_bus$iter__8490_$_iter__8504.call(null,cljs.core.rest.call(null,s__8505__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$3,y__$2,vec__8501,input_index,bus_index,s__8491__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$2,y__$3,y__$2,vec__8501,input_index,bus_index,s__8491__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)),busmaker$main_bus$iter__8490.call(null,cljs.core.rest.call(null,s__8491__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8508(s__8509){
return (new cljs.core.LazySeq(null,((function (ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8509__$1 = s__8509;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8509__$1);
if(temp__5457__auto__){
var s__8509__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8509__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8509__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8511 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8510 = (0);
while(true){
if((i__8510 < size__4323__auto__)){
var vec__8512 = cljs.core._nth.call(null,c__4322__auto__,i__8510);
var output_recipe = cljs.core.nth.call(null,vec__8512,(0),null);
var output_index = cljs.core.nth.call(null,vec__8512,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.recipes.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8511,(function (){var tap_x = ((1) + ((bus_width + (2)) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (5));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8510,s__8509__$1,tap_x,x__$1,y__$1,vec__8512,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8511,s__8509__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8508_$_iter__8515(s__8516){
return (new cljs.core.LazySeq(null,((function (i__8510,s__8509__$1,tap_x,x__$1,y__$1,vec__8512,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8511,s__8509__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8516__$1 = s__8516;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8516__$1);
if(temp__5457__auto____$1){
var s__8516__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8516__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8516__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8518 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8517 = (0);
while(true){
if((i__8517 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8517);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,(bus_width + (2)))))){
cljs.core.chunk_append.call(null,b__8518,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8519 = cljs.core.mod.call(null,i,(bus_width + (2)));
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
})()));

var G__8591 = (i__8517 + (1));
i__8517 = G__8591;
continue;
} else {
var G__8592 = (i__8517 + (1));
i__8517 = G__8592;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8518),busmaker$main_bus$iter__8508_$_iter__8515.call(null,cljs.core.chunk_rest.call(null,s__8516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8518),null);
}
} else {
var i = cljs.core.first.call(null,s__8516__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,(bus_width + (2)))))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8520 = cljs.core.mod.call(null,i,(bus_width + (2)));
switch (G__8520) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8520)].join('')));

}
})()),busmaker$main_bus$iter__8508_$_iter__8515.call(null,cljs.core.rest.call(null,s__8516__$2)));
} else {
var G__8594 = cljs.core.rest.call(null,s__8516__$2);
s__8516__$1 = G__8594;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8510,s__8509__$1,tap_x,x__$1,y__$1,vec__8512,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8511,s__8509__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(i__8510,s__8509__$1,tap_x,x__$1,y__$1,vec__8512,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8511,s__8509__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8595 = (i__8510 + (1));
i__8510 = G__8595;
continue;
} else {
var G__8596 = (i__8510 + (1));
i__8510 = G__8596;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8511),busmaker$main_bus$iter__8508.call(null,cljs.core.chunk_rest.call(null,s__8509__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8511),null);
}
} else {
var vec__8521 = cljs.core.first.call(null,s__8509__$2);
var output_recipe = cljs.core.nth.call(null,vec__8521,(0),null);
var output_index = cljs.core.nth.call(null,vec__8521,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.recipes.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cons.call(null,(function (){var tap_x = ((1) + ((bus_width + (2)) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (5));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8509__$1,tap_x,x__$1,y__$1,vec__8521,output_recipe,output_index,s__8509__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8508_$_iter__8524(s__8525){
return (new cljs.core.LazySeq(null,((function (s__8509__$1,tap_x,x__$1,y__$1,vec__8521,output_recipe,output_index,s__8509__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8525__$1 = s__8525;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8525__$1);
if(temp__5457__auto____$1){
var s__8525__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8525__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8525__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8527 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8526 = (0);
while(true){
if((i__8526 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8526);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,(bus_width + (2)))))){
cljs.core.chunk_append.call(null,b__8527,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8528 = cljs.core.mod.call(null,i,(bus_width + (2)));
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

var G__8598 = (i__8526 + (1));
i__8526 = G__8598;
continue;
} else {
var G__8599 = (i__8526 + (1));
i__8526 = G__8599;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8527),busmaker$main_bus$iter__8508_$_iter__8524.call(null,cljs.core.chunk_rest.call(null,s__8525__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8527),null);
}
} else {
var i = cljs.core.first.call(null,s__8525__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,(bus_width + (2)))))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8529 = cljs.core.mod.call(null,i,(bus_width + (2)));
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
})()),busmaker$main_bus$iter__8508_$_iter__8524.call(null,cljs.core.rest.call(null,s__8525__$2)));
} else {
var G__8601 = cljs.core.rest.call(null,s__8525__$2);
s__8525__$1 = G__8601;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8509__$1,tap_x,x__$1,y__$1,vec__8521,output_recipe,output_index,s__8509__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(s__8509__$1,tap_x,x__$1,y__$1,vec__8521,output_recipe,output_index,s__8509__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8508.call(null,cljs.core.rest.call(null,s__8509__$2)));
} else {
var G__8602 = cljs.core.rest.call(null,s__8509__$2);
s__8509__$1 = G__8602;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,busmaker.templates.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8530(s__8531){
return (new cljs.core.LazySeq(null,((function (ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8531__$1 = s__8531;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8531__$1);
if(temp__5457__auto__){
var s__8531__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8531__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8531__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8533 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8532 = (0);
while(true){
if((i__8532 < size__4323__auto__)){
var vec__8534 = cljs.core._nth.call(null,c__4322__auto__,i__8532);
var output_recipe = cljs.core.nth.call(null,vec__8534,(0),null);
var output_index = cljs.core.nth.call(null,vec__8534,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.recipes.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8533,(function (){var tap_x = ((1) + (((2) + bus_width) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (5));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8532,s__8531__$1,tap_x,x__$1,y__$1,vec__8534,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8533,s__8531__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8530_$_iter__8537(s__8538){
return (new cljs.core.LazySeq(null,((function (i__8532,s__8531__$1,tap_x,x__$1,y__$1,vec__8534,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8533,s__8531__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8538__$1 = s__8538;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8538__$1);
if(temp__5457__auto____$1){
var s__8538__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8538__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8538__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8540 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8539 = (0);
while(true){
if((i__8539 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8539);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
cljs.core.chunk_append.call(null,b__8540,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8541 = cljs.core.mod.call(null,i,((2) + bus_width));
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
})()));

var G__8604 = (i__8539 + (1));
i__8539 = G__8604;
continue;
} else {
var G__8605 = (i__8539 + (1));
i__8539 = G__8605;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8540),busmaker$main_bus$iter__8530_$_iter__8537.call(null,cljs.core.chunk_rest.call(null,s__8538__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8540),null);
}
} else {
var i = cljs.core.first.call(null,s__8538__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8542 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8542) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8542)].join('')));

}
})()),busmaker$main_bus$iter__8530_$_iter__8537.call(null,cljs.core.rest.call(null,s__8538__$2)));
} else {
var G__8607 = cljs.core.rest.call(null,s__8538__$2);
s__8538__$1 = G__8607;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8532,s__8531__$1,tap_x,x__$1,y__$1,vec__8534,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8533,s__8531__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(i__8532,s__8531__$1,tap_x,x__$1,y__$1,vec__8534,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8533,s__8531__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})());

var G__8608 = (i__8532 + (1));
i__8532 = G__8608;
continue;
} else {
var G__8609 = (i__8532 + (1));
i__8532 = G__8609;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8533),busmaker$main_bus$iter__8530.call(null,cljs.core.chunk_rest.call(null,s__8531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8533),null);
}
} else {
var vec__8543 = cljs.core.first.call(null,s__8531__$2);
var output_recipe = cljs.core.nth.call(null,vec__8543,(0),null);
var output_index = cljs.core.nth.call(null,vec__8543,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.recipes.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cons.call(null,(function (){var tap_x = ((1) + (((2) + bus_width) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (5));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8531__$1,tap_x,x__$1,y__$1,vec__8543,output_recipe,output_index,s__8531__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8530_$_iter__8546(s__8547){
return (new cljs.core.LazySeq(null,((function (s__8531__$1,tap_x,x__$1,y__$1,vec__8543,output_recipe,output_index,s__8531__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8547__$1 = s__8547;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8547__$1);
if(temp__5457__auto____$1){
var s__8547__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8547__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8547__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8549 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8548 = (0);
while(true){
if((i__8548 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8548);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
cljs.core.chunk_append.call(null,b__8549,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8550 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8550) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8550)].join('')));

}
})()));

var G__8611 = (i__8548 + (1));
i__8548 = G__8611;
continue;
} else {
var G__8612 = (i__8548 + (1));
i__8548 = G__8612;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8549),busmaker$main_bus$iter__8530_$_iter__8546.call(null,cljs.core.chunk_rest.call(null,s__8547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8549),null);
}
} else {
var i = cljs.core.first.call(null,s__8547__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8551 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8551) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8551)].join('')));

}
})()),busmaker$main_bus$iter__8530_$_iter__8546.call(null,cljs.core.rest.call(null,s__8547__$2)));
} else {
var G__8614 = cljs.core.rest.call(null,s__8547__$2);
s__8547__$1 = G__8614;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8531__$1,tap_x,x__$1,y__$1,vec__8543,output_recipe,output_index,s__8531__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(s__8531__$1,tap_x,x__$1,y__$1,vec__8543,output_recipe,output_index,s__8531__$2,temp__5457__auto__,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})(),busmaker$main_bus$iter__8530.call(null,cljs.core.rest.call(null,s__8531__$2)));
} else {
var G__8615 = cljs.core.rest.call(null,s__8531__$2);
s__8531__$1 = G__8615;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,busmaker.templates.output_tap_indexes.call(null,ingredient));
})()));
var G__8467__$1 = ((cljs.core.not.call(null,busmaker.recipes.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8467,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var output_index = buses.call(null,ingredient);
var iter__4324__auto__ = ((function (x__$1,y__$1,output_index,G__8467,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8552(s__8553){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,output_index,G__8467,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8553__$1 = s__8553;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8553__$1);
if(temp__5457__auto__){
var s__8553__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8553__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8553__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8555 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8554 = (0);
while(true){
if((i__8554 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8554);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
cljs.core.chunk_append.call(null,b__8555,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)));

var G__8616 = (i__8554 + (1));
i__8554 = G__8616;
continue;
} else {
var G__8617 = (i__8554 + (1));
i__8554 = G__8617;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8555),busmaker$main_bus$iter__8552.call(null,cljs.core.chunk_rest.call(null,s__8553__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8555),null);
}
} else {
var i = cljs.core.first.call(null,s__8553__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)),busmaker$main_bus$iter__8552.call(null,cljs.core.rest.call(null,s__8553__$2)));
} else {
var G__8618 = cljs.core.rest.call(null,s__8553__$2);
s__8553__$1 = G__8618;
continue;
}
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,output_index,G__8467,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$1,y__$1,output_index,G__8467,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8467);
var G__8467__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.recipes.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))?cljs.core.concat.call(null,G__8467__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8467,G__8467__$1,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8556(s__8557){
return (new cljs.core.LazySeq(null,((function (G__8467,G__8467__$1,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8557__$1 = s__8557;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8557__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8557__$1,i,xs__6012__auto__,temp__5457__auto__,G__8467,G__8467__$1,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8556_$_iter__8558(s__8559){
return (new cljs.core.LazySeq(null,((function (s__8557__$1,i,xs__6012__auto__,temp__5457__auto__,G__8467,G__8467__$1,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8559__$1 = s__8559;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8559__$1);
if(temp__5457__auto____$1){
var s__8559__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8559__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8559__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8561 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8560 = (0);
while(true){
if((i__8560 < size__4323__auto__)){
var vec__8562 = cljs.core._nth.call(null,c__4322__auto__,i__8560);
var input_recipe = cljs.core.nth.call(null,vec__8562,(0),null);
var input_index = cljs.core.nth.call(null,vec__8562,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8561,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8619 = (i__8560 + (1));
i__8560 = G__8619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8561),busmaker$main_bus$iter__8556_$_iter__8558.call(null,cljs.core.chunk_rest.call(null,s__8559__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8561),null);
}
} else {
var vec__8565 = cljs.core.first.call(null,s__8559__$2);
var input_recipe = cljs.core.nth.call(null,vec__8565,(0),null);
var input_index = cljs.core.nth.call(null,vec__8565,(1),null);
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
)),args))))),busmaker$main_bus$iter__8556_$_iter__8558.call(null,cljs.core.rest.call(null,s__8559__$2)));
}
} else {
return null;
}
break;
}
});})(s__8557__$1,i,xs__6012__auto__,temp__5457__auto__,G__8467,G__8467__$1,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(s__8557__$1,i,xs__6012__auto__,temp__5457__auto__,G__8467,G__8467__$1,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.templates.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8556.call(null,cljs.core.rest.call(null,s__8557__$1)));
} else {
var G__8620 = cljs.core.rest.call(null,s__8557__$1);
s__8557__$1 = G__8620;
continue;
}
} else {
return null;
}
break;
}
});})(G__8467,G__8467__$1,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(G__8467,G__8467__$1,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8467__$1);
if(cljs.core.truth_(busmaker.recipes.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8467__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$1,x__$1,G__8467,G__8467__$1,G__8467__$2,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8568(s__8569){
return (new cljs.core.LazySeq(null,((function (y__$1,x__$1,G__8467,G__8467__$1,G__8467__$2,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8569__$1 = s__8569;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8569__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8569__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8467,G__8467__$1,G__8467__$2,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8568_$_iter__8570(s__8571){
return (new cljs.core.LazySeq(null,((function (s__8569__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8467,G__8467__$1,G__8467__$2,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8571__$1 = s__8571;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8571__$1);
if(temp__5457__auto____$1){
var s__8571__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8571__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8571__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8573 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8572 = (0);
while(true){
if((i__8572 < size__4323__auto__)){
var vec__8574 = cljs.core._nth.call(null,c__4322__auto__,i__8572);
var output_recipe = cljs.core.nth.call(null,vec__8574,(0),null);
var output_index = cljs.core.nth.call(null,vec__8574,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8573,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8621 = (i__8572 + (1));
i__8572 = G__8621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8573),busmaker$main_bus$iter__8568_$_iter__8570.call(null,cljs.core.chunk_rest.call(null,s__8571__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8573),null);
}
} else {
var vec__8577 = cljs.core.first.call(null,s__8571__$2);
var output_recipe = cljs.core.nth.call(null,vec__8577,(0),null);
var output_index = cljs.core.nth.call(null,vec__8577,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8568_$_iter__8570.call(null,cljs.core.rest.call(null,s__8571__$2)));
}
} else {
return null;
}
break;
}
});})(s__8569__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8467,G__8467__$1,G__8467__$2,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(s__8569__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8467,G__8467__$1,G__8467__$2,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.templates.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8568.call(null,cljs.core.rest.call(null,s__8569__$1)));
} else {
var G__8622 = cljs.core.rest.call(null,s__8569__$1);
s__8569__$1 = G__8622;
continue;
}
} else {
return null;
}
break;
}
});})(y__$1,x__$1,G__8467,G__8467__$1,G__8467__$2,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(y__$1,x__$1,G__8467,G__8467__$1,G__8467__$2,ingredient,buses,map__8465,map__8465__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8467__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8463){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8463));
});

busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(factories,bus_outputs,bus_width){
var bus_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (bus_index){
return (function (p__8623,factory){
var map__8624 = p__8623;
var map__8624__$1 = ((((!((map__8624 == null)))?(((((map__8624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8624):map__8624);
var acc = map__8624__$1;
var x = cljs.core.get.call(null,map__8624__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8624__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__8626 = factory;
var map__8626__$1 = ((((!((map__8626 == null)))?(((((map__8626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8626):map__8626);
var facility = cljs.core.get.call(null,map__8626__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8626__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8626__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var height = busmaker.main_bus.ingredient_height.call(null,cljs.core.first.call(null,recipes),facility,bus_width);
var input_indexes = cljs.core.map.call(null,bus_index,busmaker.main_bus.ingredients.call(null,cljs.core.first.call(null,recipes),facility));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),bus_outputs,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["assembling-machine-2",null,"chemical-plant",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
))),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,height);
});})(bus_index))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),factories)));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
var splitters = cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["splitter",null], null), null),(function (p1__8628_SHARP_){
return cljs.core.get.call(null,p1__8628_SHARP_,"name");
})),entities);
var splitter_pos = cljs.core.set.call(null,cljs.core.mapcat.call(null,busmaker.main_bus.entity_coords,splitters));
var non_splitters = cljs.core.remove.call(null,cljs.core.comp.call(null,splitter_pos,busmaker.main_bus.entity_coord),cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["splitter",null], null), null),((function (splitters,splitter_pos){
return (function (p1__8629_SHARP_){
return cljs.core.get.call(null,p1__8629_SHARP_,"name");
});})(splitters,splitter_pos))
),entities));
var entities__$1 = cljs.core.concat.call(null,splitters,non_splitters);
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,((function (splitters,splitter_pos,non_splitters,entities__$1){
return (function (p1__8630_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8630_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8630_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
});})(splitters,splitter_pos,non_splitters,entities__$1))
,cljs.core.identity),entities__$1)));
});
