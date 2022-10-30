"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _content = _interopRequireDefault(require("./content"));
var _emitters = _interopRequireDefault(require("./emitters"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * src/reducers/index.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */
/* eslint-env browser */
var _default = (0, _redux.combineReducers)({
  content: _content["default"],
  emitters: _emitters["default"]
});
exports["default"] = _default;