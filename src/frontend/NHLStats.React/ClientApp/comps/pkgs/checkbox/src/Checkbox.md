Themed Checkbox from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/checkbox" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/checkbox;
```

### Usage

```js static
import Checkbox from '@fv-components/checkbox';
```

```js static
import Checkbox, {
  CheckboxBase,
} from '@fv-components/checkbox';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/checkbox#props)

### Examples

#### Default | Indeterminate | Disabled

```js
import Checkbox from '@fv-components/checkbox';

<div>
    <Checkbox />
    <Checkbox checked />
    <Checkbox indeterminate />
    <Checkbox disabled />
</div>
```


#### Controlled Checkbox

```js
import Checkbox from '@fv-components/checkbox';

initialState = {
  checked: false,
  indeterminate: false
};
  
<div>
    <Checkbox
        nativeControlId='my-checkbox'
        checked={state.checked}
        indeterminate={state.indeterminate}
        onChange={(e) => setState({
            checked: e.target.checked,
            indeterminate: e.target.indeterminate
        })}
    />
    <label htmlFor='my-checkbox'>My Checkbox</label>
</div>
```
