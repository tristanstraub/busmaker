// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5014 = arguments.length;
switch (G__5014) {
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
var map__5015 = opts;
var map__5015__$1 = ((((!((map__5015 == null)))?(((((map__5015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5015):map__5015);
var ref = cljs.core.get.call(null,map__5015__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__5015__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5017 = cljs.core.count.call(null,refs);
switch (G__5017) {
case (1):
var vec__5018 = refs;
var a = cljs.core.nth.call(null,vec__5018,(0),null);
return ((function (vec__5018,a,G__5017,map__5015,map__5015__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__5018,a,G__5017,map__5015,map__5015__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__5021 = refs;
var a = cljs.core.nth.call(null,vec__5021,(0),null);
var b = cljs.core.nth.call(null,vec__5021,(1),null);
return ((function (vec__5021,a,b,G__5017,map__5015,map__5015__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__5021,a,b,G__5017,map__5015,map__5015__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__5024 = refs;
var a = cljs.core.nth.call(null,vec__5024,(0),null);
var b = cljs.core.nth.call(null,vec__5024,(1),null);
var c = cljs.core.nth.call(null,vec__5024,(2),null);
return ((function (vec__5024,a,b,c,G__5017,map__5015,map__5015__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__5024,a,b,c,G__5017,map__5015,map__5015__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__5017,map__5015,map__5015__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__5017,map__5015,map__5015__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5027 = ref;
cljs.core.reset_BANG_.call(null,G__5027,recalc.call(null));

return G__5027;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__5015,map__5015__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__5015,map__5015__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__5015,map__5015__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__5015,map__5015__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__5028_5034 = cljs.core.seq.call(null,refs);
var chunk__5029_5035 = null;
var count__5030_5036 = (0);
var i__5031_5037 = (0);
while(true){
if((i__5031_5037 < count__5030_5036)){
var ref_5038__$1 = cljs.core._nth.call(null,chunk__5029_5035,i__5031_5037);
cljs.core.add_watch.call(null,ref_5038__$1,key,watch);


var G__5039 = seq__5028_5034;
var G__5040 = chunk__5029_5035;
var G__5041 = count__5030_5036;
var G__5042 = (i__5031_5037 + (1));
seq__5028_5034 = G__5039;
chunk__5029_5035 = G__5040;
count__5030_5036 = G__5041;
i__5031_5037 = G__5042;
continue;
} else {
var temp__5457__auto___5043 = cljs.core.seq.call(null,seq__5028_5034);
if(temp__5457__auto___5043){
var seq__5028_5044__$1 = temp__5457__auto___5043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5028_5044__$1)){
var c__4351__auto___5045 = cljs.core.chunk_first.call(null,seq__5028_5044__$1);
var G__5046 = cljs.core.chunk_rest.call(null,seq__5028_5044__$1);
var G__5047 = c__4351__auto___5045;
var G__5048 = cljs.core.count.call(null,c__4351__auto___5045);
var G__5049 = (0);
seq__5028_5034 = G__5046;
chunk__5029_5035 = G__5047;
count__5030_5036 = G__5048;
i__5031_5037 = G__5049;
continue;
} else {
var ref_5050__$1 = cljs.core.first.call(null,seq__5028_5044__$1);
cljs.core.add_watch.call(null,ref_5050__$1,key,watch);


var G__5051 = cljs.core.next.call(null,seq__5028_5044__$1);
var G__5052 = null;
var G__5053 = (0);
var G__5054 = (0);
seq__5028_5034 = G__5051;
chunk__5029_5035 = G__5052;
count__5030_5036 = G__5053;
i__5031_5037 = G__5054;
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

