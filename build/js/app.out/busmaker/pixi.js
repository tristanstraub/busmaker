// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.pixi');
goog.require('cljs.core');
goog.require('impi.core');
goog.require('rum.core');
goog.require('cljs.core.match');
goog.require('goog.style');
goog.require('goog.dom');
busmaker.pixi.direction = (function busmaker$pixi$direction(d){
var G__7965 = d;
switch (G__7965) {
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
var G__8068__delegate = function (v,p__7967){
var map__7968 = p__7967;
var map__7968__$1 = ((((!((map__7968 == null)))?(((((map__7968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7968):map__7968);
var rotate = cljs.core.get.call(null,map__7968__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0));
var translate = cljs.core.get.call(null,map__7968__$1,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","sprite","pixi.object.type/sprite",-1129625685),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((16) * x),((16) * y)], null),translate),new cljs.core.Keyword("pixi.sprite","anchor","pixi.sprite/anchor",-1761208072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844),busmaker.pixi.widgets.call(null,v)], null),new cljs.core.Keyword("pixi.object","rotation","pixi.object/rotation",-1091789503),(Math.PI * (rotate / (180))),new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.event","mouse-over","pixi.event/mouse-over",584256675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),entity], null)], null);
};
var G__8068 = function (v,var_args){
var p__7967 = null;
if (arguments.length > 1) {
var G__8069__i = 0, G__8069__a = new Array(arguments.length -  1);
while (G__8069__i < G__8069__a.length) {G__8069__a[G__8069__i] = arguments[G__8069__i + 1]; ++G__8069__i;}
  p__7967 = new cljs.core.IndexedSeq(G__8069__a,0,null);
} 
return G__8068__delegate.call(this,v,p__7967);};
G__8068.cljs$lang$maxFixedArity = 1;
G__8068.cljs$lang$applyTo = (function (arglist__8070){
var v = cljs.core.first(arglist__8070);
var p__7967 = cljs.core.rest(arglist__8070);
return G__8068__delegate(v,p__7967);
});
G__8068.cljs$core$IFn$_invoke$arity$variadic = G__8068__delegate;
return G__8068;
})()
;
var ocr_7970 = cljs.core.get.call(null,entity,"name");
var ocr_7971 = busmaker.pixi.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_7972 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_7970 === "grass")){
return g.call(null,new cljs.core.Keyword(null,"grass","grass",1213050421));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8006){if((e8006 instanceof Error)){
var e__7059__auto__ = e8006;
if((e__7059__auto__ === cljs.core.match.backtrack)){
try{if((ocr_7970 === "underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7972,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8067){if((e8067 instanceof Error)){
var e__7059__auto____$1 = e8067;
if((e__7059__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$1;
}
} else {
throw e8067;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8052){if((e8052 instanceof Error)){
var e__7059__auto____$1 = e8052;
if((e__7059__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7972,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8066){if((e8066 instanceof Error)){
var e__7059__auto____$2 = e8066;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$2;
}
} else {
throw e8066;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8053){if((e8053 instanceof Error)){
var e__7059__auto____$2 = e8053;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7972,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8065){if((e8065 instanceof Error)){
var e__7059__auto____$3 = e8065;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$3;
}
} else {
throw e8065;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8054){if((e8054 instanceof Error)){
var e__7059__auto____$3 = e8054;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7972,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8064){if((e8064 instanceof Error)){
var e__7059__auto____$4 = e8064;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$4;
}
} else {
throw e8064;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8055){if((e8055 instanceof Error)){
var e__7059__auto____$4 = e8055;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7972,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8063){if((e8063 instanceof Error)){
var e__7059__auto____$5 = e8063;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$5;
}
} else {
throw e8063;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8056){if((e8056 instanceof Error)){
var e__7059__auto____$5 = e8056;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7972,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8062){if((e8062 instanceof Error)){
var e__7059__auto____$6 = e8062;
if((e__7059__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$6;
}
} else {
throw e8062;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8057){if((e8057 instanceof Error)){
var e__7059__auto____$6 = e8057;
if((e__7059__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7972,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8061){if((e8061 instanceof Error)){
var e__7059__auto____$7 = e8061;
if((e__7059__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$7;
}
} else {
throw e8061;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8058){if((e8058 instanceof Error)){
var e__7059__auto____$7 = e8058;
if((e__7059__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7972,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8060){if((e8060 instanceof Error)){
var e__7059__auto____$8 = e8060;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$8;
}
} else {
throw e8060;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8059){if((e8059 instanceof Error)){
var e__7059__auto____$8 = e8059;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$8;
}
} else {
throw e8059;

}
}} else {
throw e__7059__auto____$7;
}
} else {
throw e8058;

}
}} else {
throw e__7059__auto____$6;
}
} else {
throw e8057;

}
}} else {
throw e__7059__auto____$5;
}
} else {
throw e8056;

}
}} else {
throw e__7059__auto____$4;
}
} else {
throw e8055;

}
}} else {
throw e__7059__auto____$3;
}
} else {
throw e8054;

}
}} else {
throw e__7059__auto____$2;
}
} else {
throw e8053;

}
}} else {
throw e__7059__auto____$1;
}
} else {
throw e8052;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8007){if((e8007 instanceof Error)){
var e__7059__auto____$1 = e8007;
if((e__7059__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8051){if((e8051 instanceof Error)){
var e__7059__auto____$2 = e8051;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$2;
}
} else {
throw e8051;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8044){if((e8044 instanceof Error)){
var e__7059__auto____$2 = e8044;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8050){if((e8050 instanceof Error)){
var e__7059__auto____$3 = e8050;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$3;
}
} else {
throw e8050;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8045){if((e8045 instanceof Error)){
var e__7059__auto____$3 = e8045;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8049){if((e8049 instanceof Error)){
var e__7059__auto____$4 = e8049;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$4;
}
} else {
throw e8049;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8046){if((e8046 instanceof Error)){
var e__7059__auto____$4 = e8046;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8048){if((e8048 instanceof Error)){
var e__7059__auto____$5 = e8048;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$5;
}
} else {
throw e8048;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8047){if((e8047 instanceof Error)){
var e__7059__auto____$5 = e8047;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$5;
}
} else {
throw e8047;

}
}} else {
throw e__7059__auto____$4;
}
} else {
throw e8046;

}
}} else {
throw e__7059__auto____$3;
}
} else {
throw e8045;

}
}} else {
throw e__7059__auto____$2;
}
} else {
throw e8044;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8008){if((e8008 instanceof Error)){
var e__7059__auto____$2 = e8008;
if((e__7059__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "small-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8009){if((e8009 instanceof Error)){
var e__7059__auto____$3 = e8009;
if((e__7059__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "medium-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8010){if((e8010 instanceof Error)){
var e__7059__auto____$4 = e8010;
if((e__7059__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "pipe")){
return g.call(null,new cljs.core.Keyword(null,"pipe","pipe",336575849));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8011){if((e8011 instanceof Error)){
var e__7059__auto____$5 = e8011;
if((e__7059__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8042){if((e8042 instanceof Error)){
var e__7059__auto____$6 = e8042;
if((e__7059__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8043){if((e8043 instanceof Error)){
var e__7059__auto____$7 = e8043;
if((e__7059__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$7;
}
} else {
throw e8043;

}
}} else {
throw e__7059__auto____$6;
}
} else {
throw e8042;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8012){if((e8012 instanceof Error)){
var e__7059__auto____$6 = e8012;
if((e__7059__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "assembling-machine-1")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8013){if((e8013 instanceof Error)){
var e__7059__auto____$7 = e8013;
if((e__7059__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "assembling-machine-2")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8014){if((e8014 instanceof Error)){
var e__7059__auto____$8 = e8014;
if((e__7059__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8041){if((e8041 instanceof Error)){
var e__7059__auto____$9 = e8041;
if((e__7059__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$9;
}
} else {
throw e8041;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8034){if((e8034 instanceof Error)){
var e__7059__auto____$9 = e8034;
if((e__7059__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8040){if((e8040 instanceof Error)){
var e__7059__auto____$10 = e8040;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$10;
}
} else {
throw e8040;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8035){if((e8035 instanceof Error)){
var e__7059__auto____$10 = e8035;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8039){if((e8039 instanceof Error)){
var e__7059__auto____$11 = e8039;
if((e__7059__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$11;
}
} else {
throw e8039;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8036){if((e8036 instanceof Error)){
var e__7059__auto____$11 = e8036;
if((e__7059__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8038){if((e8038 instanceof Error)){
var e__7059__auto____$12 = e8038;
if((e__7059__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$12;
}
} else {
throw e8038;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8037){if((e8037 instanceof Error)){
var e__7059__auto____$12 = e8037;
if((e__7059__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$12;
}
} else {
throw e8037;

}
}} else {
throw e__7059__auto____$11;
}
} else {
throw e8036;

}
}} else {
throw e__7059__auto____$10;
}
} else {
throw e8035;

}
}} else {
throw e__7059__auto____$9;
}
} else {
throw e8034;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8015){if((e8015 instanceof Error)){
var e__7059__auto____$9 = e8015;
if((e__7059__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8033){if((e8033 instanceof Error)){
var e__7059__auto____$10 = e8033;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$10;
}
} else {
throw e8033;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8026){if((e8026 instanceof Error)){
var e__7059__auto____$10 = e8026;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8032){if((e8032 instanceof Error)){
var e__7059__auto____$11 = e8032;
if((e__7059__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$11;
}
} else {
throw e8032;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8027){if((e8027 instanceof Error)){
var e__7059__auto____$11 = e8027;
if((e__7059__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8031){if((e8031 instanceof Error)){
var e__7059__auto____$12 = e8031;
if((e__7059__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$12;
}
} else {
throw e8031;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8028){if((e8028 instanceof Error)){
var e__7059__auto____$12 = e8028;
if((e__7059__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_7972 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8030){if((e8030 instanceof Error)){
var e__7059__auto____$13 = e8030;
if((e__7059__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$13;
}
} else {
throw e8030;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8029){if((e8029 instanceof Error)){
var e__7059__auto____$13 = e8029;
if((e__7059__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7059__auto____$13;
}
} else {
throw e8029;

}
}} else {
throw e__7059__auto____$12;
}
} else {
throw e8028;

}
}} else {
throw e__7059__auto____$11;
}
} else {
throw e8027;

}
}} else {
throw e__7059__auto____$10;
}
} else {
throw e8026;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8016){if((e8016 instanceof Error)){
var e__7059__auto____$10 = e8016;
if((e__7059__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "chemical-plant")){
return g.call(null,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8017){if((e8017 instanceof Error)){
var e__7059__auto____$11 = e8017;
if((e__7059__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "oil-refinery")){
return g.call(null,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8018){if((e8018 instanceof Error)){
var e__7059__auto____$12 = e8018;
if((e__7059__auto____$12 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "lab")){
return g.call(null,new cljs.core.Keyword(null,"lab","lab",-1187867934));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8019){if((e8019 instanceof Error)){
var e__7059__auto____$13 = e8019;
if((e__7059__auto____$13 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "electric-furnace")){
return g.call(null,new cljs.core.Keyword(null,"furnace","furnace",-1572266656));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8020){if((e8020 instanceof Error)){
var e__7059__auto____$14 = e8020;
if((e__7059__auto____$14 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "stone-furnace")){
return g.call(null,new cljs.core.Keyword(null,"stone-furnace","stone-furnace",663242727),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8021){if((e8021 instanceof Error)){
var e__7059__auto____$15 = e8021;
if((e__7059__auto____$15 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "steel-furnace")){
return g.call(null,new cljs.core.Keyword(null,"stone-furnace","stone-furnace",663242727),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8022){if((e8022 instanceof Error)){
var e__7059__auto____$16 = e8022;
if((e__7059__auto____$16 === cljs.core.match.backtrack)){
try{if((ocr_7970 === "splitter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"n","n",562130025))){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8024){if((e8024 instanceof Error)){
var e__7059__auto____$17 = e8024;
if((e__7059__auto____$17 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7971,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8025){if((e8025 instanceof Error)){
var e__7059__auto____$18 = e8025;
if((e__7059__auto____$18 === cljs.core.match.backtrack)){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null));
} else {
throw e__7059__auto____$18;
}
} else {
throw e8025;

}
}} else {
throw e__7059__auto____$17;
}
} else {
throw e8024;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8023){if((e8023 instanceof Error)){
var e__7059__auto____$17 = e8023;
if((e__7059__auto____$17 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_7970)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_7971)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_7972)].join('')));
} else {
throw e__7059__auto____$17;
}
} else {
throw e8023;

}
}} else {
throw e__7059__auto____$16;
}
} else {
throw e8022;

}
}} else {
throw e__7059__auto____$15;
}
} else {
throw e8021;

}
}} else {
throw e__7059__auto____$14;
}
} else {
throw e8020;

}
}} else {
throw e__7059__auto____$13;
}
} else {
throw e8019;

}
}} else {
throw e__7059__auto____$12;
}
} else {
throw e8018;

}
}} else {
throw e__7059__auto____$11;
}
} else {
throw e8017;

}
}} else {
throw e__7059__auto____$10;
}
} else {
throw e8016;

}
}} else {
throw e__7059__auto____$9;
}
} else {
throw e8015;

}
}} else {
throw e__7059__auto____$8;
}
} else {
throw e8014;

}
}} else {
throw e__7059__auto____$7;
}
} else {
throw e8013;

}
}} else {
throw e__7059__auto____$6;
}
} else {
throw e8012;

}
}} else {
throw e__7059__auto____$5;
}
} else {
throw e8011;

}
}} else {
throw e__7059__auto____$4;
}
} else {
throw e8010;

}
}} else {
throw e__7059__auto____$3;
}
} else {
throw e8009;

}
}} else {
throw e__7059__auto____$2;
}
} else {
throw e8008;

}
}} else {
throw e__7059__auto____$1;
}
} else {
throw e8007;

}
}} else {
throw e__7059__auto__;
}
} else {
throw e8006;

}
}});
busmaker.pixi.margin_x = (2);
busmaker.pixi.viewport_window = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null);
busmaker.pixi.entities_stage_children = (function busmaker$pixi$entities_stage_children(entities){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8071_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__8071_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__8071_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8072(s__8073){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8073__$1 = s__8073;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8073__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8073__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8072_$_iter__8074(s__8075){
return (new cljs.core.LazySeq(null,((function (s__8073__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8075__$1 = s__8075;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8075__$1);
if(temp__5457__auto____$1){
var s__8075__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8075__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8075__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8077 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8076 = (0);
while(true){
if((i__8076 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__8076);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
cljs.core.chunk_append.call(null,b__8077,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));

var G__8078 = (i__8076 + (1));
i__8076 = G__8078;
continue;
} else {
var G__8079 = (i__8076 + (1));
i__8076 = G__8079;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8077),busmaker$pixi$entities_stage_children_$_iter__8072_$_iter__8074.call(null,cljs.core.chunk_rest.call(null,s__8075__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8077),null);
}
} else {
var x = cljs.core.first.call(null,s__8075__$2);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
return cljs.core.cons.call(null,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),busmaker$pixi$entities_stage_children_$_iter__8072_$_iter__8074.call(null,cljs.core.rest.call(null,s__8075__$2)));
} else {
var G__8080 = cljs.core.rest.call(null,s__8075__$2);
s__8075__$1 = G__8080;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8073__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(s__8073__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,dx)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$pixi$entities_stage_children_$_iter__8072.call(null,cljs.core.rest.call(null,s__8073__$1)));
} else {
var G__8081 = cljs.core.rest.call(null,s__8073__$1);
s__8073__$1 = G__8081;
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
busmaker.pixi.solution_stage = (function busmaker$pixi$solution_stage(children,position,drag){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("impi","key","impi/key",-1519343542),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),position,new cljs.core.Keyword("pixi.object","scale","pixi.object/scale",-1402499546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,drag,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1)),cljs.core.get.call(null,drag,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1))], null),new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","container","pixi.object.type/container",-361427118),new cljs.core.Keyword("pixi.container","children","pixi.container/children",1768703103),children], null);
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
busmaker.pixi.zoom = (function busmaker$pixi$zoom(old_pos,old_scale,s,x,y){
var s__$1 = (((s > (0)))?1.1:0.9);
var world_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - old_pos.call(null,(0))) / old_scale.call(null,(0))),((y - old_pos.call(null,(1))) / old_scale.call(null,(1)))], null);
var new_scale = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s__$1 * old_scale.call(null,(0))),(s__$1 * old_scale.call(null,(1)))], null);
var new_screen_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(old_pos.call(null,(0)) + (world_pos.call(null,(0)) * new_scale.call(null,(0)))),(old_pos.call(null,(1)) + (world_pos.call(null,(1)) * new_scale.call(null,(1))))], null);
var new_stage_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(old_pos.call(null,(0)) - (new_screen_pos.call(null,(0)) - x)),(old_pos.call(null,(1)) - (new_screen_pos.call(null,(1)) - y))], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_stage_pos,new_scale], null);
});
busmaker.pixi.render_stage_BANG_ = (function busmaker$pixi$render_stage_BANG_(state,drag,children,id){
var vec__8082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),(800)], null);
var w = cljs.core.nth.call(null,vec__8082,(0),null);
var h = cljs.core.nth.call(null,vec__8082,(1),null);
var vec__8085 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8085,(0),null);
return impi.core.mount.call(null,new cljs.core.Keyword(null,"blueprint","blueprint",-1146485308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null)], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),cljs.core.merge.call(null,busmaker.pixi.solution_stage.call(null,children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null),cljs.core.deref.call(null,drag)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),cljs.core.constantly.call(null,true),new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430)], null),new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732)], null),new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217)], null)], null)),new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),((function (vec__8082,w,h,vec__8085,app_state){
return (function (_,entity){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(vec__8082,w,h,vec__8085,app_state))
,new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430),((function (vec__8082,w,h,vec__8085,app_state){
return (function (e){
var map__8088 = cljs.core.deref.call(null,drag);
var map__8088__$1 = ((((!((map__8088 == null)))?(((((map__8088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8088):map__8088);
var x = cljs.core.get.call(null,map__8088__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8088__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.data.originalEvent.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.data.originalEvent.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
});})(vec__8082,w,h,vec__8085,app_state))
,new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217),((function (vec__8082,w,h,vec__8085,app_state){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__8090 = cljs.core.deref.call(null,drag);
var map__8090__$1 = ((((!((map__8090 == null)))?(((((map__8090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8090):map__8090);
var x = cljs.core.get.call(null,map__8090__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8090__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__8090__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__8090__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__8090__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__8090__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dmx = (mx0 - e.data.originalEvent.clientX);
var dmy = (my0 - e.data.originalEvent.clientY);
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(x0 - dmx),new cljs.core.Keyword(null,"y","y",-1757859776),(y0 - dmy));
} else {
return null;
}
});})(vec__8082,w,h,vec__8085,app_state))
,new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732),((function (vec__8082,w,h,vec__8085,app_state){
return (function (_){
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(vec__8082,w,h,vec__8085,app_state))
], null)], null),rum.core.dom_node.call(null,state));
});
busmaker.pixi.listen_BANG_ = (function busmaker$pixi$listen_BANG_(drag){
return (function (e){
e.preventDefault();

var vec__8092 = busmaker.pixi.zoom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1)),cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1))], null),(- e.deltaY),e.offsetX,e.offsetY);
var new_stage_pos = cljs.core.nth.call(null,vec__8092,(0),null);
var new_scale = cljs.core.nth.call(null,vec__8092,(1),null);
return cljs.core.swap_BANG_.call(null,drag,((function (vec__8092,new_stage_pos,new_scale){
return (function (drag__$1){
return cljs.core.assoc.call(null,drag__$1,new cljs.core.Keyword(null,"x","x",2099068185),new_stage_pos.call(null,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),new_stage_pos.call(null,(1)),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),new_scale.call(null,(0)),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),new_scale.call(null,(1)));
});})(vec__8092,new_stage_pos,new_scale))
);
});
});
busmaker.pixi.impi = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var drag = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null));
var vec__8095 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8095,(0),null);
var children = cljs.core.atom.call(null,cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
var id = cljs.core.rand_int.call(null,(10000));
busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);

rum.core.dom_node.call(null,state).addEventListener("wheel",busmaker.pixi.listen_BANG_.call(null,drag));

cljs.core.add_watch.call(null,drag,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (drag,vec__8095,app_state,children,id){
return (function() { 
var G__8101__delegate = function (_){
return busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);
};
var G__8101 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8102__i = 0, G__8102__a = new Array(arguments.length -  0);
while (G__8102__i < G__8102__a.length) {G__8102__a[G__8102__i] = arguments[G__8102__i + 0]; ++G__8102__i;}
  _ = new cljs.core.IndexedSeq(G__8102__a,0,null);
} 
return G__8101__delegate.call(this,_);};
G__8101.cljs$lang$maxFixedArity = 0;
G__8101.cljs$lang$applyTo = (function (arglist__8103){
var _ = cljs.core.seq(arglist__8103);
return G__8101__delegate(_);
});
G__8101.cljs$core$IFn$_invoke$arity$variadic = G__8101__delegate;
return G__8101;
})()
;})(drag,vec__8095,app_state,children,id))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),drag,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378),children,new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984),id);
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
var vec__8098_8104 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state_8105 = cljs.core.nth.call(null,vec__8098_8104,(0),null);
busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state),cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state_8105))))),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));

cljs.core.add_watch.call(null,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (vec__8098_8104,app_state_8105){
return (function (k,r,o,n){
return busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.deref.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));
});})(vec__8098_8104,app_state_8105))
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
