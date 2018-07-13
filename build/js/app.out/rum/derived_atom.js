// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5116 = arguments.length;
switch (G__5116) {
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
var map__5117 = opts;
var map__5117__$1 = ((((!((map__5117 == null)))?(((((map__5117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5117):map__5117);
var ref = cljs.core.get.call(null,map__5117__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__5117__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5119 = cljs.core.count.call(null,refs);
switch (G__5119) {
case (1):
var vec__5120 = refs;
var a = cljs.core.nth.call(null,vec__5120,(0),null);
return ((function (vec__5120,a,G__5119,map__5117,map__5117__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__5120,a,G__5119,map__5117,map__5117__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__5123 = refs;
var a = cljs.core.nth.call(null,vec__5123,(0),null);
var b = cljs.core.nth.call(null,vec__5123,(1),null);
return ((function (vec__5123,a,b,G__5119,map__5117,map__5117__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__5123,a,b,G__5119,map__5117,map__5117__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__5126 = refs;
var a = cljs.core.nth.call(null,vec__5126,(0),null);
var b = cljs.core.nth.call(null,vec__5126,(1),null);
var c = cljs.core.nth.call(null,vec__5126,(2),null);
return ((function (vec__5126,a,b,c,G__5119,map__5117,map__5117__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__5126,a,b,c,G__5119,map__5117,map__5117__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__5119,map__5117,map__5117__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__5119,map__5117,map__5117__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5129 = ref;
cljs.core.reset_BANG_.call(null,G__5129,recalc.call(null));

return G__5129;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__5117,map__5117__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__5117,map__5117__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__5117,map__5117__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__5117,map__5117__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__5130_5136 = cljs.core.seq.call(null,refs);
var chunk__5131_5137 = null;
var count__5132_5138 = (0);
var i__5133_5139 = (0);
while(true){
if((i__5133_5139 < count__5132_5138)){
var ref_5140__$1 = cljs.core._nth.call(null,chunk__5131_5137,i__5133_5139);
cljs.core.add_watch.call(null,ref_5140__$1,key,watch);


var G__5141 = seq__5130_5136;
var G__5142 = chunk__5131_5137;
var G__5143 = count__5132_5138;
var G__5144 = (i__5133_5139 + (1));
seq__5130_5136 = G__5141;
chunk__5131_5137 = G__5142;
count__5132_5138 = G__5143;
i__5133_5139 = G__5144;
continue;
} else {
var temp__5457__auto___5145 = cljs.core.seq.call(null,seq__5130_5136);
if(temp__5457__auto___5145){
var seq__5130_5146__$1 = temp__5457__auto___5145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5130_5146__$1)){
var c__4351__auto___5147 = cljs.core.chunk_first.call(null,seq__5130_5146__$1);
var G__5148 = cljs.core.chunk_rest.call(null,seq__5130_5146__$1);
var G__5149 = c__4351__auto___5147;
var G__5150 = cljs.core.count.call(null,c__4351__auto___5147);
var G__5151 = (0);
seq__5130_5136 = G__5148;
chunk__5131_5137 = G__5149;
count__5132_5138 = G__5150;
i__5133_5139 = G__5151;
continue;
} else {
var ref_5152__$1 = cljs.core.first.call(null,seq__5130_5146__$1);
cljs.core.add_watch.call(null,ref_5152__$1,key,watch);


var G__5153 = cljs.core.next.call(null,seq__5130_5146__$1);
var G__5154 = null;
var G__5155 = (0);
var G__5156 = (0);
seq__5130_5136 = G__5153;
chunk__5131_5137 = G__5154;
count__5132_5138 = G__5155;
i__5133_5139 = G__5156;
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

