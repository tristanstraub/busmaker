// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.main_bus');
goog.require('cljs.core');
goog.require('busmaker.bus');
goog.require('busmaker.recipe_data');
goog.require('busmaker.recipes');
goog.require('busmaker.templates');
busmaker.main_bus.rotate_90 = (function busmaker$main_bus$rotate_90(p__8197){
var vec__8198 = p__8197;
var x = cljs.core.nth.call(null,vec__8198,(0),null);
var y = cljs.core.nth.call(null,vec__8198,(1),null);
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
var G__8202 = arguments.length;
switch (G__8202) {
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
var dir__$1 = (function (){var vec__8203 = busmaker.main_bus.rotate_90.call(null,dir);
var x = cljs.core.nth.call(null,vec__8203,(0),null);
var y = cljs.core.nth.call(null,vec__8203,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.abs(x),Math.abs(y)], null);
})();
var G__8206 = cljs.core.get.call(null,entity,"name");
if(cljs.core._EQ_.call(null,"splitter",G__8206)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,cljs.core.mapv.call(null,cljs.core._PLUS_,coord,dir__$1)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"entity","entity",1189561251,null),G__8206)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8206)].join('')));

}
}
});

busmaker.main_bus.entity_coords.cljs$lang$maxFixedArity = 2;

busmaker.main_bus.recipe = (function busmaker$main_bus$recipe(recipes,recipe_name){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([recipe_name]),new cljs.core.Keyword(null,"name","name",1843675177)),recipes));
});
busmaker.main_bus.pipe_to_ground = (function busmaker$main_bus$pipe_to_ground(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8212 = arguments.length;
var i__4532__auto___8213 = (0);
while(true){
if((i__4532__auto___8213 < len__4531__auto___8212)){
args__4534__auto__.push((arguments[i__4532__auto___8213]));

var G__8214 = (i__4532__auto___8213 + (1));
i__4532__auto___8213 = G__8214;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_to_ground.cljs$core$IFn$_invoke$arity$variadic = (function (p__8209){
var map__8210 = p__8209;
var map__8210__$1 = ((((!((map__8210 == null)))?(((((map__8210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8210):map__8210);
var x = cljs.core.get.call(null,map__8210__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8210__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8210__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var type = cljs.core.get.call(null,map__8210__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.templates.blueprint_direction.call(null,direction),"name","pipe-to-ground","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe_to_ground.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_to_ground.cljs$lang$applyTo = (function (seq8208){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8208));
});

busmaker.main_bus.splitter = (function busmaker$main_bus$splitter(var_args){
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
return busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.splitter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8216){
var map__8217 = p__8216;
var map__8217__$1 = ((((!((map__8217 == null)))?(((((map__8217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8217):map__8217);
var x = cljs.core.get.call(null,map__8217__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8217__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8217__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
var vec__8219 = busmaker.main_bus.rotate_90.call(null,direction);
var dx = cljs.core.nth.call(null,vec__8219,(0),null);
var dy = cljs.core.nth.call(null,vec__8219,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.templates.blueprint_direction.call(null,direction),"name","splitter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",((Math.abs(dx) * 0.5) + x),"y",((Math.abs(dy) * 0.5) + y)], null)], null)], null);
});

busmaker.main_bus.splitter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.splitter.cljs$lang$applyTo = (function (seq8215){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8215));
});

busmaker.main_bus.long_handed_inserter = (function busmaker$main_bus$long_handed_inserter(var_args){
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
return busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.long_handed_inserter.cljs$core$IFn$_invoke$arity$variadic = (function (p__8226){
var map__8227 = p__8226;
var map__8227__$1 = ((((!((map__8227 == null)))?(((((map__8227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8227):map__8227);
var x = cljs.core.get.call(null,map__8227__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8227__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8227__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 3, ["direction",busmaker.templates.blueprint_direction_inserter.call(null,direction),"name","long-handed-inserter","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.long_handed_inserter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.long_handed_inserter.cljs$lang$applyTo = (function (seq8225){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8225));
});

busmaker.main_bus.pipe = (function busmaker$main_bus$pipe(var_args){
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
return busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe.cljs$core$IFn$_invoke$arity$variadic = (function (p__8233){
var map__8234 = p__8233;
var map__8234__$1 = ((((!((map__8234 == null)))?(((((map__8234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8234):map__8234);
var x = cljs.core.get.call(null,map__8234__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8234__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var direction = cljs.core.get.call(null,map__8234__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
return new cljs.core.PersistentArrayMap(null, 2, ["name","pipe","position",new cljs.core.PersistentArrayMap(null, 2, ["x",x,"y",y], null)], null);
});

busmaker.main_bus.pipe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe.cljs$lang$applyTo = (function (seq8232){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8232));
});

busmaker.main_bus.pipe_bus = (function busmaker$main_bus$pipe_bus(var_args){
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
return busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8240){
var map__8241 = p__8240;
var map__8241__$1 = ((((!((map__8241 == null)))?(((((map__8241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8241):map__8241);
var x = cljs.core.get.call(null,map__8241__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8241__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8241__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
var iter__4324__auto__ = ((function (map__8241,map__8241__$1,x,y,height){
return (function busmaker$main_bus$iter__8243(s__8244){
return (new cljs.core.LazySeq(null,((function (map__8241,map__8241__$1,x,y,height){
return (function (){
var s__8244__$1 = s__8244;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8244__$1);
if(temp__5457__auto__){
var s__8244__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8244__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8244__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8246 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8245 = (0);
while(true){
if((i__8245 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8245);
cljs.core.chunk_append.call(null,b__8246,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8250 = (i__8245 + (1));
i__8245 = G__8250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8246),busmaker$main_bus$iter__8243.call(null,cljs.core.chunk_rest.call(null,s__8244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8246),null);
}
} else {
var i = cljs.core.first.call(null,s__8244__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8243.call(null,cljs.core.rest.call(null,s__8244__$2)));
}
} else {
return null;
}
break;
}
});})(map__8241,map__8241__$1,x,y,height))
,null,null));
});})(map__8241,map__8241__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
});

busmaker.main_bus.pipe_bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_bus.cljs$lang$applyTo = (function (seq8239){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8239));
});

busmaker.main_bus.bus = (function busmaker$main_bus$bus(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8259 = arguments.length;
var i__4532__auto___8260 = (0);
while(true){
if((i__4532__auto___8260 < len__4531__auto___8259)){
args__4534__auto__.push((arguments[i__4532__auto___8260]));

var G__8261 = (i__4532__auto___8260 + (1));
i__4532__auto___8260 = G__8261;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.bus.cljs$core$IFn$_invoke$arity$variadic = (function (p__8252){
var map__8253 = p__8252;
var map__8253__$1 = ((((!((map__8253 == null)))?(((((map__8253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8253):map__8253);
var x = cljs.core.get.call(null,map__8253__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8253__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var height = cljs.core.get.call(null,map__8253__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1));
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8253,map__8253__$1,x,y,height){
return (function busmaker$main_bus$iter__8255(s__8256){
return (new cljs.core.LazySeq(null,((function (map__8253,map__8253__$1,x,y,height){
return (function (){
var s__8256__$1 = s__8256;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8256__$1);
if(temp__5457__auto__){
var s__8256__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8256__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8256__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8258 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8257 = (0);
while(true){
if((i__8257 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8257);
cljs.core.chunk_append.call(null,b__8258,busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8262 = (i__8257 + (1));
i__8257 = G__8262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8258),busmaker$main_bus$iter__8255.call(null,cljs.core.chunk_rest.call(null,s__8256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8258),null);
}
} else {
var i = cljs.core.first.call(null,s__8256__$2);
return cljs.core.cons.call(null,busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8255.call(null,cljs.core.rest.call(null,s__8256__$2)));
}
} else {
return null;
}
break;
}
});})(map__8253,map__8253__$1,x,y,height))
,null,null));
});})(map__8253,map__8253__$1,x,y,height))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,height));
})());
});

busmaker.main_bus.bus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.bus.cljs$lang$applyTo = (function (seq8251){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8251));
});

busmaker.main_bus.pipe_input_down_tap = (function busmaker$main_bus$pipe_input_down_tap(var_args){
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
return busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_down_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8264){
var map__8265 = p__8264;
var map__8265__$1 = ((((!((map__8265 == null)))?(((((map__8265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8265):map__8265);
var x = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
var n = (((((2) * input_index) + (4)) - (1)) + x_extension);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (n,map__8265,map__8265__$1,x,y,input_index,input_extension,x_extension,y_extension){
return (function busmaker$main_bus$iter__8267(s__8268){
return (new cljs.core.LazySeq(null,((function (n,map__8265,map__8265__$1,x,y,input_index,input_extension,x_extension,y_extension){
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
cljs.core.chunk_append.call(null,b__8270,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)));

var G__8274 = (i__8269 + (1));
i__8269 = G__8274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8270),busmaker$main_bus$iter__8267.call(null,cljs.core.chunk_rest.call(null,s__8268__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8270),null);
}
} else {
var i = cljs.core.first.call(null,s__8268__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + i)),busmaker$main_bus$iter__8267.call(null,cljs.core.rest.call(null,s__8268__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8265,map__8265__$1,x,y,input_index,input_extension,x_extension,y_extension))
,null,null));
});})(n,map__8265,map__8265__$1,x,y,input_index,input_extension,x_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,y_extension));
})()))));
});

busmaker.main_bus.pipe_input_down_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_down_tap.cljs$lang$applyTo = (function (seq8263){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8263));
});

busmaker.main_bus.pipe_input_tap_lhs = (function busmaker$main_bus$pipe_input_tap_lhs(var_args){
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
return busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$core$IFn$_invoke$arity$variadic = (function (p__8276){
var map__8277 = p__8276;
var map__8277__$1 = ((((!((map__8277 == null)))?(((((map__8277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8277):map__8277);
var x = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var input_extension = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(0));
var x_extension = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(0));
var y_extension = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y),busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null);
});

busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_input_tap_lhs.cljs$lang$applyTo = (function (seq8275){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8275));
});

busmaker.main_bus.pipe_output_tap = (function busmaker$main_bus$pipe_output_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8290 = arguments.length;
var i__4532__auto___8291 = (0);
while(true){
if((i__4532__auto___8291 < len__4531__auto___8290)){
args__4534__auto__.push((arguments[i__4532__auto___8291]));

var G__8292 = (i__4532__auto___8291 + (1));
i__4532__auto___8291 = G__8292;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.pipe_output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8283){
var map__8284 = p__8283;
var map__8284__$1 = ((((!((map__8284 == null)))?(((((map__8284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8284):map__8284);
var x = cljs.core.get.call(null,map__8284__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8284__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8284__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var output_extension = cljs.core.get.call(null,map__8284__$1,new cljs.core.Keyword(null,"output-extension","output-extension",2124687476),(0));
var y_extension = cljs.core.get.call(null,map__8284__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(0));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y),null,(1),null)),(new cljs.core.List(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),null,(1),null)),(function (){var iter__4324__auto__ = ((function (map__8284,map__8284__$1,x,y,output_index,output_extension,y_extension){
return (function busmaker$main_bus$iter__8286(s__8287){
return (new cljs.core.LazySeq(null,((function (map__8284,map__8284__$1,x,y,output_index,output_extension,y_extension){
return (function (){
var s__8287__$1 = s__8287;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8287__$1);
if(temp__5457__auto__){
var s__8287__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8287__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8287__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8289 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8288 = (0);
while(true){
if((i__8288 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8288);
cljs.core.chunk_append.call(null,b__8289,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)));

var G__8293 = (i__8288 + (1));
i__8288 = G__8293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8289),busmaker$main_bus$iter__8286.call(null,cljs.core.chunk_rest.call(null,s__8287__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8289),null);
}
} else {
var i = cljs.core.first.call(null,s__8287__$2);
return cljs.core.cons.call(null,busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((y + (1)) + i)),busmaker$main_bus$iter__8286.call(null,cljs.core.rest.call(null,s__8287__$2)));
}
} else {
return null;
}
break;
}
});})(map__8284,map__8284__$1,x,y,output_index,output_extension,y_extension))
,null,null));
});})(map__8284,map__8284__$1,x,y,output_index,output_extension,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * output_index) + (1))));
})()))));
});

busmaker.main_bus.pipe_output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.pipe_output_tap.cljs$lang$applyTo = (function (seq8282){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8282));
});

busmaker.main_bus.input_tap = (function busmaker$main_bus$input_tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8308 = arguments.length;
var i__4532__auto___8309 = (0);
while(true){
if((i__4532__auto___8309 < len__4531__auto___8308)){
args__4534__auto__.push((arguments[i__4532__auto___8309]));

var G__8310 = (i__4532__auto___8309 + (1));
i__4532__auto___8309 = G__8310;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.input_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8295){
var map__8296 = p__8295;
var map__8296__$1 = ((((!((map__8296 == null)))?(((((map__8296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8296):map__8296);
var x = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var input_index = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));
var bus_index = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),(0));
var bus_width = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),(1));
if(cljs.core.truth_(bus_index)){
var n = (((2) + bus_width) * bus_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input"),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + n) + (-4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n,map__8296,map__8296__$1,x,y,input_index,bus_index,bus_width){
return (function busmaker$main_bus$iter__8298(s__8299){
return (new cljs.core.LazySeq(null,((function (n,map__8296,map__8296__$1,x,y,input_index,bus_index,bus_width){
return (function (){
var s__8299__$1 = s__8299;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8299__$1);
if(temp__5457__auto__){
var s__8299__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8299__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8299__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8301 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8300 = (0);
while(true){
if((i__8300 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8300);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
cljs.core.chunk_append.call(null,b__8301,(function (){var G__8302 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8302) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8302)].join('')));

}
})());

var G__8312 = (i__8300 + (1));
i__8300 = G__8312;
continue;
} else {
var G__8313 = (i__8300 + (1));
i__8300 = G__8313;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8301),busmaker$main_bus$iter__8298.call(null,cljs.core.chunk_rest.call(null,s__8299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8301),null);
}
} else {
var i = cljs.core.first.call(null,s__8299__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
return cljs.core.cons.call(null,(function (){var G__8303 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8303) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
case (1):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8303)].join('')));

}
})(),busmaker$main_bus$iter__8298.call(null,cljs.core.rest.call(null,s__8299__$2)));
} else {
var G__8315 = cljs.core.rest.call(null,s__8299__$2);
s__8299__$1 = G__8315;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8296,map__8296__$1,x,y,input_index,bus_index,bus_width))
,null,null));
});})(n,map__8296,map__8296__$1,x,y,input_index,bus_index,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n,map__8296,map__8296__$1,x,y,input_index,bus_index,bus_width){
return (function busmaker$main_bus$iter__8304(s__8305){
return (new cljs.core.LazySeq(null,((function (n,map__8296,map__8296__$1,x,y,input_index,bus_index,bus_width){
return (function (){
var s__8305__$1 = s__8305;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8305__$1);
if(temp__5457__auto__){
var s__8305__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8305__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8305__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8307 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8306 = (0);
while(true){
if((i__8306 < size__4323__auto__)){
var k = cljs.core._nth.call(null,c__4322__auto__,i__8306);
cljs.core.chunk_append.call(null,b__8307,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x + (((2) + bus_width) * bus_index)) + (-4)) + k),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (-4)) + k)));

var G__8316 = (i__8306 + (1));
i__8306 = G__8316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8307),busmaker$main_bus$iter__8304.call(null,cljs.core.chunk_rest.call(null,s__8305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8307),null);
}
} else {
var k = cljs.core.first.call(null,s__8305__$2);
return cljs.core.cons.call(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x + (((2) + bus_width) * bus_index)) + (-4)) + k),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (-4)) + k)),busmaker$main_bus$iter__8304.call(null,cljs.core.rest.call(null,s__8305__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8296,map__8296__$1,x,y,input_index,bus_index,bus_width))
,null,null));
});})(n,map__8296,map__8296__$1,x,y,input_index,bus_index,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,bus_width));
})())))));
} else {
return null;
}
});

busmaker.main_bus.input_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.input_tap.cljs$lang$applyTo = (function (seq8294){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8294));
});

busmaker.main_bus.output_tap_common = (function busmaker$main_bus$output_tap_common(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8325 = arguments.length;
var i__4532__auto___8326 = (0);
while(true){
if((i__4532__auto___8326 < len__4531__auto___8325)){
args__4534__auto__.push((arguments[i__4532__auto___8326]));

var G__8327 = (i__4532__auto___8326 + (1));
i__4532__auto___8326 = G__8327;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_common.cljs$core$IFn$_invoke$arity$variadic = (function (p__8318){
var map__8319 = p__8318;
var map__8319__$1 = ((((!((map__8319 == null)))?(((((map__8319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8319):map__8319);
var x = cljs.core.get.call(null,map__8319__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8319__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8319__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8319__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (3)) - (- y_extension)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (map__8319,map__8319__$1,x,y,output_index,y_extension){
return (function busmaker$main_bus$iter__8321(s__8322){
return (new cljs.core.LazySeq(null,((function (map__8319,map__8319__$1,x,y,output_index,y_extension){
return (function (){
var s__8322__$1 = s__8322;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8322__$1);
if(temp__5457__auto__){
var s__8322__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8322__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8322__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8324 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8323 = (0);
while(true){
if((i__8323 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8323);
cljs.core.chunk_append.call(null,b__8324,busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));

var G__8328 = (i__8323 + (1));
i__8323 = G__8328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8324),busmaker$main_bus$iter__8321.call(null,cljs.core.chunk_rest.call(null,s__8322__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8324),null);
}
} else {
var i = cljs.core.first.call(null,s__8322__$2);
return cljs.core.cons.call(null,busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - (4)) + i),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),busmaker$main_bus$iter__8321.call(null,cljs.core.rest.call(null,s__8322__$2)));
}
} else {
return null;
}
break;
}
});})(map__8319,map__8319__$1,x,y,output_index,y_extension))
,null,null));
});})(map__8319,map__8319__$1,x,y,output_index,y_extension))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(y_extension + (1))));
})()),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (6)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (6)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (7)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (6)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null))))));
});

busmaker.main_bus.output_tap_common.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_common.cljs$lang$applyTo = (function (seq8317){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8317));
});

busmaker.main_bus.output_tap = (function busmaker$main_bus$output_tap(var_args){
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

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap.cljs$core$IFn$_invoke$arity$variadic = (function (p__8330){
var map__8331 = p__8330;
var map__8331__$1 = ((((!((map__8331 == null)))?(((((map__8331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8331):map__8331);
var x = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var bus_width = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),(1));
var n = (((2) + bus_width) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension),busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x - (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n,map__8331,map__8331__$1,x,y,output_index,y_extension,bus_width){
return (function busmaker$main_bus$iter__8333(s__8334){
return (new cljs.core.LazySeq(null,((function (n,map__8331,map__8331__$1,x,y,output_index,y_extension,bus_width){
return (function (){
var s__8334__$1 = s__8334;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8334__$1);
if(temp__5457__auto__){
var s__8334__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8334__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8334__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8336 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8335 = (0);
while(true){
if((i__8335 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8335);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
cljs.core.chunk_append.call(null,b__8336,(((i >= n))?(function (){var G__8337 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8337) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8337)].join('')));

}
})():(function (){var G__8338 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8338) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8338)].join('')));

}
})()));

var G__8350 = (i__8335 + (1));
i__8335 = G__8350;
continue;
} else {
var G__8351 = (i__8335 + (1));
i__8335 = G__8351;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8336),busmaker$main_bus$iter__8333.call(null,cljs.core.chunk_rest.call(null,s__8334__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8336),null);
}
} else {
var i = cljs.core.first.call(null,s__8334__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
return cljs.core.cons.call(null,(((i >= n))?(function (){var G__8339 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8339) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.templates.transport_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8339)].join('')));

}
})():(function (){var G__8340 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8340) {
case (0):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output");

break;
case (1):
return busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x + i) + (-2)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8340)].join('')));

}
})()),busmaker$main_bus$iter__8333.call(null,cljs.core.rest.call(null,s__8334__$2)));
} else {
var G__8354 = cljs.core.rest.call(null,s__8334__$2);
s__8334__$1 = G__8354;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,map__8331,map__8331__$1,x,y,output_index,y_extension,bus_width))
,null,null));
});})(n,map__8331,map__8331__$1,x,y,output_index,y_extension,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((3) + n)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (n,map__8331,map__8331__$1,x,y,output_index,y_extension,bus_width){
return (function busmaker$main_bus$iter__8341(s__8342){
return (new cljs.core.LazySeq(null,((function (n,map__8331,map__8331__$1,x,y,output_index,y_extension,bus_width){
return (function (){
var s__8342__$1 = s__8342;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8342__$1);
if(temp__5457__auto__){
var s__8342__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8342__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8342__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8344 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8343 = (0);
while(true){
if((i__8343 < size__4323__auto__)){
var k = cljs.core._nth.call(null,c__4322__auto__,i__8343);
cljs.core.chunk_append.call(null,b__8344,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x + n) + k) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (-6)) + (- k))));

var G__8355 = (i__8343 + (1));
i__8343 = G__8355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8344),busmaker$main_bus$iter__8341.call(null,cljs.core.chunk_rest.call(null,s__8342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8344),null);
}
} else {
var k = cljs.core.first.call(null,s__8342__$2);
return cljs.core.cons.call(null,busmaker.main_bus.splitter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x + n) + k) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (-6)) + (- k))),busmaker$main_bus$iter__8341.call(null,cljs.core.rest.call(null,s__8342__$2)));
}
} else {
return null;
}
break;
}
});})(n,map__8331,map__8331__$1,x,y,output_index,y_extension,bus_width))
,null,null));
});})(n,map__8331,map__8331__$1,x,y,output_index,y_extension,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,bus_width));
})())))));
});

busmaker.main_bus.output_tap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap.cljs$lang$applyTo = (function (seq8329){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8329));
});

busmaker.main_bus.output_tap_extension = (function busmaker$main_bus$output_tap_extension(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8360 = arguments.length;
var i__4532__auto___8361 = (0);
while(true){
if((i__4532__auto___8361 < len__4531__auto___8360)){
args__4534__auto__.push((arguments[i__4532__auto___8361]));

var G__8362 = (i__4532__auto___8361 + (1));
i__4532__auto___8361 = G__8362;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.output_tap_extension.cljs$core$IFn$_invoke$arity$variadic = (function (p__8357){
var map__8358 = p__8357;
var map__8358__$1 = ((((!((map__8358 == null)))?(((((map__8358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8358):map__8358);
var x = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var output_index = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"output-index","output-index",-655346446),(0));
var y_extension = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666));
var bus_width = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),(1));
var n = (((2) + bus_width) * output_index);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,busmaker.main_bus.output_tap_common.call(null,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)))));
});

busmaker.main_bus.output_tap_extension.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.output_tap_extension.cljs$lang$applyTo = (function (seq8356){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8356));
});

busmaker.main_bus.ingredients = (function busmaker$main_bus$ingredients(recipe_name,facility){
var recipe_name__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["petroleum-gas",null,"light-oil",null,"heavy-oil",null], null), null).call(null,recipe_name))?"basic-oil-processing":recipe_name);
var G__8363 = busmaker.recipes.recipe_ingredients.call(null,busmaker.main_bus.recipe.call(null,busmaker.recipe_data.recipes,recipe_name__$1));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))){
return cljs.core.conj.call(null,G__8363,"coal");
} else {
return G__8363;
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
var len__4531__auto___8483 = arguments.length;
var i__4532__auto___8484 = (0);
while(true){
if((i__4532__auto___8484 < len__4531__auto___8483)){
args__4534__auto__.push((arguments[i__4532__auto___8484]));

var G__8485 = (i__4532__auto___8484 + (1));
i__4532__auto___8484 = G__8485;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

busmaker.main_bus.main_bus_line.cljs$core$IFn$_invoke$arity$variadic = (function (p__8367){
var map__8368 = p__8367;
var map__8368__$1 = ((((!((map__8368 == null)))?(((((map__8368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8368):map__8368);
var x = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var n_factories = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494));
var facility = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var recipes = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var bus_outputs = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584));
var input_indexes = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793));
var bus_width = cljs.core.get.call(null,map__8368__$1,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167));
var ingredient = cljs.core.first.call(null,recipes);
var buses = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
cljs.core.println.call(null,new cljs.core.Keyword(null,"buses","buses",214650120),bus_outputs);

return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (p1__8364_SHARP_,p2__8365_SHARP_){
return cljs.core.assoc.call(null,p1__8364_SHARP_,"entity_number",(p2__8365_SHARP_ + (1)));
});})(ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,(function (){var G__8370 = cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,busmaker.templates.template.call(null,new cljs.core.Keyword(null,"factory-line","factory-line",-1949597433),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n_factories,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility)),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8371(s__8372){
return (new cljs.core.LazySeq(null,((function (ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8372__$1 = s__8372;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8372__$1);
if(temp__5457__auto__){
var s__8372__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8372__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8372__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8374 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8373 = (0);
while(true){
if((i__8373 < size__4323__auto__)){
var vec__8375 = cljs.core._nth.call(null,c__4322__auto__,i__8373);
var i = cljs.core.nth.call(null,vec__8375,(0),null);
var bus_ingredient = cljs.core.nth.call(null,vec__8375,(1),null);
cljs.core.chunk_append.call(null,b__8374,(function (){var x__$1 = (x + (6));
var y__$1 = (((y + (4)) + (- busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width))) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(0):(0)
));
var dy = busmaker.main_bus.facility_dy.call(null,ingredient,facility,bus_width);
if(cljs.core.truth_(busmaker.recipes.fluid_QMARK_.call(null,bus_ingredient))){
return busmaker.main_bus.pipe_bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (i * (bus_width + (2)))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([bus_ingredient]),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),busmaker.recipe_data.extra_buses)))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (i__8373,x__$1,y__$1,dy,vec__8375,i,bus_ingredient,c__4322__auto__,size__4323__auto__,b__8374,s__8372__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8371_$_iter__8378(s__8379){
return (new cljs.core.LazySeq(null,((function (i__8373,x__$1,y__$1,dy,vec__8375,i,bus_ingredient,c__4322__auto__,size__4323__auto__,b__8374,s__8372__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8379__$1 = s__8379;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8379__$1);
if(temp__5457__auto____$1){
var s__8379__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8379__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8379__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8381 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8380 = (0);
while(true){
if((i__8380 < size__4323__auto____$1)){
var j = cljs.core._nth.call(null,c__4322__auto____$1,i__8380);
cljs.core.chunk_append.call(null,b__8381,busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$1 + (i * (bus_width + (2)))) + j),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width)));

var G__8486 = (i__8380 + (1));
i__8380 = G__8486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8381),busmaker$main_bus$iter__8371_$_iter__8378.call(null,cljs.core.chunk_rest.call(null,s__8379__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8381),null);
}
} else {
var j = cljs.core.first.call(null,s__8379__$2);
return cljs.core.cons.call(null,busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$1 + (i * (bus_width + (2)))) + j),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width)),busmaker$main_bus$iter__8371_$_iter__8378.call(null,cljs.core.rest.call(null,s__8379__$2)));
}
} else {
return null;
}
break;
}
});})(i__8373,x__$1,y__$1,dy,vec__8375,i,bus_ingredient,c__4322__auto__,size__4323__auto__,b__8374,s__8372__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(i__8373,x__$1,y__$1,dy,vec__8375,i,bus_ingredient,c__4322__auto__,size__4323__auto__,b__8374,s__8372__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,bus_width));
})());

}
}
})());

var G__8487 = (i__8373 + (1));
i__8373 = G__8487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8374),busmaker$main_bus$iter__8371.call(null,cljs.core.chunk_rest.call(null,s__8372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8374),null);
}
} else {
var vec__8382 = cljs.core.first.call(null,s__8372__$2);
var i = cljs.core.nth.call(null,vec__8382,(0),null);
var bus_ingredient = cljs.core.nth.call(null,vec__8382,(1),null);
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
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,dy,vec__8382,i,bus_ingredient,s__8372__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8371_$_iter__8385(s__8386){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,dy,vec__8382,i,bus_ingredient,s__8372__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
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
cljs.core.chunk_append.call(null,b__8388,busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$1 + (i * (bus_width + (2)))) + j),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width)));

var G__8488 = (i__8387 + (1));
i__8387 = G__8488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8388),busmaker$main_bus$iter__8371_$_iter__8385.call(null,cljs.core.chunk_rest.call(null,s__8386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8388),null);
}
} else {
var j = cljs.core.first.call(null,s__8386__$2);
return cljs.core.cons.call(null,busmaker.main_bus.bus.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$1 + (i * (bus_width + (2)))) + j),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy),new cljs.core.Keyword(null,"height","height",1025178622),busmaker.main_bus.ingredient_height.call(null,ingredient,facility,bus_width)),busmaker$main_bus$iter__8371_$_iter__8385.call(null,cljs.core.rest.call(null,s__8386__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,dy,vec__8382,i,bus_ingredient,s__8372__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$1,y__$1,dy,vec__8382,i,bus_ingredient,s__8372__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,bus_width));
})());

}
}
})(),busmaker$main_bus$iter__8371.call(null,cljs.core.rest.call(null,s__8372__$2)));
}
} else {
return null;
}
break;
}
});})(ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
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
})())?cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8389(s__8390){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8390__$1 = s__8390;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8390__$1);
if(temp__5457__auto__){
var s__8390__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8390__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8390__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8392 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8391 = (0);
while(true){
if((i__8391 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8391);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8392,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)))))));

var G__8489 = (i__8391 + (1));
i__8391 = G__8489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8392),busmaker$main_bus$iter__8389.call(null,cljs.core.chunk_rest.call(null,s__8390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8392),null);
}
} else {
var i = cljs.core.first.call(null,s__8390__$2);
var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$2 = (((((-5) + y__$1) + (3)) + (-2)) + (4));
var dx = ((-6) * i);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,busmaker.main_bus.long_handed_inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),null,(1),null)),busmaker.templates.inserter.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 - (2)),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)))))),busmaker$main_bus$iter__8389.call(null,cljs.core.rest.call(null,s__8390__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()):null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8393(s__8394){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8394__$1 = s__8394;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8394__$1);
if(temp__5457__auto__){
var s__8394__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8394__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8394__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8396 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8395 = (0);
while(true){
if((i__8395 < size__4323__auto__)){
var vec__8397 = cljs.core._nth.call(null,c__4322__auto__,i__8395);
var input_index = cljs.core.nth.call(null,vec__8397,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8397,(1),null);
cljs.core.chunk_append.call(null,b__8396,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (i__8395,x__$2,y__$3,y__$2,vec__8397,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8396,s__8394__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8393_$_iter__8400(s__8401){
return (new cljs.core.LazySeq(null,((function (i__8395,x__$2,y__$3,y__$2,vec__8397,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8396,s__8394__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8401__$1 = s__8401;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8401__$1);
if(temp__5457__auto____$1){
var s__8401__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8401__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8401__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8403 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8402 = (0);
while(true){
if((i__8402 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8402);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8403,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")));

var G__8490 = (i__8402 + (1));
i__8402 = G__8490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8403),busmaker$main_bus$iter__8393_$_iter__8400.call(null,cljs.core.chunk_rest.call(null,s__8401__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8403),null);
}
} else {
var i = cljs.core.first.call(null,s__8401__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")),busmaker$main_bus$iter__8393_$_iter__8400.call(null,cljs.core.rest.call(null,s__8401__$2)));
}
} else {
return null;
}
break;
}
});})(i__8395,x__$2,y__$3,y__$2,vec__8397,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8396,s__8394__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(i__8395,x__$2,y__$3,y__$2,vec__8397,input_index,bus_index,c__4322__auto__,size__4323__auto__,b__8396,s__8394__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)));

var G__8491 = (i__8395 + (1));
i__8395 = G__8491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8396),busmaker$main_bus$iter__8393.call(null,cljs.core.chunk_rest.call(null,s__8394__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8396),null);
}
} else {
var vec__8404 = cljs.core.first.call(null,s__8394__$2);
var input_index = cljs.core.nth.call(null,vec__8404,(0),null);
var bus_index = cljs.core.nth.call(null,vec__8404,(1),null);
return cljs.core.cons.call(null,(((input_index >= (3)))?(function (){var y__$2 = (y__$1 + (7));
return cljs.core.concat.call(null,busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$2 + (3)) + (- input_index)) + (-2)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width),cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$2 = (((x__$1 + (-4)) + (2)) + (-5));
var y__$3 = (((((-5) + y__$2) + (3)) + (- input_index)) + (-2));
var iter__4324__auto__ = ((function (x__$2,y__$3,y__$2,vec__8404,input_index,bus_index,s__8394__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8393_$_iter__8407(s__8408){
return (new cljs.core.LazySeq(null,((function (x__$2,y__$3,y__$2,vec__8404,input_index,bus_index,s__8394__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8408__$1 = s__8408;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8408__$1);
if(temp__5457__auto____$1){
var s__8408__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8408__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8408__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8410 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8409 = (0);
while(true){
if((i__8409 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8409);
var dx = ((-6) * i);
cljs.core.chunk_append.call(null,b__8410,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")));

var G__8492 = (i__8409 + (1));
i__8409 = G__8492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8410),busmaker$main_bus$iter__8393_$_iter__8407.call(null,cljs.core.chunk_rest.call(null,s__8408__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8410),null);
}
} else {
var i = cljs.core.first.call(null,s__8408__$2);
var dx = ((-6) * i);
return cljs.core.cons.call(null,cljs.core.concat.call(null,busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"output"),busmaker.templates.underground_belt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((x__$2 + dx) + (-1)),new cljs.core.Keyword(null,"y","y",-1757859776),y__$3,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"input")),busmaker$main_bus$iter__8393_$_iter__8407.call(null,cljs.core.rest.call(null,s__8408__$2)));
}
} else {
return null;
}
break;
}
});})(x__$2,y__$3,y__$2,vec__8404,input_index,bus_index,s__8394__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$2,y__$3,y__$2,vec__8404,input_index,bus_index,s__8394__$2,temp__5457__auto__,x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
})():busmaker.main_bus.input_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y__$1 + (3)) + (- input_index)) + (-1)),new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"bus-index","bus-index",-373827931),bus_index,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)),busmaker$main_bus$iter__8393.call(null,cljs.core.rest.call(null,s__8394__$2)));
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$1,y__$1,non_fluid_ingredients,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,non_fluid_ingredients);
})()));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8411(s__8412){
return (new cljs.core.LazySeq(null,((function (ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8412__$1 = s__8412;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8412__$1);
if(temp__5457__auto__){
var s__8412__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8412__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8412__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8414 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8413 = (0);
while(true){
if((i__8413 < size__4323__auto__)){
var vec__8415 = cljs.core._nth.call(null,c__4322__auto__,i__8413);
var output_recipe = cljs.core.nth.call(null,vec__8415,(0),null);
var output_index = cljs.core.nth.call(null,vec__8415,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.recipes.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8414,(function (){var tap_x = ((1) + ((bus_width + (2)) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (5));
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8413,s__8412__$1,tap_x,x__$1,y__$1,vec__8415,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8414,s__8412__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8411_$_iter__8418(s__8419){
return (new cljs.core.LazySeq(null,((function (i__8413,s__8412__$1,tap_x,x__$1,y__$1,vec__8415,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8414,s__8412__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8419__$1 = s__8419;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8419__$1);
if(temp__5457__auto____$1){
var s__8419__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8419__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8419__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8421 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8420 = (0);
while(true){
if((i__8420 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8420);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,(bus_width + (2)))))){
cljs.core.chunk_append.call(null,b__8421,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8422 = cljs.core.mod.call(null,i,(bus_width + (2)));
switch (G__8422) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8422)].join('')));

}
})()));

var G__8494 = (i__8420 + (1));
i__8420 = G__8494;
continue;
} else {
var G__8495 = (i__8420 + (1));
i__8420 = G__8495;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8421),busmaker$main_bus$iter__8411_$_iter__8418.call(null,cljs.core.chunk_rest.call(null,s__8419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8421),null);
}
} else {
var i = cljs.core.first.call(null,s__8419__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,(bus_width + (2)))))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8423 = cljs.core.mod.call(null,i,(bus_width + (2)));
switch (G__8423) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8423)].join('')));

}
})()),busmaker$main_bus$iter__8411_$_iter__8418.call(null,cljs.core.rest.call(null,s__8419__$2)));
} else {
var G__8497 = cljs.core.rest.call(null,s__8419__$2);
s__8419__$1 = G__8497;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8413,s__8412__$1,tap_x,x__$1,y__$1,vec__8415,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8414,s__8412__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(i__8413,s__8412__$1,tap_x,x__$1,y__$1,vec__8415,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8414,s__8412__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})());

var G__8498 = (i__8413 + (1));
i__8413 = G__8498;
continue;
} else {
var G__8499 = (i__8413 + (1));
i__8413 = G__8499;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8414),busmaker$main_bus$iter__8411.call(null,cljs.core.chunk_rest.call(null,s__8412__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8414),null);
}
} else {
var vec__8424 = cljs.core.first.call(null,s__8412__$2);
var output_recipe = cljs.core.nth.call(null,vec__8424,(0),null);
var output_index = cljs.core.nth.call(null,vec__8424,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8412__$1,tap_x,x__$1,y__$1,vec__8424,output_recipe,output_index,s__8412__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8411_$_iter__8427(s__8428){
return (new cljs.core.LazySeq(null,((function (s__8412__$1,tap_x,x__$1,y__$1,vec__8424,output_recipe,output_index,s__8412__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8428__$1 = s__8428;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8428__$1);
if(temp__5457__auto____$1){
var s__8428__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8428__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8428__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8430 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8429 = (0);
while(true){
if((i__8429 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8429);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,(bus_width + (2)))))){
cljs.core.chunk_append.call(null,b__8430,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8431 = cljs.core.mod.call(null,i,(bus_width + (2)));
switch (G__8431) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8431)].join('')));

}
})()));

var G__8501 = (i__8429 + (1));
i__8429 = G__8501;
continue;
} else {
var G__8502 = (i__8429 + (1));
i__8429 = G__8502;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8430),busmaker$main_bus$iter__8411_$_iter__8427.call(null,cljs.core.chunk_rest.call(null,s__8428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8430),null);
}
} else {
var i = cljs.core.first.call(null,s__8428__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,(bus_width + (2)))))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),((((2) + (-3)) + y__$1) + ((2) * output_index)),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8432 = cljs.core.mod.call(null,i,(bus_width + (2)));
switch (G__8432) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8432)].join('')));

}
})()),busmaker$main_bus$iter__8411_$_iter__8427.call(null,cljs.core.rest.call(null,s__8428__$2)));
} else {
var G__8504 = cljs.core.rest.call(null,s__8428__$2);
s__8428__$1 = G__8504;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8412__$1,tap_x,x__$1,y__$1,vec__8424,output_recipe,output_index,s__8412__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(s__8412__$1,tap_x,x__$1,y__$1,vec__8424,output_recipe,output_index,s__8412__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),((((-3) + y__$1) + ((2) * output_index)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(2):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(2):(0)
))))));
})(),busmaker$main_bus$iter__8411.call(null,cljs.core.rest.call(null,s__8412__$2)));
} else {
var G__8505 = cljs.core.rest.call(null,s__8412__$2);
s__8412__$1 = G__8505;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,busmaker.templates.input_tap_indexes.call(null,ingredient));
})())),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8433(s__8434){
return (new cljs.core.LazySeq(null,((function (ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
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
var vec__8437 = cljs.core._nth.call(null,c__4322__auto__,i__8435);
var output_recipe = cljs.core.nth.call(null,vec__8437,(0),null);
var output_index = cljs.core.nth.call(null,vec__8437,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = busmaker.recipes.fluid_QMARK_.call(null,output_recipe);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.get.call(null,buses,output_recipe);
} else {
return and__3938__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8436,(function (){var tap_x = ((1) + (((2) + bus_width) * cljs.core.get.call(null,buses,output_recipe)));
var x__$1 = (x + (5));
var y__$1 = (y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-2):(-1)
));
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (i__8435,s__8434__$1,tap_x,x__$1,y__$1,vec__8437,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8436,s__8434__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8433_$_iter__8440(s__8441){
return (new cljs.core.LazySeq(null,((function (i__8435,s__8434__$1,tap_x,x__$1,y__$1,vec__8437,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8436,s__8434__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8441__$1 = s__8441;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8441__$1);
if(temp__5457__auto____$1){
var s__8441__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8441__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8441__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8443 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8442 = (0);
while(true){
if((i__8442 < size__4323__auto____$1)){
var i = cljs.core._nth.call(null,c__4322__auto____$1,i__8442);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
cljs.core.chunk_append.call(null,b__8443,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8444 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8444) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8444)].join('')));

}
})()));

var G__8507 = (i__8442 + (1));
i__8442 = G__8507;
continue;
} else {
var G__8508 = (i__8442 + (1));
i__8442 = G__8508;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8443),busmaker$main_bus$iter__8433_$_iter__8440.call(null,cljs.core.chunk_rest.call(null,s__8441__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8443),null);
}
} else {
var i = cljs.core.first.call(null,s__8441__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8445 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8445) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8445)].join('')));

}
})()),busmaker$main_bus$iter__8433_$_iter__8440.call(null,cljs.core.rest.call(null,s__8441__$2)));
} else {
var G__8510 = cljs.core.rest.call(null,s__8441__$2);
s__8441__$1 = G__8510;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8435,s__8434__$1,tap_x,x__$1,y__$1,vec__8437,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8436,s__8434__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(i__8435,s__8434__$1,tap_x,x__$1,y__$1,vec__8437,output_recipe,output_index,c__4322__auto__,size__4323__auto__,b__8436,s__8434__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})());

var G__8511 = (i__8435 + (1));
i__8435 = G__8511;
continue;
} else {
var G__8512 = (i__8435 + (1));
i__8435 = G__8512;
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
var vec__8446 = cljs.core.first.call(null,s__8434__$2);
var output_recipe = cljs.core.nth.call(null,vec__8446,(0),null);
var output_index = cljs.core.nth.call(null,vec__8446,(1),null);
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
return cljs.core.conj.call(null,(function (){var iter__4324__auto__ = ((function (s__8434__$1,tap_x,x__$1,y__$1,vec__8446,output_recipe,output_index,s__8434__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8433_$_iter__8449(s__8450){
return (new cljs.core.LazySeq(null,((function (s__8434__$1,tap_x,x__$1,y__$1,vec__8446,output_recipe,output_index,s__8434__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8450__$1 = s__8450;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8450__$1);
if(temp__5457__auto____$1){
var s__8450__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8450__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8450__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8452 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8451 = (0);
while(true){
if((i__8451 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8451);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
cljs.core.chunk_append.call(null,b__8452,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8453 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8453) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8453)].join('')));

}
})()));

var G__8514 = (i__8451 + (1));
i__8451 = G__8514;
continue;
} else {
var G__8515 = (i__8451 + (1));
i__8451 = G__8515;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8452),busmaker$main_bus$iter__8433_$_iter__8449.call(null,cljs.core.chunk_rest.call(null,s__8450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8452),null);
}
} else {
var i = cljs.core.first.call(null,s__8450__$2);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,cljs.core.mod.call(null,i,((2) + bus_width))))){
return cljs.core.cons.call(null,busmaker.main_bus.pipe_to_ground.call(null,new cljs.core.Keyword(null,"x","x",2099068185),((-1) + (x__$1 + i)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index))),new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__8454 = cljs.core.mod.call(null,i,((2) + bus_width));
switch (G__8454) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8454)].join('')));

}
})()),busmaker$main_bus$iter__8433_$_iter__8449.call(null,cljs.core.rest.call(null,s__8450__$2)));
} else {
var G__8517 = cljs.core.rest.call(null,s__8450__$2);
s__8450__$1 = G__8517;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8434__$1,tap_x,x__$1,y__$1,vec__8446,output_recipe,output_index,s__8434__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(s__8434__$1,tap_x,x__$1,y__$1,vec__8446,output_recipe,output_index,s__8434__$2,temp__5457__auto__,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,tap_x));
})(),busmaker.main_bus.pipe.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((-1) + x__$1) + tap_x),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (- ((2) * output_index)))));
})(),busmaker$main_bus$iter__8433.call(null,cljs.core.rest.call(null,s__8434__$2)));
} else {
var G__8518 = cljs.core.rest.call(null,s__8434__$2);
s__8434__$1 = G__8518;
continue;
}
}
} else {
return null;
}
break;
}
});})(ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,busmaker.templates.output_tap_indexes.call(null,ingredient));
})()));
var G__8370__$1 = ((cljs.core.not.call(null,busmaker.recipes.fluid_QMARK_.call(null,ingredient)))?cljs.core.concat.call(null,G__8370,cljs.core.apply.call(null,cljs.core.concat,(function (){var x__$1 = (x + (6));
var y__$1 = (y + (6));
var output_index = buses.call(null,ingredient);
var iter__4324__auto__ = ((function (x__$1,y__$1,output_index,G__8370,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8455(s__8456){
return (new cljs.core.LazySeq(null,((function (x__$1,y__$1,output_index,G__8370,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8456__$1 = s__8456;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8456__$1);
if(temp__5457__auto__){
var s__8456__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8456__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8456__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8458 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8457 = (0);
while(true){
if((i__8457 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__8457);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
cljs.core.chunk_append.call(null,b__8458,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)));

var G__8519 = (i__8457 + (1));
i__8457 = G__8519;
continue;
} else {
var G__8520 = (i__8457 + (1));
i__8457 = G__8520;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8458),busmaker$main_bus$iter__8455.call(null,cljs.core.chunk_rest.call(null,s__8456__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8458),null);
}
} else {
var i = cljs.core.first.call(null,s__8456__$2);
var y_extension = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(1):(0)
);
if(cljs.core.truth_(output_index)){
return cljs.core.cons.call(null,(((i > (0)))?busmaker.main_bus.output_tap_extension.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width):busmaker.main_bus.output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + ((-6) * i)),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-2)) + (-1)),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),y_extension,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width)),busmaker$main_bus$iter__8455.call(null,cljs.core.rest.call(null,s__8456__$2)));
} else {
var G__8521 = cljs.core.rest.call(null,s__8456__$2);
s__8456__$1 = G__8521;
continue;
}
}
} else {
return null;
}
break;
}
});})(x__$1,y__$1,output_index,G__8370,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(x__$1,y__$1,output_index,G__8370,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8370);
var G__8370__$2 = (cljs.core.truth_(cljs.core.some.call(null,busmaker.recipes.fluid_QMARK_,busmaker.main_bus.ingredients.call(null,ingredient,facility)))?cljs.core.concat.call(null,G__8370__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = ((function (G__8370,G__8370__$1,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8459(s__8460){
return (new cljs.core.LazySeq(null,((function (G__8370,G__8370__$1,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8460__$1 = s__8460;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8460__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8460__$1,i,xs__6012__auto__,temp__5457__auto__,G__8370,G__8370__$1,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8459_$_iter__8461(s__8462){
return (new cljs.core.LazySeq(null,((function (s__8460__$1,i,xs__6012__auto__,temp__5457__auto__,G__8370,G__8370__$1,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8462__$1 = s__8462;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8462__$1);
if(temp__5457__auto____$1){
var s__8462__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8462__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8462__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8464 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8463 = (0);
while(true){
if((i__8463 < size__4323__auto__)){
var vec__8465 = cljs.core._nth.call(null,c__4322__auto__,i__8463);
var input_recipe = cljs.core.nth.call(null,vec__8465,(0),null);
var input_index = cljs.core.nth.call(null,vec__8465,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
var x__$1 = ((x + (3)) + dx);
var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
));
var args = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-index","input-index",1765754144),input_index,new cljs.core.Keyword(null,"input-extension","input-extension",310326085),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(0)
),new cljs.core.Keyword(null,"x-extension","x-extension",-1100052416),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["assembling-machine-2",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
)),new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),((1) + ((2) * input_index))], null);
cljs.core.chunk_append.call(null,b__8464,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,busmaker.main_bus.pipe_input_down_tap,new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + (-2)),new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (5)) - ((2) * input_index)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args),cljs.core.apply.call(null,busmaker.main_bus.pipe_input_tap_lhs,new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-1)) + ((2) * input_index)),new cljs.core.Keyword(null,"x","x",2099068185),((((x__$1 - (5)) - ((2) * input_index)) - (1)) - (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)),args))))));

var G__8522 = (i__8463 + (1));
i__8463 = G__8522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8464),busmaker$main_bus$iter__8459_$_iter__8461.call(null,cljs.core.chunk_rest.call(null,s__8462__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8464),null);
}
} else {
var vec__8468 = cljs.core.first.call(null,s__8462__$2);
var input_recipe = cljs.core.nth.call(null,vec__8468,(0),null);
var input_index = cljs.core.nth.call(null,vec__8468,(1),null);
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
)),args))))),busmaker$main_bus$iter__8459_$_iter__8461.call(null,cljs.core.rest.call(null,s__8462__$2)));
}
} else {
return null;
}
break;
}
});})(s__8460__$1,i,xs__6012__auto__,temp__5457__auto__,G__8370,G__8370__$1,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(s__8460__$1,i,xs__6012__auto__,temp__5457__auto__,G__8370,G__8370__$1,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.templates.input_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8459.call(null,cljs.core.rest.call(null,s__8460__$1)));
} else {
var G__8523 = cljs.core.rest.call(null,s__8460__$1);
s__8460__$1 = G__8523;
continue;
}
} else {
return null;
}
break;
}
});})(G__8370,G__8370__$1,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(G__8370,G__8370__$1,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})())):G__8370__$1);
if(cljs.core.truth_(busmaker.recipes.fluid_QMARK_.call(null,ingredient))){
return cljs.core.concat.call(null,G__8370__$2,cljs.core.apply.call(null,cljs.core.concat,(function (){var y__$1 = ((y + (6)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(0)
));
var x__$1 = ((x + (4)) + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-1):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(-1):(0)
)));
var iter__4324__auto__ = ((function (y__$1,x__$1,G__8370,G__8370__$1,G__8370__$2,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8471(s__8472){
return (new cljs.core.LazySeq(null,((function (y__$1,x__$1,G__8370,G__8370__$1,G__8370__$2,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8472__$1 = s__8472;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8472__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8472__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8370,G__8370__$1,G__8370__$2,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function busmaker$main_bus$iter__8471_$_iter__8473(s__8474){
return (new cljs.core.LazySeq(null,((function (s__8472__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8370,G__8370__$1,G__8370__$2,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width){
return (function (){
var s__8474__$1 = s__8474;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8474__$1);
if(temp__5457__auto____$1){
var s__8474__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8474__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8474__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8476 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8475 = (0);
while(true){
if((i__8475 < size__4323__auto__)){
var vec__8477 = cljs.core._nth.call(null,c__4322__auto__,i__8475);
var output_recipe = cljs.core.nth.call(null,vec__8477,(0),null);
var output_index = cljs.core.nth.call(null,vec__8477,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
cljs.core.chunk_append.call(null,b__8476,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)));

var G__8524 = (i__8475 + (1));
i__8475 = G__8524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8476),busmaker$main_bus$iter__8471_$_iter__8473.call(null,cljs.core.chunk_rest.call(null,s__8474__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8476),null);
}
} else {
var vec__8480 = cljs.core.first.call(null,s__8474__$2);
var output_recipe = cljs.core.nth.call(null,vec__8480,(0),null);
var output_index = cljs.core.nth.call(null,vec__8480,(1),null);
var dx = (i * (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["oil-refinery",null], null), null).call(null,facility))?(-8):(-6)
));
return cljs.core.cons.call(null,busmaker.main_bus.pipe_output_tap.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(((x__$1 - (4)) - ((2) * output_index)) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),((y__$1 + (-7)) + (- ((2) * output_index))),new cljs.core.Keyword(null,"output-index","output-index",-655346446),output_index,new cljs.core.Keyword(null,"y-extension","y-extension",1051788666),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["chemical-plant",null], null), null).call(null,facility))?(1):(0)
)),busmaker$main_bus$iter__8471_$_iter__8473.call(null,cljs.core.rest.call(null,s__8474__$2)));
}
} else {
return null;
}
break;
}
});})(s__8472__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8370,G__8370__$1,G__8370__$2,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(s__8472__$1,i,xs__6012__auto__,temp__5457__auto__,y__$1,x__$1,G__8370,G__8370__$1,G__8370__$2,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,busmaker.templates.output_tap_indexes.call(null,ingredient)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$main_bus$iter__8471.call(null,cljs.core.rest.call(null,s__8472__$1)));
} else {
var G__8525 = cljs.core.rest.call(null,s__8472__$1);
s__8472__$1 = G__8525;
continue;
}
} else {
return null;
}
break;
}
});})(y__$1,x__$1,G__8370,G__8370__$1,G__8370__$2,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
,null,null));
});})(y__$1,x__$1,G__8370,G__8370__$1,G__8370__$2,ingredient,buses,map__8368,map__8368__$1,x,y,n_factories,facility,recipes,bus_outputs,input_indexes,bus_width))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,n_factories));
})()));
} else {
return G__8370__$2;
}
})(),cljs.core.iterate.call(null,cljs.core.inc,(0))));
});

busmaker.main_bus.main_bus_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
busmaker.main_bus.main_bus_line.cljs$lang$applyTo = (function (seq8366){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8366));
});

busmaker.main_bus.main_bus = (function busmaker$main_bus$main_bus(factories,bus_outputs,bus_width){
var bus_index = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),bus_outputs));
return cljs.core.apply.call(null,cljs.core.concat,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (bus_index){
return (function (p__8526,factory){
var map__8527 = p__8526;
var map__8527__$1 = ((((!((map__8527 == null)))?(((((map__8527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8527):map__8527);
var acc = map__8527__$1;
var x = cljs.core.get.call(null,map__8527__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8527__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__8529 = factory;
var map__8529__$1 = ((((!((map__8529 == null)))?(((((map__8529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8529):map__8529);
var facility = cljs.core.get.call(null,map__8529__$1,new cljs.core.Keyword(null,"facility","facility",-2118099900));
var n = cljs.core.get.call(null,map__8529__$1,new cljs.core.Keyword(null,"n","n",562130025));
var recipes = cljs.core.get.call(null,map__8529__$1,new cljs.core.Keyword(null,"recipes","recipes",-325236209));
var height = busmaker.main_bus.ingredient_height.call(null,cljs.core.first.call(null,recipes),facility,bus_width);
var input_indexes = cljs.core.map.call(null,bus_index,busmaker.main_bus.ingredients.call(null,cljs.core.first.call(null,recipes),facility));
return cljs.core.update.call(null,cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,busmaker.main_bus.main_bus_line.call(null,new cljs.core.Keyword(null,"bus-outputs","bus-outputs",-2007555584),bus_outputs,new cljs.core.Keyword(null,"bus-width","bus-width",-2060067167),bus_width,new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipes,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["steel-furnace",null,"stone-furnace",null], null), null).call(null,facility))?(4):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["assembling-machine-2",null,"chemical-plant",null,"assembling-machine-1",null], null), null).call(null,facility))?(1):(0)
))),new cljs.core.Keyword(null,"n-factories","n-factories",-1538607494),n,new cljs.core.Keyword(null,"facility","facility",-2118099900),facility,new cljs.core.Keyword(null,"input-indexes","input-indexes",1572446793),input_indexes)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,height);
});})(bus_index))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),factories)));
});
busmaker.main_bus.normalize = (function busmaker$main_bus$normalize(entities){
var splitters = cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["splitter",null], null), null),(function (p1__8531_SHARP_){
return cljs.core.get.call(null,p1__8531_SHARP_,"name");
})),entities);
var splitter_pos = cljs.core.set.call(null,cljs.core.mapcat.call(null,busmaker.main_bus.entity_coords,splitters));
var non_splitters = cljs.core.remove.call(null,cljs.core.comp.call(null,splitter_pos,busmaker.main_bus.entity_coord),cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["splitter",null], null), null),((function (splitters,splitter_pos){
return (function (p1__8532_SHARP_){
return cljs.core.get.call(null,p1__8532_SHARP_,"name");
});})(splitters,splitter_pos))
),entities));
var entities__$1 = cljs.core.concat.call(null,splitters,non_splitters);
return cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,((function (splitters,splitter_pos,non_splitters,entities__$1){
return (function (p1__8533_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(Math.round(cljs.core.get_in.call(null,p1__8533_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))) | (0)),(Math.round(cljs.core.get_in.call(null,p1__8533_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null))) | (0))],null));
});})(splitters,splitter_pos,non_splitters,entities__$1))
,cljs.core.identity),entities__$1)));
});
