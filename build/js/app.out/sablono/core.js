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
var G__5728__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__5725 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__5726 = cljs.core.seq.call(null,vec__5725);
var first__5727 = cljs.core.first.call(null,seq__5726);
var seq__5726__$1 = cljs.core.next.call(null,seq__5726);
var tag = first__5727;
var body = seq__5726__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__5728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5729__i = 0, G__5729__a = new Array(arguments.length -  0);
while (G__5729__i < G__5729__a.length) {G__5729__a[G__5729__i] = arguments[G__5729__i + 0]; ++G__5729__i;}
  args = new cljs.core.IndexedSeq(G__5729__a,0,null);
} 
return G__5728__delegate.call(this,args);};
G__5728.cljs$lang$maxFixedArity = 0;
G__5728.cljs$lang$applyTo = (function (arglist__5730){
var args = cljs.core.seq(arglist__5730);
return G__5728__delegate(args);
});
G__5728.cljs$core$IFn$_invoke$arity$variadic = G__5728__delegate;
return G__5728;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__5731(s__5732){
return (new cljs.core.LazySeq(null,(function (){
var s__5732__$1 = s__5732;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5732__$1);
if(temp__5457__auto__){
var s__5732__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5732__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5732__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5734 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5733 = (0);
while(true){
if((i__5733 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__5733);
cljs.core.chunk_append.call(null,b__5734,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__5735 = (i__5733 + (1));
i__5733 = G__5735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5734),sablono$core$update_arglists_$_iter__5731.call(null,cljs.core.chunk_rest.call(null,s__5732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5734),null);
}
} else {
var args = cljs.core.first.call(null,s__5732__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__5731.call(null,cljs.core.rest.call(null,s__5732__$2)));
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
var len__4531__auto___5741 = arguments.length;
var i__4532__auto___5742 = (0);
while(true){
if((i__4532__auto___5742 < len__4531__auto___5741)){
args__4534__auto__.push((arguments[i__4532__auto___5742]));

var G__5743 = (i__4532__auto___5742 + (1));
i__4532__auto___5742 = G__5743;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__5737(s__5738){
return (new cljs.core.LazySeq(null,(function (){
var s__5738__$1 = s__5738;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5738__$1);
if(temp__5457__auto__){
var s__5738__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5738__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5738__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5740 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5739 = (0);
while(true){
if((i__5739 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__5739);
cljs.core.chunk_append.call(null,b__5740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__5744 = (i__5739 + (1));
i__5739 = G__5744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5740),sablono$core$iter__5737.call(null,cljs.core.chunk_rest.call(null,s__5738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5740),null);
}
} else {
var style = cljs.core.first.call(null,s__5738__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__5737.call(null,cljs.core.rest.call(null,s__5738__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq5736){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5736));
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
sablono.core.link_to5745 = (function sablono$core$link_to5745(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5748 = arguments.length;
var i__4532__auto___5749 = (0);
while(true){
if((i__4532__auto___5749 < len__4531__auto___5748)){
args__4534__auto__.push((arguments[i__4532__auto___5749]));

var G__5750 = (i__4532__auto___5749 + (1));
i__4532__auto___5749 = G__5750;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to5745.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to5745.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to5745.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to5745.cljs$lang$applyTo = (function (seq5746){
var G__5747 = cljs.core.first.call(null,seq5746);
var seq5746__$1 = cljs.core.next.call(null,seq5746);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5747,seq5746__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to5745);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to5751 = (function sablono$core$mail_to5751(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5758 = arguments.length;
var i__4532__auto___5759 = (0);
while(true){
if((i__4532__auto___5759 < len__4531__auto___5758)){
args__4534__auto__.push((arguments[i__4532__auto___5759]));

var G__5760 = (i__4532__auto___5759 + (1));
i__4532__auto___5759 = G__5760;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to5751.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to5751.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__5754){
var vec__5755 = p__5754;
var content = cljs.core.nth.call(null,vec__5755,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to5751.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to5751.cljs$lang$applyTo = (function (seq5752){
var G__5753 = cljs.core.first.call(null,seq5752);
var seq5752__$1 = cljs.core.next.call(null,seq5752);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5753,seq5752__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to5751);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list5761 = (function sablono$core$unordered_list5761(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list5761_$_iter__5762(s__5763){
return (new cljs.core.LazySeq(null,(function (){
var s__5763__$1 = s__5763;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5763__$1);
if(temp__5457__auto__){
var s__5763__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5763__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5763__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5765 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5764 = (0);
while(true){
if((i__5764 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5764);
cljs.core.chunk_append.call(null,b__5765,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5766 = (i__5764 + (1));
i__5764 = G__5766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5765),sablono$core$unordered_list5761_$_iter__5762.call(null,cljs.core.chunk_rest.call(null,s__5763__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5765),null);
}
} else {
var x = cljs.core.first.call(null,s__5763__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list5761_$_iter__5762.call(null,cljs.core.rest.call(null,s__5763__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list5761);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list5767 = (function sablono$core$ordered_list5767(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list5767_$_iter__5768(s__5769){
return (new cljs.core.LazySeq(null,(function (){
var s__5769__$1 = s__5769;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5769__$1);
if(temp__5457__auto__){
var s__5769__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5769__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5769__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5771 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5770 = (0);
while(true){
if((i__5770 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5770);
cljs.core.chunk_append.call(null,b__5771,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5772 = (i__5770 + (1));
i__5770 = G__5772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5771),sablono$core$ordered_list5767_$_iter__5768.call(null,cljs.core.chunk_rest.call(null,s__5769__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5771),null);
}
} else {
var x = cljs.core.first.call(null,s__5769__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list5767_$_iter__5768.call(null,cljs.core.rest.call(null,s__5769__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list5767);
/**
 * Create an image element.
 */
sablono.core.image5773 = (function sablono$core$image5773(var_args){
var G__5775 = arguments.length;
switch (G__5775) {
case 1:
return sablono.core.image5773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image5773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image5773.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image5773.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image5773.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image5773);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__5777_SHARP_,p2__5778_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5777_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5778_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__5779_SHARP_,p2__5780_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5779_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5780_SHARP_)].join('');
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
sablono.core.color_field5781 = (function sablono$core$color_field5781(var_args){
var G__5783 = arguments.length;
switch (G__5783) {
case 1:
return sablono.core.color_field5781.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field5781.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field5781.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.color_field5781.call(null,name__5715__auto__,null);
});

sablono.core.color_field5781.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.color_field5781.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field5781);

/**
 * Creates a date input field.
 */
sablono.core.date_field5784 = (function sablono$core$date_field5784(var_args){
var G__5786 = arguments.length;
switch (G__5786) {
case 1:
return sablono.core.date_field5784.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field5784.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field5784.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.date_field5784.call(null,name__5715__auto__,null);
});

sablono.core.date_field5784.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.date_field5784.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field5784);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field5787 = (function sablono$core$datetime_field5787(var_args){
var G__5789 = arguments.length;
switch (G__5789) {
case 1:
return sablono.core.datetime_field5787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field5787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field5787.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.datetime_field5787.call(null,name__5715__auto__,null);
});

sablono.core.datetime_field5787.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.datetime_field5787.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field5787);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field5790 = (function sablono$core$datetime_local_field5790(var_args){
var G__5792 = arguments.length;
switch (G__5792) {
case 1:
return sablono.core.datetime_local_field5790.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field5790.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field5790.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.datetime_local_field5790.call(null,name__5715__auto__,null);
});

sablono.core.datetime_local_field5790.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.datetime_local_field5790.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field5790);

/**
 * Creates a email input field.
 */
sablono.core.email_field5793 = (function sablono$core$email_field5793(var_args){
var G__5795 = arguments.length;
switch (G__5795) {
case 1:
return sablono.core.email_field5793.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field5793.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field5793.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.email_field5793.call(null,name__5715__auto__,null);
});

sablono.core.email_field5793.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.email_field5793.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field5793);

/**
 * Creates a file input field.
 */
sablono.core.file_field5796 = (function sablono$core$file_field5796(var_args){
var G__5798 = arguments.length;
switch (G__5798) {
case 1:
return sablono.core.file_field5796.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field5796.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field5796.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.file_field5796.call(null,name__5715__auto__,null);
});

sablono.core.file_field5796.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.file_field5796.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field5796);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field5799 = (function sablono$core$hidden_field5799(var_args){
var G__5801 = arguments.length;
switch (G__5801) {
case 1:
return sablono.core.hidden_field5799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field5799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field5799.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.hidden_field5799.call(null,name__5715__auto__,null);
});

sablono.core.hidden_field5799.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.hidden_field5799.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field5799);

/**
 * Creates a month input field.
 */
sablono.core.month_field5802 = (function sablono$core$month_field5802(var_args){
var G__5804 = arguments.length;
switch (G__5804) {
case 1:
return sablono.core.month_field5802.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field5802.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field5802.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.month_field5802.call(null,name__5715__auto__,null);
});

sablono.core.month_field5802.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.month_field5802.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field5802);

/**
 * Creates a number input field.
 */
sablono.core.number_field5805 = (function sablono$core$number_field5805(var_args){
var G__5807 = arguments.length;
switch (G__5807) {
case 1:
return sablono.core.number_field5805.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field5805.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field5805.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.number_field5805.call(null,name__5715__auto__,null);
});

sablono.core.number_field5805.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.number_field5805.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field5805);

/**
 * Creates a password input field.
 */
sablono.core.password_field5808 = (function sablono$core$password_field5808(var_args){
var G__5810 = arguments.length;
switch (G__5810) {
case 1:
return sablono.core.password_field5808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field5808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field5808.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.password_field5808.call(null,name__5715__auto__,null);
});

sablono.core.password_field5808.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.password_field5808.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field5808);

/**
 * Creates a range input field.
 */
sablono.core.range_field5811 = (function sablono$core$range_field5811(var_args){
var G__5813 = arguments.length;
switch (G__5813) {
case 1:
return sablono.core.range_field5811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field5811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field5811.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.range_field5811.call(null,name__5715__auto__,null);
});

sablono.core.range_field5811.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.range_field5811.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field5811);

/**
 * Creates a search input field.
 */
sablono.core.search_field5814 = (function sablono$core$search_field5814(var_args){
var G__5816 = arguments.length;
switch (G__5816) {
case 1:
return sablono.core.search_field5814.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field5814.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field5814.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.search_field5814.call(null,name__5715__auto__,null);
});

sablono.core.search_field5814.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.search_field5814.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field5814);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field5817 = (function sablono$core$tel_field5817(var_args){
var G__5819 = arguments.length;
switch (G__5819) {
case 1:
return sablono.core.tel_field5817.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field5817.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field5817.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.tel_field5817.call(null,name__5715__auto__,null);
});

sablono.core.tel_field5817.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.tel_field5817.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field5817);

/**
 * Creates a text input field.
 */
sablono.core.text_field5820 = (function sablono$core$text_field5820(var_args){
var G__5822 = arguments.length;
switch (G__5822) {
case 1:
return sablono.core.text_field5820.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field5820.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field5820.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.text_field5820.call(null,name__5715__auto__,null);
});

sablono.core.text_field5820.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.text_field5820.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field5820);

/**
 * Creates a time input field.
 */
sablono.core.time_field5823 = (function sablono$core$time_field5823(var_args){
var G__5825 = arguments.length;
switch (G__5825) {
case 1:
return sablono.core.time_field5823.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field5823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field5823.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.time_field5823.call(null,name__5715__auto__,null);
});

sablono.core.time_field5823.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.time_field5823.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field5823);

/**
 * Creates a url input field.
 */
sablono.core.url_field5826 = (function sablono$core$url_field5826(var_args){
var G__5828 = arguments.length;
switch (G__5828) {
case 1:
return sablono.core.url_field5826.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field5826.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field5826.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.url_field5826.call(null,name__5715__auto__,null);
});

sablono.core.url_field5826.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.url_field5826.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field5826);

/**
 * Creates a week input field.
 */
sablono.core.week_field5829 = (function sablono$core$week_field5829(var_args){
var G__5831 = arguments.length;
switch (G__5831) {
case 1:
return sablono.core.week_field5829.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field5829.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field5829.cljs$core$IFn$_invoke$arity$1 = (function (name__5715__auto__){
return sablono.core.week_field5829.call(null,name__5715__auto__,null);
});

sablono.core.week_field5829.cljs$core$IFn$_invoke$arity$2 = (function (name__5715__auto__,value__5716__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5715__auto__,value__5716__auto__);
});

sablono.core.week_field5829.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field5829);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box5849 = (function sablono$core$check_box5849(var_args){
var G__5851 = arguments.length;
switch (G__5851) {
case 1:
return sablono.core.check_box5849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box5849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box5849.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box5849.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box5849.call(null,name,null);
});

sablono.core.check_box5849.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box5849.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box5849.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box5849.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box5849);
/**
 * Creates a radio button.
 */
sablono.core.radio_button5853 = (function sablono$core$radio_button5853(var_args){
var G__5855 = arguments.length;
switch (G__5855) {
case 1:
return sablono.core.radio_button5853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button5853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button5853.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button5853.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button5853.call(null,group,null);
});

sablono.core.radio_button5853.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button5853.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button5853.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button5853.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button5853);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options5857 = (function sablono$core$select_options5857(coll){
var iter__4324__auto__ = (function sablono$core$select_options5857_$_iter__5858(s__5859){
return (new cljs.core.LazySeq(null,(function (){
var s__5859__$1 = s__5859;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5859__$1);
if(temp__5457__auto__){
var s__5859__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5859__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5859__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5861 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5860 = (0);
while(true){
if((i__5860 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5860);
cljs.core.chunk_append.call(null,b__5861,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5862 = x;
var text = cljs.core.nth.call(null,vec__5862,(0),null);
var val = cljs.core.nth.call(null,vec__5862,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5862,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5857.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__5868 = (i__5860 + (1));
i__5860 = G__5868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5861),sablono$core$select_options5857_$_iter__5858.call(null,cljs.core.chunk_rest.call(null,s__5859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5861),null);
}
} else {
var x = cljs.core.first.call(null,s__5859__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5865 = x;
var text = cljs.core.nth.call(null,vec__5865,(0),null);
var val = cljs.core.nth.call(null,vec__5865,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5865,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5857.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options5857_$_iter__5858.call(null,cljs.core.rest.call(null,s__5859__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options5857);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down5869 = (function sablono$core$drop_down5869(var_args){
var G__5871 = arguments.length;
switch (G__5871) {
case 2:
return sablono.core.drop_down5869.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down5869.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down5869.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down5869.call(null,name,options,null);
});

sablono.core.drop_down5869.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down5869.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down5869);
/**
 * Creates a text area element.
 */
sablono.core.text_area5873 = (function sablono$core$text_area5873(var_args){
var G__5875 = arguments.length;
switch (G__5875) {
case 1:
return sablono.core.text_area5873.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area5873.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area5873.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area5873.call(null,name,null);
});

sablono.core.text_area5873.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area5873.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area5873);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label5877 = (function sablono$core$label5877(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label5877);
/**
 * Creates a submit button.
 */
sablono.core.submit_button5878 = (function sablono$core$submit_button5878(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button5878);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button5879 = (function sablono$core$reset_button5879(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button5879);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to5880 = (function sablono$core$form_to5880(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5887 = arguments.length;
var i__4532__auto___5888 = (0);
while(true){
if((i__4532__auto___5888 < len__4531__auto___5887)){
args__4534__auto__.push((arguments[i__4532__auto___5888]));

var G__5889 = (i__4532__auto___5888 + (1));
i__4532__auto___5888 = G__5889;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to5880.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to5880.cljs$core$IFn$_invoke$arity$variadic = (function (p__5883,body){
var vec__5884 = p__5883;
var method = cljs.core.nth.call(null,vec__5884,(0),null);
var action = cljs.core.nth.call(null,vec__5884,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to5880.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to5880.cljs$lang$applyTo = (function (seq5881){
var G__5882 = cljs.core.first.call(null,seq5881);
var seq5881__$1 = cljs.core.next.call(null,seq5881);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5882,seq5881__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to5880);
