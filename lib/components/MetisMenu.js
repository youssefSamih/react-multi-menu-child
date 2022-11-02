"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _classnames = _interopRequireDefault(require("classnames"));
var _Container = _interopRequireDefault(require("../containers/Container"));
var _DefaultLink = _interopRequireDefault(require("./DefaultLink"));
var _internal = _interopRequireDefault(require("../reducers/internal"));
var _content = require("../actions/content");
var _emitters = require("../actions/emitters");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var lastReduxUid = -1;
var MetisMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(MetisMenu, _React$Component);
  var _super = _createSuper(MetisMenu);
  function MetisMenu(props) {
    var _this;
    _classCallCheck(this, MetisMenu);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (nextProps) {
      if (_this.props.content !== nextProps.content) {
        _this.updateContent(nextProps.content);
      }
      if (_this.props.activeLinkId !== nextProps.activeLinkId || _this.props.activeLinkTo !== nextProps.activeLinkTo || _this.props.activeLinkLabel !== nextProps.activeLinkLabel || _this.props.activeLinkFromLocation !== nextProps.activeLinkFromLocation) {
        _this.updateActiveLink(nextProps);
      }
    });
    lastReduxUid += 1;
    _this.reduxUid = lastReduxUid;
    _this.useExternalReduxStore = props.useExternalReduxStore;
    _this.reduxStoreName = props.reduxStoreName;
    if (_this.useExternalReduxStore) {
      _this.store = _this.useExternalReduxStore;
    } else {
      _this.store = (0, _redux.createStore)(_internal["default"]);
    }
    if (props.onSelected) {
      _this.store.dispatch((0, _emitters.updateListener)(_this.reduxUid, props.onSelected));
    }
    _this.LinkComponent = props.LinkComponent;
    if (props.content) {
      _this.updateContent(props.content);
      _this.updateActiveLink(props);
    }
    _this.classStore = {
      classMainWrapper: (0, _classnames["default"])({
        metismenu: !props.noBuiltInClassNames
      }, props.className),
      classContainer: typeof props.classNameContainer === 'function' ? props.classNameContainer : (0, _classnames["default"])({
        'metismenu-container': !props.noBuiltInClassNames
      }, props.classNameContainer),
      classContainerVisible: (0, _classnames["default"])({
        visible: !props.noBuiltInClassNames
      }, props.classNameContainerVisible),
      classItem: (0, _classnames["default"])({
        'metismenu-item': !props.noBuiltInClassNames
      }, props.classNameItem),
      classLink: (0, _classnames["default"])({
        'metismenu-link': !props.noBuiltInClassNames
      }, props.classNameLink),
      classItemActive: props.classNameItemActive,
      classItemHasActiveChild: props.classNameItemHasActiveChild,
      classItemHasVisibleChild: props.classNameItemHasVisibleChild,
      classLinkActive: (0, _classnames["default"])({
        active: !props.noBuiltInClassNames
      }, props.classNameLinkActive),
      classLinkHasActiveChild: (0, _classnames["default"])({
        'has-active-child': !props.noBuiltInClassNames
      }, props.classNameLinkHasActiveChild),
      classIcon: (0, _classnames["default"])({
        'metismenu-icon': !props.noBuiltInClassNames
      }, props.classNameIcon),
      classStateIcon: (0, _classnames["default"])({
        'metismenu-state-icon': !props.noBuiltInClassNames
      }, props.classNameStateIcon),
      iconNamePrefix: props.iconNamePrefix,
      iconNameStateHidden: props.iconNameStateHidden,
      iconNameStateVisible: props.iconNameStateVisible
    };
    return _this;
  }
  _createClass(MetisMenu, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        classStore: this.classStore,
        LinkComponent: this.LinkComponent
      };
    }
  }, {
    key: "changeActiveLinkId",
    value: function changeActiveLinkId(value) {
      this.store.dispatch((0, _content.changeActiveLinkId)(this.reduxUid, value));
    }
  }, {
    key: "changeActiveLinkTo",
    value: function changeActiveLinkTo(value) {
      this.store.dispatch((0, _content.changeActiveLinkTo)(this.reduxUid, value));
    }
  }, {
    key: "changeActiveLinkLabel",
    value: function changeActiveLinkLabel(value) {
      this.store.dispatch((0, _content.changeActiveLinkLabel)(this.reduxUid, value));
    }
  }, {
    key: "changeActiveLinkFromLocation",
    value: function changeActiveLinkFromLocation() {
      this.store.dispatch((0, _content.changeActiveLinkFromLocation)(this.reduxUid));
    }
  }, {
    key: "updateActiveLink",
    value: function updateActiveLink(props) {
      if (props.activeLinkId) this.changeActiveLinkId(props.activeLinkId);else if (props.activeLinkTo) this.changeActiveLinkTo(props.activeLinkTo);else if (props.activeLinkLabel) this.changeActiveLinkLabel(props.activeLinkLabel);else if (props.activeLinkFromLocation) this.changeActiveLinkFromLocation();
    }
  }, {
    key: "updateContent",
    value: function updateContent(content) {
      this.store.dispatch((0, _content.updateContent)(this.reduxUid, content));
    }
  }, {
    key: "render",
    value: function render() {
      var mainWrapper = /*#__PURE__*/_react["default"].createElement("div", {
        className: this.classStore.classMainWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
        reduxStoreName: this.reduxStoreName,
        reduxUid: this.reduxUid
      }));
      if (this.useExternalReduxStore) {
        return mainWrapper;
      }
      return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
        store: this.store
      }, mainWrapper);
    }
  }]);
  return MetisMenu;
}(_react["default"].Component);
MetisMenu.defaultProps = {
  content: [],
  LinkComponent: _DefaultLink["default"],
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
  iconNamePrefix: 'fa fa-',
  iconNameStateHidden: 'caret-left',
  iconNameStateVisible: 'caret-left rotate-minus-90',
  activeLinkId: null,
  activeLinkTo: null,
  activeLinkLabel: null,
  activeLinkFromLocation: false,
  onSelected: null,
  useExternalReduxStore: null,
  reduxStoreName: 'metisMenuStore'
};
MetisMenu.propTypes = {
  content: _propTypes["default"].arrayOf(_propTypes["default"].object),
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
MetisMenu.childContextTypes = {
  classStore: _propTypes["default"].object.isRequired,
  LinkComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]).isRequired
};
var _default = MetisMenu;
exports["default"] = _default;