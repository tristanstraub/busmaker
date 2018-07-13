// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__4561 = arguments.length;
switch (G__4561) {
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
var map__4562 = opts;
var map__4562__$1 = ((((!((map__4562 == null)))?(((((map__4562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4562):map__4562);
var ref = cljs.core.get.call(null,map__4562__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__4562__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__4564 = cljs.core.count.call(null,refs);
switch (G__4564) {
case (1):
var vec__4565 = refs;
var a = cljs.core.nth.call(null,vec__4565,(0),null);
return ((function (vec__4565,a,G__4564,map__4562,map__4562__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__4565,a,G__4564,map__4562,map__4562__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__4568 = refs;
var a = cljs.core.nth.call(null,vec__4568,(0),null);
var b = cljs.core.nth.call(null,vec__4568,(1),null);
return ((function (vec__4568,a,b,G__4564,map__4562,map__4562__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__4568,a,b,G__4564,map__4562,map__4562__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__4571 = refs;
var a = cljs.core.nth.call(null,vec__4571,(0),null);
var b = cljs.core.nth.call(null,vec__4571,(1),null);
var c = cljs.core.nth.call(null,vec__4571,(2),null);
return ((function (vec__4571,a,b,c,G__4564,map__4562,map__4562__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__4571,a,b,c,G__4564,map__4562,map__4562__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__4564,map__4562,map__4562__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__4564,map__4562,map__4562__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__4574 = ref;
cljs.core.reset_BANG_.call(null,G__4574,recalc.call(null));

return G__4574;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__4562,map__4562__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__4562,map__4562__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__4562,map__4562__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__4562,map__4562__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__4575_4581 = cljs.core.seq.call(null,refs);
var chunk__4576_4582 = null;
var count__4577_4583 = (0);
var i__4578_4584 = (0);
while(true){
if((i__4578_4584 < count__4577_4583)){
var ref_4585__$1 = cljs.core._nth.call(null,chunk__4576_4582,i__4578_4584);
cljs.core.add_watch.call(null,ref_4585__$1,key,watch);


var G__4586 = seq__4575_4581;
var G__4587 = chunk__4576_4582;
var G__4588 = count__4577_4583;
var G__4589 = (i__4578_4584 + (1));
seq__4575_4581 = G__4586;
chunk__4576_4582 = G__4587;
count__4577_4583 = G__4588;
i__4578_4584 = G__4589;
continue;
} else {
var temp__5457__auto___4590 = cljs.core.seq.call(null,seq__4575_4581);
if(temp__5457__auto___4590){
var seq__4575_4591__$1 = temp__5457__auto___4590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4575_4591__$1)){
var c__4351__auto___4592 = cljs.core.chunk_first.call(null,seq__4575_4591__$1);
var G__4593 = cljs.core.chunk_rest.call(null,seq__4575_4591__$1);
var G__4594 = c__4351__auto___4592;
var G__4595 = cljs.core.count.call(null,c__4351__auto___4592);
var G__4596 = (0);
seq__4575_4581 = G__4593;
chunk__4576_4582 = G__4594;
count__4577_4583 = G__4595;
i__4578_4584 = G__4596;
continue;
} else {
var ref_4597__$1 = cljs.core.first.call(null,seq__4575_4591__$1);
cljs.core.add_watch.call(null,ref_4597__$1,key,watch);


var G__4598 = cljs.core.next.call(null,seq__4575_4591__$1);
var G__4599 = null;
var G__4600 = (0);
var G__4601 = (0);
seq__4575_4581 = G__4598;
chunk__4576_4582 = G__4599;
count__4577_4583 = G__4600;
i__4578_4584 = G__4601;
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

