// Compiled by ClojureScript 1.10.339 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__2138__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__2135 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__2136 = cljs.core.seq.call(null,vec__2135);
var first__2137 = cljs.core.first.call(null,seq__2136);
var seq__2136__$1 = cljs.core.next.call(null,seq__2136);
var tag = first__2137;
var body = seq__2136__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__2138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2139__i = 0, G__2139__a = new Array(arguments.length -  0);
while (G__2139__i < G__2139__a.length) {G__2139__a[G__2139__i] = arguments[G__2139__i + 0]; ++G__2139__i;}
  args = new cljs.core.IndexedSeq(G__2139__a,0,null);
} 
return G__2138__delegate.call(this,args);};
G__2138.cljs$lang$maxFixedArity = 0;
G__2138.cljs$lang$applyTo = (function (arglist__2140){
var args = cljs.core.seq(arglist__2140);
return G__2138__delegate(args);
});
G__2138.cljs$core$IFn$_invoke$arity$variadic = G__2138__delegate;
return G__2138;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__2141(s__2142){
return (new cljs.core.LazySeq(null,(function (){
var s__2142__$1 = s__2142;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2142__$1);
if(temp__5457__auto__){
var s__2142__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2142__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2142__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2144 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2143 = (0);
while(true){
if((i__2143 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__2143);
cljs.core.chunk_append.call(null,b__2144,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__2145 = (i__2143 + (1));
i__2143 = G__2145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2144),sablono$core$update_arglists_$_iter__2141.call(null,cljs.core.chunk_rest.call(null,s__2142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2144),null);
}
} else {
var args = cljs.core.first.call(null,s__2142__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__2141.call(null,cljs.core.rest.call(null,s__2142__$2)));
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
var len__4531__auto___2151 = arguments.length;
var i__4532__auto___2152 = (0);
while(true){
if((i__4532__auto___2152 < len__4531__auto___2151)){
args__4534__auto__.push((arguments[i__4532__auto___2152]));

var G__2153 = (i__4532__auto___2152 + (1));
i__4532__auto___2152 = G__2153;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__2147(s__2148){
return (new cljs.core.LazySeq(null,(function (){
var s__2148__$1 = s__2148;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2148__$1);
if(temp__5457__auto__){
var s__2148__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2148__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2148__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2150 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2149 = (0);
while(true){
if((i__2149 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__2149);
cljs.core.chunk_append.call(null,b__2150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__2154 = (i__2149 + (1));
i__2149 = G__2154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2150),sablono$core$iter__2147.call(null,cljs.core.chunk_rest.call(null,s__2148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2150),null);
}
} else {
var style = cljs.core.first.call(null,s__2148__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__2147.call(null,cljs.core.rest.call(null,s__2148__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq2146){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2146));
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
sablono.core.link_to2155 = (function sablono$core$link_to2155(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2158 = arguments.length;
var i__4532__auto___2159 = (0);
while(true){
if((i__4532__auto___2159 < len__4531__auto___2158)){
args__4534__auto__.push((arguments[i__4532__auto___2159]));

var G__2160 = (i__4532__auto___2159 + (1));
i__4532__auto___2159 = G__2160;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to2155.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to2155.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to2155.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to2155.cljs$lang$applyTo = (function (seq2156){
var G__2157 = cljs.core.first.call(null,seq2156);
var seq2156__$1 = cljs.core.next.call(null,seq2156);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2157,seq2156__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to2155);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to2161 = (function sablono$core$mail_to2161(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2168 = arguments.length;
var i__4532__auto___2169 = (0);
while(true){
if((i__4532__auto___2169 < len__4531__auto___2168)){
args__4534__auto__.push((arguments[i__4532__auto___2169]));

var G__2170 = (i__4532__auto___2169 + (1));
i__4532__auto___2169 = G__2170;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to2161.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to2161.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__2164){
var vec__2165 = p__2164;
var content = cljs.core.nth.call(null,vec__2165,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to2161.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to2161.cljs$lang$applyTo = (function (seq2162){
var G__2163 = cljs.core.first.call(null,seq2162);
var seq2162__$1 = cljs.core.next.call(null,seq2162);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2163,seq2162__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to2161);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list2171 = (function sablono$core$unordered_list2171(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list2171_$_iter__2172(s__2173){
return (new cljs.core.LazySeq(null,(function (){
var s__2173__$1 = s__2173;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2173__$1);
if(temp__5457__auto__){
var s__2173__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2173__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2173__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2175 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2174 = (0);
while(true){
if((i__2174 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__2174);
cljs.core.chunk_append.call(null,b__2175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__2176 = (i__2174 + (1));
i__2174 = G__2176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2175),sablono$core$unordered_list2171_$_iter__2172.call(null,cljs.core.chunk_rest.call(null,s__2173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2175),null);
}
} else {
var x = cljs.core.first.call(null,s__2173__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list2171_$_iter__2172.call(null,cljs.core.rest.call(null,s__2173__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list2171);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list2177 = (function sablono$core$ordered_list2177(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list2177_$_iter__2178(s__2179){
return (new cljs.core.LazySeq(null,(function (){
var s__2179__$1 = s__2179;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2179__$1);
if(temp__5457__auto__){
var s__2179__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2179__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2179__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2181 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2180 = (0);
while(true){
if((i__2180 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__2180);
cljs.core.chunk_append.call(null,b__2181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__2182 = (i__2180 + (1));
i__2180 = G__2182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2181),sablono$core$ordered_list2177_$_iter__2178.call(null,cljs.core.chunk_rest.call(null,s__2179__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2181),null);
}
} else {
var x = cljs.core.first.call(null,s__2179__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list2177_$_iter__2178.call(null,cljs.core.rest.call(null,s__2179__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list2177);
/**
 * Create an image element.
 */
sablono.core.image2183 = (function sablono$core$image2183(var_args){
var G__2185 = arguments.length;
switch (G__2185) {
case 1:
return sablono.core.image2183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image2183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image2183.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image2183.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image2183.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image2183);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__2187_SHARP_,p2__2188_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2187_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__2188_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__2189_SHARP_,p2__2190_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2189_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__2190_SHARP_)].join('');
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
sablono.core.color_field2191 = (function sablono$core$color_field2191(var_args){
var G__2193 = arguments.length;
switch (G__2193) {
case 1:
return sablono.core.color_field2191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field2191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field2191.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.color_field2191.call(null,name__2125__auto__,null);
});

sablono.core.color_field2191.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.color_field2191.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field2191);

/**
 * Creates a date input field.
 */
sablono.core.date_field2194 = (function sablono$core$date_field2194(var_args){
var G__2196 = arguments.length;
switch (G__2196) {
case 1:
return sablono.core.date_field2194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field2194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field2194.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.date_field2194.call(null,name__2125__auto__,null);
});

sablono.core.date_field2194.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.date_field2194.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field2194);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field2197 = (function sablono$core$datetime_field2197(var_args){
var G__2199 = arguments.length;
switch (G__2199) {
case 1:
return sablono.core.datetime_field2197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field2197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field2197.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.datetime_field2197.call(null,name__2125__auto__,null);
});

sablono.core.datetime_field2197.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.datetime_field2197.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field2197);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field2200 = (function sablono$core$datetime_local_field2200(var_args){
var G__2202 = arguments.length;
switch (G__2202) {
case 1:
return sablono.core.datetime_local_field2200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field2200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field2200.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.datetime_local_field2200.call(null,name__2125__auto__,null);
});

sablono.core.datetime_local_field2200.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.datetime_local_field2200.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field2200);

/**
 * Creates a email input field.
 */
sablono.core.email_field2203 = (function sablono$core$email_field2203(var_args){
var G__2205 = arguments.length;
switch (G__2205) {
case 1:
return sablono.core.email_field2203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field2203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field2203.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.email_field2203.call(null,name__2125__auto__,null);
});

sablono.core.email_field2203.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.email_field2203.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field2203);

/**
 * Creates a file input field.
 */
sablono.core.file_field2206 = (function sablono$core$file_field2206(var_args){
var G__2208 = arguments.length;
switch (G__2208) {
case 1:
return sablono.core.file_field2206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field2206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field2206.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.file_field2206.call(null,name__2125__auto__,null);
});

sablono.core.file_field2206.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.file_field2206.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field2206);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field2209 = (function sablono$core$hidden_field2209(var_args){
var G__2211 = arguments.length;
switch (G__2211) {
case 1:
return sablono.core.hidden_field2209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field2209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field2209.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.hidden_field2209.call(null,name__2125__auto__,null);
});

sablono.core.hidden_field2209.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.hidden_field2209.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field2209);

/**
 * Creates a month input field.
 */
sablono.core.month_field2212 = (function sablono$core$month_field2212(var_args){
var G__2214 = arguments.length;
switch (G__2214) {
case 1:
return sablono.core.month_field2212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field2212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field2212.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.month_field2212.call(null,name__2125__auto__,null);
});

sablono.core.month_field2212.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.month_field2212.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field2212);

/**
 * Creates a number input field.
 */
sablono.core.number_field2215 = (function sablono$core$number_field2215(var_args){
var G__2217 = arguments.length;
switch (G__2217) {
case 1:
return sablono.core.number_field2215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field2215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field2215.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.number_field2215.call(null,name__2125__auto__,null);
});

sablono.core.number_field2215.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.number_field2215.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field2215);

/**
 * Creates a password input field.
 */
sablono.core.password_field2218 = (function sablono$core$password_field2218(var_args){
var G__2220 = arguments.length;
switch (G__2220) {
case 1:
return sablono.core.password_field2218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field2218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field2218.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.password_field2218.call(null,name__2125__auto__,null);
});

sablono.core.password_field2218.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.password_field2218.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field2218);

/**
 * Creates a range input field.
 */
sablono.core.range_field2221 = (function sablono$core$range_field2221(var_args){
var G__2223 = arguments.length;
switch (G__2223) {
case 1:
return sablono.core.range_field2221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field2221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field2221.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.range_field2221.call(null,name__2125__auto__,null);
});

sablono.core.range_field2221.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.range_field2221.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field2221);

/**
 * Creates a search input field.
 */
sablono.core.search_field2224 = (function sablono$core$search_field2224(var_args){
var G__2226 = arguments.length;
switch (G__2226) {
case 1:
return sablono.core.search_field2224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field2224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field2224.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.search_field2224.call(null,name__2125__auto__,null);
});

sablono.core.search_field2224.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.search_field2224.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field2224);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field2227 = (function sablono$core$tel_field2227(var_args){
var G__2229 = arguments.length;
switch (G__2229) {
case 1:
return sablono.core.tel_field2227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field2227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field2227.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.tel_field2227.call(null,name__2125__auto__,null);
});

sablono.core.tel_field2227.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.tel_field2227.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field2227);

/**
 * Creates a text input field.
 */
sablono.core.text_field2230 = (function sablono$core$text_field2230(var_args){
var G__2232 = arguments.length;
switch (G__2232) {
case 1:
return sablono.core.text_field2230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field2230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field2230.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.text_field2230.call(null,name__2125__auto__,null);
});

sablono.core.text_field2230.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.text_field2230.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field2230);

/**
 * Creates a time input field.
 */
sablono.core.time_field2233 = (function sablono$core$time_field2233(var_args){
var G__2235 = arguments.length;
switch (G__2235) {
case 1:
return sablono.core.time_field2233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field2233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field2233.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.time_field2233.call(null,name__2125__auto__,null);
});

sablono.core.time_field2233.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.time_field2233.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field2233);

/**
 * Creates a url input field.
 */
sablono.core.url_field2236 = (function sablono$core$url_field2236(var_args){
var G__2238 = arguments.length;
switch (G__2238) {
case 1:
return sablono.core.url_field2236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field2236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field2236.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.url_field2236.call(null,name__2125__auto__,null);
});

sablono.core.url_field2236.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.url_field2236.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field2236);

/**
 * Creates a week input field.
 */
sablono.core.week_field2239 = (function sablono$core$week_field2239(var_args){
var G__2241 = arguments.length;
switch (G__2241) {
case 1:
return sablono.core.week_field2239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field2239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field2239.cljs$core$IFn$_invoke$arity$1 = (function (name__2125__auto__){
return sablono.core.week_field2239.call(null,name__2125__auto__,null);
});

sablono.core.week_field2239.cljs$core$IFn$_invoke$arity$2 = (function (name__2125__auto__,value__2126__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__2125__auto__,value__2126__auto__);
});

sablono.core.week_field2239.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field2239);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box2259 = (function sablono$core$check_box2259(var_args){
var G__2261 = arguments.length;
switch (G__2261) {
case 1:
return sablono.core.check_box2259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box2259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box2259.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box2259.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box2259.call(null,name,null);
});

sablono.core.check_box2259.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box2259.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box2259.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box2259.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box2259);
/**
 * Creates a radio button.
 */
sablono.core.radio_button2263 = (function sablono$core$radio_button2263(var_args){
var G__2265 = arguments.length;
switch (G__2265) {
case 1:
return sablono.core.radio_button2263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button2263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button2263.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button2263.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button2263.call(null,group,null);
});

sablono.core.radio_button2263.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button2263.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button2263.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button2263.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button2263);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options2267 = (function sablono$core$select_options2267(coll){
var iter__4324__auto__ = (function sablono$core$select_options2267_$_iter__2268(s__2269){
return (new cljs.core.LazySeq(null,(function (){
var s__2269__$1 = s__2269;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2269__$1);
if(temp__5457__auto__){
var s__2269__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2269__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2269__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2271 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2270 = (0);
while(true){
if((i__2270 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__2270);
cljs.core.chunk_append.call(null,b__2271,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__2272 = x;
var text = cljs.core.nth.call(null,vec__2272,(0),null);
var val = cljs.core.nth.call(null,vec__2272,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__2272,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options2267.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__2278 = (i__2270 + (1));
i__2270 = G__2278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2271),sablono$core$select_options2267_$_iter__2268.call(null,cljs.core.chunk_rest.call(null,s__2269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2271),null);
}
} else {
var x = cljs.core.first.call(null,s__2269__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__2275 = x;
var text = cljs.core.nth.call(null,vec__2275,(0),null);
var val = cljs.core.nth.call(null,vec__2275,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__2275,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options2267.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options2267_$_iter__2268.call(null,cljs.core.rest.call(null,s__2269__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options2267);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down2279 = (function sablono$core$drop_down2279(var_args){
var G__2281 = arguments.length;
switch (G__2281) {
case 2:
return sablono.core.drop_down2279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down2279.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down2279.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down2279.call(null,name,options,null);
});

sablono.core.drop_down2279.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down2279.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down2279);
/**
 * Creates a text area element.
 */
sablono.core.text_area2283 = (function sablono$core$text_area2283(var_args){
var G__2285 = arguments.length;
switch (G__2285) {
case 1:
return sablono.core.text_area2283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area2283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area2283.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area2283.call(null,name,null);
});

sablono.core.text_area2283.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area2283.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area2283);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label2287 = (function sablono$core$label2287(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label2287);
/**
 * Creates a submit button.
 */
sablono.core.submit_button2288 = (function sablono$core$submit_button2288(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button2288);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button2289 = (function sablono$core$reset_button2289(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button2289);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to2290 = (function sablono$core$form_to2290(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2297 = arguments.length;
var i__4532__auto___2298 = (0);
while(true){
if((i__4532__auto___2298 < len__4531__auto___2297)){
args__4534__auto__.push((arguments[i__4532__auto___2298]));

var G__2299 = (i__4532__auto___2298 + (1));
i__4532__auto___2298 = G__2299;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to2290.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to2290.cljs$core$IFn$_invoke$arity$variadic = (function (p__2293,body){
var vec__2294 = p__2293;
var method = cljs.core.nth.call(null,vec__2294,(0),null);
var action = cljs.core.nth.call(null,vec__2294,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to2290.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to2290.cljs$lang$applyTo = (function (seq2291){
var G__2292 = cljs.core.first.call(null,seq2291);
var seq2291__$1 = cljs.core.next.call(null,seq2291);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2292,seq2291__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to2290);

//# sourceMappingURL=core.js.map
