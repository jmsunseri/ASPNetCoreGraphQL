Themed Snackbar from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/snackbar" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/snackbar;
```

### Usage

```js static
import Snackbar from '@fv-components/snackbar';
```


### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/snackbar#props)

### Examples

#### Baseline

```js
import Snackbar from '@fv-components/snackbar';
import Button from '@fv-components/button';

initialState = {
  open: false,
};

<div>
  <Button
    onClick={() => setState({ open: true })}
  >Trigger Snackbar</Button>
  {state.open && (
    <Snackbar
      message="Amazing Snackbar text!" 
      actionText="dismiss" 
      onClose={() => setState({ open: false })}
    />
  )}
</div>
```


#### Leading

```js
import Snackbar from '@fv-components/snackbar';
import Button from '@fv-components/button';

initialState = {
  open: false,
};

<div>
  <Button
    onClick={() => setState({ open: true })}
  >Trigger Snackbar</Button>
  {state.open && (
    <Snackbar
      message="Amazing Snackbar text!" 
      actionText="dismiss" 
      leading
      onClose={() => setState({ open: false })}
    />
  )}
</div>
```


#### Stacked

```js
import Snackbar from '@fv-components/snackbar';
import Button from '@fv-components/button';

initialState = {
  open: false,
};

<div>
  <Button
    onClick={() => setState({ open: true })}
  >Trigger Snackbar</Button>
  {state.open && (
    <Snackbar
      message="Amazing Snackbar text!" 
      actionText="dismiss" 
      stacked
      onClose={() => setState({ open: false })}
    />
  )}
</div>
```
