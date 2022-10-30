"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 * src/reducers/flattenContent.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

/* eslint no-param-reassign: ["error", { "props": false }] */

var uid;
var flattenLevel = function flattenLevel(content, parentId) {
  var flatContent = [];
  content.forEach(function (item) {
    var id = item.id || uid;
    uid += 1;
    flatContent.push({
      id: id,
      parentId: item.parentId || parentId,
      icon: item.icon,
      label: item.label,
      to: item.to,
      externalLink: item.externalLink,
      active: false,
      hasActiveChild: false,
      subMenuVisibility: false
    });
    if (typeof item.content !== 'undefined') {
      flatContent = [].concat(_toConsumableArray(flatContent), _toConsumableArray(flattenLevel(item.content, id)));
    }
  });
  return flatContent;
};
var trace;
var mapTrace = function mapTrace(content, parentId) {
  var subItems = content.filter(function (item) {
    return item.parentId === parentId;
  });
  subItems.forEach(function (item) {
    item.trace = _toConsumableArray(trace);
    trace.push(item.id);
    item.hasSubMenu = mapTrace(content, item.id);
    if (item.hasSubMenu) {
      item.to = '#';
    }
    trace.pop();
  });
  return subItems.length > 0;
};
var _default = function _default(content) {
  uid = 1;
  trace = [];
  var flatContent = flattenLevel(content);
  mapTrace(flatContent);
  return flatContent;
};
exports["default"] = _default;