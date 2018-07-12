// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.web');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.core.match');
busmaker.web.direction = (function busmaker$web$direction(d){
var G__8511 = d;
switch (G__8511) {
case (2):
return new cljs.core.Keyword(null,"e","e",1381269198);

break;
case (6):
return new cljs.core.Keyword(null,"w","w",354169001);

break;
case (4):
return new cljs.core.Keyword(null,"s","s",1705939918);

break;
case (0):
return new cljs.core.Keyword(null,"n","n",562130025);

break;
default:
return null;

}
});
busmaker.web.cell = (function busmaker$web$cell(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8608 = arguments.length;
var i__4532__auto___8609 = (0);
while(true){
if((i__4532__auto___8609 < len__4531__auto___8608)){
args__4534__auto__.push((arguments[i__4532__auto___8609]));

var G__8610 = (i__4532__auto___8609 + (1));
i__4532__auto___8609 = G__8610;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic = (function (state,entity,x,y,p__8518){
var map__8519 = p__8518;
var map__8519__$1 = ((((!((map__8519 == null)))?(((((map__8519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8519):map__8519);
var widgets = cljs.core.get.call(null,map__8519__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));
var map__8521 = widgets;
var map__8521__$1 = ((((!((map__8521 == null)))?(((((map__8521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8521):map__8521);
var furnace = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"furnace","furnace",-1572266656));
var underground_belt_input = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
var transport_belt = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
var long_handed_inserter = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
var underground_belt_output = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
var pipe = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"pipe","pipe",336575849));
var inserter = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
var underground_pipe = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016));
var assembling_machine = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
var oil_refinery = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
var electrical_pole = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
var splitter = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"splitter","splitter",-1246750412));
var chemical_plant = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940));
var grass = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"grass","grass",1213050421));
var c = ((function (map__8521,map__8521__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__8519,map__8519__$1,widgets){
return (function (v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * y)),")"].join('')], null),v], null);
});})(map__8521,map__8521__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__8519,map__8519__$1,widgets))
;
var g = ((function (map__8521,map__8521__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8519,map__8519__$1,widgets){
return (function() { 
var G__8611__delegate = function (v,p__8523){
var map__8524 = p__8523;
var map__8524__$1 = ((((!((map__8524 == null)))?(((((map__8524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8524):map__8524);
var rotate = cljs.core.get.call(null,map__8524__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var translate = cljs.core.get.call(null,map__8524__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (map__8524,map__8524__$1,rotate,translate,map__8521,map__8521__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8519,map__8519__$1,widgets){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(map__8524,map__8524__$1,rotate,translate,map__8521,map__8521__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8519,map__8519__$1,widgets))
,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1([" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * (y - (1)))),")"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(translate)?[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(1))),")"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(rotate)?[" rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotate)," 8 8)"].join(''):null))].join('')], null),v], null);
};
var G__8611 = function (v,var_args){
var p__8523 = null;
if (arguments.length > 1) {
var G__8612__i = 0, G__8612__a = new Array(arguments.length -  1);
while (G__8612__i < G__8612__a.length) {G__8612__a[G__8612__i] = arguments[G__8612__i + 1]; ++G__8612__i;}
  p__8523 = new cljs.core.IndexedSeq(G__8612__a,0,null);
} 
return G__8611__delegate.call(this,v,p__8523);};
G__8611.cljs$lang$maxFixedArity = 1;
G__8611.cljs$lang$applyTo = (function (arglist__8613){
var v = cljs.core.first(arglist__8613);
var p__8523 = cljs.core.rest(arglist__8613);
return G__8611__delegate(v,p__8523);
});
G__8611.cljs$core$IFn$_invoke$arity$variadic = G__8611__delegate;
return G__8611;
})()
;})(map__8521,map__8521__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8519,map__8519__$1,widgets))
;
var ocr_8526 = cljs.core.get.call(null,entity,"name");
var ocr_8527 = busmaker.web.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_8528 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_8526 === "grass")){
return g.call(null,grass);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8552){if((e8552 instanceof Error)){
var e__7004__auto__ = e8552;
if((e__7004__auto__ === cljs.core.match.backtrack)){
try{if((ocr_8526 === "fast-underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8528,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8607){if((e8607 instanceof Error)){
var e__7004__auto____$1 = e8607;
if((e__7004__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$1;
}
} else {
throw e8607;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8592){if((e8592 instanceof Error)){
var e__7004__auto____$1 = e8592;
if((e__7004__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8528,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8606){if((e8606 instanceof Error)){
var e__7004__auto____$2 = e8606;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$2;
}
} else {
throw e8606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8593){if((e8593 instanceof Error)){
var e__7004__auto____$2 = e8593;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8528,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8605){if((e8605 instanceof Error)){
var e__7004__auto____$3 = e8605;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$3;
}
} else {
throw e8605;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8594){if((e8594 instanceof Error)){
var e__7004__auto____$3 = e8594;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8528,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8604){if((e8604 instanceof Error)){
var e__7004__auto____$4 = e8604;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$4;
}
} else {
throw e8604;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8595){if((e8595 instanceof Error)){
var e__7004__auto____$4 = e8595;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8528,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8603){if((e8603 instanceof Error)){
var e__7004__auto____$5 = e8603;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$5;
}
} else {
throw e8603;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8596){if((e8596 instanceof Error)){
var e__7004__auto____$5 = e8596;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8528,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8602){if((e8602 instanceof Error)){
var e__7004__auto____$6 = e8602;
if((e__7004__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$6;
}
} else {
throw e8602;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8597){if((e8597 instanceof Error)){
var e__7004__auto____$6 = e8597;
if((e__7004__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8528,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8601){if((e8601 instanceof Error)){
var e__7004__auto____$7 = e8601;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$7;
}
} else {
throw e8601;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8598){if((e8598 instanceof Error)){
var e__7004__auto____$7 = e8598;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8528,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8600){if((e8600 instanceof Error)){
var e__7004__auto____$8 = e8600;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$8;
}
} else {
throw e8600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8599){if((e8599 instanceof Error)){
var e__7004__auto____$8 = e8599;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$8;
}
} else {
throw e8599;

}
}} else {
throw e__7004__auto____$7;
}
} else {
throw e8598;

}
}} else {
throw e__7004__auto____$6;
}
} else {
throw e8597;

}
}} else {
throw e__7004__auto____$5;
}
} else {
throw e8596;

}
}} else {
throw e__7004__auto____$4;
}
} else {
throw e8595;

}
}} else {
throw e__7004__auto____$3;
}
} else {
throw e8594;

}
}} else {
throw e__7004__auto____$2;
}
} else {
throw e8593;

}
}} else {
throw e__7004__auto____$1;
}
} else {
throw e8592;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8553){if((e8553 instanceof Error)){
var e__7004__auto____$1 = e8553;
if((e__7004__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "fast-transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8528 === null)){
return g.call(null,transport_belt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8591){if((e8591 instanceof Error)){
var e__7004__auto____$2 = e8591;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$2;
}
} else {
throw e8591;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8584){if((e8584 instanceof Error)){
var e__7004__auto____$2 = e8584;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8528 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8590){if((e8590 instanceof Error)){
var e__7004__auto____$3 = e8590;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$3;
}
} else {
throw e8590;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8585){if((e8585 instanceof Error)){
var e__7004__auto____$3 = e8585;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8528 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8589){if((e8589 instanceof Error)){
var e__7004__auto____$4 = e8589;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$4;
}
} else {
throw e8589;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8586){if((e8586 instanceof Error)){
var e__7004__auto____$4 = e8586;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8528 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8588){if((e8588 instanceof Error)){
var e__7004__auto____$5 = e8588;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$5;
}
} else {
throw e8588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8587){if((e8587 instanceof Error)){
var e__7004__auto____$5 = e8587;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$5;
}
} else {
throw e8587;

}
}} else {
throw e__7004__auto____$4;
}
} else {
throw e8586;

}
}} else {
throw e__7004__auto____$3;
}
} else {
throw e8585;

}
}} else {
throw e__7004__auto____$2;
}
} else {
throw e8584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8554){if((e8554 instanceof Error)){
var e__7004__auto____$2 = e8554;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "medium-electric-pole")){
return g.call(null,electrical_pole);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8555){if((e8555 instanceof Error)){
var e__7004__auto____$3 = e8555;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "pipe")){
return g.call(null,pipe);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8556){if((e8556 instanceof Error)){
var e__7004__auto____$4 = e8556;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8582){if((e8582 instanceof Error)){
var e__7004__auto____$5 = e8582;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8583){if((e8583 instanceof Error)){
var e__7004__auto____$6 = e8583;
if((e__7004__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$6;
}
} else {
throw e8583;

}
}} else {
throw e__7004__auto____$5;
}
} else {
throw e8582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8557){if((e8557 instanceof Error)){
var e__7004__auto____$5 = e8557;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "assembling-machine-2")){
return g.call(null,assembling_machine,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8558){if((e8558 instanceof Error)){
var e__7004__auto____$6 = e8558;
if((e__7004__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "fast-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8528 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8581){if((e8581 instanceof Error)){
var e__7004__auto____$7 = e8581;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$7;
}
} else {
throw e8581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8574){if((e8574 instanceof Error)){
var e__7004__auto____$7 = e8574;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8528 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8580){if((e8580 instanceof Error)){
var e__7004__auto____$8 = e8580;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$8;
}
} else {
throw e8580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8575){if((e8575 instanceof Error)){
var e__7004__auto____$8 = e8575;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8528 === null)){
return g.call(null,inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8579){if((e8579 instanceof Error)){
var e__7004__auto____$9 = e8579;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$9;
}
} else {
throw e8579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8576){if((e8576 instanceof Error)){
var e__7004__auto____$9 = e8576;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8528 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8578){if((e8578 instanceof Error)){
var e__7004__auto____$10 = e8578;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$10;
}
} else {
throw e8578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8577){if((e8577 instanceof Error)){
var e__7004__auto____$10 = e8577;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$10;
}
} else {
throw e8577;

}
}} else {
throw e__7004__auto____$9;
}
} else {
throw e8576;

}
}} else {
throw e__7004__auto____$8;
}
} else {
throw e8575;

}
}} else {
throw e__7004__auto____$7;
}
} else {
throw e8574;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8559){if((e8559 instanceof Error)){
var e__7004__auto____$7 = e8559;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8528 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8573){if((e8573 instanceof Error)){
var e__7004__auto____$8 = e8573;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$8;
}
} else {
throw e8573;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8566){if((e8566 instanceof Error)){
var e__7004__auto____$8 = e8566;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8528 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8572){if((e8572 instanceof Error)){
var e__7004__auto____$9 = e8572;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$9;
}
} else {
throw e8572;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8567){if((e8567 instanceof Error)){
var e__7004__auto____$9 = e8567;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8528 === null)){
return g.call(null,long_handed_inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8571){if((e8571 instanceof Error)){
var e__7004__auto____$10 = e8571;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$10;
}
} else {
throw e8571;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8568){if((e8568 instanceof Error)){
var e__7004__auto____$10 = e8568;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8527,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8528 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8570){if((e8570 instanceof Error)){
var e__7004__auto____$11 = e8570;
if((e__7004__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$11;
}
} else {
throw e8570;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8569){if((e8569 instanceof Error)){
var e__7004__auto____$11 = e8569;
if((e__7004__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$11;
}
} else {
throw e8569;

}
}} else {
throw e__7004__auto____$10;
}
} else {
throw e8568;

}
}} else {
throw e__7004__auto____$9;
}
} else {
throw e8567;

}
}} else {
throw e__7004__auto____$8;
}
} else {
throw e8566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8560){if((e8560 instanceof Error)){
var e__7004__auto____$8 = e8560;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "chemical-plant")){
return g.call(null,chemical_plant,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8561){if((e8561 instanceof Error)){
var e__7004__auto____$9 = e8561;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "oil-refinery")){
return g.call(null,oil_refinery,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-32),(-32)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8562){if((e8562 instanceof Error)){
var e__7004__auto____$10 = e8562;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "electric-mining-drill")){
return c.call(null,"x");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8563){if((e8563 instanceof Error)){
var e__7004__auto____$11 = e8563;
if((e__7004__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "electric-furnace")){
return g.call(null,furnace,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8564){if((e8564 instanceof Error)){
var e__7004__auto____$12 = e8564;
if((e__7004__auto____$12 === cljs.core.match.backtrack)){
try{if((ocr_8526 === "fast-splitter")){
return g.call(null,splitter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8565){if((e8565 instanceof Error)){
var e__7004__auto____$13 = e8565;
if((e__7004__auto____$13 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8526)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8527)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8528)].join('')));
} else {
throw e__7004__auto____$13;
}
} else {
throw e8565;

}
}} else {
throw e__7004__auto____$12;
}
} else {
throw e8564;

}
}} else {
throw e__7004__auto____$11;
}
} else {
throw e8563;

}
}} else {
throw e__7004__auto____$10;
}
} else {
throw e8562;

}
}} else {
throw e__7004__auto____$9;
}
} else {
throw e8561;

}
}} else {
throw e__7004__auto____$8;
}
} else {
throw e8560;

}
}} else {
throw e__7004__auto____$7;
}
} else {
throw e8559;

}
}} else {
throw e__7004__auto____$6;
}
} else {
throw e8558;

}
}} else {
throw e__7004__auto____$5;
}
} else {
throw e8557;

}
}} else {
throw e__7004__auto____$4;
}
} else {
throw e8556;

}
}} else {
throw e__7004__auto____$3;
}
} else {
throw e8555;

}
}} else {
throw e__7004__auto____$2;
}
} else {
throw e8554;

}
}} else {
throw e__7004__auto____$1;
}
} else {
throw e8553;

}
}} else {
throw e__7004__auto__;
}
} else {
throw e8552;

}
}});

busmaker.web.cell.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
busmaker.web.cell.cljs$lang$applyTo = (function (seq8513){
var G__8514 = cljs.core.first.call(null,seq8513);
var seq8513__$1 = cljs.core.next.call(null,seq8513);
var G__8515 = cljs.core.first.call(null,seq8513__$1);
var seq8513__$2 = cljs.core.next.call(null,seq8513__$1);
var G__8516 = cljs.core.first.call(null,seq8513__$2);
var seq8513__$3 = cljs.core.next.call(null,seq8513__$2);
var G__8517 = cljs.core.first.call(null,seq8513__$3);
var seq8513__$4 = cljs.core.next.call(null,seq8513__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8514,G__8515,G__8516,G__8517,seq8513__$4);
});

busmaker.web.margin_x = (2);
busmaker.web.viewport_window = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null);
busmaker.web.svg_scroll = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
rum.core.ref.call(null,state,"svg").setAttribute("viewBox",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))].join(''));

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("busmaker.web","drag","busmaker.web/drag",314389112).cljs$core$IFn$_invoke$arity$1(state),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
window.removeEventListener("scroll",new cljs.core.Keyword("busmaker.web","scroll-hander","busmaker.web/scroll-hander",-134362304).cljs$core$IFn$_invoke$arity$1(state));

return state;
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var drag = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
rum.core.ref.call(null,state,"svg").addEventListener("mousedown",((function (drag){
return (function (e){
e.preventDefault();

var map__8614 = cljs.core.deref.call(null,drag);
var map__8614__$1 = ((((!((map__8614 == null)))?(((((map__8614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8614):map__8614);
var x = cljs.core.get.call(null,map__8614__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8614__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.reset_BANG_.call(null,drag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true], null));
});})(drag))
);

rum.core.ref.call(null,state,"svg").addEventListener("mousemove",((function (drag){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__8616 = cljs.core.deref.call(null,drag);
var map__8616__$1 = ((((!((map__8616 == null)))?(((((map__8616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8616):map__8616);
var x = cljs.core.get.call(null,map__8616__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8616__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__8616__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__8616__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__8616__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__8616__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dmx = (mx0 - e.clientX);
var dmy = (my0 - e.clientY);
cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(x0 + dmx),new cljs.core.Keyword(null,"y","y",-1757859776),(y0 + dmy));

return rum.core.ref.call(null,state,"svg").setAttribute("viewBox",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((x0 + dmx))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y0 + dmy))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))].join(''));
} else {
return null;
}
});})(drag))
);

rum.core.ref.call(null,state,"svg").addEventListener("mouseup",((function (drag){
return (function (e){
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(drag))
);

rum.core.ref.call(null,state,"svg").addEventListener("mouseleave",((function (drag){
return (function (e){
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(drag))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("busmaker.web","drag","busmaker.web/drag",314389112),drag);
})], null);
busmaker.web.print_entities = rum.core.build_defc.call(null,(function (state,entities,widgets){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8618_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__8618_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__8618_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
return React.createElement("svg",({"xmlns": "http://www.w3.org/2000/svg", "viewBox": ["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))].join(''), "ref": "svg", "className": "canvas"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__8619(s__8620){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8620__$1 = s__8620;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8620__$1);
if(temp__5457__auto__){
var s__8620__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8620__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8620__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8622 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8621 = (0);
while(true){
if((i__8621 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__8621);
cljs.core.chunk_append.call(null,b__8622,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (i__8621,y,c__4322__auto__,size__4323__auto__,b__8622,s__8620__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__8619_$_iter__8623(s__8624){
return (new cljs.core.LazySeq(null,((function (i__8621,y,c__4322__auto__,size__4323__auto__,b__8622,s__8620__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8624__$1 = s__8624;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8624__$1);
if(temp__5457__auto____$1){
var s__8624__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8624__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8624__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8626 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8625 = (0);
while(true){
if((i__8625 < size__4323__auto____$1)){
var x = cljs.core._nth.call(null,c__4322__auto____$1,i__8625);
cljs.core.chunk_append.call(null,b__8626,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__8631 = (i__8625 + (1));
i__8625 = G__8631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8626),busmaker$web$iter__8619_$_iter__8623.call(null,cljs.core.chunk_rest.call(null,s__8624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8626),null);
}
} else {
var x = cljs.core.first.call(null,s__8624__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__8619_$_iter__8623.call(null,cljs.core.rest.call(null,s__8624__$2)));
}
} else {
return null;
}
break;
}
});})(i__8621,y,c__4322__auto__,size__4323__auto__,b__8622,s__8620__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(i__8621,y,c__4322__auto__,size__4323__auto__,b__8622,s__8620__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())));

var G__8632 = (i__8621 + (1));
i__8621 = G__8632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8622),busmaker$web$iter__8619.call(null,cljs.core.chunk_rest.call(null,s__8620__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8622),null);
}
} else {
var y = cljs.core.first.call(null,s__8620__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (y,s__8620__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__8619_$_iter__8627(s__8628){
return (new cljs.core.LazySeq(null,((function (y,s__8620__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8628__$1 = s__8628;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8628__$1);
if(temp__5457__auto____$1){
var s__8628__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8628__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8628__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8630 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8629 = (0);
while(true){
if((i__8629 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__8629);
cljs.core.chunk_append.call(null,b__8630,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__8633 = (i__8629 + (1));
i__8629 = G__8633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8630),busmaker$web$iter__8619_$_iter__8627.call(null,cljs.core.chunk_rest.call(null,s__8628__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8630),null);
}
} else {
var x = cljs.core.first.call(null,s__8628__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__8619_$_iter__8627.call(null,cljs.core.rest.call(null,s__8628__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__8620__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(y,s__8620__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())),busmaker$web$iter__8619.call(null,cljs.core.rest.call(null,s__8620__$2)));
}
} else {
return null;
}
break;
}
});})(indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dy));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.web.svg_scroll], null),"print-entities");
