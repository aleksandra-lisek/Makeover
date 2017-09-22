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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
    var fringe = document.querySelector('.fringe');
    var eye = document.querySelector('.iris');
    var skin = document.querySelector('.face');
    var hair = document.querySelector('.hair');
    console.log(fringe);

    var inputFringe = document.querySelector('.fringe-change');
    var inputEye = document.querySelector('.eyes-color-change');
    var inputSkin = document.querySelector('.skin-color-change');
    var inputHair = document.querySelector('.hair-color-change');
    // console.log(inputs);


    function handleUpdate() {
        var suffix = this.dataset.sizing || '';
        fringe.style.height = '' + this.value + suffix;
        console.log(this.name);
        console.log(this.value);
    }

    function handleUpdateColor() {
        hair.style.backgroundColor = '' + this.value;
        fringe.style.backgroundColor = '' + this.value;
        console.log(this.name);
        console.log(this.value);
    }
    function handleUpdateColorSkin() {
        skin.style.backgroundColor = '' + this.value;

        console.log(this.name);
        console.log(this.value);
    }
    // input.addEventListener('input', handleUpdate));
    inputFringe.addEventListener('input', handleUpdate);
    // inputEye.addEventListener('input', handleUpdateColor);
    inputSkin.addEventListener('input', handleUpdateColorSkin);
    inputHair.addEventListener('input', handleUpdateColor);
    // inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
});

/***/ })
/******/ ]);