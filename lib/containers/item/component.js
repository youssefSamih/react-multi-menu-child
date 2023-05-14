"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _content = require("../../actions/content");
var _emitters = require("../../actions/emitters");
var _component = _interopRequireDefault(require("../../components/item/component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ItemContainer = function ItemContainer(props) {
  var dispatch = (0, _reactRedux.useDispatch)();
  function toggleSubMenu(e) {
    if (!props.hasSubMenu) return;
    e.preventDefault();
    dispatch((0, _content.changeSubMenuVisibility)(props.reduxUid, props.id, props.trace, !props.subMenuVisibility));
  }
  function activateMe(e) {
    dispatch((0, _emitters.emitSelected)(props.reduxUid, e));
    if (!e || !e.isDefaultPrevented || !e.isDefaultPrevented()) {
      dispatch((0, _content.changeActiveLinkId)(props.reduxUid, props.id));
    }
  }
  _react["default"].useEffect(function () {
    if (!props.expandSubMenuOnActiveChild || !props.hasActiveChild || !props.hasSubMenu) return;
    dispatch((0, _content.changeSubMenuVisibility)(props.reduxUid, props.id, props.trace, props.subMenuVisibility));
  }, [props.expandSubMenuOnActiveChild, props.hasActiveChild, props.hasSubMenu]);
  return /*#__PURE__*/_react["default"].createElement(_component["default"], _extends({}, props, {
    toggleSubMenu: toggleSubMenu,
    activateMe: activateMe
  }));
};
var _default = ItemContainer;
exports["default"] = _default;