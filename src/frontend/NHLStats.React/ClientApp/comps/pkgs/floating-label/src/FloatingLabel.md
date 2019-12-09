Themed FloatingLabel from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/floating-label" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/floating-label;
```

### Usage

```js static
import FloatingLabel from '@fv-components/floating-label';
```


### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/floating-label#props)

### Examples

#### Shake

```js
import FloatingLabel from '@fv-components/floating-label';
import Button from '@fv-components/button';

let floatingLabelElement = React.createRef();
let float = false;

<div style={{position: 'relative'}}>
  <br />
  <br />
  <Button onClick={() => {floatingLabelElement.current.shake()}}>Shake label</Button>
  <FloatingLabel float={true} ref={floatingLabelElement}>
    My Label
  </FloatingLabel>
</div>
```

#### Toggle Float

```js
import FloatingLabel from '@fv-components/floating-label';
import Button from '@fv-components/button';

let floatingLabelElement = React.createRef();
initialState = {
  float: true,
};

<div style={{position: 'relative'}}>
  <br />
  <br />
  <Button onClick={() => {setState({ float: !state.float})}}>Float label</Button>
  <FloatingLabel
    ref={floatingLabelElement}
    float={state.float}
  >
    My Label
  </FloatingLabel>
</div>
```
