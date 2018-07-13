// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.web');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.core.match');
busmaker.web.direction = (function busmaker$web$direction(d){
var G__8613 = d;
switch (G__8613) {
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
var len__4531__auto___8710 = arguments.length;
var i__4532__auto___8711 = (0);
while(true){
if((i__4532__auto___8711 < len__4531__auto___8710)){
args__4534__auto__.push((arguments[i__4532__auto___8711]));

var G__8712 = (i__4532__auto___8711 + (1));
i__4532__auto___8711 = G__8712;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic = (function (state,entity,x,y,p__8620){
var map__8621 = p__8620;
var map__8621__$1 = ((((!((map__8621 == null)))?(((((map__8621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8621):map__8621);
var widgets = cljs.core.get.call(null,map__8621__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));
var map__8623 = widgets;
var map__8623__$1 = ((((!((map__8623 == null)))?(((((map__8623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8623):map__8623);
var furnace = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"furnace","furnace",-1572266656));
var underground_belt_input = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
var transport_belt = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
var long_handed_inserter = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
var underground_belt_output = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
var pipe = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"pipe","pipe",336575849));
var inserter = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
var underground_pipe = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016));
var assembling_machine = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
var oil_refinery = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
var electrical_pole = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
var splitter = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"splitter","splitter",-1246750412));
var chemical_plant = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940));
var grass = cljs.core.get.call(null,map__8623__$1,new cljs.core.Keyword(null,"grass","grass",1213050421));
var c = ((function (map__8623,map__8623__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__8621,map__8621__$1,widgets){
return (function (v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * y)),")"].join('')], null),v], null);
});})(map__8623,map__8623__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__8621,map__8621__$1,widgets))
;
var g = ((function (map__8623,map__8623__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8621,map__8621__$1,widgets){
return (function() { 
var G__8713__delegate = function (v,p__8625){
var map__8626 = p__8625;
var map__8626__$1 = ((((!((map__8626 == null)))?(((((map__8626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8626):map__8626);
var rotate = cljs.core.get.call(null,map__8626__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var translate = cljs.core.get.call(null,map__8626__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (map__8626,map__8626__$1,rotate,translate,map__8623,map__8623__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8621,map__8621__$1,widgets){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(map__8626,map__8626__$1,rotate,translate,map__8623,map__8623__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8621,map__8621__$1,widgets))
,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1([" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * (y - (1)))),")"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(translate)?[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(1))),")"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(rotate)?[" rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotate)," 8 8)"].join(''):null))].join('')], null),v], null);
};
var G__8713 = function (v,var_args){
var p__8625 = null;
if (arguments.length > 1) {
var G__8714__i = 0, G__8714__a = new Array(arguments.length -  1);
while (G__8714__i < G__8714__a.length) {G__8714__a[G__8714__i] = arguments[G__8714__i + 1]; ++G__8714__i;}
  p__8625 = new cljs.core.IndexedSeq(G__8714__a,0,null);
} 
return G__8713__delegate.call(this,v,p__8625);};
G__8713.cljs$lang$maxFixedArity = 1;
G__8713.cljs$lang$applyTo = (function (arglist__8715){
var v = cljs.core.first(arglist__8715);
var p__8625 = cljs.core.rest(arglist__8715);
return G__8713__delegate(v,p__8625);
});
G__8713.cljs$core$IFn$_invoke$arity$variadic = G__8713__delegate;
return G__8713;
})()
;})(map__8623,map__8623__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__8621,map__8621__$1,widgets))
;
var ocr_8628 = cljs.core.get.call(null,entity,"name");
var ocr_8629 = busmaker.web.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_8630 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_8628 === "grass")){
return g.call(null,grass);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8654){if((e8654 instanceof Error)){
var e__7155__auto__ = e8654;
if((e__7155__auto__ === cljs.core.match.backtrack)){
try{if((ocr_8628 === "fast-underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8630,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8709){if((e8709 instanceof Error)){
var e__7155__auto____$1 = e8709;
if((e__7155__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$1;
}
} else {
throw e8709;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8694){if((e8694 instanceof Error)){
var e__7155__auto____$1 = e8694;
if((e__7155__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8630,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8708){if((e8708 instanceof Error)){
var e__7155__auto____$2 = e8708;
if((e__7155__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$2;
}
} else {
throw e8708;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8695){if((e8695 instanceof Error)){
var e__7155__auto____$2 = e8695;
if((e__7155__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8630,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8707){if((e8707 instanceof Error)){
var e__7155__auto____$3 = e8707;
if((e__7155__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$3;
}
} else {
throw e8707;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8696){if((e8696 instanceof Error)){
var e__7155__auto____$3 = e8696;
if((e__7155__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8630,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8706){if((e8706 instanceof Error)){
var e__7155__auto____$4 = e8706;
if((e__7155__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$4;
}
} else {
throw e8706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8697){if((e8697 instanceof Error)){
var e__7155__auto____$4 = e8697;
if((e__7155__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8630,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8705){if((e8705 instanceof Error)){
var e__7155__auto____$5 = e8705;
if((e__7155__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$5;
}
} else {
throw e8705;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8698){if((e8698 instanceof Error)){
var e__7155__auto____$5 = e8698;
if((e__7155__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8630,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8704){if((e8704 instanceof Error)){
var e__7155__auto____$6 = e8704;
if((e__7155__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$6;
}
} else {
throw e8704;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8699){if((e8699 instanceof Error)){
var e__7155__auto____$6 = e8699;
if((e__7155__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8630,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8703){if((e8703 instanceof Error)){
var e__7155__auto____$7 = e8703;
if((e__7155__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$7;
}
} else {
throw e8703;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8700){if((e8700 instanceof Error)){
var e__7155__auto____$7 = e8700;
if((e__7155__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8630,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8702){if((e8702 instanceof Error)){
var e__7155__auto____$8 = e8702;
if((e__7155__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$8;
}
} else {
throw e8702;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8701){if((e8701 instanceof Error)){
var e__7155__auto____$8 = e8701;
if((e__7155__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$8;
}
} else {
throw e8701;

}
}} else {
throw e__7155__auto____$7;
}
} else {
throw e8700;

}
}} else {
throw e__7155__auto____$6;
}
} else {
throw e8699;

}
}} else {
throw e__7155__auto____$5;
}
} else {
throw e8698;

}
}} else {
throw e__7155__auto____$4;
}
} else {
throw e8697;

}
}} else {
throw e__7155__auto____$3;
}
} else {
throw e8696;

}
}} else {
throw e__7155__auto____$2;
}
} else {
throw e8695;

}
}} else {
throw e__7155__auto____$1;
}
} else {
throw e8694;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8655){if((e8655 instanceof Error)){
var e__7155__auto____$1 = e8655;
if((e__7155__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "fast-transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8630 === null)){
return g.call(null,transport_belt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8693){if((e8693 instanceof Error)){
var e__7155__auto____$2 = e8693;
if((e__7155__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$2;
}
} else {
throw e8693;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8686){if((e8686 instanceof Error)){
var e__7155__auto____$2 = e8686;
if((e__7155__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8630 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8692){if((e8692 instanceof Error)){
var e__7155__auto____$3 = e8692;
if((e__7155__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$3;
}
} else {
throw e8692;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8687){if((e8687 instanceof Error)){
var e__7155__auto____$3 = e8687;
if((e__7155__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8630 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8691){if((e8691 instanceof Error)){
var e__7155__auto____$4 = e8691;
if((e__7155__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$4;
}
} else {
throw e8691;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8688){if((e8688 instanceof Error)){
var e__7155__auto____$4 = e8688;
if((e__7155__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8630 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8690){if((e8690 instanceof Error)){
var e__7155__auto____$5 = e8690;
if((e__7155__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$5;
}
} else {
throw e8690;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8689){if((e8689 instanceof Error)){
var e__7155__auto____$5 = e8689;
if((e__7155__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$5;
}
} else {
throw e8689;

}
}} else {
throw e__7155__auto____$4;
}
} else {
throw e8688;

}
}} else {
throw e__7155__auto____$3;
}
} else {
throw e8687;

}
}} else {
throw e__7155__auto____$2;
}
} else {
throw e8686;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8656){if((e8656 instanceof Error)){
var e__7155__auto____$2 = e8656;
if((e__7155__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "medium-electric-pole")){
return g.call(null,electrical_pole);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8657){if((e8657 instanceof Error)){
var e__7155__auto____$3 = e8657;
if((e__7155__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "pipe")){
return g.call(null,pipe);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8658){if((e8658 instanceof Error)){
var e__7155__auto____$4 = e8658;
if((e__7155__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8684){if((e8684 instanceof Error)){
var e__7155__auto____$5 = e8684;
if((e__7155__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8685){if((e8685 instanceof Error)){
var e__7155__auto____$6 = e8685;
if((e__7155__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$6;
}
} else {
throw e8685;

}
}} else {
throw e__7155__auto____$5;
}
} else {
throw e8684;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8659){if((e8659 instanceof Error)){
var e__7155__auto____$5 = e8659;
if((e__7155__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "assembling-machine-2")){
return g.call(null,assembling_machine,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8660){if((e8660 instanceof Error)){
var e__7155__auto____$6 = e8660;
if((e__7155__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "fast-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8630 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8683){if((e8683 instanceof Error)){
var e__7155__auto____$7 = e8683;
if((e__7155__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$7;
}
} else {
throw e8683;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8676){if((e8676 instanceof Error)){
var e__7155__auto____$7 = e8676;
if((e__7155__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8630 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8682){if((e8682 instanceof Error)){
var e__7155__auto____$8 = e8682;
if((e__7155__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$8;
}
} else {
throw e8682;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8677){if((e8677 instanceof Error)){
var e__7155__auto____$8 = e8677;
if((e__7155__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8630 === null)){
return g.call(null,inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8681){if((e8681 instanceof Error)){
var e__7155__auto____$9 = e8681;
if((e__7155__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$9;
}
} else {
throw e8681;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8678){if((e8678 instanceof Error)){
var e__7155__auto____$9 = e8678;
if((e__7155__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8630 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8680){if((e8680 instanceof Error)){
var e__7155__auto____$10 = e8680;
if((e__7155__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$10;
}
} else {
throw e8680;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8679){if((e8679 instanceof Error)){
var e__7155__auto____$10 = e8679;
if((e__7155__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$10;
}
} else {
throw e8679;

}
}} else {
throw e__7155__auto____$9;
}
} else {
throw e8678;

}
}} else {
throw e__7155__auto____$8;
}
} else {
throw e8677;

}
}} else {
throw e__7155__auto____$7;
}
} else {
throw e8676;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8661){if((e8661 instanceof Error)){
var e__7155__auto____$7 = e8661;
if((e__7155__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8630 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8675){if((e8675 instanceof Error)){
var e__7155__auto____$8 = e8675;
if((e__7155__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$8;
}
} else {
throw e8675;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8668){if((e8668 instanceof Error)){
var e__7155__auto____$8 = e8668;
if((e__7155__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8630 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8674){if((e8674 instanceof Error)){
var e__7155__auto____$9 = e8674;
if((e__7155__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$9;
}
} else {
throw e8674;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8669){if((e8669 instanceof Error)){
var e__7155__auto____$9 = e8669;
if((e__7155__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8630 === null)){
return g.call(null,long_handed_inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8673){if((e8673 instanceof Error)){
var e__7155__auto____$10 = e8673;
if((e__7155__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$10;
}
} else {
throw e8673;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8670){if((e8670 instanceof Error)){
var e__7155__auto____$10 = e8670;
if((e__7155__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8629,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8630 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8672){if((e8672 instanceof Error)){
var e__7155__auto____$11 = e8672;
if((e__7155__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$11;
}
} else {
throw e8672;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8671){if((e8671 instanceof Error)){
var e__7155__auto____$11 = e8671;
if((e__7155__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7155__auto____$11;
}
} else {
throw e8671;

}
}} else {
throw e__7155__auto____$10;
}
} else {
throw e8670;

}
}} else {
throw e__7155__auto____$9;
}
} else {
throw e8669;

}
}} else {
throw e__7155__auto____$8;
}
} else {
throw e8668;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8662){if((e8662 instanceof Error)){
var e__7155__auto____$8 = e8662;
if((e__7155__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "chemical-plant")){
return g.call(null,chemical_plant,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8663){if((e8663 instanceof Error)){
var e__7155__auto____$9 = e8663;
if((e__7155__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "oil-refinery")){
return g.call(null,oil_refinery,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-32),(-32)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8664){if((e8664 instanceof Error)){
var e__7155__auto____$10 = e8664;
if((e__7155__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "electric-mining-drill")){
return c.call(null,"x");
} else {
throw cljs.core.match.backtrack;

}
}catch (e8665){if((e8665 instanceof Error)){
var e__7155__auto____$11 = e8665;
if((e__7155__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "electric-furnace")){
return g.call(null,furnace,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8666){if((e8666 instanceof Error)){
var e__7155__auto____$12 = e8666;
if((e__7155__auto____$12 === cljs.core.match.backtrack)){
try{if((ocr_8628 === "fast-splitter")){
return g.call(null,splitter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e8667){if((e8667 instanceof Error)){
var e__7155__auto____$13 = e8667;
if((e__7155__auto____$13 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8628)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8629)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8630)].join('')));
} else {
throw e__7155__auto____$13;
}
} else {
throw e8667;

}
}} else {
throw e__7155__auto____$12;
}
} else {
throw e8666;

}
}} else {
throw e__7155__auto____$11;
}
} else {
throw e8665;

}
}} else {
throw e__7155__auto____$10;
}
} else {
throw e8664;

}
}} else {
throw e__7155__auto____$9;
}
} else {
throw e8663;

}
}} else {
throw e__7155__auto____$8;
}
} else {
throw e8662;

}
}} else {
throw e__7155__auto____$7;
}
} else {
throw e8661;

}
}} else {
throw e__7155__auto____$6;
}
} else {
throw e8660;

}
}} else {
throw e__7155__auto____$5;
}
} else {
throw e8659;

}
}} else {
throw e__7155__auto____$4;
}
} else {
throw e8658;

}
}} else {
throw e__7155__auto____$3;
}
} else {
throw e8657;

}
}} else {
throw e__7155__auto____$2;
}
} else {
throw e8656;

}
}} else {
throw e__7155__auto____$1;
}
} else {
throw e8655;

}
}} else {
throw e__7155__auto__;
}
} else {
throw e8654;

}
}});

busmaker.web.cell.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
busmaker.web.cell.cljs$lang$applyTo = (function (seq8615){
var G__8616 = cljs.core.first.call(null,seq8615);
var seq8615__$1 = cljs.core.next.call(null,seq8615);
var G__8617 = cljs.core.first.call(null,seq8615__$1);
var seq8615__$2 = cljs.core.next.call(null,seq8615__$1);
var G__8618 = cljs.core.first.call(null,seq8615__$2);
var seq8615__$3 = cljs.core.next.call(null,seq8615__$2);
var G__8619 = cljs.core.first.call(null,seq8615__$3);
var seq8615__$4 = cljs.core.next.call(null,seq8615__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8616,G__8617,G__8618,G__8619,seq8615__$4);
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

var map__8716 = cljs.core.deref.call(null,drag);
var map__8716__$1 = ((((!((map__8716 == null)))?(((((map__8716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8716):map__8716);
var x = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.reset_BANG_.call(null,drag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true], null));
});})(drag))
);

rum.core.ref.call(null,state,"svg").addEventListener("mousemove",((function (drag){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__8718 = cljs.core.deref.call(null,drag);
var map__8718__$1 = ((((!((map__8718 == null)))?(((((map__8718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8718):map__8718);
var x = cljs.core.get.call(null,map__8718__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8718__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__8718__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__8718__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__8718__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__8718__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
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
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8720_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__8720_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__8720_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
return React.createElement("svg",({"xmlns": "http://www.w3.org/2000/svg", "viewBox": ["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))].join(''), "ref": "svg", "className": "canvas"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__8721(s__8722){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8722__$1 = s__8722;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8722__$1);
if(temp__5457__auto__){
var s__8722__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8722__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8722__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8724 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8723 = (0);
while(true){
if((i__8723 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__8723);
cljs.core.chunk_append.call(null,b__8724,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (i__8723,y,c__4322__auto__,size__4323__auto__,b__8724,s__8722__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__8721_$_iter__8725(s__8726){
return (new cljs.core.LazySeq(null,((function (i__8723,y,c__4322__auto__,size__4323__auto__,b__8724,s__8722__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8726__$1 = s__8726;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8726__$1);
if(temp__5457__auto____$1){
var s__8726__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8726__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__8726__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__8728 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__8727 = (0);
while(true){
if((i__8727 < size__4323__auto____$1)){
var x = cljs.core._nth.call(null,c__4322__auto____$1,i__8727);
cljs.core.chunk_append.call(null,b__8728,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__8733 = (i__8727 + (1));
i__8727 = G__8733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8728),busmaker$web$iter__8721_$_iter__8725.call(null,cljs.core.chunk_rest.call(null,s__8726__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8728),null);
}
} else {
var x = cljs.core.first.call(null,s__8726__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__8721_$_iter__8725.call(null,cljs.core.rest.call(null,s__8726__$2)));
}
} else {
return null;
}
break;
}
});})(i__8723,y,c__4322__auto__,size__4323__auto__,b__8724,s__8722__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(i__8723,y,c__4322__auto__,size__4323__auto__,b__8724,s__8722__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())));

var G__8734 = (i__8723 + (1));
i__8723 = G__8734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8724),busmaker$web$iter__8721.call(null,cljs.core.chunk_rest.call(null,s__8722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8724),null);
}
} else {
var y = cljs.core.first.call(null,s__8722__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (y,s__8722__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__8721_$_iter__8729(s__8730){
return (new cljs.core.LazySeq(null,((function (y,s__8722__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8730__$1 = s__8730;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8730__$1);
if(temp__5457__auto____$1){
var s__8730__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8730__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8730__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8732 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8731 = (0);
while(true){
if((i__8731 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__8731);
cljs.core.chunk_append.call(null,b__8732,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__8735 = (i__8731 + (1));
i__8731 = G__8735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8732),busmaker$web$iter__8721_$_iter__8729.call(null,cljs.core.chunk_rest.call(null,s__8730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8732),null);
}
} else {
var x = cljs.core.first.call(null,s__8730__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__8721_$_iter__8729.call(null,cljs.core.rest.call(null,s__8730__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__8722__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(y,s__8722__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())),busmaker$web$iter__8721.call(null,cljs.core.rest.call(null,s__8722__$2)));
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
