import * as React from 'react';
import Main from './src/screens/main';
import {AppProvider} from "./src/context/AppContext"

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

