// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5443 = arguments.length;
switch (G__5443) {
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
var map__5444 = opts;
var map__5444__$1 = ((((!((map__5444 == null)))?(((((map__5444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5444):map__5444);
var ref = cljs.core.get.call(null,map__5444__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__5444__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5446 = cljs.core.count.call(null,refs);
switch (G__5446) {
case (1):
var vec__5447 = refs;
var a = cljs.core.nth.call(null,vec__5447,(0),null);
return ((function (vec__5447,a,G__5446,map__5444,map__5444__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__5447,a,G__5446,map__5444,map__5444__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__5450 = refs;
var a = cljs.core.nth.call(null,vec__5450,(0),null);
var b = cljs.core.nth.call(null,vec__5450,(1),null);
return ((function (vec__5450,a,b,G__5446,map__5444,map__5444__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__5450,a,b,G__5446,map__5444,map__5444__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__5453 = refs;
var a = cljs.core.nth.call(null,vec__5453,(0),null);
var b = cljs.core.nth.call(null,vec__5453,(1),null);
var c = cljs.core.nth.call(null,vec__5453,(2),null);
return ((function (vec__5453,a,b,c,G__5446,map__5444,map__5444__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__5453,a,b,c,G__5446,map__5444,map__5444__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__5446,map__5444,map__5444__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__5446,map__5444,map__5444__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5456 = ref;
cljs.core.reset_BANG_.call(null,G__5456,recalc.call(null));

return G__5456;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__5444,map__5444__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__5444,map__5444__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__5444,map__5444__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__5444,map__5444__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__5457_5463 = cljs.core.seq.call(null,refs);
var chunk__5458_5464 = null;
var count__5459_5465 = (0);
var i__5460_5466 = (0);
while(true){
if((i__5460_5466 < count__5459_5465)){
var ref_5467__$1 = cljs.core._nth.call(null,chunk__5458_5464,i__5460_5466);
cljs.core.add_watch.call(null,ref_5467__$1,key,watch);


var G__5468 = seq__5457_5463;
var G__5469 = chunk__5458_5464;
var G__5470 = count__5459_5465;
var G__5471 = (i__5460_5466 + (1));
seq__5457_5463 = G__5468;
chunk__5458_5464 = G__5469;
count__5459_5465 = G__5470;
i__5460_5466 = G__5471;
continue;
} else {
var temp__5457__auto___5472 = cljs.core.seq.call(null,seq__5457_5463);
if(temp__5457__auto___5472){
var seq__5457_5473__$1 = temp__5457__auto___5472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5457_5473__$1)){
var c__4351__auto___5474 = cljs.core.chunk_first.call(null,seq__5457_5473__$1);
var G__5475 = cljs.core.chunk_rest.call(null,seq__5457_5473__$1);
var G__5476 = c__4351__auto___5474;
var G__5477 = cljs.core.count.call(null,c__4351__auto___5474);
var G__5478 = (0);
seq__5457_5463 = G__5475;
chunk__5458_5464 = G__5476;
count__5459_5465 = G__5477;
i__5460_5466 = G__5478;
continue;
} else {
var ref_5479__$1 = cljs.core.first.call(null,seq__5457_5473__$1);
cljs.core.add_watch.call(null,ref_5479__$1,key,watch);


var G__5480 = cljs.core.next.call(null,seq__5457_5473__$1);
var G__5481 = null;
var G__5482 = (0);
var G__5483 = (0);
seq__5457_5463 = G__5480;
chunk__5458_5464 = G__5481;
count__5459_5465 = G__5482;
i__5460_5466 = G__5483;
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

