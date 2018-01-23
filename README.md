# redux-thunk-action-creator

Create a simple thunk action creator for redux-thunk

# Install

```
npm install --save redux-thunk-action-creator
```

# Usage

```
// actions.js

import createThunkAction from 'redux-thunk-action-creator';

import { subscribe } from './thunks';

export const subscribe = createThunkAction(subscribe);

// thunks.js

export const subscribe = (args) => (dispatch, getState) => {
  ...
};

// MyComponent.js

import * as actions from 'actions'

...

export default connect(null, actions)(MyComponent);

```