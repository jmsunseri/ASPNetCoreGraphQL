Themed Select from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/select" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/select;
```

### Usage

```js static
import Select from '@fv-components/select';
```

```js static
import Select, {
  SelectHelperText,
  SelectIcon,
  Option,
  OptionDivider,
  OptionGroup,
  OptionGroupSubheader,
  OptionGraphic,
  OptionMeta,
  OptionText,
} from '@fv-components/select';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/select#props)


### Examples

#### Default

```js
import Select, {
  Option,
} from '@fv-components/select';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '30px',
};

initialState = {
  value: 'pomsky'
};

<div>
  <Select
    label="Choose Dog"
    value={state.value}
    onChange={(evt) => setState({ value: evt.target.value })}
  >
    <Option value="pomsky">Pomsky</Option>
    <Option value="goldenDoodle">Golden Doodle</Option>
  </Select>
  <div style={demoStyles}></div>
  <Select
    disabled
    label="Choose Dog"
    value={state.value}
    onChange={(evt) => setState({ value: evt.target.value })}
  >
    <Option value="pomsky">Pomsky</Option>
    <Option value="goldenDoodle">Golden Doodle</Option>
  </Select>
</div>
```


#### Default Outlined

```js
import Select, {
  Option,
} from '@fv-components/select';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '30px',
};

initialState = {
  value: 'pomsky'
};

<div>
  <Select
    outlined
    label="Choose Dog"
    value={state.value}
    onChange={(evt) => setState({ value: evt.target.value })}
  >
    <Option value="pomsky">Pomsky</Option>
    <Option value="goldenDoodle">Golden Doodle</Option>
  </Select>
  <div style={demoStyles}></div>
  <Select
    outlined
    disabled
    label="Choose Dog"
    value={state.value}
    onChange={(evt) => setState({ value: evt.target.value })}
  >
    <Option value="pomsky">Pomsky</Option>
    <Option value="goldenDoodle">Golden Doodle</Option>
  </Select>
</div>
```


#### Enhanced

```js
import Select, {
  Option,
} from '@fv-components/select';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '30px',
};

initailState = {value: 'pomsky'};

const onEnhancedChange = (index, item) => (
  setState({ value: item.getAttribute('data-value') })
);

<div>
  <Select
    enhanced
    label='Choose Dog'
    value={state.value}
    onEnhancedChange={onEnhancedChange}
  >
    <Option value='pomsky'>Pomsky</Option>
    <Option value='goldenDoodle'>Golden Doodle</Option>
  </Select>
  <div style={demoStyles}></div>
  <Select
    enhanced
    disabled
    label='Choose Dog'
    value={state.value}
    onEnhancedChange={onEnhancedChange}
  >
    <Option value='pomsky'>Pomsky</Option>
    <Option value='goldenDoodle'>Golden Doodle</Option>
  </Select>
</div>
```


#### Enhanced Outlined

```js
import Select, {
  Option,
} from '@fv-components/select';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '30px',
};

initailState = {value: 'pomsky'};

const onEnhancedChange = (index, item) => (
  setState({ value: item.getAttribute('data-value') })
);

<div>
  <Select
    enhanced
    outlined
    label='Choose Dog'
    value={state.value}
    onEnhancedChange={onEnhancedChange}
  >
    <Option value='pomsky'>Pomsky</Option>
    <Option value='goldenDoodle'>Golden Doodle</Option>
  </Select>
  <div style={demoStyles}></div>
  <Select
    enhanced
    outlined
    disabled
    label='Choose Dog'
    value={state.value}
    onEnhancedChange={onEnhancedChange}
  >
    <Option value='pomsky'>Pomsky</Option>
    <Option value='goldenDoodle'>Golden Doodle</Option>
  </Select>
</div>
```
