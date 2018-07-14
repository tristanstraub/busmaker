// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5119 = arguments.length;
switch (G__5119) {
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
var map__5120 = opts;
var map__5120__$1 = ((((!((map__5120 == null)))?(((((map__5120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5120):map__5120);
var ref = cljs.core.get.call(null,map__5120__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__5120__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5122 = cljs.core.count.call(null,refs);
switch (G__5122) {
case (1):
var vec__5123 = refs;
var a = cljs.core.nth.call(null,vec__5123,(0),null);
return ((function (vec__5123,a,G__5122,map__5120,map__5120__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__5123,a,G__5122,map__5120,map__5120__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__5126 = refs;
var a = cljs.core.nth.call(null,vec__5126,(0),null);
var b = cljs.core.nth.call(null,vec__5126,(1),null);
return ((function (vec__5126,a,b,G__5122,map__5120,map__5120__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__5126,a,b,G__5122,map__5120,map__5120__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__5129 = refs;
var a = cljs.core.nth.call(null,vec__5129,(0),null);
var b = cljs.core.nth.call(null,vec__5129,(1),null);
var c = cljs.core.nth.call(null,vec__5129,(2),null);
return ((function (vec__5129,a,b,c,G__5122,map__5120,map__5120__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__5129,a,b,c,G__5122,map__5120,map__5120__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__5122,map__5120,map__5120__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__5122,map__5120,map__5120__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5132 = ref;
cljs.core.reset_BANG_.call(null,G__5132,recalc.call(null));

return G__5132;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__5120,map__5120__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__5120,map__5120__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__5120,map__5120__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__5120,map__5120__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__5133_5139 = cljs.core.seq.call(null,refs);
var chunk__5134_5140 = null;
var count__5135_5141 = (0);
var i__5136_5142 = (0);
while(true){
if((i__5136_5142 < count__5135_5141)){
var ref_5143__$1 = cljs.core._nth.call(null,chunk__5134_5140,i__5136_5142);
cljs.core.add_watch.call(null,ref_5143__$1,key,watch);


var G__5144 = seq__5133_5139;
var G__5145 = chunk__5134_5140;
var G__5146 = count__5135_5141;
var G__5147 = (i__5136_5142 + (1));
seq__5133_5139 = G__5144;
chunk__5134_5140 = G__5145;
count__5135_5141 = G__5146;
i__5136_5142 = G__5147;
continue;
} else {
var temp__5457__auto___5148 = cljs.core.seq.call(null,seq__5133_5139);
if(temp__5457__auto___5148){
var seq__5133_5149__$1 = temp__5457__auto___5148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5133_5149__$1)){
var c__4351__auto___5150 = cljs.core.chunk_first.call(null,seq__5133_5149__$1);
var G__5151 = cljs.core.chunk_rest.call(null,seq__5133_5149__$1);
var G__5152 = c__4351__auto___5150;
var G__5153 = cljs.core.count.call(null,c__4351__auto___5150);
var G__5154 = (0);
seq__5133_5139 = G__5151;
chunk__5134_5140 = G__5152;
count__5135_5141 = G__5153;
i__5136_5142 = G__5154;
continue;
} else {
var ref_5155__$1 = cljs.core.first.call(null,seq__5133_5149__$1);
cljs.core.add_watch.call(null,ref_5155__$1,key,watch);


var G__5156 = cljs.core.next.call(null,seq__5133_5149__$1);
var G__5157 = null;
var G__5158 = (0);
var G__5159 = (0);
seq__5133_5139 = G__5156;
chunk__5134_5140 = G__5157;
count__5135_5141 = G__5158;
i__5136_5142 = G__5159;
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

