"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateListener = exports.emitSelected = exports["default"] = void 0;
/**
 * @file actions/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var emitSelected = function emitSelected(reduxUid, e) {
  return {
    type: 'EMIT_SELECTED',
    reduxUid: reduxUid,
    event: e
  };
};
exports.emitSelected = emitSelected;
var updateListener = function updateListener(reduxUid, listener) {
  return {
    type: 'UPDATE_LISTENER',
    reduxUid: reduxUid,
    listener: listener
  };
};
exports.updateListener = updateListener;
var _default = true;
exports["default"] = _default;