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
var G__5626__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__5623 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__5624 = cljs.core.seq.call(null,vec__5623);
var first__5625 = cljs.core.first.call(null,seq__5624);
var seq__5624__$1 = cljs.core.next.call(null,seq__5624);
var tag = first__5625;
var body = seq__5624__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__5626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5627__i = 0, G__5627__a = new Array(arguments.length -  0);
while (G__5627__i < G__5627__a.length) {G__5627__a[G__5627__i] = arguments[G__5627__i + 0]; ++G__5627__i;}
  args = new cljs.core.IndexedSeq(G__5627__a,0,null);
} 
return G__5626__delegate.call(this,args);};
G__5626.cljs$lang$maxFixedArity = 0;
G__5626.cljs$lang$applyTo = (function (arglist__5628){
var args = cljs.core.seq(arglist__5628);
return G__5626__delegate(args);
});
G__5626.cljs$core$IFn$_invoke$arity$variadic = G__5626__delegate;
return G__5626;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__5629(s__5630){
return (new cljs.core.LazySeq(null,(function (){
var s__5630__$1 = s__5630;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5630__$1);
if(temp__5457__auto__){
var s__5630__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5630__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5630__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5632 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5631 = (0);
while(true){
if((i__5631 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__5631);
cljs.core.chunk_append.call(null,b__5632,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__5633 = (i__5631 + (1));
i__5631 = G__5633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5632),sablono$core$update_arglists_$_iter__5629.call(null,cljs.core.chunk_rest.call(null,s__5630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5632),null);
}
} else {
var args = cljs.core.first.call(null,s__5630__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__5629.call(null,cljs.core.rest.call(null,s__5630__$2)));
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
var len__4531__auto___5639 = arguments.length;
var i__4532__auto___5640 = (0);
while(true){
if((i__4532__auto___5640 < len__4531__auto___5639)){
args__4534__auto__.push((arguments[i__4532__auto___5640]));

var G__5641 = (i__4532__auto___5640 + (1));
i__4532__auto___5640 = G__5641;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__5635(s__5636){
return (new cljs.core.LazySeq(null,(function (){
var s__5636__$1 = s__5636;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5636__$1);
if(temp__5457__auto__){
var s__5636__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5636__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5636__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5638 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5637 = (0);
while(true){
if((i__5637 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__5637);
cljs.core.chunk_append.call(null,b__5638,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__5642 = (i__5637 + (1));
i__5637 = G__5642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5638),sablono$core$iter__5635.call(null,cljs.core.chunk_rest.call(null,s__5636__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5638),null);
}
} else {
var style = cljs.core.first.call(null,s__5636__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__5635.call(null,cljs.core.rest.call(null,s__5636__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq5634){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5634));
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
sablono.core.link_to5643 = (function sablono$core$link_to5643(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5646 = arguments.length;
var i__4532__auto___5647 = (0);
while(true){
if((i__4532__auto___5647 < len__4531__auto___5646)){
args__4534__auto__.push((arguments[i__4532__auto___5647]));

var G__5648 = (i__4532__auto___5647 + (1));
i__4532__auto___5647 = G__5648;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to5643.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to5643.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to5643.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to5643.cljs$lang$applyTo = (function (seq5644){
var G__5645 = cljs.core.first.call(null,seq5644);
var seq5644__$1 = cljs.core.next.call(null,seq5644);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5645,seq5644__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to5643);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to5649 = (function sablono$core$mail_to5649(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5656 = arguments.length;
var i__4532__auto___5657 = (0);
while(true){
if((i__4532__auto___5657 < len__4531__auto___5656)){
args__4534__auto__.push((arguments[i__4532__auto___5657]));

var G__5658 = (i__4532__auto___5657 + (1));
i__4532__auto___5657 = G__5658;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to5649.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to5649.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__5652){
var vec__5653 = p__5652;
var content = cljs.core.nth.call(null,vec__5653,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to5649.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to5649.cljs$lang$applyTo = (function (seq5650){
var G__5651 = cljs.core.first.call(null,seq5650);
var seq5650__$1 = cljs.core.next.call(null,seq5650);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5651,seq5650__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to5649);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list5659 = (function sablono$core$unordered_list5659(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list5659_$_iter__5660(s__5661){
return (new cljs.core.LazySeq(null,(function (){
var s__5661__$1 = s__5661;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5661__$1);
if(temp__5457__auto__){
var s__5661__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5661__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5661__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5663 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5662 = (0);
while(true){
if((i__5662 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5662);
cljs.core.chunk_append.call(null,b__5663,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5664 = (i__5662 + (1));
i__5662 = G__5664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5663),sablono$core$unordered_list5659_$_iter__5660.call(null,cljs.core.chunk_rest.call(null,s__5661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5663),null);
}
} else {
var x = cljs.core.first.call(null,s__5661__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list5659_$_iter__5660.call(null,cljs.core.rest.call(null,s__5661__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list5659);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list5665 = (function sablono$core$ordered_list5665(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list5665_$_iter__5666(s__5667){
return (new cljs.core.LazySeq(null,(function (){
var s__5667__$1 = s__5667;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5667__$1);
if(temp__5457__auto__){
var s__5667__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5667__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5667__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5669 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5668 = (0);
while(true){
if((i__5668 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5668);
cljs.core.chunk_append.call(null,b__5669,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5670 = (i__5668 + (1));
i__5668 = G__5670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5669),sablono$core$ordered_list5665_$_iter__5666.call(null,cljs.core.chunk_rest.call(null,s__5667__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5669),null);
}
} else {
var x = cljs.core.first.call(null,s__5667__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list5665_$_iter__5666.call(null,cljs.core.rest.call(null,s__5667__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list5665);
/**
 * Create an image element.
 */
sablono.core.image5671 = (function sablono$core$image5671(var_args){
var G__5673 = arguments.length;
switch (G__5673) {
case 1:
return sablono.core.image5671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image5671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image5671.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image5671.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image5671.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image5671);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__5675_SHARP_,p2__5676_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5675_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5676_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__5677_SHARP_,p2__5678_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5677_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5678_SHARP_)].join('');
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
sablono.core.color_field5679 = (function sablono$core$color_field5679(var_args){
var G__5681 = arguments.length;
switch (G__5681) {
case 1:
return sablono.core.color_field5679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field5679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field5679.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.color_field5679.call(null,name__5613__auto__,null);
});

sablono.core.color_field5679.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.color_field5679.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field5679);

/**
 * Creates a date input field.
 */
sablono.core.date_field5682 = (function sablono$core$date_field5682(var_args){
var G__5684 = arguments.length;
switch (G__5684) {
case 1:
return sablono.core.date_field5682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field5682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field5682.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.date_field5682.call(null,name__5613__auto__,null);
});

sablono.core.date_field5682.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.date_field5682.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field5682);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field5685 = (function sablono$core$datetime_field5685(var_args){
var G__5687 = arguments.length;
switch (G__5687) {
case 1:
return sablono.core.datetime_field5685.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field5685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field5685.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.datetime_field5685.call(null,name__5613__auto__,null);
});

sablono.core.datetime_field5685.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.datetime_field5685.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field5685);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field5688 = (function sablono$core$datetime_local_field5688(var_args){
var G__5690 = arguments.length;
switch (G__5690) {
case 1:
return sablono.core.datetime_local_field5688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field5688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field5688.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.datetime_local_field5688.call(null,name__5613__auto__,null);
});

sablono.core.datetime_local_field5688.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.datetime_local_field5688.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field5688);

/**
 * Creates a email input field.
 */
sablono.core.email_field5691 = (function sablono$core$email_field5691(var_args){
var G__5693 = arguments.length;
switch (G__5693) {
case 1:
return sablono.core.email_field5691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field5691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field5691.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.email_field5691.call(null,name__5613__auto__,null);
});

sablono.core.email_field5691.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.email_field5691.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field5691);

/**
 * Creates a file input field.
 */
sablono.core.file_field5694 = (function sablono$core$file_field5694(var_args){
var G__5696 = arguments.length;
switch (G__5696) {
case 1:
return sablono.core.file_field5694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field5694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field5694.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.file_field5694.call(null,name__5613__auto__,null);
});

sablono.core.file_field5694.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.file_field5694.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field5694);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field5697 = (function sablono$core$hidden_field5697(var_args){
var G__5699 = arguments.length;
switch (G__5699) {
case 1:
return sablono.core.hidden_field5697.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field5697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field5697.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.hidden_field5697.call(null,name__5613__auto__,null);
});

sablono.core.hidden_field5697.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.hidden_field5697.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field5697);

/**
 * Creates a month input field.
 */
sablono.core.month_field5700 = (function sablono$core$month_field5700(var_args){
var G__5702 = arguments.length;
switch (G__5702) {
case 1:
return sablono.core.month_field5700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field5700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field5700.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.month_field5700.call(null,name__5613__auto__,null);
});

sablono.core.month_field5700.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.month_field5700.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field5700);

/**
 * Creates a number input field.
 */
sablono.core.number_field5703 = (function sablono$core$number_field5703(var_args){
var G__5705 = arguments.length;
switch (G__5705) {
case 1:
return sablono.core.number_field5703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field5703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field5703.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.number_field5703.call(null,name__5613__auto__,null);
});

sablono.core.number_field5703.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.number_field5703.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field5703);

/**
 * Creates a password input field.
 */
sablono.core.password_field5706 = (function sablono$core$password_field5706(var_args){
var G__5708 = arguments.length;
switch (G__5708) {
case 1:
return sablono.core.password_field5706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field5706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field5706.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.password_field5706.call(null,name__5613__auto__,null);
});

sablono.core.password_field5706.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.password_field5706.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field5706);

/**
 * Creates a range input field.
 */
sablono.core.range_field5709 = (function sablono$core$range_field5709(var_args){
var G__5711 = arguments.length;
switch (G__5711) {
case 1:
return sablono.core.range_field5709.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field5709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field5709.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.range_field5709.call(null,name__5613__auto__,null);
});

sablono.core.range_field5709.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.range_field5709.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field5709);

/**
 * Creates a search input field.
 */
sablono.core.search_field5712 = (function sablono$core$search_field5712(var_args){
var G__5714 = arguments.length;
switch (G__5714) {
case 1:
return sablono.core.search_field5712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field5712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field5712.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.search_field5712.call(null,name__5613__auto__,null);
});

sablono.core.search_field5712.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.search_field5712.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field5712);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field5715 = (function sablono$core$tel_field5715(var_args){
var G__5717 = arguments.length;
switch (G__5717) {
case 1:
return sablono.core.tel_field5715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field5715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field5715.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.tel_field5715.call(null,name__5613__auto__,null);
});

sablono.core.tel_field5715.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.tel_field5715.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field5715);

/**
 * Creates a text input field.
 */
sablono.core.text_field5718 = (function sablono$core$text_field5718(var_args){
var G__5720 = arguments.length;
switch (G__5720) {
case 1:
return sablono.core.text_field5718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field5718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field5718.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.text_field5718.call(null,name__5613__auto__,null);
});

sablono.core.text_field5718.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.text_field5718.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field5718);

/**
 * Creates a time input field.
 */
sablono.core.time_field5721 = (function sablono$core$time_field5721(var_args){
var G__5723 = arguments.length;
switch (G__5723) {
case 1:
return sablono.core.time_field5721.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field5721.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field5721.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.time_field5721.call(null,name__5613__auto__,null);
});

sablono.core.time_field5721.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.time_field5721.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field5721);

/**
 * Creates a url input field.
 */
sablono.core.url_field5724 = (function sablono$core$url_field5724(var_args){
var G__5726 = arguments.length;
switch (G__5726) {
case 1:
return sablono.core.url_field5724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field5724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field5724.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.url_field5724.call(null,name__5613__auto__,null);
});

sablono.core.url_field5724.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.url_field5724.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field5724);

/**
 * Creates a week input field.
 */
sablono.core.week_field5727 = (function sablono$core$week_field5727(var_args){
var G__5729 = arguments.length;
switch (G__5729) {
case 1:
return sablono.core.week_field5727.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field5727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field5727.cljs$core$IFn$_invoke$arity$1 = (function (name__5613__auto__){
return sablono.core.week_field5727.call(null,name__5613__auto__,null);
});

sablono.core.week_field5727.cljs$core$IFn$_invoke$arity$2 = (function (name__5613__auto__,value__5614__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5613__auto__,value__5614__auto__);
});

sablono.core.week_field5727.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field5727);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box5747 = (function sablono$core$check_box5747(var_args){
var G__5749 = arguments.length;
switch (G__5749) {
case 1:
return sablono.core.check_box5747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box5747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box5747.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box5747.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box5747.call(null,name,null);
});

sablono.core.check_box5747.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box5747.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box5747.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box5747.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box5747);
/**
 * Creates a radio button.
 */
sablono.core.radio_button5751 = (function sablono$core$radio_button5751(var_args){
var G__5753 = arguments.length;
switch (G__5753) {
case 1:
return sablono.core.radio_button5751.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button5751.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button5751.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button5751.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button5751.call(null,group,null);
});

sablono.core.radio_button5751.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button5751.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button5751.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button5751.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button5751);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options5755 = (function sablono$core$select_options5755(coll){
var iter__4324__auto__ = (function sablono$core$select_options5755_$_iter__5756(s__5757){
return (new cljs.core.LazySeq(null,(function (){
var s__5757__$1 = s__5757;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5757__$1);
if(temp__5457__auto__){
var s__5757__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5757__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5757__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5759 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5758 = (0);
while(true){
if((i__5758 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5758);
cljs.core.chunk_append.call(null,b__5759,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5760 = x;
var text = cljs.core.nth.call(null,vec__5760,(0),null);
var val = cljs.core.nth.call(null,vec__5760,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5760,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5755.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__5766 = (i__5758 + (1));
i__5758 = G__5766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5759),sablono$core$select_options5755_$_iter__5756.call(null,cljs.core.chunk_rest.call(null,s__5757__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5759),null);
}
} else {
var x = cljs.core.first.call(null,s__5757__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5763 = x;
var text = cljs.core.nth.call(null,vec__5763,(0),null);
var val = cljs.core.nth.call(null,vec__5763,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5763,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5755.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options5755_$_iter__5756.call(null,cljs.core.rest.call(null,s__5757__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options5755);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down5767 = (function sablono$core$drop_down5767(var_args){
var G__5769 = arguments.length;
switch (G__5769) {
case 2:
return sablono.core.drop_down5767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down5767.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down5767.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down5767.call(null,name,options,null);
});

sablono.core.drop_down5767.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down5767.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down5767);
/**
 * Creates a text area element.
 */
sablono.core.text_area5771 = (function sablono$core$text_area5771(var_args){
var G__5773 = arguments.length;
switch (G__5773) {
case 1:
return sablono.core.text_area5771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area5771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area5771.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area5771.call(null,name,null);
});

sablono.core.text_area5771.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area5771.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area5771);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label5775 = (function sablono$core$label5775(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label5775);
/**
 * Creates a submit button.
 */
sablono.core.submit_button5776 = (function sablono$core$submit_button5776(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button5776);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button5777 = (function sablono$core$reset_button5777(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button5777);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to5778 = (function sablono$core$form_to5778(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5785 = arguments.length;
var i__4532__auto___5786 = (0);
while(true){
if((i__4532__auto___5786 < len__4531__auto___5785)){
args__4534__auto__.push((arguments[i__4532__auto___5786]));

var G__5787 = (i__4532__auto___5786 + (1));
i__4532__auto___5786 = G__5787;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to5778.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to5778.cljs$core$IFn$_invoke$arity$variadic = (function (p__5781,body){
var vec__5782 = p__5781;
var method = cljs.core.nth.call(null,vec__5782,(0),null);
var action = cljs.core.nth.call(null,vec__5782,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to5778.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to5778.cljs$lang$applyTo = (function (seq5779){
var G__5780 = cljs.core.first.call(null,seq5779);
var seq5779__$1 = cljs.core.next.call(null,seq5779);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5780,seq5779__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to5778);
