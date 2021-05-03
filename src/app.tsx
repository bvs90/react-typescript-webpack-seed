import * as React from 'react';

export const App = ({ username, lang }): React.ReactElement => {
  return (
    <h1>
      Hi {username}, welcome to {lang}!
    </h1>
  )

}