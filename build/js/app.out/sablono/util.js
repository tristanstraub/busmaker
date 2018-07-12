// Compiled by ClojureScript 1.10.339 {}
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('clojure.string');
sablono.util._STAR_base_url_STAR_ = null;

/**
 * @interface
 */
sablono.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if(((!((x == null))) && (!((x.sablono$util$ToString$to_str$arity$1 == null))))){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (sablono.util.to_str[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,x);
} else {
var m__4244__auto____$1 = (sablono.util.to_str["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",x);
}
}
}
});


/**
 * @interface
 */
sablono.util.ToURI = function(){};

/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if(((!((x == null))) && (!((x.sablono$util$ToURI$to_uri$arity$1 == null))))){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (sablono.util.to_uri[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,x);
} else {
var m__4244__auto____$1 = (sablono.util.to_uri["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"ToURI.to-uri",x);
}
}
}
});

/**
 * Converts its arguments into a string using to-str.
 */
sablono.util.as_str = (function sablono$util$as_str(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4692 = arguments.length;
var i__4532__auto___4693 = (0);
while(true){
if((i__4532__auto___4693 < len__4531__auto___4692)){
args__4534__auto__.push((arguments[i__4532__auto___4693]));

var G__4694 = (i__4532__auto___4693 + (1));
i__4532__auto___4693 = G__4694;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,sablono.util.to_str,xs));
});

sablono.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.util.as_str.cljs$lang$applyTo = (function (seq4691){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4691));
});

/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)))){
var vec__4695 = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);
var seq__4696 = cljs.core.seq.call(null,vec__4695);
var first__4697 = cljs.core.first.call(null,seq__4696);
var seq__4696__$1 = cljs.core.next.call(null,seq__4696);
var first_word = first__4697;
var words = seq__4696__$1;
if(((cljs.core.empty_QMARK_.call(null,words)) || (cljs.core._EQ_.call(null,"aria",first_word)) || (cljs.core._EQ_.call(null,"data",first_word)))){
return k;
} else {
return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_.call(null,m)){
var ks = cljs.core.keys.call(null,m);
var kmap = cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,sablono.util.camel_case,ks));
var G__4698 = clojure.set.rename_keys.call(null,m,kmap);
if(cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.update_in.call(null,G__4698,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null),sablono.util.camel_case_keys);
} else {
return G__4698;
}
} else {
return m;
}
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
sablono.util.element_QMARK_ = (function sablono$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword)));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys.call(null,sablono.util.camel_case_keys.call(null,attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null));
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.call(null," ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4699_SHARP_){
if(typeof p1__4699_SHARP_ === 'string'){
return p1__4699_SHARP_;
} else {
return cljs.core.seq.call(null,p1__4699_SHARP_);

}
}),classes))));
});
/**
 * Return the symbol of a fn that build a React element. 
 */
sablono.util.react_fn = (function sablono$util$react_fn(type){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"input","input",556931961),null,new cljs.core.Keyword(null,"select","select",1147833503),null], null), null),cljs.core.keyword.call(null,type))){
return new cljs.core.Symbol("sablono.interpreter","create-element","sablono.interpreter/create-element",748785555,null);
} else {
return new cljs.core.Symbol("js","React.createElement","js/React.createElement",1766367641,null);
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name.call(null,x__$1);
});

goog.Uri.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__3949__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (((x__$1.getPath() == null)) || (cljs.core.not.call(null,cljs.core.re_matches.call(null,/^\/.*/,x__$1.getPath()))));
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
var base = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util._STAR_base_url_STAR_)].join('');
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\/$/,base))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,base,(0),(cljs.core.count.call(null,base) - (1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
}
}
});

goog.object.set(sablono.util.ToString,"null",true);

goog.object.set(sablono.util.to_str,"null",(function (_){
return "";
}));

goog.object.set(sablono.util.ToString,"number",true);

goog.object.set(sablono.util.to_str,"number",(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}));

goog.object.set(sablono.util.ToString,"_",true);

goog.object.set(sablono.util.to_str,"_",(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}));
goog.Uri.prototype.sablono$util$ToURI$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

goog.object.set(sablono.util.ToURI,"_",true);

goog.object.set(sablono.util.to_uri,"_",(function (x){
return (new goog.Uri([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));
}));
