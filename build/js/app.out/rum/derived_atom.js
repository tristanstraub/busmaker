// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5019 = arguments.length;
switch (G__5019) {
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
var map__5020 = opts;
var map__5020__$1 = ((((!((map__5020 == null)))?(((((map__5020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5020):map__5020);
var ref = cljs.core.get.call(null,map__5020__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__5020__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5022 = cljs.core.count.call(null,refs);
switch (G__5022) {
case (1):
var vec__5023 = refs;
var a = cljs.core.nth.call(null,vec__5023,(0),null);
return ((function (vec__5023,a,G__5022,map__5020,map__5020__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__5023,a,G__5022,map__5020,map__5020__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__5026 = refs;
var a = cljs.core.nth.call(null,vec__5026,(0),null);
var b = cljs.core.nth.call(null,vec__5026,(1),null);
return ((function (vec__5026,a,b,G__5022,map__5020,map__5020__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__5026,a,b,G__5022,map__5020,map__5020__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__5029 = refs;
var a = cljs.core.nth.call(null,vec__5029,(0),null);
var b = cljs.core.nth.call(null,vec__5029,(1),null);
var c = cljs.core.nth.call(null,vec__5029,(2),null);
return ((function (vec__5029,a,b,c,G__5022,map__5020,map__5020__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__5029,a,b,c,G__5022,map__5020,map__5020__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__5022,map__5020,map__5020__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__5022,map__5020,map__5020__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5032 = ref;
cljs.core.reset_BANG_.call(null,G__5032,recalc.call(null));

return G__5032;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__5020,map__5020__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__5020,map__5020__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__5020,map__5020__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__5020,map__5020__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__5033_5039 = cljs.core.seq.call(null,refs);
var chunk__5034_5040 = null;
var count__5035_5041 = (0);
var i__5036_5042 = (0);
while(true){
if((i__5036_5042 < count__5035_5041)){
var ref_5043__$1 = cljs.core._nth.call(null,chunk__5034_5040,i__5036_5042);
cljs.core.add_watch.call(null,ref_5043__$1,key,watch);


var G__5044 = seq__5033_5039;
var G__5045 = chunk__5034_5040;
var G__5046 = count__5035_5041;
var G__5047 = (i__5036_5042 + (1));
seq__5033_5039 = G__5044;
chunk__5034_5040 = G__5045;
count__5035_5041 = G__5046;
i__5036_5042 = G__5047;
continue;
} else {
var temp__5457__auto___5048 = cljs.core.seq.call(null,seq__5033_5039);
if(temp__5457__auto___5048){
var seq__5033_5049__$1 = temp__5457__auto___5048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5033_5049__$1)){
var c__4351__auto___5050 = cljs.core.chunk_first.call(null,seq__5033_5049__$1);
var G__5051 = cljs.core.chunk_rest.call(null,seq__5033_5049__$1);
var G__5052 = c__4351__auto___5050;
var G__5053 = cljs.core.count.call(null,c__4351__auto___5050);
var G__5054 = (0);
seq__5033_5039 = G__5051;
chunk__5034_5040 = G__5052;
count__5035_5041 = G__5053;
i__5036_5042 = G__5054;
continue;
} else {
var ref_5055__$1 = cljs.core.first.call(null,seq__5033_5049__$1);
cljs.core.add_watch.call(null,ref_5055__$1,key,watch);


var G__5056 = cljs.core.next.call(null,seq__5033_5049__$1);
var G__5057 = null;
var G__5058 = (0);
var G__5059 = (0);
seq__5033_5039 = G__5056;
chunk__5034_5040 = G__5057;
count__5035_5041 = G__5058;
i__5036_5042 = G__5059;
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

