// Compiled by ClojureScript 1.10.339 {}
goog.provide('impi.core');
goog.require('cljs.core');
impi.core.update_count = (function impi$core$update_count(child,f){
return child.impiCount = f.call(null,child.impiCount);
});
impi.core.replace_child = (function impi$core$replace_child(container,child,i){
var old_child = (container.children[i]);
if((child === old_child)){
return null;
} else {
(container.children[i] = child);

impi.core.update_count.call(null,old_child,cljs.core.fnil.call(null,cljs.core.dec,(1)));

impi.core.update_count.call(null,child,cljs.core.fnil.call(null,cljs.core.inc,(0)));

return old_child;
}
});
impi.core.append_child = (function impi$core$append_child(container,child){
container.children.push(child);

return impi.core.update_count.call(null,child,cljs.core.fnil.call(null,cljs.core.inc,(0)));
});
impi.core.overwrite_children = (function impi$core$overwrite_children(container,children){
var length = container.children.length;
var i = (0);
var children__$1 = children;
var replaced = cljs.core.List.EMPTY;
while(true){
if(cljs.core.seq.call(null,children__$1)){
var child = cljs.core.first.call(null,children__$1);
if((i < length)){
var temp__5455__auto__ = impi.core.replace_child.call(null,container,child,i);
if(cljs.core.truth_(temp__5455__auto__)){
var old_child = temp__5455__auto__;
var G__6445 = (i + (1));
var G__6446 = cljs.core.rest.call(null,children__$1);
var G__6447 = cljs.core.cons.call(null,old_child,replaced);
i = G__6445;
children__$1 = G__6446;
replaced = G__6447;
continue;
} else {
var G__6448 = (i + (1));
var G__6449 = cljs.core.rest.call(null,children__$1);
var G__6450 = replaced;
i = G__6448;
children__$1 = G__6449;
replaced = G__6450;
continue;
}
} else {
impi.core.append_child.call(null,container,child);

var G__6451 = (i + (1));
var G__6452 = cljs.core.rest.call(null,children__$1);
var G__6453 = replaced;
i = G__6451;
children__$1 = G__6452;
replaced = G__6453;
continue;
}
} else {
return replaced;
}
break;
}
});
impi.core.trim_children = (function impi$core$trim_children(container,index){
var children = container.children;
if((index < children.length)){
var removed = children.slice(index);
children.splice(index);

return removed;
} else {
return null;
}
});
impi.core.set_parent = (function impi$core$set_parent(child,parent){
child.parent = parent;

return delete child["impiCount"];
});
impi.core.clear_parent = (function impi$core$clear_parent(child){
if((child.impiCount === (0))){
return impi.core.set_parent.call(null,child,null);
} else {
return null;
}
});
impi.core.replace_children = (function impi$core$replace_children(container,children){
var length = container.children.length;
var replaced = impi.core.overwrite_children.call(null,container,children);
var removed = impi.core.trim_children.call(null,container,cljs.core.count.call(null,children));
var changed_QMARK_ = ((cljs.core.seq.call(null,replaced)) || (cljs.core.not_EQ_.call(null,length,container.children.length)));
if(changed_QMARK_){
cljs.core.run_BANG_.call(null,impi.core.clear_parent,replaced);

cljs.core.run_BANG_.call(null,impi.core.clear_parent,removed);

return cljs.core.run_BANG_.call(null,((function (length,replaced,removed,changed_QMARK_){
return (function (p1__6454_SHARP_){
return impi.core.set_parent.call(null,p1__6454_SHARP_,container);
});})(length,replaced,removed,changed_QMARK_))
,container.children);
} else {
return null;
}
});
impi.core.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.replace_listener = (function impi$core$replace_listener(object,event,index,p__6456){
var vec__6457 = p__6456;
var seq__6458 = cljs.core.seq.call(null,vec__6457);
var first__6459 = cljs.core.first.call(null,seq__6458);
var seq__6458__$1 = cljs.core.next.call(null,seq__6458);
var key = first__6459;
var args = seq__6458__$1;
var listener = cljs.core.deref.call(null,impi.core.listeners).call(null,cljs.core.first.call(null,index)).call(null,key);
var G__6460 = object;
G__6460.removeAllListeners(event);

G__6460.on(event,((function (G__6460,listener,vec__6457,seq__6458,first__6459,seq__6458__$1,key,args){
return (function (p1__6455_SHARP_){
return cljs.core.apply.call(null,listener,p1__6455_SHARP_,args);
});})(G__6460,listener,vec__6457,seq__6458,first__6459,seq__6458__$1,key,args))
);

return G__6460;
});
impi.core.rectangle = (function impi$core$rectangle(p__6461){
var vec__6462 = p__6461;
var x = cljs.core.nth.call(null,vec__6462,(0),null);
var y = cljs.core.nth.call(null,vec__6462,(1),null);
var w = cljs.core.nth.call(null,vec__6462,(2),null);
var h = cljs.core.nth.call(null,vec__6462,(3),null);
return (new PIXI.Rectangle(x,y,w,h));
});
impi.core.image = (function impi$core$image(src){
var image = (new Image());
image.src = src;

return image;
});
impi.core.scale_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pixi.texture.scale-mode","linear","pixi.texture.scale-mode/linear",-939970850),PIXI.SCALE_MODES.LINEAR,new cljs.core.Keyword("pixi.texture.scale-mode","nearest","pixi.texture.scale-mode/nearest",-1037981403),PIXI.SCALE_MODES.NEAREST], null);
impi.core.blend_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("pixi.object.blend-mode","normal","pixi.object.blend-mode/normal",1997923348),PIXI.BLEND_MODES.NORMAL,new cljs.core.Keyword("pixi.object.blend-mode","add","pixi.object.blend-mode/add",-408955723),PIXI.BLEND_MODES.ADD,new cljs.core.Keyword("pixi.object.blend-mode","multiply","pixi.object.blend-mode/multiply",1683173166),PIXI.BLEND_MODES.MULTIPLY,new cljs.core.Keyword("pixi.object.blend-mode","screen","pixi.object.blend-mode/screen",540967930),PIXI.BLEND_MODES.SCREEN], null);
impi.core.text_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("pixi.text.style","drop-shadow","pixi.text.style/drop-shadow",1307064448),new cljs.core.Keyword("pixi.text.style","drop-shadow-color","pixi.text.style/drop-shadow-color",-2051711584),new cljs.core.Keyword("pixi.text.style","miter-limit","pixi.text.style/miter-limit",-681315801),new cljs.core.Keyword("pixi.text.style","padding","pixi.text.style/padding",-1955752535),new cljs.core.Keyword("pixi.text.style","font-family","pixi.text.style/font-family",-205532086),new cljs.core.Keyword("pixi.text.style","line-height","pixi.text.style/line-height",704157964),new cljs.core.Keyword("pixi.text.style","font-style","pixi.text.style/font-style",-2023010932),new cljs.core.Keyword("pixi.text.style","letter-spacing","pixi.text.style/letter-spacing",-185948595),new cljs.core.Keyword("pixi.text.style","drop-shadow-blur","pixi.text.style/drop-shadow-blur",-1245832049),new cljs.core.Keyword("pixi.text.style","drop-shadow-distance","pixi.text.style/drop-shadow-distance",-249045872),new cljs.core.Keyword("pixi.text.style","line-join","pixi.text.style/line-join",-1670809456),new cljs.core.Keyword("pixi.text.style","font-variant","pixi.text.style/font-variant",1630508659),new cljs.core.Keyword("pixi.text.style","font-weight","pixi.text.style/font-weight",-1833336141),new cljs.core.Keyword("pixi.text.style","break-words","pixi.text.style/break-words",170721171),new cljs.core.Keyword("pixi.text.style","word-wrap-width","pixi.text.style/word-wrap-width",-1265598509),new cljs.core.Keyword("pixi.text.style","align","pixi.text.style/align",1566366454),new cljs.core.Keyword("pixi.text.style","stroke","pixi.text.style/stroke",1078687287),new cljs.core.Keyword("pixi.text.style","stroke-thickness","pixi.text.style/stroke-thickness",-517501383),new cljs.core.Keyword("pixi.text.style","font-size","pixi.text.style/font-size",660722554),new cljs.core.Keyword("pixi.text.style","drop-shadow-angle","pixi.text.style/drop-shadow-angle",-129673187),new cljs.core.Keyword("pixi.text.style","fill","pixi.text.style/fill",1328412765),new cljs.core.Keyword("pixi.text.style","word-wrap","pixi.text.style/word-wrap",1951683390)],["dropShadow","dropShadowSolor","miterLimit","padding","fontFamily","lineHeight","fontStyle","letterSpacing","dropShadowBlur","dropShadowDistance","lineJoin","fontVariant","fontWeight","breakWords","wordWrapWidth","align","stroke","strokeThickness","fontSize","dropShadowAngle","fill","wordWrap"]);
impi.core.base_texture_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.pending_base_textures = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
impi.core.base_texture_key = (function impi$core$base_texture_key(texture){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844).cljs$core$IFn$_invoke$arity$1(texture),new cljs.core.Keyword("pixi.texture","scale-mode","pixi.texture/scale-mode",-749808257).cljs$core$IFn$_invoke$arity$1(texture)], null);
});
impi.core.create_base_texture = (function impi$core$create_base_texture(texture){
var source = impi.core.image.call(null,new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844).cljs$core$IFn$_invoke$arity$1(texture));
var mode = impi.core.scale_modes.call(null,new cljs.core.Keyword("pixi.texture","scale-mode","pixi.texture/scale-mode",-749808257).cljs$core$IFn$_invoke$arity$1(texture));
return (new PIXI.BaseTexture(source,mode));
});
impi.core.get_base_texture = (function impi$core$get_base_texture(texture){
var key = impi.core.base_texture_key.call(null,texture);
var or__3949__auto__ = cljs.core.deref.call(null,impi.core.base_texture_cache).call(null,key);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var object = impi.core.create_base_texture.call(null,texture);
cljs.core.swap_BANG_.call(null,impi.core.base_texture_cache,cljs.core.assoc,key,object);

cljs.core.swap_BANG_.call(null,impi.core.pending_base_textures,cljs.core.conj,object);

object.on("loaded",((function (object,or__3949__auto__,key){
return (function (){
return cljs.core.swap_BANG_.call(null,impi.core.pending_base_textures,cljs.core.disj,object);
});})(object,or__3949__auto__,key))
);

return object;
}
});
impi.core.on_loaded_textures = (function impi$core$on_loaded_textures(f){
var seq__6465 = cljs.core.seq.call(null,cljs.core.deref.call(null,impi.core.pending_base_textures));
var chunk__6466 = null;
var count__6467 = (0);
var i__6468 = (0);
while(true){
if((i__6468 < count__6467)){
var texture = cljs.core._nth.call(null,chunk__6466,i__6468);
texture.on("loaded",f);


var G__6469 = seq__6465;
var G__6470 = chunk__6466;
var G__6471 = count__6467;
var G__6472 = (i__6468 + (1));
seq__6465 = G__6469;
chunk__6466 = G__6470;
count__6467 = G__6471;
i__6468 = G__6472;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__6465);
if(temp__5457__auto__){
var seq__6465__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6465__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__6465__$1);
var G__6473 = cljs.core.chunk_rest.call(null,seq__6465__$1);
var G__6474 = c__4351__auto__;
var G__6475 = cljs.core.count.call(null,c__4351__auto__);
var G__6476 = (0);
seq__6465 = G__6473;
chunk__6466 = G__6474;
count__6467 = G__6475;
i__6468 = G__6476;
continue;
} else {
var texture = cljs.core.first.call(null,seq__6465__$1);
texture.on("loaded",f);


var G__6477 = cljs.core.next.call(null,seq__6465__$1);
var G__6478 = null;
var G__6479 = (0);
var G__6480 = (0);
seq__6465 = G__6477;
chunk__6466 = G__6478;
count__6467 = G__6479;
i__6468 = G__6480;
continue;
}
} else {
return null;
}
}
break;
}
});
impi.core.texture_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.create_texture = (function impi$core$create_texture(texture){
return (new PIXI.Texture(impi.core.get_base_texture.call(null,texture),(function (){var G__6481 = texture;
var G__6481__$1 = (((G__6481 == null))?null:new cljs.core.Keyword("pixi.texture","frame","pixi.texture/frame",1646977387).cljs$core$IFn$_invoke$arity$1(G__6481));
if((G__6481__$1 == null)){
return null;
} else {
return impi.core.rectangle.call(null,G__6481__$1);
}
})(),(function (){var G__6482 = texture;
var G__6482__$1 = (((G__6482 == null))?null:new cljs.core.Keyword("pixi.texture","crop","pixi.texture/crop",660030578).cljs$core$IFn$_invoke$arity$1(G__6482));
if((G__6482__$1 == null)){
return null;
} else {
return impi.core.rectangle.call(null,G__6482__$1);
}
})(),(function (){var G__6483 = texture;
var G__6483__$1 = (((G__6483 == null))?null:new cljs.core.Keyword("pixi.texture","trim","pixi.texture/trim",902761456).cljs$core$IFn$_invoke$arity$1(G__6483));
if((G__6483__$1 == null)){
return null;
} else {
return impi.core.rectangle.call(null,G__6483__$1);
}
})(),(function (){var G__6484 = texture;
if((G__6484 == null)){
return null;
} else {
return new cljs.core.Keyword("pixi.texture","rotate?","pixi.texture/rotate?",2011178137).cljs$core$IFn$_invoke$arity$1(G__6484);
}
})()));
});
impi.core.get_texture = (function impi$core$get_texture(texture){
var or__3949__auto__ = cljs.core.deref.call(null,impi.core.texture_cache).call(null,texture);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var object = impi.core.create_texture.call(null,texture);
cljs.core.swap_BANG_.call(null,impi.core.texture_cache,cljs.core.assoc,texture,object);

return object;
}
});
impi.core.create_render_texture = (function impi$core$create_render_texture(texture){
var mode = impi.core.scale_modes.call(null,new cljs.core.Keyword("pixi.texture","scale-mode","pixi.texture/scale-mode",-749808257).cljs$core$IFn$_invoke$arity$1(texture));
var vec__6485 = new cljs.core.Keyword("pixi.render-texture","size","pixi.render-texture/size",-777721481).cljs$core$IFn$_invoke$arity$1(texture);
var w = cljs.core.nth.call(null,vec__6485,(0),null);
var h = cljs.core.nth.call(null,vec__6485,(1),null);
return PIXI.RenderTexture.create(w,h,mode);
});
if((typeof impi !== 'undefined') && (typeof impi.core !== 'undefined') && (typeof impi.core.draw_shape_BANG_ !== 'undefined')){
} else {
impi.core.draw_shape_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"impi.core","draw-shape!"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (_,v){
return v.call(null,new cljs.core.Keyword("pixi.shape","type","pixi.shape/type",-155162647));
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","circle","pixi.shape.type/circle",-1624509899),(function (graphics,p__6488){
var map__6489 = p__6488;
var map__6489__$1 = ((((!((map__6489 == null)))?(((((map__6489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6489):map__6489);
var vec__6490 = cljs.core.get.call(null,map__6489__$1,new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603));
var x = cljs.core.nth.call(null,vec__6490,(0),null);
var y = cljs.core.nth.call(null,vec__6490,(1),null);
var radius = cljs.core.get.call(null,map__6489__$1,new cljs.core.Keyword("pixi.circle","radius","pixi.circle/radius",-563740334));
return graphics.drawCircle(x,y,radius);
}));
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","ellipse","pixi.shape.type/ellipse",-1908895205),(function (graphics,p__6494){
var map__6495 = p__6494;
var map__6495__$1 = ((((!((map__6495 == null)))?(((((map__6495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6495):map__6495);
var vec__6496 = cljs.core.get.call(null,map__6495__$1,new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603));
var x = cljs.core.nth.call(null,vec__6496,(0),null);
var y = cljs.core.nth.call(null,vec__6496,(1),null);
var vec__6499 = cljs.core.get.call(null,map__6495__$1,new cljs.core.Keyword("pixi.ellipse","radius","pixi.ellipse/radius",-2026890932));
var x_radius = cljs.core.nth.call(null,vec__6499,(0),null);
var y_radius = cljs.core.nth.call(null,vec__6499,(1),null);
return graphics.drawEllipse(x,y,x_radius,y_radius);
}));
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","polygon","pixi.shape.type/polygon",1528891042),(function (graphics,p__6503){
var map__6504 = p__6503;
var map__6504__$1 = ((((!((map__6504 == null)))?(((((map__6504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6504):map__6504);
var path = cljs.core.get.call(null,map__6504__$1,new cljs.core.Keyword("pixi.polygon","path","pixi.polygon/path",-1711305646));
return graphics.drawPolygon(cljs.core.clj__GT_js.call(null,path));
}));
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","rectangle","pixi.shape.type/rectangle",-96727735),(function (graphics,p__6506){
var map__6507 = p__6506;
var map__6507__$1 = ((((!((map__6507 == null)))?(((((map__6507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6507):map__6507);
var vec__6508 = cljs.core.get.call(null,map__6507__$1,new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603));
var x = cljs.core.nth.call(null,vec__6508,(0),null);
var y = cljs.core.nth.call(null,vec__6508,(1),null);
var vec__6511 = cljs.core.get.call(null,map__6507__$1,new cljs.core.Keyword("pixi.shape","size","pixi.shape/size",-1211121110));
var width = cljs.core.nth.call(null,vec__6511,(0),null);
var height = cljs.core.nth.call(null,vec__6511,(1),null);
return graphics.drawRect(x,y,width,height);
}));
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","rounded-rectangle","pixi.shape.type/rounded-rectangle",-933045378),(function (graphics,p__6515){
var map__6516 = p__6515;
var map__6516__$1 = ((((!((map__6516 == null)))?(((((map__6516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6516):map__6516);
var vec__6517 = cljs.core.get.call(null,map__6516__$1,new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603));
var x = cljs.core.nth.call(null,vec__6517,(0),null);
var y = cljs.core.nth.call(null,vec__6517,(1),null);
var vec__6520 = cljs.core.get.call(null,map__6516__$1,new cljs.core.Keyword("pixi.shape","size","pixi.shape/size",-1211121110));
var width = cljs.core.nth.call(null,vec__6520,(0),null);
var height = cljs.core.nth.call(null,vec__6520,(1),null);
var radius = cljs.core.get.call(null,map__6516__$1,new cljs.core.Keyword("pixi.rounded-rectangle","radius","pixi.rounded-rectangle/radius",-194400743));
return graphics.drawRoundedRect(x,y,width,height,radius);
}));
impi.core.create_filter = (function impi$core$create_filter(filter){
return (new PIXI.Filter(new cljs.core.Keyword("pixi.filter","vertex","pixi.filter/vertex",-199560341).cljs$core$IFn$_invoke$arity$1(filter),new cljs.core.Keyword("pixi.filter","fragment","pixi.filter/fragment",1783370436).cljs$core$IFn$_invoke$arity$1(filter),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword("pixi.filter","uniforms","pixi.filter/uniforms",-2008300453).cljs$core$IFn$_invoke$arity$1(filter))));
});
impi.core.render_texture_QMARK_ = (function impi$core$render_texture_QMARK_(texture){
return cljs.core.contains_QMARK_.call(null,texture,new cljs.core.Keyword("pixi.render-texture","source","pixi.render-texture/source",1442476101));
});
impi.core.create_frame_array = (function impi$core$create_frame_array(frames){
return cljs.core.reduce.call(null,(function (arr,p__6524){
var map__6525 = p__6524;
var map__6525__$1 = ((((!((map__6525 == null)))?(((((map__6525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6525):map__6525);
var duration = cljs.core.get.call(null,map__6525__$1,new cljs.core.Keyword("pixi.frame","duration","pixi.frame/duration",1788037809));
var texture = cljs.core.get.call(null,map__6525__$1,new cljs.core.Keyword("pixi.frame","texture","pixi.frame/texture",-1751078616));
if(cljs.core.not.call(null,impi.core.render_texture_QMARK_.call(null,texture))){
} else {
throw (new Error(["Assert failed: ","Movie clip frame cannot be a render texture","\n","(not (render-texture? texture))"].join('')));
}

arr.push(({"time": duration, "texture": impi.core.get_texture.call(null,texture)}));

return arr;
}),[],frames);
});
impi.core.render_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.cache_index = (function impi$core$cache_index(index,attr,p__6527){
var map__6528 = p__6527;
var map__6528__$1 = ((((!((map__6528 == null)))?(((((map__6528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6528):map__6528);
var key = cljs.core.get.call(null,map__6528__$1,new cljs.core.Keyword("impi","key","impi/key",-1519343542));
var G__6530 = cljs.core.conj.call(null,index,attr);
if(cljs.core.truth_(key)){
return cljs.core.conj.call(null,G__6530,key);
} else {
return G__6530;
}
});
impi.core.cache_render_texture_BANG_ = (function impi$core$cache_render_texture_BANG_(index,texture,source){
return cljs.core.swap_BANG_.call(null,impi.core.render_cache,cljs.core.update,cljs.core.first.call(null,index),cljs.core.assoc,index,(function (p1__6531_SHARP_){
return p1__6531_SHARP_.render(source,texture);
}));
});
impi.core.uncache_render_texture_BANG_ = (function impi$core$uncache_render_texture_BANG_(index){
return cljs.core.swap_BANG_.call(null,impi.core.render_cache,cljs.core.update,cljs.core.first.call(null,index),cljs.core.dissoc,index);
});
if((typeof impi !== 'undefined') && (typeof impi.core !== 'undefined') && (typeof impi.core.create_object !== 'undefined')){
} else {
impi.core.create_object = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"impi.core","create-object"),new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","sprite","pixi.object.type/sprite",-1129625685),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.Sprite())], null);
}));
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","movie-clip","pixi.object.type/movie-clip",-588592288),(function (p__6532){
var map__6533 = p__6532;
var map__6533__$1 = ((((!((map__6533 == null)))?(((((map__6533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6533):map__6533);
var frames = cljs.core.get.call(null,map__6533__$1,new cljs.core.Keyword("pixi.movie-clip","frames","pixi.movie-clip/frames",532671290));
var paused_QMARK_ = cljs.core.get.call(null,map__6533__$1,new cljs.core.Keyword("pixi.movie-clip","paused?","pixi.movie-clip/paused?",24083434));
var movie_clip = (new PIXI.extras.MovieClip(impi.core.create_frame_array.call(null,frames)));
if(cljs.core.truth_(paused_QMARK_)){
} else {
movie_clip.play();
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),movie_clip], null);
}));
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","container","pixi.object.type/container",-361427118),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.Container())], null);
}));
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","graphics","pixi.object.type/graphics",1364862706),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.Graphics())], null);
}));
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","text","pixi.object.type/text",1143165852),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.Text())], null);
}));
if((typeof impi !== 'undefined') && (typeof impi.core !== 'undefined') && (typeof impi.core.create !== 'undefined')){
} else {
impi.core.create = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"impi.core","create"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (attr,value){
return attr;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),(function (_,p__6535){
var map__6536 = p__6535;
var map__6536__$1 = ((((!((map__6536 == null)))?(((((map__6536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6536):map__6536);
var options = map__6536__$1;
var vec__6537 = cljs.core.get.call(null,map__6536__$1,new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864));
var w = cljs.core.nth.call(null,vec__6537,(0),null);
var h = cljs.core.nth.call(null,vec__6537,(1),null);
var transparent_QMARK_ = cljs.core.get.call(null,map__6536__$1,new cljs.core.Keyword("pixi.renderer","transparent?","pixi.renderer/transparent?",-1434511981));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.select_keys.call(null,options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.Keyword("pixi.renderer","transparent?","pixi.renderer/transparent?",-1434511981)], null)),new cljs.core.Keyword(null,"obj","obj",981763962),PIXI.autoDetectRenderer(w,h,({"transparent": transparent_QMARK_}))], null);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),(function (_,value){
return impi.core.create_object.call(null,value);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.container","children","pixi.container/children",1768703103),(function (_,value){
return impi.core.create_object.call(null,value);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.render-texture","source","pixi.render-texture/source",1442476101),(function (_,value){
return impi.core.create_object.call(null,value);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),(function (_,value){
if(cljs.core.truth_(impi.core.render_texture_QMARK_.call(null,value))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.dissoc.call(null,value,new cljs.core.Keyword("pixi.render-texture","source","pixi.render-texture/source",1442476101)),new cljs.core.Keyword(null,"obj","obj",981763962),impi.core.create_render_texture.call(null,value)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),value,new cljs.core.Keyword(null,"obj","obj",981763962),impi.core.get_texture.call(null,value)], null);
}
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.graphics","shapes","pixi.graphics/shapes",1500084814),(function (graphics,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),value,new cljs.core.Keyword(null,"obj","obj",981763962),({})], null);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.text","style","pixi.text/style",-549147823),(function (_,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.TextStyle())], null);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.object","filters","pixi.object/filters",1813869052),(function (_,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),value,new cljs.core.Keyword(null,"obj","obj",981763962),impi.core.create_filter.call(null,value)], null);
}));
if((typeof impi !== 'undefined') && (typeof impi.core !== 'undefined') && (typeof impi.core.update_prop_BANG_ !== 'undefined')){
} else {
impi.core.update_prop_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"impi.core","update-prop!"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (object,index,attr,value){
return attr;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (object,_,___$1,___$2){
return null;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","alpha","pixi.object/alpha",1747179990),(function (object,_,___$1,alpha){
return object.alpha = (function (){var or__3949__auto__ = alpha;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return 1.0;
}
})();
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","blend-mode","pixi.object/blend-mode",1996241029),(function (object,_,___$1,mode){
return object.blendMode = impi.core.blend_modes.call(null,mode,PIXI.BLEND_MODES.NORMAL);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),(function (object,_,___$1,p__6541){
var vec__6542 = p__6541;
var x = cljs.core.nth.call(null,vec__6542,(0),null);
var y = cljs.core.nth.call(null,vec__6542,(1),null);
object.position.x = x;

return object.position.y = y;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","rotation","pixi.object/rotation",-1091789503),(function (object,_,___$1,angle){
return object.rotation = angle;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","scale","pixi.object/scale",-1402499546),(function (object,_,___$1,p__6545){
var vec__6546 = p__6545;
var x = cljs.core.nth.call(null,vec__6546,(0),null);
var y = cljs.core.nth.call(null,vec__6546,(1),null);
object.scale.x = (function (){var or__3949__auto__ = x;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})();

return object.scale.y = (function (){var or__3949__auto__ = y;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})();
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","filters","pixi.object/filters",1813869052),(function (object,index,attr,filters){
return object.filters = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__6549_SHARP_){
return impi.core.build_BANG_.call(null,index,attr,p1__6549_SHARP_);
}),filters));
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),(function (object,_,___$1,interactive_QMARK_){
return object.interactive = interactive_QMARK_;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","hit-area","pixi.object/hit-area",-346754035),(function (object,_,___$1,rect){
if(!((rect == null))){
return object.hitArea = impi.core.rectangle.call(null,rect);
} else {
return delete object["hitArea"];
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),(function (object,_,___$1,pred){
if(!((pred == null))){
return object.containsPoint = pred;
} else {
return delete object["containsPoint"];
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","click","pixi.event/click",1508844075),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"click",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","mouse-down","pixi.event/mouse-down",-1340188331),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"mousedown",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","mouse-up","pixi.event/mouse-up",-986797859),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"mouseup",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","mouse-over","pixi.event/mouse-over",584256675),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"mouseover",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","mouse-out","pixi.event/mouse-out",1492290614),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"mouseout",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.container","children","pixi.container/children",1768703103),(function (container,index,attr,children){
return impi.core.replace_children.call(null,container,cljs.core.map.call(null,(function (p1__6550_SHARP_){
return impi.core.build_BANG_.call(null,index,attr,p1__6550_SHARP_);
}),((cljs.core.map_QMARK_.call(null,children))?cljs.core.vals.call(null,children):children)));
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.graphics","shapes","pixi.graphics/shapes",1500084814),(function (graphics_obj,_,___$1,shapes){
graphics_obj.clear();

var seq__6551 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,shapes))?cljs.core.vals.call(null,shapes):shapes));
var chunk__6552 = null;
var count__6553 = (0);
var i__6554 = (0);
while(true){
if((i__6554 < count__6553)){
var map__6555 = cljs.core._nth.call(null,chunk__6552,i__6554);
var map__6555__$1 = ((((!((map__6555 == null)))?(((((map__6555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6555):map__6555);
var shape = map__6555__$1;
var fill = cljs.core.get.call(null,map__6555__$1,new cljs.core.Keyword("pixi.shape","fill","pixi.shape/fill",-849672056));
var line = cljs.core.get.call(null,map__6555__$1,new cljs.core.Keyword("pixi.shape","line","pixi.shape/line",-1822767054));
graphics_obj.lineStyle((function (){var or__3949__auto__ = new cljs.core.Keyword("pixi.line","width","pixi.line/width",-436402173).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword("pixi.line","color","pixi.line/color",833385309).cljs$core$IFn$_invoke$arity$1(line),(function (){var or__3949__auto__ = new cljs.core.Keyword("pixi.line","alpha","pixi.line/alpha",-1396691617).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());

if(cljs.core.truth_(fill)){
graphics_obj.beginFill(new cljs.core.Keyword("pixi.fill","color","pixi.fill/color",826357232).cljs$core$IFn$_invoke$arity$1(fill),(function (){var or__3949__auto__ = new cljs.core.Keyword("pixi.fill","alpha","pixi.fill/alpha",-1396216046).cljs$core$IFn$_invoke$arity$1(fill);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());
} else {
}

impi.core.draw_shape_BANG_.call(null,graphics_obj,shape);

if(cljs.core.truth_(fill)){
graphics_obj.endFill();
} else {
}


var G__6559 = seq__6551;
var G__6560 = chunk__6552;
var G__6561 = count__6553;
var G__6562 = (i__6554 + (1));
seq__6551 = G__6559;
chunk__6552 = G__6560;
count__6553 = G__6561;
i__6554 = G__6562;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__6551);
if(temp__5457__auto__){
var seq__6551__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6551__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__6551__$1);
var G__6563 = cljs.core.chunk_rest.call(null,seq__6551__$1);
var G__6564 = c__4351__auto__;
var G__6565 = cljs.core.count.call(null,c__4351__auto__);
var G__6566 = (0);
seq__6551 = G__6563;
chunk__6552 = G__6564;
count__6553 = G__6565;
i__6554 = G__6566;
continue;
} else {
var map__6557 = cljs.core.first.call(null,seq__6551__$1);
var map__6557__$1 = ((((!((map__6557 == null)))?(((((map__6557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6557):map__6557);
var shape = map__6557__$1;
var fill = cljs.core.get.call(null,map__6557__$1,new cljs.core.Keyword("pixi.shape","fill","pixi.shape/fill",-849672056));
var line = cljs.core.get.call(null,map__6557__$1,new cljs.core.Keyword("pixi.shape","line","pixi.shape/line",-1822767054));
graphics_obj.lineStyle((function (){var or__3949__auto__ = new cljs.core.Keyword("pixi.line","width","pixi.line/width",-436402173).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword("pixi.line","color","pixi.line/color",833385309).cljs$core$IFn$_invoke$arity$1(line),(function (){var or__3949__auto__ = new cljs.core.Keyword("pixi.line","alpha","pixi.line/alpha",-1396691617).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());

if(cljs.core.truth_(fill)){
graphics_obj.beginFill(new cljs.core.Keyword("pixi.fill","color","pixi.fill/color",826357232).cljs$core$IFn$_invoke$arity$1(fill),(function (){var or__3949__auto__ = new cljs.core.Keyword("pixi.fill","alpha","pixi.fill/alpha",-1396216046).cljs$core$IFn$_invoke$arity$1(fill);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());
} else {
}

impi.core.draw_shape_BANG_.call(null,graphics_obj,shape);

if(cljs.core.truth_(fill)){
graphics_obj.endFill();
} else {
}


var G__6567 = cljs.core.next.call(null,seq__6551__$1);
var G__6568 = null;
var G__6569 = (0);
var G__6570 = (0);
seq__6551 = G__6567;
chunk__6552 = G__6568;
count__6553 = G__6569;
i__6554 = G__6570;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.text","text","pixi.text/text",1789201424),(function (object,_,___$1,text){
return object.text = text;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.text","style","pixi.text/style",-549147823),(function (object,index,attr,text_style){
return object.style = impi.core.build_BANG_.call(null,index,attr,text_style);
}));
var seq__6571_6575 = cljs.core.seq.call(null,cljs.core.keys.call(null,impi.core.text_properties));
var chunk__6572_6576 = null;
var count__6573_6577 = (0);
var i__6574_6578 = (0);
while(true){
if((i__6574_6578 < count__6573_6577)){
var attr_6579 = cljs.core._nth.call(null,chunk__6572_6576,i__6574_6578);
cljs.core.derive.call(null,attr_6579,new cljs.core.Keyword("pixi.text.style","property","pixi.text.style/property",-681950924));


var G__6580 = seq__6571_6575;
var G__6581 = chunk__6572_6576;
var G__6582 = count__6573_6577;
var G__6583 = (i__6574_6578 + (1));
seq__6571_6575 = G__6580;
chunk__6572_6576 = G__6581;
count__6573_6577 = G__6582;
i__6574_6578 = G__6583;
continue;
} else {
var temp__5457__auto___6584 = cljs.core.seq.call(null,seq__6571_6575);
if(temp__5457__auto___6584){
var seq__6571_6585__$1 = temp__5457__auto___6584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6571_6585__$1)){
var c__4351__auto___6586 = cljs.core.chunk_first.call(null,seq__6571_6585__$1);
var G__6587 = cljs.core.chunk_rest.call(null,seq__6571_6585__$1);
var G__6588 = c__4351__auto___6586;
var G__6589 = cljs.core.count.call(null,c__4351__auto___6586);
var G__6590 = (0);
seq__6571_6575 = G__6587;
chunk__6572_6576 = G__6588;
count__6573_6577 = G__6589;
i__6574_6578 = G__6590;
continue;
} else {
var attr_6591 = cljs.core.first.call(null,seq__6571_6585__$1);
cljs.core.derive.call(null,attr_6591,new cljs.core.Keyword("pixi.text.style","property","pixi.text.style/property",-681950924));


var G__6592 = cljs.core.next.call(null,seq__6571_6585__$1);
var G__6593 = null;
var G__6594 = (0);
var G__6595 = (0);
seq__6571_6575 = G__6592;
chunk__6572_6576 = G__6593;
count__6573_6577 = G__6594;
i__6574_6578 = G__6595;
continue;
}
} else {
}
}
break;
}
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.text.style","property","pixi.text.style/property",-681950924),(function (object,_,attr,value){
return (object[impi.core.text_properties.call(null,attr)] = value);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.sprite","anchor","pixi.sprite/anchor",-1761208072),(function (sprite,_,___$1,p__6596){
var vec__6597 = p__6596;
var x = cljs.core.nth.call(null,vec__6597,(0),null);
var y = cljs.core.nth.call(null,vec__6597,(1),null);
sprite.anchor.x = x;

return sprite.anchor.y = y;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),(function (sprite,index,attr,texture){
return sprite.texture = impi.core.build_BANG_.call(null,index,attr,texture);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.movie-clip","paused?","pixi.movie-clip/paused?",24083434),(function (movie_clip,_,___$1,paused_QMARK_){
movie_clip.impiPaused = paused_QMARK_;

if(cljs.core.truth_((function (){var and__3938__auto__ = paused_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return movie_clip.playing;
} else {
return and__3938__auto__;
}
})())){
return movie_clip.stop();
} else {
if(((cljs.core.not.call(null,paused_QMARK_)) && (cljs.core.not.call(null,movie_clip.playing)))){
return movie_clip.play();
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.movie-clip","loop?","pixi.movie-clip/loop?",1054216795),(function (movie_clip,_,___$1,loop_QMARK_){
movie_clip.loop = loop_QMARK_;

if(cljs.core.truth_((function (){var and__3938__auto__ = loop_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,movie_clip.playing)) && (cljs.core.not.call(null,movie_clip.impiPaused)));
} else {
return and__3938__auto__;
}
})())){
return movie_clip.play();
} else {
return null;
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.movie-clip","animation-speed","pixi.movie-clip/animation-speed",-702199245),(function (movie_clip,_,___$1,speed){
return movie_clip.animationSpeed = speed;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.render-texture","source","pixi.render-texture/source",1442476101),(function (texture,index,attr,source){
var index__$1 = impi.core.cache_index.call(null,index,attr,source);
if(!((source == null))){
return impi.core.cache_render_texture_BANG_.call(null,index__$1,texture,impi.core.build_BANG_.call(null,index__$1,attr,source));
} else {
return impi.core.uncache_render_texture_BANG_.call(null,index__$1);
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.render-texture","size","pixi.render-texture/size",-777721481),(function (texture,_,___$1,p__6600){
var vec__6601 = p__6600;
var w = cljs.core.nth.call(null,vec__6601,(0),null);
var h = cljs.core.nth.call(null,vec__6601,(1),null);
return texture.resize(w,h,true);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),(function (renderer,_,___$1,p__6604){
var vec__6605 = p__6604;
var w = cljs.core.nth.call(null,vec__6605,(0),null);
var h = cljs.core.nth.call(null,vec__6605,(1),null);
return renderer.resize(w,h);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.renderer","background-color","pixi.renderer/background-color",581973363),(function (renderer,_,___$1,color){
return renderer.backgroundColor = color;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.filter","padding","pixi.filter/padding",1105772529),(function (filter,_,___$1,padding){
return filter.padding = padding;
}));
impi.core.run_kv_BANG_ = (function impi$core$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (_,k,v){
proc.call(null,k,v);

return null;
}),null,m);

return null;
});
impi.core.update_changed_prop_BANG_ = (function impi$core$update_changed_prop_BANG_(object,index,old_value,k,v){
if(cljs.core._EQ_.call(null,v,old_value.call(null,k))){
return null;
} else {
return impi.core.update_prop_BANG_.call(null,object,index,k,v);
}
});
impi.core.update_removed_prop_BANG_ = (function impi$core$update_removed_prop_BANG_(object,index,new_value,k){
if(cljs.core.contains_QMARK_.call(null,new_value,k)){
return null;
} else {
return impi.core.update_prop_BANG_.call(null,object,index,k,null);
}
});
impi.core.update_BANG_ = (function impi$core$update_BANG_(p__6608,index,attr,new_value){
var map__6609 = p__6608;
var map__6609__$1 = ((((!((map__6609 == null)))?(((((map__6609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6609):map__6609);
var object = cljs.core.get.call(null,map__6609__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var old_value = cljs.core.get.call(null,map__6609__$1,new cljs.core.Keyword(null,"val","val",128701612));
impi.core.run_kv_BANG_.call(null,((function (map__6609,map__6609__$1,object,old_value){
return (function (k,v){
return impi.core.update_changed_prop_BANG_.call(null,object,index,old_value,k,v);
});})(map__6609,map__6609__$1,object,old_value))
,new_value);

impi.core.run_kv_BANG_.call(null,((function (map__6609,map__6609__$1,object,old_value){
return (function (k,_){
return impi.core.update_removed_prop_BANG_.call(null,object,index,new_value,k);
});})(map__6609,map__6609__$1,object,old_value))
,old_value);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new_value,new cljs.core.Keyword(null,"obj","obj",981763962),object], null);
});
impi.core.recreate_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword("pixi.texture","rotate","pixi.texture/rotate",-516802910),null,new cljs.core.Keyword("pixi.filter","fragment","pixi.filter/fragment",1783370436),null,new cljs.core.Keyword("pixi.texture","frame","pixi.texture/frame",1646977387),null,new cljs.core.Keyword("pixi.filter","vertex","pixi.filter/vertex",-199560341),null,new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),null,new cljs.core.Keyword("pixi.texture","trim","pixi.texture/trim",902761456),null,new cljs.core.Keyword("pixi.texture","crop","pixi.texture/crop",660030578),null,new cljs.core.Keyword("pixi.renderer","transparent?","pixi.renderer/transparent?",-1434511981),null,new cljs.core.Keyword("pixi.movie-clip","frames","pixi.movie-clip/frames",532671290),null,new cljs.core.Keyword("pixi.filter","uniforms","pixi.filter/uniforms",-2008300453),null,new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844),null,new cljs.core.Keyword("pixi.texture","scale-mode","pixi.texture/scale-mode",-749808257),null], null), null);
impi.core.should_recreate_QMARK_ = (function impi$core$should_recreate_QMARK_(old_value,new_value){
return cljs.core.not_EQ_.call(null,cljs.core.select_keys.call(null,old_value,impi.core.recreate_keys),cljs.core.select_keys.call(null,new_value,impi.core.recreate_keys));
});
impi.core.build_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.build_BANG_ = (function impi$core$build_BANG_(index,attr,value){
var index__$1 = impi.core.cache_index.call(null,index,attr,value);
var cache_BANG_ = ((function (index__$1){
return (function (p1__6611_SHARP_){
return cljs.core.swap_BANG_.call(null,impi.core.build_cache,cljs.core.assoc,index__$1,p1__6611_SHARP_);
});})(index__$1))
;
return new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1((function (){var temp__5455__auto__ = cljs.core.deref.call(null,impi.core.build_cache).call(null,index__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
var cached_val = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cached);
if(cljs.core._EQ_.call(null,value,cached_val)){
return cached;
} else {
var G__6612 = impi.core.update_BANG_.call(null,(cljs.core.truth_(impi.core.should_recreate_QMARK_.call(null,cached_val,value))?impi.core.create.call(null,attr,value):cached),index__$1,attr,value);
cache_BANG_.call(null,G__6612);

return G__6612;
}
} else {
var G__6613 = impi.core.update_BANG_.call(null,impi.core.create.call(null,attr,value),index__$1,attr,value);
cache_BANG_.call(null,G__6613);

return G__6613;
}
})());
});
impi.core.renderer_mounted_QMARK_ = (function impi$core$renderer_mounted_QMARK_(renderer,element){
return (element === renderer.view.parentNode);
});
impi.core.mount_view = (function impi$core$mount_view(renderer,element){
if(cljs.core.truth_(impi.core.renderer_mounted_QMARK_.call(null,renderer,element))){
return null;
} else {
element.innerHTML = "";

return element.appendChild(renderer.view);
}
});
impi.core.build_listeners_BANG_ = (function impi$core$build_listeners_BANG_(key,scene){
return cljs.core.swap_BANG_.call(null,impi.core.listeners,cljs.core.assoc,key,new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163).cljs$core$IFn$_invoke$arity$2(scene,cljs.core.PersistentArrayMap.EMPTY));
});
impi.core.build_renderer_BANG_ = (function impi$core$build_renderer_BANG_(key,scene){
var temp__5457__auto__ = new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return impi.core.build_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),renderer);
} else {
return null;
}
});
impi.core.build_stage_BANG_ = (function impi$core$build_stage_BANG_(renderer,key,scene){
var temp__5457__auto__ = new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(temp__5457__auto__)){
var stage = temp__5457__auto__;
return impi.core.build_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),stage);
} else {
return null;
}
});
impi.core.render_view = (function impi$core$render_view(key,renderer,stage){
var render = (function impi$core$render_view_$_render(){
var seq__6618_6622 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,impi.core.render_cache).call(null,key)));
var chunk__6619_6623 = null;
var count__6620_6624 = (0);
var i__6621_6625 = (0);
while(true){
if((i__6621_6625 < count__6620_6624)){
var f_6626 = cljs.core._nth.call(null,chunk__6619_6623,i__6621_6625);
f_6626.call(null,renderer);


var G__6627 = seq__6618_6622;
var G__6628 = chunk__6619_6623;
var G__6629 = count__6620_6624;
var G__6630 = (i__6621_6625 + (1));
seq__6618_6622 = G__6627;
chunk__6619_6623 = G__6628;
count__6620_6624 = G__6629;
i__6621_6625 = G__6630;
continue;
} else {
var temp__5457__auto___6631 = cljs.core.seq.call(null,seq__6618_6622);
if(temp__5457__auto___6631){
var seq__6618_6632__$1 = temp__5457__auto___6631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6618_6632__$1)){
var c__4351__auto___6633 = cljs.core.chunk_first.call(null,seq__6618_6632__$1);
var G__6634 = cljs.core.chunk_rest.call(null,seq__6618_6632__$1);
var G__6635 = c__4351__auto___6633;
var G__6636 = cljs.core.count.call(null,c__4351__auto___6633);
var G__6637 = (0);
seq__6618_6622 = G__6634;
chunk__6619_6623 = G__6635;
count__6620_6624 = G__6636;
i__6621_6625 = G__6637;
continue;
} else {
var f_6638 = cljs.core.first.call(null,seq__6618_6632__$1);
f_6638.call(null,renderer);


var G__6639 = cljs.core.next.call(null,seq__6618_6632__$1);
var G__6640 = null;
var G__6641 = (0);
var G__6642 = (0);
seq__6618_6622 = G__6639;
chunk__6619_6623 = G__6640;
count__6620_6624 = G__6641;
i__6621_6625 = G__6642;
continue;
}
} else {
}
}
break;
}

return renderer.render(stage);
});
render.call(null);

return impi.core.on_loaded_textures.call(null,(function (){
return requestAnimationFrame(render);
}));
});
impi.core.mount = (function impi$core$mount(key,scene,element){
impi.core.build_listeners_BANG_.call(null,key,scene);

var temp__5457__auto__ = impi.core.build_renderer_BANG_.call(null,key,scene);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
impi.core.mount_view.call(null,renderer,element);

var temp__5457__auto____$1 = impi.core.build_stage_BANG_.call(null,renderer,key,scene);
if(cljs.core.truth_(temp__5457__auto____$1)){
var stage = temp__5457__auto____$1;
return impi.core.render_view.call(null,key,renderer,stage);
} else {
return null;
}
} else {
return null;
}
});
impi.core.unmount = (function impi$core$unmount(key){
var temp__5457__auto__ = new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,impi.core.build_cache).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533)], null)));
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var view = renderer.view;
var temp__5457__auto____$1 = view.parentNode;
if(cljs.core.truth_(temp__5457__auto____$1)){
var parent = temp__5457__auto____$1;
return parent.removeChild(view);
} else {
return null;
}
} else {
return null;
}
});
