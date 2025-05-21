(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["forms"] = factory();
	else
		root["forms"] = factory();
})(this, () => {
return /******/ "use strict";
var __webpack_exports__ = {};

console.log('Hello from app2');

/******/ return __webpack_exports__;
;
})