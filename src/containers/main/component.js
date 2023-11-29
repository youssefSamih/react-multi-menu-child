/**
 * src/containers/main
 */

import React from "react";
import { useSelector } from "react-redux";

import Container from "../../components/container/component";

const MainContainer = (props) => {
  const items = useSelector((state) => {
    return (
      state[props.reduxStoreName]?.content[props.reduxUid]?.filter(
        (item) => item.parentId === props.itemId
      ) || []
    );
  });

  return <Container {...props} items={items} />;
};

export default MainContainer;
