/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ gameState)
});

;// CONCATENATED MODULE: ./src/js/points.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Point = /*#__PURE__*/function () {
  function Point() {
    _classCallCheck(this, Point);
    this.loseScore = document.querySelector('.lose-score');
    this.winScore = document.querySelector('.win-score');
  }
  return _createClass(Point, [{
    key: "addPunchPoint",
    value: function addPunchPoint() {
      this.winScore.textContent = Number(this.winScore.textContent) + 1;
    }
  }, {
    key: "addMissPoint",
    value: function addMissPoint() {
      this.loseScore.textContent = Number(this.loseScore.textContent) + 1;
      if (Number(this.loseScore.textContent) == 5) {
        clearInterval(gameState);
        alert('Вы проиграли');
      }
    }
  }]);
}();

;// CONCATENATED MODULE: ./src/js/game.js
function game_typeof(o) { "@babel/helpers - typeof"; return game_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, game_typeof(o); }
function game_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function game_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, game_toPropertyKey(o.key), o); } }
function game_createClass(e, r, t) { return r && game_defineProperties(e.prototype, r), t && game_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function game_toPropertyKey(t) { var i = game_toPrimitive(t, "string"); return "symbol" == game_typeof(i) ? i : i + ""; }
function game_toPrimitive(t, r) { if ("object" != game_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != game_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Game = /*#__PURE__*/function () {
  function Game() {
    game_classCallCheck(this, Game);
    this.gameBlock = document.querySelector('.game-block');
    this.entered = true;
    this.gameState = undefined;
    this.points = new Point();
  }
  return game_createClass(Game, [{
    key: "drawBlock",
    value: function drawBlock() {
      var _this = this;
      for (var i = 0; i < 16; i++) {
        var div = document.createElement('div');
        div.classList.add('block');
        this.gameBlock.appendChild(div);
      }
      document.querySelector('.game-block').addEventListener('click', function (e) {
        if (_this.entered) {
          if (e.target.closest('.block').classList.contains('active-block')) {
            _this.points.addPunchPoint();
          } else {
            _this.points.addMissPoint();
          }
        }
        _this.entered = false;
      });
    }
  }, {
    key: "npcStart",
    value: function npcStart() {
      var firstBlock = this.gameBlock.firstChild;
      firstBlock.classList.add('active-block');
    }
  }, {
    key: "npcSteps",
    value: function npcSteps() {
      var allBlock = this.gameBlock.querySelectorAll('.block');
      var randomId = Math.floor(Math.random() * allBlock.length);
      this.gameBlock.querySelector('.active-block').classList.remove('active-block');
      allBlock[randomId].classList.add('active-block');
    }
  }]);
}();

;// CONCATENATED MODULE: ./src/index.js


var obj = new Game();
obj.drawBlock();
obj.npcStart();
var gameState = setInterval(function () {
  obj.entered = true;
  obj.npcSteps();
}, 1000);
/******/ })()
;