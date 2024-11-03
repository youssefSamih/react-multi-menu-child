import React, { useEffect, useImperativeHandle } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Link from '../default-link/component';
import {
  updateContent,
  changeActiveLinkId,
  changeActiveLinkTo,
  changeActiveLinkLabel,
  changeActiveLinkFromLocation,
} from '../../actions/content';
import { updateListener } from '../../actions/emitters';
import MainContainer from '../../containers/main/component';

const generateUUID = () => {
  let uuid = '';
  const hexDigits = '0123456789abcdef';

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += '-';
    } else if (i === 14) {
      uuid += '4';
    } else if (i === 19) {
      uuid += hexDigits.substr((Math.random() * 4) | (0 + 8), 1);
    } else {
      uuid += hexDigits.substr(Math.random() * 16, 1);
    }
  }

  return uuid;
};

const reduxUid = generateUUID();

const MetisMenu = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const classStore = {
    classMainWrapper: classnames(
      { metismenu: !props.noBuiltInClassNames },
      props.className
    ),
    classContainer:
      typeof props.classNameContainer === 'function'
        ? props.classNameContainer
        : classnames(
            { 'metismenu-container': !props.noBuiltInClassNames },
            props.classNameContainer
          ),
    classContainerVisible: classnames(
      { visible: !props.noBuiltInClassNames },
      props.classNameContainerVisible
    ),
    classItem: classnames(
      { 'metismenu-item': !props.noBuiltInClassNames },
      props.classNameItem
    ),
    classLink: classnames(
      { 'metismenu-link': !props.noBuiltInClassNames },
      props.classNameLink
    ),
    classItemActive: props.classNameItemActive,
    classItemHasActiveChild: props.classNameItemHasActiveChild,
    classItemHasVisibleChild: props.classNameItemHasVisibleChild,
    classLinkActive: classnames(
      { active: !props.noBuiltInClassNames },
      props.classNameLinkActive
    ),
    classLinkHasActiveChild: classnames(
      { 'has-active-child': !props.noBuiltInClassNames },
      props.classNameLinkHasActiveChild
    ),
    classIcon: classnames(
      { 'metismenu-icon': !props.noBuiltInClassNames },
      props.classNameIcon
    ),
    classStateIcon: classnames(
      { 'metismenu-state-icon': !props.noBuiltInClassNames },
      props.classNameStateIcon
    ),

    iconNamePrefix: props.iconNamePrefix,
    iconNameStateHidden: props.iconNameStateHidden,
    iconNameStateVisible: props.iconNameStateVisible,
  };

  useEffect(() => {
    if (props.onSelected) {
      dispatch(updateListener(reduxUid, props.onSelected));
    }
  }, [dispatch, props.onSelected]);

  useEffect(() => {
    if (props.content) {
      dispatch(updateContent(reduxUid, props.content));
      updateActiveLink(props);
    }
  }, [dispatch, props.content]);

  useEffect(() => {
    if (
      props.activeLinkId !== undefined ||
      props.activeLinkTo !== undefined ||
      props.activeLinkLabel !== undefined ||
      props.activeLinkFromLocation !== undefined
    ) {
      updateActiveLink(props);
    }
  }, [
    props.activeLinkId,
    props.activeLinkTo,
    props.activeLinkLabel,
    props.activeLinkFromLocation,
  ]);

  function updateActiveLink(props) {
    if (props.activeLinkId) return handleChangeActiveLinkId(props.activeLinkId);
    if (props.activeLinkTo) return handleChangeActiveLinkTo(props.activeLinkTo);
    if (props.activeLinkLabel)
      return handleChangeActiveLinkLabel(props.activeLinkLabel);
    if (props.activeLinkFromLocation)
      return handleChangeActiveLinkFromLocation();
  }

  function handleChangeActiveLinkId(value) {
    dispatch(changeActiveLinkId(reduxUid, value));
  }

  function handleChangeActiveLinkTo(value) {
    dispatch(changeActiveLinkTo(reduxUid, value));
  }

  function handleChangeActiveLinkLabel(value) {
    dispatch(changeActiveLinkLabel(reduxUid, value));
  }

  function handleChangeActiveLinkFromLocation() {
    dispatch(changeActiveLinkFromLocation(reduxUid));
  }

  useImperativeHandle(ref, () => ({
    handleChangeActiveLinkId,
    handleChangeActiveLinkTo,
    handleChangeActiveLinkLabel,
    handleChangeActiveLinkFromLocation,
  }));

  return (
    <div className={classStore.classMainWrapper}>
      <MainContainer
        classStore={classStore}
        LinkComponent={props.LinkComponent}
        reduxStoreName={props.reduxStoreName}
        toggleOnHover={props.toggleOnHover}
        reduxUid={reduxUid}
      />
    </div>
  );
});

MetisMenu.defaultProps = {
  content: [],
  LinkComponent: Link,
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
  iconNamePrefix: null,
  iconNameStateHidden: 'caret-left',
  iconNameStateVisible: 'caret-left rotate-minus-90',
  activeLinkId: null,
  activeLinkTo: null,
  activeLinkLabel: null,
  activeLinkFromLocation: false,
  onSelected: null,
  useExternalReduxStore: null,
  reduxStoreName: 'metisMenuStore',
};

MetisMenu.propTypes = {
  content: PropTypes.arrayOf(PropTypes.any),
  toggleOnHover: PropTypes.bool,

  LinkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  noBuiltInClassNames: PropTypes.bool,
  className: PropTypes.string,
  classNameContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  classNameContainerVisible: PropTypes.string,
  classNameItem: PropTypes.string,
  classNameItemActive: PropTypes.string,
  classNameItemHasActiveChild: PropTypes.string,
  classNameItemHasVisibleChild: PropTypes.string,
  classNameLink: PropTypes.string,
  classNameLinkActive: PropTypes.string,
  classNameLinkHasActiveChild: PropTypes.string,
  classNameIcon: PropTypes.string,
  classNameStateIcon: PropTypes.string,
  iconNamePrefix: PropTypes.string,
  iconNameStateHidden: PropTypes.string,
  iconNameStateVisible: PropTypes.string,

  activeLinkId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  activeLinkTo: PropTypes.string,
  activeLinkLabel: PropTypes.string,
  activeLinkFromLocation: PropTypes.bool,

  onSelected: PropTypes.func,
  useExternalReduxStore: PropTypes.object,
  reduxStoreName: PropTypes.string,
};

export default MetisMenu;
