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
var G__5571__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__5568 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__5569 = cljs.core.seq.call(null,vec__5568);
var first__5570 = cljs.core.first.call(null,seq__5569);
var seq__5569__$1 = cljs.core.next.call(null,seq__5569);
var tag = first__5570;
var body = seq__5569__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__5571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5572__i = 0, G__5572__a = new Array(arguments.length -  0);
while (G__5572__i < G__5572__a.length) {G__5572__a[G__5572__i] = arguments[G__5572__i + 0]; ++G__5572__i;}
  args = new cljs.core.IndexedSeq(G__5572__a,0,null);
} 
return G__5571__delegate.call(this,args);};
G__5571.cljs$lang$maxFixedArity = 0;
G__5571.cljs$lang$applyTo = (function (arglist__5573){
var args = cljs.core.seq(arglist__5573);
return G__5571__delegate(args);
});
G__5571.cljs$core$IFn$_invoke$arity$variadic = G__5571__delegate;
return G__5571;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__5574(s__5575){
return (new cljs.core.LazySeq(null,(function (){
var s__5575__$1 = s__5575;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5575__$1);
if(temp__5457__auto__){
var s__5575__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5575__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5575__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5577 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5576 = (0);
while(true){
if((i__5576 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__5576);
cljs.core.chunk_append.call(null,b__5577,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__5578 = (i__5576 + (1));
i__5576 = G__5578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5577),sablono$core$update_arglists_$_iter__5574.call(null,cljs.core.chunk_rest.call(null,s__5575__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5577),null);
}
} else {
var args = cljs.core.first.call(null,s__5575__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__5574.call(null,cljs.core.rest.call(null,s__5575__$2)));
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
var len__4531__auto___5584 = arguments.length;
var i__4532__auto___5585 = (0);
while(true){
if((i__4532__auto___5585 < len__4531__auto___5584)){
args__4534__auto__.push((arguments[i__4532__auto___5585]));

var G__5586 = (i__4532__auto___5585 + (1));
i__4532__auto___5585 = G__5586;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__5580(s__5581){
return (new cljs.core.LazySeq(null,(function (){
var s__5581__$1 = s__5581;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5581__$1);
if(temp__5457__auto__){
var s__5581__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5581__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5581__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5583 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5582 = (0);
while(true){
if((i__5582 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__5582);
cljs.core.chunk_append.call(null,b__5583,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__5587 = (i__5582 + (1));
i__5582 = G__5587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5583),sablono$core$iter__5580.call(null,cljs.core.chunk_rest.call(null,s__5581__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5583),null);
}
} else {
var style = cljs.core.first.call(null,s__5581__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__5580.call(null,cljs.core.rest.call(null,s__5581__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq5579){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5579));
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
sablono.core.link_to5588 = (function sablono$core$link_to5588(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5591 = arguments.length;
var i__4532__auto___5592 = (0);
while(true){
if((i__4532__auto___5592 < len__4531__auto___5591)){
args__4534__auto__.push((arguments[i__4532__auto___5592]));

var G__5593 = (i__4532__auto___5592 + (1));
i__4532__auto___5592 = G__5593;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to5588.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to5588.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to5588.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to5588.cljs$lang$applyTo = (function (seq5589){
var G__5590 = cljs.core.first.call(null,seq5589);
var seq5589__$1 = cljs.core.next.call(null,seq5589);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5590,seq5589__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to5588);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to5594 = (function sablono$core$mail_to5594(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5601 = arguments.length;
var i__4532__auto___5602 = (0);
while(true){
if((i__4532__auto___5602 < len__4531__auto___5601)){
args__4534__auto__.push((arguments[i__4532__auto___5602]));

var G__5603 = (i__4532__auto___5602 + (1));
i__4532__auto___5602 = G__5603;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to5594.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to5594.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__5597){
var vec__5598 = p__5597;
var content = cljs.core.nth.call(null,vec__5598,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to5594.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to5594.cljs$lang$applyTo = (function (seq5595){
var G__5596 = cljs.core.first.call(null,seq5595);
var seq5595__$1 = cljs.core.next.call(null,seq5595);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5596,seq5595__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to5594);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list5604 = (function sablono$core$unordered_list5604(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list5604_$_iter__5605(s__5606){
return (new cljs.core.LazySeq(null,(function (){
var s__5606__$1 = s__5606;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5606__$1);
if(temp__5457__auto__){
var s__5606__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5606__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5606__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5608 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5607 = (0);
while(true){
if((i__5607 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5607);
cljs.core.chunk_append.call(null,b__5608,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5609 = (i__5607 + (1));
i__5607 = G__5609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5608),sablono$core$unordered_list5604_$_iter__5605.call(null,cljs.core.chunk_rest.call(null,s__5606__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5608),null);
}
} else {
var x = cljs.core.first.call(null,s__5606__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list5604_$_iter__5605.call(null,cljs.core.rest.call(null,s__5606__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list5604);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list5610 = (function sablono$core$ordered_list5610(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list5610_$_iter__5611(s__5612){
return (new cljs.core.LazySeq(null,(function (){
var s__5612__$1 = s__5612;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5612__$1);
if(temp__5457__auto__){
var s__5612__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5612__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5612__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5614 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5613 = (0);
while(true){
if((i__5613 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5613);
cljs.core.chunk_append.call(null,b__5614,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5615 = (i__5613 + (1));
i__5613 = G__5615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5614),sablono$core$ordered_list5610_$_iter__5611.call(null,cljs.core.chunk_rest.call(null,s__5612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5614),null);
}
} else {
var x = cljs.core.first.call(null,s__5612__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list5610_$_iter__5611.call(null,cljs.core.rest.call(null,s__5612__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list5610);
/**
 * Create an image element.
 */
sablono.core.image5616 = (function sablono$core$image5616(var_args){
var G__5618 = arguments.length;
switch (G__5618) {
case 1:
return sablono.core.image5616.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image5616.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image5616.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image5616.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image5616.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image5616);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__5620_SHARP_,p2__5621_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5620_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5621_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__5622_SHARP_,p2__5623_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5622_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5623_SHARP_)].join('');
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
sablono.core.color_field5624 = (function sablono$core$color_field5624(var_args){
var G__5626 = arguments.length;
switch (G__5626) {
case 1:
return sablono.core.color_field5624.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field5624.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field5624.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.color_field5624.call(null,name__5558__auto__,null);
});

sablono.core.color_field5624.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.color_field5624.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field5624);

/**
 * Creates a date input field.
 */
sablono.core.date_field5627 = (function sablono$core$date_field5627(var_args){
var G__5629 = arguments.length;
switch (G__5629) {
case 1:
return sablono.core.date_field5627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field5627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field5627.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.date_field5627.call(null,name__5558__auto__,null);
});

sablono.core.date_field5627.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.date_field5627.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field5627);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field5630 = (function sablono$core$datetime_field5630(var_args){
var G__5632 = arguments.length;
switch (G__5632) {
case 1:
return sablono.core.datetime_field5630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field5630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field5630.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.datetime_field5630.call(null,name__5558__auto__,null);
});

sablono.core.datetime_field5630.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.datetime_field5630.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field5630);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field5633 = (function sablono$core$datetime_local_field5633(var_args){
var G__5635 = arguments.length;
switch (G__5635) {
case 1:
return sablono.core.datetime_local_field5633.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field5633.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field5633.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.datetime_local_field5633.call(null,name__5558__auto__,null);
});

sablono.core.datetime_local_field5633.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.datetime_local_field5633.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field5633);

/**
 * Creates a email input field.
 */
sablono.core.email_field5636 = (function sablono$core$email_field5636(var_args){
var G__5638 = arguments.length;
switch (G__5638) {
case 1:
return sablono.core.email_field5636.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field5636.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field5636.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.email_field5636.call(null,name__5558__auto__,null);
});

sablono.core.email_field5636.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.email_field5636.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field5636);

/**
 * Creates a file input field.
 */
sablono.core.file_field5639 = (function sablono$core$file_field5639(var_args){
var G__5641 = arguments.length;
switch (G__5641) {
case 1:
return sablono.core.file_field5639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field5639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field5639.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.file_field5639.call(null,name__5558__auto__,null);
});

sablono.core.file_field5639.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.file_field5639.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field5639);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field5642 = (function sablono$core$hidden_field5642(var_args){
var G__5644 = arguments.length;
switch (G__5644) {
case 1:
return sablono.core.hidden_field5642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field5642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field5642.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.hidden_field5642.call(null,name__5558__auto__,null);
});

sablono.core.hidden_field5642.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.hidden_field5642.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field5642);

/**
 * Creates a month input field.
 */
sablono.core.month_field5645 = (function sablono$core$month_field5645(var_args){
var G__5647 = arguments.length;
switch (G__5647) {
case 1:
return sablono.core.month_field5645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field5645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field5645.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.month_field5645.call(null,name__5558__auto__,null);
});

sablono.core.month_field5645.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.month_field5645.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field5645);

/**
 * Creates a number input field.
 */
sablono.core.number_field5648 = (function sablono$core$number_field5648(var_args){
var G__5650 = arguments.length;
switch (G__5650) {
case 1:
return sablono.core.number_field5648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field5648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field5648.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.number_field5648.call(null,name__5558__auto__,null);
});

sablono.core.number_field5648.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.number_field5648.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field5648);

/**
 * Creates a password input field.
 */
sablono.core.password_field5651 = (function sablono$core$password_field5651(var_args){
var G__5653 = arguments.length;
switch (G__5653) {
case 1:
return sablono.core.password_field5651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field5651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field5651.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.password_field5651.call(null,name__5558__auto__,null);
});

sablono.core.password_field5651.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.password_field5651.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field5651);

/**
 * Creates a range input field.
 */
sablono.core.range_field5654 = (function sablono$core$range_field5654(var_args){
var G__5656 = arguments.length;
switch (G__5656) {
case 1:
return sablono.core.range_field5654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field5654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field5654.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.range_field5654.call(null,name__5558__auto__,null);
});

sablono.core.range_field5654.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.range_field5654.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field5654);

/**
 * Creates a search input field.
 */
sablono.core.search_field5657 = (function sablono$core$search_field5657(var_args){
var G__5659 = arguments.length;
switch (G__5659) {
case 1:
return sablono.core.search_field5657.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field5657.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field5657.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.search_field5657.call(null,name__5558__auto__,null);
});

sablono.core.search_field5657.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.search_field5657.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field5657);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field5660 = (function sablono$core$tel_field5660(var_args){
var G__5662 = arguments.length;
switch (G__5662) {
case 1:
return sablono.core.tel_field5660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field5660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field5660.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.tel_field5660.call(null,name__5558__auto__,null);
});

sablono.core.tel_field5660.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.tel_field5660.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field5660);

/**
 * Creates a text input field.
 */
sablono.core.text_field5663 = (function sablono$core$text_field5663(var_args){
var G__5665 = arguments.length;
switch (G__5665) {
case 1:
return sablono.core.text_field5663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field5663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field5663.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.text_field5663.call(null,name__5558__auto__,null);
});

sablono.core.text_field5663.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.text_field5663.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field5663);

/**
 * Creates a time input field.
 */
sablono.core.time_field5666 = (function sablono$core$time_field5666(var_args){
var G__5668 = arguments.length;
switch (G__5668) {
case 1:
return sablono.core.time_field5666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field5666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field5666.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.time_field5666.call(null,name__5558__auto__,null);
});

sablono.core.time_field5666.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.time_field5666.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field5666);

/**
 * Creates a url input field.
 */
sablono.core.url_field5669 = (function sablono$core$url_field5669(var_args){
var G__5671 = arguments.length;
switch (G__5671) {
case 1:
return sablono.core.url_field5669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field5669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field5669.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.url_field5669.call(null,name__5558__auto__,null);
});

sablono.core.url_field5669.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.url_field5669.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field5669);

/**
 * Creates a week input field.
 */
sablono.core.week_field5672 = (function sablono$core$week_field5672(var_args){
var G__5674 = arguments.length;
switch (G__5674) {
case 1:
return sablono.core.week_field5672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field5672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field5672.cljs$core$IFn$_invoke$arity$1 = (function (name__5558__auto__){
return sablono.core.week_field5672.call(null,name__5558__auto__,null);
});

sablono.core.week_field5672.cljs$core$IFn$_invoke$arity$2 = (function (name__5558__auto__,value__5559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5558__auto__,value__5559__auto__);
});

sablono.core.week_field5672.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field5672);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box5692 = (function sablono$core$check_box5692(var_args){
var G__5694 = arguments.length;
switch (G__5694) {
case 1:
return sablono.core.check_box5692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box5692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box5692.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box5692.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box5692.call(null,name,null);
});

sablono.core.check_box5692.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box5692.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box5692.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box5692.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box5692);
/**
 * Creates a radio button.
 */
sablono.core.radio_button5696 = (function sablono$core$radio_button5696(var_args){
var G__5698 = arguments.length;
switch (G__5698) {
case 1:
return sablono.core.radio_button5696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button5696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button5696.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button5696.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button5696.call(null,group,null);
});

sablono.core.radio_button5696.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button5696.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button5696.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button5696.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button5696);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options5700 = (function sablono$core$select_options5700(coll){
var iter__4324__auto__ = (function sablono$core$select_options5700_$_iter__5701(s__5702){
return (new cljs.core.LazySeq(null,(function (){
var s__5702__$1 = s__5702;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5702__$1);
if(temp__5457__auto__){
var s__5702__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5702__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5702__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5704 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5703 = (0);
while(true){
if((i__5703 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5703);
cljs.core.chunk_append.call(null,b__5704,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5705 = x;
var text = cljs.core.nth.call(null,vec__5705,(0),null);
var val = cljs.core.nth.call(null,vec__5705,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5705,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5700.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__5711 = (i__5703 + (1));
i__5703 = G__5711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5704),sablono$core$select_options5700_$_iter__5701.call(null,cljs.core.chunk_rest.call(null,s__5702__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5704),null);
}
} else {
var x = cljs.core.first.call(null,s__5702__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5708 = x;
var text = cljs.core.nth.call(null,vec__5708,(0),null);
var val = cljs.core.nth.call(null,vec__5708,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5708,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5700.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options5700_$_iter__5701.call(null,cljs.core.rest.call(null,s__5702__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options5700);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down5712 = (function sablono$core$drop_down5712(var_args){
var G__5714 = arguments.length;
switch (G__5714) {
case 2:
return sablono.core.drop_down5712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down5712.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down5712.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down5712.call(null,name,options,null);
});

sablono.core.drop_down5712.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down5712.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down5712);
/**
 * Creates a text area element.
 */
sablono.core.text_area5716 = (function sablono$core$text_area5716(var_args){
var G__5718 = arguments.length;
switch (G__5718) {
case 1:
return sablono.core.text_area5716.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area5716.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area5716.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area5716.call(null,name,null);
});

sablono.core.text_area5716.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area5716.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area5716);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label5720 = (function sablono$core$label5720(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label5720);
/**
 * Creates a submit button.
 */
sablono.core.submit_button5721 = (function sablono$core$submit_button5721(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button5721);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button5722 = (function sablono$core$reset_button5722(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button5722);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to5723 = (function sablono$core$form_to5723(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5730 = arguments.length;
var i__4532__auto___5731 = (0);
while(true){
if((i__4532__auto___5731 < len__4531__auto___5730)){
args__4534__auto__.push((arguments[i__4532__auto___5731]));

var G__5732 = (i__4532__auto___5731 + (1));
i__4532__auto___5731 = G__5732;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to5723.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to5723.cljs$core$IFn$_invoke$arity$variadic = (function (p__5726,body){
var vec__5727 = p__5726;
var method = cljs.core.nth.call(null,vec__5727,(0),null);
var action = cljs.core.nth.call(null,vec__5727,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to5723.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to5723.cljs$lang$applyTo = (function (seq5724){
var G__5725 = cljs.core.first.call(null,seq5724);
var seq5724__$1 = cljs.core.next.call(null,seq5724);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5725,seq5724__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to5723);
