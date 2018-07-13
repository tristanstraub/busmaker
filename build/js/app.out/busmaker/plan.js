// Compiled by ClojureScript 1.10.339 {}
goog.provide('busmaker.plan');
goog.require('cljs.core');
goog.require('busmaker.main_bus');
busmaker.plan.plan = (function busmaker$plan$plan(factories,bus_outputs){
return busmaker.main_bus.normalize.call(null,busmaker.main_bus.main_bus.call(null,factories,bus_outputs));
});
