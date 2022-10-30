"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * @file src/reducers/internal.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 03.02.2017
 */
/* eslint-env browser */
var _default = (0, _redux.combineReducers)({
  metisMenuStore: _index["default"]
});
exports["default"] = _default;