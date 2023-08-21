import { Provider } from 'react-redux';

import React from 'react';
import { store } from './store';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
