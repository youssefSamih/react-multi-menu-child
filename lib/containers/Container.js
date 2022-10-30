"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _Container = _interopRequireDefault(require("../components/Container"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * src/containers/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var mapStateToProps = function mapStateToProps(store, ownProps) {
  return {
    items: store[ownProps.reduxStoreName].content[ownProps.reduxUid].filter(function (item) {
      return item.parentId === ownProps.itemId;
    })
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps)(_Container["default"]);
exports["default"] = _default;