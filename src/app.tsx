import * as React from 'react';

interface AppProps {
  lang: string;
  username: string;
}

export const App = ({ lang, username }: AppProps): React.ReactElement => {
  return (
    <h1>
      Hi {username}, welcome to {lang}!
    </h1>
  );
};
