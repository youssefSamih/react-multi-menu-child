"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _component = _interopRequireDefault(require("../default-link/component"));
var _content = require("../../actions/content");
var _emitters = require("../../actions/emitters");
var _component2 = _interopRequireDefault(require("../../containers/main/component"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var reduxUid = 0;
var MetisMenu = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var dispatch = (0, _reactRedux.useDispatch)();
  var classStore = {
    classMainWrapper: (0, _classnames["default"])({
      metismenu: !props.noBuiltInClassNames
    }, props.className),
    classContainer: typeof props.classNameContainer === "function" ? props.classNameContainer : (0, _classnames["default"])({
      "metismenu-container": !props.noBuiltInClassNames
    }, props.classNameContainer),
    classContainerVisible: (0, _classnames["default"])({
      visible: !props.noBuiltInClassNames
    }, props.classNameContainerVisible),
    classItem: (0, _classnames["default"])({
      "metismenu-item": !props.noBuiltInClassNames
    }, props.classNameItem),
    classLink: (0, _classnames["default"])({
      "metismenu-link": !props.noBuiltInClassNames
    }, props.classNameLink),
    classItemActive: props.classNameItemActive,
    classItemHasActiveChild: props.classNameItemHasActiveChild,
    classItemHasVisibleChild: props.classNameItemHasVisibleChild,
    classLinkActive: (0, _classnames["default"])({
      active: !props.noBuiltInClassNames
    }, props.classNameLinkActive),
    classLinkHasActiveChild: (0, _classnames["default"])({
      "has-active-child": !props.noBuiltInClassNames
    }, props.classNameLinkHasActiveChild),
    classIcon: (0, _classnames["default"])({
      "metismenu-icon": !props.noBuiltInClassNames
    }, props.classNameIcon),
    classStateIcon: (0, _classnames["default"])({
      "metismenu-state-icon": !props.noBuiltInClassNames
    }, props.classNameStateIcon),
    iconNamePrefix: props.iconNamePrefix,
    iconNameStateHidden: props.iconNameStateHidden,
    iconNameStateVisible: props.iconNameStateVisible
  };
  (0, _react.useEffect)(function () {
    if (props.onSelected) {
      dispatch((0, _emitters.updateListener)(reduxUid, props.onSelected));
    }
  }, [dispatch, props.onSelected]);
  (0, _react.useEffect)(function () {
    if (props.content) {
      dispatch((0, _content.updateContent)(reduxUid, props.content));
      updateActiveLink(props);
    }
  }, [dispatch, props.content]);
  (0, _react.useEffect)(function () {
    if (props.activeLinkId !== undefined || props.activeLinkTo !== undefined || props.activeLinkLabel !== undefined || props.activeLinkFromLocation !== undefined) {
      updateActiveLink(props);
    }
  }, [props.activeLinkId, props.activeLinkTo, props.activeLinkLabel, props.activeLinkFromLocation]);
  function updateActiveLink(props) {
    if (props.activeLinkId) return handleChangeActiveLinkId(props.activeLinkId);
    if (props.activeLinkTo) return handleChangeActiveLinkTo(props.activeLinkTo);
    if (props.activeLinkLabel) return handleChangeActiveLinkLabel(props.activeLinkLabel);
    if (props.activeLinkFromLocation) return handleChangeActiveLinkFromLocation();
  }
  function handleChangeActiveLinkId(value) {
    dispatch((0, _content.changeActiveLinkId)(reduxUid, value));
  }
  function handleChangeActiveLinkTo(value) {
    dispatch((0, _content.changeActiveLinkTo)(reduxUid, value));
  }
  function handleChangeActiveLinkLabel(value) {
    dispatch((0, _content.changeActiveLinkLabel)(reduxUid, value));
  }
  function handleChangeActiveLinkFromLocation() {
    dispatch((0, _content.changeActiveLinkFromLocation)(reduxUid));
  }
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      handleChangeActiveLinkId: handleChangeActiveLinkId,
      handleChangeActiveLinkTo: handleChangeActiveLinkTo,
      handleChangeActiveLinkLabel: handleChangeActiveLinkLabel,
      handleChangeActiveLinkFromLocation: handleChangeActiveLinkFromLocation
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classStore.classMainWrapper
  }, /*#__PURE__*/_react["default"].createElement(_component2["default"], {
    classStore: classStore,
    LinkComponent: props.LinkComponent,
    reduxStoreName: props.reduxStoreName,
    toggleOnHover: props.toggleOnHover,
    reduxUid: reduxUid
  }));
});
MetisMenu.defaultProps = {
  content: [],
  LinkComponent: _component["default"],
  noBuiltInClassNames: false,
  className: null,
  classNameContainer: null,
  classNameContainerVisible: null,
  classNameItem: null,
  classNameItemActive: null,
  classNameItemHasActiveChild: null,
  classNameItemHasVisibleChild: null,
  classNameLink: null,
  classNameLinkActive: null,
  classNameLinkHasActiveChild: null,
  classNameIcon: null,
  classNameStateIcon: null,
  iconNamePrefix: "fa fa-",
  iconNameStateHidden: "caret-left",
  iconNameStateVisible: "caret-left rotate-minus-90",
  activeLinkId: null,
  activeLinkTo: null,
  activeLinkLabel: null,
  activeLinkFromLocation: false,
  onSelected: null,
  useExternalReduxStore: null,
  reduxStoreName: "metisMenuStore"
};
MetisMenu.propTypes = {
  content: _propTypes["default"].arrayOf(_propTypes["default"].any),
  toggleOnHover: _propTypes["default"].bool,
  LinkComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  noBuiltInClassNames: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  classNameContainer: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  classNameContainerVisible: _propTypes["default"].string,
  classNameItem: _propTypes["default"].string,
  classNameItemActive: _propTypes["default"].string,
  classNameItemHasActiveChild: _propTypes["default"].string,
  classNameItemHasVisibleChild: _propTypes["default"].string,
  classNameLink: _propTypes["default"].string,
  classNameLinkActive: _propTypes["default"].string,
  classNameLinkHasActiveChild: _propTypes["default"].string,
  classNameIcon: _propTypes["default"].string,
  classNameStateIcon: _propTypes["default"].string,
  iconNamePrefix: _propTypes["default"].string,
  iconNameStateHidden: _propTypes["default"].string,
  iconNameStateVisible: _propTypes["default"].string,
  activeLinkId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  activeLinkTo: _propTypes["default"].string,
  activeLinkLabel: _propTypes["default"].string,
  activeLinkFromLocation: _propTypes["default"].bool,
  onSelected: _propTypes["default"].func,
  useExternalReduxStore: _propTypes["default"].object,
  reduxStoreName: _propTypes["default"].string
};
var _default = MetisMenu;
exports["default"] = _default;