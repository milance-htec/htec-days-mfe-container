import React, { createContext } from 'react';
import { LinearProgress } from '@material-ui/core';
import ErrorBoundary from 'components/error-boundary';
import { MnMProvider } from '@mnm-tech/provider';

import 'react-toastify/dist/ReactToastify.css';

/* App context */
export const AppContext = createContext({
  userProfileImage: '',
  setUserProfileImage: (userProfileImage: string) => {},
});

//@ts-ignore
const ChildApp1 = React.lazy(() => import('mnmMfeChildApp1/App'));
//@ts-ignore
const ChildApp2 = React.lazy(() => import('mnmMfeChildApp2/App'));

const App = () => {
  return (
    <MnMProvider>
      <React.Suspense fallback={<LinearProgress />}>
        <ErrorBoundary key="child-app-1">
          <ChildApp1 />
        </ErrorBoundary>
        <ErrorBoundary>
          <ChildApp2 key="child-app-2" />
        </ErrorBoundary>
      </React.Suspense>
    </MnMProvider>
  );
};

export default App;
