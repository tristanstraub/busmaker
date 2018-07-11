// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5429 = arguments.length;
switch (G__5429) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__5430 = opts;
var map__5430__$1 = ((((!((map__5430 == null)))?(((((map__5430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5430):map__5430);
var ref = cljs.core.get.call(null,map__5430__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__5430__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5432 = cljs.core.count.call(null,refs);
switch (G__5432) {
case (1):
var vec__5433 = refs;
var a = cljs.core.nth.call(null,vec__5433,(0),null);
return ((function (vec__5433,a,G__5432,map__5430,map__5430__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__5433,a,G__5432,map__5430,map__5430__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__5436 = refs;
var a = cljs.core.nth.call(null,vec__5436,(0),null);
var b = cljs.core.nth.call(null,vec__5436,(1),null);
return ((function (vec__5436,a,b,G__5432,map__5430,map__5430__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__5436,a,b,G__5432,map__5430,map__5430__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__5439 = refs;
var a = cljs.core.nth.call(null,vec__5439,(0),null);
var b = cljs.core.nth.call(null,vec__5439,(1),null);
var c = cljs.core.nth.call(null,vec__5439,(2),null);
return ((function (vec__5439,a,b,c,G__5432,map__5430,map__5430__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__5439,a,b,c,G__5432,map__5430,map__5430__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__5432,map__5430,map__5430__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__5432,map__5430,map__5430__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5442 = ref;
cljs.core.reset_BANG_.call(null,G__5442,recalc.call(null));

return G__5442;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__5430,map__5430__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__5430,map__5430__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__5430,map__5430__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__5430,map__5430__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__5443_5449 = cljs.core.seq.call(null,refs);
var chunk__5444_5450 = null;
var count__5445_5451 = (0);
var i__5446_5452 = (0);
while(true){
if((i__5446_5452 < count__5445_5451)){
var ref_5453__$1 = cljs.core._nth.call(null,chunk__5444_5450,i__5446_5452);
cljs.core.add_watch.call(null,ref_5453__$1,key,watch);


var G__5454 = seq__5443_5449;
var G__5455 = chunk__5444_5450;
var G__5456 = count__5445_5451;
var G__5457 = (i__5446_5452 + (1));
seq__5443_5449 = G__5454;
chunk__5444_5450 = G__5455;
count__5445_5451 = G__5456;
i__5446_5452 = G__5457;
continue;
} else {
var temp__5457__auto___5458 = cljs.core.seq.call(null,seq__5443_5449);
if(temp__5457__auto___5458){
var seq__5443_5459__$1 = temp__5457__auto___5458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5443_5459__$1)){
var c__4351__auto___5460 = cljs.core.chunk_first.call(null,seq__5443_5459__$1);
var G__5461 = cljs.core.chunk_rest.call(null,seq__5443_5459__$1);
var G__5462 = c__4351__auto___5460;
var G__5463 = cljs.core.count.call(null,c__4351__auto___5460);
var G__5464 = (0);
seq__5443_5449 = G__5461;
chunk__5444_5450 = G__5462;
count__5445_5451 = G__5463;
i__5446_5452 = G__5464;
continue;
} else {
var ref_5465__$1 = cljs.core.first.call(null,seq__5443_5459__$1);
cljs.core.add_watch.call(null,ref_5465__$1,key,watch);


var G__5466 = cljs.core.next.call(null,seq__5443_5459__$1);
var G__5467 = null;
var G__5468 = (0);
var G__5469 = (0);
seq__5443_5449 = G__5466;
chunk__5444_5450 = G__5467;
count__5445_5451 = G__5468;
i__5446_5452 = G__5469;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

