import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import MetisMenu from "./metis-menu/component";
import internalReducers from "../reducers/internal";

const MultiChildMenu = React.forwardRef((props, ref) => {
  const store = createStore(internalReducers);

  return (
    <Provider store={store}>
      <MetisMenu ref={ref} {...props} />
    </Provider>
  );
});

export default MultiChildMenu;
