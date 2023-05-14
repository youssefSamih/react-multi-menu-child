/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import MainContainer from "../../containers/main/component";

function Item({
  id,
  icon,
  label,
  to,
  externalLink,
  hasSubMenu,
  active,
  hasActiveChild,
  subMenuVisibility,
  toggleSubMenu,
  activateMe,
  reduxStoreName,
  reduxUid,
  classStore,
  LinkComponent,
  toggleOnHover,
  expandSubMenuOnActiveChild,
}) {
  return (
    <li
      className={classnames(
        classStore?.classItem,
        active && classStore.classItemActive,
        hasActiveChild && classStore.classItemHasActiveChild,
        hasSubMenu && subMenuVisibility && classStore.classItemHasVisibleChild
      )}
      onMouseOver={
        toggleOnHover && !hasActiveChild && hasSubMenu
          ? toggleSubMenu
          : undefined
      }
      onMouseOut={
        toggleOnHover && !hasActiveChild && hasSubMenu
          ? toggleSubMenu
          : undefined
      }
    >
      {LinkComponent ? (
        <LinkComponent
          className={classStore?.classLink}
          classNameActive={classStore?.classLinkActive}
          classNameHasActiveChild={classStore?.classLinkHasActiveChild}
          active={active}
          hasActiveChild={hasActiveChild}
          id={id}
          to={to}
          label={label}
          externalLink={externalLink}
          hasSubMenu={hasSubMenu}
          toggleSubMenu={toggleSubMenu}
          activateMe={activateMe}
          toggleOnHover={toggleOnHover}
        >
          <i
            className={classnames(
              classStore?.classIcon,
              (classStore?.iconNamePrefix || "") + icon
            )}
          />
          {label}
          {hasSubMenu ? (
            <i
              className={classnames(
                classStore.classStateIcon,
                classStore.iconNamePrefix +
                  (subMenuVisibility
                    ? classStore.iconNameStateVisible
                    : classStore.iconNameStateHidden)
              )}
            />
          ) : undefined}
        </LinkComponent>
      ) : undefined}

      {hasSubMenu ? (
        <MainContainer
          itemId={id}
          classStore={classStore}
          LinkComponent={LinkComponent}
          visible={subMenuVisibility}
          reduxStoreName={reduxStoreName}
          reduxUid={reduxUid}
          toggleOnHover={toggleOnHover}
        />
      ) : undefined}
    </li>
  );
}

Item.defaultProps = {
  icon: "",
  label: "",
  to: null,
  externalLink: false,
  toggleSubMenu: null,
};

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  toggleOnHover: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
  to: PropTypes.string,
  externalLink: PropTypes.bool,
  hasSubMenu: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  hasActiveChild: PropTypes.bool.isRequired,
  subMenuVisibility: PropTypes.bool.isRequired,
  toggleSubMenu: PropTypes.func,
  activateMe: PropTypes.func.isRequired,
  reduxStoreName: PropTypes.string.isRequired,
  reduxUid: PropTypes.number.isRequired,
};

export default Item;
