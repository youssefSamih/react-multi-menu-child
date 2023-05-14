"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _content = require("../actions/content");
var _flattenContent = _interopRequireDefault(require("./flattenContent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var item = function item(state, action) {
  switch (action.type) {
    case "CHANGE_SUBMENU_VISIBILITY":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          subMenuVisibility: state.id === action.id ? action.subMenuVisibility : action.trace.indexOf(state.id) !== -1
        });
      }
    case "CHANGE_ACTIVE_LINK_FROM_LOCATION":
    case "CHANGE_ACTIVE_LINK":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          active: state.id === action.id,
          hasActiveChild: action.trace.indexOf(state.id) !== -1
        });
      }
    default:
      {
        return state;
      }
  }
};
var findItem = function findItem(content, value, prop) {
  return content.find(function (i) {
    return i[prop] === value;
  });
};
var content = function content() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "UPDATE_CONTENT":
      {
        return (0, _flattenContent["default"])(action.content);
      }
    case "CHANGE_SUBMENU_VISIBILITY":
      {
        return state.map(function (i) {
          return item(i, action);
        });
      }
    case "CHANGE_ACTIVE_LINK_FROM_LOCATION":
    case "CHANGE_ACTIVE_LINK":
      {
        var activeItem;
        if (action.type === "CHANGE_ACTIVE_LINK_FROM_LOCATION") {
          var locationSets = [window.location.hash,
          // #hash
          window.location.pathname + window.location.search,
          // /path?search
          window.location.pathname + window.location.search + window.location.hash,
          // /path?s#hash
          window.location.pathname.slice(1) + window.location.search,
          // path?search
          window.location.pathname.slice(1) + window.location.search + window.location.hash
          // path?s#hash
          ];

          if (window.location.hash.startsWith("#")) {
            locationSets.push(window.location.hash.substring(1));
          }
          activeItem = state.find(function (i) {
            return locationSets.indexOf(i.to) !== -1;
          });
        } else {
          activeItem = findItem(state, action.value, action.propName);
        }

        // If metismenu user tries to activate non-exist item
        if (!activeItem) return state;
        var _activeItem = activeItem,
          id = _activeItem.id,
          parentId = _activeItem.parentId,
          trace = _activeItem.trace;
        var stage = state.map(function (i) {
          return item(i, _objectSpread({
            id: id,
            trace: trace
          }, action));
        });

        // Trace also keeps parentId nonetheless it doesn't matter
        return content(stage, (0, _content.changeSubMenuVisibility)(action.reduxUid, parentId, trace, true));
      }
    default:
      {
        return state;
      }
  }
};
var multiContent = function multiContent() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (typeof action.reduxUid === "undefined") return state;
  var reduxUid = action.reduxUid;
  var newState = _objectSpread({}, state);
  newState[reduxUid] = content(state[reduxUid], action);
  return newState;
};
var _default = multiContent;
exports["default"] = _default;