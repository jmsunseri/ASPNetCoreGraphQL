Themed NotchedOutline from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/notched-outline" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/notched-outline;
```

### Usage

```js static
import NotchedOutline from '@fv-components/notched-outline';
```


### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/notched-outline#props)

### Examples

#### Default

```js
import NotchedOutline from '@fv-components/notched-outline';
import FloatingLabel from '@fv-components/floating-label';

<div style={{ position: 'relative' }}>
  <NotchedOutline notch>
    <FloatingLabel float>Hello World</FloatingLabel>
  </NotchedOutline>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>
```

#### Set Width

```js
import NotchedOutline from '@fv-components/notched-outline';
import FloatingLabel from '@fv-components/floating-label';

<div style={{ position: 'relative' }}>
  <NotchedOutline notch notchWidth={300}>
    <span></span>
  </NotchedOutline>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>
```


#### No Notch

```js
import NotchedOutline from '@fv-components/notched-outline';

<div style={{ position: 'relative' }}>
  <NotchedOutline />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>
```
