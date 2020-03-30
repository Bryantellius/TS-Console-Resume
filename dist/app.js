/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resume.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resume.ts":
/*!*******************!*\
  !*** ./resume.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar myName = \"Ben Bryant\";\r\nconsole.log(myName.toUpperCase());\r\nconsole.log(\"Job/Career:\");\r\nconsole.log(\"Software Programming\");\r\nconsole.log(\"About me:\");\r\nconsole.log(\"I'm a college graduate studying Full Stack Development with Covalance.io\");\r\nconsole.log(\"Work Experiences:\");\r\nvar work = [\r\n    {\r\n        name: \"Trak Shak\",\r\n        title: \"Sales Associate\",\r\n        description: \"help maintain the shop and assist customers with shoe purchases.\",\r\n        cool: true\r\n    },\r\n    {\r\n        name: \"Xpress Timing\",\r\n        title: \"Hy-Tek Operator\",\r\n        description: \"operate Hy-Tek and Lynx computer software at Track and Field events.\",\r\n        cool: true\r\n    },\r\n    {\r\n        name: \"Birmingham Barons\",\r\n        title: \"Sales Associate\",\r\n        description: \"helped maintain the ballpark, assisted customers with ticket sales.\",\r\n        cool: false\r\n    },\r\n    {\r\n        name: \"UAB Athletics\",\r\n        title: \"Compliance Intern\",\r\n        description: \"updated department newsletters, handbooks, and form templates and handled athlete and team forms for season filing.\",\r\n        cool: false\r\n    }\r\n];\r\nwork.forEach(function (xp) {\r\n    console.log(\"# \" + xp.name + \" # \\n as a \" + xp.title + \" and I \" + xp.description);\r\n    if (xp.cool) {\r\n        console.log(\"@BAM^\");\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./resume.ts?");

/***/ })

/******/ });