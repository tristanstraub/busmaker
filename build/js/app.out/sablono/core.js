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
var G__6049__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__6046 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__6047 = cljs.core.seq.call(null,vec__6046);
var first__6048 = cljs.core.first.call(null,seq__6047);
var seq__6047__$1 = cljs.core.next.call(null,seq__6047);
var tag = first__6048;
var body = seq__6047__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__6049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6050__i = 0, G__6050__a = new Array(arguments.length -  0);
while (G__6050__i < G__6050__a.length) {G__6050__a[G__6050__i] = arguments[G__6050__i + 0]; ++G__6050__i;}
  args = new cljs.core.IndexedSeq(G__6050__a,0,null);
} 
return G__6049__delegate.call(this,args);};
G__6049.cljs$lang$maxFixedArity = 0;
G__6049.cljs$lang$applyTo = (function (arglist__6051){
var args = cljs.core.seq(arglist__6051);
return G__6049__delegate(args);
});
G__6049.cljs$core$IFn$_invoke$arity$variadic = G__6049__delegate;
return G__6049;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__6052(s__6053){
return (new cljs.core.LazySeq(null,(function (){
var s__6053__$1 = s__6053;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6053__$1);
if(temp__5457__auto__){
var s__6053__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6053__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6053__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6055 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6054 = (0);
while(true){
if((i__6054 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__6054);
cljs.core.chunk_append.call(null,b__6055,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__6056 = (i__6054 + (1));
i__6054 = G__6056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6055),sablono$core$update_arglists_$_iter__6052.call(null,cljs.core.chunk_rest.call(null,s__6053__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6055),null);
}
} else {
var args = cljs.core.first.call(null,s__6053__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__6052.call(null,cljs.core.rest.call(null,s__6053__$2)));
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
var len__4531__auto___6062 = arguments.length;
var i__4532__auto___6063 = (0);
while(true){
if((i__4532__auto___6063 < len__4531__auto___6062)){
args__4534__auto__.push((arguments[i__4532__auto___6063]));

var G__6064 = (i__4532__auto___6063 + (1));
i__4532__auto___6063 = G__6064;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__6058(s__6059){
return (new cljs.core.LazySeq(null,(function (){
var s__6059__$1 = s__6059;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6059__$1);
if(temp__5457__auto__){
var s__6059__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6059__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6059__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6061 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6060 = (0);
while(true){
if((i__6060 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__6060);
cljs.core.chunk_append.call(null,b__6061,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__6065 = (i__6060 + (1));
i__6060 = G__6065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6061),sablono$core$iter__6058.call(null,cljs.core.chunk_rest.call(null,s__6059__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6061),null);
}
} else {
var style = cljs.core.first.call(null,s__6059__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__6058.call(null,cljs.core.rest.call(null,s__6059__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq6057){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6057));
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
sablono.core.link_to6066 = (function sablono$core$link_to6066(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6069 = arguments.length;
var i__4532__auto___6070 = (0);
while(true){
if((i__4532__auto___6070 < len__4531__auto___6069)){
args__4534__auto__.push((arguments[i__4532__auto___6070]));

var G__6071 = (i__4532__auto___6070 + (1));
i__4532__auto___6070 = G__6071;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to6066.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to6066.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to6066.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to6066.cljs$lang$applyTo = (function (seq6067){
var G__6068 = cljs.core.first.call(null,seq6067);
var seq6067__$1 = cljs.core.next.call(null,seq6067);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6068,seq6067__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to6066);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to6072 = (function sablono$core$mail_to6072(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6079 = arguments.length;
var i__4532__auto___6080 = (0);
while(true){
if((i__4532__auto___6080 < len__4531__auto___6079)){
args__4534__auto__.push((arguments[i__4532__auto___6080]));

var G__6081 = (i__4532__auto___6080 + (1));
i__4532__auto___6080 = G__6081;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to6072.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to6072.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__6075){
var vec__6076 = p__6075;
var content = cljs.core.nth.call(null,vec__6076,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to6072.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to6072.cljs$lang$applyTo = (function (seq6073){
var G__6074 = cljs.core.first.call(null,seq6073);
var seq6073__$1 = cljs.core.next.call(null,seq6073);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6074,seq6073__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to6072);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list6082 = (function sablono$core$unordered_list6082(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list6082_$_iter__6083(s__6084){
return (new cljs.core.LazySeq(null,(function (){
var s__6084__$1 = s__6084;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6084__$1);
if(temp__5457__auto__){
var s__6084__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6084__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6084__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6086 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6085 = (0);
while(true){
if((i__6085 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__6085);
cljs.core.chunk_append.call(null,b__6086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6087 = (i__6085 + (1));
i__6085 = G__6087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6086),sablono$core$unordered_list6082_$_iter__6083.call(null,cljs.core.chunk_rest.call(null,s__6084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6086),null);
}
} else {
var x = cljs.core.first.call(null,s__6084__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list6082_$_iter__6083.call(null,cljs.core.rest.call(null,s__6084__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list6082);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list6088 = (function sablono$core$ordered_list6088(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list6088_$_iter__6089(s__6090){
return (new cljs.core.LazySeq(null,(function (){
var s__6090__$1 = s__6090;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6090__$1);
if(temp__5457__auto__){
var s__6090__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6090__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6090__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6092 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6091 = (0);
while(true){
if((i__6091 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__6091);
cljs.core.chunk_append.call(null,b__6092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6093 = (i__6091 + (1));
i__6091 = G__6093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6092),sablono$core$ordered_list6088_$_iter__6089.call(null,cljs.core.chunk_rest.call(null,s__6090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6092),null);
}
} else {
var x = cljs.core.first.call(null,s__6090__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list6088_$_iter__6089.call(null,cljs.core.rest.call(null,s__6090__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list6088);
/**
 * Create an image element.
 */
sablono.core.image6094 = (function sablono$core$image6094(var_args){
var G__6096 = arguments.length;
switch (G__6096) {
case 1:
return sablono.core.image6094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image6094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image6094.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image6094.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image6094.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image6094);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__6098_SHARP_,p2__6099_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6098_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6099_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__6100_SHARP_,p2__6101_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6100_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6101_SHARP_)].join('');
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
sablono.core.color_field6102 = (function sablono$core$color_field6102(var_args){
var G__6104 = arguments.length;
switch (G__6104) {
case 1:
return sablono.core.color_field6102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field6102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field6102.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.color_field6102.call(null,name__6036__auto__,null);
});

sablono.core.color_field6102.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.color_field6102.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field6102);

/**
 * Creates a date input field.
 */
sablono.core.date_field6105 = (function sablono$core$date_field6105(var_args){
var G__6107 = arguments.length;
switch (G__6107) {
case 1:
return sablono.core.date_field6105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field6105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field6105.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.date_field6105.call(null,name__6036__auto__,null);
});

sablono.core.date_field6105.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.date_field6105.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field6105);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field6108 = (function sablono$core$datetime_field6108(var_args){
var G__6110 = arguments.length;
switch (G__6110) {
case 1:
return sablono.core.datetime_field6108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field6108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field6108.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.datetime_field6108.call(null,name__6036__auto__,null);
});

sablono.core.datetime_field6108.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.datetime_field6108.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field6108);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field6111 = (function sablono$core$datetime_local_field6111(var_args){
var G__6113 = arguments.length;
switch (G__6113) {
case 1:
return sablono.core.datetime_local_field6111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field6111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field6111.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.datetime_local_field6111.call(null,name__6036__auto__,null);
});

sablono.core.datetime_local_field6111.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.datetime_local_field6111.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field6111);

/**
 * Creates a email input field.
 */
sablono.core.email_field6114 = (function sablono$core$email_field6114(var_args){
var G__6116 = arguments.length;
switch (G__6116) {
case 1:
return sablono.core.email_field6114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field6114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field6114.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.email_field6114.call(null,name__6036__auto__,null);
});

sablono.core.email_field6114.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.email_field6114.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field6114);

/**
 * Creates a file input field.
 */
sablono.core.file_field6117 = (function sablono$core$file_field6117(var_args){
var G__6119 = arguments.length;
switch (G__6119) {
case 1:
return sablono.core.file_field6117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field6117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field6117.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.file_field6117.call(null,name__6036__auto__,null);
});

sablono.core.file_field6117.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.file_field6117.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field6117);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field6120 = (function sablono$core$hidden_field6120(var_args){
var G__6122 = arguments.length;
switch (G__6122) {
case 1:
return sablono.core.hidden_field6120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field6120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field6120.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.hidden_field6120.call(null,name__6036__auto__,null);
});

sablono.core.hidden_field6120.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.hidden_field6120.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field6120);

/**
 * Creates a month input field.
 */
sablono.core.month_field6123 = (function sablono$core$month_field6123(var_args){
var G__6125 = arguments.length;
switch (G__6125) {
case 1:
return sablono.core.month_field6123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field6123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field6123.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.month_field6123.call(null,name__6036__auto__,null);
});

sablono.core.month_field6123.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.month_field6123.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field6123);

/**
 * Creates a number input field.
 */
sablono.core.number_field6126 = (function sablono$core$number_field6126(var_args){
var G__6128 = arguments.length;
switch (G__6128) {
case 1:
return sablono.core.number_field6126.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field6126.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field6126.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.number_field6126.call(null,name__6036__auto__,null);
});

sablono.core.number_field6126.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.number_field6126.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field6126);

/**
 * Creates a password input field.
 */
sablono.core.password_field6129 = (function sablono$core$password_field6129(var_args){
var G__6131 = arguments.length;
switch (G__6131) {
case 1:
return sablono.core.password_field6129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field6129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field6129.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.password_field6129.call(null,name__6036__auto__,null);
});

sablono.core.password_field6129.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.password_field6129.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field6129);

/**
 * Creates a range input field.
 */
sablono.core.range_field6132 = (function sablono$core$range_field6132(var_args){
var G__6134 = arguments.length;
switch (G__6134) {
case 1:
return sablono.core.range_field6132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field6132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field6132.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.range_field6132.call(null,name__6036__auto__,null);
});

sablono.core.range_field6132.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.range_field6132.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field6132);

/**
 * Creates a search input field.
 */
sablono.core.search_field6135 = (function sablono$core$search_field6135(var_args){
var G__6137 = arguments.length;
switch (G__6137) {
case 1:
return sablono.core.search_field6135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field6135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field6135.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.search_field6135.call(null,name__6036__auto__,null);
});

sablono.core.search_field6135.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.search_field6135.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field6135);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field6138 = (function sablono$core$tel_field6138(var_args){
var G__6140 = arguments.length;
switch (G__6140) {
case 1:
return sablono.core.tel_field6138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field6138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field6138.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.tel_field6138.call(null,name__6036__auto__,null);
});

sablono.core.tel_field6138.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.tel_field6138.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field6138);

/**
 * Creates a text input field.
 */
sablono.core.text_field6141 = (function sablono$core$text_field6141(var_args){
var G__6143 = arguments.length;
switch (G__6143) {
case 1:
return sablono.core.text_field6141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field6141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field6141.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.text_field6141.call(null,name__6036__auto__,null);
});

sablono.core.text_field6141.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.text_field6141.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field6141);

/**
 * Creates a time input field.
 */
sablono.core.time_field6144 = (function sablono$core$time_field6144(var_args){
var G__6146 = arguments.length;
switch (G__6146) {
case 1:
return sablono.core.time_field6144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field6144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field6144.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.time_field6144.call(null,name__6036__auto__,null);
});

sablono.core.time_field6144.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.time_field6144.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field6144);

/**
 * Creates a url input field.
 */
sablono.core.url_field6147 = (function sablono$core$url_field6147(var_args){
var G__6149 = arguments.length;
switch (G__6149) {
case 1:
return sablono.core.url_field6147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field6147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field6147.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.url_field6147.call(null,name__6036__auto__,null);
});

sablono.core.url_field6147.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.url_field6147.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field6147);

/**
 * Creates a week input field.
 */
sablono.core.week_field6150 = (function sablono$core$week_field6150(var_args){
var G__6152 = arguments.length;
switch (G__6152) {
case 1:
return sablono.core.week_field6150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field6150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field6150.cljs$core$IFn$_invoke$arity$1 = (function (name__6036__auto__){
return sablono.core.week_field6150.call(null,name__6036__auto__,null);
});

sablono.core.week_field6150.cljs$core$IFn$_invoke$arity$2 = (function (name__6036__auto__,value__6037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6036__auto__,value__6037__auto__);
});

sablono.core.week_field6150.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field6150);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box6170 = (function sablono$core$check_box6170(var_args){
var G__6172 = arguments.length;
switch (G__6172) {
case 1:
return sablono.core.check_box6170.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box6170.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box6170.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box6170.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box6170.call(null,name,null);
});

sablono.core.check_box6170.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box6170.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box6170.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box6170.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box6170);
/**
 * Creates a radio button.
 */
sablono.core.radio_button6174 = (function sablono$core$radio_button6174(var_args){
var G__6176 = arguments.length;
switch (G__6176) {
case 1:
return sablono.core.radio_button6174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button6174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button6174.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button6174.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button6174.call(null,group,null);
});

sablono.core.radio_button6174.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button6174.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button6174.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button6174.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button6174);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options6178 = (function sablono$core$select_options6178(coll){
var iter__4324__auto__ = (function sablono$core$select_options6178_$_iter__6179(s__6180){
return (new cljs.core.LazySeq(null,(function (){
var s__6180__$1 = s__6180;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6180__$1);
if(temp__5457__auto__){
var s__6180__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6180__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6180__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6182 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6181 = (0);
while(true){
if((i__6181 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__6181);
cljs.core.chunk_append.call(null,b__6182,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6183 = x;
var text = cljs.core.nth.call(null,vec__6183,(0),null);
var val = cljs.core.nth.call(null,vec__6183,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6183,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options6178.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__6189 = (i__6181 + (1));
i__6181 = G__6189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6182),sablono$core$select_options6178_$_iter__6179.call(null,cljs.core.chunk_rest.call(null,s__6180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6182),null);
}
} else {
var x = cljs.core.first.call(null,s__6180__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6186 = x;
var text = cljs.core.nth.call(null,vec__6186,(0),null);
var val = cljs.core.nth.call(null,vec__6186,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6186,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options6178.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options6178_$_iter__6179.call(null,cljs.core.rest.call(null,s__6180__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options6178);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down6190 = (function sablono$core$drop_down6190(var_args){
var G__6192 = arguments.length;
switch (G__6192) {
case 2:
return sablono.core.drop_down6190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down6190.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down6190.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down6190.call(null,name,options,null);
});

sablono.core.drop_down6190.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down6190.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down6190);
/**
 * Creates a text area element.
 */
sablono.core.text_area6194 = (function sablono$core$text_area6194(var_args){
var G__6196 = arguments.length;
switch (G__6196) {
case 1:
return sablono.core.text_area6194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area6194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area6194.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area6194.call(null,name,null);
});

sablono.core.text_area6194.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area6194.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area6194);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label6198 = (function sablono$core$label6198(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label6198);
/**
 * Creates a submit button.
 */
sablono.core.submit_button6199 = (function sablono$core$submit_button6199(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button6199);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button6200 = (function sablono$core$reset_button6200(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button6200);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to6201 = (function sablono$core$form_to6201(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6208 = arguments.length;
var i__4532__auto___6209 = (0);
while(true){
if((i__4532__auto___6209 < len__4531__auto___6208)){
args__4534__auto__.push((arguments[i__4532__auto___6209]));

var G__6210 = (i__4532__auto___6209 + (1));
i__4532__auto___6209 = G__6210;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to6201.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to6201.cljs$core$IFn$_invoke$arity$variadic = (function (p__6204,body){
var vec__6205 = p__6204;
var method = cljs.core.nth.call(null,vec__6205,(0),null);
var action = cljs.core.nth.call(null,vec__6205,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to6201.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to6201.cljs$lang$applyTo = (function (seq6202){
var G__6203 = cljs.core.first.call(null,seq6202);
var seq6202__$1 = cljs.core.next.call(null,seq6202);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6203,seq6202__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to6201);
