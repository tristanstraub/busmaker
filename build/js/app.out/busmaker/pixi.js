// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.pixi');
goog.require('cljs.core');
goog.require('impi.core');
goog.require('rum.core');
goog.require('cljs.core.match');
goog.require('goog.style');
goog.require('goog.dom');
busmaker.pixi.direction = (function busmaker$pixi$direction(d){
var G__4477 = d;
switch (G__4477) {
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
var G__4561__delegate = function (v,p__4479){
var map__4480 = p__4479;
var map__4480__$1 = ((((!((map__4480 == null)))?(((((map__4480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4480):map__4480);
var rotate = cljs.core.get.call(null,map__4480__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0));
var translate = cljs.core.get.call(null,map__4480__$1,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","sprite","pixi.object.type/sprite",-1129625685),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((16) * x),((16) * y)], null),translate),new cljs.core.Keyword("pixi.sprite","anchor","pixi.sprite/anchor",-1761208072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844),busmaker.pixi.widgets.call(null,v)], null),new cljs.core.Keyword("pixi.object","rotation","pixi.object/rotation",-1091789503),(Math.PI * (rotate / (180))),new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.event","mouse-over","pixi.event/mouse-over",584256675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),entity], null)], null);
};
var G__4561 = function (v,var_args){
var p__4479 = null;
if (arguments.length > 1) {
var G__4562__i = 0, G__4562__a = new Array(arguments.length -  1);
while (G__4562__i < G__4562__a.length) {G__4562__a[G__4562__i] = arguments[G__4562__i + 1]; ++G__4562__i;}
  p__4479 = new cljs.core.IndexedSeq(G__4562__a,0,null);
} 
return G__4561__delegate.call(this,v,p__4479);};
G__4561.cljs$lang$maxFixedArity = 1;
G__4561.cljs$lang$applyTo = (function (arglist__4563){
var v = cljs.core.first(arglist__4563);
var p__4479 = cljs.core.rest(arglist__4563);
return G__4561__delegate(v,p__4479);
});
G__4561.cljs$core$IFn$_invoke$arity$variadic = G__4561__delegate;
return G__4561;
})()
;
var ocr_4482 = cljs.core.get.call(null,entity,"name");
var ocr_4483 = busmaker.pixi.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_4484 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_4482 === "grass")){
return g.call(null,new cljs.core.Keyword(null,"grass","grass",1213050421));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4506){if((e4506 instanceof Error)){
var e__3571__auto__ = e4506;
if((e__3571__auto__ === cljs.core.match.backtrack)){
try{if((ocr_4482 === "fast-underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4484,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4560){if((e4560 instanceof Error)){
var e__3571__auto____$1 = e4560;
if((e__3571__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$1;
}
} else {
throw e4560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4545){if((e4545 instanceof Error)){
var e__3571__auto____$1 = e4545;
if((e__3571__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4484,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4559){if((e4559 instanceof Error)){
var e__3571__auto____$2 = e4559;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$2;
}
} else {
throw e4559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4546){if((e4546 instanceof Error)){
var e__3571__auto____$2 = e4546;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4484,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4558){if((e4558 instanceof Error)){
var e__3571__auto____$3 = e4558;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$3;
}
} else {
throw e4558;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4547){if((e4547 instanceof Error)){
var e__3571__auto____$3 = e4547;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4484,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4557){if((e4557 instanceof Error)){
var e__3571__auto____$4 = e4557;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$4;
}
} else {
throw e4557;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4548){if((e4548 instanceof Error)){
var e__3571__auto____$4 = e4548;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4484,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4556){if((e4556 instanceof Error)){
var e__3571__auto____$5 = e4556;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$5;
}
} else {
throw e4556;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4549){if((e4549 instanceof Error)){
var e__3571__auto____$5 = e4549;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4484,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4555){if((e4555 instanceof Error)){
var e__3571__auto____$6 = e4555;
if((e__3571__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$6;
}
} else {
throw e4555;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4550){if((e4550 instanceof Error)){
var e__3571__auto____$6 = e4550;
if((e__3571__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4484,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4554){if((e4554 instanceof Error)){
var e__3571__auto____$7 = e4554;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$7;
}
} else {
throw e4554;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4551){if((e4551 instanceof Error)){
var e__3571__auto____$7 = e4551;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4484,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4553){if((e4553 instanceof Error)){
var e__3571__auto____$8 = e4553;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$8;
}
} else {
throw e4553;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4552){if((e4552 instanceof Error)){
var e__3571__auto____$8 = e4552;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$8;
}
} else {
throw e4552;

}
}} else {
throw e__3571__auto____$7;
}
} else {
throw e4551;

}
}} else {
throw e__3571__auto____$6;
}
} else {
throw e4550;

}
}} else {
throw e__3571__auto____$5;
}
} else {
throw e4549;

}
}} else {
throw e__3571__auto____$4;
}
} else {
throw e4548;

}
}} else {
throw e__3571__auto____$3;
}
} else {
throw e4547;

}
}} else {
throw e__3571__auto____$2;
}
} else {
throw e4546;

}
}} else {
throw e__3571__auto____$1;
}
} else {
throw e4545;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4507){if((e4507 instanceof Error)){
var e__3571__auto____$1 = e4507;
if((e__3571__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "fast-transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4544){if((e4544 instanceof Error)){
var e__3571__auto____$2 = e4544;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$2;
}
} else {
throw e4544;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4537){if((e4537 instanceof Error)){
var e__3571__auto____$2 = e4537;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4543){if((e4543 instanceof Error)){
var e__3571__auto____$3 = e4543;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$3;
}
} else {
throw e4543;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4538){if((e4538 instanceof Error)){
var e__3571__auto____$3 = e4538;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4542){if((e4542 instanceof Error)){
var e__3571__auto____$4 = e4542;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$4;
}
} else {
throw e4542;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4539){if((e4539 instanceof Error)){
var e__3571__auto____$4 = e4539;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4541){if((e4541 instanceof Error)){
var e__3571__auto____$5 = e4541;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$5;
}
} else {
throw e4541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4540){if((e4540 instanceof Error)){
var e__3571__auto____$5 = e4540;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$5;
}
} else {
throw e4540;

}
}} else {
throw e__3571__auto____$4;
}
} else {
throw e4539;

}
}} else {
throw e__3571__auto____$3;
}
} else {
throw e4538;

}
}} else {
throw e__3571__auto____$2;
}
} else {
throw e4537;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4508){if((e4508 instanceof Error)){
var e__3571__auto____$2 = e4508;
if((e__3571__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "medium-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4509){if((e4509 instanceof Error)){
var e__3571__auto____$3 = e4509;
if((e__3571__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "pipe")){
return g.call(null,new cljs.core.Keyword(null,"pipe","pipe",336575849));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4510){if((e4510 instanceof Error)){
var e__3571__auto____$4 = e4510;
if((e__3571__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4535){if((e4535 instanceof Error)){
var e__3571__auto____$5 = e4535;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4536){if((e4536 instanceof Error)){
var e__3571__auto____$6 = e4536;
if((e__3571__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$6;
}
} else {
throw e4536;

}
}} else {
throw e__3571__auto____$5;
}
} else {
throw e4535;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4511){if((e4511 instanceof Error)){
var e__3571__auto____$5 = e4511;
if((e__3571__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "assembling-machine-2")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4512){if((e4512 instanceof Error)){
var e__3571__auto____$6 = e4512;
if((e__3571__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "fast-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4534){if((e4534 instanceof Error)){
var e__3571__auto____$7 = e4534;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$7;
}
} else {
throw e4534;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4527){if((e4527 instanceof Error)){
var e__3571__auto____$7 = e4527;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4533){if((e4533 instanceof Error)){
var e__3571__auto____$8 = e4533;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$8;
}
} else {
throw e4533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4528){if((e4528 instanceof Error)){
var e__3571__auto____$8 = e4528;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4532){if((e4532 instanceof Error)){
var e__3571__auto____$9 = e4532;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$9;
}
} else {
throw e4532;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4529){if((e4529 instanceof Error)){
var e__3571__auto____$9 = e4529;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4531){if((e4531 instanceof Error)){
var e__3571__auto____$10 = e4531;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$10;
}
} else {
throw e4531;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4530){if((e4530 instanceof Error)){
var e__3571__auto____$10 = e4530;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$10;
}
} else {
throw e4530;

}
}} else {
throw e__3571__auto____$9;
}
} else {
throw e4529;

}
}} else {
throw e__3571__auto____$8;
}
} else {
throw e4528;

}
}} else {
throw e__3571__auto____$7;
}
} else {
throw e4527;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4513){if((e4513 instanceof Error)){
var e__3571__auto____$7 = e4513;
if((e__3571__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4526){if((e4526 instanceof Error)){
var e__3571__auto____$8 = e4526;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$8;
}
} else {
throw e4526;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4519){if((e4519 instanceof Error)){
var e__3571__auto____$8 = e4519;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4525){if((e4525 instanceof Error)){
var e__3571__auto____$9 = e4525;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$9;
}
} else {
throw e4525;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4520){if((e4520 instanceof Error)){
var e__3571__auto____$9 = e4520;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4524){if((e4524 instanceof Error)){
var e__3571__auto____$10 = e4524;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$10;
}
} else {
throw e4524;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4521){if((e4521 instanceof Error)){
var e__3571__auto____$10 = e4521;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4483,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_4484 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4523){if((e4523 instanceof Error)){
var e__3571__auto____$11 = e4523;
if((e__3571__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$11;
}
} else {
throw e4523;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4522){if((e4522 instanceof Error)){
var e__3571__auto____$11 = e4522;
if((e__3571__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__3571__auto____$11;
}
} else {
throw e4522;

}
}} else {
throw e__3571__auto____$10;
}
} else {
throw e4521;

}
}} else {
throw e__3571__auto____$9;
}
} else {
throw e4520;

}
}} else {
throw e__3571__auto____$8;
}
} else {
throw e4519;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e4514){if((e4514 instanceof Error)){
var e__3571__auto____$8 = e4514;
if((e__3571__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "chemical-plant")){
return g.call(null,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4515){if((e4515 instanceof Error)){
var e__3571__auto____$9 = e4515;
if((e__3571__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "oil-refinery")){
return g.call(null,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4516){if((e4516 instanceof Error)){
var e__3571__auto____$10 = e4516;
if((e__3571__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "electric-furnace")){
return g.call(null,new cljs.core.Keyword(null,"furnace","furnace",-1572266656),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4517){if((e4517 instanceof Error)){
var e__3571__auto____$11 = e4517;
if((e__3571__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_4482 === "fast-splitter")){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e4518){if((e4518 instanceof Error)){
var e__3571__auto____$12 = e4518;
if((e__3571__auto____$12 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4482)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4483)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4484)].join('')));
} else {
throw e__3571__auto____$12;
}
} else {
throw e4518;

}
}} else {
throw e__3571__auto____$11;
}
} else {
throw e4517;

}
}} else {
throw e__3571__auto____$10;
}
} else {
throw e4516;

}
}} else {
throw e__3571__auto____$9;
}
} else {
throw e4515;

}
}} else {
throw e__3571__auto____$8;
}
} else {
throw e4514;

}
}} else {
throw e__3571__auto____$7;
}
} else {
throw e4513;

}
}} else {
throw e__3571__auto____$6;
}
} else {
throw e4512;

}
}} else {
throw e__3571__auto____$5;
}
} else {
throw e4511;

}
}} else {
throw e__3571__auto____$4;
}
} else {
throw e4510;

}
}} else {
throw e__3571__auto____$3;
}
} else {
throw e4509;

}
}} else {
throw e__3571__auto____$2;
}
} else {
throw e4508;

}
}} else {
throw e__3571__auto____$1;
}
} else {
throw e4507;

}
}} else {
throw e__3571__auto__;
}
} else {
throw e4506;

}
}});
busmaker.pixi.margin_x = (2);
busmaker.pixi.viewport_window = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null);
busmaker.pixi.entities_stage_children = (function busmaker$pixi$entities_stage_children(entities){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__4564_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__4564_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__4564_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__4565(s__4566){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__4566__$1 = s__4566;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4566__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__4566__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__4565_$_iter__4567(s__4568){
return (new cljs.core.LazySeq(null,((function (s__4566__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__4568__$1 = s__4568;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__4568__$1);
if(temp__5457__auto____$1){
var s__4568__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4568__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4568__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4570 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4569 = (0);
while(true){
if((i__4569 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__4569);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
cljs.core.chunk_append.call(null,b__4570,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));

var G__4571 = (i__4569 + (1));
i__4569 = G__4571;
continue;
} else {
var G__4572 = (i__4569 + (1));
i__4569 = G__4572;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4570),busmaker$pixi$entities_stage_children_$_iter__4565_$_iter__4567.call(null,cljs.core.chunk_rest.call(null,s__4568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4570),null);
}
} else {
var x = cljs.core.first.call(null,s__4568__$2);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
return cljs.core.cons.call(null,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),busmaker$pixi$entities_stage_children_$_iter__4565_$_iter__4567.call(null,cljs.core.rest.call(null,s__4568__$2)));
} else {
var G__4573 = cljs.core.rest.call(null,s__4568__$2);
s__4568__$1 = G__4573;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__4566__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(s__4566__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,dx)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$pixi$entities_stage_children_$_iter__4565.call(null,cljs.core.rest.call(null,s__4566__$1)));
} else {
var G__4574 = cljs.core.rest.call(null,s__4566__$1);
s__4566__$1 = G__4574;
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
var vec__4575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),(800)], null);
var w = cljs.core.nth.call(null,vec__4575,(0),null);
var h = cljs.core.nth.call(null,vec__4575,(1),null);
var vec__4578 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__4578,(0),null);
return impi.core.mount.call(null,new cljs.core.Keyword(null,"blueprint","blueprint",-1146485308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null)], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),cljs.core.merge.call(null,busmaker.pixi.solution_stage.call(null,children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),cljs.core.constantly.call(null,true),new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430)], null),new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732)], null),new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217)], null)], null)),new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),((function (vec__4575,w,h,vec__4578,app_state){
return (function (_,entity){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(vec__4575,w,h,vec__4578,app_state))
,new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430),((function (vec__4575,w,h,vec__4578,app_state){
return (function (e){
var map__4581 = cljs.core.deref.call(null,drag);
var map__4581__$1 = ((((!((map__4581 == null)))?(((((map__4581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4581):map__4581);
var x = cljs.core.get.call(null,map__4581__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__4581__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.data.originalEvent.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.data.originalEvent.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
});})(vec__4575,w,h,vec__4578,app_state))
,new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217),((function (vec__4575,w,h,vec__4578,app_state){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__4583 = cljs.core.deref.call(null,drag);
var map__4583__$1 = ((((!((map__4583 == null)))?(((((map__4583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4583):map__4583);
var x = cljs.core.get.call(null,map__4583__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__4583__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__4583__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__4583__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__4583__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__4583__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dmx = (mx0 - e.data.originalEvent.clientX);
var dmy = (my0 - e.data.originalEvent.clientY);
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(x0 - dmx),new cljs.core.Keyword(null,"y","y",-1757859776),(y0 - dmy));
} else {
return null;
}
});})(vec__4575,w,h,vec__4578,app_state))
,new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732),((function (vec__4575,w,h,vec__4578,app_state){
return (function (_){
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(vec__4575,w,h,vec__4578,app_state))
], null)], null),rum.core.dom_node.call(null,state));
});
busmaker.pixi.impi = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var drag = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var vec__4585 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__4585,(0),null);
var children = cljs.core.atom.call(null,cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
var id = cljs.core.rand_int.call(null,(10000));
busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);

cljs.core.add_watch.call(null,drag,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (drag,vec__4585,app_state,children,id){
return (function() { 
var G__4591__delegate = function (_){
return busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);
};
var G__4591 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__4592__i = 0, G__4592__a = new Array(arguments.length -  0);
while (G__4592__i < G__4592__a.length) {G__4592__a[G__4592__i] = arguments[G__4592__i + 0]; ++G__4592__i;}
  _ = new cljs.core.IndexedSeq(G__4592__a,0,null);
} 
return G__4591__delegate.call(this,_);};
G__4591.cljs$lang$maxFixedArity = 0;
G__4591.cljs$lang$applyTo = (function (arglist__4593){
var _ = cljs.core.seq(arglist__4593);
return G__4591__delegate(_);
});
G__4591.cljs$core$IFn$_invoke$arity$variadic = G__4591__delegate;
return G__4591;
})()
;})(drag,vec__4585,app_state,children,id))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),drag,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378),children,new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984),id);
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
var vec__4588_4594 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state_4595 = cljs.core.nth.call(null,vec__4588_4594,(0),null);
busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state),cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state_4595))))),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));

cljs.core.add_watch.call(null,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (vec__4588_4594,app_state_4595){
return (function (k,r,o,n){
return busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.deref.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));
});})(vec__4588_4594,app_state_4595))
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

//# sourceMappingURL=pixi.js.map
