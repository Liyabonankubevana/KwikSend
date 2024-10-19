import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Amplify-powered app!</h1>
    </div>
  );
}

export default withAuthenticator(App);