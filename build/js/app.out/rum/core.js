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
return (function (p1__5829_SHARP_,p2__5828_SHARP_){
return p2__5828_SHARP_.call(null,p1__5829_SHARP_);
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
return (function (p1__5831_SHARP_,p2__5830_SHARP_){
return p2__5830_SHARP_.call(null,old_state,p1__5831_SHARP_);
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
return (function (p1__5832_SHARP_){
return p1__5832_SHARP_.call(null,old_state,new_state);
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
var vec__5834 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__5834,(0),null);
var next_state = cljs.core.nth.call(null,vec__5834,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__5833_SHARP_){
return p1__5833_SHARP_.call(null,state);
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
var G__5837__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__5837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5838__i = 0, G__5838__a = new Array(arguments.length -  0);
while (G__5838__i < G__5838__a.length) {G__5838__a[G__5838__i] = arguments[G__5838__i + 0]; ++G__5838__i;}
  args = new cljs.core.IndexedSeq(G__5838__a,0,null);
} 
return G__5837__delegate.call(this,args);};
G__5837.cljs$lang$maxFixedArity = 0;
G__5837.cljs$lang$applyTo = (function (arglist__5839){
var args = cljs.core.seq(arglist__5839);
return G__5837__delegate(args);
});
G__5837.cljs$core$IFn$_invoke$arity$variadic = G__5837__delegate;
return G__5837;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__5840__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__5840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5841__i = 0, G__5841__a = new Array(arguments.length -  0);
while (G__5841__i < G__5841__a.length) {G__5841__a[G__5841__i] = arguments[G__5841__i + 0]; ++G__5841__i;}
  args = new cljs.core.IndexedSeq(G__5841__a,0,null);
} 
return G__5840__delegate.call(this,args);};
G__5840.cljs$lang$maxFixedArity = 0;
G__5840.cljs$lang$applyTo = (function (arglist__5842){
var args = cljs.core.seq(arglist__5842);
return G__5840__delegate(args);
});
G__5840.cljs$core$IFn$_invoke$arity$variadic = G__5840__delegate;
return G__5840;
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
var G__5843__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__5843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5844__i = 0, G__5844__a = new Array(arguments.length -  0);
while (G__5844__i < G__5844__a.length) {G__5844__a[G__5844__i] = arguments[G__5844__i + 0]; ++G__5844__i;}
  args = new cljs.core.IndexedSeq(G__5844__a,0,null);
} 
return G__5843__delegate.call(this,args);};
G__5843.cljs$lang$maxFixedArity = 0;
G__5843.cljs$lang$applyTo = (function (arglist__5845){
var args = cljs.core.seq(arglist__5845);
return G__5843__delegate(args);
});
G__5843.cljs$core$IFn$_invoke$arity$variadic = G__5843__delegate;
return G__5843;
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
return (function (p1__5846_SHARP_){
return setTimeout(p1__5846_SHARP_,(16));
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
var seq__5847 = cljs.core.seq.call(null,queue);
var chunk__5849 = null;
var count__5850 = (0);
var i__5851 = (0);
while(true){
if((i__5851 < count__5850)){
var comp = cljs.core._nth.call(null,chunk__5849,i__5851);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__5853 = seq__5847;
var G__5854 = chunk__5849;
var G__5855 = count__5850;
var G__5856 = (i__5851 + (1));
seq__5847 = G__5853;
chunk__5849 = G__5854;
count__5850 = G__5855;
i__5851 = G__5856;
continue;
} else {
var G__5857 = seq__5847;
var G__5858 = chunk__5849;
var G__5859 = count__5850;
var G__5860 = (i__5851 + (1));
seq__5847 = G__5857;
chunk__5849 = G__5858;
count__5850 = G__5859;
i__5851 = G__5860;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__5847);
if(temp__5457__auto__){
var seq__5847__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5847__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__5847__$1);
var G__5861 = cljs.core.chunk_rest.call(null,seq__5847__$1);
var G__5862 = c__4351__auto__;
var G__5863 = cljs.core.count.call(null,c__4351__auto__);
var G__5864 = (0);
seq__5847 = G__5861;
chunk__5849 = G__5862;
count__5850 = G__5863;
i__5851 = G__5864;
continue;
} else {
var comp = cljs.core.first.call(null,seq__5847__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__5865 = cljs.core.next.call(null,seq__5847__$1);
var G__5866 = null;
var G__5867 = (0);
var G__5868 = (0);
seq__5847 = G__5865;
chunk__5849 = G__5866;
count__5850 = G__5867;
i__5851 = G__5868;
continue;
} else {
var G__5869 = cljs.core.next.call(null,seq__5847__$1);
var G__5870 = null;
var G__5871 = (0);
var G__5872 = (0);
seq__5847 = G__5869;
chunk__5849 = G__5870;
count__5850 = G__5871;
i__5851 = G__5872;
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
var G__5874 = arguments.length;
switch (G__5874) {
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
var _STAR_reactions_STAR_5876 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__5877 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__5877,(0),null);
var next_state = cljs.core.nth.call(null,vec__5877,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__5880_5892 = cljs.core.seq.call(null,old_reactions);
var chunk__5881_5893 = null;
var count__5882_5894 = (0);
var i__5883_5895 = (0);
while(true){
if((i__5883_5895 < count__5882_5894)){
var ref_5896 = cljs.core._nth.call(null,chunk__5881_5893,i__5883_5895);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_5896)){
} else {
cljs.core.remove_watch.call(null,ref_5896,key);
}


var G__5897 = seq__5880_5892;
var G__5898 = chunk__5881_5893;
var G__5899 = count__5882_5894;
var G__5900 = (i__5883_5895 + (1));
seq__5880_5892 = G__5897;
chunk__5881_5893 = G__5898;
count__5882_5894 = G__5899;
i__5883_5895 = G__5900;
continue;
} else {
var temp__5457__auto___5901 = cljs.core.seq.call(null,seq__5880_5892);
if(temp__5457__auto___5901){
var seq__5880_5902__$1 = temp__5457__auto___5901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5880_5902__$1)){
var c__4351__auto___5903 = cljs.core.chunk_first.call(null,seq__5880_5902__$1);
var G__5904 = cljs.core.chunk_rest.call(null,seq__5880_5902__$1);
var G__5905 = c__4351__auto___5903;
var G__5906 = cljs.core.count.call(null,c__4351__auto___5903);
var G__5907 = (0);
seq__5880_5892 = G__5904;
chunk__5881_5893 = G__5905;
count__5882_5894 = G__5906;
i__5883_5895 = G__5907;
continue;
} else {
var ref_5908 = cljs.core.first.call(null,seq__5880_5902__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_5908)){
} else {
cljs.core.remove_watch.call(null,ref_5908,key);
}


var G__5909 = cljs.core.next.call(null,seq__5880_5902__$1);
var G__5910 = null;
var G__5911 = (0);
var G__5912 = (0);
seq__5880_5892 = G__5909;
chunk__5881_5893 = G__5910;
count__5882_5894 = G__5911;
i__5883_5895 = G__5912;
continue;
}
} else {
}
}
break;
}

var seq__5884_5913 = cljs.core.seq.call(null,new_reactions);
var chunk__5885_5914 = null;
var count__5886_5915 = (0);
var i__5887_5916 = (0);
while(true){
if((i__5887_5916 < count__5886_5915)){
var ref_5917 = cljs.core._nth.call(null,chunk__5885_5914,i__5887_5916);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_5917)){
} else {
cljs.core.add_watch.call(null,ref_5917,key,((function (seq__5884_5913,chunk__5885_5914,count__5886_5915,i__5887_5916,ref_5917,comp,old_reactions,vec__5877,dom,next_state,new_reactions,key,_STAR_reactions_STAR_5876){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__5884_5913,chunk__5885_5914,count__5886_5915,i__5887_5916,ref_5917,comp,old_reactions,vec__5877,dom,next_state,new_reactions,key,_STAR_reactions_STAR_5876))
);
}


var G__5918 = seq__5884_5913;
var G__5919 = chunk__5885_5914;
var G__5920 = count__5886_5915;
var G__5921 = (i__5887_5916 + (1));
seq__5884_5913 = G__5918;
chunk__5885_5914 = G__5919;
count__5886_5915 = G__5920;
i__5887_5916 = G__5921;
continue;
} else {
var temp__5457__auto___5922 = cljs.core.seq.call(null,seq__5884_5913);
if(temp__5457__auto___5922){
var seq__5884_5923__$1 = temp__5457__auto___5922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5884_5923__$1)){
var c__4351__auto___5924 = cljs.core.chunk_first.call(null,seq__5884_5923__$1);
var G__5925 = cljs.core.chunk_rest.call(null,seq__5884_5923__$1);
var G__5926 = c__4351__auto___5924;
var G__5927 = cljs.core.count.call(null,c__4351__auto___5924);
var G__5928 = (0);
seq__5884_5913 = G__5925;
chunk__5885_5914 = G__5926;
count__5886_5915 = G__5927;
i__5887_5916 = G__5928;
continue;
} else {
var ref_5929 = cljs.core.first.call(null,seq__5884_5923__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_5929)){
} else {
cljs.core.add_watch.call(null,ref_5929,key,((function (seq__5884_5913,chunk__5885_5914,count__5886_5915,i__5887_5916,ref_5929,seq__5884_5923__$1,temp__5457__auto___5922,comp,old_reactions,vec__5877,dom,next_state,new_reactions,key,_STAR_reactions_STAR_5876){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__5884_5913,chunk__5885_5914,count__5886_5915,i__5887_5916,ref_5929,seq__5884_5923__$1,temp__5457__auto___5922,comp,old_reactions,vec__5877,dom,next_state,new_reactions,key,_STAR_reactions_STAR_5876))
);
}


var G__5930 = cljs.core.next.call(null,seq__5884_5923__$1);
var G__5931 = null;
var G__5932 = (0);
var G__5933 = (0);
seq__5884_5913 = G__5930;
chunk__5885_5914 = G__5931;
count__5886_5915 = G__5932;
i__5887_5916 = G__5933;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_5876;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_5934 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__5888_5935 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__5889_5936 = null;
var count__5890_5937 = (0);
var i__5891_5938 = (0);
while(true){
if((i__5891_5938 < count__5890_5937)){
var ref_5939 = cljs.core._nth.call(null,chunk__5889_5936,i__5891_5938);
cljs.core.remove_watch.call(null,ref_5939,key_5934);


var G__5940 = seq__5888_5935;
var G__5941 = chunk__5889_5936;
var G__5942 = count__5890_5937;
var G__5943 = (i__5891_5938 + (1));
seq__5888_5935 = G__5940;
chunk__5889_5936 = G__5941;
count__5890_5937 = G__5942;
i__5891_5938 = G__5943;
continue;
} else {
var temp__5457__auto___5944 = cljs.core.seq.call(null,seq__5888_5935);
if(temp__5457__auto___5944){
var seq__5888_5945__$1 = temp__5457__auto___5944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5888_5945__$1)){
var c__4351__auto___5946 = cljs.core.chunk_first.call(null,seq__5888_5945__$1);
var G__5947 = cljs.core.chunk_rest.call(null,seq__5888_5945__$1);
var G__5948 = c__4351__auto___5946;
var G__5949 = cljs.core.count.call(null,c__4351__auto___5946);
var G__5950 = (0);
seq__5888_5935 = G__5947;
chunk__5889_5936 = G__5948;
count__5890_5937 = G__5949;
i__5891_5938 = G__5950;
continue;
} else {
var ref_5951 = cljs.core.first.call(null,seq__5888_5945__$1);
cljs.core.remove_watch.call(null,ref_5951,key_5934);


var G__5952 = cljs.core.next.call(null,seq__5888_5945__$1);
var G__5953 = null;
var G__5954 = (0);
var G__5955 = (0);
seq__5888_5935 = G__5952;
chunk__5889_5936 = G__5953;
count__5890_5937 = G__5954;
i__5891_5938 = G__5955;
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
var len__4531__auto___5962 = arguments.length;
var i__4532__auto___5963 = (0);
while(true){
if((i__4532__auto___5963 < len__4531__auto___5962)){
args__4534__auto__.push((arguments[i__4532__auto___5963]));

var G__5964 = (i__4532__auto___5963 + (1));
i__4532__auto___5963 = G__5964;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__5959){
var map__5960 = p__5959;
var map__5960__$1 = ((((!((map__5960 == null)))?(((((map__5960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5960):map__5960);
var options = map__5960__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq5956){
var G__5957 = cljs.core.first.call(null,seq5956);
var seq5956__$1 = cljs.core.next.call(null,seq5956);
var G__5958 = cljs.core.first.call(null,seq5956__$1);
var seq5956__$2 = cljs.core.next.call(null,seq5956__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5957,G__5958,seq5956__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5968 = arguments.length;
var i__4532__auto___5969 = (0);
while(true){
if((i__4532__auto___5969 < len__4531__auto___5968)){
args__4534__auto__.push((arguments[i__4532__auto___5969]));

var G__5970 = (i__4532__auto___5969 + (1));
i__4532__auto___5969 = G__5970;
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
rum.core.cursor.cljs$lang$applyTo = (function (seq5965){
var G__5966 = cljs.core.first.call(null,seq5965);
var seq5965__$1 = cljs.core.next.call(null,seq5965);
var G__5967 = cljs.core.first.call(null,seq5965__$1);
var seq5965__$2 = cljs.core.next.call(null,seq5965__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5966,G__5967,seq5965__$2);
});

