// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5107 = arguments.length;
switch (G__5107) {
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
var map__5108 = opts;
var map__5108__$1 = ((((!((map__5108 == null)))?(((((map__5108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5108):map__5108);
var ref = cljs.core.get.call(null,map__5108__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__5108__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5110 = cljs.core.count.call(null,refs);
switch (G__5110) {
case (1):
var vec__5111 = refs;
var a = cljs.core.nth.call(null,vec__5111,(0),null);
return ((function (vec__5111,a,G__5110,map__5108,map__5108__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__5111,a,G__5110,map__5108,map__5108__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__5114 = refs;
var a = cljs.core.nth.call(null,vec__5114,(0),null);
var b = cljs.core.nth.call(null,vec__5114,(1),null);
return ((function (vec__5114,a,b,G__5110,map__5108,map__5108__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__5114,a,b,G__5110,map__5108,map__5108__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__5117 = refs;
var a = cljs.core.nth.call(null,vec__5117,(0),null);
var b = cljs.core.nth.call(null,vec__5117,(1),null);
var c = cljs.core.nth.call(null,vec__5117,(2),null);
return ((function (vec__5117,a,b,c,G__5110,map__5108,map__5108__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__5117,a,b,c,G__5110,map__5108,map__5108__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__5110,map__5108,map__5108__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__5110,map__5108,map__5108__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5120 = ref;
cljs.core.reset_BANG_.call(null,G__5120,recalc.call(null));

return G__5120;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__5108,map__5108__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__5108,map__5108__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__5108,map__5108__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__5108,map__5108__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__5121_5127 = cljs.core.seq.call(null,refs);
var chunk__5122_5128 = null;
var count__5123_5129 = (0);
var i__5124_5130 = (0);
while(true){
if((i__5124_5130 < count__5123_5129)){
var ref_5131__$1 = cljs.core._nth.call(null,chunk__5122_5128,i__5124_5130);
cljs.core.add_watch.call(null,ref_5131__$1,key,watch);


var G__5132 = seq__5121_5127;
var G__5133 = chunk__5122_5128;
var G__5134 = count__5123_5129;
var G__5135 = (i__5124_5130 + (1));
seq__5121_5127 = G__5132;
chunk__5122_5128 = G__5133;
count__5123_5129 = G__5134;
i__5124_5130 = G__5135;
continue;
} else {
var temp__5457__auto___5136 = cljs.core.seq.call(null,seq__5121_5127);
if(temp__5457__auto___5136){
var seq__5121_5137__$1 = temp__5457__auto___5136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5121_5137__$1)){
var c__4351__auto___5138 = cljs.core.chunk_first.call(null,seq__5121_5137__$1);
var G__5139 = cljs.core.chunk_rest.call(null,seq__5121_5137__$1);
var G__5140 = c__4351__auto___5138;
var G__5141 = cljs.core.count.call(null,c__4351__auto___5138);
var G__5142 = (0);
seq__5121_5127 = G__5139;
chunk__5122_5128 = G__5140;
count__5123_5129 = G__5141;
i__5124_5130 = G__5142;
continue;
} else {
var ref_5143__$1 = cljs.core.first.call(null,seq__5121_5137__$1);
cljs.core.add_watch.call(null,ref_5143__$1,key,watch);


var G__5144 = cljs.core.next.call(null,seq__5121_5137__$1);
var G__5145 = null;
var G__5146 = (0);
var G__5147 = (0);
seq__5121_5127 = G__5144;
chunk__5122_5128 = G__5145;
count__5123_5129 = G__5146;
i__5124_5130 = G__5147;
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

