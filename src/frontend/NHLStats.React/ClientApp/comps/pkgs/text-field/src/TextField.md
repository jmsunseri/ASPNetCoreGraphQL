Themed Text Field from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/text-field" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/text-field;
```

### Usage

```js static
import TextField from '@fv-components/text-field';
```

```js static
import TextField, {
  Icon,
  HelperText,
  CharacterCounter,
  Input,
} from '@fv-components/select';
```

Sub-component: `HelperText` ([docs](https://github.com/material-components/material-components-web-react/tree/master/packages/text-field/helper-text))
Sub-component: `CharacterCounter` ([docs](https://github.com/material-components/material-components-web-react/tree/master/packages/text-field/character-counter))

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/text-field#props)


### Examples

#### Default

```js
import TextField, {
  Input,
  HelperText,
} from '@fv-components/text-field';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '30px',
};

initialState = {
  value: ''
};

<div>
  <TextField>
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
  
  <div style={demoStyles}></div>
  
  <TextField
    label='Dog'
  >
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
</div>
```

#### Dense | Outline | Disabled

```js
import TextField, {
  Input,
  HelperText,
} from '@fv-components/text-field';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '30px',
};

initialState = {
  value: ''
};

<div>
  <TextField
    label='Dog'
    dense
  >
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
  
  <div style={demoStyles}></div>
  
  <TextField
    label='Dog'
    outlined
  >
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
  
  <div style={demoStyles}></div>
  
  <TextField
    label='Dog'
  >
    <Input
      disabled
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
</div>
```


#### Text Counter

```js
import TextField, {
  Input,
  CharacterCounter,
} from '@fv-components/text-field';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '80px',
};

initialState = {
  value: 'Nineteen Characters'
};

<div style={{ maxWidth: '210px' }}>
  <TextField
    label='Dog'
    characterCounter={<CharacterCounter template='${count} : ${maxLength}' />}
  >
    <Input
      maxLength={140}
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
</div>
```


#### Icon

```js
import TextField, {
  Input,
  HelperText,
} from '@fv-components/text-field';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '30px',
};

initialState = {
  value: ''
};

<div>
  <TextField
    label='Dog'
    leadingIcon={<MaterialIcon role="button" icon="favorite"/>}
  >
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
  
  <div style={demoStyles}></div>
  
  <TextField
    label='Dog'
    onTrailingIconSelect={() => setState({ value: '' })}
    trailingIcon={<MaterialIcon role="button" icon="delete"/>}
  >
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
</div>
```


#### Helper Text

```js
import TextField, {
  Input,
  HelperText,
} from '@fv-components/text-field';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '30px',
};

initialState = {
  value: ''
};

<div>
  <TextField
    label='Dog'
    helperText={<HelperText>Help Me!</HelperText>}
  >
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
</div>
```


#### Error State

```js
import TextField, {
  Input,
  HelperText,
} from '@fv-components/text-field';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '80px',
};

initialState = {
  value: ''
};

<div>
  <TextField
    label='Dog'
    helperText={<HelperText validation>Help Me!</HelperText>}
  >
    <Input
      isValid={false}
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
</div>
```


#### Text Area

```js
import TextField, {
  Input,
  HelperText,
} from '@fv-components/text-field';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  display: 'inline-block',
  width: '60px',
  height: '30px',
};

initialState = {
  value: ''
};

<div>
  <TextField
    label='Dog'
    textarea
  >
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
</div>
```


#### Full Width

```js
import TextField, {
  Input,
  HelperText,
} from '@fv-components/text-field';
import MaterialIcon from '@fv-components/material-icon';

initialState = {
  value: ''
};

<div>
  <TextField
    label='Dog'
    fullWidth
  >
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
  <br />
  <TextField
    label='Dog'
    fullWidth
    textarea
  >
    <Input
      value={state.value}
      onChange={(e) => setState({ value: e.currentTarget.value })}
    />
  </TextField>
</div>
```


