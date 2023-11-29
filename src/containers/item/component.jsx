/**
 * src/containers/Item.js
 */

import React from "react";
import { useDispatch } from "react-redux";
import {
  changeSubMenuVisibility,
  changeActiveLinkId,
} from "../../actions/content";
import { emitSelected } from "../../actions/emitters";
import Item from "../../components/item/component";

const ItemContainer = (props) => {
  const dispatch = useDispatch();

  function toggleSubMenu(e) {
    if (!props.hasSubMenu) return;
    e.preventDefault();
    dispatch(
      changeSubMenuVisibility(
        props.reduxUid,
        props.id,
        props.trace,
        !props.subMenuVisibility
      )
    );
  }

  function activateMe(e) {
    dispatch(emitSelected(props.reduxUid, e));

    if (!e || !e.isDefaultPrevented || !e.isDefaultPrevented()) {
      dispatch(changeActiveLinkId(props.reduxUid, props.id));
    }
  }

  React.useEffect(() => {
    if (!props.hasActiveChild || !props.hasSubMenu) return;

    dispatch(
      changeSubMenuVisibility(
        props.reduxUid,
        props.id,
        props.trace,
        props.subMenuVisibility
      )
    );
  }, [props.hasActiveChild, props.hasSubMenu]);

  return (
    <Item {...props} toggleSubMenu={toggleSubMenu} activateMe={activateMe} />
  );
};

export default ItemContainer;
