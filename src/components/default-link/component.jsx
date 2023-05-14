import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DefaultLink = ({
  className,
  classNameActive,
  classNameHasActiveChild,
  active,
  hasActiveChild,
  to,
  externalLink,
  hasSubMenu,
  toggleSubMenu,
  activateMe,
  children,
  toggleOnHover,
}) => {
  const toggleClick =
    !toggleOnHover || hasActiveChild ? toggleSubMenu : undefined;

  return (
    <a
      className={classnames(
        className,
        active && classNameActive,
        hasActiveChild && classNameHasActiveChild
      )}
      href={to}
      onClick={hasSubMenu ? toggleClick : activateMe}
      target={externalLink ? "_blank" : undefined}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

DefaultLink.defaultProps = {
  externalLink: false,
  toggleSubMenu: null,
};

DefaultLink.propTypes = {
  className: PropTypes.string.isRequired,
  toggleOnHover: PropTypes.bool,
  classNameActive: PropTypes.string.isRequired,
  classNameHasActiveChild: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  hasActiveChild: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  externalLink: PropTypes.bool,
  hasSubMenu: PropTypes.bool.isRequired,
  toggleSubMenu: PropTypes.func,
  activateMe: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default DefaultLink;
