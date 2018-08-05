// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5120 = arguments.length;
switch (G__5120) {
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
var map__5121 = opts;
var map__5121__$1 = ((((!((map__5121 == null)))?(((((map__5121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5121):map__5121);
var ref = cljs.core.get.call(null,map__5121__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__5121__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5123 = cljs.core.count.call(null,refs);
switch (G__5123) {
case (1):
var vec__5124 = refs;
var a = cljs.core.nth.call(null,vec__5124,(0),null);
return ((function (vec__5124,a,G__5123,map__5121,map__5121__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__5124,a,G__5123,map__5121,map__5121__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__5127 = refs;
var a = cljs.core.nth.call(null,vec__5127,(0),null);
var b = cljs.core.nth.call(null,vec__5127,(1),null);
return ((function (vec__5127,a,b,G__5123,map__5121,map__5121__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__5127,a,b,G__5123,map__5121,map__5121__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__5130 = refs;
var a = cljs.core.nth.call(null,vec__5130,(0),null);
var b = cljs.core.nth.call(null,vec__5130,(1),null);
var c = cljs.core.nth.call(null,vec__5130,(2),null);
return ((function (vec__5130,a,b,c,G__5123,map__5121,map__5121__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__5130,a,b,c,G__5123,map__5121,map__5121__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__5123,map__5121,map__5121__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__5123,map__5121,map__5121__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5133 = ref;
cljs.core.reset_BANG_.call(null,G__5133,recalc.call(null));

return G__5133;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__5121,map__5121__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__5121,map__5121__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__5121,map__5121__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__5121,map__5121__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__5134_5140 = cljs.core.seq.call(null,refs);
var chunk__5135_5141 = null;
var count__5136_5142 = (0);
var i__5137_5143 = (0);
while(true){
if((i__5137_5143 < count__5136_5142)){
var ref_5144__$1 = cljs.core._nth.call(null,chunk__5135_5141,i__5137_5143);
cljs.core.add_watch.call(null,ref_5144__$1,key,watch);


var G__5145 = seq__5134_5140;
var G__5146 = chunk__5135_5141;
var G__5147 = count__5136_5142;
var G__5148 = (i__5137_5143 + (1));
seq__5134_5140 = G__5145;
chunk__5135_5141 = G__5146;
count__5136_5142 = G__5147;
i__5137_5143 = G__5148;
continue;
} else {
var temp__5457__auto___5149 = cljs.core.seq.call(null,seq__5134_5140);
if(temp__5457__auto___5149){
var seq__5134_5150__$1 = temp__5457__auto___5149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5134_5150__$1)){
var c__4351__auto___5151 = cljs.core.chunk_first.call(null,seq__5134_5150__$1);
var G__5152 = cljs.core.chunk_rest.call(null,seq__5134_5150__$1);
var G__5153 = c__4351__auto___5151;
var G__5154 = cljs.core.count.call(null,c__4351__auto___5151);
var G__5155 = (0);
seq__5134_5140 = G__5152;
chunk__5135_5141 = G__5153;
count__5136_5142 = G__5154;
i__5137_5143 = G__5155;
continue;
} else {
var ref_5156__$1 = cljs.core.first.call(null,seq__5134_5150__$1);
cljs.core.add_watch.call(null,ref_5156__$1,key,watch);


var G__5157 = cljs.core.next.call(null,seq__5134_5150__$1);
var G__5158 = null;
var G__5159 = (0);
var G__5160 = (0);
seq__5134_5140 = G__5157;
chunk__5135_5141 = G__5158;
count__5136_5142 = G__5159;
i__5137_5143 = G__5160;
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

