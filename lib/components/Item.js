"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Container = _interopRequireDefault(require("../containers/Container"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

function Item(_ref, _ref2) {
  var id = _ref.id,
    icon = _ref.icon,
    label = _ref.label,
    to = _ref.to,
    externalLink = _ref.externalLink,
    hasSubMenu = _ref.hasSubMenu,
    active = _ref.active,
    hasActiveChild = _ref.hasActiveChild,
    subMenuVisibility = _ref.subMenuVisibility,
    toggleSubMenu = _ref.toggleSubMenu,
    activateMe = _ref.activateMe,
    reduxStoreName = _ref.reduxStoreName,
    reduxUid = _ref.reduxUid;
  var classStore = _ref2.classStore,
    LinkComponent = _ref2.LinkComponent;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _classnames["default"])(classStore.classItem, active && classStore.classItemActive, hasActiveChild && classStore.classItemHasActiveChild, hasSubMenu && subMenuVisibility && classStore.classItemHasVisibleChild)
  }, /*#__PURE__*/_react["default"].createElement(LinkComponent, {
    className: classStore.classLink,
    classNameActive: classStore.classLinkActive,
    classNameHasActiveChild: classStore.classLinkHasActiveChild,
    active: active,
    hasActiveChild: hasActiveChild,
    id: id,
    to: to,
    label: label,
    externalLink: externalLink,
    hasSubMenu: hasSubMenu,
    toggleSubMenu: toggleSubMenu,
    activateMe: activateMe
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: (0, _classnames["default"])(classStore.classIcon, classStore.iconNamePrefix + icon)
  }), label, hasSubMenu && /*#__PURE__*/_react["default"].createElement("i", {
    className: (0, _classnames["default"])(classStore.classStateIcon, classStore.iconNamePrefix + (subMenuVisibility ? classStore.iconNameStateVisible : classStore.iconNameStateHidden))
  })), hasSubMenu && /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    itemId: id,
    visible: subMenuVisibility,
    reduxStoreName: reduxStoreName,
    reduxUid: reduxUid
  }));
}
Item.defaultProps = {
  icon: '',
  label: '',
  to: null,
  externalLink: false,
  toggleSubMenu: null
};
Item.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  icon: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].array, _propTypes["default"].string]),
  to: _propTypes["default"].string,
  externalLink: _propTypes["default"].bool,
  hasSubMenu: _propTypes["default"].bool.isRequired,
  active: _propTypes["default"].bool.isRequired,
  hasActiveChild: _propTypes["default"].bool.isRequired,
  subMenuVisibility: _propTypes["default"].bool.isRequired,
  toggleSubMenu: _propTypes["default"].func,
  activateMe: _propTypes["default"].func.isRequired,
  reduxStoreName: _propTypes["default"].string.isRequired,
  reduxUid: _propTypes["default"].number.isRequired
};
Item.contextTypes = {
  classStore: _propTypes["default"].object.isRequired,
  LinkComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]).isRequired
};
var _default = Item;
exports["default"] = _default;