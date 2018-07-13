// Compiled by ClojureScript 1.10.339 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__5256__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__5253 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__5254 = cljs.core.seq.call(null,vec__5253);
var first__5255 = cljs.core.first.call(null,seq__5254);
var seq__5254__$1 = cljs.core.next.call(null,seq__5254);
var tag = first__5255;
var body = seq__5254__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__5256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5257__i = 0, G__5257__a = new Array(arguments.length -  0);
while (G__5257__i < G__5257__a.length) {G__5257__a[G__5257__i] = arguments[G__5257__i + 0]; ++G__5257__i;}
  args = new cljs.core.IndexedSeq(G__5257__a,0,null);
} 
return G__5256__delegate.call(this,args);};
G__5256.cljs$lang$maxFixedArity = 0;
G__5256.cljs$lang$applyTo = (function (arglist__5258){
var args = cljs.core.seq(arglist__5258);
return G__5256__delegate(args);
});
G__5256.cljs$core$IFn$_invoke$arity$variadic = G__5256__delegate;
return G__5256;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__5259(s__5260){
return (new cljs.core.LazySeq(null,(function (){
var s__5260__$1 = s__5260;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5260__$1);
if(temp__5457__auto__){
var s__5260__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5260__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5260__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5262 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5261 = (0);
while(true){
if((i__5261 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__5261);
cljs.core.chunk_append.call(null,b__5262,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__5263 = (i__5261 + (1));
i__5261 = G__5263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5262),sablono$core$update_arglists_$_iter__5259.call(null,cljs.core.chunk_rest.call(null,s__5260__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5262),null);
}
} else {
var args = cljs.core.first.call(null,s__5260__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__5259.call(null,cljs.core.rest.call(null,s__5260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5269 = arguments.length;
var i__4532__auto___5270 = (0);
while(true){
if((i__4532__auto___5270 < len__4531__auto___5269)){
args__4534__auto__.push((arguments[i__4532__auto___5270]));

var G__5271 = (i__4532__auto___5270 + (1));
i__4532__auto___5270 = G__5271;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__5265(s__5266){
return (new cljs.core.LazySeq(null,(function (){
var s__5266__$1 = s__5266;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5266__$1);
if(temp__5457__auto__){
var s__5266__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5266__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5266__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5268 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5267 = (0);
while(true){
if((i__5267 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__5267);
cljs.core.chunk_append.call(null,b__5268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__5272 = (i__5267 + (1));
i__5267 = G__5272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5268),sablono$core$iter__5265.call(null,cljs.core.chunk_rest.call(null,s__5266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5268),null);
}
} else {
var style = cljs.core.first.call(null,s__5266__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__5265.call(null,cljs.core.rest.call(null,s__5266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq5264){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5264));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to5273 = (function sablono$core$link_to5273(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5276 = arguments.length;
var i__4532__auto___5277 = (0);
while(true){
if((i__4532__auto___5277 < len__4531__auto___5276)){
args__4534__auto__.push((arguments[i__4532__auto___5277]));

var G__5278 = (i__4532__auto___5277 + (1));
i__4532__auto___5277 = G__5278;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to5273.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to5273.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to5273.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to5273.cljs$lang$applyTo = (function (seq5274){
var G__5275 = cljs.core.first.call(null,seq5274);
var seq5274__$1 = cljs.core.next.call(null,seq5274);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5275,seq5274__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to5273);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to5279 = (function sablono$core$mail_to5279(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5286 = arguments.length;
var i__4532__auto___5287 = (0);
while(true){
if((i__4532__auto___5287 < len__4531__auto___5286)){
args__4534__auto__.push((arguments[i__4532__auto___5287]));

var G__5288 = (i__4532__auto___5287 + (1));
i__4532__auto___5287 = G__5288;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to5279.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to5279.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__5282){
var vec__5283 = p__5282;
var content = cljs.core.nth.call(null,vec__5283,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to5279.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to5279.cljs$lang$applyTo = (function (seq5280){
var G__5281 = cljs.core.first.call(null,seq5280);
var seq5280__$1 = cljs.core.next.call(null,seq5280);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5281,seq5280__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to5279);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list5289 = (function sablono$core$unordered_list5289(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list5289_$_iter__5290(s__5291){
return (new cljs.core.LazySeq(null,(function (){
var s__5291__$1 = s__5291;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5291__$1);
if(temp__5457__auto__){
var s__5291__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5291__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5291__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5293 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5292 = (0);
while(true){
if((i__5292 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5292);
cljs.core.chunk_append.call(null,b__5293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5294 = (i__5292 + (1));
i__5292 = G__5294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5293),sablono$core$unordered_list5289_$_iter__5290.call(null,cljs.core.chunk_rest.call(null,s__5291__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5293),null);
}
} else {
var x = cljs.core.first.call(null,s__5291__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list5289_$_iter__5290.call(null,cljs.core.rest.call(null,s__5291__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list5289);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list5295 = (function sablono$core$ordered_list5295(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list5295_$_iter__5296(s__5297){
return (new cljs.core.LazySeq(null,(function (){
var s__5297__$1 = s__5297;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5297__$1);
if(temp__5457__auto__){
var s__5297__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5297__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5297__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5299 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5298 = (0);
while(true){
if((i__5298 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5298);
cljs.core.chunk_append.call(null,b__5299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5300 = (i__5298 + (1));
i__5298 = G__5300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5299),sablono$core$ordered_list5295_$_iter__5296.call(null,cljs.core.chunk_rest.call(null,s__5297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5299),null);
}
} else {
var x = cljs.core.first.call(null,s__5297__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list5295_$_iter__5296.call(null,cljs.core.rest.call(null,s__5297__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list5295);
/**
 * Create an image element.
 */
sablono.core.image5301 = (function sablono$core$image5301(var_args){
var G__5303 = arguments.length;
switch (G__5303) {
case 1:
return sablono.core.image5301.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image5301.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image5301.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image5301.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image5301.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image5301);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__5305_SHARP_,p2__5306_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5305_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5306_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__5307_SHARP_,p2__5308_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5307_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5308_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field5309 = (function sablono$core$color_field5309(var_args){
var G__5311 = arguments.length;
switch (G__5311) {
case 1:
return sablono.core.color_field5309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field5309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field5309.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.color_field5309.call(null,name__5243__auto__,null);
});

sablono.core.color_field5309.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.color_field5309.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field5309);

/**
 * Creates a date input field.
 */
sablono.core.date_field5312 = (function sablono$core$date_field5312(var_args){
var G__5314 = arguments.length;
switch (G__5314) {
case 1:
return sablono.core.date_field5312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field5312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field5312.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.date_field5312.call(null,name__5243__auto__,null);
});

sablono.core.date_field5312.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.date_field5312.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field5312);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field5315 = (function sablono$core$datetime_field5315(var_args){
var G__5317 = arguments.length;
switch (G__5317) {
case 1:
return sablono.core.datetime_field5315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field5315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field5315.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.datetime_field5315.call(null,name__5243__auto__,null);
});

sablono.core.datetime_field5315.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.datetime_field5315.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field5315);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field5318 = (function sablono$core$datetime_local_field5318(var_args){
var G__5320 = arguments.length;
switch (G__5320) {
case 1:
return sablono.core.datetime_local_field5318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field5318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field5318.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.datetime_local_field5318.call(null,name__5243__auto__,null);
});

sablono.core.datetime_local_field5318.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.datetime_local_field5318.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field5318);

/**
 * Creates a email input field.
 */
sablono.core.email_field5321 = (function sablono$core$email_field5321(var_args){
var G__5323 = arguments.length;
switch (G__5323) {
case 1:
return sablono.core.email_field5321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field5321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field5321.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.email_field5321.call(null,name__5243__auto__,null);
});

sablono.core.email_field5321.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.email_field5321.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field5321);

/**
 * Creates a file input field.
 */
sablono.core.file_field5324 = (function sablono$core$file_field5324(var_args){
var G__5326 = arguments.length;
switch (G__5326) {
case 1:
return sablono.core.file_field5324.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field5324.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field5324.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.file_field5324.call(null,name__5243__auto__,null);
});

sablono.core.file_field5324.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.file_field5324.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field5324);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field5327 = (function sablono$core$hidden_field5327(var_args){
var G__5329 = arguments.length;
switch (G__5329) {
case 1:
return sablono.core.hidden_field5327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field5327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field5327.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.hidden_field5327.call(null,name__5243__auto__,null);
});

sablono.core.hidden_field5327.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.hidden_field5327.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field5327);

/**
 * Creates a month input field.
 */
sablono.core.month_field5330 = (function sablono$core$month_field5330(var_args){
var G__5332 = arguments.length;
switch (G__5332) {
case 1:
return sablono.core.month_field5330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field5330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field5330.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.month_field5330.call(null,name__5243__auto__,null);
});

sablono.core.month_field5330.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.month_field5330.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field5330);

/**
 * Creates a number input field.
 */
sablono.core.number_field5333 = (function sablono$core$number_field5333(var_args){
var G__5335 = arguments.length;
switch (G__5335) {
case 1:
return sablono.core.number_field5333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field5333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field5333.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.number_field5333.call(null,name__5243__auto__,null);
});

sablono.core.number_field5333.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.number_field5333.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field5333);

/**
 * Creates a password input field.
 */
sablono.core.password_field5336 = (function sablono$core$password_field5336(var_args){
var G__5338 = arguments.length;
switch (G__5338) {
case 1:
return sablono.core.password_field5336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field5336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field5336.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.password_field5336.call(null,name__5243__auto__,null);
});

sablono.core.password_field5336.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.password_field5336.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field5336);

/**
 * Creates a range input field.
 */
sablono.core.range_field5339 = (function sablono$core$range_field5339(var_args){
var G__5341 = arguments.length;
switch (G__5341) {
case 1:
return sablono.core.range_field5339.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field5339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field5339.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.range_field5339.call(null,name__5243__auto__,null);
});

sablono.core.range_field5339.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.range_field5339.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field5339);

/**
 * Creates a search input field.
 */
sablono.core.search_field5342 = (function sablono$core$search_field5342(var_args){
var G__5344 = arguments.length;
switch (G__5344) {
case 1:
return sablono.core.search_field5342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field5342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field5342.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.search_field5342.call(null,name__5243__auto__,null);
});

sablono.core.search_field5342.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.search_field5342.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field5342);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field5345 = (function sablono$core$tel_field5345(var_args){
var G__5347 = arguments.length;
switch (G__5347) {
case 1:
return sablono.core.tel_field5345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field5345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field5345.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.tel_field5345.call(null,name__5243__auto__,null);
});

sablono.core.tel_field5345.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.tel_field5345.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field5345);

/**
 * Creates a text input field.
 */
sablono.core.text_field5348 = (function sablono$core$text_field5348(var_args){
var G__5350 = arguments.length;
switch (G__5350) {
case 1:
return sablono.core.text_field5348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field5348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field5348.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.text_field5348.call(null,name__5243__auto__,null);
});

sablono.core.text_field5348.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.text_field5348.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field5348);

/**
 * Creates a time input field.
 */
sablono.core.time_field5351 = (function sablono$core$time_field5351(var_args){
var G__5353 = arguments.length;
switch (G__5353) {
case 1:
return sablono.core.time_field5351.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field5351.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field5351.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.time_field5351.call(null,name__5243__auto__,null);
});

sablono.core.time_field5351.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.time_field5351.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field5351);

/**
 * Creates a url input field.
 */
sablono.core.url_field5354 = (function sablono$core$url_field5354(var_args){
var G__5356 = arguments.length;
switch (G__5356) {
case 1:
return sablono.core.url_field5354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field5354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field5354.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.url_field5354.call(null,name__5243__auto__,null);
});

sablono.core.url_field5354.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.url_field5354.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field5354);

/**
 * Creates a week input field.
 */
sablono.core.week_field5357 = (function sablono$core$week_field5357(var_args){
var G__5359 = arguments.length;
switch (G__5359) {
case 1:
return sablono.core.week_field5357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field5357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field5357.cljs$core$IFn$_invoke$arity$1 = (function (name__5243__auto__){
return sablono.core.week_field5357.call(null,name__5243__auto__,null);
});

sablono.core.week_field5357.cljs$core$IFn$_invoke$arity$2 = (function (name__5243__auto__,value__5244__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5243__auto__,value__5244__auto__);
});

sablono.core.week_field5357.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field5357);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box5377 = (function sablono$core$check_box5377(var_args){
var G__5379 = arguments.length;
switch (G__5379) {
case 1:
return sablono.core.check_box5377.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box5377.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box5377.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box5377.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box5377.call(null,name,null);
});

sablono.core.check_box5377.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box5377.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box5377.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box5377.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box5377);
/**
 * Creates a radio button.
 */
sablono.core.radio_button5381 = (function sablono$core$radio_button5381(var_args){
var G__5383 = arguments.length;
switch (G__5383) {
case 1:
return sablono.core.radio_button5381.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button5381.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button5381.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button5381.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button5381.call(null,group,null);
});

sablono.core.radio_button5381.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button5381.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button5381.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button5381.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button5381);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options5385 = (function sablono$core$select_options5385(coll){
var iter__4324__auto__ = (function sablono$core$select_options5385_$_iter__5386(s__5387){
return (new cljs.core.LazySeq(null,(function (){
var s__5387__$1 = s__5387;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5387__$1);
if(temp__5457__auto__){
var s__5387__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5387__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5387__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5389 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5388 = (0);
while(true){
if((i__5388 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5388);
cljs.core.chunk_append.call(null,b__5389,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5390 = x;
var text = cljs.core.nth.call(null,vec__5390,(0),null);
var val = cljs.core.nth.call(null,vec__5390,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5390,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5385.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__5396 = (i__5388 + (1));
i__5388 = G__5396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5389),sablono$core$select_options5385_$_iter__5386.call(null,cljs.core.chunk_rest.call(null,s__5387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5389),null);
}
} else {
var x = cljs.core.first.call(null,s__5387__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5393 = x;
var text = cljs.core.nth.call(null,vec__5393,(0),null);
var val = cljs.core.nth.call(null,vec__5393,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5393,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5385.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options5385_$_iter__5386.call(null,cljs.core.rest.call(null,s__5387__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options5385);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down5397 = (function sablono$core$drop_down5397(var_args){
var G__5399 = arguments.length;
switch (G__5399) {
case 2:
return sablono.core.drop_down5397.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down5397.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down5397.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down5397.call(null,name,options,null);
});

sablono.core.drop_down5397.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down5397.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down5397);
/**
 * Creates a text area element.
 */
sablono.core.text_area5401 = (function sablono$core$text_area5401(var_args){
var G__5403 = arguments.length;
switch (G__5403) {
case 1:
return sablono.core.text_area5401.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area5401.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area5401.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area5401.call(null,name,null);
});

sablono.core.text_area5401.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area5401.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area5401);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label5405 = (function sablono$core$label5405(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label5405);
/**
 * Creates a submit button.
 */
sablono.core.submit_button5406 = (function sablono$core$submit_button5406(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button5406);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button5407 = (function sablono$core$reset_button5407(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button5407);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to5408 = (function sablono$core$form_to5408(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5415 = arguments.length;
var i__4532__auto___5416 = (0);
while(true){
if((i__4532__auto___5416 < len__4531__auto___5415)){
args__4534__auto__.push((arguments[i__4532__auto___5416]));

var G__5417 = (i__4532__auto___5416 + (1));
i__4532__auto___5416 = G__5417;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to5408.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to5408.cljs$core$IFn$_invoke$arity$variadic = (function (p__5411,body){
var vec__5412 = p__5411;
var method = cljs.core.nth.call(null,vec__5412,(0),null);
var action = cljs.core.nth.call(null,vec__5412,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to5408.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to5408.cljs$lang$applyTo = (function (seq5409){
var G__5410 = cljs.core.first.call(null,seq5409);
var seq5409__$1 = cljs.core.next.call(null,seq5409);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5410,seq5409__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to5408);
