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
var G__5726__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__5723 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__5724 = cljs.core.seq.call(null,vec__5723);
var first__5725 = cljs.core.first.call(null,seq__5724);
var seq__5724__$1 = cljs.core.next.call(null,seq__5724);
var tag = first__5725;
var body = seq__5724__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__5726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5727__i = 0, G__5727__a = new Array(arguments.length -  0);
while (G__5727__i < G__5727__a.length) {G__5727__a[G__5727__i] = arguments[G__5727__i + 0]; ++G__5727__i;}
  args = new cljs.core.IndexedSeq(G__5727__a,0,null);
} 
return G__5726__delegate.call(this,args);};
G__5726.cljs$lang$maxFixedArity = 0;
G__5726.cljs$lang$applyTo = (function (arglist__5728){
var args = cljs.core.seq(arglist__5728);
return G__5726__delegate(args);
});
G__5726.cljs$core$IFn$_invoke$arity$variadic = G__5726__delegate;
return G__5726;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__5729(s__5730){
return (new cljs.core.LazySeq(null,(function (){
var s__5730__$1 = s__5730;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5730__$1);
if(temp__5457__auto__){
var s__5730__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5730__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5730__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5732 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5731 = (0);
while(true){
if((i__5731 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__5731);
cljs.core.chunk_append.call(null,b__5732,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__5733 = (i__5731 + (1));
i__5731 = G__5733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5732),sablono$core$update_arglists_$_iter__5729.call(null,cljs.core.chunk_rest.call(null,s__5730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5732),null);
}
} else {
var args = cljs.core.first.call(null,s__5730__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__5729.call(null,cljs.core.rest.call(null,s__5730__$2)));
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
var len__4531__auto___5739 = arguments.length;
var i__4532__auto___5740 = (0);
while(true){
if((i__4532__auto___5740 < len__4531__auto___5739)){
args__4534__auto__.push((arguments[i__4532__auto___5740]));

var G__5741 = (i__4532__auto___5740 + (1));
i__4532__auto___5740 = G__5741;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__5735(s__5736){
return (new cljs.core.LazySeq(null,(function (){
var s__5736__$1 = s__5736;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5736__$1);
if(temp__5457__auto__){
var s__5736__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5736__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5736__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5738 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5737 = (0);
while(true){
if((i__5737 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__5737);
cljs.core.chunk_append.call(null,b__5738,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__5742 = (i__5737 + (1));
i__5737 = G__5742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5738),sablono$core$iter__5735.call(null,cljs.core.chunk_rest.call(null,s__5736__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5738),null);
}
} else {
var style = cljs.core.first.call(null,s__5736__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__5735.call(null,cljs.core.rest.call(null,s__5736__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq5734){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5734));
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
sablono.core.link_to5743 = (function sablono$core$link_to5743(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5746 = arguments.length;
var i__4532__auto___5747 = (0);
while(true){
if((i__4532__auto___5747 < len__4531__auto___5746)){
args__4534__auto__.push((arguments[i__4532__auto___5747]));

var G__5748 = (i__4532__auto___5747 + (1));
i__4532__auto___5747 = G__5748;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to5743.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to5743.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to5743.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to5743.cljs$lang$applyTo = (function (seq5744){
var G__5745 = cljs.core.first.call(null,seq5744);
var seq5744__$1 = cljs.core.next.call(null,seq5744);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5745,seq5744__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to5743);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to5749 = (function sablono$core$mail_to5749(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5756 = arguments.length;
var i__4532__auto___5757 = (0);
while(true){
if((i__4532__auto___5757 < len__4531__auto___5756)){
args__4534__auto__.push((arguments[i__4532__auto___5757]));

var G__5758 = (i__4532__auto___5757 + (1));
i__4532__auto___5757 = G__5758;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to5749.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to5749.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__5752){
var vec__5753 = p__5752;
var content = cljs.core.nth.call(null,vec__5753,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to5749.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to5749.cljs$lang$applyTo = (function (seq5750){
var G__5751 = cljs.core.first.call(null,seq5750);
var seq5750__$1 = cljs.core.next.call(null,seq5750);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5751,seq5750__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to5749);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list5759 = (function sablono$core$unordered_list5759(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list5759_$_iter__5760(s__5761){
return (new cljs.core.LazySeq(null,(function (){
var s__5761__$1 = s__5761;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5761__$1);
if(temp__5457__auto__){
var s__5761__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5761__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5761__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5763 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5762 = (0);
while(true){
if((i__5762 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5762);
cljs.core.chunk_append.call(null,b__5763,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5764 = (i__5762 + (1));
i__5762 = G__5764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5763),sablono$core$unordered_list5759_$_iter__5760.call(null,cljs.core.chunk_rest.call(null,s__5761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5763),null);
}
} else {
var x = cljs.core.first.call(null,s__5761__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list5759_$_iter__5760.call(null,cljs.core.rest.call(null,s__5761__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list5759);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list5765 = (function sablono$core$ordered_list5765(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list5765_$_iter__5766(s__5767){
return (new cljs.core.LazySeq(null,(function (){
var s__5767__$1 = s__5767;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5767__$1);
if(temp__5457__auto__){
var s__5767__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5767__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5767__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5769 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5768 = (0);
while(true){
if((i__5768 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5768);
cljs.core.chunk_append.call(null,b__5769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5770 = (i__5768 + (1));
i__5768 = G__5770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5769),sablono$core$ordered_list5765_$_iter__5766.call(null,cljs.core.chunk_rest.call(null,s__5767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5769),null);
}
} else {
var x = cljs.core.first.call(null,s__5767__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list5765_$_iter__5766.call(null,cljs.core.rest.call(null,s__5767__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list5765);
/**
 * Create an image element.
 */
sablono.core.image5771 = (function sablono$core$image5771(var_args){
var G__5773 = arguments.length;
switch (G__5773) {
case 1:
return sablono.core.image5771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image5771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image5771.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image5771.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image5771.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image5771);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__5775_SHARP_,p2__5776_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5775_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5776_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__5777_SHARP_,p2__5778_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5777_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5778_SHARP_)].join('');
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
sablono.core.color_field5779 = (function sablono$core$color_field5779(var_args){
var G__5781 = arguments.length;
switch (G__5781) {
case 1:
return sablono.core.color_field5779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field5779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field5779.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.color_field5779.call(null,name__5713__auto__,null);
});

sablono.core.color_field5779.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.color_field5779.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field5779);

/**
 * Creates a date input field.
 */
sablono.core.date_field5782 = (function sablono$core$date_field5782(var_args){
var G__5784 = arguments.length;
switch (G__5784) {
case 1:
return sablono.core.date_field5782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field5782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field5782.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.date_field5782.call(null,name__5713__auto__,null);
});

sablono.core.date_field5782.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.date_field5782.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field5782);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field5785 = (function sablono$core$datetime_field5785(var_args){
var G__5787 = arguments.length;
switch (G__5787) {
case 1:
return sablono.core.datetime_field5785.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field5785.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field5785.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.datetime_field5785.call(null,name__5713__auto__,null);
});

sablono.core.datetime_field5785.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.datetime_field5785.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field5785);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field5788 = (function sablono$core$datetime_local_field5788(var_args){
var G__5790 = arguments.length;
switch (G__5790) {
case 1:
return sablono.core.datetime_local_field5788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field5788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field5788.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.datetime_local_field5788.call(null,name__5713__auto__,null);
});

sablono.core.datetime_local_field5788.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.datetime_local_field5788.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field5788);

/**
 * Creates a email input field.
 */
sablono.core.email_field5791 = (function sablono$core$email_field5791(var_args){
var G__5793 = arguments.length;
switch (G__5793) {
case 1:
return sablono.core.email_field5791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field5791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field5791.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.email_field5791.call(null,name__5713__auto__,null);
});

sablono.core.email_field5791.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.email_field5791.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field5791);

/**
 * Creates a file input field.
 */
sablono.core.file_field5794 = (function sablono$core$file_field5794(var_args){
var G__5796 = arguments.length;
switch (G__5796) {
case 1:
return sablono.core.file_field5794.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field5794.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field5794.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.file_field5794.call(null,name__5713__auto__,null);
});

sablono.core.file_field5794.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.file_field5794.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field5794);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field5797 = (function sablono$core$hidden_field5797(var_args){
var G__5799 = arguments.length;
switch (G__5799) {
case 1:
return sablono.core.hidden_field5797.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field5797.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field5797.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.hidden_field5797.call(null,name__5713__auto__,null);
});

sablono.core.hidden_field5797.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.hidden_field5797.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field5797);

/**
 * Creates a month input field.
 */
sablono.core.month_field5800 = (function sablono$core$month_field5800(var_args){
var G__5802 = arguments.length;
switch (G__5802) {
case 1:
return sablono.core.month_field5800.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field5800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field5800.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.month_field5800.call(null,name__5713__auto__,null);
});

sablono.core.month_field5800.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.month_field5800.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field5800);

/**
 * Creates a number input field.
 */
sablono.core.number_field5803 = (function sablono$core$number_field5803(var_args){
var G__5805 = arguments.length;
switch (G__5805) {
case 1:
return sablono.core.number_field5803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field5803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field5803.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.number_field5803.call(null,name__5713__auto__,null);
});

sablono.core.number_field5803.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.number_field5803.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field5803);

/**
 * Creates a password input field.
 */
sablono.core.password_field5806 = (function sablono$core$password_field5806(var_args){
var G__5808 = arguments.length;
switch (G__5808) {
case 1:
return sablono.core.password_field5806.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field5806.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field5806.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.password_field5806.call(null,name__5713__auto__,null);
});

sablono.core.password_field5806.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.password_field5806.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field5806);

/**
 * Creates a range input field.
 */
sablono.core.range_field5809 = (function sablono$core$range_field5809(var_args){
var G__5811 = arguments.length;
switch (G__5811) {
case 1:
return sablono.core.range_field5809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field5809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field5809.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.range_field5809.call(null,name__5713__auto__,null);
});

sablono.core.range_field5809.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.range_field5809.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field5809);

/**
 * Creates a search input field.
 */
sablono.core.search_field5812 = (function sablono$core$search_field5812(var_args){
var G__5814 = arguments.length;
switch (G__5814) {
case 1:
return sablono.core.search_field5812.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field5812.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field5812.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.search_field5812.call(null,name__5713__auto__,null);
});

sablono.core.search_field5812.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.search_field5812.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field5812);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field5815 = (function sablono$core$tel_field5815(var_args){
var G__5817 = arguments.length;
switch (G__5817) {
case 1:
return sablono.core.tel_field5815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field5815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field5815.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.tel_field5815.call(null,name__5713__auto__,null);
});

sablono.core.tel_field5815.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.tel_field5815.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field5815);

/**
 * Creates a text input field.
 */
sablono.core.text_field5818 = (function sablono$core$text_field5818(var_args){
var G__5820 = arguments.length;
switch (G__5820) {
case 1:
return sablono.core.text_field5818.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field5818.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field5818.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.text_field5818.call(null,name__5713__auto__,null);
});

sablono.core.text_field5818.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.text_field5818.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field5818);

/**
 * Creates a time input field.
 */
sablono.core.time_field5821 = (function sablono$core$time_field5821(var_args){
var G__5823 = arguments.length;
switch (G__5823) {
case 1:
return sablono.core.time_field5821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field5821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field5821.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.time_field5821.call(null,name__5713__auto__,null);
});

sablono.core.time_field5821.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.time_field5821.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field5821);

/**
 * Creates a url input field.
 */
sablono.core.url_field5824 = (function sablono$core$url_field5824(var_args){
var G__5826 = arguments.length;
switch (G__5826) {
case 1:
return sablono.core.url_field5824.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field5824.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field5824.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.url_field5824.call(null,name__5713__auto__,null);
});

sablono.core.url_field5824.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.url_field5824.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field5824);

/**
 * Creates a week input field.
 */
sablono.core.week_field5827 = (function sablono$core$week_field5827(var_args){
var G__5829 = arguments.length;
switch (G__5829) {
case 1:
return sablono.core.week_field5827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field5827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field5827.cljs$core$IFn$_invoke$arity$1 = (function (name__5713__auto__){
return sablono.core.week_field5827.call(null,name__5713__auto__,null);
});

sablono.core.week_field5827.cljs$core$IFn$_invoke$arity$2 = (function (name__5713__auto__,value__5714__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5713__auto__,value__5714__auto__);
});

sablono.core.week_field5827.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field5827);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box5847 = (function sablono$core$check_box5847(var_args){
var G__5849 = arguments.length;
switch (G__5849) {
case 1:
return sablono.core.check_box5847.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box5847.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box5847.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box5847.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box5847.call(null,name,null);
});

sablono.core.check_box5847.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box5847.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box5847.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box5847.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box5847);
/**
 * Creates a radio button.
 */
sablono.core.radio_button5851 = (function sablono$core$radio_button5851(var_args){
var G__5853 = arguments.length;
switch (G__5853) {
case 1:
return sablono.core.radio_button5851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button5851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button5851.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button5851.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button5851.call(null,group,null);
});

sablono.core.radio_button5851.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button5851.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button5851.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button5851.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button5851);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options5855 = (function sablono$core$select_options5855(coll){
var iter__4324__auto__ = (function sablono$core$select_options5855_$_iter__5856(s__5857){
return (new cljs.core.LazySeq(null,(function (){
var s__5857__$1 = s__5857;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5857__$1);
if(temp__5457__auto__){
var s__5857__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5857__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5857__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5859 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5858 = (0);
while(true){
if((i__5858 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5858);
cljs.core.chunk_append.call(null,b__5859,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5860 = x;
var text = cljs.core.nth.call(null,vec__5860,(0),null);
var val = cljs.core.nth.call(null,vec__5860,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5860,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5855.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__5866 = (i__5858 + (1));
i__5858 = G__5866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5859),sablono$core$select_options5855_$_iter__5856.call(null,cljs.core.chunk_rest.call(null,s__5857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5859),null);
}
} else {
var x = cljs.core.first.call(null,s__5857__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5863 = x;
var text = cljs.core.nth.call(null,vec__5863,(0),null);
var val = cljs.core.nth.call(null,vec__5863,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5863,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5855.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options5855_$_iter__5856.call(null,cljs.core.rest.call(null,s__5857__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options5855);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down5867 = (function sablono$core$drop_down5867(var_args){
var G__5869 = arguments.length;
switch (G__5869) {
case 2:
return sablono.core.drop_down5867.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down5867.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down5867.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down5867.call(null,name,options,null);
});

sablono.core.drop_down5867.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down5867.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down5867);
/**
 * Creates a text area element.
 */
sablono.core.text_area5871 = (function sablono$core$text_area5871(var_args){
var G__5873 = arguments.length;
switch (G__5873) {
case 1:
return sablono.core.text_area5871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area5871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area5871.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area5871.call(null,name,null);
});

sablono.core.text_area5871.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area5871.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area5871);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label5875 = (function sablono$core$label5875(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label5875);
/**
 * Creates a submit button.
 */
sablono.core.submit_button5876 = (function sablono$core$submit_button5876(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button5876);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button5877 = (function sablono$core$reset_button5877(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button5877);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to5878 = (function sablono$core$form_to5878(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5885 = arguments.length;
var i__4532__auto___5886 = (0);
while(true){
if((i__4532__auto___5886 < len__4531__auto___5885)){
args__4534__auto__.push((arguments[i__4532__auto___5886]));

var G__5887 = (i__4532__auto___5886 + (1));
i__4532__auto___5886 = G__5887;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to5878.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to5878.cljs$core$IFn$_invoke$arity$variadic = (function (p__5881,body){
var vec__5882 = p__5881;
var method = cljs.core.nth.call(null,vec__5882,(0),null);
var action = cljs.core.nth.call(null,vec__5882,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to5878.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to5878.cljs$lang$applyTo = (function (seq5879){
var G__5880 = cljs.core.first.call(null,seq5879);
var seq5879__$1 = cljs.core.next.call(null,seq5879);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5880,seq5879__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to5878);
