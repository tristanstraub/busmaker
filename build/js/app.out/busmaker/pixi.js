// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.pixi');
goog.require('cljs.core');
goog.require('impi.core');
goog.require('rum.core');
goog.require('cljs.core.match');
goog.require('goog.style');
goog.require('goog.dom');
busmaker.pixi.direction = (function busmaker$pixi$direction(d){
var G__8388 = d;
switch (G__8388) {
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
busmaker.pixi.widgets = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"furnace","furnace",-1572266656),new cljs.core.Keyword(null,"lab","lab",-1187867934),new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"stone-furnace","stone-furnace",663242727),new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"pipe","pipe",336575849),new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375),new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679),new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274),new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940),new cljs.core.Keyword(null,"grass","grass",1213050421)],["widgets/furnace.svg","widgets/lab.svg","widgets/underground-belt-input.svg","widgets/transport-belt.svg","widgets/stone-furnace.svg","widgets/long-handed-inserter.svg","widgets/underground-belt-output.svg","widgets/pipe.svg","widgets/inserter.svg","widgets/underground-pipe.svg","widgets/oil-refinery.svg","widgets/assembling-machine.svg","widgets/electrical-pole.svg","widgets/splitter.svg","widgets/chemical-plant.svg","widgets/grass.svg"]);
busmaker.pixi.cell = (function busmaker$pixi$cell(entity,x,y){
var g = (function() { 
var G__8487__delegate = function (v,p__8390){
var map__8391 = p__8390;
var map__8391__$1 = ((((!((map__8391 == null)))?(((((map__8391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8391):map__8391);
var rotate = cljs.core.get.call(null,map__8391__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0));
var translate = cljs.core.get.call(null,map__8391__$1,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","sprite","pixi.object.type/sprite",-1129625685),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((16) * x),((16) * y)], null),translate),new cljs.core.Keyword("pixi.sprite","anchor","pixi.sprite/anchor",-1761208072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844),busmaker.pixi.widgets.call(null,v)], null),new cljs.core.Keyword("pixi.object","rotation","pixi.object/rotation",-1091789503),(Math.PI * (rotate / (180))),new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.event","mouse-over","pixi.event/mouse-over",584256675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),entity], null)], null);
};
var G__8487 = function (v,var_args){
var p__8390 = null;
if (arguments.length > 1) {
var G__8488__i = 0, G__8488__a = new Array(arguments.length -  1);
while (G__8488__i < G__8488__a.length) {G__8488__a[G__8488__i] = arguments[G__8488__i + 1]; ++G__8488__i;}
  p__8390 = new cljs.core.IndexedSeq(G__8488__a,0,null);
} 
return G__8487__delegate.call(this,v,p__8390);};
G__8487.cljs$lang$maxFixedArity = 1;
G__8487.cljs$lang$applyTo = (function (arglist__8489){
var v = cljs.core.first(arglist__8489);
var p__8390 = cljs.core.rest(arglist__8489);
return G__8487__delegate(v,p__8390);
});
G__8487.cljs$core$IFn$_invoke$arity$variadic = G__8487__delegate;
return G__8487;
})()
;
var ocr_8393 = cljs.core.get.call(null,entity,"name");
var ocr_8394 = busmaker.pixi.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_8395 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_8393 === "grass")){
return g.call(null,new cljs.core.Keyword(null,"grass","grass",1213050421));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8427){if((e8427 instanceof Error)){
var e__7482__auto__ = e8427;
if((e__7482__auto__ === cljs.core.match.backtrack)){
try{if((ocr_8393 === "underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8395,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8486){if((e8486 instanceof Error)){
var e__7482__auto____$1 = e8486;
if((e__7482__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$1;
}
} else {
throw e8486;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8471){if((e8471 instanceof Error)){
var e__7482__auto____$1 = e8471;
if((e__7482__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8395,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8485){if((e8485 instanceof Error)){
var e__7482__auto____$2 = e8485;
if((e__7482__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$2;
}
} else {
throw e8485;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8472){if((e8472 instanceof Error)){
var e__7482__auto____$2 = e8472;
if((e__7482__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8395,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8484){if((e8484 instanceof Error)){
var e__7482__auto____$3 = e8484;
if((e__7482__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$3;
}
} else {
throw e8484;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8473){if((e8473 instanceof Error)){
var e__7482__auto____$3 = e8473;
if((e__7482__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8395,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8483){if((e8483 instanceof Error)){
var e__7482__auto____$4 = e8483;
if((e__7482__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$4;
}
} else {
throw e8483;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8474){if((e8474 instanceof Error)){
var e__7482__auto____$4 = e8474;
if((e__7482__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8395,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8482){if((e8482 instanceof Error)){
var e__7482__auto____$5 = e8482;
if((e__7482__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$5;
}
} else {
throw e8482;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8475){if((e8475 instanceof Error)){
var e__7482__auto____$5 = e8475;
if((e__7482__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8395,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8481){if((e8481 instanceof Error)){
var e__7482__auto____$6 = e8481;
if((e__7482__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$6;
}
} else {
throw e8481;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8476){if((e8476 instanceof Error)){
var e__7482__auto____$6 = e8476;
if((e__7482__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8395,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8480){if((e8480 instanceof Error)){
var e__7482__auto____$7 = e8480;
if((e__7482__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$7;
}
} else {
throw e8480;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8477){if((e8477 instanceof Error)){
var e__7482__auto____$7 = e8477;
if((e__7482__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8395,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8479){if((e8479 instanceof Error)){
var e__7482__auto____$8 = e8479;
if((e__7482__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$8;
}
} else {
throw e8479;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8478){if((e8478 instanceof Error)){
var e__7482__auto____$8 = e8478;
if((e__7482__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$8;
}
} else {
throw e8478;

}
}} else {
throw e__7482__auto____$7;
}
} else {
throw e8477;

}
}} else {
throw e__7482__auto____$6;
}
} else {
throw e8476;

}
}} else {
throw e__7482__auto____$5;
}
} else {
throw e8475;

}
}} else {
throw e__7482__auto____$4;
}
} else {
throw e8474;

}
}} else {
throw e__7482__auto____$3;
}
} else {
throw e8473;

}
}} else {
throw e__7482__auto____$2;
}
} else {
throw e8472;

}
}} else {
throw e__7482__auto____$1;
}
} else {
throw e8471;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8428){if((e8428 instanceof Error)){
var e__7482__auto____$1 = e8428;
if((e__7482__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8470){if((e8470 instanceof Error)){
var e__7482__auto____$2 = e8470;
if((e__7482__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$2;
}
} else {
throw e8470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8463){if((e8463 instanceof Error)){
var e__7482__auto____$2 = e8463;
if((e__7482__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8469){if((e8469 instanceof Error)){
var e__7482__auto____$3 = e8469;
if((e__7482__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$3;
}
} else {
throw e8469;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8464){if((e8464 instanceof Error)){
var e__7482__auto____$3 = e8464;
if((e__7482__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8468){if((e8468 instanceof Error)){
var e__7482__auto____$4 = e8468;
if((e__7482__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$4;
}
} else {
throw e8468;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8465){if((e8465 instanceof Error)){
var e__7482__auto____$4 = e8465;
if((e__7482__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8467){if((e8467 instanceof Error)){
var e__7482__auto____$5 = e8467;
if((e__7482__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$5;
}
} else {
throw e8467;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8466){if((e8466 instanceof Error)){
var e__7482__auto____$5 = e8466;
if((e__7482__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$5;
}
} else {
throw e8466;

}
}} else {
throw e__7482__auto____$4;
}
} else {
throw e8465;

}
}} else {
throw e__7482__auto____$3;
}
} else {
throw e8464;

}
}} else {
throw e__7482__auto____$2;
}
} else {
throw e8463;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8429){if((e8429 instanceof Error)){
var e__7482__auto____$2 = e8429;
if((e__7482__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "small-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8430){if((e8430 instanceof Error)){
var e__7482__auto____$3 = e8430;
if((e__7482__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "medium-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8431){if((e8431 instanceof Error)){
var e__7482__auto____$4 = e8431;
if((e__7482__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "pipe")){
return g.call(null,new cljs.core.Keyword(null,"pipe","pipe",336575849));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8432){if((e8432 instanceof Error)){
var e__7482__auto____$5 = e8432;
if((e__7482__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8461){if((e8461 instanceof Error)){
var e__7482__auto____$6 = e8461;
if((e__7482__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8462){if((e8462 instanceof Error)){
var e__7482__auto____$7 = e8462;
if((e__7482__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$7;
}
} else {
throw e8462;

}
}} else {
throw e__7482__auto____$6;
}
} else {
throw e8461;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8433){if((e8433 instanceof Error)){
var e__7482__auto____$6 = e8433;
if((e__7482__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "assembling-machine-1")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8434){if((e8434 instanceof Error)){
var e__7482__auto____$7 = e8434;
if((e__7482__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "assembling-machine-2")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8435){if((e8435 instanceof Error)){
var e__7482__auto____$8 = e8435;
if((e__7482__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8460){if((e8460 instanceof Error)){
var e__7482__auto____$9 = e8460;
if((e__7482__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$9;
}
} else {
throw e8460;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8453){if((e8453 instanceof Error)){
var e__7482__auto____$9 = e8453;
if((e__7482__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8459){if((e8459 instanceof Error)){
var e__7482__auto____$10 = e8459;
if((e__7482__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$10;
}
} else {
throw e8459;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8454){if((e8454 instanceof Error)){
var e__7482__auto____$10 = e8454;
if((e__7482__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8458){if((e8458 instanceof Error)){
var e__7482__auto____$11 = e8458;
if((e__7482__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$11;
}
} else {
throw e8458;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8455){if((e8455 instanceof Error)){
var e__7482__auto____$11 = e8455;
if((e__7482__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8457){if((e8457 instanceof Error)){
var e__7482__auto____$12 = e8457;
if((e__7482__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$12;
}
} else {
throw e8457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8456){if((e8456 instanceof Error)){
var e__7482__auto____$12 = e8456;
if((e__7482__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$12;
}
} else {
throw e8456;

}
}} else {
throw e__7482__auto____$11;
}
} else {
throw e8455;

}
}} else {
throw e__7482__auto____$10;
}
} else {
throw e8454;

}
}} else {
throw e__7482__auto____$9;
}
} else {
throw e8453;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8436){if((e8436 instanceof Error)){
var e__7482__auto____$9 = e8436;
if((e__7482__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8452){if((e8452 instanceof Error)){
var e__7482__auto____$10 = e8452;
if((e__7482__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$10;
}
} else {
throw e8452;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8445){if((e8445 instanceof Error)){
var e__7482__auto____$10 = e8445;
if((e__7482__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8451){if((e8451 instanceof Error)){
var e__7482__auto____$11 = e8451;
if((e__7482__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$11;
}
} else {
throw e8451;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8446){if((e8446 instanceof Error)){
var e__7482__auto____$11 = e8446;
if((e__7482__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8450){if((e8450 instanceof Error)){
var e__7482__auto____$12 = e8450;
if((e__7482__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$12;
}
} else {
throw e8450;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8447){if((e8447 instanceof Error)){
var e__7482__auto____$12 = e8447;
if((e__7482__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8394,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8395 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8449){if((e8449 instanceof Error)){
var e__7482__auto____$13 = e8449;
if((e__7482__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$13;
}
} else {
throw e8449;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8448){if((e8448 instanceof Error)){
var e__7482__auto____$13 = e8448;
if((e__7482__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7482__auto____$13;
}
} else {
throw e8448;

}
}} else {
throw e__7482__auto____$12;
}
} else {
throw e8447;

}
}} else {
throw e__7482__auto____$11;
}
} else {
throw e8446;

}
}} else {
throw e__7482__auto____$10;
}
} else {
throw e8445;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8437){if((e8437 instanceof Error)){
var e__7482__auto____$10 = e8437;
if((e__7482__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "chemical-plant")){
return g.call(null,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8438){if((e8438 instanceof Error)){
var e__7482__auto____$11 = e8438;
if((e__7482__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "oil-refinery")){
return g.call(null,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8439){if((e8439 instanceof Error)){
var e__7482__auto____$12 = e8439;
if((e__7482__auto____$12 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "lab")){
return g.call(null,new cljs.core.Keyword(null,"lab","lab",-1187867934));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8440){if((e8440 instanceof Error)){
var e__7482__auto____$13 = e8440;
if((e__7482__auto____$13 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "electric-furnace")){
return g.call(null,new cljs.core.Keyword(null,"furnace","furnace",-1572266656));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8441){if((e8441 instanceof Error)){
var e__7482__auto____$14 = e8441;
if((e__7482__auto____$14 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "stone-furnace")){
return g.call(null,new cljs.core.Keyword(null,"stone-furnace","stone-furnace",663242727),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8442){if((e8442 instanceof Error)){
var e__7482__auto____$15 = e8442;
if((e__7482__auto____$15 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "steel-furnace")){
return g.call(null,new cljs.core.Keyword(null,"stone-furnace","stone-furnace",663242727),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8443){if((e8443 instanceof Error)){
var e__7482__auto____$16 = e8443;
if((e__7482__auto____$16 === cljs.core.match.backtrack)){
try{if((ocr_8393 === "splitter")){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8444){if((e8444 instanceof Error)){
var e__7482__auto____$17 = e8444;
if((e__7482__auto____$17 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8393)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8394)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8395)].join('')));
} else {
throw e__7482__auto____$17;
}
} else {
throw e8444;

}
}} else {
throw e__7482__auto____$16;
}
} else {
throw e8443;

}
}} else {
throw e__7482__auto____$15;
}
} else {
throw e8442;

}
}} else {
throw e__7482__auto____$14;
}
} else {
throw e8441;

}
}} else {
throw e__7482__auto____$13;
}
} else {
throw e8440;

}
}} else {
throw e__7482__auto____$12;
}
} else {
throw e8439;

}
}} else {
throw e__7482__auto____$11;
}
} else {
throw e8438;

}
}} else {
throw e__7482__auto____$10;
}
} else {
throw e8437;

}
}} else {
throw e__7482__auto____$9;
}
} else {
throw e8436;

}
}} else {
throw e__7482__auto____$8;
}
} else {
throw e8435;

}
}} else {
throw e__7482__auto____$7;
}
} else {
throw e8434;

}
}} else {
throw e__7482__auto____$6;
}
} else {
throw e8433;

}
}} else {
throw e__7482__auto____$5;
}
} else {
throw e8432;

}
}} else {
throw e__7482__auto____$4;
}
} else {
throw e8431;

}
}} else {
throw e__7482__auto____$3;
}
} else {
throw e8430;

}
}} else {
throw e__7482__auto____$2;
}
} else {
throw e8429;

}
}} else {
throw e__7482__auto____$1;
}
} else {
throw e8428;

}
}} else {
throw e__7482__auto__;
}
} else {
throw e8427;

}
}});
busmaker.pixi.margin_x = (2);
busmaker.pixi.viewport_window = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null);
busmaker.pixi.entities_stage_children = (function busmaker$pixi$entities_stage_children(entities){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8490_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__8490_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__8490_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8491(s__8492){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8492__$1 = s__8492;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8492__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8492__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8491_$_iter__8493(s__8494){
return (new cljs.core.LazySeq(null,((function (s__8492__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8494__$1 = s__8494;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8494__$1);
if(temp__5457__auto____$1){
var s__8494__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8494__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8494__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8496 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8495 = (0);
while(true){
if((i__8495 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__8495);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
cljs.core.chunk_append.call(null,b__8496,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));

var G__8497 = (i__8495 + (1));
i__8495 = G__8497;
continue;
} else {
var G__8498 = (i__8495 + (1));
i__8495 = G__8498;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8496),busmaker$pixi$entities_stage_children_$_iter__8491_$_iter__8493.call(null,cljs.core.chunk_rest.call(null,s__8494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8496),null);
}
} else {
var x = cljs.core.first.call(null,s__8494__$2);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
return cljs.core.cons.call(null,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),busmaker$pixi$entities_stage_children_$_iter__8491_$_iter__8493.call(null,cljs.core.rest.call(null,s__8494__$2)));
} else {
var G__8499 = cljs.core.rest.call(null,s__8494__$2);
s__8494__$1 = G__8499;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8492__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(s__8492__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,dx)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$pixi$entities_stage_children_$_iter__8491.call(null,cljs.core.rest.call(null,s__8492__$1)));
} else {
var G__8500 = cljs.core.rest.call(null,s__8492__$1);
s__8492__$1 = G__8500;
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
var vec__8501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),(800)], null);
var w = cljs.core.nth.call(null,vec__8501,(0),null);
var h = cljs.core.nth.call(null,vec__8501,(1),null);
var vec__8504 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8504,(0),null);
return impi.core.mount.call(null,new cljs.core.Keyword(null,"blueprint","blueprint",-1146485308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null)], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),cljs.core.merge.call(null,busmaker.pixi.solution_stage.call(null,children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),cljs.core.constantly.call(null,true),new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430)], null),new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732)], null),new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217)], null)], null)),new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),((function (vec__8501,w,h,vec__8504,app_state){
return (function (_,entity){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(vec__8501,w,h,vec__8504,app_state))
,new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430),((function (vec__8501,w,h,vec__8504,app_state){
return (function (e){
var map__8507 = cljs.core.deref.call(null,drag);
var map__8507__$1 = ((((!((map__8507 == null)))?(((((map__8507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8507):map__8507);
var x = cljs.core.get.call(null,map__8507__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8507__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.data.originalEvent.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.data.originalEvent.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
});})(vec__8501,w,h,vec__8504,app_state))
,new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217),((function (vec__8501,w,h,vec__8504,app_state){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__8509 = cljs.core.deref.call(null,drag);
var map__8509__$1 = ((((!((map__8509 == null)))?(((((map__8509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8509):map__8509);
var x = cljs.core.get.call(null,map__8509__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8509__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__8509__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__8509__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__8509__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__8509__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dmx = (mx0 - e.data.originalEvent.clientX);
var dmy = (my0 - e.data.originalEvent.clientY);
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(x0 - dmx),new cljs.core.Keyword(null,"y","y",-1757859776),(y0 - dmy));
} else {
return null;
}
});})(vec__8501,w,h,vec__8504,app_state))
,new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732),((function (vec__8501,w,h,vec__8504,app_state){
return (function (_){
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(vec__8501,w,h,vec__8504,app_state))
], null)], null),rum.core.dom_node.call(null,state));
});
busmaker.pixi.impi = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var drag = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var vec__8511 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8511,(0),null);
var children = cljs.core.atom.call(null,cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
var id = cljs.core.rand_int.call(null,(10000));
busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);

cljs.core.add_watch.call(null,drag,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (drag,vec__8511,app_state,children,id){
return (function() { 
var G__8517__delegate = function (_){
return busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);
};
var G__8517 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8518__i = 0, G__8518__a = new Array(arguments.length -  0);
while (G__8518__i < G__8518__a.length) {G__8518__a[G__8518__i] = arguments[G__8518__i + 0]; ++G__8518__i;}
  _ = new cljs.core.IndexedSeq(G__8518__a,0,null);
} 
return G__8517__delegate.call(this,_);};
G__8517.cljs$lang$maxFixedArity = 0;
G__8517.cljs$lang$applyTo = (function (arglist__8519){
var _ = cljs.core.seq(arglist__8519);
return G__8517__delegate(_);
});
G__8517.cljs$core$IFn$_invoke$arity$variadic = G__8517__delegate;
return G__8517;
})()
;})(drag,vec__8511,app_state,children,id))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),drag,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378),children,new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984),id);
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
var vec__8514_8520 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state_8521 = cljs.core.nth.call(null,vec__8514_8520,(0),null);
busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state),cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state_8521))))),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));

cljs.core.add_watch.call(null,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (vec__8514_8520,app_state_8521){
return (function (k,r,o,n){
return busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.deref.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));
});})(vec__8514_8520,app_state_8521))
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
