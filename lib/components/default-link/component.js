"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DefaultLink = function DefaultLink(_ref) {
  var className = _ref.className,
    classNameActive = _ref.classNameActive,
    classNameHasActiveChild = _ref.classNameHasActiveChild,
    active = _ref.active,
    hasActiveChild = _ref.hasActiveChild,
    to = _ref.to,
    externalLink = _ref.externalLink,
    hasSubMenu = _ref.hasSubMenu,
    toggleSubMenu = _ref.toggleSubMenu,
    activateMe = _ref.activateMe,
    children = _ref.children,
    toggleOnHover = _ref.toggleOnHover;
  var toggleClick = !toggleOnHover || hasActiveChild ? toggleSubMenu : undefined;
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: (0, _classnames["default"])(className, active && classNameActive, hasActiveChild && classNameHasActiveChild),
    href: to,
    onClick: hasSubMenu ? toggleClick : activateMe,
    target: externalLink ? "_blank" : undefined,
    rel: "noreferrer"
  }, children);
};
DefaultLink.defaultProps = {
  externalLink: false,
  toggleSubMenu: null
};
DefaultLink.propTypes = {
  className: _propTypes["default"].string.isRequired,
  toggleOnHover: _propTypes["default"].bool,
  classNameActive: _propTypes["default"].string.isRequired,
  classNameHasActiveChild: _propTypes["default"].string.isRequired,
  active: _propTypes["default"].bool.isRequired,
  hasActiveChild: _propTypes["default"].bool.isRequired,
  to: _propTypes["default"].string.isRequired,
  externalLink: _propTypes["default"].bool,
  hasSubMenu: _propTypes["default"].bool.isRequired,
  toggleSubMenu: _propTypes["default"].func,
  activateMe: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].array]).isRequired
};
var _default = DefaultLink;
exports["default"] = _default;