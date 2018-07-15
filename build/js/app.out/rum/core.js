// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__6200_SHARP_,p2__6199_SHARP_){
return p2__6199_SHARP_.call(null,p1__6200_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__6202_SHARP_,p2__6201_SHARP_){
return p2__6201_SHARP_.call(null,old_state,p1__6202_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__3949__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__6203_SHARP_){
return p1__6203_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__6205 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__6205,(0),null);
var next_state = cljs.core.nth.call(null,vec__6205,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__6204_SHARP_){
return p1__6204_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__6208__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__6208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6209__i = 0, G__6209__a = new Array(arguments.length -  0);
while (G__6209__i < G__6209__a.length) {G__6209__a[G__6209__i] = arguments[G__6209__i + 0]; ++G__6209__i;}
  args = new cljs.core.IndexedSeq(G__6209__a,0,null);
} 
return G__6208__delegate.call(this,args);};
G__6208.cljs$lang$maxFixedArity = 0;
G__6208.cljs$lang$applyTo = (function (arglist__6210){
var args = cljs.core.seq(arglist__6210);
return G__6208__delegate(args);
});
G__6208.cljs$core$IFn$_invoke$arity$variadic = G__6208__delegate;
return G__6208;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__6211__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__6211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6212__i = 0, G__6212__a = new Array(arguments.length -  0);
while (G__6212__i < G__6212__a.length) {G__6212__a[G__6212__i] = arguments[G__6212__i + 0]; ++G__6212__i;}
  args = new cljs.core.IndexedSeq(G__6212__a,0,null);
} 
return G__6211__delegate.call(this,args);};
G__6211.cljs$lang$maxFixedArity = 0;
G__6211.cljs$lang$applyTo = (function (arglist__6213){
var args = cljs.core.seq(arglist__6213);
return G__6211__delegate(args);
});
G__6211.cljs$core$IFn$_invoke$arity$variadic = G__6211__delegate;
return G__6211;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__6214__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__6214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6215__i = 0, G__6215__a = new Array(arguments.length -  0);
while (G__6215__i < G__6215__a.length) {G__6215__a[G__6215__i] = arguments[G__6215__i + 0]; ++G__6215__i;}
  args = new cljs.core.IndexedSeq(G__6215__a,0,null);
} 
return G__6214__delegate.call(this,args);};
G__6214.cljs$lang$maxFixedArity = 0;
G__6214.cljs$lang$applyTo = (function (arglist__6216){
var args = cljs.core.seq(arglist__6216);
return G__6214__delegate(args);
});
G__6214.cljs$core$IFn$_invoke$arity$variadic = G__6214__delegate;
return G__6214;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = (typeof window !== 'undefined');
if(and__3938__auto__){
var or__3949__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (p1__6217_SHARP_){
return setTimeout(p1__6217_SHARP_,(16));
});
;})(or__3949__auto__))
}
})();
rum.core.batch = (function (){var or__3949__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((function (or__3949__auto____$1,or__3949__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3949__auto____$1,or__3949__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__6218 = cljs.core.seq.call(null,queue);
var chunk__6220 = null;
var count__6221 = (0);
var i__6222 = (0);
while(true){
if((i__6222 < count__6221)){
var comp = cljs.core._nth.call(null,chunk__6220,i__6222);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__6224 = seq__6218;
var G__6225 = chunk__6220;
var G__6226 = count__6221;
var G__6227 = (i__6222 + (1));
seq__6218 = G__6224;
chunk__6220 = G__6225;
count__6221 = G__6226;
i__6222 = G__6227;
continue;
} else {
var G__6228 = seq__6218;
var G__6229 = chunk__6220;
var G__6230 = count__6221;
var G__6231 = (i__6222 + (1));
seq__6218 = G__6228;
chunk__6220 = G__6229;
count__6221 = G__6230;
i__6222 = G__6231;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__6218);
if(temp__5457__auto__){
var seq__6218__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6218__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__6218__$1);
var G__6232 = cljs.core.chunk_rest.call(null,seq__6218__$1);
var G__6233 = c__4351__auto__;
var G__6234 = cljs.core.count.call(null,c__4351__auto__);
var G__6235 = (0);
seq__6218 = G__6232;
chunk__6220 = G__6233;
count__6221 = G__6234;
i__6222 = G__6235;
continue;
} else {
var comp = cljs.core.first.call(null,seq__6218__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__6236 = cljs.core.next.call(null,seq__6218__$1);
var G__6237 = null;
var G__6238 = (0);
var G__6239 = (0);
seq__6218 = G__6236;
chunk__6220 = G__6237;
count__6221 = G__6238;
i__6222 = G__6239;
continue;
} else {
var G__6240 = cljs.core.next.call(null,seq__6218__$1);
var G__6241 = null;
var G__6242 = (0);
var G__6243 = (0);
seq__6218 = G__6240;
chunk__6220 = G__6241;
count__6221 = G__6242;
i__6222 = G__6243;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__6245 = arguments.length;
switch (G__6245) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_6247 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__6248 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__6248,(0),null);
var next_state = cljs.core.nth.call(null,vec__6248,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__6251_6263 = cljs.core.seq.call(null,old_reactions);
var chunk__6252_6264 = null;
var count__6253_6265 = (0);
var i__6254_6266 = (0);
while(true){
if((i__6254_6266 < count__6253_6265)){
var ref_6267 = cljs.core._nth.call(null,chunk__6252_6264,i__6254_6266);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_6267)){
} else {
cljs.core.remove_watch.call(null,ref_6267,key);
}


var G__6268 = seq__6251_6263;
var G__6269 = chunk__6252_6264;
var G__6270 = count__6253_6265;
var G__6271 = (i__6254_6266 + (1));
seq__6251_6263 = G__6268;
chunk__6252_6264 = G__6269;
count__6253_6265 = G__6270;
i__6254_6266 = G__6271;
continue;
} else {
var temp__5457__auto___6272 = cljs.core.seq.call(null,seq__6251_6263);
if(temp__5457__auto___6272){
var seq__6251_6273__$1 = temp__5457__auto___6272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6251_6273__$1)){
var c__4351__auto___6274 = cljs.core.chunk_first.call(null,seq__6251_6273__$1);
var G__6275 = cljs.core.chunk_rest.call(null,seq__6251_6273__$1);
var G__6276 = c__4351__auto___6274;
var G__6277 = cljs.core.count.call(null,c__4351__auto___6274);
var G__6278 = (0);
seq__6251_6263 = G__6275;
chunk__6252_6264 = G__6276;
count__6253_6265 = G__6277;
i__6254_6266 = G__6278;
continue;
} else {
var ref_6279 = cljs.core.first.call(null,seq__6251_6273__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_6279)){
} else {
cljs.core.remove_watch.call(null,ref_6279,key);
}


var G__6280 = cljs.core.next.call(null,seq__6251_6273__$1);
var G__6281 = null;
var G__6282 = (0);
var G__6283 = (0);
seq__6251_6263 = G__6280;
chunk__6252_6264 = G__6281;
count__6253_6265 = G__6282;
i__6254_6266 = G__6283;
continue;
}
} else {
}
}
break;
}

var seq__6255_6284 = cljs.core.seq.call(null,new_reactions);
var chunk__6256_6285 = null;
var count__6257_6286 = (0);
var i__6258_6287 = (0);
while(true){
if((i__6258_6287 < count__6257_6286)){
var ref_6288 = cljs.core._nth.call(null,chunk__6256_6285,i__6258_6287);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_6288)){
} else {
cljs.core.add_watch.call(null,ref_6288,key,((function (seq__6255_6284,chunk__6256_6285,count__6257_6286,i__6258_6287,ref_6288,comp,old_reactions,vec__6248,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6247){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__6255_6284,chunk__6256_6285,count__6257_6286,i__6258_6287,ref_6288,comp,old_reactions,vec__6248,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6247))
);
}


var G__6289 = seq__6255_6284;
var G__6290 = chunk__6256_6285;
var G__6291 = count__6257_6286;
var G__6292 = (i__6258_6287 + (1));
seq__6255_6284 = G__6289;
chunk__6256_6285 = G__6290;
count__6257_6286 = G__6291;
i__6258_6287 = G__6292;
continue;
} else {
var temp__5457__auto___6293 = cljs.core.seq.call(null,seq__6255_6284);
if(temp__5457__auto___6293){
var seq__6255_6294__$1 = temp__5457__auto___6293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6255_6294__$1)){
var c__4351__auto___6295 = cljs.core.chunk_first.call(null,seq__6255_6294__$1);
var G__6296 = cljs.core.chunk_rest.call(null,seq__6255_6294__$1);
var G__6297 = c__4351__auto___6295;
var G__6298 = cljs.core.count.call(null,c__4351__auto___6295);
var G__6299 = (0);
seq__6255_6284 = G__6296;
chunk__6256_6285 = G__6297;
count__6257_6286 = G__6298;
i__6258_6287 = G__6299;
continue;
} else {
var ref_6300 = cljs.core.first.call(null,seq__6255_6294__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_6300)){
} else {
cljs.core.add_watch.call(null,ref_6300,key,((function (seq__6255_6284,chunk__6256_6285,count__6257_6286,i__6258_6287,ref_6300,seq__6255_6294__$1,temp__5457__auto___6293,comp,old_reactions,vec__6248,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6247){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__6255_6284,chunk__6256_6285,count__6257_6286,i__6258_6287,ref_6300,seq__6255_6294__$1,temp__5457__auto___6293,comp,old_reactions,vec__6248,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6247))
);
}


var G__6301 = cljs.core.next.call(null,seq__6255_6294__$1);
var G__6302 = null;
var G__6303 = (0);
var G__6304 = (0);
seq__6255_6284 = G__6301;
chunk__6256_6285 = G__6302;
count__6257_6286 = G__6303;
i__6258_6287 = G__6304;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_6247;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_6305 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__6259_6306 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6260_6307 = null;
var count__6261_6308 = (0);
var i__6262_6309 = (0);
while(true){
if((i__6262_6309 < count__6261_6308)){
var ref_6310 = cljs.core._nth.call(null,chunk__6260_6307,i__6262_6309);
cljs.core.remove_watch.call(null,ref_6310,key_6305);


var G__6311 = seq__6259_6306;
var G__6312 = chunk__6260_6307;
var G__6313 = count__6261_6308;
var G__6314 = (i__6262_6309 + (1));
seq__6259_6306 = G__6311;
chunk__6260_6307 = G__6312;
count__6261_6308 = G__6313;
i__6262_6309 = G__6314;
continue;
} else {
var temp__5457__auto___6315 = cljs.core.seq.call(null,seq__6259_6306);
if(temp__5457__auto___6315){
var seq__6259_6316__$1 = temp__5457__auto___6315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6259_6316__$1)){
var c__4351__auto___6317 = cljs.core.chunk_first.call(null,seq__6259_6316__$1);
var G__6318 = cljs.core.chunk_rest.call(null,seq__6259_6316__$1);
var G__6319 = c__4351__auto___6317;
var G__6320 = cljs.core.count.call(null,c__4351__auto___6317);
var G__6321 = (0);
seq__6259_6306 = G__6318;
chunk__6260_6307 = G__6319;
count__6261_6308 = G__6320;
i__6262_6309 = G__6321;
continue;
} else {
var ref_6322 = cljs.core.first.call(null,seq__6259_6316__$1);
cljs.core.remove_watch.call(null,ref_6322,key_6305);


var G__6323 = cljs.core.next.call(null,seq__6259_6316__$1);
var G__6324 = null;
var G__6325 = (0);
var G__6326 = (0);
seq__6259_6306 = G__6323;
chunk__6260_6307 = G__6324;
count__6261_6308 = G__6325;
i__6262_6309 = G__6326;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6333 = arguments.length;
var i__4532__auto___6334 = (0);
while(true){
if((i__4532__auto___6334 < len__4531__auto___6333)){
args__4534__auto__.push((arguments[i__4532__auto___6334]));

var G__6335 = (i__4532__auto___6334 + (1));
i__4532__auto___6334 = G__6335;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__6330){
var map__6331 = p__6330;
var map__6331__$1 = ((((!((map__6331 == null)))?(((((map__6331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6331):map__6331);
var options = map__6331__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq6327){
var G__6328 = cljs.core.first.call(null,seq6327);
var seq6327__$1 = cljs.core.next.call(null,seq6327);
var G__6329 = cljs.core.first.call(null,seq6327__$1);
var seq6327__$2 = cljs.core.next.call(null,seq6327__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6328,G__6329,seq6327__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6339 = arguments.length;
var i__4532__auto___6340 = (0);
while(true){
if((i__4532__auto___6340 < len__4531__auto___6339)){
args__4534__auto__.push((arguments[i__4532__auto___6340]));

var G__6341 = (i__4532__auto___6340 + (1));
i__4532__auto___6340 = G__6341;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq6336){
var G__6337 = cljs.core.first.call(null,seq6336);
var seq6336__$1 = cljs.core.next.call(null,seq6336);
var G__6338 = cljs.core.first.call(null,seq6336__$1);
var seq6336__$2 = cljs.core.next.call(null,seq6336__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6337,G__6338,seq6336__$2);
});

