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
var G__5771__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__5768 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__5769 = cljs.core.seq.call(null,vec__5768);
var first__5770 = cljs.core.first.call(null,seq__5769);
var seq__5769__$1 = cljs.core.next.call(null,seq__5769);
var tag = first__5770;
var body = seq__5769__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__5771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5772__i = 0, G__5772__a = new Array(arguments.length -  0);
while (G__5772__i < G__5772__a.length) {G__5772__a[G__5772__i] = arguments[G__5772__i + 0]; ++G__5772__i;}
  args = new cljs.core.IndexedSeq(G__5772__a,0,null);
} 
return G__5771__delegate.call(this,args);};
G__5771.cljs$lang$maxFixedArity = 0;
G__5771.cljs$lang$applyTo = (function (arglist__5773){
var args = cljs.core.seq(arglist__5773);
return G__5771__delegate(args);
});
G__5771.cljs$core$IFn$_invoke$arity$variadic = G__5771__delegate;
return G__5771;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__5774(s__5775){
return (new cljs.core.LazySeq(null,(function (){
var s__5775__$1 = s__5775;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5775__$1);
if(temp__5457__auto__){
var s__5775__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5775__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5775__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5777 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5776 = (0);
while(true){
if((i__5776 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__5776);
cljs.core.chunk_append.call(null,b__5777,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__5778 = (i__5776 + (1));
i__5776 = G__5778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5777),sablono$core$update_arglists_$_iter__5774.call(null,cljs.core.chunk_rest.call(null,s__5775__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5777),null);
}
} else {
var args = cljs.core.first.call(null,s__5775__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__5774.call(null,cljs.core.rest.call(null,s__5775__$2)));
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
var len__4531__auto___5784 = arguments.length;
var i__4532__auto___5785 = (0);
while(true){
if((i__4532__auto___5785 < len__4531__auto___5784)){
args__4534__auto__.push((arguments[i__4532__auto___5785]));

var G__5786 = (i__4532__auto___5785 + (1));
i__4532__auto___5785 = G__5786;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__5780(s__5781){
return (new cljs.core.LazySeq(null,(function (){
var s__5781__$1 = s__5781;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5781__$1);
if(temp__5457__auto__){
var s__5781__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5781__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5781__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5783 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5782 = (0);
while(true){
if((i__5782 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__5782);
cljs.core.chunk_append.call(null,b__5783,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__5787 = (i__5782 + (1));
i__5782 = G__5787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5783),sablono$core$iter__5780.call(null,cljs.core.chunk_rest.call(null,s__5781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5783),null);
}
} else {
var style = cljs.core.first.call(null,s__5781__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__5780.call(null,cljs.core.rest.call(null,s__5781__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq5779){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5779));
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
sablono.core.link_to5788 = (function sablono$core$link_to5788(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5791 = arguments.length;
var i__4532__auto___5792 = (0);
while(true){
if((i__4532__auto___5792 < len__4531__auto___5791)){
args__4534__auto__.push((arguments[i__4532__auto___5792]));

var G__5793 = (i__4532__auto___5792 + (1));
i__4532__auto___5792 = G__5793;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to5788.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to5788.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to5788.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to5788.cljs$lang$applyTo = (function (seq5789){
var G__5790 = cljs.core.first.call(null,seq5789);
var seq5789__$1 = cljs.core.next.call(null,seq5789);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5790,seq5789__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to5788);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to5794 = (function sablono$core$mail_to5794(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5801 = arguments.length;
var i__4532__auto___5802 = (0);
while(true){
if((i__4532__auto___5802 < len__4531__auto___5801)){
args__4534__auto__.push((arguments[i__4532__auto___5802]));

var G__5803 = (i__4532__auto___5802 + (1));
i__4532__auto___5802 = G__5803;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to5794.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to5794.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__5797){
var vec__5798 = p__5797;
var content = cljs.core.nth.call(null,vec__5798,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to5794.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to5794.cljs$lang$applyTo = (function (seq5795){
var G__5796 = cljs.core.first.call(null,seq5795);
var seq5795__$1 = cljs.core.next.call(null,seq5795);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5796,seq5795__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to5794);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list5804 = (function sablono$core$unordered_list5804(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list5804_$_iter__5805(s__5806){
return (new cljs.core.LazySeq(null,(function (){
var s__5806__$1 = s__5806;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5806__$1);
if(temp__5457__auto__){
var s__5806__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5806__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5806__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5808 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5807 = (0);
while(true){
if((i__5807 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5807);
cljs.core.chunk_append.call(null,b__5808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5809 = (i__5807 + (1));
i__5807 = G__5809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5808),sablono$core$unordered_list5804_$_iter__5805.call(null,cljs.core.chunk_rest.call(null,s__5806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5808),null);
}
} else {
var x = cljs.core.first.call(null,s__5806__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list5804_$_iter__5805.call(null,cljs.core.rest.call(null,s__5806__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list5804);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list5810 = (function sablono$core$ordered_list5810(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list5810_$_iter__5811(s__5812){
return (new cljs.core.LazySeq(null,(function (){
var s__5812__$1 = s__5812;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5812__$1);
if(temp__5457__auto__){
var s__5812__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5812__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5812__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5814 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5813 = (0);
while(true){
if((i__5813 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5813);
cljs.core.chunk_append.call(null,b__5814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5815 = (i__5813 + (1));
i__5813 = G__5815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5814),sablono$core$ordered_list5810_$_iter__5811.call(null,cljs.core.chunk_rest.call(null,s__5812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5814),null);
}
} else {
var x = cljs.core.first.call(null,s__5812__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list5810_$_iter__5811.call(null,cljs.core.rest.call(null,s__5812__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list5810);
/**
 * Create an image element.
 */
sablono.core.image5816 = (function sablono$core$image5816(var_args){
var G__5818 = arguments.length;
switch (G__5818) {
case 1:
return sablono.core.image5816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image5816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image5816.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image5816.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image5816.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image5816);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__5820_SHARP_,p2__5821_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5820_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5821_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__5822_SHARP_,p2__5823_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5822_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5823_SHARP_)].join('');
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
sablono.core.color_field5824 = (function sablono$core$color_field5824(var_args){
var G__5826 = arguments.length;
switch (G__5826) {
case 1:
return sablono.core.color_field5824.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field5824.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field5824.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.color_field5824.call(null,name__5758__auto__,null);
});

sablono.core.color_field5824.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.color_field5824.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field5824);

/**
 * Creates a date input field.
 */
sablono.core.date_field5827 = (function sablono$core$date_field5827(var_args){
var G__5829 = arguments.length;
switch (G__5829) {
case 1:
return sablono.core.date_field5827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field5827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field5827.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.date_field5827.call(null,name__5758__auto__,null);
});

sablono.core.date_field5827.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.date_field5827.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field5827);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field5830 = (function sablono$core$datetime_field5830(var_args){
var G__5832 = arguments.length;
switch (G__5832) {
case 1:
return sablono.core.datetime_field5830.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field5830.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field5830.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.datetime_field5830.call(null,name__5758__auto__,null);
});

sablono.core.datetime_field5830.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.datetime_field5830.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field5830);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field5833 = (function sablono$core$datetime_local_field5833(var_args){
var G__5835 = arguments.length;
switch (G__5835) {
case 1:
return sablono.core.datetime_local_field5833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field5833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field5833.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.datetime_local_field5833.call(null,name__5758__auto__,null);
});

sablono.core.datetime_local_field5833.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.datetime_local_field5833.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field5833);

/**
 * Creates a email input field.
 */
sablono.core.email_field5836 = (function sablono$core$email_field5836(var_args){
var G__5838 = arguments.length;
switch (G__5838) {
case 1:
return sablono.core.email_field5836.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field5836.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field5836.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.email_field5836.call(null,name__5758__auto__,null);
});

sablono.core.email_field5836.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.email_field5836.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field5836);

/**
 * Creates a file input field.
 */
sablono.core.file_field5839 = (function sablono$core$file_field5839(var_args){
var G__5841 = arguments.length;
switch (G__5841) {
case 1:
return sablono.core.file_field5839.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field5839.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field5839.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.file_field5839.call(null,name__5758__auto__,null);
});

sablono.core.file_field5839.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.file_field5839.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field5839);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field5842 = (function sablono$core$hidden_field5842(var_args){
var G__5844 = arguments.length;
switch (G__5844) {
case 1:
return sablono.core.hidden_field5842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field5842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field5842.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.hidden_field5842.call(null,name__5758__auto__,null);
});

sablono.core.hidden_field5842.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.hidden_field5842.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field5842);

/**
 * Creates a month input field.
 */
sablono.core.month_field5845 = (function sablono$core$month_field5845(var_args){
var G__5847 = arguments.length;
switch (G__5847) {
case 1:
return sablono.core.month_field5845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field5845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field5845.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.month_field5845.call(null,name__5758__auto__,null);
});

sablono.core.month_field5845.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.month_field5845.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field5845);

/**
 * Creates a number input field.
 */
sablono.core.number_field5848 = (function sablono$core$number_field5848(var_args){
var G__5850 = arguments.length;
switch (G__5850) {
case 1:
return sablono.core.number_field5848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field5848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field5848.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.number_field5848.call(null,name__5758__auto__,null);
});

sablono.core.number_field5848.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.number_field5848.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field5848);

/**
 * Creates a password input field.
 */
sablono.core.password_field5851 = (function sablono$core$password_field5851(var_args){
var G__5853 = arguments.length;
switch (G__5853) {
case 1:
return sablono.core.password_field5851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field5851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field5851.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.password_field5851.call(null,name__5758__auto__,null);
});

sablono.core.password_field5851.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.password_field5851.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field5851);

/**
 * Creates a range input field.
 */
sablono.core.range_field5854 = (function sablono$core$range_field5854(var_args){
var G__5856 = arguments.length;
switch (G__5856) {
case 1:
return sablono.core.range_field5854.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field5854.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field5854.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.range_field5854.call(null,name__5758__auto__,null);
});

sablono.core.range_field5854.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.range_field5854.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field5854);

/**
 * Creates a search input field.
 */
sablono.core.search_field5857 = (function sablono$core$search_field5857(var_args){
var G__5859 = arguments.length;
switch (G__5859) {
case 1:
return sablono.core.search_field5857.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field5857.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field5857.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.search_field5857.call(null,name__5758__auto__,null);
});

sablono.core.search_field5857.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.search_field5857.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field5857);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field5860 = (function sablono$core$tel_field5860(var_args){
var G__5862 = arguments.length;
switch (G__5862) {
case 1:
return sablono.core.tel_field5860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field5860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field5860.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.tel_field5860.call(null,name__5758__auto__,null);
});

sablono.core.tel_field5860.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.tel_field5860.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field5860);

/**
 * Creates a text input field.
 */
sablono.core.text_field5863 = (function sablono$core$text_field5863(var_args){
var G__5865 = arguments.length;
switch (G__5865) {
case 1:
return sablono.core.text_field5863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field5863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field5863.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.text_field5863.call(null,name__5758__auto__,null);
});

sablono.core.text_field5863.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.text_field5863.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field5863);

/**
 * Creates a time input field.
 */
sablono.core.time_field5866 = (function sablono$core$time_field5866(var_args){
var G__5868 = arguments.length;
switch (G__5868) {
case 1:
return sablono.core.time_field5866.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field5866.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field5866.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.time_field5866.call(null,name__5758__auto__,null);
});

sablono.core.time_field5866.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.time_field5866.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field5866);

/**
 * Creates a url input field.
 */
sablono.core.url_field5869 = (function sablono$core$url_field5869(var_args){
var G__5871 = arguments.length;
switch (G__5871) {
case 1:
return sablono.core.url_field5869.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field5869.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field5869.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.url_field5869.call(null,name__5758__auto__,null);
});

sablono.core.url_field5869.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.url_field5869.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field5869);

/**
 * Creates a week input field.
 */
sablono.core.week_field5872 = (function sablono$core$week_field5872(var_args){
var G__5874 = arguments.length;
switch (G__5874) {
case 1:
return sablono.core.week_field5872.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field5872.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field5872.cljs$core$IFn$_invoke$arity$1 = (function (name__5758__auto__){
return sablono.core.week_field5872.call(null,name__5758__auto__,null);
});

sablono.core.week_field5872.cljs$core$IFn$_invoke$arity$2 = (function (name__5758__auto__,value__5759__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5758__auto__,value__5759__auto__);
});

sablono.core.week_field5872.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field5872);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box5892 = (function sablono$core$check_box5892(var_args){
var G__5894 = arguments.length;
switch (G__5894) {
case 1:
return sablono.core.check_box5892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box5892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box5892.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box5892.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box5892.call(null,name,null);
});

sablono.core.check_box5892.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box5892.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box5892.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box5892.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box5892);
/**
 * Creates a radio button.
 */
sablono.core.radio_button5896 = (function sablono$core$radio_button5896(var_args){
var G__5898 = arguments.length;
switch (G__5898) {
case 1:
return sablono.core.radio_button5896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button5896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button5896.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button5896.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button5896.call(null,group,null);
});

sablono.core.radio_button5896.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button5896.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button5896.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button5896.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button5896);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options5900 = (function sablono$core$select_options5900(coll){
var iter__4324__auto__ = (function sablono$core$select_options5900_$_iter__5901(s__5902){
return (new cljs.core.LazySeq(null,(function (){
var s__5902__$1 = s__5902;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__5902__$1);
if(temp__5457__auto__){
var s__5902__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5902__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__5902__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__5904 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__5903 = (0);
while(true){
if((i__5903 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__5903);
cljs.core.chunk_append.call(null,b__5904,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5905 = x;
var text = cljs.core.nth.call(null,vec__5905,(0),null);
var val = cljs.core.nth.call(null,vec__5905,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5905,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5900.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__5911 = (i__5903 + (1));
i__5903 = G__5911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5904),sablono$core$select_options5900_$_iter__5901.call(null,cljs.core.chunk_rest.call(null,s__5902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5904),null);
}
} else {
var x = cljs.core.first.call(null,s__5902__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__5908 = x;
var text = cljs.core.nth.call(null,vec__5908,(0),null);
var val = cljs.core.nth.call(null,vec__5908,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__5908,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options5900.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options5900_$_iter__5901.call(null,cljs.core.rest.call(null,s__5902__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options5900);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down5912 = (function sablono$core$drop_down5912(var_args){
var G__5914 = arguments.length;
switch (G__5914) {
case 2:
return sablono.core.drop_down5912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down5912.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down5912.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down5912.call(null,name,options,null);
});

sablono.core.drop_down5912.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down5912.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down5912);
/**
 * Creates a text area element.
 */
sablono.core.text_area5916 = (function sablono$core$text_area5916(var_args){
var G__5918 = arguments.length;
switch (G__5918) {
case 1:
return sablono.core.text_area5916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area5916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area5916.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area5916.call(null,name,null);
});

sablono.core.text_area5916.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area5916.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area5916);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label5920 = (function sablono$core$label5920(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label5920);
/**
 * Creates a submit button.
 */
sablono.core.submit_button5921 = (function sablono$core$submit_button5921(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button5921);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button5922 = (function sablono$core$reset_button5922(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button5922);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to5923 = (function sablono$core$form_to5923(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5930 = arguments.length;
var i__4532__auto___5931 = (0);
while(true){
if((i__4532__auto___5931 < len__4531__auto___5930)){
args__4534__auto__.push((arguments[i__4532__auto___5931]));

var G__5932 = (i__4532__auto___5931 + (1));
i__4532__auto___5931 = G__5932;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to5923.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to5923.cljs$core$IFn$_invoke$arity$variadic = (function (p__5926,body){
var vec__5927 = p__5926;
var method = cljs.core.nth.call(null,vec__5927,(0),null);
var action = cljs.core.nth.call(null,vec__5927,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to5923.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to5923.cljs$lang$applyTo = (function (seq5924){
var G__5925 = cljs.core.first.call(null,seq5924);
var seq5924__$1 = cljs.core.next.call(null,seq5924);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5925,seq5924__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to5923);
