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
return (function (p1__5831_SHARP_,p2__5830_SHARP_){
return p2__5830_SHARP_.call(null,p1__5831_SHARP_);
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
return (function (p1__5833_SHARP_,p2__5832_SHARP_){
return p2__5832_SHARP_.call(null,old_state,p1__5833_SHARP_);
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
return (function (p1__5834_SHARP_){
return p1__5834_SHARP_.call(null,old_state,new_state);
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
var vec__5836 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__5836,(0),null);
var next_state = cljs.core.nth.call(null,vec__5836,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__5835_SHARP_){
return p1__5835_SHARP_.call(null,state);
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
var G__5839__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__5839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5840__i = 0, G__5840__a = new Array(arguments.length -  0);
while (G__5840__i < G__5840__a.length) {G__5840__a[G__5840__i] = arguments[G__5840__i + 0]; ++G__5840__i;}
  args = new cljs.core.IndexedSeq(G__5840__a,0,null);
} 
return G__5839__delegate.call(this,args);};
G__5839.cljs$lang$maxFixedArity = 0;
G__5839.cljs$lang$applyTo = (function (arglist__5841){
var args = cljs.core.seq(arglist__5841);
return G__5839__delegate(args);
});
G__5839.cljs$core$IFn$_invoke$arity$variadic = G__5839__delegate;
return G__5839;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__5842__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__5842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5843__i = 0, G__5843__a = new Array(arguments.length -  0);
while (G__5843__i < G__5843__a.length) {G__5843__a[G__5843__i] = arguments[G__5843__i + 0]; ++G__5843__i;}
  args = new cljs.core.IndexedSeq(G__5843__a,0,null);
} 
return G__5842__delegate.call(this,args);};
G__5842.cljs$lang$maxFixedArity = 0;
G__5842.cljs$lang$applyTo = (function (arglist__5844){
var args = cljs.core.seq(arglist__5844);
return G__5842__delegate(args);
});
G__5842.cljs$core$IFn$_invoke$arity$variadic = G__5842__delegate;
return G__5842;
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
var G__5845__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__5845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5846__i = 0, G__5846__a = new Array(arguments.length -  0);
while (G__5846__i < G__5846__a.length) {G__5846__a[G__5846__i] = arguments[G__5846__i + 0]; ++G__5846__i;}
  args = new cljs.core.IndexedSeq(G__5846__a,0,null);
} 
return G__5845__delegate.call(this,args);};
G__5845.cljs$lang$maxFixedArity = 0;
G__5845.cljs$lang$applyTo = (function (arglist__5847){
var args = cljs.core.seq(arglist__5847);
return G__5845__delegate(args);
});
G__5845.cljs$core$IFn$_invoke$arity$variadic = G__5845__delegate;
return G__5845;
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
return (function (p1__5848_SHARP_){
return setTimeout(p1__5848_SHARP_,(16));
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
var seq__5849 = cljs.core.seq.call(null,queue);
var chunk__5851 = null;
var count__5852 = (0);
var i__5853 = (0);
while(true){
if((i__5853 < count__5852)){
var comp = cljs.core._nth.call(null,chunk__5851,i__5853);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__5855 = seq__5849;
var G__5856 = chunk__5851;
var G__5857 = count__5852;
var G__5858 = (i__5853 + (1));
seq__5849 = G__5855;
chunk__5851 = G__5856;
count__5852 = G__5857;
i__5853 = G__5858;
continue;
} else {
var G__5859 = seq__5849;
var G__5860 = chunk__5851;
var G__5861 = count__5852;
var G__5862 = (i__5853 + (1));
seq__5849 = G__5859;
chunk__5851 = G__5860;
count__5852 = G__5861;
i__5853 = G__5862;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__5849);
if(temp__5457__auto__){
var seq__5849__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5849__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__5849__$1);
var G__5863 = cljs.core.chunk_rest.call(null,seq__5849__$1);
var G__5864 = c__4351__auto__;
var G__5865 = cljs.core.count.call(null,c__4351__auto__);
var G__5866 = (0);
seq__5849 = G__5863;
chunk__5851 = G__5864;
count__5852 = G__5865;
i__5853 = G__5866;
continue;
} else {
var comp = cljs.core.first.call(null,seq__5849__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__5867 = cljs.core.next.call(null,seq__5849__$1);
var G__5868 = null;
var G__5869 = (0);
var G__5870 = (0);
seq__5849 = G__5867;
chunk__5851 = G__5868;
count__5852 = G__5869;
i__5853 = G__5870;
continue;
} else {
var G__5871 = cljs.core.next.call(null,seq__5849__$1);
var G__5872 = null;
var G__5873 = (0);
var G__5874 = (0);
seq__5849 = G__5871;
chunk__5851 = G__5872;
count__5852 = G__5873;
i__5853 = G__5874;
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
var G__5876 = arguments.length;
switch (G__5876) {
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
var _STAR_reactions_STAR_5878 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__5879 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__5879,(0),null);
var next_state = cljs.core.nth.call(null,vec__5879,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__5882_5894 = cljs.core.seq.call(null,old_reactions);
var chunk__5883_5895 = null;
var count__5884_5896 = (0);
var i__5885_5897 = (0);
while(true){
if((i__5885_5897 < count__5884_5896)){
var ref_5898 = cljs.core._nth.call(null,chunk__5883_5895,i__5885_5897);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_5898)){
} else {
cljs.core.remove_watch.call(null,ref_5898,key);
}


var G__5899 = seq__5882_5894;
var G__5900 = chunk__5883_5895;
var G__5901 = count__5884_5896;
var G__5902 = (i__5885_5897 + (1));
seq__5882_5894 = G__5899;
chunk__5883_5895 = G__5900;
count__5884_5896 = G__5901;
i__5885_5897 = G__5902;
continue;
} else {
var temp__5457__auto___5903 = cljs.core.seq.call(null,seq__5882_5894);
if(temp__5457__auto___5903){
var seq__5882_5904__$1 = temp__5457__auto___5903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5882_5904__$1)){
var c__4351__auto___5905 = cljs.core.chunk_first.call(null,seq__5882_5904__$1);
var G__5906 = cljs.core.chunk_rest.call(null,seq__5882_5904__$1);
var G__5907 = c__4351__auto___5905;
var G__5908 = cljs.core.count.call(null,c__4351__auto___5905);
var G__5909 = (0);
seq__5882_5894 = G__5906;
chunk__5883_5895 = G__5907;
count__5884_5896 = G__5908;
i__5885_5897 = G__5909;
continue;
} else {
var ref_5910 = cljs.core.first.call(null,seq__5882_5904__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_5910)){
} else {
cljs.core.remove_watch.call(null,ref_5910,key);
}


var G__5911 = cljs.core.next.call(null,seq__5882_5904__$1);
var G__5912 = null;
var G__5913 = (0);
var G__5914 = (0);
seq__5882_5894 = G__5911;
chunk__5883_5895 = G__5912;
count__5884_5896 = G__5913;
i__5885_5897 = G__5914;
continue;
}
} else {
}
}
break;
}

var seq__5886_5915 = cljs.core.seq.call(null,new_reactions);
var chunk__5887_5916 = null;
var count__5888_5917 = (0);
var i__5889_5918 = (0);
while(true){
if((i__5889_5918 < count__5888_5917)){
var ref_5919 = cljs.core._nth.call(null,chunk__5887_5916,i__5889_5918);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_5919)){
} else {
cljs.core.add_watch.call(null,ref_5919,key,((function (seq__5886_5915,chunk__5887_5916,count__5888_5917,i__5889_5918,ref_5919,comp,old_reactions,vec__5879,dom,next_state,new_reactions,key,_STAR_reactions_STAR_5878){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__5886_5915,chunk__5887_5916,count__5888_5917,i__5889_5918,ref_5919,comp,old_reactions,vec__5879,dom,next_state,new_reactions,key,_STAR_reactions_STAR_5878))
);
}


var G__5920 = seq__5886_5915;
var G__5921 = chunk__5887_5916;
var G__5922 = count__5888_5917;
var G__5923 = (i__5889_5918 + (1));
seq__5886_5915 = G__5920;
chunk__5887_5916 = G__5921;
count__5888_5917 = G__5922;
i__5889_5918 = G__5923;
continue;
} else {
var temp__5457__auto___5924 = cljs.core.seq.call(null,seq__5886_5915);
if(temp__5457__auto___5924){
var seq__5886_5925__$1 = temp__5457__auto___5924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5886_5925__$1)){
var c__4351__auto___5926 = cljs.core.chunk_first.call(null,seq__5886_5925__$1);
var G__5927 = cljs.core.chunk_rest.call(null,seq__5886_5925__$1);
var G__5928 = c__4351__auto___5926;
var G__5929 = cljs.core.count.call(null,c__4351__auto___5926);
var G__5930 = (0);
seq__5886_5915 = G__5927;
chunk__5887_5916 = G__5928;
count__5888_5917 = G__5929;
i__5889_5918 = G__5930;
continue;
} else {
var ref_5931 = cljs.core.first.call(null,seq__5886_5925__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_5931)){
} else {
cljs.core.add_watch.call(null,ref_5931,key,((function (seq__5886_5915,chunk__5887_5916,count__5888_5917,i__5889_5918,ref_5931,seq__5886_5925__$1,temp__5457__auto___5924,comp,old_reactions,vec__5879,dom,next_state,new_reactions,key,_STAR_reactions_STAR_5878){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__5886_5915,chunk__5887_5916,count__5888_5917,i__5889_5918,ref_5931,seq__5886_5925__$1,temp__5457__auto___5924,comp,old_reactions,vec__5879,dom,next_state,new_reactions,key,_STAR_reactions_STAR_5878))
);
}


var G__5932 = cljs.core.next.call(null,seq__5886_5925__$1);
var G__5933 = null;
var G__5934 = (0);
var G__5935 = (0);
seq__5886_5915 = G__5932;
chunk__5887_5916 = G__5933;
count__5888_5917 = G__5934;
i__5889_5918 = G__5935;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_5878;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_5936 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__5890_5937 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__5891_5938 = null;
var count__5892_5939 = (0);
var i__5893_5940 = (0);
while(true){
if((i__5893_5940 < count__5892_5939)){
var ref_5941 = cljs.core._nth.call(null,chunk__5891_5938,i__5893_5940);
cljs.core.remove_watch.call(null,ref_5941,key_5936);


var G__5942 = seq__5890_5937;
var G__5943 = chunk__5891_5938;
var G__5944 = count__5892_5939;
var G__5945 = (i__5893_5940 + (1));
seq__5890_5937 = G__5942;
chunk__5891_5938 = G__5943;
count__5892_5939 = G__5944;
i__5893_5940 = G__5945;
continue;
} else {
var temp__5457__auto___5946 = cljs.core.seq.call(null,seq__5890_5937);
if(temp__5457__auto___5946){
var seq__5890_5947__$1 = temp__5457__auto___5946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5890_5947__$1)){
var c__4351__auto___5948 = cljs.core.chunk_first.call(null,seq__5890_5947__$1);
var G__5949 = cljs.core.chunk_rest.call(null,seq__5890_5947__$1);
var G__5950 = c__4351__auto___5948;
var G__5951 = cljs.core.count.call(null,c__4351__auto___5948);
var G__5952 = (0);
seq__5890_5937 = G__5949;
chunk__5891_5938 = G__5950;
count__5892_5939 = G__5951;
i__5893_5940 = G__5952;
continue;
} else {
var ref_5953 = cljs.core.first.call(null,seq__5890_5947__$1);
cljs.core.remove_watch.call(null,ref_5953,key_5936);


var G__5954 = cljs.core.next.call(null,seq__5890_5947__$1);
var G__5955 = null;
var G__5956 = (0);
var G__5957 = (0);
seq__5890_5937 = G__5954;
chunk__5891_5938 = G__5955;
count__5892_5939 = G__5956;
i__5893_5940 = G__5957;
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
var len__4531__auto___5964 = arguments.length;
var i__4532__auto___5965 = (0);
while(true){
if((i__4532__auto___5965 < len__4531__auto___5964)){
args__4534__auto__.push((arguments[i__4532__auto___5965]));

var G__5966 = (i__4532__auto___5965 + (1));
i__4532__auto___5965 = G__5966;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__5961){
var map__5962 = p__5961;
var map__5962__$1 = ((((!((map__5962 == null)))?(((((map__5962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5962):map__5962);
var options = map__5962__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq5958){
var G__5959 = cljs.core.first.call(null,seq5958);
var seq5958__$1 = cljs.core.next.call(null,seq5958);
var G__5960 = cljs.core.first.call(null,seq5958__$1);
var seq5958__$2 = cljs.core.next.call(null,seq5958__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5959,G__5960,seq5958__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5970 = arguments.length;
var i__4532__auto___5971 = (0);
while(true){
if((i__4532__auto___5971 < len__4531__auto___5970)){
args__4534__auto__.push((arguments[i__4532__auto___5971]));

var G__5972 = (i__4532__auto___5971 + (1));
i__4532__auto___5971 = G__5972;
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
rum.core.cursor.cljs$lang$applyTo = (function (seq5967){
var G__5968 = cljs.core.first.call(null,seq5967);
var seq5967__$1 = cljs.core.next.call(null,seq5967);
var G__5969 = cljs.core.first.call(null,seq5967__$1);
var seq5967__$2 = cljs.core.next.call(null,seq5967__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5968,G__5969,seq5967__$2);
});

