"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _component = _interopRequireDefault(require("../../containers/item/component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Container(_ref) {
  var items = _ref.items,
    visible = _ref.visible,
    itemId = _ref.itemId,
    reduxStoreName = _ref.reduxStoreName,
    reduxUid = _ref.reduxUid,
    classStore = _ref.classStore,
    LinkComponent = _ref.LinkComponent,
    toggleOnHover = _ref.toggleOnHover;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _classnames["default"])(classStore && typeof classStore.classContainer === "function" ? classStore.classContainer({
      itemId: itemId,
      visible: visible,
      items: items
    }) : classStore === null || classStore === void 0 ? void 0 : classStore.classContainer, visible && (classStore === null || classStore === void 0 ? void 0 : classStore.classContainerVisible))
  }, items === null || items === void 0 ? void 0 : items.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_component["default"], _extends({
      key: item.id || "_".concat(i),
      reduxStoreName: reduxStoreName,
      reduxUid: reduxUid,
      LinkComponent: LinkComponent,
      classStore: classStore,
      toggleOnHover: toggleOnHover
    }, item));
  }));
}
Container.defaultProps = {
  itemId: null,
  visible: false
};
Container.propTypes = {
  itemId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  items: _propTypes["default"].arrayOf(_propTypes["default"].object),
  visible: _propTypes["default"].bool,
  reduxStoreName: _propTypes["default"].string.isRequired,
  reduxUid: _propTypes["default"].number.isRequired,
  toggleOnHover: _propTypes["default"].bool,
  expandSubMenuOnActiveChild: _propTypes["default"].bool
};
var _default = Container;
exports["default"] = _default;