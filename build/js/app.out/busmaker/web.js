// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.web');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.core.match');
busmaker.web.direction = (function busmaker$web$direction(d){
var G__5066 = d;
switch (G__5066) {
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
var len__4531__auto___5163 = arguments.length;
var i__4532__auto___5164 = (0);
while(true){
if((i__4532__auto___5164 < len__4531__auto___5163)){
args__4534__auto__.push((arguments[i__4532__auto___5164]));

var G__5165 = (i__4532__auto___5164 + (1));
i__4532__auto___5164 = G__5165;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

busmaker.web.cell.cljs$core$IFn$_invoke$arity$variadic = (function (state,entity,x,y,p__5073){
var map__5074 = p__5073;
var map__5074__$1 = ((((!((map__5074 == null)))?(((((map__5074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5074):map__5074);
var widgets = cljs.core.get.call(null,map__5074__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));
var map__5076 = widgets;
var map__5076__$1 = ((((!((map__5076 == null)))?(((((map__5076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5076):map__5076);
var furnace = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"furnace","furnace",-1572266656));
var underground_belt_input = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
var transport_belt = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
var long_handed_inserter = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
var underground_belt_output = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
var pipe = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"pipe","pipe",336575849));
var inserter = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
var underground_pipe = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016));
var assembling_machine = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
var oil_refinery = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
var electrical_pole = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
var splitter = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"splitter","splitter",-1246750412));
var chemical_plant = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940));
var grass = cljs.core.get.call(null,map__5076__$1,new cljs.core.Keyword(null,"grass","grass",1213050421));
var c = ((function (map__5076,map__5076__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__5074,map__5074__$1,widgets){
return (function (v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * y)),")"].join('')], null),v], null);
});})(map__5076,map__5076__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,map__5074,map__5074__$1,widgets))
;
var g = ((function (map__5076,map__5076__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__5074,map__5074__$1,widgets){
return (function() { 
var G__5166__delegate = function (v,p__5078){
var map__5079 = p__5078;
var map__5079__$1 = ((((!((map__5079 == null)))?(((((map__5079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5079):map__5079);
var rotate = cljs.core.get.call(null,map__5079__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var translate = cljs.core.get.call(null,map__5079__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (map__5079,map__5079__$1,rotate,translate,map__5076,map__5076__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__5074,map__5074__$1,widgets){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(map__5079,map__5079__$1,rotate,translate,map__5076,map__5076__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__5074,map__5074__$1,widgets))
,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1([" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * (y - (1)))),")"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(translate)?[" translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(translate.call(null,(1))),")"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(rotate)?[" rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotate)," 8 8)"].join(''):null))].join('')], null),v], null);
};
var G__5166 = function (v,var_args){
var p__5078 = null;
if (arguments.length > 1) {
var G__5167__i = 0, G__5167__a = new Array(arguments.length -  1);
while (G__5167__i < G__5167__a.length) {G__5167__a[G__5167__i] = arguments[G__5167__i + 1]; ++G__5167__i;}
  p__5078 = new cljs.core.IndexedSeq(G__5167__a,0,null);
} 
return G__5166__delegate.call(this,v,p__5078);};
G__5166.cljs$lang$maxFixedArity = 1;
G__5166.cljs$lang$applyTo = (function (arglist__5168){
var v = cljs.core.first(arglist__5168);
var p__5078 = cljs.core.rest(arglist__5168);
return G__5166__delegate(v,p__5078);
});
G__5166.cljs$core$IFn$_invoke$arity$variadic = G__5166__delegate;
return G__5166;
})()
;})(map__5076,map__5076__$1,furnace,underground_belt_input,transport_belt,long_handed_inserter,underground_belt_output,pipe,inserter,underground_pipe,assembling_machine,oil_refinery,electrical_pole,splitter,chemical_plant,grass,c,map__5074,map__5074__$1,widgets))
;
var ocr_5081 = cljs.core.get.call(null,entity,"name");
var ocr_5082 = busmaker.web.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_5083 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_5081 === "grass")){
return g.call(null,grass);
} else {
throw cljs.core.match.backtrack;

}
}catch (e5107){if((e5107 instanceof Error)){
var e__3571__auto__ = e5107;
if((e__3571__auto__ === cljs.core.match.backtrack)){
try{if((ocr_5081 === "fast-underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5083,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input);
} else {
throw cljs.core.match.backtrack;

}
}catch (e5162){if((e5162 instanceof Error)){
var e__3571__auto____$1 = e5162;
if((e__3571__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$1;
}
} else {
throw e5162;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5147){if((e5147 instanceof Error)){
var e__3571__auto____$1 = e5147;
if((e__3571__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5083,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5161){if((e5161 instanceof Error)){
var e__3571__auto____$2 = e5161;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$2;
}
} else {
throw e5161;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5148){if((e5148 instanceof Error)){
var e__3571__auto____$2 = e5148;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5083,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5160){if((e5160 instanceof Error)){
var e__3571__auto____$3 = e5160;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$3;
}
} else {
throw e5160;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5149){if((e5149 instanceof Error)){
var e__3571__auto____$3 = e5149;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5083,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,underground_belt_input,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5159){if((e5159 instanceof Error)){
var e__3571__auto____$4 = e5159;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$4;
}
} else {
throw e5159;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5150){if((e5150 instanceof Error)){
var e__3571__auto____$4 = e5150;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5083,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output);
} else {
throw cljs.core.match.backtrack;

}
}catch (e5158){if((e5158 instanceof Error)){
var e__3571__auto____$5 = e5158;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$5;
}
} else {
throw e5158;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5151){if((e5151 instanceof Error)){
var e__3571__auto____$5 = e5151;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5083,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5157){if((e5157 instanceof Error)){
var e__3571__auto____$6 = e5157;
if((e__3571__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$6;
}
} else {
throw e5157;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5152){if((e5152 instanceof Error)){
var e__3571__auto____$6 = e5152;
if((e__3571__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5083,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5156){if((e5156 instanceof Error)){
var e__3571__auto____$7 = e5156;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$7;
}
} else {
throw e5156;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5153){if((e5153 instanceof Error)){
var e__3571__auto____$7 = e5153;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5083,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,underground_belt_output,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5155){if((e5155 instanceof Error)){
var e__3571__auto____$8 = e5155;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$8;
}
} else {
throw e5155;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5154){if((e5154 instanceof Error)){
var e__3571__auto____$8 = e5154;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$8;
}
} else {
throw e5154;

}
}} else {
throw e__3571__auto____$7;
}
} else {
throw e5153;

}
}} else {
throw e__3571__auto____$6;
}
} else {
throw e5152;

}
}} else {
throw e__3571__auto____$5;
}
} else {
throw e5151;

}
}} else {
throw e__3571__auto____$4;
}
} else {
throw e5150;

}
}} else {
throw e__3571__auto____$3;
}
} else {
throw e5149;

}
}} else {
throw e__3571__auto____$2;
}
} else {
throw e5148;

}
}} else {
throw e__3571__auto____$1;
}
} else {
throw e5147;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5108){if((e5108 instanceof Error)){
var e__3571__auto____$1 = e5108;
if((e__3571__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "fast-transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_5083 === null)){
return g.call(null,transport_belt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e5146){if((e5146 instanceof Error)){
var e__3571__auto____$2 = e5146;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$2;
}
} else {
throw e5146;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5139){if((e5139 instanceof Error)){
var e__3571__auto____$2 = e5139;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_5083 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5145){if((e5145 instanceof Error)){
var e__3571__auto____$3 = e5145;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$3;
}
} else {
throw e5145;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5140){if((e5140 instanceof Error)){
var e__3571__auto____$3 = e5140;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_5083 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5144){if((e5144 instanceof Error)){
var e__3571__auto____$4 = e5144;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$4;
}
} else {
throw e5144;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5141){if((e5141 instanceof Error)){
var e__3571__auto____$4 = e5141;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_5083 === null)){
return g.call(null,transport_belt,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5143){if((e5143 instanceof Error)){
var e__3571__auto____$5 = e5143;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$5;
}
} else {
throw e5143;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5142){if((e5142 instanceof Error)){
var e__3571__auto____$5 = e5142;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$5;
}
} else {
throw e5142;

}
}} else {
throw e__3571__auto____$4;
}
} else {
throw e5141;

}
}} else {
throw e__3571__auto____$3;
}
} else {
throw e5140;

}
}} else {
throw e__3571__auto____$2;
}
} else {
throw e5139;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5109){if((e5109 instanceof Error)){
var e__3571__auto____$2 = e5109;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "medium-electric-pole")){
return g.call(null,electrical_pole);
} else {
throw cljs.core.match.backtrack;

}
}catch (e5110){if((e5110 instanceof Error)){
var e__3571__auto____$3 = e5110;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "pipe")){
return g.call(null,pipe);
} else {
throw cljs.core.match.backtrack;

}
}catch (e5111){if((e5111 instanceof Error)){
var e__3571__auto____$4 = e5111;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5137){if((e5137 instanceof Error)){
var e__3571__auto____$5 = e5137;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,underground_pipe,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5138){if((e5138 instanceof Error)){
var e__3571__auto____$6 = e5138;
if((e__3571__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$6;
}
} else {
throw e5138;

}
}} else {
throw e__3571__auto____$5;
}
} else {
throw e5137;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5112){if((e5112 instanceof Error)){
var e__3571__auto____$5 = e5112;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "assembling-machine-2")){
return g.call(null,assembling_machine,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e5113){if((e5113 instanceof Error)){
var e__3571__auto____$6 = e5113;
if((e__3571__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "fast-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_5083 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5136){if((e5136 instanceof Error)){
var e__3571__auto____$7 = e5136;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$7;
}
} else {
throw e5136;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5129){if((e5129 instanceof Error)){
var e__3571__auto____$7 = e5129;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_5083 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5135){if((e5135 instanceof Error)){
var e__3571__auto____$8 = e5135;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$8;
}
} else {
throw e5135;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5130){if((e5130 instanceof Error)){
var e__3571__auto____$8 = e5130;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_5083 === null)){
return g.call(null,inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e5134){if((e5134 instanceof Error)){
var e__3571__auto____$9 = e5134;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$9;
}
} else {
throw e5134;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5131){if((e5131 instanceof Error)){
var e__3571__auto____$9 = e5131;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_5083 === null)){
return g.call(null,inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5133){if((e5133 instanceof Error)){
var e__3571__auto____$10 = e5133;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$10;
}
} else {
throw e5133;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5132){if((e5132 instanceof Error)){
var e__3571__auto____$10 = e5132;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$10;
}
} else {
throw e5132;

}
}} else {
throw e__3571__auto____$9;
}
} else {
throw e5131;

}
}} else {
throw e__3571__auto____$8;
}
} else {
throw e5130;

}
}} else {
throw e__3571__auto____$7;
}
} else {
throw e5129;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5114){if((e5114 instanceof Error)){
var e__3571__auto____$7 = e5114;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_5083 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5128){if((e5128 instanceof Error)){
var e__3571__auto____$8 = e5128;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$8;
}
} else {
throw e5128;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5121){if((e5121 instanceof Error)){
var e__3571__auto____$8 = e5121;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_5083 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"-90");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5127){if((e5127 instanceof Error)){
var e__3571__auto____$9 = e5127;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$9;
}
} else {
throw e5127;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5122){if((e5122 instanceof Error)){
var e__3571__auto____$9 = e5122;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_5083 === null)){
return g.call(null,long_handed_inserter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e5126){if((e5126 instanceof Error)){
var e__3571__auto____$10 = e5126;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$10;
}
} else {
throw e5126;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5123){if((e5123 instanceof Error)){
var e__3571__auto____$10 = e5123;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_5082,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_5083 === null)){
return g.call(null,long_handed_inserter,new cljs.core.Keyword(null,"rotate","rotate",152705015),"180");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5125){if((e5125 instanceof Error)){
var e__3571__auto____$11 = e5125;
if((e__3571__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$11;
}
} else {
throw e5125;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5124){if((e5124 instanceof Error)){
var e__3571__auto____$11 = e5124;
if((e__3571__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$11;
}
} else {
throw e5124;

}
}} else {
throw e__3571__auto____$10;
}
} else {
throw e5123;

}
}} else {
throw e__3571__auto____$9;
}
} else {
throw e5122;

}
}} else {
throw e__3571__auto____$8;
}
} else {
throw e5121;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e5115){if((e5115 instanceof Error)){
var e__3571__auto____$8 = e5115;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "chemical-plant")){
return g.call(null,chemical_plant,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e5116){if((e5116 instanceof Error)){
var e__3571__auto____$9 = e5116;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "oil-refinery")){
return g.call(null,oil_refinery,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-32),(-32)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e5117){if((e5117 instanceof Error)){
var e__3571__auto____$10 = e5117;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "electric-mining-drill")){
return c.call(null,"x");
} else {
throw cljs.core.match.backtrack;

}
}catch (e5118){if((e5118 instanceof Error)){
var e__3571__auto____$11 = e5118;
if((e__3571__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "electric-furnace")){
return g.call(null,furnace,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e5119){if((e5119 instanceof Error)){
var e__3571__auto____$12 = e5119;
if((e__3571__auto____$12 === cljs.core.match.backtrack)){
try{if((ocr_5081 === "fast-splitter")){
return g.call(null,splitter);
} else {
throw cljs.core.match.backtrack;

}
}catch (e5120){if((e5120 instanceof Error)){
var e__3571__auto____$13 = e5120;
if((e__3571__auto____$13 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_5081)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_5082)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_5083)].join('')));
} else {
throw e__3571__auto____$13;
}
} else {
throw e5120;

}
}} else {
throw e__3571__auto____$12;
}
} else {
throw e5119;

}
}} else {
throw e__3571__auto____$11;
}
} else {
throw e5118;

}
}} else {
throw e__3571__auto____$10;
}
} else {
throw e5117;

}
}} else {
throw e__3571__auto____$9;
}
} else {
throw e5116;

}
}} else {
throw e__3571__auto____$8;
}
} else {
throw e5115;

}
}} else {
throw e__3571__auto____$7;
}
} else {
throw e5114;

}
}} else {
throw e__3571__auto____$6;
}
} else {
throw e5113;

}
}} else {
throw e__3571__auto____$5;
}
} else {
throw e5112;

}
}} else {
throw e__3571__auto____$4;
}
} else {
throw e5111;

}
}} else {
throw e__3571__auto____$3;
}
} else {
throw e5110;

}
}} else {
throw e__3571__auto____$2;
}
} else {
throw e5109;

}
}} else {
throw e__3571__auto____$1;
}
} else {
throw e5108;

}
}} else {
throw e__3571__auto__;
}
} else {
throw e5107;

}
}});

busmaker.web.cell.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
busmaker.web.cell.cljs$lang$applyTo = (function (seq5068){
var G__5069 = cljs.core.first.call(null,seq5068);
var seq5068__$1 = cljs.core.next.call(null,seq5068);
var G__5070 = cljs.core.first.call(null,seq5068__$1);
var seq5068__$2 = cljs.core.next.call(null,seq5068__$1);
var G__5071 = cljs.core.first.call(null,seq5068__$2);
var seq5068__$3 = cljs.core.next.call(null,seq5068__$2);
var G__5072 = cljs.core.first.call(null,seq5068__$3);
var seq5068__$4 = cljs.core.next.call(null,seq5068__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5069,G__5070,G__5071,G__5072,seq5068__$4);
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

var map__5169 = cljs.core.deref.call(null,drag);
var map__5169__$1 = ((((!((map__5169 == null)))?(((((map__5169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5169):map__5169);
var x = cljs.core.get.call(null,map__5169__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5169__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.reset_BANG_.call(null,drag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true], null));
});})(drag))
);

rum.core.ref.call(null,state,"svg").addEventListener("mousemove",((function (drag){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__5171 = cljs.core.deref.call(null,drag);
var map__5171__$1 = ((((!((map__5171 == null)))?(((((map__5171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5171):map__5171);
var x = cljs.core.get.call(null,map__5171__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5171__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__5171__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__5171__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__5171__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__5171__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
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
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__5173_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__5173_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__5173_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
return React.createElement("svg",({"xmlns": "http://www.w3.org/2000/svg", "viewBox": ["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(busmaker.web.viewport_window))].join(''), "ref": "svg", "className": "canvas"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__5174(s__5175){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__5175__$1 = s__5175;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5175__$1);
if(temp__5457__auto__){
var s__5175__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5175__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5175__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5177 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5176 = (0);
while(true){
if((i__5176 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__5176);
cljs.core.chunk_append.call(null,b__5177,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (i__5176,y,c__4322__auto__,size__4323__auto__,b__5177,s__5175__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__5174_$_iter__5178(s__5179){
return (new cljs.core.LazySeq(null,((function (i__5176,y,c__4322__auto__,size__4323__auto__,b__5177,s__5175__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__5179__$1 = s__5179;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__5179__$1);
if(temp__5457__auto____$1){
var s__5179__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5179__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__5179__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__5181 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__5180 = (0);
while(true){
if((i__5180 < size__4323__auto____$1)){
var x = cljs.core._nth.call(null,c__4322__auto____$1,i__5180);
cljs.core.chunk_append.call(null,b__5181,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__5186 = (i__5180 + (1));
i__5180 = G__5186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5181),busmaker$web$iter__5174_$_iter__5178.call(null,cljs.core.chunk_rest.call(null,s__5179__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5181),null);
}
} else {
var x = cljs.core.first.call(null,s__5179__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__5174_$_iter__5178.call(null,cljs.core.rest.call(null,s__5179__$2)));
}
} else {
return null;
}
break;
}
});})(i__5176,y,c__4322__auto__,size__4323__auto__,b__5177,s__5175__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(i__5176,y,c__4322__auto__,size__4323__auto__,b__5177,s__5175__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())));

var G__5187 = (i__5176 + (1));
i__5176 = G__5187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5177),busmaker$web$iter__5174.call(null,cljs.core.chunk_rest.call(null,s__5175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5177),null);
}
} else {
var y = cljs.core.first.call(null,s__5175__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": y}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = ((function (y,s__5175__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$web$iter__5174_$_iter__5182(s__5183){
return (new cljs.core.LazySeq(null,((function (y,s__5175__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__5183__$1 = s__5183;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__5183__$1);
if(temp__5457__auto____$1){
var s__5183__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5183__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5183__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5185 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5184 = (0);
while(true){
if((i__5184 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5184);
cljs.core.chunk_append.call(null,b__5185,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())));

var G__5188 = (i__5184 + (1));
i__5184 = G__5188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5185),busmaker$web$iter__5174_$_iter__5182.call(null,cljs.core.chunk_rest.call(null,s__5183__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5185),null);
}
} else {
var x = cljs.core.first.call(null,s__5183__$2);
return cljs.core.cons.call(null,React.createElement("g",({"key": x}),sablono.interpreter.interpret.call(null,(function (){var temp__5457__auto____$2 = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(temp__5457__auto____$2)){
var entity = temp__5457__auto____$2;
return busmaker.web.cell.call(null,state,entity,(busmaker.web.margin_x + x),y,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
} else {
return null;
}
})())),busmaker$web$iter__5174_$_iter__5182.call(null,cljs.core.rest.call(null,s__5183__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__5175__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(y,s__5175__$2,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,dx));
})())),busmaker$web$iter__5174.call(null,cljs.core.rest.call(null,s__5175__$2)));
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

//# sourceMappingURL=web.js.map
