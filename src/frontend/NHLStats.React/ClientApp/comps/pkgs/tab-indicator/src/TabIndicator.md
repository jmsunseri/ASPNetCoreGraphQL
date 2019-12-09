Themed TabIndicator from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/tab-indicator" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/tab-indicator;
```

### Usage

```js static
import TabIndicator from '@fv-components/tab-indicator';
```


### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/tab-indicator#props)

### Examples

#### With an Underline

```js
import TabIndicator from '@fv-components/tab-indicator';

initialState = {
  active: true,
};

<div style={{ position: 'relative', padding: 10 }}>
  <TabIndicator active={state.active} />
</div>
```


#### With Icon

```js
import TabIndicator from '@fv-components/tab-indicator';
import MaterialIcon from '@fv-components/material-icon';

initialState = {
  active: true,
};

<div style={{ position: 'relative', padding: 10 }}>
  <TabIndicator
    active={state.active}
    icon
  >
    <MaterialIcon icon='star' />
  </TabIndicator>
</div>
```
