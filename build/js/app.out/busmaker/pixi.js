// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.pixi');
goog.require('cljs.core');
goog.require('impi.core');
goog.require('rum.core');
goog.require('cljs.core.match');
goog.require('goog.style');
goog.require('goog.dom');
busmaker.pixi.direction = (function busmaker$pixi$direction(d){
var G__8088 = d;
switch (G__8088) {
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
var G__8187__delegate = function (v,p__8090){
var map__8091 = p__8090;
var map__8091__$1 = ((((!((map__8091 == null)))?(((((map__8091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8091):map__8091);
var rotate = cljs.core.get.call(null,map__8091__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0));
var translate = cljs.core.get.call(null,map__8091__$1,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","sprite","pixi.object.type/sprite",-1129625685),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((16) * x),((16) * y)], null),translate),new cljs.core.Keyword("pixi.sprite","anchor","pixi.sprite/anchor",-1761208072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844),busmaker.pixi.widgets.call(null,v)], null),new cljs.core.Keyword("pixi.object","rotation","pixi.object/rotation",-1091789503),(Math.PI * (rotate / (180))),new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.event","mouse-over","pixi.event/mouse-over",584256675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),entity], null)], null);
};
var G__8187 = function (v,var_args){
var p__8090 = null;
if (arguments.length > 1) {
var G__8188__i = 0, G__8188__a = new Array(arguments.length -  1);
while (G__8188__i < G__8188__a.length) {G__8188__a[G__8188__i] = arguments[G__8188__i + 1]; ++G__8188__i;}
  p__8090 = new cljs.core.IndexedSeq(G__8188__a,0,null);
} 
return G__8187__delegate.call(this,v,p__8090);};
G__8187.cljs$lang$maxFixedArity = 1;
G__8187.cljs$lang$applyTo = (function (arglist__8189){
var v = cljs.core.first(arglist__8189);
var p__8090 = cljs.core.rest(arglist__8189);
return G__8187__delegate(v,p__8090);
});
G__8187.cljs$core$IFn$_invoke$arity$variadic = G__8187__delegate;
return G__8187;
})()
;
var ocr_8093 = cljs.core.get.call(null,entity,"name");
var ocr_8094 = busmaker.pixi.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_8095 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_8093 === "grass")){
return g.call(null,new cljs.core.Keyword(null,"grass","grass",1213050421));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8127){if((e8127 instanceof Error)){
var e__6487__auto__ = e8127;
if((e__6487__auto__ === cljs.core.match.backtrack)){
try{if((ocr_8093 === "underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8095,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8186){if((e8186 instanceof Error)){
var e__6487__auto____$1 = e8186;
if((e__6487__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$1;
}
} else {
throw e8186;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8171){if((e8171 instanceof Error)){
var e__6487__auto____$1 = e8171;
if((e__6487__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8095,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8185){if((e8185 instanceof Error)){
var e__6487__auto____$2 = e8185;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$2;
}
} else {
throw e8185;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8172){if((e8172 instanceof Error)){
var e__6487__auto____$2 = e8172;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8095,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8184){if((e8184 instanceof Error)){
var e__6487__auto____$3 = e8184;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$3;
}
} else {
throw e8184;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8173){if((e8173 instanceof Error)){
var e__6487__auto____$3 = e8173;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8095,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8183){if((e8183 instanceof Error)){
var e__6487__auto____$4 = e8183;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$4;
}
} else {
throw e8183;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8174){if((e8174 instanceof Error)){
var e__6487__auto____$4 = e8174;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8095,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8182){if((e8182 instanceof Error)){
var e__6487__auto____$5 = e8182;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$5;
}
} else {
throw e8182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8175){if((e8175 instanceof Error)){
var e__6487__auto____$5 = e8175;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8095,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8181){if((e8181 instanceof Error)){
var e__6487__auto____$6 = e8181;
if((e__6487__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$6;
}
} else {
throw e8181;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8176){if((e8176 instanceof Error)){
var e__6487__auto____$6 = e8176;
if((e__6487__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8095,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8180){if((e8180 instanceof Error)){
var e__6487__auto____$7 = e8180;
if((e__6487__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$7;
}
} else {
throw e8180;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8177){if((e8177 instanceof Error)){
var e__6487__auto____$7 = e8177;
if((e__6487__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8095,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8179){if((e8179 instanceof Error)){
var e__6487__auto____$8 = e8179;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$8;
}
} else {
throw e8179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8178){if((e8178 instanceof Error)){
var e__6487__auto____$8 = e8178;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$8;
}
} else {
throw e8178;

}
}} else {
throw e__6487__auto____$7;
}
} else {
throw e8177;

}
}} else {
throw e__6487__auto____$6;
}
} else {
throw e8176;

}
}} else {
throw e__6487__auto____$5;
}
} else {
throw e8175;

}
}} else {
throw e__6487__auto____$4;
}
} else {
throw e8174;

}
}} else {
throw e__6487__auto____$3;
}
} else {
throw e8173;

}
}} else {
throw e__6487__auto____$2;
}
} else {
throw e8172;

}
}} else {
throw e__6487__auto____$1;
}
} else {
throw e8171;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8128){if((e8128 instanceof Error)){
var e__6487__auto____$1 = e8128;
if((e__6487__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8170){if((e8170 instanceof Error)){
var e__6487__auto____$2 = e8170;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$2;
}
} else {
throw e8170;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8163){if((e8163 instanceof Error)){
var e__6487__auto____$2 = e8163;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8169){if((e8169 instanceof Error)){
var e__6487__auto____$3 = e8169;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$3;
}
} else {
throw e8169;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8164){if((e8164 instanceof Error)){
var e__6487__auto____$3 = e8164;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8168){if((e8168 instanceof Error)){
var e__6487__auto____$4 = e8168;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$4;
}
} else {
throw e8168;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8165){if((e8165 instanceof Error)){
var e__6487__auto____$4 = e8165;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8167){if((e8167 instanceof Error)){
var e__6487__auto____$5 = e8167;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$5;
}
} else {
throw e8167;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8166){if((e8166 instanceof Error)){
var e__6487__auto____$5 = e8166;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$5;
}
} else {
throw e8166;

}
}} else {
throw e__6487__auto____$4;
}
} else {
throw e8165;

}
}} else {
throw e__6487__auto____$3;
}
} else {
throw e8164;

}
}} else {
throw e__6487__auto____$2;
}
} else {
throw e8163;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8129){if((e8129 instanceof Error)){
var e__6487__auto____$2 = e8129;
if((e__6487__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "small-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8130){if((e8130 instanceof Error)){
var e__6487__auto____$3 = e8130;
if((e__6487__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "medium-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8131){if((e8131 instanceof Error)){
var e__6487__auto____$4 = e8131;
if((e__6487__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "pipe")){
return g.call(null,new cljs.core.Keyword(null,"pipe","pipe",336575849));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8132){if((e8132 instanceof Error)){
var e__6487__auto____$5 = e8132;
if((e__6487__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8161){if((e8161 instanceof Error)){
var e__6487__auto____$6 = e8161;
if((e__6487__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8162){if((e8162 instanceof Error)){
var e__6487__auto____$7 = e8162;
if((e__6487__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$7;
}
} else {
throw e8162;

}
}} else {
throw e__6487__auto____$6;
}
} else {
throw e8161;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8133){if((e8133 instanceof Error)){
var e__6487__auto____$6 = e8133;
if((e__6487__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "assembling-machine-1")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8134){if((e8134 instanceof Error)){
var e__6487__auto____$7 = e8134;
if((e__6487__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "assembling-machine-2")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8135){if((e8135 instanceof Error)){
var e__6487__auto____$8 = e8135;
if((e__6487__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8160){if((e8160 instanceof Error)){
var e__6487__auto____$9 = e8160;
if((e__6487__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$9;
}
} else {
throw e8160;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8153){if((e8153 instanceof Error)){
var e__6487__auto____$9 = e8153;
if((e__6487__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8159){if((e8159 instanceof Error)){
var e__6487__auto____$10 = e8159;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$10;
}
} else {
throw e8159;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8154){if((e8154 instanceof Error)){
var e__6487__auto____$10 = e8154;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8158){if((e8158 instanceof Error)){
var e__6487__auto____$11 = e8158;
if((e__6487__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$11;
}
} else {
throw e8158;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8155){if((e8155 instanceof Error)){
var e__6487__auto____$11 = e8155;
if((e__6487__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8157){if((e8157 instanceof Error)){
var e__6487__auto____$12 = e8157;
if((e__6487__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$12;
}
} else {
throw e8157;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8156){if((e8156 instanceof Error)){
var e__6487__auto____$12 = e8156;
if((e__6487__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$12;
}
} else {
throw e8156;

}
}} else {
throw e__6487__auto____$11;
}
} else {
throw e8155;

}
}} else {
throw e__6487__auto____$10;
}
} else {
throw e8154;

}
}} else {
throw e__6487__auto____$9;
}
} else {
throw e8153;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8136){if((e8136 instanceof Error)){
var e__6487__auto____$9 = e8136;
if((e__6487__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8152){if((e8152 instanceof Error)){
var e__6487__auto____$10 = e8152;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$10;
}
} else {
throw e8152;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8145){if((e8145 instanceof Error)){
var e__6487__auto____$10 = e8145;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8151){if((e8151 instanceof Error)){
var e__6487__auto____$11 = e8151;
if((e__6487__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$11;
}
} else {
throw e8151;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8146){if((e8146 instanceof Error)){
var e__6487__auto____$11 = e8146;
if((e__6487__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8150){if((e8150 instanceof Error)){
var e__6487__auto____$12 = e8150;
if((e__6487__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$12;
}
} else {
throw e8150;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8147){if((e8147 instanceof Error)){
var e__6487__auto____$12 = e8147;
if((e__6487__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8094,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_8095 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8149){if((e8149 instanceof Error)){
var e__6487__auto____$13 = e8149;
if((e__6487__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$13;
}
} else {
throw e8149;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8148){if((e8148 instanceof Error)){
var e__6487__auto____$13 = e8148;
if((e__6487__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__6487__auto____$13;
}
} else {
throw e8148;

}
}} else {
throw e__6487__auto____$12;
}
} else {
throw e8147;

}
}} else {
throw e__6487__auto____$11;
}
} else {
throw e8146;

}
}} else {
throw e__6487__auto____$10;
}
} else {
throw e8145;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e8137){if((e8137 instanceof Error)){
var e__6487__auto____$10 = e8137;
if((e__6487__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "chemical-plant")){
return g.call(null,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8138){if((e8138 instanceof Error)){
var e__6487__auto____$11 = e8138;
if((e__6487__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "oil-refinery")){
return g.call(null,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8139){if((e8139 instanceof Error)){
var e__6487__auto____$12 = e8139;
if((e__6487__auto____$12 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "lab")){
return g.call(null,new cljs.core.Keyword(null,"lab","lab",-1187867934));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8140){if((e8140 instanceof Error)){
var e__6487__auto____$13 = e8140;
if((e__6487__auto____$13 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "electric-furnace")){
return g.call(null,new cljs.core.Keyword(null,"furnace","furnace",-1572266656));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8141){if((e8141 instanceof Error)){
var e__6487__auto____$14 = e8141;
if((e__6487__auto____$14 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "stone-furnace")){
return g.call(null,new cljs.core.Keyword(null,"stone-furnace","stone-furnace",663242727),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8142){if((e8142 instanceof Error)){
var e__6487__auto____$15 = e8142;
if((e__6487__auto____$15 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "steel-furnace")){
return g.call(null,new cljs.core.Keyword(null,"stone-furnace","stone-furnace",663242727),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8143){if((e8143 instanceof Error)){
var e__6487__auto____$16 = e8143;
if((e__6487__auto____$16 === cljs.core.match.backtrack)){
try{if((ocr_8093 === "splitter")){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e8144){if((e8144 instanceof Error)){
var e__6487__auto____$17 = e8144;
if((e__6487__auto____$17 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8093)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8094)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_8095)].join('')));
} else {
throw e__6487__auto____$17;
}
} else {
throw e8144;

}
}} else {
throw e__6487__auto____$16;
}
} else {
throw e8143;

}
}} else {
throw e__6487__auto____$15;
}
} else {
throw e8142;

}
}} else {
throw e__6487__auto____$14;
}
} else {
throw e8141;

}
}} else {
throw e__6487__auto____$13;
}
} else {
throw e8140;

}
}} else {
throw e__6487__auto____$12;
}
} else {
throw e8139;

}
}} else {
throw e__6487__auto____$11;
}
} else {
throw e8138;

}
}} else {
throw e__6487__auto____$10;
}
} else {
throw e8137;

}
}} else {
throw e__6487__auto____$9;
}
} else {
throw e8136;

}
}} else {
throw e__6487__auto____$8;
}
} else {
throw e8135;

}
}} else {
throw e__6487__auto____$7;
}
} else {
throw e8134;

}
}} else {
throw e__6487__auto____$6;
}
} else {
throw e8133;

}
}} else {
throw e__6487__auto____$5;
}
} else {
throw e8132;

}
}} else {
throw e__6487__auto____$4;
}
} else {
throw e8131;

}
}} else {
throw e__6487__auto____$3;
}
} else {
throw e8130;

}
}} else {
throw e__6487__auto____$2;
}
} else {
throw e8129;

}
}} else {
throw e__6487__auto____$1;
}
} else {
throw e8128;

}
}} else {
throw e__6487__auto__;
}
} else {
throw e8127;

}
}});
busmaker.pixi.margin_x = (2);
busmaker.pixi.viewport_window = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null);
busmaker.pixi.entities_stage_children = (function busmaker$pixi$entities_stage_children(entities){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__8190_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__8190_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__8190_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8191(s__8192){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8192__$1 = s__8192;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8192__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8192__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__8191_$_iter__8193(s__8194){
return (new cljs.core.LazySeq(null,((function (s__8192__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8194__$1 = s__8194;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8194__$1);
if(temp__5457__auto____$1){
var s__8194__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8194__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8194__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8196 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8195 = (0);
while(true){
if((i__8195 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__8195);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
cljs.core.chunk_append.call(null,b__8196,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));

var G__8197 = (i__8195 + (1));
i__8195 = G__8197;
continue;
} else {
var G__8198 = (i__8195 + (1));
i__8195 = G__8198;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8196),busmaker$pixi$entities_stage_children_$_iter__8191_$_iter__8193.call(null,cljs.core.chunk_rest.call(null,s__8194__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8196),null);
}
} else {
var x = cljs.core.first.call(null,s__8194__$2);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
return cljs.core.cons.call(null,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),busmaker$pixi$entities_stage_children_$_iter__8191_$_iter__8193.call(null,cljs.core.rest.call(null,s__8194__$2)));
} else {
var G__8199 = cljs.core.rest.call(null,s__8194__$2);
s__8194__$1 = G__8199;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8192__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(s__8192__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,dx)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$pixi$entities_stage_children_$_iter__8191.call(null,cljs.core.rest.call(null,s__8192__$1)));
} else {
var G__8200 = cljs.core.rest.call(null,s__8192__$1);
s__8192__$1 = G__8200;
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
var vec__8201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),(800)], null);
var w = cljs.core.nth.call(null,vec__8201,(0),null);
var h = cljs.core.nth.call(null,vec__8201,(1),null);
var vec__8204 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8204,(0),null);
return impi.core.mount.call(null,new cljs.core.Keyword(null,"blueprint","blueprint",-1146485308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null)], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),cljs.core.merge.call(null,busmaker.pixi.solution_stage.call(null,children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),cljs.core.constantly.call(null,true),new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430)], null),new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732)], null),new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217)], null)], null)),new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),((function (vec__8201,w,h,vec__8204,app_state){
return (function (_,entity){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(vec__8201,w,h,vec__8204,app_state))
,new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430),((function (vec__8201,w,h,vec__8204,app_state){
return (function (e){
var map__8207 = cljs.core.deref.call(null,drag);
var map__8207__$1 = ((((!((map__8207 == null)))?(((((map__8207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8207):map__8207);
var x = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.data.originalEvent.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.data.originalEvent.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
});})(vec__8201,w,h,vec__8204,app_state))
,new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217),((function (vec__8201,w,h,vec__8204,app_state){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__8209 = cljs.core.deref.call(null,drag);
var map__8209__$1 = ((((!((map__8209 == null)))?(((((map__8209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8209):map__8209);
var x = cljs.core.get.call(null,map__8209__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8209__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__8209__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__8209__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__8209__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__8209__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dmx = (mx0 - e.data.originalEvent.clientX);
var dmy = (my0 - e.data.originalEvent.clientY);
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(x0 - dmx),new cljs.core.Keyword(null,"y","y",-1757859776),(y0 - dmy));
} else {
return null;
}
});})(vec__8201,w,h,vec__8204,app_state))
,new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732),((function (vec__8201,w,h,vec__8204,app_state){
return (function (_){
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(vec__8201,w,h,vec__8204,app_state))
], null)], null),rum.core.dom_node.call(null,state));
});
busmaker.pixi.impi = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var drag = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var vec__8211 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8211,(0),null);
var children = cljs.core.atom.call(null,cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
var id = cljs.core.rand_int.call(null,(10000));
busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);

cljs.core.add_watch.call(null,drag,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (drag,vec__8211,app_state,children,id){
return (function() { 
var G__8217__delegate = function (_){
return busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);
};
var G__8217 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8218__i = 0, G__8218__a = new Array(arguments.length -  0);
while (G__8218__i < G__8218__a.length) {G__8218__a[G__8218__i] = arguments[G__8218__i + 0]; ++G__8218__i;}
  _ = new cljs.core.IndexedSeq(G__8218__a,0,null);
} 
return G__8217__delegate.call(this,_);};
G__8217.cljs$lang$maxFixedArity = 0;
G__8217.cljs$lang$applyTo = (function (arglist__8219){
var _ = cljs.core.seq(arglist__8219);
return G__8217__delegate(_);
});
G__8217.cljs$core$IFn$_invoke$arity$variadic = G__8217__delegate;
return G__8217;
})()
;})(drag,vec__8211,app_state,children,id))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),drag,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378),children,new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984),id);
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
var vec__8214_8220 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state_8221 = cljs.core.nth.call(null,vec__8214_8220,(0),null);
busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state),cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state_8221))))),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));

cljs.core.add_watch.call(null,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (vec__8214_8220,app_state_8221){
return (function (k,r,o,n){
return busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.deref.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));
});})(vec__8214_8220,app_state_8221))
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
