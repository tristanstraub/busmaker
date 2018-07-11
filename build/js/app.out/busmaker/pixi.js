// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.pixi');
goog.require('cljs.core');
goog.require('impi.core');
goog.require('rum.core');
goog.require('cljs.core.match');
goog.require('goog.style');
goog.require('goog.dom');
busmaker.pixi.direction = (function busmaker$pixi$direction(d){
var G__8374 = d;
switch (G__8374) {
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
busmaker.pixi.widgets = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"furnace","furnace",-1572266656),new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"pipe","pipe",336575849),new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375),new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679),new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274),new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940),new cljs.core.Keyword(null,"grass","grass",1213050421)],["widgets/furnace.svg","widgets/underground-belt-input.svg","widgets/transport-belt.svg","widgets/long-handed-inserter.svg","widgets/underground-belt-output.svg","widgets/pipe.svg","widgets/inserter.svg","widgets/underground-pipe.svg","widgets/oil-refinery.svg","widgets/assembling-machine.svg","widgets/electrical-pole.svg","widgets/splitter.svg","widgets/chemical-plant.svg","widgets/grass.svg"]);
busmaker.pixi.cell = (function busmaker$pixi$cell(entity,x,y){
var g = (function() { 
var G__8458__delegate = function (v,p__8376){
var map__8377 = p__8376;
var map__8377__$1 = ((((!((map__8377 == null)))?(((((map__8377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8377):map__8377);
var rotate = cljs.core.get.call(null,map__8377__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0));
var translate = cljs.core.get.call(null,map__8377__$1,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","sprite","pixi.object.type/sprite",-1129625685),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((16) * x),((16) * y)], null),translate),new cljs.core.Keyword("pixi.sprite","anchor","pixi.sprite/anchor",-1761208072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844),busmaker.pixi.widgets.call(null,v)], null),new cljs.core.Keyword("pixi.object","rotation","pixi.object/rotation",-1091789503),(Math.PI * (rotate / (180))),new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.event","mouse-over","pixi.event/mouse-over",584256675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),entity], null)], null);
};
var G__8458 = function (v,var_args){
var p__8376 = null;
if (arguments.length > 1) {
var G__8459__i = 0, G__8459__a = new Array(arguments.length -  1);
while (G__8459__i < G__8459__a.length) {G__8459__a[G__8459__i] = arguments[G__8459__i + 1]; ++G__8459__i;}
  p__8376 = new cljs.core.IndexedSeq(G__8459__a,0,null);
} 
return G__8458__delegate.call(this,v,p__8376);};
G__8458.cljs$lang$maxFixedArity = 1;
G__8458.cljs$lang$applyTo = (function (arglist__8460){
var v = cljs.core.first(arglist__8460);
var p__8376 = cljs.core.rest(arglist__8460);
return G__8458__delegate(v,p__8376);
});
G__8458.cljs$core$IFn$_invoke$arity$variadic = G__8458__delegate;
return G__8458;
})()
;
var ocr_8379 = cljs.core.get.call(null,entity,"name");
var ocr_8380 = busmaker.pixi.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_8381 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_8379 === "grass")){
return g.call(null,new cljs.core.Keyword(null,"grass","grass",1213050421));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8403){if((e8403 instanceof Error)){
var e__7468__auto__ = e8403;
if((e__7468__auto__ === cljs.core.match.backtrack)){
try{if((ocr_8379 === "fast-underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8381,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8457){if((e8457 instanceof Error)){
var e__7468__auto____$1 = e8457;
if((e__7468__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$1;
}
} else {
throw e8457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8442){if((e8442 instanceof Error)){
var e__7468__auto____$1 = e8442;
if((e__7468__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8381,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8456){if((e8456 instanceof Error)){
var e__7468__auto____$2 = e8456;
if((e__7468__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$2;
}
} else {
throw e8456;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8443){if((e8443 instanceof Error)){
var e__7468__auto____$2 = e8443;
if((e__7468__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8381,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8455){if((e8455 instanceof Error)){
var e__7468__auto____$3 = e8455;
if((e__7468__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$3;
}
} else {
throw e8455;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8444){if((e8444 instanceof Error)){
var e__7468__auto____$3 = e8444;
if((e__7468__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8381,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8454){if((e8454 instanceof Error)){
var e__7468__auto____$4 = e8454;
if((e__7468__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$4;
}
} else {
throw e8454;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8445){if((e8445 instanceof Error)){
var e__7468__auto____$4 = e8445;
if((e__7468__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8381,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8453){if((e8453 instanceof Error)){
var e__7468__auto____$5 = e8453;
if((e__7468__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$5;
}
} else {
throw e8453;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8446){if((e8446 instanceof Error)){
var e__7468__auto____$5 = e8446;
if((e__7468__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8381,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8452){if((e8452 instanceof Error)){
var e__7468__auto____$6 = e8452;
if((e__7468__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$6;
}
} else {
throw e8452;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8447){if((e8447 instanceof Error)){
var e__7468__auto____$6 = e8447;
if((e__7468__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8381,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8451){if((e8451 instanceof Error)){
var e__7468__auto____$7 = e8451;
if((e__7468__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$7;
}
} else {
throw e8451;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8448){if((e8448 instanceof Error)){
var e__7468__auto____$7 = e8448;
if((e__7468__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8381,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8450){if((e8450 instanceof Error)){
var e__7468__auto____$8 = e8450;
if((e__7468__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$8;
}
} else {
throw e8450;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8449){if((e8449 instanceof Error)){
var e__7468__auto____$8 = e8449;
if((e__7468__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$8;
}
} else {
throw e8449;

}
}} else {
throw e__7468__auto____$7;
}
} else {
throw e8448;

}
}} else {
throw e__7468__auto____$6;
}
} else {
throw e8447;

}
}} else {
throw e__7468__auto____$5;
}
} else {
throw e8446;

}
}} else {
throw e__7468__auto____$4;
}
} else {
throw e8445;

}
}} else {
throw e__7468__auto____$3;
}
} else {
throw e8444;

}
}} else {
throw e__7468__auto____$2;
}
} else {
throw e8443;

}
}} else {
throw e__7468__auto____$1;
}
} else {
throw e8442;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8404){if((e8404 instanceof Error)){
var e__7468__auto____$1 = e8404;
if((e__7468__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "fast-transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8441){if((e8441 instanceof Error)){
var e__7468__auto____$2 = e8441;
if((e__7468__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$2;
}
} else {
throw e8441;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8434){if((e8434 instanceof Error)){
var e__7468__auto____$2 = e8434;
if((e__7468__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8440){if((e8440 instanceof Error)){
var e__7468__auto____$3 = e8440;
if((e__7468__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$3;
}
} else {
throw e8440;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8435){if((e8435 instanceof Error)){
var e__7468__auto____$3 = e8435;
if((e__7468__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8439){if((e8439 instanceof Error)){
var e__7468__auto____$4 = e8439;
if((e__7468__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$4;
}
} else {
throw e8439;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8436){if((e8436 instanceof Error)){
var e__7468__auto____$4 = e8436;
if((e__7468__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8438){if((e8438 instanceof Error)){
var e__7468__auto____$5 = e8438;
if((e__7468__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$5;
}
} else {
throw e8438;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8437){if((e8437 instanceof Error)){
var e__7468__auto____$5 = e8437;
if((e__7468__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$5;
}
} else {
throw e8437;

}
}} else {
throw e__7468__auto____$4;
}
} else {
throw e8436;

}
}} else {
throw e__7468__auto____$3;
}
} else {
throw e8435;

}
}} else {
throw e__7468__auto____$2;
}
} else {
throw e8434;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8405){if((e8405 instanceof Error)){
var e__7468__auto____$2 = e8405;
if((e__7468__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "medium-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8406){if((e8406 instanceof Error)){
var e__7468__auto____$3 = e8406;
if((e__7468__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "pipe")){
return g.call(null,new cljs.core.Keyword(null,"pipe","pipe",336575849));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8407){if((e8407 instanceof Error)){
var e__7468__auto____$4 = e8407;
if((e__7468__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8432){if((e8432 instanceof Error)){
var e__7468__auto____$5 = e8432;
if((e__7468__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8433){if((e8433 instanceof Error)){
var e__7468__auto____$6 = e8433;
if((e__7468__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$6;
}
} else {
throw e8433;

}
}} else {
throw e__7468__auto____$5;
}
} else {
throw e8432;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8408){if((e8408 instanceof Error)){
var e__7468__auto____$5 = e8408;
if((e__7468__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "assembling-machine-2")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8409){if((e8409 instanceof Error)){
var e__7468__auto____$6 = e8409;
if((e__7468__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "fast-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8431){if((e8431 instanceof Error)){
var e__7468__auto____$7 = e8431;
if((e__7468__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$7;
}
} else {
throw e8431;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8424){if((e8424 instanceof Error)){
var e__7468__auto____$7 = e8424;
if((e__7468__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8430){if((e8430 instanceof Error)){
var e__7468__auto____$8 = e8430;
if((e__7468__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$8;
}
} else {
throw e8430;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8425){if((e8425 instanceof Error)){
var e__7468__auto____$8 = e8425;
if((e__7468__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8429){if((e8429 instanceof Error)){
var e__7468__auto____$9 = e8429;
if((e__7468__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$9;
}
} else {
throw e8429;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8426){if((e8426 instanceof Error)){
var e__7468__auto____$9 = e8426;
if((e__7468__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8428){if((e8428 instanceof Error)){
var e__7468__auto____$10 = e8428;
if((e__7468__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$10;
}
} else {
throw e8428;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8427){if((e8427 instanceof Error)){
var e__7468__auto____$10 = e8427;
if((e__7468__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$10;
}
} else {
throw e8427;

}
}} else {
throw e__7468__auto____$9;
}
} else {
throw e8426;

}
}} else {
throw e__7468__auto____$8;
}
} else {
throw e8425;

}
}} else {
throw e__7468__auto____$7;
}
} else {
throw e8424;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8410){if((e8410 instanceof Error)){
var e__7468__auto____$7 = e8410;
if((e__7468__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8423){if((e8423 instanceof Error)){
var e__7468__auto____$8 = e8423;
if((e__7468__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$8;
}
} else {
throw e8423;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8416){if((e8416 instanceof Error)){
var e__7468__auto____$8 = e8416;
if((e__7468__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8422){if((e8422 instanceof Error)){
var e__7468__auto____$9 = e8422;
if((e__7468__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$9;
}
} else {
throw e8422;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8417){if((e8417 instanceof Error)){
var e__7468__auto____$9 = e8417;
if((e__7468__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8421){if((e8421 instanceof Error)){
var e__7468__auto____$10 = e8421;
if((e__7468__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$10;
}
} else {
throw e8421;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8418){if((e8418 instanceof Error)){
var e__7468__auto____$10 = e8418;
if((e__7468__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8380,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8381 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8420){if((e8420 instanceof Error)){
var e__7468__auto____$11 = e8420;
if((e__7468__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$11;
}
} else {
throw e8420;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8419){if((e8419 instanceof Error)){
var e__7468__auto____$11 = e8419;
if((e__7468__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7468__auto____$11;
}
} else {
throw e8419;

}
}} else {
throw e__7468__auto____$10;
}
} else {
throw e8418;

}
}} else {
throw e__7468__auto____$9;
}
} else {
throw e8417;

}
}} else {
throw e__7468__auto____$8;
}
} else {
throw e8416;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8411){if((e8411 instanceof Error)){
var e__7468__auto____$8 = e8411;
if((e__7468__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "chemical-plant")){
return g.call(null,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8412){if((e8412 instanceof Error)){
var e__7468__auto____$9 = e8412;
if((e__7468__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "oil-refinery")){
return g.call(null,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8413){if((e8413 instanceof Error)){
var e__7468__auto____$10 = e8413;
if((e__7468__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "electric-furnace")){
return g.call(null,new cljs.core.Keyword(null,"furnace","furnace",-1572266656),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8414){if((e8414 instanceof Error)){
var e__7468__auto____$11 = e8414;
if((e__7468__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_8379 === "fast-splitter")){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8415){if((e8415 instanceof Error)){
var e__7468__auto____$12 = e8415;
if((e__7468__auto____$12 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8379)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8380)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8381)].join('')));
} else {
throw e__7468__auto____$12;
}
} else {
throw e8415;

}
}} else {
throw e__7468__auto____$11;
}
} else {
throw e8414;

}
}} else {
throw e__7468__auto____$10;
}
} else {
throw e8413;

}
}} else {
throw e__7468__auto____$9;
}
} else {
throw e8412;

}
}} else {
throw e__7468__auto____$8;
}
} else {
throw e8411;

}
}} else {
throw e__7468__auto____$7;
}
} else {
throw e8410;

}
}} else {
throw e__7468__auto____$6;
}
} else {
throw e8409;

}
}} else {
throw e__7468__auto____$5;
}
} else {
throw e8408;

}
}} else {
throw e__7468__auto____$4;
}
} else {
throw e8407;

}
}} else {
throw e__7468__auto____$3;
}
} else {
throw e8406;

}
}} else {
throw e__7468__auto____$2;
}
} else {
throw e8405;

}
}} else {
throw e__7468__auto____$1;
}
} else {
throw e8404;

}
}} else {
throw e__7468__auto__;
}
} else {
throw e8403;

}
}});
busmaker.pixi.margin_x = (2);
busmaker.pixi.viewport_window = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null);
busmaker.pixi.entities_stage_children = (function busmaker$pixi$entities_stage_children(entities){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8461_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__8461_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__8461_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8462(s__8463){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8463__$1 = s__8463;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8463__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8463__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8462_$_iter__8464(s__8465){
return (new cljs.core.LazySeq(null,((function (s__8463__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8465__$1 = s__8465;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8465__$1);
if(temp__5457__auto____$1){
var s__8465__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8465__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8465__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8467 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8466 = (0);
while(true){
if((i__8466 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__8466);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
cljs.core.chunk_append.call(null,b__8467,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));

var G__8468 = (i__8466 + (1));
i__8466 = G__8468;
continue;
} else {
var G__8469 = (i__8466 + (1));
i__8466 = G__8469;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8467),busmaker$pixi$entities_stage_children_$_iter__8462_$_iter__8464.call(null,cljs.core.chunk_rest.call(null,s__8465__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8467),null);
}
} else {
var x = cljs.core.first.call(null,s__8465__$2);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
return cljs.core.cons.call(null,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),busmaker$pixi$entities_stage_children_$_iter__8462_$_iter__8464.call(null,cljs.core.rest.call(null,s__8465__$2)));
} else {
var G__8470 = cljs.core.rest.call(null,s__8465__$2);
s__8465__$1 = G__8470;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8463__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(s__8463__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,dx)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$pixi$entities_stage_children_$_iter__8462.call(null,cljs.core.rest.call(null,s__8463__$1)));
} else {
var G__8471 = cljs.core.rest.call(null,s__8463__$1);
s__8463__$1 = G__8471;
continue;
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
});
busmaker.pixi.solution_stage = (function busmaker$pixi$solution_stage(children,position){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("impi","key","impi/key",-1519343542),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),position,new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","container","pixi.object.type/container",-361427118),new cljs.core.Keyword("pixi.container","children","pixi.container/children",1768703103),children], null);
});
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"pointerdown",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"pointerup",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"pointermove",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","button-mode?","pixi.object/button-mode?",1263436143),(function (object,_,___$1,button_mode_QMARK_){
return object.buttonMode = button_mode_QMARK_;
}));
busmaker.pixi.render_stage_BANG_ = (function busmaker$pixi$render_stage_BANG_(state,drag,children,id){
var vec__8472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),(800)], null);
var w = cljs.core.nth.call(null,vec__8472,(0),null);
var h = cljs.core.nth.call(null,vec__8472,(1),null);
var vec__8475 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8475,(0),null);
return impi.core.mount.call(null,new cljs.core.Keyword(null,"blueprint","blueprint",-1146485308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null)], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),cljs.core.merge.call(null,busmaker.pixi.solution_stage.call(null,children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),cljs.core.constantly.call(null,true),new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430)], null),new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732)], null),new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217)], null)], null)),new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),((function (vec__8472,w,h,vec__8475,app_state){
return (function (_,entity){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(vec__8472,w,h,vec__8475,app_state))
,new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430),((function (vec__8472,w,h,vec__8475,app_state){
return (function (e){
var map__8478 = cljs.core.deref.call(null,drag);
var map__8478__$1 = ((((!((map__8478 == null)))?(((((map__8478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8478):map__8478);
var x = cljs.core.get.call(null,map__8478__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8478__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.data.originalEvent.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.data.originalEvent.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
});})(vec__8472,w,h,vec__8475,app_state))
,new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217),((function (vec__8472,w,h,vec__8475,app_state){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__8480 = cljs.core.deref.call(null,drag);
var map__8480__$1 = ((((!((map__8480 == null)))?(((((map__8480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8480):map__8480);
var x = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__8480__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dmx = (mx0 - e.data.originalEvent.clientX);
var dmy = (my0 - e.data.originalEvent.clientY);
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(x0 - dmx),new cljs.core.Keyword(null,"y","y",-1757859776),(y0 - dmy));
} else {
return null;
}
});})(vec__8472,w,h,vec__8475,app_state))
,new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732),((function (vec__8472,w,h,vec__8475,app_state){
return (function (_){
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(vec__8472,w,h,vec__8475,app_state))
], null)], null),rum.core.dom_node.call(null,state));
});
busmaker.pixi.impi = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var drag = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var vec__8482 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8482,(0),null);
var children = cljs.core.atom.call(null,cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
var id = cljs.core.rand_int.call(null,(10000));
busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);

cljs.core.add_watch.call(null,drag,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (drag,vec__8482,app_state,children,id){
return (function() { 
var G__8488__delegate = function (_){
return busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);
};
var G__8488 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8489__i = 0, G__8489__a = new Array(arguments.length -  0);
while (G__8489__i < G__8489__a.length) {G__8489__a[G__8489__i] = arguments[G__8489__i + 0]; ++G__8489__i;}
  _ = new cljs.core.IndexedSeq(G__8489__a,0,null);
} 
return G__8488__delegate.call(this,_);};
G__8488.cljs$lang$maxFixedArity = 0;
G__8488.cljs$lang$applyTo = (function (arglist__8490){
var _ = cljs.core.seq(arglist__8490);
return G__8488__delegate(_);
});
G__8488.cljs$core$IFn$_invoke$arity$variadic = G__8488__delegate;
return G__8488;
})()
;})(drag,vec__8482,app_state,children,id))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),drag,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378),children,new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984),id);
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
var vec__8485_8491 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state_8492 = cljs.core.nth.call(null,vec__8485_8491,(0),null);
busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state),cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state_8492))))),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));

cljs.core.add_watch.call(null,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (vec__8485_8491,app_state_8492){
return (function (k,r,o,n){
return busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.deref.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));
});})(vec__8485_8491,app_state_8492))
);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.remove_watch.call(null,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322));

impi.core.unmount.call(null,new cljs.core.Keyword(null,"blueprint","blueprint",-1146485308));

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378));
})], null);
busmaker.pixi.panel = rum.core.build_defc.call(null,(function (state){
rum.core.react.call(null,rum.core.cursor_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solution","solution",-1727231491)], null)));

return React.createElement("div",null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker.pixi.impi,rum.core.reactive], null),"panel");
