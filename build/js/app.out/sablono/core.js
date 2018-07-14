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
var G__5623__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__5620 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__5621 = cljs.core.seq.call(null,vec__5620);
var first__5622 = cljs.core.first.call(null,seq__5621);
var seq__5621__$1 = cljs.core.next.call(null,seq__5621);
var tag = first__5622;
var body = seq__5621__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__5623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5624__i = 0, G__5624__a = new Array(arguments.length -  0);
while (G__5624__i < G__5624__a.length) {G__5624__a[G__5624__i] = arguments[G__5624__i + 0]; ++G__5624__i;}
  args = new cljs.core.IndexedSeq(G__5624__a,0,null);
} 
return G__5623__delegate.call(this,args);};
G__5623.cljs$lang$maxFixedArity = 0;
G__5623.cljs$lang$applyTo = (function (arglist__5625){
var args = cljs.core.seq(arglist__5625);
return G__5623__delegate(args);
});
G__5623.cljs$core$IFn$_invoke$arity$variadic = G__5623__delegate;
return G__5623;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__5626(s__5627){
return (new cljs.core.LazySeq(null,(function (){
var s__5627__$1 = s__5627;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5627__$1);
if(temp__5457__auto__){
var s__5627__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5627__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5627__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5629 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5628 = (0);
while(true){
if((i__5628 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__5628);
cljs.core.chunk_append.call(null,b__5629,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__5630 = (i__5628 + (1));
i__5628 = G__5630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5629),sablono$core$update_arglists_$_iter__5626.call(null,cljs.core.chunk_rest.call(null,s__5627__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5629),null);
}
} else {
var args = cljs.core.first.call(null,s__5627__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__5626.call(null,cljs.core.rest.call(null,s__5627__$2)));
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
var len__4531__auto___5636 = arguments.length;
var i__4532__auto___5637 = (0);
while(true){
if((i__4532__auto___5637 < len__4531__auto___5636)){
args__4534__auto__.push((arguments[i__4532__auto___5637]));

var G__5638 = (i__4532__auto___5637 + (1));
i__4532__auto___5637 = G__5638;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__5632(s__5633){
return (new cljs.core.LazySeq(null,(function (){
var s__5633__$1 = s__5633;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5633__$1);
if(temp__5457__auto__){
var s__5633__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5633__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5633__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5635 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5634 = (0);
while(true){
if((i__5634 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__5634);
cljs.core.chunk_append.call(null,b__5635,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__5639 = (i__5634 + (1));
i__5634 = G__5639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5635),sablono$core$iter__5632.call(null,cljs.core.chunk_rest.call(null,s__5633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5635),null);
}
} else {
var style = cljs.core.first.call(null,s__5633__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__5632.call(null,cljs.core.rest.call(null,s__5633__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq5631){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5631));
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
sablono.core.link_to5640 = (function sablono$core$link_to5640(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5643 = arguments.length;
var i__4532__auto___5644 = (0);
while(true){
if((i__4532__auto___5644 < len__4531__auto___5643)){
args__4534__auto__.push((arguments[i__4532__auto___5644]));

var G__5645 = (i__4532__auto___5644 + (1));
i__4532__auto___5644 = G__5645;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to5640.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to5640.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to5640.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to5640.cljs$lang$applyTo = (function (seq5641){
var G__5642 = cljs.core.first.call(null,seq5641);
var seq5641__$1 = cljs.core.next.call(null,seq5641);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5642,seq5641__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to5640);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to5646 = (function sablono$core$mail_to5646(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5653 = arguments.length;
var i__4532__auto___5654 = (0);
while(true){
if((i__4532__auto___5654 < len__4531__auto___5653)){
args__4534__auto__.push((arguments[i__4532__auto___5654]));

var G__5655 = (i__4532__auto___5654 + (1));
i__4532__auto___5654 = G__5655;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to5646.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to5646.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__5649){
var vec__5650 = p__5649;
var content = cljs.core.nth.call(null,vec__5650,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to5646.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to5646.cljs$lang$applyTo = (function (seq5647){
var G__5648 = cljs.core.first.call(null,seq5647);
var seq5647__$1 = cljs.core.next.call(null,seq5647);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5648,seq5647__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to5646);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list5656 = (function sablono$core$unordered_list5656(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list5656_$_iter__5657(s__5658){
return (new cljs.core.LazySeq(null,(function (){
var s__5658__$1 = s__5658;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5658__$1);
if(temp__5457__auto__){
var s__5658__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5658__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5658__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5660 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5659 = (0);
while(true){
if((i__5659 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5659);
cljs.core.chunk_append.call(null,b__5660,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5661 = (i__5659 + (1));
i__5659 = G__5661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5660),sablono$core$unordered_list5656_$_iter__5657.call(null,cljs.core.chunk_rest.call(null,s__5658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5660),null);
}
} else {
var x = cljs.core.first.call(null,s__5658__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list5656_$_iter__5657.call(null,cljs.core.rest.call(null,s__5658__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list5656);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list5662 = (function sablono$core$ordered_list5662(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list5662_$_iter__5663(s__5664){
return (new cljs.core.LazySeq(null,(function (){
var s__5664__$1 = s__5664;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5664__$1);
if(temp__5457__auto__){
var s__5664__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5664__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5664__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5666 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5665 = (0);
while(true){
if((i__5665 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5665);
cljs.core.chunk_append.call(null,b__5666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5667 = (i__5665 + (1));
i__5665 = G__5667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5666),sablono$core$ordered_list5662_$_iter__5663.call(null,cljs.core.chunk_rest.call(null,s__5664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5666),null);
}
} else {
var x = cljs.core.first.call(null,s__5664__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list5662_$_iter__5663.call(null,cljs.core.rest.call(null,s__5664__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list5662);
/**
 * Create an image element.
 */
sablono.core.image5668 = (function sablono$core$image5668(var_args){
var G__5670 = arguments.length;
switch (G__5670) {
case 1:
return sablono.core.image5668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image5668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image5668.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image5668.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image5668.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image5668);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__5672_SHARP_,p2__5673_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5672_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5673_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__5674_SHARP_,p2__5675_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5674_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5675_SHARP_)].join('');
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
sablono.core.color_field5676 = (function sablono$core$color_field5676(var_args){
var G__5678 = arguments.length;
switch (G__5678) {
case 1:
return sablono.core.color_field5676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field5676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field5676.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.color_field5676.call(null,name__5610__auto__,null);
});

sablono.core.color_field5676.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.color_field5676.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field5676);

/**
 * Creates a date input field.
 */
sablono.core.date_field5679 = (function sablono$core$date_field5679(var_args){
var G__5681 = arguments.length;
switch (G__5681) {
case 1:
return sablono.core.date_field5679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field5679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field5679.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.date_field5679.call(null,name__5610__auto__,null);
});

sablono.core.date_field5679.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.date_field5679.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field5679);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field5682 = (function sablono$core$datetime_field5682(var_args){
var G__5684 = arguments.length;
switch (G__5684) {
case 1:
return sablono.core.datetime_field5682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field5682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field5682.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.datetime_field5682.call(null,name__5610__auto__,null);
});

sablono.core.datetime_field5682.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.datetime_field5682.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field5682);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field5685 = (function sablono$core$datetime_local_field5685(var_args){
var G__5687 = arguments.length;
switch (G__5687) {
case 1:
return sablono.core.datetime_local_field5685.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field5685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field5685.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.datetime_local_field5685.call(null,name__5610__auto__,null);
});

sablono.core.datetime_local_field5685.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.datetime_local_field5685.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field5685);

/**
 * Creates a email input field.
 */
sablono.core.email_field5688 = (function sablono$core$email_field5688(var_args){
var G__5690 = arguments.length;
switch (G__5690) {
case 1:
return sablono.core.email_field5688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field5688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field5688.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.email_field5688.call(null,name__5610__auto__,null);
});

sablono.core.email_field5688.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.email_field5688.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field5688);

/**
 * Creates a file input field.
 */
sablono.core.file_field5691 = (function sablono$core$file_field5691(var_args){
var G__5693 = arguments.length;
switch (G__5693) {
case 1:
return sablono.core.file_field5691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field5691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field5691.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.file_field5691.call(null,name__5610__auto__,null);
});

sablono.core.file_field5691.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.file_field5691.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field5691);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field5694 = (function sablono$core$hidden_field5694(var_args){
var G__5696 = arguments.length;
switch (G__5696) {
case 1:
return sablono.core.hidden_field5694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field5694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field5694.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.hidden_field5694.call(null,name__5610__auto__,null);
});

sablono.core.hidden_field5694.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.hidden_field5694.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field5694);

/**
 * Creates a month input field.
 */
sablono.core.month_field5697 = (function sablono$core$month_field5697(var_args){
var G__5699 = arguments.length;
switch (G__5699) {
case 1:
return sablono.core.month_field5697.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field5697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field5697.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.month_field5697.call(null,name__5610__auto__,null);
});

sablono.core.month_field5697.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.month_field5697.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field5697);

/**
 * Creates a number input field.
 */
sablono.core.number_field5700 = (function sablono$core$number_field5700(var_args){
var G__5702 = arguments.length;
switch (G__5702) {
case 1:
return sablono.core.number_field5700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field5700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field5700.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.number_field5700.call(null,name__5610__auto__,null);
});

sablono.core.number_field5700.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.number_field5700.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field5700);

/**
 * Creates a password input field.
 */
sablono.core.password_field5703 = (function sablono$core$password_field5703(var_args){
var G__5705 = arguments.length;
switch (G__5705) {
case 1:
return sablono.core.password_field5703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field5703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field5703.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.password_field5703.call(null,name__5610__auto__,null);
});

sablono.core.password_field5703.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.password_field5703.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field5703);

/**
 * Creates a range input field.
 */
sablono.core.range_field5706 = (function sablono$core$range_field5706(var_args){
var G__5708 = arguments.length;
switch (G__5708) {
case 1:
return sablono.core.range_field5706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field5706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field5706.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.range_field5706.call(null,name__5610__auto__,null);
});

sablono.core.range_field5706.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.range_field5706.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field5706);

/**
 * Creates a search input field.
 */
sablono.core.search_field5709 = (function sablono$core$search_field5709(var_args){
var G__5711 = arguments.length;
switch (G__5711) {
case 1:
return sablono.core.search_field5709.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field5709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field5709.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.search_field5709.call(null,name__5610__auto__,null);
});

sablono.core.search_field5709.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.search_field5709.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field5709);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field5712 = (function sablono$core$tel_field5712(var_args){
var G__5714 = arguments.length;
switch (G__5714) {
case 1:
return sablono.core.tel_field5712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field5712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field5712.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.tel_field5712.call(null,name__5610__auto__,null);
});

sablono.core.tel_field5712.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.tel_field5712.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field5712);

/**
 * Creates a text input field.
 */
sablono.core.text_field5715 = (function sablono$core$text_field5715(var_args){
var G__5717 = arguments.length;
switch (G__5717) {
case 1:
return sablono.core.text_field5715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field5715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field5715.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.text_field5715.call(null,name__5610__auto__,null);
});

sablono.core.text_field5715.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.text_field5715.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field5715);

/**
 * Creates a time input field.
 */
sablono.core.time_field5718 = (function sablono$core$time_field5718(var_args){
var G__5720 = arguments.length;
switch (G__5720) {
case 1:
return sablono.core.time_field5718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field5718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field5718.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.time_field5718.call(null,name__5610__auto__,null);
});

sablono.core.time_field5718.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.time_field5718.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field5718);

/**
 * Creates a url input field.
 */
sablono.core.url_field5721 = (function sablono$core$url_field5721(var_args){
var G__5723 = arguments.length;
switch (G__5723) {
case 1:
return sablono.core.url_field5721.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field5721.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field5721.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.url_field5721.call(null,name__5610__auto__,null);
});

sablono.core.url_field5721.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.url_field5721.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field5721);

/**
 * Creates a week input field.
 */
sablono.core.week_field5724 = (function sablono$core$week_field5724(var_args){
var G__5726 = arguments.length;
switch (G__5726) {
case 1:
return sablono.core.week_field5724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field5724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field5724.cljs$core$IFn$_invoke$arity$1 = (function (name__5610__auto__){
return sablono.core.week_field5724.call(null,name__5610__auto__,null);
});

sablono.core.week_field5724.cljs$core$IFn$_invoke$arity$2 = (function (name__5610__auto__,value__5611__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5610__auto__,value__5611__auto__);
});

sablono.core.week_field5724.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field5724);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box5744 = (function sablono$core$check_box5744(var_args){
var G__5746 = arguments.length;
switch (G__5746) {
case 1:
return sablono.core.check_box5744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box5744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box5744.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box5744.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box5744.call(null,name,null);
});

sablono.core.check_box5744.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box5744.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box5744.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box5744.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box5744);
/**
 * Creates a radio button.
 */
sablono.core.radio_button5748 = (function sablono$core$radio_button5748(var_args){
var G__5750 = arguments.length;
switch (G__5750) {
case 1:
return sablono.core.radio_button5748.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button5748.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button5748.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button5748.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button5748.call(null,group,null);
});

sablono.core.radio_button5748.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button5748.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button5748.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button5748.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button5748);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options5752 = (function sablono$core$select_options5752(coll){
var iter__4324__auto__ = (function sablono$core$select_options5752_$_iter__5753(s__5754){
return (new cljs.core.LazySeq(null,(function (){
var s__5754__$1 = s__5754;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5754__$1);
if(temp__5457__auto__){
var s__5754__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5754__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5754__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5756 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5755 = (0);
while(true){
if((i__5755 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5755);
cljs.core.chunk_append.call(null,b__5756,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5757 = x;
var text = cljs.core.nth.call(null,vec__5757,(0),null);
var val = cljs.core.nth.call(null,vec__5757,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5757,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5752.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__5763 = (i__5755 + (1));
i__5755 = G__5763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5756),sablono$core$select_options5752_$_iter__5753.call(null,cljs.core.chunk_rest.call(null,s__5754__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5756),null);
}
} else {
var x = cljs.core.first.call(null,s__5754__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5760 = x;
var text = cljs.core.nth.call(null,vec__5760,(0),null);
var val = cljs.core.nth.call(null,vec__5760,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5760,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5752.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options5752_$_iter__5753.call(null,cljs.core.rest.call(null,s__5754__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options5752);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down5764 = (function sablono$core$drop_down5764(var_args){
var G__5766 = arguments.length;
switch (G__5766) {
case 2:
return sablono.core.drop_down5764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down5764.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down5764.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down5764.call(null,name,options,null);
});

sablono.core.drop_down5764.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down5764.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down5764);
/**
 * Creates a text area element.
 */
sablono.core.text_area5768 = (function sablono$core$text_area5768(var_args){
var G__5770 = arguments.length;
switch (G__5770) {
case 1:
return sablono.core.text_area5768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area5768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area5768.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area5768.call(null,name,null);
});

sablono.core.text_area5768.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area5768.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area5768);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label5772 = (function sablono$core$label5772(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label5772);
/**
 * Creates a submit button.
 */
sablono.core.submit_button5773 = (function sablono$core$submit_button5773(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button5773);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button5774 = (function sablono$core$reset_button5774(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button5774);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to5775 = (function sablono$core$form_to5775(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5782 = arguments.length;
var i__4532__auto___5783 = (0);
while(true){
if((i__4532__auto___5783 < len__4531__auto___5782)){
args__4534__auto__.push((arguments[i__4532__auto___5783]));

var G__5784 = (i__4532__auto___5783 + (1));
i__4532__auto___5783 = G__5784;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to5775.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to5775.cljs$core$IFn$_invoke$arity$variadic = (function (p__5778,body){
var vec__5779 = p__5778;
var method = cljs.core.nth.call(null,vec__5779,(0),null);
var action = cljs.core.nth.call(null,vec__5779,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to5775.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to5775.cljs$lang$applyTo = (function (seq5776){
var G__5777 = cljs.core.first.call(null,seq5776);
var seq5776__$1 = cljs.core.next.call(null,seq5776);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5777,seq5776__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to5775);
