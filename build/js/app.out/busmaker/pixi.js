// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.pixi');
goog.require('cljs.core');
goog.require('impi.core');
goog.require('rum.core');
goog.require('cljs.core.match');
goog.require('goog.style');
goog.require('goog.dom');
busmaker.pixi.direction = (function busmaker$pixi$direction(d){
var G__8065 = d;
switch (G__8065) {
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
var G__8168__delegate = function (v,p__8067){
var map__8068 = p__8067;
var map__8068__$1 = ((((!((map__8068 == null)))?(((((map__8068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8068):map__8068);
var rotate = cljs.core.get.call(null,map__8068__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0));
var translate = cljs.core.get.call(null,map__8068__$1,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","sprite","pixi.object.type/sprite",-1129625685),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((16) * x),((16) * y)], null),translate),new cljs.core.Keyword("pixi.sprite","anchor","pixi.sprite/anchor",-1761208072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844),busmaker.pixi.widgets.call(null,v)], null),new cljs.core.Keyword("pixi.object","rotation","pixi.object/rotation",-1091789503),(Math.PI * (rotate / (180))),new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.event","mouse-over","pixi.event/mouse-over",584256675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),entity], null)], null);
};
var G__8168 = function (v,var_args){
var p__8067 = null;
if (arguments.length > 1) {
var G__8169__i = 0, G__8169__a = new Array(arguments.length -  1);
while (G__8169__i < G__8169__a.length) {G__8169__a[G__8169__i] = arguments[G__8169__i + 1]; ++G__8169__i;}
  p__8067 = new cljs.core.IndexedSeq(G__8169__a,0,null);
} 
return G__8168__delegate.call(this,v,p__8067);};
G__8168.cljs$lang$maxFixedArity = 1;
G__8168.cljs$lang$applyTo = (function (arglist__8170){
var v = cljs.core.first(arglist__8170);
var p__8067 = cljs.core.rest(arglist__8170);
return G__8168__delegate(v,p__8067);
});
G__8168.cljs$core$IFn$_invoke$arity$variadic = G__8168__delegate;
return G__8168;
})()
;
var ocr_8070 = cljs.core.get.call(null,entity,"name");
var ocr_8071 = busmaker.pixi.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_8072 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_8070 === "grass")){
return g.call(null,new cljs.core.Keyword(null,"grass","grass",1213050421));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8106){if((e8106 instanceof Error)){
var e__7159__auto__ = e8106;
if((e__7159__auto__ === cljs.core.match.backtrack)){
try{if((ocr_8070 === "underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8072,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8167){if((e8167 instanceof Error)){
var e__7159__auto____$1 = e8167;
if((e__7159__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$1;
}
} else {
throw e8167;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8152){if((e8152 instanceof Error)){
var e__7159__auto____$1 = e8152;
if((e__7159__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8072,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8166){if((e8166 instanceof Error)){
var e__7159__auto____$2 = e8166;
if((e__7159__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$2;
}
} else {
throw e8166;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8153){if((e8153 instanceof Error)){
var e__7159__auto____$2 = e8153;
if((e__7159__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8072,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8165){if((e8165 instanceof Error)){
var e__7159__auto____$3 = e8165;
if((e__7159__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$3;
}
} else {
throw e8165;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8154){if((e8154 instanceof Error)){
var e__7159__auto____$3 = e8154;
if((e__7159__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8072,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8164){if((e8164 instanceof Error)){
var e__7159__auto____$4 = e8164;
if((e__7159__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$4;
}
} else {
throw e8164;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8155){if((e8155 instanceof Error)){
var e__7159__auto____$4 = e8155;
if((e__7159__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8072,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8163){if((e8163 instanceof Error)){
var e__7159__auto____$5 = e8163;
if((e__7159__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$5;
}
} else {
throw e8163;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8156){if((e8156 instanceof Error)){
var e__7159__auto____$5 = e8156;
if((e__7159__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8072,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8162){if((e8162 instanceof Error)){
var e__7159__auto____$6 = e8162;
if((e__7159__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$6;
}
} else {
throw e8162;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8157){if((e8157 instanceof Error)){
var e__7159__auto____$6 = e8157;
if((e__7159__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8072,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8161){if((e8161 instanceof Error)){
var e__7159__auto____$7 = e8161;
if((e__7159__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$7;
}
} else {
throw e8161;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8158){if((e8158 instanceof Error)){
var e__7159__auto____$7 = e8158;
if((e__7159__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8072,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8160){if((e8160 instanceof Error)){
var e__7159__auto____$8 = e8160;
if((e__7159__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$8;
}
} else {
throw e8160;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8159){if((e8159 instanceof Error)){
var e__7159__auto____$8 = e8159;
if((e__7159__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$8;
}
} else {
throw e8159;

}
}} else {
throw e__7159__auto____$7;
}
} else {
throw e8158;

}
}} else {
throw e__7159__auto____$6;
}
} else {
throw e8157;

}
}} else {
throw e__7159__auto____$5;
}
} else {
throw e8156;

}
}} else {
throw e__7159__auto____$4;
}
} else {
throw e8155;

}
}} else {
throw e__7159__auto____$3;
}
} else {
throw e8154;

}
}} else {
throw e__7159__auto____$2;
}
} else {
throw e8153;

}
}} else {
throw e__7159__auto____$1;
}
} else {
throw e8152;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8107){if((e8107 instanceof Error)){
var e__7159__auto____$1 = e8107;
if((e__7159__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8151){if((e8151 instanceof Error)){
var e__7159__auto____$2 = e8151;
if((e__7159__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$2;
}
} else {
throw e8151;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8144){if((e8144 instanceof Error)){
var e__7159__auto____$2 = e8144;
if((e__7159__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8150){if((e8150 instanceof Error)){
var e__7159__auto____$3 = e8150;
if((e__7159__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$3;
}
} else {
throw e8150;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8145){if((e8145 instanceof Error)){
var e__7159__auto____$3 = e8145;
if((e__7159__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8149){if((e8149 instanceof Error)){
var e__7159__auto____$4 = e8149;
if((e__7159__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$4;
}
} else {
throw e8149;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8146){if((e8146 instanceof Error)){
var e__7159__auto____$4 = e8146;
if((e__7159__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8148){if((e8148 instanceof Error)){
var e__7159__auto____$5 = e8148;
if((e__7159__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$5;
}
} else {
throw e8148;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8147){if((e8147 instanceof Error)){
var e__7159__auto____$5 = e8147;
if((e__7159__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$5;
}
} else {
throw e8147;

}
}} else {
throw e__7159__auto____$4;
}
} else {
throw e8146;

}
}} else {
throw e__7159__auto____$3;
}
} else {
throw e8145;

}
}} else {
throw e__7159__auto____$2;
}
} else {
throw e8144;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8108){if((e8108 instanceof Error)){
var e__7159__auto____$2 = e8108;
if((e__7159__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "small-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8109){if((e8109 instanceof Error)){
var e__7159__auto____$3 = e8109;
if((e__7159__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "medium-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8110){if((e8110 instanceof Error)){
var e__7159__auto____$4 = e8110;
if((e__7159__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "pipe")){
return g.call(null,new cljs.core.Keyword(null,"pipe","pipe",336575849));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8111){if((e8111 instanceof Error)){
var e__7159__auto____$5 = e8111;
if((e__7159__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8142){if((e8142 instanceof Error)){
var e__7159__auto____$6 = e8142;
if((e__7159__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8143){if((e8143 instanceof Error)){
var e__7159__auto____$7 = e8143;
if((e__7159__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$7;
}
} else {
throw e8143;

}
}} else {
throw e__7159__auto____$6;
}
} else {
throw e8142;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8112){if((e8112 instanceof Error)){
var e__7159__auto____$6 = e8112;
if((e__7159__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "assembling-machine-1")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8113){if((e8113 instanceof Error)){
var e__7159__auto____$7 = e8113;
if((e__7159__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "assembling-machine-2")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8114){if((e8114 instanceof Error)){
var e__7159__auto____$8 = e8114;
if((e__7159__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8141){if((e8141 instanceof Error)){
var e__7159__auto____$9 = e8141;
if((e__7159__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$9;
}
} else {
throw e8141;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8134){if((e8134 instanceof Error)){
var e__7159__auto____$9 = e8134;
if((e__7159__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8140){if((e8140 instanceof Error)){
var e__7159__auto____$10 = e8140;
if((e__7159__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$10;
}
} else {
throw e8140;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8135){if((e8135 instanceof Error)){
var e__7159__auto____$10 = e8135;
if((e__7159__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8139){if((e8139 instanceof Error)){
var e__7159__auto____$11 = e8139;
if((e__7159__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$11;
}
} else {
throw e8139;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8136){if((e8136 instanceof Error)){
var e__7159__auto____$11 = e8136;
if((e__7159__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8138){if((e8138 instanceof Error)){
var e__7159__auto____$12 = e8138;
if((e__7159__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$12;
}
} else {
throw e8138;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8137){if((e8137 instanceof Error)){
var e__7159__auto____$12 = e8137;
if((e__7159__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$12;
}
} else {
throw e8137;

}
}} else {
throw e__7159__auto____$11;
}
} else {
throw e8136;

}
}} else {
throw e__7159__auto____$10;
}
} else {
throw e8135;

}
}} else {
throw e__7159__auto____$9;
}
} else {
throw e8134;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8115){if((e8115 instanceof Error)){
var e__7159__auto____$9 = e8115;
if((e__7159__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8133){if((e8133 instanceof Error)){
var e__7159__auto____$10 = e8133;
if((e__7159__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$10;
}
} else {
throw e8133;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8126){if((e8126 instanceof Error)){
var e__7159__auto____$10 = e8126;
if((e__7159__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8132){if((e8132 instanceof Error)){
var e__7159__auto____$11 = e8132;
if((e__7159__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$11;
}
} else {
throw e8132;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8127){if((e8127 instanceof Error)){
var e__7159__auto____$11 = e8127;
if((e__7159__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8131){if((e8131 instanceof Error)){
var e__7159__auto____$12 = e8131;
if((e__7159__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$12;
}
} else {
throw e8131;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8128){if((e8128 instanceof Error)){
var e__7159__auto____$12 = e8128;
if((e__7159__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8072 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8130){if((e8130 instanceof Error)){
var e__7159__auto____$13 = e8130;
if((e__7159__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$13;
}
} else {
throw e8130;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8129){if((e8129 instanceof Error)){
var e__7159__auto____$13 = e8129;
if((e__7159__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7159__auto____$13;
}
} else {
throw e8129;

}
}} else {
throw e__7159__auto____$12;
}
} else {
throw e8128;

}
}} else {
throw e__7159__auto____$11;
}
} else {
throw e8127;

}
}} else {
throw e__7159__auto____$10;
}
} else {
throw e8126;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8116){if((e8116 instanceof Error)){
var e__7159__auto____$10 = e8116;
if((e__7159__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "chemical-plant")){
return g.call(null,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8117){if((e8117 instanceof Error)){
var e__7159__auto____$11 = e8117;
if((e__7159__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "oil-refinery")){
return g.call(null,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8118){if((e8118 instanceof Error)){
var e__7159__auto____$12 = e8118;
if((e__7159__auto____$12 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "lab")){
return g.call(null,new cljs.core.Keyword(null,"lab","lab",-1187867934));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8119){if((e8119 instanceof Error)){
var e__7159__auto____$13 = e8119;
if((e__7159__auto____$13 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "electric-furnace")){
return g.call(null,new cljs.core.Keyword(null,"furnace","furnace",-1572266656));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8120){if((e8120 instanceof Error)){
var e__7159__auto____$14 = e8120;
if((e__7159__auto____$14 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "stone-furnace")){
return g.call(null,new cljs.core.Keyword(null,"stone-furnace","stone-furnace",663242727),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8121){if((e8121 instanceof Error)){
var e__7159__auto____$15 = e8121;
if((e__7159__auto____$15 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "steel-furnace")){
return g.call(null,new cljs.core.Keyword(null,"stone-furnace","stone-furnace",663242727),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8122){if((e8122 instanceof Error)){
var e__7159__auto____$16 = e8122;
if((e__7159__auto____$16 === cljs.core.match.backtrack)){
try{if((ocr_8070 === "splitter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"n","n",562130025))){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8124){if((e8124 instanceof Error)){
var e__7159__auto____$17 = e8124;
if((e__7159__auto____$17 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8071,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8125){if((e8125 instanceof Error)){
var e__7159__auto____$18 = e8125;
if((e__7159__auto____$18 === cljs.core.match.backtrack)){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null));
} else {
throw e__7159__auto____$18;
}
} else {
throw e8125;

}
}} else {
throw e__7159__auto____$17;
}
} else {
throw e8124;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8123){if((e8123 instanceof Error)){
var e__7159__auto____$17 = e8123;
if((e__7159__auto____$17 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8070)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8071)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8072)].join('')));
} else {
throw e__7159__auto____$17;
}
} else {
throw e8123;

}
}} else {
throw e__7159__auto____$16;
}
} else {
throw e8122;

}
}} else {
throw e__7159__auto____$15;
}
} else {
throw e8121;

}
}} else {
throw e__7159__auto____$14;
}
} else {
throw e8120;

}
}} else {
throw e__7159__auto____$13;
}
} else {
throw e8119;

}
}} else {
throw e__7159__auto____$12;
}
} else {
throw e8118;

}
}} else {
throw e__7159__auto____$11;
}
} else {
throw e8117;

}
}} else {
throw e__7159__auto____$10;
}
} else {
throw e8116;

}
}} else {
throw e__7159__auto____$9;
}
} else {
throw e8115;

}
}} else {
throw e__7159__auto____$8;
}
} else {
throw e8114;

}
}} else {
throw e__7159__auto____$7;
}
} else {
throw e8113;

}
}} else {
throw e__7159__auto____$6;
}
} else {
throw e8112;

}
}} else {
throw e__7159__auto____$5;
}
} else {
throw e8111;

}
}} else {
throw e__7159__auto____$4;
}
} else {
throw e8110;

}
}} else {
throw e__7159__auto____$3;
}
} else {
throw e8109;

}
}} else {
throw e__7159__auto____$2;
}
} else {
throw e8108;

}
}} else {
throw e__7159__auto____$1;
}
} else {
throw e8107;

}
}} else {
throw e__7159__auto__;
}
} else {
throw e8106;

}
}});
busmaker.pixi.margin_x = (2);
busmaker.pixi.viewport_window = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null);
busmaker.pixi.entities_stage_children = (function busmaker$pixi$entities_stage_children(entities){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8171_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__8171_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__8171_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8172(s__8173){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8173__$1 = s__8173;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8173__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8173__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8172_$_iter__8174(s__8175){
return (new cljs.core.LazySeq(null,((function (s__8173__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8175__$1 = s__8175;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8175__$1);
if(temp__5457__auto____$1){
var s__8175__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8175__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8175__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8177 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8176 = (0);
while(true){
if((i__8176 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__8176);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
cljs.core.chunk_append.call(null,b__8177,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));

var G__8178 = (i__8176 + (1));
i__8176 = G__8178;
continue;
} else {
var G__8179 = (i__8176 + (1));
i__8176 = G__8179;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8177),busmaker$pixi$entities_stage_children_$_iter__8172_$_iter__8174.call(null,cljs.core.chunk_rest.call(null,s__8175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8177),null);
}
} else {
var x = cljs.core.first.call(null,s__8175__$2);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
return cljs.core.cons.call(null,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),busmaker$pixi$entities_stage_children_$_iter__8172_$_iter__8174.call(null,cljs.core.rest.call(null,s__8175__$2)));
} else {
var G__8180 = cljs.core.rest.call(null,s__8175__$2);
s__8175__$1 = G__8180;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8173__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(s__8173__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,dx)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$pixi$entities_stage_children_$_iter__8172.call(null,cljs.core.rest.call(null,s__8173__$1)));
} else {
var G__8181 = cljs.core.rest.call(null,s__8173__$1);
s__8173__$1 = G__8181;
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
var vec__8182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),(800)], null);
var w = cljs.core.nth.call(null,vec__8182,(0),null);
var h = cljs.core.nth.call(null,vec__8182,(1),null);
var vec__8185 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8185,(0),null);
return impi.core.mount.call(null,new cljs.core.Keyword(null,"blueprint","blueprint",-1146485308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null)], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),cljs.core.merge.call(null,busmaker.pixi.solution_stage.call(null,children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),cljs.core.constantly.call(null,true),new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430)], null),new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732)], null),new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217)], null)], null)),new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),((function (vec__8182,w,h,vec__8185,app_state){
return (function (_,entity){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(vec__8182,w,h,vec__8185,app_state))
,new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430),((function (vec__8182,w,h,vec__8185,app_state){
return (function (e){
var map__8188 = cljs.core.deref.call(null,drag);
var map__8188__$1 = ((((!((map__8188 == null)))?(((((map__8188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8188):map__8188);
var x = cljs.core.get.call(null,map__8188__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8188__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.data.originalEvent.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.data.originalEvent.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
});})(vec__8182,w,h,vec__8185,app_state))
,new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217),((function (vec__8182,w,h,vec__8185,app_state){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__8190 = cljs.core.deref.call(null,drag);
var map__8190__$1 = ((((!((map__8190 == null)))?(((((map__8190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8190):map__8190);
var x = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dmx = (mx0 - e.data.originalEvent.clientX);
var dmy = (my0 - e.data.originalEvent.clientY);
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(x0 - dmx),new cljs.core.Keyword(null,"y","y",-1757859776),(y0 - dmy));
} else {
return null;
}
});})(vec__8182,w,h,vec__8185,app_state))
,new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732),((function (vec__8182,w,h,vec__8185,app_state){
return (function (_){
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(vec__8182,w,h,vec__8185,app_state))
], null)], null),rum.core.dom_node.call(null,state));
});
busmaker.pixi.impi = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var drag = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var vec__8192 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8192,(0),null);
var children = cljs.core.atom.call(null,cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
var id = cljs.core.rand_int.call(null,(10000));
busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);

cljs.core.add_watch.call(null,drag,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (drag,vec__8192,app_state,children,id){
return (function() { 
var G__8198__delegate = function (_){
return busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);
};
var G__8198 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8199__i = 0, G__8199__a = new Array(arguments.length -  0);
while (G__8199__i < G__8199__a.length) {G__8199__a[G__8199__i] = arguments[G__8199__i + 0]; ++G__8199__i;}
  _ = new cljs.core.IndexedSeq(G__8199__a,0,null);
} 
return G__8198__delegate.call(this,_);};
G__8198.cljs$lang$maxFixedArity = 0;
G__8198.cljs$lang$applyTo = (function (arglist__8200){
var _ = cljs.core.seq(arglist__8200);
return G__8198__delegate(_);
});
G__8198.cljs$core$IFn$_invoke$arity$variadic = G__8198__delegate;
return G__8198;
})()
;})(drag,vec__8192,app_state,children,id))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),drag,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378),children,new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984),id);
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
var vec__8195_8201 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state_8202 = cljs.core.nth.call(null,vec__8195_8201,(0),null);
busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state),cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state_8202))))),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));

cljs.core.add_watch.call(null,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (vec__8195_8201,app_state_8202){
return (function (k,r,o,n){
return busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.deref.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));
});})(vec__8195_8201,app_state_8202))
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
