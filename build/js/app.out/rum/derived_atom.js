// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__1474 = arguments.length;
switch (G__1474) {
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
var map__1475 = opts;
var map__1475__$1 = ((((!((map__1475 == null)))?(((((map__1475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1475):map__1475);
var ref = cljs.core.get.call(null,map__1475__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__1475__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__1477 = cljs.core.count.call(null,refs);
switch (G__1477) {
case (1):
var vec__1478 = refs;
var a = cljs.core.nth.call(null,vec__1478,(0),null);
return ((function (vec__1478,a,G__1477,map__1475,map__1475__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__1478,a,G__1477,map__1475,map__1475__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__1481 = refs;
var a = cljs.core.nth.call(null,vec__1481,(0),null);
var b = cljs.core.nth.call(null,vec__1481,(1),null);
return ((function (vec__1481,a,b,G__1477,map__1475,map__1475__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__1481,a,b,G__1477,map__1475,map__1475__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__1484 = refs;
var a = cljs.core.nth.call(null,vec__1484,(0),null);
var b = cljs.core.nth.call(null,vec__1484,(1),null);
var c = cljs.core.nth.call(null,vec__1484,(2),null);
return ((function (vec__1484,a,b,c,G__1477,map__1475,map__1475__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__1484,a,b,c,G__1477,map__1475,map__1475__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__1477,map__1475,map__1475__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__1477,map__1475,map__1475__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__1487 = ref;
cljs.core.reset_BANG_.call(null,G__1487,recalc.call(null));

return G__1487;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__1475,map__1475__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__1475,map__1475__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__1475,map__1475__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__1475,map__1475__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__1488_1494 = cljs.core.seq.call(null,refs);
var chunk__1489_1495 = null;
var count__1490_1496 = (0);
var i__1491_1497 = (0);
while(true){
if((i__1491_1497 < count__1490_1496)){
var ref_1498__$1 = cljs.core._nth.call(null,chunk__1489_1495,i__1491_1497);
cljs.core.add_watch.call(null,ref_1498__$1,key,watch);


var G__1499 = seq__1488_1494;
var G__1500 = chunk__1489_1495;
var G__1501 = count__1490_1496;
var G__1502 = (i__1491_1497 + (1));
seq__1488_1494 = G__1499;
chunk__1489_1495 = G__1500;
count__1490_1496 = G__1501;
i__1491_1497 = G__1502;
continue;
} else {
var temp__5457__auto___1503 = cljs.core.seq.call(null,seq__1488_1494);
if(temp__5457__auto___1503){
var seq__1488_1504__$1 = temp__5457__auto___1503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1488_1504__$1)){
var c__4351__auto___1505 = cljs.core.chunk_first.call(null,seq__1488_1504__$1);
var G__1506 = cljs.core.chunk_rest.call(null,seq__1488_1504__$1);
var G__1507 = c__4351__auto___1505;
var G__1508 = cljs.core.count.call(null,c__4351__auto___1505);
var G__1509 = (0);
seq__1488_1494 = G__1506;
chunk__1489_1495 = G__1507;
count__1490_1496 = G__1508;
i__1491_1497 = G__1509;
continue;
} else {
var ref_1510__$1 = cljs.core.first.call(null,seq__1488_1504__$1);
cljs.core.add_watch.call(null,ref_1510__$1,key,watch);


var G__1511 = cljs.core.next.call(null,seq__1488_1504__$1);
var G__1512 = null;
var G__1513 = (0);
var G__1514 = (0);
seq__1488_1494 = G__1511;
chunk__1489_1495 = G__1512;
count__1490_1496 = G__1513;
i__1491_1497 = G__1514;
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


//# sourceMappingURL=derived_atom.js.map
