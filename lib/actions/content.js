"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateContent = exports.changeSubMenuVisibility = exports.changeActiveLinkTo = exports.changeActiveLinkLabel = exports.changeActiveLinkId = exports.changeActiveLinkFromLocation = void 0;
/**
 * @file actions/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

var updateContent = function updateContent(reduxUid, content) {
  return {
    type: "UPDATE_CONTENT",
    reduxUid: reduxUid,
    content: content
  };
};
exports.updateContent = updateContent;
var changeSubMenuVisibility = function changeSubMenuVisibility(reduxUid, id, trace, subMenuVisibility) {
  return {
    type: "CHANGE_SUBMENU_VISIBILITY",
    reduxUid: reduxUid,
    id: id,
    trace: trace,
    subMenuVisibility: subMenuVisibility
  };
};
exports.changeSubMenuVisibility = changeSubMenuVisibility;
var changeActiveLinkId = function changeActiveLinkId(reduxUid, value) {
  return {
    type: "CHANGE_ACTIVE_LINK",
    reduxUid: reduxUid,
    propName: "id",
    value: value
  };
};
exports.changeActiveLinkId = changeActiveLinkId;
var changeActiveLinkTo = function changeActiveLinkTo(reduxUid, value) {
  return {
    type: "CHANGE_ACTIVE_LINK",
    reduxUid: reduxUid,
    propName: "to",
    value: value
  };
};
exports.changeActiveLinkTo = changeActiveLinkTo;
var changeActiveLinkLabel = function changeActiveLinkLabel(reduxUid, value) {
  return {
    type: "CHANGE_ACTIVE_LINK",
    reduxUid: reduxUid,
    propName: "label",
    value: value
  };
};
exports.changeActiveLinkLabel = changeActiveLinkLabel;
var changeActiveLinkFromLocation = function changeActiveLinkFromLocation(reduxUid) {
  return {
    type: "CHANGE_ACTIVE_LINK_FROM_LOCATION",
    reduxUid: reduxUid
  };
};
exports.changeActiveLinkFromLocation = changeActiveLinkFromLocation;