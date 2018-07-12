// Compiled by ClojureScript 1.10.339 {}
goog.provide('com.stuartsierra.dependency');
goog.require('cljs.core');
goog.require('clojure.set');

/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraph = function(){};

/**
 * Returns the set of immediate dependencies of node.
 */
com.stuartsierra.dependency.immediate_dependencies = (function com$stuartsierra$dependency$immediate_dependencies(graph,node){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.immediate_dependencies[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.immediate_dependencies["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependencies",graph);
}
}
}
});

/**
 * Returns the set of immediate dependents of node.
 */
com.stuartsierra.dependency.immediate_dependents = (function com$stuartsierra$dependency$immediate_dependents(graph,node){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.immediate_dependents[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.immediate_dependents["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependents",graph);
}
}
}
});

/**
 * Returns the set of all things which node depends on, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependencies = (function com$stuartsierra$dependency$transitive_dependencies(graph,node){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.transitive_dependencies[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.transitive_dependencies["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependencies",graph);
}
}
}
});

/**
 * Returns the set of all things which any node in node-set depends
 *  on, directly or transitively.
 */
com.stuartsierra.dependency.transitive_dependencies_set = (function com$stuartsierra$dependency$transitive_dependencies_set(graph,node_set){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2(graph,node_set);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.transitive_dependencies_set[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node_set);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.transitive_dependencies_set["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node_set);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependencies-set",graph);
}
}
}
});

/**
 * Returns the set of all things which depend upon node, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependents = (function com$stuartsierra$dependency$transitive_dependents(graph,node){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.transitive_dependents[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.transitive_dependents["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependents",graph);
}
}
}
});

/**
 * Returns the set of all things which depend upon any node in
 *  node-set, directly or transitively.
 */
com.stuartsierra.dependency.transitive_dependents_set = (function com$stuartsierra$dependency$transitive_dependents_set(graph,node_set){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents_set$arity$2 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents_set$arity$2(graph,node_set);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.transitive_dependents_set[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node_set);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.transitive_dependents_set["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node_set);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependents-set",graph);
}
}
}
});

/**
 * Returns the set of all nodes in graph.
 */
com.stuartsierra.dependency.nodes = (function com$stuartsierra$dependency$nodes(graph){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1(graph);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.nodes[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.nodes["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.nodes",graph);
}
}
}
});


/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraphUpdate = function(){};

/**
 * Returns a new graph with a dependency from node to dep ("node depends
 *  on dep"). Forbids circular dependencies.
 */
com.stuartsierra.dependency.depend = (function com$stuartsierra$dependency$depend(graph,node,dep){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.depend[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node,dep);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.depend["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node,dep);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.depend",graph);
}
}
}
});

/**
 * Returns a new graph with the dependency from node to dep removed.
 */
com.stuartsierra.dependency.remove_edge = (function com$stuartsierra$dependency$remove_edge(graph,node,dep){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.remove_edge[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node,dep);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.remove_edge["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node,dep);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-edge",graph);
}
}
}
});

/**
 * Returns a new dependency graph with all references to node removed.
 */
com.stuartsierra.dependency.remove_all = (function com$stuartsierra$dependency$remove_all(graph,node){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.remove_all[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.remove_all["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-all",graph);
}
}
}
});

/**
 * Removes the node from the dependency graph without removing it as a
 *  dependency of other nodes. That is, removes all outgoing edges from
 *  node.
 */
com.stuartsierra.dependency.remove_node = (function com$stuartsierra$dependency$remove_node(graph,node){
if(((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 == null))))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else {
var x__4243__auto__ = (((graph == null))?null:graph);
var m__4244__auto__ = (com.stuartsierra.dependency.remove_node[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,graph,node);
} else {
var m__4244__auto____$1 = (com.stuartsierra.dependency.remove_node["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-node",graph);
}
}
}
});

com.stuartsierra.dependency.remove_from_map = (function com$stuartsierra$dependency$remove_from_map(amap,x){
return cljs.core.reduce.call(null,(function (m,p__8041){
var vec__8042 = p__8041;
var k = cljs.core.nth.call(null,vec__8042,(0),null);
var vs = cljs.core.nth.call(null,vec__8042,(1),null);
return cljs.core.assoc.call(null,m,k,cljs.core.disj.call(null,vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,amap,x));
});
/**
 * Recursively expands the set of dependency relationships starting
 *   at (get neighbors x), for each x in node-set
 */
com.stuartsierra.dependency.transitive = (function com$stuartsierra$dependency$transitive(neighbors,node_set){
var unexpanded = cljs.core.mapcat.call(null,neighbors,node_set);
var expanded = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5455__auto__ = cljs.core.seq.call(null,unexpanded);
if(temp__5455__auto__){
var vec__8045 = temp__5455__auto__;
var seq__8046 = cljs.core.seq.call(null,vec__8045);
var first__8047 = cljs.core.first.call(null,seq__8046);
var seq__8046__$1 = cljs.core.next.call(null,seq__8046);
var node = first__8047;
var more = seq__8046__$1;
if(cljs.core.contains_QMARK_.call(null,expanded,node)){
var G__8048 = more;
var G__8049 = expanded;
unexpanded = G__8048;
expanded = G__8049;
continue;
} else {
var G__8050 = cljs.core.concat.call(null,more,neighbors.call(null,node));
var G__8051 = cljs.core.conj.call(null,expanded,node);
unexpanded = G__8050;
expanded = G__8051;
continue;
}
} else {
return expanded;
}
break;
}
});
com.stuartsierra.dependency.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.stuartsierra.dependency.DependencyGraph}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {com.stuartsierra.dependency.DependencyGraphUpdate}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.stuartsierra.dependency.MapDependencyGraph = (function (dependencies,dependents,__meta,__extmap,__hash){
this.dependencies = dependencies;
this.dependents = dependents;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k8053,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__8057 = k8053;
var G__8057__$1 = (((G__8057 instanceof cljs.core.Keyword))?G__8057.fqn:null);
switch (G__8057__$1) {
case "dependencies":
return self__.dependencies;

break;
case "dependents":
return self__.dependents;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8053,else__4206__auto__);

}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#com.stuartsierra.dependency.MapDependencyGraph{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents],null))], null),self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8052){
var self__ = this;
var G__8052__$1 = this;
return (new cljs.core.RecordIter((0),G__8052__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,self__.__extmap,self__.__hash));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1526449397 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8054,other8055){
var self__ = this;
var this8054__$1 = this;
return ((!((other8055 == null))) && ((this8054__$1.constructor === other8055.constructor)) && (cljs.core._EQ_.call(null,this8054__$1.dependencies,other8055.dependencies)) && (cljs.core._EQ_.call(null,this8054__$1.dependents,other8055.dependents)) && (cljs.core._EQ_.call(null,this8054__$1.__extmap,other8055.__extmap)));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dependents","dependents",136812837),null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__8052){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__8058 = cljs.core.keyword_identical_QMARK_;
var expr__8059 = k__4211__auto__;
if(cljs.core.truth_(pred__8058.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),expr__8059))){
return (new com.stuartsierra.dependency.MapDependencyGraph(G__8052,self__.dependents,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8058.call(null,new cljs.core.Keyword(null,"dependents","dependents",136812837),expr__8059))){
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,G__8052,self__.__meta,self__.__extmap,null));
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__8052),null));
}
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents,null))], null),self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.call(null,self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.call(null,self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependencies,cljs.core.PersistentHashSet.createAsIfByAssoc([node]));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependencies,node_set);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependents,cljs.core.PersistentHashSet.createAsIfByAssoc([node]));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependents_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependents,node_set);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 = (function (graph){
var self__ = this;
var graph__$1 = this;
return clojure.set.union.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependencies)),cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependents)));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__8052){
var self__ = this;
var this__4202__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,G__8052,self__.__extmap,self__.__hash));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core._EQ_.call(null,node,dep);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return com.stuartsierra.dependency.depends_QMARK_.call(null,graph__$1,dep,node);
}
})())){
throw cljs.core.ex_info.call(null,["Circular dependency between ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dep))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.dependency","circular-dependency","com.stuartsierra.dependency/circular-dependency",1926538656),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"dependency","dependency",1300131203),dep], null));
} else {
}

return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),com.stuartsierra.dependency.set_conj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),com.stuartsierra.dependency.set_conj,node),null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node),null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(com.stuartsierra.dependency.remove_from_map.call(null,self__.dependencies,node),com.stuartsierra.dependency.remove_from_map.call(null,self__.dependents,node),null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.dissoc.call(null,self__.dependencies,node),self__.dependents,null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dependencies","dependencies",-1546371164,null),new cljs.core.Symbol(null,"dependents","dependents",1777344364,null)], null);
});

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$type = true;

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"com.stuartsierra.dependency/MapDependencyGraph",null,(1),null));
});

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"com.stuartsierra.dependency/MapDependencyGraph");
});

/**
 * Positional factory function for com.stuartsierra.dependency/MapDependencyGraph.
 */
com.stuartsierra.dependency.__GT_MapDependencyGraph = (function com$stuartsierra$dependency$__GT_MapDependencyGraph(dependencies,dependents){
return (new com.stuartsierra.dependency.MapDependencyGraph(dependencies,dependents,null,null,null));
});

/**
 * Factory function for com.stuartsierra.dependency/MapDependencyGraph, taking a map of keywords to field values.
 */
com.stuartsierra.dependency.map__GT_MapDependencyGraph = (function com$stuartsierra$dependency$map__GT_MapDependencyGraph(G__8056){
var extmap__4236__auto__ = (function (){var G__8061 = cljs.core.dissoc.call(null,G__8056,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837));
if(cljs.core.record_QMARK_.call(null,G__8056)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8061);
} else {
return G__8061;
}
})();
return (new com.stuartsierra.dependency.MapDependencyGraph(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(G__8056),new cljs.core.Keyword(null,"dependents","dependents",136812837).cljs$core$IFn$_invoke$arity$1(G__8056),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

/**
 * Returns a new, empty, dependency graph.
 */
com.stuartsierra.dependency.graph = (function com$stuartsierra$dependency$graph(){
return com.stuartsierra.dependency.__GT_MapDependencyGraph.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * True if x is directly or transitively dependent on y.
 */
com.stuartsierra.dependency.depends_QMARK_ = (function com$stuartsierra$dependency$depends_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_.call(null,com.stuartsierra.dependency.transitive_dependencies.call(null,graph,x),y);
});
/**
 * True if y is a dependent of x.
 */
com.stuartsierra.dependency.dependent_QMARK_ = (function com$stuartsierra$dependency$dependent_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_.call(null,com.stuartsierra.dependency.transitive_dependents.call(null,graph,x),y);
});
/**
 * Returns a topologically-sorted list of nodes in graph.
 */
com.stuartsierra.dependency.topo_sort = (function com$stuartsierra$dependency$topo_sort(graph){
var sorted = cljs.core.List.EMPTY;
var g = graph;
var todo = cljs.core.set.call(null,cljs.core.filter.call(null,((function (sorted,g){
return (function (p1__8063_SHARP_){
return cljs.core.empty_QMARK_.call(null,com.stuartsierra.dependency.immediate_dependents.call(null,graph,p1__8063_SHARP_));
});})(sorted,g))
,com.stuartsierra.dependency.nodes.call(null,graph)));
while(true){
if(cljs.core.empty_QMARK_.call(null,todo)){
return sorted;
} else {
var vec__8064 = cljs.core.seq.call(null,todo);
var seq__8065 = cljs.core.seq.call(null,vec__8064);
var first__8066 = cljs.core.first.call(null,seq__8065);
var seq__8065__$1 = cljs.core.next.call(null,seq__8065);
var node = first__8066;
var more = seq__8065__$1;
var deps = com.stuartsierra.dependency.immediate_dependencies.call(null,g,node);
var vec__8067 = (function (){var deps__$1 = deps;
var g__$1 = g;
var add = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,deps__$1)){
var d = cljs.core.first.call(null,deps__$1);
var g_SINGLEQUOTE_ = com.stuartsierra.dependency.remove_edge.call(null,g__$1,node,d);
if(cljs.core.empty_QMARK_.call(null,com.stuartsierra.dependency.immediate_dependents.call(null,g_SINGLEQUOTE_,d))){
var G__8070 = cljs.core.rest.call(null,deps__$1);
var G__8071 = g_SINGLEQUOTE_;
var G__8072 = cljs.core.conj.call(null,add,d);
deps__$1 = G__8070;
g__$1 = G__8071;
add = G__8072;
continue;
} else {
var G__8073 = cljs.core.rest.call(null,deps__$1);
var G__8074 = g_SINGLEQUOTE_;
var G__8075 = add;
deps__$1 = G__8073;
g__$1 = G__8074;
add = G__8075;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();
var add = cljs.core.nth.call(null,vec__8067,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8067,(1),null);
var G__8076 = cljs.core.cons.call(null,node,sorted);
var G__8077 = com.stuartsierra.dependency.remove_node.call(null,g_SINGLEQUOTE_,node);
var G__8078 = clojure.set.union.call(null,cljs.core.set.call(null,more),cljs.core.set.call(null,add));
sorted = G__8076;
g = G__8077;
todo = G__8078;
continue;
}
break;
}
});
com.stuartsierra.dependency.max_number = Number.MAX_VALUE;
/**
 * Returns a comparator fn which produces a topological sort based on
 *   the dependencies in graph. Nodes not present in the graph will sort
 *   after nodes in the graph.
 */
com.stuartsierra.dependency.topo_comparator = (function com$stuartsierra$dependency$topo_comparator(graph){
var pos = cljs.core.zipmap.call(null,com.stuartsierra.dependency.topo_sort.call(null,graph),cljs.core.range.call(null));
return ((function (pos){
return (function (a,b){
return cljs.core.compare.call(null,cljs.core.get.call(null,pos,a,com.stuartsierra.dependency.max_number),cljs.core.get.call(null,pos,b,com.stuartsierra.dependency.max_number));
});
;})(pos))
});
