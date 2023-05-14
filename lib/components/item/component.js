"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _component = _interopRequireDefault(require("../../containers/main/component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

function Item(_ref) {
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
    reduxUid = _ref.reduxUid,
    classStore = _ref.classStore,
    LinkComponent = _ref.LinkComponent,
    toggleOnHover = _ref.toggleOnHover,
    expandSubMenuOnActiveChild = _ref.expandSubMenuOnActiveChild;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _classnames["default"])(classStore === null || classStore === void 0 ? void 0 : classStore.classItem, active && classStore.classItemActive, hasActiveChild && classStore.classItemHasActiveChild, hasSubMenu && subMenuVisibility && classStore.classItemHasVisibleChild),
    onMouseOver: toggleOnHover && !hasActiveChild && hasSubMenu ? toggleSubMenu : undefined,
    onMouseOut: toggleOnHover && !hasActiveChild && hasSubMenu ? toggleSubMenu : undefined
  }, LinkComponent ? /*#__PURE__*/_react["default"].createElement(LinkComponent, {
    className: classStore === null || classStore === void 0 ? void 0 : classStore.classLink,
    classNameActive: classStore === null || classStore === void 0 ? void 0 : classStore.classLinkActive,
    classNameHasActiveChild: classStore === null || classStore === void 0 ? void 0 : classStore.classLinkHasActiveChild,
    active: active,
    hasActiveChild: hasActiveChild,
    id: id,
    to: to,
    label: label,
    externalLink: externalLink,
    hasSubMenu: hasSubMenu,
    toggleSubMenu: toggleSubMenu,
    activateMe: activateMe,
    toggleOnHover: toggleOnHover
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: (0, _classnames["default"])(classStore === null || classStore === void 0 ? void 0 : classStore.classIcon, ((classStore === null || classStore === void 0 ? void 0 : classStore.iconNamePrefix) || "") + icon)
  }), label, hasSubMenu ? /*#__PURE__*/_react["default"].createElement("i", {
    className: (0, _classnames["default"])(classStore.classStateIcon, classStore.iconNamePrefix + (subMenuVisibility ? classStore.iconNameStateVisible : classStore.iconNameStateHidden))
  }) : undefined) : undefined, hasSubMenu ? /*#__PURE__*/_react["default"].createElement(_component["default"], {
    itemId: id,
    classStore: classStore,
    LinkComponent: LinkComponent,
    visible: subMenuVisibility,
    reduxStoreName: reduxStoreName,
    reduxUid: reduxUid,
    toggleOnHover: toggleOnHover
  }) : undefined);
}
Item.defaultProps = {
  icon: "",
  label: "",
  to: null,
  externalLink: false,
  toggleSubMenu: null
};
Item.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  toggleOnHover: _propTypes["default"].bool,
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
  reduxUid: _propTypes["default"].string.isRequired
};
var _default = Item;
exports["default"] = _default;