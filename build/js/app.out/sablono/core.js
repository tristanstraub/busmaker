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
var G__6035__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__6032 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__6033 = cljs.core.seq.call(null,vec__6032);
var first__6034 = cljs.core.first.call(null,seq__6033);
var seq__6033__$1 = cljs.core.next.call(null,seq__6033);
var tag = first__6034;
var body = seq__6033__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__6035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6036__i = 0, G__6036__a = new Array(arguments.length -  0);
while (G__6036__i < G__6036__a.length) {G__6036__a[G__6036__i] = arguments[G__6036__i + 0]; ++G__6036__i;}
  args = new cljs.core.IndexedSeq(G__6036__a,0,null);
} 
return G__6035__delegate.call(this,args);};
G__6035.cljs$lang$maxFixedArity = 0;
G__6035.cljs$lang$applyTo = (function (arglist__6037){
var args = cljs.core.seq(arglist__6037);
return G__6035__delegate(args);
});
G__6035.cljs$core$IFn$_invoke$arity$variadic = G__6035__delegate;
return G__6035;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__6038(s__6039){
return (new cljs.core.LazySeq(null,(function (){
var s__6039__$1 = s__6039;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6039__$1);
if(temp__5457__auto__){
var s__6039__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6039__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6039__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6041 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6040 = (0);
while(true){
if((i__6040 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__6040);
cljs.core.chunk_append.call(null,b__6041,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__6042 = (i__6040 + (1));
i__6040 = G__6042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6041),sablono$core$update_arglists_$_iter__6038.call(null,cljs.core.chunk_rest.call(null,s__6039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6041),null);
}
} else {
var args = cljs.core.first.call(null,s__6039__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__6038.call(null,cljs.core.rest.call(null,s__6039__$2)));
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
var len__4531__auto___6048 = arguments.length;
var i__4532__auto___6049 = (0);
while(true){
if((i__4532__auto___6049 < len__4531__auto___6048)){
args__4534__auto__.push((arguments[i__4532__auto___6049]));

var G__6050 = (i__4532__auto___6049 + (1));
i__4532__auto___6049 = G__6050;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__6044(s__6045){
return (new cljs.core.LazySeq(null,(function (){
var s__6045__$1 = s__6045;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6045__$1);
if(temp__5457__auto__){
var s__6045__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6045__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6045__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6047 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6046 = (0);
while(true){
if((i__6046 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__6046);
cljs.core.chunk_append.call(null,b__6047,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__6051 = (i__6046 + (1));
i__6046 = G__6051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6047),sablono$core$iter__6044.call(null,cljs.core.chunk_rest.call(null,s__6045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6047),null);
}
} else {
var style = cljs.core.first.call(null,s__6045__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__6044.call(null,cljs.core.rest.call(null,s__6045__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq6043){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6043));
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
sablono.core.link_to6052 = (function sablono$core$link_to6052(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6055 = arguments.length;
var i__4532__auto___6056 = (0);
while(true){
if((i__4532__auto___6056 < len__4531__auto___6055)){
args__4534__auto__.push((arguments[i__4532__auto___6056]));

var G__6057 = (i__4532__auto___6056 + (1));
i__4532__auto___6056 = G__6057;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to6052.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to6052.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to6052.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to6052.cljs$lang$applyTo = (function (seq6053){
var G__6054 = cljs.core.first.call(null,seq6053);
var seq6053__$1 = cljs.core.next.call(null,seq6053);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6054,seq6053__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to6052);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to6058 = (function sablono$core$mail_to6058(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6065 = arguments.length;
var i__4532__auto___6066 = (0);
while(true){
if((i__4532__auto___6066 < len__4531__auto___6065)){
args__4534__auto__.push((arguments[i__4532__auto___6066]));

var G__6067 = (i__4532__auto___6066 + (1));
i__4532__auto___6066 = G__6067;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to6058.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to6058.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__6061){
var vec__6062 = p__6061;
var content = cljs.core.nth.call(null,vec__6062,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to6058.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to6058.cljs$lang$applyTo = (function (seq6059){
var G__6060 = cljs.core.first.call(null,seq6059);
var seq6059__$1 = cljs.core.next.call(null,seq6059);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6060,seq6059__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to6058);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list6068 = (function sablono$core$unordered_list6068(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list6068_$_iter__6069(s__6070){
return (new cljs.core.LazySeq(null,(function (){
var s__6070__$1 = s__6070;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6070__$1);
if(temp__5457__auto__){
var s__6070__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6070__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6070__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6072 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6071 = (0);
while(true){
if((i__6071 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__6071);
cljs.core.chunk_append.call(null,b__6072,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6073 = (i__6071 + (1));
i__6071 = G__6073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6072),sablono$core$unordered_list6068_$_iter__6069.call(null,cljs.core.chunk_rest.call(null,s__6070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6072),null);
}
} else {
var x = cljs.core.first.call(null,s__6070__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list6068_$_iter__6069.call(null,cljs.core.rest.call(null,s__6070__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list6068);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list6074 = (function sablono$core$ordered_list6074(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list6074_$_iter__6075(s__6076){
return (new cljs.core.LazySeq(null,(function (){
var s__6076__$1 = s__6076;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6076__$1);
if(temp__5457__auto__){
var s__6076__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6076__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6076__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6078 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6077 = (0);
while(true){
if((i__6077 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__6077);
cljs.core.chunk_append.call(null,b__6078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6079 = (i__6077 + (1));
i__6077 = G__6079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6078),sablono$core$ordered_list6074_$_iter__6075.call(null,cljs.core.chunk_rest.call(null,s__6076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6078),null);
}
} else {
var x = cljs.core.first.call(null,s__6076__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list6074_$_iter__6075.call(null,cljs.core.rest.call(null,s__6076__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list6074);
/**
 * Create an image element.
 */
sablono.core.image6080 = (function sablono$core$image6080(var_args){
var G__6082 = arguments.length;
switch (G__6082) {
case 1:
return sablono.core.image6080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image6080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image6080.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image6080.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image6080.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image6080);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__6084_SHARP_,p2__6085_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6084_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6085_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__6086_SHARP_,p2__6087_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6086_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6087_SHARP_)].join('');
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
sablono.core.color_field6088 = (function sablono$core$color_field6088(var_args){
var G__6090 = arguments.length;
switch (G__6090) {
case 1:
return sablono.core.color_field6088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field6088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field6088.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.color_field6088.call(null,name__6022__auto__,null);
});

sablono.core.color_field6088.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.color_field6088.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field6088);

/**
 * Creates a date input field.
 */
sablono.core.date_field6091 = (function sablono$core$date_field6091(var_args){
var G__6093 = arguments.length;
switch (G__6093) {
case 1:
return sablono.core.date_field6091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field6091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field6091.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.date_field6091.call(null,name__6022__auto__,null);
});

sablono.core.date_field6091.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.date_field6091.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field6091);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field6094 = (function sablono$core$datetime_field6094(var_args){
var G__6096 = arguments.length;
switch (G__6096) {
case 1:
return sablono.core.datetime_field6094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field6094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field6094.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.datetime_field6094.call(null,name__6022__auto__,null);
});

sablono.core.datetime_field6094.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.datetime_field6094.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field6094);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field6097 = (function sablono$core$datetime_local_field6097(var_args){
var G__6099 = arguments.length;
switch (G__6099) {
case 1:
return sablono.core.datetime_local_field6097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field6097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field6097.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.datetime_local_field6097.call(null,name__6022__auto__,null);
});

sablono.core.datetime_local_field6097.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.datetime_local_field6097.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field6097);

/**
 * Creates a email input field.
 */
sablono.core.email_field6100 = (function sablono$core$email_field6100(var_args){
var G__6102 = arguments.length;
switch (G__6102) {
case 1:
return sablono.core.email_field6100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field6100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field6100.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.email_field6100.call(null,name__6022__auto__,null);
});

sablono.core.email_field6100.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.email_field6100.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field6100);

/**
 * Creates a file input field.
 */
sablono.core.file_field6103 = (function sablono$core$file_field6103(var_args){
var G__6105 = arguments.length;
switch (G__6105) {
case 1:
return sablono.core.file_field6103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field6103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field6103.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.file_field6103.call(null,name__6022__auto__,null);
});

sablono.core.file_field6103.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.file_field6103.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field6103);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field6106 = (function sablono$core$hidden_field6106(var_args){
var G__6108 = arguments.length;
switch (G__6108) {
case 1:
return sablono.core.hidden_field6106.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field6106.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field6106.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.hidden_field6106.call(null,name__6022__auto__,null);
});

sablono.core.hidden_field6106.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.hidden_field6106.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field6106);

/**
 * Creates a month input field.
 */
sablono.core.month_field6109 = (function sablono$core$month_field6109(var_args){
var G__6111 = arguments.length;
switch (G__6111) {
case 1:
return sablono.core.month_field6109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field6109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field6109.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.month_field6109.call(null,name__6022__auto__,null);
});

sablono.core.month_field6109.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.month_field6109.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field6109);

/**
 * Creates a number input field.
 */
sablono.core.number_field6112 = (function sablono$core$number_field6112(var_args){
var G__6114 = arguments.length;
switch (G__6114) {
case 1:
return sablono.core.number_field6112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field6112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field6112.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.number_field6112.call(null,name__6022__auto__,null);
});

sablono.core.number_field6112.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.number_field6112.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field6112);

/**
 * Creates a password input field.
 */
sablono.core.password_field6115 = (function sablono$core$password_field6115(var_args){
var G__6117 = arguments.length;
switch (G__6117) {
case 1:
return sablono.core.password_field6115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field6115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field6115.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.password_field6115.call(null,name__6022__auto__,null);
});

sablono.core.password_field6115.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.password_field6115.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field6115);

/**
 * Creates a range input field.
 */
sablono.core.range_field6118 = (function sablono$core$range_field6118(var_args){
var G__6120 = arguments.length;
switch (G__6120) {
case 1:
return sablono.core.range_field6118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field6118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field6118.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.range_field6118.call(null,name__6022__auto__,null);
});

sablono.core.range_field6118.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.range_field6118.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field6118);

/**
 * Creates a search input field.
 */
sablono.core.search_field6121 = (function sablono$core$search_field6121(var_args){
var G__6123 = arguments.length;
switch (G__6123) {
case 1:
return sablono.core.search_field6121.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field6121.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field6121.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.search_field6121.call(null,name__6022__auto__,null);
});

sablono.core.search_field6121.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.search_field6121.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field6121);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field6124 = (function sablono$core$tel_field6124(var_args){
var G__6126 = arguments.length;
switch (G__6126) {
case 1:
return sablono.core.tel_field6124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field6124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field6124.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.tel_field6124.call(null,name__6022__auto__,null);
});

sablono.core.tel_field6124.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.tel_field6124.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field6124);

/**
 * Creates a text input field.
 */
sablono.core.text_field6127 = (function sablono$core$text_field6127(var_args){
var G__6129 = arguments.length;
switch (G__6129) {
case 1:
return sablono.core.text_field6127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field6127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field6127.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.text_field6127.call(null,name__6022__auto__,null);
});

sablono.core.text_field6127.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.text_field6127.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field6127);

/**
 * Creates a time input field.
 */
sablono.core.time_field6130 = (function sablono$core$time_field6130(var_args){
var G__6132 = arguments.length;
switch (G__6132) {
case 1:
return sablono.core.time_field6130.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field6130.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field6130.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.time_field6130.call(null,name__6022__auto__,null);
});

sablono.core.time_field6130.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.time_field6130.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field6130);

/**
 * Creates a url input field.
 */
sablono.core.url_field6133 = (function sablono$core$url_field6133(var_args){
var G__6135 = arguments.length;
switch (G__6135) {
case 1:
return sablono.core.url_field6133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field6133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field6133.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.url_field6133.call(null,name__6022__auto__,null);
});

sablono.core.url_field6133.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.url_field6133.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field6133);

/**
 * Creates a week input field.
 */
sablono.core.week_field6136 = (function sablono$core$week_field6136(var_args){
var G__6138 = arguments.length;
switch (G__6138) {
case 1:
return sablono.core.week_field6136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field6136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field6136.cljs$core$IFn$_invoke$arity$1 = (function (name__6022__auto__){
return sablono.core.week_field6136.call(null,name__6022__auto__,null);
});

sablono.core.week_field6136.cljs$core$IFn$_invoke$arity$2 = (function (name__6022__auto__,value__6023__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6022__auto__,value__6023__auto__);
});

sablono.core.week_field6136.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field6136);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box6156 = (function sablono$core$check_box6156(var_args){
var G__6158 = arguments.length;
switch (G__6158) {
case 1:
return sablono.core.check_box6156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box6156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box6156.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box6156.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box6156.call(null,name,null);
});

sablono.core.check_box6156.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box6156.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box6156.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box6156.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box6156);
/**
 * Creates a radio button.
 */
sablono.core.radio_button6160 = (function sablono$core$radio_button6160(var_args){
var G__6162 = arguments.length;
switch (G__6162) {
case 1:
return sablono.core.radio_button6160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button6160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button6160.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button6160.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button6160.call(null,group,null);
});

sablono.core.radio_button6160.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button6160.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button6160.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button6160.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button6160);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options6164 = (function sablono$core$select_options6164(coll){
var iter__4324__auto__ = (function sablono$core$select_options6164_$_iter__6165(s__6166){
return (new cljs.core.LazySeq(null,(function (){
var s__6166__$1 = s__6166;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6166__$1);
if(temp__5457__auto__){
var s__6166__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6166__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__6166__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__6168 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__6167 = (0);
while(true){
if((i__6167 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__6167);
cljs.core.chunk_append.call(null,b__6168,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6169 = x;
var text = cljs.core.nth.call(null,vec__6169,(0),null);
var val = cljs.core.nth.call(null,vec__6169,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6169,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options6164.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__6175 = (i__6167 + (1));
i__6167 = G__6175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6168),sablono$core$select_options6164_$_iter__6165.call(null,cljs.core.chunk_rest.call(null,s__6166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6168),null);
}
} else {
var x = cljs.core.first.call(null,s__6166__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6172 = x;
var text = cljs.core.nth.call(null,vec__6172,(0),null);
var val = cljs.core.nth.call(null,vec__6172,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6172,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options6164.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options6164_$_iter__6165.call(null,cljs.core.rest.call(null,s__6166__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options6164);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down6176 = (function sablono$core$drop_down6176(var_args){
var G__6178 = arguments.length;
switch (G__6178) {
case 2:
return sablono.core.drop_down6176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down6176.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down6176.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down6176.call(null,name,options,null);
});

sablono.core.drop_down6176.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down6176.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down6176);
/**
 * Creates a text area element.
 */
sablono.core.text_area6180 = (function sablono$core$text_area6180(var_args){
var G__6182 = arguments.length;
switch (G__6182) {
case 1:
return sablono.core.text_area6180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area6180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area6180.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area6180.call(null,name,null);
});

sablono.core.text_area6180.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area6180.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area6180);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label6184 = (function sablono$core$label6184(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label6184);
/**
 * Creates a submit button.
 */
sablono.core.submit_button6185 = (function sablono$core$submit_button6185(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button6185);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button6186 = (function sablono$core$reset_button6186(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button6186);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to6187 = (function sablono$core$form_to6187(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6194 = arguments.length;
var i__4532__auto___6195 = (0);
while(true){
if((i__4532__auto___6195 < len__4531__auto___6194)){
args__4534__auto__.push((arguments[i__4532__auto___6195]));

var G__6196 = (i__4532__auto___6195 + (1));
i__4532__auto___6195 = G__6196;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to6187.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to6187.cljs$core$IFn$_invoke$arity$variadic = (function (p__6190,body){
var vec__6191 = p__6190;
var method = cljs.core.nth.call(null,vec__6191,(0),null);
var action = cljs.core.nth.call(null,vec__6191,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to6187.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to6187.cljs$lang$applyTo = (function (seq6188){
var G__6189 = cljs.core.first.call(null,seq6188);
var seq6188__$1 = cljs.core.next.call(null,seq6188);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6189,seq6188__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to6187);
