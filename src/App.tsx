import React, { createContext } from 'react';
import { LinearProgress } from '@material-ui/core';
import ErrorBoundary from 'components/error-boundary';
import { MnMProvider } from '@mnm-tech/provider';

import 'react-toastify/dist/ReactToastify.css';

import 'App.scss';

/* App context */
export const AppContext = createContext({
  userProfileImage: '',
  setUserProfileImage: (userProfileImage: string) => {},
});

//@ts-ignore
const ChildApp1 = React.lazy(() => import('mnmMfeChildApp1/App'));
//@ts-ignore
const ChildApp2 = React.lazy(() => import('mnmMfeChildApp2/App'));
//@ts-ignore
const Image = React.lazy(() => import('mnmMfeChildApp2/components/Image'));

const App = () => {
  return (
    <MnMProvider>
      <React.Suspense fallback={<LinearProgress />}>
        <div className="mfe-container">
          <span className="mfe-container__heading">Container APP</span>
          <ErrorBoundary key="image-component">
            <div className="mfe-container__logo">
              <Image src="./assets/logo.png" />
            </div>
            <div className="mfe-container__company-logo">
              <Image src="./assets/htec-logo.png" />
            </div>
          </ErrorBoundary>
          <div className="mfe-container__child-1">
            <ErrorBoundary key="child-app-1">
              <ChildApp1 />
            </ErrorBoundary>
          </div>
          <div className="mfe-container__child-2">
            <ErrorBoundary key="child-app-2">
              <ChildApp2 />
            </ErrorBoundary>
          </div>
        </div>
      </React.Suspense>
    </MnMProvider>
  );
};

export default App;
