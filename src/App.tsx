import React from 'react';

import GlobalStyles from '~/theme/global';
import { ExampleComponent } from '~/components';

export default function App() {
  return (
    <div>
      <GlobalStyles />

      <ExampleComponent title="Hello World" />
    </div>
  );
}
