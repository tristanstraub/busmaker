// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.web');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.core.match');
busmaker.web.direction = (function busmaker$web$direction(d){
var G__7393 = d;
switch (G__7393) {
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
var len__4531__auto___7490 = arguments.length;
var i__4532__auto___7491 = (0);
while(true){
if((i__4532__auto___7491 < len__4531__auto___7490)){
args__4534__auto__.push((arguments[i__4532__auto___7491]));

var G__7492 = (i__4532__auto___7491 + (1));
i__4532__auto___7491 = G__7492;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic = (function (state,entity,x,y,p__7400){
var map__7401 = p__7400;
var map__7401__$1 = ((((!((map__7401 == null)))?(((((map__7401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7401):map__7401);
var widgets = cljs.core.get.call(null,map__7401__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));
var map__7403 = widgets;
var map__7403__$1 = ((((!((map__7403 == null)))?(((((map__7403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7403):map__7403);
var furnace = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"furnace","furnace",-1572266656));
var underground_belt_input = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
var transport_belt = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
var long_handed_inserter = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
var underground_belt_output = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
var pipe = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"pipe","pipe",336575849));
var inserter = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
var underground_pipe = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016));
var assembling_machine = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
var oil_refinery = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
var electrical_pole = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
var splitter = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"splitter","splitter",-1246750412));
var chemical_plant = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940));
var grass = cljs.core.get.call(null,map__7403__$1,new cljs.core.Keyword(null,"grass","grass",1213050421));
var c = ((function (map__7403,map__7403__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__7401,map__7401__$1,widgets){
return (function (v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * y)),")"].join('')], null),v], null);
});})(map__7403,map__7403__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__7401,map__7401__$1,widgets))
;
var g = ((function (map__7403,map__7403__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__7401,map__7401__$1,widgets){
return (function() { 
var G__7493__delegate = function (v,p__7405){
var map__7406 = p__7405;
var map__7406__$1 = ((((!((map__7406 == null)))?(((((map__7406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7406):map__7406);
var rotate = cljs.core.get.call(null,map__7406__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var translate = cljs.core.get.call(null,map__7406__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (map__7406,map__7406__$1,rotate,translate,map__7403,map__7403__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__7401,map__7401__$1,widgets){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(map__7406,map__7406__$1,rotate,translate,map__7403,map__7403__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__7401,map__7401__$1,widgets))
,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1([" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * (y - (1)))),")"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(translate)?[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(1))),")"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(rotate)?[" rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotate)," 8 8)"].join(''):null))].join('')], null),v], null);
};
var G__7493 = function (v,var_args){
var p__7405 = null;
if (arguments.length > 1) {
var G__7494__i = 0, G__7494__a = new Array(arguments.length -  1);
while (G__7494__i < G__7494__a.length) {G__7494__a[G__7494__i] = arguments[G__7494__i + 1]; ++G__7494__i;}
  p__7405 = new cljs.core.IndexedSeq(G__7494__a,0,null);
} 
return G__7493__delegate.call(this,v,p__7405);};
G__7493.cljs$lang$maxFixedArity = 1;
G__7493.cljs$lang$applyTo = (function (arglist__7495){
var v = cljs.core.first(arglist__7495);
var p__7405 = cljs.core.rest(arglist__7495);
return G__7493__delegate(v,p__7405);
});
G__7493.cljs$core$IFn$_invoke$arity$variadic = G__7493__delegate;
return G__7493;
})()
;})(map__7403,map__7403__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__7401,map__7401__$1,widgets))
;
var ocr_7408 = cljs.core.get.call(null,entity,"name");
var ocr_7409 = busmaker.web.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_7410 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_7408 === "grass")){
return g.call(null,grass);
} else {
throw cljs.core.match.backtrack;

}
}catch (e7434){if((e7434 instanceof Error)){
var e__6487__auto__ = e7434;
if((e__6487__auto__ === cljs.core.match.backtrack)){
try{if((ocr_7408 === "fast-underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7410,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input);
} else {
throw cljs.core.match.backtrack;

}
}catch (e7489){if((e7489 instanceof Error)){
var e__6487__auto____$1 = e7489;
if((e__6487__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$1;
}
} else {
throw e7489;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7474){if((e7474 instanceof Error)){
var e__6487__auto____$1 = e7474;
if((e__6487__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7410,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7488){if((e7488 instanceof Error)){
var e__6487__auto____$2 = e7488;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$2;
}
} else {
throw e7488;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7475){if((e7475 instanceof Error)){
var e__6487__auto____$2 = e7475;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7410,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7487){if((e7487 instanceof Error)){
var e__6487__auto____$3 = e7487;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$3;
}
} else {
throw e7487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7476){if((e7476 instanceof Error)){
var e__6487__auto____$3 = e7476;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7410,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7486){if((e7486 instanceof Error)){
var e__6487__auto____$4 = e7486;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$4;
}
} else {
throw e7486;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7477){if((e7477 instanceof Error)){
var e__6487__auto____$4 = e7477;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7410,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output);
} else {
throw cljs.core.match.backtrack;

}
}catch (e7485){if((e7485 instanceof Error)){
var e__6487__auto____$5 = e7485;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$5;
}
} else {
throw e7485;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7478){if((e7478 instanceof Error)){
var e__6487__auto____$5 = e7478;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7410,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7484){if((e7484 instanceof Error)){
var e__6487__auto____$6 = e7484;
if((e__6487__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$6;
}
} else {
throw e7484;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7479){if((e7479 instanceof Error)){
var e__6487__auto____$6 = e7479;
if((e__6487__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7410,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7483){if((e7483 instanceof Error)){
var e__6487__auto____$7 = e7483;
if((e__6487__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$7;
}
} else {
throw e7483;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7480){if((e7480 instanceof Error)){
var e__6487__auto____$7 = e7480;
if((e__6487__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7410,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7482){if((e7482 instanceof Error)){
var e__6487__auto____$8 = e7482;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$8;
}
} else {
throw e7482;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7481){if((e7481 instanceof Error)){
var e__6487__auto____$8 = e7481;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$8;
}
} else {
throw e7481;

}
}} else {
throw e__6487__auto____$7;
}
} else {
throw e7480;

}
}} else {
throw e__6487__auto____$6;
}
} else {
throw e7479;

}
}} else {
throw e__6487__auto____$5;
}
} else {
throw e7478;

}
}} else {
throw e__6487__auto____$4;
}
} else {
throw e7477;

}
}} else {
throw e__6487__auto____$3;
}
} else {
throw e7476;

}
}} else {
throw e__6487__auto____$2;
}
} else {
throw e7475;

}
}} else {
throw e__6487__auto____$1;
}
} else {
throw e7474;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7435){if((e7435 instanceof Error)){
var e__6487__auto____$1 = e7435;
if((e__6487__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "fast-transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_7410 === null)){
return g.call(null,transport_belt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e7473){if((e7473 instanceof Error)){
var e__6487__auto____$2 = e7473;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$2;
}
} else {
throw e7473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7466){if((e7466 instanceof Error)){
var e__6487__auto____$2 = e7466;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_7410 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7472){if((e7472 instanceof Error)){
var e__6487__auto____$3 = e7472;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$3;
}
} else {
throw e7472;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7467){if((e7467 instanceof Error)){
var e__6487__auto____$3 = e7467;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_7410 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7471){if((e7471 instanceof Error)){
var e__6487__auto____$4 = e7471;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$4;
}
} else {
throw e7471;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7468){if((e7468 instanceof Error)){
var e__6487__auto____$4 = e7468;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_7410 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7470){if((e7470 instanceof Error)){
var e__6487__auto____$5 = e7470;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$5;
}
} else {
throw e7470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7469){if((e7469 instanceof Error)){
var e__6487__auto____$5 = e7469;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$5;
}
} else {
throw e7469;

}
}} else {
throw e__6487__auto____$4;
}
} else {
throw e7468;

}
}} else {
throw e__6487__auto____$3;
}
} else {
throw e7467;

}
}} else {
throw e__6487__auto____$2;
}
} else {
throw e7466;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7436){if((e7436 instanceof Error)){
var e__6487__auto____$2 = e7436;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "medium-electric-pole")){
return g.call(null,electrical_pole);
} else {
throw cljs.core.match.backtrack;

}
}catch (e7437){if((e7437 instanceof Error)){
var e__6487__auto____$3 = e7437;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "pipe")){
return g.call(null,pipe);
} else {
throw cljs.core.match.backtrack;

}
}catch (e7438){if((e7438 instanceof Error)){
var e__6487__auto____$4 = e7438;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7464){if((e7464 instanceof Error)){
var e__6487__auto____$5 = e7464;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7465){if((e7465 instanceof Error)){
var e__6487__auto____$6 = e7465;
if((e__6487__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$6;
}
} else {
throw e7465;

}
}} else {
throw e__6487__auto____$5;
}
} else {
throw e7464;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7439){if((e7439 instanceof Error)){
var e__6487__auto____$5 = e7439;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "assembling-machine-2")){
return g.call(null,assembling_machine,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7440){if((e7440 instanceof Error)){
var e__6487__auto____$6 = e7440;
if((e__6487__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "fast-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_7410 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7463){if((e7463 instanceof Error)){
var e__6487__auto____$7 = e7463;
if((e__6487__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$7;
}
} else {
throw e7463;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7456){if((e7456 instanceof Error)){
var e__6487__auto____$7 = e7456;
if((e__6487__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_7410 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7462){if((e7462 instanceof Error)){
var e__6487__auto____$8 = e7462;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$8;
}
} else {
throw e7462;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7457){if((e7457 instanceof Error)){
var e__6487__auto____$8 = e7457;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_7410 === null)){
return g.call(null,inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e7461){if((e7461 instanceof Error)){
var e__6487__auto____$9 = e7461;
if((e__6487__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$9;
}
} else {
throw e7461;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7458){if((e7458 instanceof Error)){
var e__6487__auto____$9 = e7458;
if((e__6487__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_7410 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7460){if((e7460 instanceof Error)){
var e__6487__auto____$10 = e7460;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$10;
}
} else {
throw e7460;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7459){if((e7459 instanceof Error)){
var e__6487__auto____$10 = e7459;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$10;
}
} else {
throw e7459;

}
}} else {
throw e__6487__auto____$9;
}
} else {
throw e7458;

}
}} else {
throw e__6487__auto____$8;
}
} else {
throw e7457;

}
}} else {
throw e__6487__auto____$7;
}
} else {
throw e7456;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7441){if((e7441 instanceof Error)){
var e__6487__auto____$7 = e7441;
if((e__6487__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_7410 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7455){if((e7455 instanceof Error)){
var e__6487__auto____$8 = e7455;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$8;
}
} else {
throw e7455;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7448){if((e7448 instanceof Error)){
var e__6487__auto____$8 = e7448;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_7410 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7454){if((e7454 instanceof Error)){
var e__6487__auto____$9 = e7454;
if((e__6487__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$9;
}
} else {
throw e7454;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7449){if((e7449 instanceof Error)){
var e__6487__auto____$9 = e7449;
if((e__6487__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_7410 === null)){
return g.call(null,long_handed_inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e7453){if((e7453 instanceof Error)){
var e__6487__auto____$10 = e7453;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$10;
}
} else {
throw e7453;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7450){if((e7450 instanceof Error)){
var e__6487__auto____$10 = e7450;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7409,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_7410 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7452){if((e7452 instanceof Error)){
var e__6487__auto____$11 = e7452;
if((e__6487__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$11;
}
} else {
throw e7452;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7451){if((e7451 instanceof Error)){
var e__6487__auto____$11 = e7451;
if((e__6487__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$11;
}
} else {
throw e7451;

}
}} else {
throw e__6487__auto____$10;
}
} else {
throw e7450;

}
}} else {
throw e__6487__auto____$9;
}
} else {
throw e7449;

}
}} else {
throw e__6487__auto____$8;
}
} else {
throw e7448;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7442){if((e7442 instanceof Error)){
var e__6487__auto____$8 = e7442;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "chemical-plant")){
return g.call(null,chemical_plant,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7443){if((e7443 instanceof Error)){
var e__6487__auto____$9 = e7443;
if((e__6487__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "oil-refinery")){
return g.call(null,oil_refinery,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-32),(-32)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7444){if((e7444 instanceof Error)){
var e__6487__auto____$10 = e7444;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "electric-mining-drill")){
return c.call(null,"x");
} else {
throw cljs.core.match.backtrack;

}
}catch (e7445){if((e7445 instanceof Error)){
var e__6487__auto____$11 = e7445;
if((e__6487__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "electric-furnace")){
return g.call(null,furnace,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7446){if((e7446 instanceof Error)){
var e__6487__auto____$12 = e7446;
if((e__6487__auto____$12 === cljs.core.match.backtrack)){
try{if((ocr_7408 === "fast-splitter")){
return g.call(null,splitter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e7447){if((e7447 instanceof Error)){
var e__6487__auto____$13 = e7447;
if((e__6487__auto____$13 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_7408)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_7409)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_7410)].join('')));
} else {
throw e__6487__auto____$13;
}
} else {
throw e7447;

}
}} else {
throw e__6487__auto____$12;
}
} else {
throw e7446;

}
}} else {
throw e__6487__auto____$11;
}
} else {
throw e7445;

}
}} else {
throw e__6487__auto____$10;
}
} else {
throw e7444;

}
}} else {
throw e__6487__auto____$9;
}
} else {
throw e7443;

}
}} else {
throw e__6487__auto____$8;
}
} else {
throw e7442;

}
}} else {
throw e__6487__auto____$7;
}
} else {
throw e7441;

}
}} else {
throw e__6487__auto____$6;
}
} else {
throw e7440;

}
}} else {
throw e__6487__auto____$5;
}
} else {
throw e7439;

}
}} else {
throw e__6487__auto____$4;
}
} else {
throw e7438;

}
}} else {
throw e__6487__auto____$3;
}
} else {
throw e7437;

}
}} else {
throw e__6487__auto____$2;
}
} else {
throw e7436;

}
}} else {
throw e__6487__auto____$1;
}
} else {
throw e7435;

}
}} else {
throw e__6487__auto__;
}
} else {
throw e7434;

}
}});

busmaker.web.cell.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
busmaker.web.cell.cljs$lang$applyTo = (function (seq7395){
var G__7396 = cljs.core.first.call(null,seq7395);
var seq7395__$1 = cljs.core.next.call(null,seq7395);
var G__7397 = cljs.core.first.call(null,seq7395__$1);
var seq7395__$2 = cljs.core.next.call(null,seq7395__$1);
var G__7398 = cljs.core.first.call(null,seq7395__$2);
var seq7395__$3 = cljs.core.next.call(null,seq7395__$2);
var G__7399 = cljs.core.first.call(null,seq7395__$3);
var seq7395__$4 = cljs.core.next.call(null,seq7395__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7396,G__7397,G__7398,G__7399,seq7395__$4);
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

var map__7496 = cljs.core.deref.call(null,drag);
var map__7496__$1 = ((((!((map__7496 == null)))?(((((map__7496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7496):map__7496);
var x = cljs.core.get.call(null,map__7496__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__7496__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.reset_BANG_.call(null,drag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true], null));
});})(drag))
);

rum.core.ref.call(null,state,"svg").addEventListener("mousemove",((function (drag){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__7498 = cljs.core.deref.call(null,drag);
var map__7498__$1 = ((((!((map__7498 == null)))?(((((map__7498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7498):map__7498);
var x = cljs.core.get.call(null,map__7498__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__7498__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__7498__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__7498__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__7498__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__7498__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
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
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__7500_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__7500_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__7500_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
return React.createElement("svg",({"xmlns": "http://www.w3.org/2000/svg", "viewBox": ["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))].join(''), "ref": "svg", "className": "canvas"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__7501(s__7502){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__7502__$1 = s__7502;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__7502__$1);
if(temp__5457__auto__){
var s__7502__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7502__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__7502__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__7504 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__7503 = (0);
while(true){
if((i__7503 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__7503);
cljs.core.chunk_append.call(null,b__7504,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (i__7503,y,c__4322__auto__,size__4323__auto__,b__7504,s__7502__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__7501_$_iter__7505(s__7506){
return (new cljs.core.LazySeq(null,((function (i__7503,y,c__4322__auto__,size__4323__auto__,b__7504,s__7502__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__7506__$1 = s__7506;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__7506__$1);
if(temp__5457__auto____$1){
var s__7506__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7506__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__7506__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__7508 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__7507 = (0);
while(true){
if((i__7507 < size__4323__auto____$1)){
var x = cljs.core._nth.call(null,c__4322__auto____$1,i__7507);
cljs.core.chunk_append.call(null,b__7508,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__7513 = (i__7507 + (1));
i__7507 = G__7513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7508),busmaker$web$iter__7501_$_iter__7505.call(null,cljs.core.chunk_rest.call(null,s__7506__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7508),null);
}
} else {
var x = cljs.core.first.call(null,s__7506__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__7501_$_iter__7505.call(null,cljs.core.rest.call(null,s__7506__$2)));
}
} else {
return null;
}
break;
}
});})(i__7503,y,c__4322__auto__,size__4323__auto__,b__7504,s__7502__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(i__7503,y,c__4322__auto__,size__4323__auto__,b__7504,s__7502__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())));

var G__7514 = (i__7503 + (1));
i__7503 = G__7514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7504),busmaker$web$iter__7501.call(null,cljs.core.chunk_rest.call(null,s__7502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7504),null);
}
} else {
var y = cljs.core.first.call(null,s__7502__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (y,s__7502__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__7501_$_iter__7509(s__7510){
return (new cljs.core.LazySeq(null,((function (y,s__7502__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__7510__$1 = s__7510;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__7510__$1);
if(temp__5457__auto____$1){
var s__7510__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7510__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__7510__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__7512 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__7511 = (0);
while(true){
if((i__7511 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__7511);
cljs.core.chunk_append.call(null,b__7512,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__7515 = (i__7511 + (1));
i__7511 = G__7515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7512),busmaker$web$iter__7501_$_iter__7509.call(null,cljs.core.chunk_rest.call(null,s__7510__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7512),null);
}
} else {
var x = cljs.core.first.call(null,s__7510__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__7501_$_iter__7509.call(null,cljs.core.rest.call(null,s__7510__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__7502__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(y,s__7502__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())),busmaker$web$iter__7501.call(null,cljs.core.rest.call(null,s__7502__$2)));
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
