"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _component = _interopRequireDefault(require("../../components/container/component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var MainContainer = function MainContainer(props) {
  var _store$props$reduxSto;
  var store = (0, _reactRedux.useSelector)(function (store) {
    return store;
  });
  var items = (_store$props$reduxSto = store[props.reduxStoreName].content[props.reduxUid]) === null || _store$props$reduxSto === void 0 ? void 0 : _store$props$reduxSto.filter(function (item) {
    return item.parentId === props.itemId;
  });
  return /*#__PURE__*/_react["default"].createElement(_component["default"], _extends({}, props, {
    items: items
  }));
};
var _default = MainContainer;
exports["default"] = _default;