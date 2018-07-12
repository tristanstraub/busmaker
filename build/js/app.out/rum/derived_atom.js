// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__4907 = arguments.length;
switch (G__4907) {
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
var map__4908 = opts;
var map__4908__$1 = ((((!((map__4908 == null)))?(((((map__4908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4908):map__4908);
var ref = cljs.core.get.call(null,map__4908__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__4908__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__4910 = cljs.core.count.call(null,refs);
switch (G__4910) {
case (1):
var vec__4911 = refs;
var a = cljs.core.nth.call(null,vec__4911,(0),null);
return ((function (vec__4911,a,G__4910,map__4908,map__4908__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__4911,a,G__4910,map__4908,map__4908__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__4914 = refs;
var a = cljs.core.nth.call(null,vec__4914,(0),null);
var b = cljs.core.nth.call(null,vec__4914,(1),null);
return ((function (vec__4914,a,b,G__4910,map__4908,map__4908__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__4914,a,b,G__4910,map__4908,map__4908__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__4917 = refs;
var a = cljs.core.nth.call(null,vec__4917,(0),null);
var b = cljs.core.nth.call(null,vec__4917,(1),null);
var c = cljs.core.nth.call(null,vec__4917,(2),null);
return ((function (vec__4917,a,b,c,G__4910,map__4908,map__4908__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__4917,a,b,c,G__4910,map__4908,map__4908__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__4910,map__4908,map__4908__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__4910,map__4908,map__4908__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__4920 = ref;
cljs.core.reset_BANG_.call(null,G__4920,recalc.call(null));

return G__4920;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__4908,map__4908__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__4908,map__4908__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__4908,map__4908__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__4908,map__4908__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__4921_4927 = cljs.core.seq.call(null,refs);
var chunk__4922_4928 = null;
var count__4923_4929 = (0);
var i__4924_4930 = (0);
while(true){
if((i__4924_4930 < count__4923_4929)){
var ref_4931__$1 = cljs.core._nth.call(null,chunk__4922_4928,i__4924_4930);
cljs.core.add_watch.call(null,ref_4931__$1,key,watch);


var G__4932 = seq__4921_4927;
var G__4933 = chunk__4922_4928;
var G__4934 = count__4923_4929;
var G__4935 = (i__4924_4930 + (1));
seq__4921_4927 = G__4932;
chunk__4922_4928 = G__4933;
count__4923_4929 = G__4934;
i__4924_4930 = G__4935;
continue;
} else {
var temp__5457__auto___4936 = cljs.core.seq.call(null,seq__4921_4927);
if(temp__5457__auto___4936){
var seq__4921_4937__$1 = temp__5457__auto___4936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4921_4937__$1)){
var c__4351__auto___4938 = cljs.core.chunk_first.call(null,seq__4921_4937__$1);
var G__4939 = cljs.core.chunk_rest.call(null,seq__4921_4937__$1);
var G__4940 = c__4351__auto___4938;
var G__4941 = cljs.core.count.call(null,c__4351__auto___4938);
var G__4942 = (0);
seq__4921_4927 = G__4939;
chunk__4922_4928 = G__4940;
count__4923_4929 = G__4941;
i__4924_4930 = G__4942;
continue;
} else {
var ref_4943__$1 = cljs.core.first.call(null,seq__4921_4937__$1);
cljs.core.add_watch.call(null,ref_4943__$1,key,watch);


var G__4944 = cljs.core.next.call(null,seq__4921_4937__$1);
var G__4945 = null;
var G__4946 = (0);
var G__4947 = (0);
seq__4921_4927 = G__4944;
chunk__4922_4928 = G__4945;
count__4923_4929 = G__4946;
i__4924_4930 = G__4947;
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

