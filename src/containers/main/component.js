/**
 * src/containers/main
 */

import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import Container from "../../components/container/component";

const createSelector = (reduxStoreName, reduxUid, itemId) => (state) => {
  const itemsInStore = state[reduxStoreName]?.content[reduxUid] || [];
  return itemsInStore.filter((item) => item.parentId === itemId);
};

const MainContainer = memo((props) => {
  const items = useSelector(createSelector(props.reduxStoreName, props.reduxUid, props.itemId), {
    equalityFn: shallowEqual
  });

  return <Container {...props} items={items} />;
});

export default MainContainer;
