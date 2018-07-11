// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.pixi');
goog.require('cljs.core');
goog.require('impi.core');
goog.require('rum.core');
goog.require('cljs.core.match');
goog.require('goog.style');
goog.require('goog.dom');
busmaker.pixi.direction = (function busmaker$pixi$direction(d){
var G__7910 = d;
switch (G__7910) {
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
var G__7994__delegate = function (v,p__7912){
var map__7913 = p__7912;
var map__7913__$1 = ((((!((map__7913 == null)))?(((((map__7913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7913):map__7913);
var rotate = cljs.core.get.call(null,map__7913__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0));
var translate = cljs.core.get.call(null,map__7913__$1,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","sprite","pixi.object.type/sprite",-1129625685),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((16) * x),((16) * y)], null),translate),new cljs.core.Keyword("pixi.sprite","anchor","pixi.sprite/anchor",-1761208072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844),busmaker.pixi.widgets.call(null,v)], null),new cljs.core.Keyword("pixi.object","rotation","pixi.object/rotation",-1091789503),(Math.PI * (rotate / (180))),new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.event","mouse-over","pixi.event/mouse-over",584256675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),entity], null)], null);
};
var G__7994 = function (v,var_args){
var p__7912 = null;
if (arguments.length > 1) {
var G__7995__i = 0, G__7995__a = new Array(arguments.length -  1);
while (G__7995__i < G__7995__a.length) {G__7995__a[G__7995__i] = arguments[G__7995__i + 1]; ++G__7995__i;}
  p__7912 = new cljs.core.IndexedSeq(G__7995__a,0,null);
} 
return G__7994__delegate.call(this,v,p__7912);};
G__7994.cljs$lang$maxFixedArity = 1;
G__7994.cljs$lang$applyTo = (function (arglist__7996){
var v = cljs.core.first(arglist__7996);
var p__7912 = cljs.core.rest(arglist__7996);
return G__7994__delegate(v,p__7912);
});
G__7994.cljs$core$IFn$_invoke$arity$variadic = G__7994__delegate;
return G__7994;
})()
;
var ocr_7915 = cljs.core.get.call(null,entity,"name");
var ocr_7916 = busmaker.pixi.direction.call(null,cljs.core.get.call(null,entity,"direction"));
var ocr_7917 = cljs.core.keyword.call(null,cljs.core.get.call(null,entity,"type"));
try{if((ocr_7915 === "grass")){
return g.call(null,new cljs.core.Keyword(null,"grass","grass",1213050421));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7939){if((e7939 instanceof Error)){
var e__7004__auto__ = e7939;
if((e__7004__auto__ === cljs.core.match.backtrack)){
try{if((ocr_7915 === "fast-underground-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7917,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7993){if((e7993 instanceof Error)){
var e__7004__auto____$1 = e7993;
if((e__7004__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$1;
}
} else {
throw e7993;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7978){if((e7978 instanceof Error)){
var e__7004__auto____$1 = e7978;
if((e__7004__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7917,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7992){if((e7992 instanceof Error)){
var e__7004__auto____$2 = e7992;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$2;
}
} else {
throw e7992;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7979){if((e7979 instanceof Error)){
var e__7004__auto____$2 = e7979;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7917,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7991){if((e7991 instanceof Error)){
var e__7004__auto____$3 = e7991;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$3;
}
} else {
throw e7991;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7980){if((e7980 instanceof Error)){
var e__7004__auto____$3 = e7980;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7917,new cljs.core.Keyword(null,"input","input",556931961))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-input","underground-belt-input",1243250532),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7990){if((e7990 instanceof Error)){
var e__7004__auto____$4 = e7990;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$4;
}
} else {
throw e7990;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7981){if((e7981 instanceof Error)){
var e__7004__auto____$4 = e7981;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"n","n",562130025))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7917,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7989){if((e7989 instanceof Error)){
var e__7004__auto____$5 = e7989;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$5;
}
} else {
throw e7989;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7982){if((e7982 instanceof Error)){
var e__7004__auto____$5 = e7982;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7917,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7988){if((e7988 instanceof Error)){
var e__7004__auto____$6 = e7988;
if((e__7004__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$6;
}
} else {
throw e7988;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7983){if((e7983 instanceof Error)){
var e__7004__auto____$6 = e7983;
if((e__7004__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"w","w",354169001))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7917,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7987){if((e7987 instanceof Error)){
var e__7004__auto____$7 = e7987;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$7;
}
} else {
throw e7987;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7984){if((e7984 instanceof Error)){
var e__7004__auto____$7 = e7984;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7917,new cljs.core.Keyword(null,"output","output",-1105869043))){
return g.call(null,new cljs.core.Keyword(null,"underground-belt-output","underground-belt-output",1692593225),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7986){if((e7986 instanceof Error)){
var e__7004__auto____$8 = e7986;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$8;
}
} else {
throw e7986;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7985){if((e7985 instanceof Error)){
var e__7004__auto____$8 = e7985;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$8;
}
} else {
throw e7985;

}
}} else {
throw e__7004__auto____$7;
}
} else {
throw e7984;

}
}} else {
throw e__7004__auto____$6;
}
} else {
throw e7983;

}
}} else {
throw e__7004__auto____$5;
}
} else {
throw e7982;

}
}} else {
throw e__7004__auto____$4;
}
} else {
throw e7981;

}
}} else {
throw e__7004__auto____$3;
}
} else {
throw e7980;

}
}} else {
throw e__7004__auto____$2;
}
} else {
throw e7979;

}
}} else {
throw e__7004__auto____$1;
}
} else {
throw e7978;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7940){if((e7940 instanceof Error)){
var e__7004__auto____$1 = e7940;
if((e__7004__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "fast-transport-belt")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7977){if((e7977 instanceof Error)){
var e__7004__auto____$2 = e7977;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$2;
}
} else {
throw e7977;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7970){if((e7970 instanceof Error)){
var e__7004__auto____$2 = e7970;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7976){if((e7976 instanceof Error)){
var e__7004__auto____$3 = e7976;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$3;
}
} else {
throw e7976;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7971){if((e7971 instanceof Error)){
var e__7004__auto____$3 = e7971;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7975){if((e7975 instanceof Error)){
var e__7004__auto____$4 = e7975;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$4;
}
} else {
throw e7975;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7972){if((e7972 instanceof Error)){
var e__7004__auto____$4 = e7972;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"transport-belt","transport-belt",1073142213),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7974){if((e7974 instanceof Error)){
var e__7004__auto____$5 = e7974;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$5;
}
} else {
throw e7974;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7973){if((e7973 instanceof Error)){
var e__7004__auto____$5 = e7973;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$5;
}
} else {
throw e7973;

}
}} else {
throw e__7004__auto____$4;
}
} else {
throw e7972;

}
}} else {
throw e__7004__auto____$3;
}
} else {
throw e7971;

}
}} else {
throw e__7004__auto____$2;
}
} else {
throw e7970;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7941){if((e7941 instanceof Error)){
var e__7004__auto____$2 = e7941;
if((e__7004__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "medium-electric-pole")){
return g.call(null,new cljs.core.Keyword(null,"electrical-pole","electrical-pole",429584274));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7942){if((e7942 instanceof Error)){
var e__7004__auto____$3 = e7942;
if((e__7004__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "pipe")){
return g.call(null,new cljs.core.Keyword(null,"pipe","pipe",336575849));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7943){if((e7943 instanceof Error)){
var e__7004__auto____$4 = e7943;
if((e__7004__auto____$4 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "pipe-to-ground")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"w","w",354169001))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7968){if((e7968 instanceof Error)){
var e__7004__auto____$5 = e7968;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"e","e",1381269198))){
return g.call(null,new cljs.core.Keyword(null,"underground-pipe","underground-pipe",-592400016),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7969){if((e7969 instanceof Error)){
var e__7004__auto____$6 = e7969;
if((e__7004__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$6;
}
} else {
throw e7969;

}
}} else {
throw e__7004__auto____$5;
}
} else {
throw e7968;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7944){if((e7944 instanceof Error)){
var e__7004__auto____$5 = e7944;
if((e__7004__auto____$5 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "assembling-machine-2")){
return g.call(null,new cljs.core.Keyword(null,"assembling-machine","assembling-machine",-1328437679),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7945){if((e7945 instanceof Error)){
var e__7004__auto____$6 = e7945;
if((e__7004__auto____$6 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "fast-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7967){if((e7967 instanceof Error)){
var e__7004__auto____$7 = e7967;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$7;
}
} else {
throw e7967;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7960){if((e7960 instanceof Error)){
var e__7004__auto____$7 = e7960;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7966){if((e7966 instanceof Error)){
var e__7004__auto____$8 = e7966;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$8;
}
} else {
throw e7966;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7961){if((e7961 instanceof Error)){
var e__7004__auto____$8 = e7961;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7965){if((e7965 instanceof Error)){
var e__7004__auto____$9 = e7965;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$9;
}
} else {
throw e7965;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7962){if((e7962 instanceof Error)){
var e__7004__auto____$9 = e7962;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"inserter","inserter",1177168395),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7964){if((e7964 instanceof Error)){
var e__7004__auto____$10 = e7964;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$10;
}
} else {
throw e7964;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7963){if((e7963 instanceof Error)){
var e__7004__auto____$10 = e7963;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$10;
}
} else {
throw e7963;

}
}} else {
throw e__7004__auto____$9;
}
} else {
throw e7962;

}
}} else {
throw e__7004__auto____$8;
}
} else {
throw e7961;

}
}} else {
throw e__7004__auto____$7;
}
} else {
throw e7960;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7946){if((e7946 instanceof Error)){
var e__7004__auto____$7 = e7946;
if((e__7004__auto____$7 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "long-handed-inserter")){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"s","s",1705939918))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7959){if((e7959 instanceof Error)){
var e__7004__auto____$8 = e7959;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$8;
}
} else {
throw e7959;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7952){if((e7952 instanceof Error)){
var e__7004__auto____$8 = e7952;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"n","n",562130025))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(-90));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7958){if((e7958 instanceof Error)){
var e__7004__auto____$9 = e7958;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$9;
}
} else {
throw e7958;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7953){if((e7953 instanceof Error)){
var e__7004__auto____$9 = e7953;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"e","e",1381269198))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7957){if((e7957 instanceof Error)){
var e__7004__auto____$10 = e7957;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$10;
}
} else {
throw e7957;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7954){if((e7954 instanceof Error)){
var e__7004__auto____$10 = e7954;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_7916,new cljs.core.Keyword(null,"w","w",354169001))){
try{if((ocr_7917 === null)){
return g.call(null,new cljs.core.Keyword(null,"long-handed-inserter","long-handed-inserter",545424136),new cljs.core.Keyword(null,"rotate","rotate",152705015),(180));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7956){if((e7956 instanceof Error)){
var e__7004__auto____$11 = e7956;
if((e__7004__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$11;
}
} else {
throw e7956;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7955){if((e7955 instanceof Error)){
var e__7004__auto____$11 = e7955;
if((e__7004__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__7004__auto____$11;
}
} else {
throw e7955;

}
}} else {
throw e__7004__auto____$10;
}
} else {
throw e7954;

}
}} else {
throw e__7004__auto____$9;
}
} else {
throw e7953;

}
}} else {
throw e__7004__auto____$8;
}
} else {
throw e7952;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e7947){if((e7947 instanceof Error)){
var e__7004__auto____$8 = e7947;
if((e__7004__auto____$8 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "chemical-plant")){
return g.call(null,new cljs.core.Keyword(null,"chemical-plant","chemical-plant",-2071352940),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7948){if((e7948 instanceof Error)){
var e__7004__auto____$9 = e7948;
if((e__7004__auto____$9 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "oil-refinery")){
return g.call(null,new cljs.core.Keyword(null,"oil-refinery","oil-refinery",-336327375));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7949){if((e7949 instanceof Error)){
var e__7004__auto____$10 = e7949;
if((e__7004__auto____$10 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "electric-furnace")){
return g.call(null,new cljs.core.Keyword(null,"furnace","furnace",-1572266656),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7950){if((e7950 instanceof Error)){
var e__7004__auto____$11 = e7950;
if((e__7004__auto____$11 === cljs.core.match.backtrack)){
try{if((ocr_7915 === "fast-splitter")){
return g.call(null,new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e7951){if((e7951 instanceof Error)){
var e__7004__auto____$12 = e7951;
if((e__7004__auto____$12 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_7915)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_7916)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_7917)].join('')));
} else {
throw e__7004__auto____$12;
}
} else {
throw e7951;

}
}} else {
throw e__7004__auto____$11;
}
} else {
throw e7950;

}
}} else {
throw e__7004__auto____$10;
}
} else {
throw e7949;

}
}} else {
throw e__7004__auto____$9;
}
} else {
throw e7948;

}
}} else {
throw e__7004__auto____$8;
}
} else {
throw e7947;

}
}} else {
throw e__7004__auto____$7;
}
} else {
throw e7946;

}
}} else {
throw e__7004__auto____$6;
}
} else {
throw e7945;

}
}} else {
throw e__7004__auto____$5;
}
} else {
throw e7944;

}
}} else {
throw e__7004__auto____$4;
}
} else {
throw e7943;

}
}} else {
throw e__7004__auto____$3;
}
} else {
throw e7942;

}
}} else {
throw e__7004__auto____$2;
}
} else {
throw e7941;

}
}} else {
throw e__7004__auto____$1;
}
} else {
throw e7940;

}
}} else {
throw e__7004__auto__;
}
} else {
throw e7939;

}
}});
busmaker.pixi.margin_x = (2);
busmaker.pixi.viewport_window = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null);
busmaker.pixi.entities_stage_children = (function busmaker$pixi$entities_stage_children(entities){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__7997_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.floor(cljs.core.get_in.call(null,p1__7997_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","y"], null))),Math.floor(cljs.core.get_in.call(null,p1__7997_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position","x"], null)))],null));
}),cljs.core.identity),entities));
var min_y = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var max_y = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,indexed)));
var min_x = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var max_x = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,cljs.core.keys.call(null,indexed)));
var dx = ((max_x - min_x) + (1));
var dy = ((max_y - min_y) + (1));
var iter__4324__auto__ = ((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__7998(s__7999){
return (new cljs.core.LazySeq(null,((function (indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__7999__$1 = s__7999;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__7999__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var y = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__7999__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function busmaker$pixi$entities_stage_children_$_iter__7998_$_iter__8000(s__8001){
return (new cljs.core.LazySeq(null,((function (s__7999__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy){
return (function (){
var s__8001__$1 = s__8001;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8001__$1);
if(temp__5457__auto____$1){
var s__8001__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8001__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8001__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8003 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8002 = (0);
while(true){
if((i__8002 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__8002);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
cljs.core.chunk_append.call(null,b__8003,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));

var G__8004 = (i__8002 + (1));
i__8002 = G__8004;
continue;
} else {
var G__8005 = (i__8002 + (1));
i__8002 = G__8005;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8003),busmaker$pixi$entities_stage_children_$_iter__7998_$_iter__8000.call(null,cljs.core.chunk_rest.call(null,s__8001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8003),null);
}
} else {
var x = cljs.core.first.call(null,s__8001__$2);
var entity = cljs.core.get.call(null,indexed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + min_y),(x + min_x)], null));
if(cljs.core.truth_(entity)){
return cljs.core.cons.call(null,cljs.core.assoc.call(null,busmaker.pixi.cell.call(null,entity,(busmaker.pixi.margin_x + x),y),new cljs.core.Keyword("impi","key","impi/key",-1519343542),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * dy)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),busmaker$pixi$entities_stage_children_$_iter__7998_$_iter__8000.call(null,cljs.core.rest.call(null,s__8001__$2)));
} else {
var G__8006 = cljs.core.rest.call(null,s__8001__$2);
s__8001__$1 = G__8006;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__7999__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
,null,null));
});})(s__7999__$1,y,xs__6012__auto__,temp__5457__auto__,indexed,min_y,max_y,min_x,max_x,dx,dy))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,dx)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,busmaker$pixi$entities_stage_children_$_iter__7998.call(null,cljs.core.rest.call(null,s__7999__$1)));
} else {
var G__8007 = cljs.core.rest.call(null,s__7999__$1);
s__7999__$1 = G__8007;
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
var vec__8008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2000),(800)], null);
var w = cljs.core.nth.call(null,vec__8008,(0),null);
var h = cljs.core.nth.call(null,vec__8008,(1),null);
var vec__8011 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8011,(0),null);
return impi.core.mount.call(null,new cljs.core.Keyword(null,"blueprint","blueprint",-1146485308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null)], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),cljs.core.merge.call(null,busmaker.pixi.solution_stage.call(null,children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,cljs.core.deref.call(null,drag),new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),true,new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),cljs.core.constantly.call(null,true),new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430)], null),new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732)], null),new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217)], null)], null)),new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),((function (vec__8008,w,h,vec__8011,app_state){
return (function (_,entity){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);
});})(vec__8008,w,h,vec__8011,app_state))
,new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430),((function (vec__8008,w,h,vec__8011,app_state){
return (function (e){
var map__8014 = cljs.core.deref.call(null,drag);
var map__8014__$1 = ((((!((map__8014 == null)))?(((((map__8014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8014):map__8014);
var x = cljs.core.get.call(null,map__8014__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8014__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.data.originalEvent.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.data.originalEvent.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
});})(vec__8008,w,h,vec__8011,app_state))
,new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217),((function (vec__8008,w,h,vec__8011,app_state){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,drag)))){
var map__8016 = cljs.core.deref.call(null,drag);
var map__8016__$1 = ((((!((map__8016 == null)))?(((((map__8016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8016):map__8016);
var x = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dmx = (mx0 - e.data.originalEvent.clientX);
var dmy = (my0 - e.data.originalEvent.clientY);
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(x0 - dmx),new cljs.core.Keyword(null,"y","y",-1757859776),(y0 - dmy));
} else {
return null;
}
});})(vec__8008,w,h,vec__8011,app_state))
,new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732),((function (vec__8008,w,h,vec__8011,app_state){
return (function (_){
return cljs.core.swap_BANG_.call(null,drag,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(vec__8008,w,h,vec__8011,app_state))
], null)], null),rum.core.dom_node.call(null,state));
});
busmaker.pixi.impi = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var drag = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var vec__8018 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.nth.call(null,vec__8018,(0),null);
var children = cljs.core.atom.call(null,cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));
var id = cljs.core.rand_int.call(null,(10000));
busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);

cljs.core.add_watch.call(null,drag,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (drag,vec__8018,app_state,children,id){
return (function() { 
var G__8024__delegate = function (_){
return busmaker.pixi.render_stage_BANG_.call(null,state,drag,cljs.core.deref.call(null,children),id);
};
var G__8024 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8025__i = 0, G__8025__a = new Array(arguments.length -  0);
while (G__8025__i < G__8025__a.length) {G__8025__a[G__8025__i] = arguments[G__8025__i + 0]; ++G__8025__i;}
  _ = new cljs.core.IndexedSeq(G__8025__a,0,null);
} 
return G__8024__delegate.call(this,_);};
G__8024.cljs$lang$maxFixedArity = 0;
G__8024.cljs$lang$applyTo = (function (arglist__8026){
var _ = cljs.core.seq(arglist__8026);
return G__8024__delegate(_);
});
G__8024.cljs$core$IFn$_invoke$arity$variadic = G__8024__delegate;
return G__8024;
})()
;})(drag,vec__8018,app_state,children,id))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),drag,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378),children,new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984),id);
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
var vec__8021_8027 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var app_state_8028 = cljs.core.nth.call(null,vec__8021_8027,(0),null);
busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state),cljs.core.vec.call(null,busmaker.pixi.entities_stage_children.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state_8028))))),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));

cljs.core.add_watch.call(null,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322),((function (vec__8021_8027,app_state_8028){
return (function (k,r,o,n){
return busmaker.pixi.render_stage_BANG_.call(null,state,new cljs.core.Keyword("busmaker.pixi","drag","busmaker.pixi/drag",-1621974322).cljs$core$IFn$_invoke$arity$1(state),cljs.core.deref.call(null,new cljs.core.Keyword("busmaker.pixi","children","busmaker.pixi/children",-1334782378).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword("busmaker.pixi","id","busmaker.pixi/id",-658661984).cljs$core$IFn$_invoke$arity$1(state));
});})(vec__8021_8027,app_state_8028))
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
