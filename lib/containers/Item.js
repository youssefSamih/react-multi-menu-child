"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _content = require("../actions/content");
var _emitters = require("../actions/emitters");
var _Item = _interopRequireDefault(require("../components/Item"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * src/containers/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleSubMenu: function toggleSubMenu(e) {
      if (!ownProps.hasSubMenu) return;
      e.preventDefault();
      dispatch((0, _content.changeSubMenuVisibility)(ownProps.reduxUid, ownProps.id, ownProps.trace, !ownProps.subMenuVisibility));
    },
    activateMe: function activateMe(e) {
      dispatch((0, _emitters.emitSelected)(ownProps.reduxUid, e));
      if (!e || !e.isDefaultPrevented || !e.isDefaultPrevented()) {
        dispatch((0, _content.changeActiveLinkId)(ownProps.reduxUid, ownProps.id));
      }
    }
  };
};
exports.mapDispatchToProps = mapDispatchToProps;
var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Item["default"]);
exports["default"] = _default;