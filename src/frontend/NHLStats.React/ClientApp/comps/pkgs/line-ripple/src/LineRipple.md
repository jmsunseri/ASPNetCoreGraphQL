Themed LineRipple from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/line-ripple" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/line-ripple;
```

### Usage

```js static
import LineRipple from '@fv-components/line-ripple';
```


### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/line-ripple#props)

### Examples

```js
import LineRipple from '@fv-components/line-ripple';
import Button from '@fv-components/button';

initialState = {
  rip: false,
};

<div style={{ position: 'relative' }}>
  <Button onClick={() => setState({rip: !state.rip})}>Toggle Ripple</Button>
  <br />
  <br />
  <LineRipple style={{ width: 600, height: 2, background: 'lightblue' }} active={state.rip} />
</div>
```
