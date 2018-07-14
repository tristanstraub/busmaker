// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5017 = arguments.length;
switch (G__5017) {
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
var map__5018 = opts;
var map__5018__$1 = ((((!((map__5018 == null)))?(((((map__5018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5018):map__5018);
var ref = cljs.core.get.call(null,map__5018__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__5018__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5020 = cljs.core.count.call(null,refs);
switch (G__5020) {
case (1):
var vec__5021 = refs;
var a = cljs.core.nth.call(null,vec__5021,(0),null);
return ((function (vec__5021,a,G__5020,map__5018,map__5018__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__5021,a,G__5020,map__5018,map__5018__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__5024 = refs;
var a = cljs.core.nth.call(null,vec__5024,(0),null);
var b = cljs.core.nth.call(null,vec__5024,(1),null);
return ((function (vec__5024,a,b,G__5020,map__5018,map__5018__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__5024,a,b,G__5020,map__5018,map__5018__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__5027 = refs;
var a = cljs.core.nth.call(null,vec__5027,(0),null);
var b = cljs.core.nth.call(null,vec__5027,(1),null);
var c = cljs.core.nth.call(null,vec__5027,(2),null);
return ((function (vec__5027,a,b,c,G__5020,map__5018,map__5018__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__5027,a,b,c,G__5020,map__5018,map__5018__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__5020,map__5018,map__5018__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__5020,map__5018,map__5018__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5030 = ref;
cljs.core.reset_BANG_.call(null,G__5030,recalc.call(null));

return G__5030;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__5018,map__5018__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__5018,map__5018__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__5018,map__5018__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__5018,map__5018__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__5031_5037 = cljs.core.seq.call(null,refs);
var chunk__5032_5038 = null;
var count__5033_5039 = (0);
var i__5034_5040 = (0);
while(true){
if((i__5034_5040 < count__5033_5039)){
var ref_5041__$1 = cljs.core._nth.call(null,chunk__5032_5038,i__5034_5040);
cljs.core.add_watch.call(null,ref_5041__$1,key,watch);


var G__5042 = seq__5031_5037;
var G__5043 = chunk__5032_5038;
var G__5044 = count__5033_5039;
var G__5045 = (i__5034_5040 + (1));
seq__5031_5037 = G__5042;
chunk__5032_5038 = G__5043;
count__5033_5039 = G__5044;
i__5034_5040 = G__5045;
continue;
} else {
var temp__5457__auto___5046 = cljs.core.seq.call(null,seq__5031_5037);
if(temp__5457__auto___5046){
var seq__5031_5047__$1 = temp__5457__auto___5046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5031_5047__$1)){
var c__4351__auto___5048 = cljs.core.chunk_first.call(null,seq__5031_5047__$1);
var G__5049 = cljs.core.chunk_rest.call(null,seq__5031_5047__$1);
var G__5050 = c__4351__auto___5048;
var G__5051 = cljs.core.count.call(null,c__4351__auto___5048);
var G__5052 = (0);
seq__5031_5037 = G__5049;
chunk__5032_5038 = G__5050;
count__5033_5039 = G__5051;
i__5034_5040 = G__5052;
continue;
} else {
var ref_5053__$1 = cljs.core.first.call(null,seq__5031_5047__$1);
cljs.core.add_watch.call(null,ref_5053__$1,key,watch);


var G__5054 = cljs.core.next.call(null,seq__5031_5047__$1);
var G__5055 = null;
var G__5056 = (0);
var G__5057 = (0);
seq__5031_5037 = G__5054;
chunk__5032_5038 = G__5055;
count__5033_5039 = G__5056;
i__5034_5040 = G__5057;
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

