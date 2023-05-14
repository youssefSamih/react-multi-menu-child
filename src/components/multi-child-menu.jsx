import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import MetisMenu from "./metis-menu/component";
import internalReducers from "../reducers/internal";

const store = createStore(internalReducers);

const MultiChildMenu = React.forwardRef((props, ref) => {
  return (
    <Provider store={store}>
      <MetisMenu ref={ref} {...props} />
    </Provider>
  );
});

export default MultiChildMenu;
