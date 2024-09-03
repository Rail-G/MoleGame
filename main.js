/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/game.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
    this.gameBlock = document.querySelector('.game-block');
    this.loseScore = document.querySelector('.lose-score');
    this.winScore = document.querySelector('.win-score');
    this.entered = true;
  }
  return _createClass(Game, [{
    key: "drawBlock",
    value: function drawBlock() {
      var _this = this;
      var _loop = function _loop() {
        var div = document.createElement('div');
        div.classList.add('block');
        div.addEventListener('click', function () {
          if (_this.entered) {
            if (div.classList.contains('active-block')) {
              _this.winScore.textContent = Number(_this.winScore.textContent) + 1;
            } else {
              _this.loseScore.textContent = Number(_this.loseScore.textContent) + 1;
            }
          }
          _this.entered = false;
        });
        _this.gameBlock.appendChild(div);
      };
      for (var i = 0; i < 16; i++) {
        _loop();
      }
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
setInterval(function () {
  obj.entered = true;
  obj.npcSteps();
}, 1000);
/******/ })()
;