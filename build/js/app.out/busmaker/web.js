// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.web');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.core.match');
busmaker.web.direction = (function busmaker$web$direction(d){
var G__8553 = d;
switch (G__8553) {
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
var len__4531__auto___8650 = arguments.length;
var i__4532__auto___8651 = (0);
while(true){
if((i__4532__auto___8651 < len__4531__auto___8650)){
args__4534__auto__.push((arguments[i__4532__auto___8651]));

var G__8652 = (i__4532__auto___8651 + (1));
i__4532__auto___8651 = G__8652;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic = (function (state,entity,x,y,p__8560){
var map__8561 = p__8560;
var map__8561__$1 = ((((!((map__8561 == null)))?(((((map__8561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8561):map__8561);
var widgets = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));
var map__8563 = widgets;
var map__8563__$1 = ((((!((map__8563 == null)))?(((((map__8563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8563):map__8563);
var furnace = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"furnace","furnace",-1572266656));
var underground_belt_input = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
var transport_belt = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
var long_handed_inserter = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
var underground_belt_output = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
var pipe = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"pipe","pipe",336575849));
var inserter = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
var underground_pipe = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016));
var assembling_machine = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
var oil_refinery = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
var electrical_pole = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
var splitter = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"splitter","splitter",-1246750412));
var chemical_plant = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940));
var grass = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"grass","grass",1213050421));
var c = ((function (map__8563,map__8563__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__8561,map__8561__$1,widgets){
return (function (v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * y)),")"].join('')], null),v], null);
});})(map__8563,map__8563__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__8561,map__8561__$1,widgets))
;
var g = ((function (map__8563,map__8563__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8561,map__8561__$1,widgets){
return (function() { 
var G__8653__delegate = function (v,p__8565){
var map__8566 = p__8565;
var map__8566__$1 = ((((!((map__8566 == null)))?(((((map__8566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8566):map__8566);
var rotate = cljs.core.get.call(null,map__8566__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var translate = cljs.core.get.call(null,map__8566__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (map__8566,map__8566__$1,rotate,translate,map__8563,map__8563__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8561,map__8561__$1,widgets){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(map__8566,map__8566__$1,rotate,translate,map__8563,map__8563__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8561,map__8561__$1,widgets))
,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1([" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * (y - (1)))),")"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(translate)?[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(1))),")"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(rotate)?[" rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotate)," 8 8)"].join(''):null))].join('')], null),v], null);
};
var G__8653 = function (v,var_args){
var p__8565 = null;
if (arguments.length > 1) {
var G__8654__i = 0, G__8654__a = new Array(arguments.length -  1);
while (G__8654__i < G__8654__a.length) {G__8654__a[G__8654__i] = arguments[G__8654__i + 1]; ++G__8654__i;}
  p__8565 = new cljs.core.IndexedSeq(G__8654__a,0,null);
} 
return G__8653__delegate.call(this,v,p__8565);};
G__8653.cljs$lang$maxFixedArity = 1;
G__8653.cljs$lang$applyTo = (function (arglist__8655){
var v = cljs.core.first(arglist__8655);
var p__8565 = cljs.core.rest(arglist__8655);
return G__8653__delegate(v,p__8565);
});
G__8653.cljs$core$IFn$_invoke$arity$variadic = G__8653__delegate;
return G__8653;
})()
;})(map__8563,map__8563__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8561,map__8561__$1,widgets))
;
var ocr_8568 = cljs.core.get.call(null,entity,"name");
var ocr_8569 = busmaker.web.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_8570 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_8568 === "grass")){
return g.call(null,grass);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8594){if((e8594 instanceof Error)){
var e__7059__auto__ = e8594;
if((e__7059__auto__ === cljs.core.match.backtrack)){
try{if((ocr_8568 === "fast-underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8570,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8649){if((e8649 instanceof Error)){
var e__7059__auto____$1 = e8649;
if((e__7059__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$1;
}
} else {
throw e8649;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8634){if((e8634 instanceof Error)){
var e__7059__auto____$1 = e8634;
if((e__7059__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8570,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8648){if((e8648 instanceof Error)){
var e__7059__auto____$2 = e8648;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$2;
}
} else {
throw e8648;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8635){if((e8635 instanceof Error)){
var e__7059__auto____$2 = e8635;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8570,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8647){if((e8647 instanceof Error)){
var e__7059__auto____$3 = e8647;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$3;
}
} else {
throw e8647;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8636){if((e8636 instanceof Error)){
var e__7059__auto____$3 = e8636;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8570,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8646){if((e8646 instanceof Error)){
var e__7059__auto____$4 = e8646;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$4;
}
} else {
throw e8646;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8637){if((e8637 instanceof Error)){
var e__7059__auto____$4 = e8637;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8570,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8645){if((e8645 instanceof Error)){
var e__7059__auto____$5 = e8645;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$5;
}
} else {
throw e8645;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8638){if((e8638 instanceof Error)){
var e__7059__auto____$5 = e8638;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8570,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8644){if((e8644 instanceof Error)){
var e__7059__auto____$6 = e8644;
if((e__7059__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$6;
}
} else {
throw e8644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8639){if((e8639 instanceof Error)){
var e__7059__auto____$6 = e8639;
if((e__7059__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8570,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8643){if((e8643 instanceof Error)){
var e__7059__auto____$7 = e8643;
if((e__7059__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$7;
}
} else {
throw e8643;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8640){if((e8640 instanceof Error)){
var e__7059__auto____$7 = e8640;
if((e__7059__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8570,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8642){if((e8642 instanceof Error)){
var e__7059__auto____$8 = e8642;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$8;
}
} else {
throw e8642;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8641){if((e8641 instanceof Error)){
var e__7059__auto____$8 = e8641;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$8;
}
} else {
throw e8641;

}
}} else {
throw e__7059__auto____$7;
}
} else {
throw e8640;

}
}} else {
throw e__7059__auto____$6;
}
} else {
throw e8639;

}
}} else {
throw e__7059__auto____$5;
}
} else {
throw e8638;

}
}} else {
throw e__7059__auto____$4;
}
} else {
throw e8637;

}
}} else {
throw e__7059__auto____$3;
}
} else {
throw e8636;

}
}} else {
throw e__7059__auto____$2;
}
} else {
throw e8635;

}
}} else {
throw e__7059__auto____$1;
}
} else {
throw e8634;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8595){if((e8595 instanceof Error)){
var e__7059__auto____$1 = e8595;
if((e__7059__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "fast-transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8570 === null)){
return g.call(null,transport_belt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8633){if((e8633 instanceof Error)){
var e__7059__auto____$2 = e8633;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$2;
}
} else {
throw e8633;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8626){if((e8626 instanceof Error)){
var e__7059__auto____$2 = e8626;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8570 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8632){if((e8632 instanceof Error)){
var e__7059__auto____$3 = e8632;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$3;
}
} else {
throw e8632;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8627){if((e8627 instanceof Error)){
var e__7059__auto____$3 = e8627;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8570 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8631){if((e8631 instanceof Error)){
var e__7059__auto____$4 = e8631;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$4;
}
} else {
throw e8631;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8628){if((e8628 instanceof Error)){
var e__7059__auto____$4 = e8628;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8570 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8630){if((e8630 instanceof Error)){
var e__7059__auto____$5 = e8630;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$5;
}
} else {
throw e8630;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8629){if((e8629 instanceof Error)){
var e__7059__auto____$5 = e8629;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$5;
}
} else {
throw e8629;

}
}} else {
throw e__7059__auto____$4;
}
} else {
throw e8628;

}
}} else {
throw e__7059__auto____$3;
}
} else {
throw e8627;

}
}} else {
throw e__7059__auto____$2;
}
} else {
throw e8626;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8596){if((e8596 instanceof Error)){
var e__7059__auto____$2 = e8596;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "medium-electric-pole")){
return g.call(null,electrical_pole);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8597){if((e8597 instanceof Error)){
var e__7059__auto____$3 = e8597;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "pipe")){
return g.call(null,pipe);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8598){if((e8598 instanceof Error)){
var e__7059__auto____$4 = e8598;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8624){if((e8624 instanceof Error)){
var e__7059__auto____$5 = e8624;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8625){if((e8625 instanceof Error)){
var e__7059__auto____$6 = e8625;
if((e__7059__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$6;
}
} else {
throw e8625;

}
}} else {
throw e__7059__auto____$5;
}
} else {
throw e8624;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8599){if((e8599 instanceof Error)){
var e__7059__auto____$5 = e8599;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "assembling-machine-2")){
return g.call(null,assembling_machine,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8600){if((e8600 instanceof Error)){
var e__7059__auto____$6 = e8600;
if((e__7059__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "fast-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8570 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8623){if((e8623 instanceof Error)){
var e__7059__auto____$7 = e8623;
if((e__7059__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$7;
}
} else {
throw e8623;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8616){if((e8616 instanceof Error)){
var e__7059__auto____$7 = e8616;
if((e__7059__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8570 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8622){if((e8622 instanceof Error)){
var e__7059__auto____$8 = e8622;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$8;
}
} else {
throw e8622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8617){if((e8617 instanceof Error)){
var e__7059__auto____$8 = e8617;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8570 === null)){
return g.call(null,inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8621){if((e8621 instanceof Error)){
var e__7059__auto____$9 = e8621;
if((e__7059__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$9;
}
} else {
throw e8621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8618){if((e8618 instanceof Error)){
var e__7059__auto____$9 = e8618;
if((e__7059__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8570 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8620){if((e8620 instanceof Error)){
var e__7059__auto____$10 = e8620;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$10;
}
} else {
throw e8620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8619){if((e8619 instanceof Error)){
var e__7059__auto____$10 = e8619;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$10;
}
} else {
throw e8619;

}
}} else {
throw e__7059__auto____$9;
}
} else {
throw e8618;

}
}} else {
throw e__7059__auto____$8;
}
} else {
throw e8617;

}
}} else {
throw e__7059__auto____$7;
}
} else {
throw e8616;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8601){if((e8601 instanceof Error)){
var e__7059__auto____$7 = e8601;
if((e__7059__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8570 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8615){if((e8615 instanceof Error)){
var e__7059__auto____$8 = e8615;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$8;
}
} else {
throw e8615;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8608){if((e8608 instanceof Error)){
var e__7059__auto____$8 = e8608;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8570 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8614){if((e8614 instanceof Error)){
var e__7059__auto____$9 = e8614;
if((e__7059__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$9;
}
} else {
throw e8614;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8609){if((e8609 instanceof Error)){
var e__7059__auto____$9 = e8609;
if((e__7059__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8570 === null)){
return g.call(null,long_handed_inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8613){if((e8613 instanceof Error)){
var e__7059__auto____$10 = e8613;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$10;
}
} else {
throw e8613;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8610){if((e8610 instanceof Error)){
var e__7059__auto____$10 = e8610;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8569,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8570 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8612){if((e8612 instanceof Error)){
var e__7059__auto____$11 = e8612;
if((e__7059__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$11;
}
} else {
throw e8612;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8611){if((e8611 instanceof Error)){
var e__7059__auto____$11 = e8611;
if((e__7059__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$11;
}
} else {
throw e8611;

}
}} else {
throw e__7059__auto____$10;
}
} else {
throw e8610;

}
}} else {
throw e__7059__auto____$9;
}
} else {
throw e8609;

}
}} else {
throw e__7059__auto____$8;
}
} else {
throw e8608;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8602){if((e8602 instanceof Error)){
var e__7059__auto____$8 = e8602;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "chemical-plant")){
return g.call(null,chemical_plant,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8603){if((e8603 instanceof Error)){
var e__7059__auto____$9 = e8603;
if((e__7059__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "oil-refinery")){
return g.call(null,oil_refinery,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-32),(-32)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8604){if((e8604 instanceof Error)){
var e__7059__auto____$10 = e8604;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "electric-mining-drill")){
return c.call(null,"x");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8605){if((e8605 instanceof Error)){
var e__7059__auto____$11 = e8605;
if((e__7059__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "electric-furnace")){
return g.call(null,furnace,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8606){if((e8606 instanceof Error)){
var e__7059__auto____$12 = e8606;
if((e__7059__auto____$12 === cljs.core.match.backtrack)){
try{if((ocr_8568 === "fast-splitter")){
return g.call(null,splitter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8607){if((e8607 instanceof Error)){
var e__7059__auto____$13 = e8607;
if((e__7059__auto____$13 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8568)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8569)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8570)].join('')));
} else {
throw e__7059__auto____$13;
}
} else {
throw e8607;

}
}} else {
throw e__7059__auto____$12;
}
} else {
throw e8606;

}
}} else {
throw e__7059__auto____$11;
}
} else {
throw e8605;

}
}} else {
throw e__7059__auto____$10;
}
} else {
throw e8604;

}
}} else {
throw e__7059__auto____$9;
}
} else {
throw e8603;

}
}} else {
throw e__7059__auto____$8;
}
} else {
throw e8602;

}
}} else {
throw e__7059__auto____$7;
}
} else {
throw e8601;

}
}} else {
throw e__7059__auto____$6;
}
} else {
throw e8600;

}
}} else {
throw e__7059__auto____$5;
}
} else {
throw e8599;

}
}} else {
throw e__7059__auto____$4;
}
} else {
throw e8598;

}
}} else {
throw e__7059__auto____$3;
}
} else {
throw e8597;

}
}} else {
throw e__7059__auto____$2;
}
} else {
throw e8596;

}
}} else {
throw e__7059__auto____$1;
}
} else {
throw e8595;

}
}} else {
throw e__7059__auto__;
}
} else {
throw e8594;

}
}});

busmaker.web.cell.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
busmaker.web.cell.cljs$lang$applyTo = (function (seq8555){
var G__8556 = cljs.core.first.call(null,seq8555);
var seq8555__$1 = cljs.core.next.call(null,seq8555);
var G__8557 = cljs.core.first.call(null,seq8555__$1);
var seq8555__$2 = cljs.core.next.call(null,seq8555__$1);
var G__8558 = cljs.core.first.call(null,seq8555__$2);
var seq8555__$3 = cljs.core.next.call(null,seq8555__$2);
var G__8559 = cljs.core.first.call(null,seq8555__$3);
var seq8555__$4 = cljs.core.next.call(null,seq8555__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8556,G__8557,G__8558,G__8559,seq8555__$4);
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

var map__8656 = cljs.core.deref.call(null,drag);
var map__8656__$1 = ((((!((map__8656 == null)))?(((((map__8656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8656):map__8656);
var x = cljs.core.get.call(null,map__8656__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8656__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.reset_BANG_.call(null,drag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true], null));
});})(drag))
);

rum.core.ref.call(null,state,"svg").addEventListener("mousemove",((function (drag){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__8658 = cljs.core.deref.call(null,drag);
var map__8658__$1 = ((((!((map__8658 == null)))?(((((map__8658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8658):map__8658);
var x = cljs.core.get.call(null,map__8658__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8658__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__8658__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__8658__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__8658__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__8658__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
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
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8660_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__8660_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__8660_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
return React.createElement("svg",({"xmlns": "http://www.w3.org/2000/svg", "viewBox": ["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))].join(''), "ref": "svg", "className": "canvas"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__8661(s__8662){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8662__$1 = s__8662;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8662__$1);
if(temp__5457__auto__){
var s__8662__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8662__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8662__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8664 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8663 = (0);
while(true){
if((i__8663 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__8663);
cljs.core.chunk_append.call(null,b__8664,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (i__8663,y,c__4322__auto__,size__4323__auto__,b__8664,s__8662__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__8661_$_iter__8665(s__8666){
return (new cljs.core.LazySeq(null,((function (i__8663,y,c__4322__auto__,size__4323__auto__,b__8664,s__8662__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8666__$1 = s__8666;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8666__$1);
if(temp__5457__auto____$1){
var s__8666__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8666__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8666__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8668 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8667 = (0);
while(true){
if((i__8667 < size__4323__auto____$1)){
var x = cljs.core._nth.call(null,c__4322__auto____$1,i__8667);
cljs.core.chunk_append.call(null,b__8668,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__8673 = (i__8667 + (1));
i__8667 = G__8673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8668),busmaker$web$iter__8661_$_iter__8665.call(null,cljs.core.chunk_rest.call(null,s__8666__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8668),null);
}
} else {
var x = cljs.core.first.call(null,s__8666__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__8661_$_iter__8665.call(null,cljs.core.rest.call(null,s__8666__$2)));
}
} else {
return null;
}
break;
}
});})(i__8663,y,c__4322__auto__,size__4323__auto__,b__8664,s__8662__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(i__8663,y,c__4322__auto__,size__4323__auto__,b__8664,s__8662__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())));

var G__8674 = (i__8663 + (1));
i__8663 = G__8674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8664),busmaker$web$iter__8661.call(null,cljs.core.chunk_rest.call(null,s__8662__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8664),null);
}
} else {
var y = cljs.core.first.call(null,s__8662__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (y,s__8662__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__8661_$_iter__8669(s__8670){
return (new cljs.core.LazySeq(null,((function (y,s__8662__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8670__$1 = s__8670;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8670__$1);
if(temp__5457__auto____$1){
var s__8670__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8670__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8670__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8672 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8671 = (0);
while(true){
if((i__8671 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__8671);
cljs.core.chunk_append.call(null,b__8672,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__8675 = (i__8671 + (1));
i__8671 = G__8675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8672),busmaker$web$iter__8661_$_iter__8669.call(null,cljs.core.chunk_rest.call(null,s__8670__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8672),null);
}
} else {
var x = cljs.core.first.call(null,s__8670__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__8661_$_iter__8669.call(null,cljs.core.rest.call(null,s__8670__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__8662__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(y,s__8662__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())),busmaker$web$iter__8661.call(null,cljs.core.rest.call(null,s__8662__$2)));
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
