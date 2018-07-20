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
var G__5254__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__5251 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__5252 = cljs.core.seq.call(null,vec__5251);
var first__5253 = cljs.core.first.call(null,seq__5252);
var seq__5252__$1 = cljs.core.next.call(null,seq__5252);
var tag = first__5253;
var body = seq__5252__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__5254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5255__i = 0, G__5255__a = new Array(arguments.length -  0);
while (G__5255__i < G__5255__a.length) {G__5255__a[G__5255__i] = arguments[G__5255__i + 0]; ++G__5255__i;}
  args = new cljs.core.IndexedSeq(G__5255__a,0,null);
} 
return G__5254__delegate.call(this,args);};
G__5254.cljs$lang$maxFixedArity = 0;
G__5254.cljs$lang$applyTo = (function (arglist__5256){
var args = cljs.core.seq(arglist__5256);
return G__5254__delegate(args);
});
G__5254.cljs$core$IFn$_invoke$arity$variadic = G__5254__delegate;
return G__5254;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__5257(s__5258){
return (new cljs.core.LazySeq(null,(function (){
var s__5258__$1 = s__5258;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5258__$1);
if(temp__5457__auto__){
var s__5258__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5258__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5258__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5260 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5259 = (0);
while(true){
if((i__5259 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__5259);
cljs.core.chunk_append.call(null,b__5260,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__5261 = (i__5259 + (1));
i__5259 = G__5261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5260),sablono$core$update_arglists_$_iter__5257.call(null,cljs.core.chunk_rest.call(null,s__5258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5260),null);
}
} else {
var args = cljs.core.first.call(null,s__5258__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__5257.call(null,cljs.core.rest.call(null,s__5258__$2)));
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
var len__4531__auto___5267 = arguments.length;
var i__4532__auto___5268 = (0);
while(true){
if((i__4532__auto___5268 < len__4531__auto___5267)){
args__4534__auto__.push((arguments[i__4532__auto___5268]));

var G__5269 = (i__4532__auto___5268 + (1));
i__4532__auto___5268 = G__5269;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__5263(s__5264){
return (new cljs.core.LazySeq(null,(function (){
var s__5264__$1 = s__5264;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5264__$1);
if(temp__5457__auto__){
var s__5264__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5264__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5264__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5266 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5265 = (0);
while(true){
if((i__5265 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__5265);
cljs.core.chunk_append.call(null,b__5266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__5270 = (i__5265 + (1));
i__5265 = G__5270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5266),sablono$core$iter__5263.call(null,cljs.core.chunk_rest.call(null,s__5264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5266),null);
}
} else {
var style = cljs.core.first.call(null,s__5264__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__5263.call(null,cljs.core.rest.call(null,s__5264__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq5262){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5262));
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
sablono.core.link_to5271 = (function sablono$core$link_to5271(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5274 = arguments.length;
var i__4532__auto___5275 = (0);
while(true){
if((i__4532__auto___5275 < len__4531__auto___5274)){
args__4534__auto__.push((arguments[i__4532__auto___5275]));

var G__5276 = (i__4532__auto___5275 + (1));
i__4532__auto___5275 = G__5276;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to5271.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to5271.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to5271.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to5271.cljs$lang$applyTo = (function (seq5272){
var G__5273 = cljs.core.first.call(null,seq5272);
var seq5272__$1 = cljs.core.next.call(null,seq5272);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5273,seq5272__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to5271);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to5277 = (function sablono$core$mail_to5277(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5284 = arguments.length;
var i__4532__auto___5285 = (0);
while(true){
if((i__4532__auto___5285 < len__4531__auto___5284)){
args__4534__auto__.push((arguments[i__4532__auto___5285]));

var G__5286 = (i__4532__auto___5285 + (1));
i__4532__auto___5285 = G__5286;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to5277.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to5277.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__5280){
var vec__5281 = p__5280;
var content = cljs.core.nth.call(null,vec__5281,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to5277.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to5277.cljs$lang$applyTo = (function (seq5278){
var G__5279 = cljs.core.first.call(null,seq5278);
var seq5278__$1 = cljs.core.next.call(null,seq5278);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5279,seq5278__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to5277);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list5287 = (function sablono$core$unordered_list5287(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list5287_$_iter__5288(s__5289){
return (new cljs.core.LazySeq(null,(function (){
var s__5289__$1 = s__5289;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5289__$1);
if(temp__5457__auto__){
var s__5289__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5289__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5289__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5291 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5290 = (0);
while(true){
if((i__5290 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5290);
cljs.core.chunk_append.call(null,b__5291,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5292 = (i__5290 + (1));
i__5290 = G__5292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5291),sablono$core$unordered_list5287_$_iter__5288.call(null,cljs.core.chunk_rest.call(null,s__5289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5291),null);
}
} else {
var x = cljs.core.first.call(null,s__5289__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list5287_$_iter__5288.call(null,cljs.core.rest.call(null,s__5289__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list5287);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list5293 = (function sablono$core$ordered_list5293(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list5293_$_iter__5294(s__5295){
return (new cljs.core.LazySeq(null,(function (){
var s__5295__$1 = s__5295;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5295__$1);
if(temp__5457__auto__){
var s__5295__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5295__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5295__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5297 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5296 = (0);
while(true){
if((i__5296 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5296);
cljs.core.chunk_append.call(null,b__5297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5298 = (i__5296 + (1));
i__5296 = G__5298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5297),sablono$core$ordered_list5293_$_iter__5294.call(null,cljs.core.chunk_rest.call(null,s__5295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5297),null);
}
} else {
var x = cljs.core.first.call(null,s__5295__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list5293_$_iter__5294.call(null,cljs.core.rest.call(null,s__5295__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list5293);
/**
 * Create an image element.
 */
sablono.core.image5299 = (function sablono$core$image5299(var_args){
var G__5301 = arguments.length;
switch (G__5301) {
case 1:
return sablono.core.image5299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image5299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image5299.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image5299.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image5299.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image5299);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__5303_SHARP_,p2__5304_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5303_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5304_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__5305_SHARP_,p2__5306_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5305_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5306_SHARP_)].join('');
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
sablono.core.color_field5307 = (function sablono$core$color_field5307(var_args){
var G__5309 = arguments.length;
switch (G__5309) {
case 1:
return sablono.core.color_field5307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field5307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field5307.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.color_field5307.call(null,name__5241__auto__,null);
});

sablono.core.color_field5307.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.color_field5307.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field5307);

/**
 * Creates a date input field.
 */
sablono.core.date_field5310 = (function sablono$core$date_field5310(var_args){
var G__5312 = arguments.length;
switch (G__5312) {
case 1:
return sablono.core.date_field5310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field5310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field5310.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.date_field5310.call(null,name__5241__auto__,null);
});

sablono.core.date_field5310.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.date_field5310.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field5310);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field5313 = (function sablono$core$datetime_field5313(var_args){
var G__5315 = arguments.length;
switch (G__5315) {
case 1:
return sablono.core.datetime_field5313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field5313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field5313.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.datetime_field5313.call(null,name__5241__auto__,null);
});

sablono.core.datetime_field5313.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.datetime_field5313.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field5313);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field5316 = (function sablono$core$datetime_local_field5316(var_args){
var G__5318 = arguments.length;
switch (G__5318) {
case 1:
return sablono.core.datetime_local_field5316.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field5316.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field5316.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.datetime_local_field5316.call(null,name__5241__auto__,null);
});

sablono.core.datetime_local_field5316.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.datetime_local_field5316.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field5316);

/**
 * Creates a email input field.
 */
sablono.core.email_field5319 = (function sablono$core$email_field5319(var_args){
var G__5321 = arguments.length;
switch (G__5321) {
case 1:
return sablono.core.email_field5319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field5319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field5319.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.email_field5319.call(null,name__5241__auto__,null);
});

sablono.core.email_field5319.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.email_field5319.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field5319);

/**
 * Creates a file input field.
 */
sablono.core.file_field5322 = (function sablono$core$file_field5322(var_args){
var G__5324 = arguments.length;
switch (G__5324) {
case 1:
return sablono.core.file_field5322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field5322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field5322.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.file_field5322.call(null,name__5241__auto__,null);
});

sablono.core.file_field5322.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.file_field5322.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field5322);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field5325 = (function sablono$core$hidden_field5325(var_args){
var G__5327 = arguments.length;
switch (G__5327) {
case 1:
return sablono.core.hidden_field5325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field5325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field5325.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.hidden_field5325.call(null,name__5241__auto__,null);
});

sablono.core.hidden_field5325.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.hidden_field5325.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field5325);

/**
 * Creates a month input field.
 */
sablono.core.month_field5328 = (function sablono$core$month_field5328(var_args){
var G__5330 = arguments.length;
switch (G__5330) {
case 1:
return sablono.core.month_field5328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field5328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field5328.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.month_field5328.call(null,name__5241__auto__,null);
});

sablono.core.month_field5328.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.month_field5328.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field5328);

/**
 * Creates a number input field.
 */
sablono.core.number_field5331 = (function sablono$core$number_field5331(var_args){
var G__5333 = arguments.length;
switch (G__5333) {
case 1:
return sablono.core.number_field5331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field5331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field5331.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.number_field5331.call(null,name__5241__auto__,null);
});

sablono.core.number_field5331.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.number_field5331.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field5331);

/**
 * Creates a password input field.
 */
sablono.core.password_field5334 = (function sablono$core$password_field5334(var_args){
var G__5336 = arguments.length;
switch (G__5336) {
case 1:
return sablono.core.password_field5334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field5334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field5334.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.password_field5334.call(null,name__5241__auto__,null);
});

sablono.core.password_field5334.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.password_field5334.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field5334);

/**
 * Creates a range input field.
 */
sablono.core.range_field5337 = (function sablono$core$range_field5337(var_args){
var G__5339 = arguments.length;
switch (G__5339) {
case 1:
return sablono.core.range_field5337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field5337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field5337.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.range_field5337.call(null,name__5241__auto__,null);
});

sablono.core.range_field5337.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.range_field5337.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field5337);

/**
 * Creates a search input field.
 */
sablono.core.search_field5340 = (function sablono$core$search_field5340(var_args){
var G__5342 = arguments.length;
switch (G__5342) {
case 1:
return sablono.core.search_field5340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field5340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field5340.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.search_field5340.call(null,name__5241__auto__,null);
});

sablono.core.search_field5340.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.search_field5340.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field5340);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field5343 = (function sablono$core$tel_field5343(var_args){
var G__5345 = arguments.length;
switch (G__5345) {
case 1:
return sablono.core.tel_field5343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field5343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field5343.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.tel_field5343.call(null,name__5241__auto__,null);
});

sablono.core.tel_field5343.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.tel_field5343.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field5343);

/**
 * Creates a text input field.
 */
sablono.core.text_field5346 = (function sablono$core$text_field5346(var_args){
var G__5348 = arguments.length;
switch (G__5348) {
case 1:
return sablono.core.text_field5346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field5346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field5346.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.text_field5346.call(null,name__5241__auto__,null);
});

sablono.core.text_field5346.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.text_field5346.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field5346);

/**
 * Creates a time input field.
 */
sablono.core.time_field5349 = (function sablono$core$time_field5349(var_args){
var G__5351 = arguments.length;
switch (G__5351) {
case 1:
return sablono.core.time_field5349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field5349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field5349.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.time_field5349.call(null,name__5241__auto__,null);
});

sablono.core.time_field5349.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.time_field5349.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field5349);

/**
 * Creates a url input field.
 */
sablono.core.url_field5352 = (function sablono$core$url_field5352(var_args){
var G__5354 = arguments.length;
switch (G__5354) {
case 1:
return sablono.core.url_field5352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field5352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field5352.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.url_field5352.call(null,name__5241__auto__,null);
});

sablono.core.url_field5352.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.url_field5352.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field5352);

/**
 * Creates a week input field.
 */
sablono.core.week_field5355 = (function sablono$core$week_field5355(var_args){
var G__5357 = arguments.length;
switch (G__5357) {
case 1:
return sablono.core.week_field5355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field5355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field5355.cljs$core$IFn$_invoke$arity$1 = (function (name__5241__auto__){
return sablono.core.week_field5355.call(null,name__5241__auto__,null);
});

sablono.core.week_field5355.cljs$core$IFn$_invoke$arity$2 = (function (name__5241__auto__,value__5242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5241__auto__,value__5242__auto__);
});

sablono.core.week_field5355.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field5355);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box5375 = (function sablono$core$check_box5375(var_args){
var G__5377 = arguments.length;
switch (G__5377) {
case 1:
return sablono.core.check_box5375.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box5375.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box5375.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box5375.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box5375.call(null,name,null);
});

sablono.core.check_box5375.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box5375.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box5375.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box5375.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box5375);
/**
 * Creates a radio button.
 */
sablono.core.radio_button5379 = (function sablono$core$radio_button5379(var_args){
var G__5381 = arguments.length;
switch (G__5381) {
case 1:
return sablono.core.radio_button5379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button5379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button5379.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button5379.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button5379.call(null,group,null);
});

sablono.core.radio_button5379.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button5379.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button5379.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button5379.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button5379);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options5383 = (function sablono$core$select_options5383(coll){
var iter__4324__auto__ = (function sablono$core$select_options5383_$_iter__5384(s__5385){
return (new cljs.core.LazySeq(null,(function (){
var s__5385__$1 = s__5385;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5385__$1);
if(temp__5457__auto__){
var s__5385__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5385__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5385__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5387 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5386 = (0);
while(true){
if((i__5386 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5386);
cljs.core.chunk_append.call(null,b__5387,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5388 = x;
var text = cljs.core.nth.call(null,vec__5388,(0),null);
var val = cljs.core.nth.call(null,vec__5388,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5388,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5383.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__5394 = (i__5386 + (1));
i__5386 = G__5394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5387),sablono$core$select_options5383_$_iter__5384.call(null,cljs.core.chunk_rest.call(null,s__5385__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5387),null);
}
} else {
var x = cljs.core.first.call(null,s__5385__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5391 = x;
var text = cljs.core.nth.call(null,vec__5391,(0),null);
var val = cljs.core.nth.call(null,vec__5391,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5391,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5383.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options5383_$_iter__5384.call(null,cljs.core.rest.call(null,s__5385__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options5383);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down5395 = (function sablono$core$drop_down5395(var_args){
var G__5397 = arguments.length;
switch (G__5397) {
case 2:
return sablono.core.drop_down5395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down5395.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down5395.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down5395.call(null,name,options,null);
});

sablono.core.drop_down5395.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down5395.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down5395);
/**
 * Creates a text area element.
 */
sablono.core.text_area5399 = (function sablono$core$text_area5399(var_args){
var G__5401 = arguments.length;
switch (G__5401) {
case 1:
return sablono.core.text_area5399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area5399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area5399.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area5399.call(null,name,null);
});

sablono.core.text_area5399.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area5399.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area5399);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label5403 = (function sablono$core$label5403(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label5403);
/**
 * Creates a submit button.
 */
sablono.core.submit_button5404 = (function sablono$core$submit_button5404(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button5404);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button5405 = (function sablono$core$reset_button5405(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button5405);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to5406 = (function sablono$core$form_to5406(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5413 = arguments.length;
var i__4532__auto___5414 = (0);
while(true){
if((i__4532__auto___5414 < len__4531__auto___5413)){
args__4534__auto__.push((arguments[i__4532__auto___5414]));

var G__5415 = (i__4532__auto___5414 + (1));
i__4532__auto___5414 = G__5415;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to5406.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to5406.cljs$core$IFn$_invoke$arity$variadic = (function (p__5409,body){
var vec__5410 = p__5409;
var method = cljs.core.nth.call(null,vec__5410,(0),null);
var action = cljs.core.nth.call(null,vec__5410,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to5406.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to5406.cljs$lang$applyTo = (function (seq5407){
var G__5408 = cljs.core.first.call(null,seq5407);
var seq5407__$1 = cljs.core.next.call(null,seq5407);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5408,seq5407__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to5406);
