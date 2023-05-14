/**
 * src/components/container
 */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Item from "../../containers/item/component";

function Container({
  items,
  visible,
  itemId,
  reduxStoreName,
  reduxUid,
  classStore,
  LinkComponent,
  toggleOnHover,
}) {
  return (
    <ul
      className={classnames(
        classStore && typeof classStore.classContainer === "function"
          ? classStore.classContainer({ itemId, visible, items })
          : classStore?.classContainer,
        visible && classStore?.classContainerVisible
      )}
    >
      {items?.map((item, i) => (
        <Item
          key={item.id || `_${i}`}
          reduxStoreName={reduxStoreName}
          reduxUid={reduxUid}
          LinkComponent={LinkComponent}
          classStore={classStore}
          toggleOnHover={toggleOnHover}
          {...item}
        />
      ))}
    </ul>
  );
}

Container.defaultProps = {
  itemId: null,
  visible: false,
};

Container.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  items: PropTypes.arrayOf(PropTypes.object),
  visible: PropTypes.bool,
  reduxStoreName: PropTypes.string.isRequired,
  reduxUid: PropTypes.number.isRequired,
  toggleOnHover: PropTypes.bool,
  expandSubMenuOnActiveChild: PropTypes.bool,
};

export default Container;
