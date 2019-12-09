Themed Radio from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/radio" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/radio;
```

### Usage

```js static
import Radio from '@fv-components/radio';
```

```js static
import Radio, {
  RadioBase,
  NativeRadioControl,
} from '@fv-components/radio';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/radio#props)

### Examples

```js
import Radio, {
  NativeRadioControl,
} from '@fv-components/radio';
initialState = {
  petValue: null,
};

<div>
  <Radio label='Dog' key='dog'>
    <NativeRadioControl
      name='pets'
      value='dog'
      id='dog'
      onChange={(e) => this.setState({petValue: e.target.value})}
    />
  </Radio>
  <Radio label='Cat' key='cat'>
    <NativeRadioControl
      name='pets'
      value='cat'
      id='cat'
      onChange={(e) => this.setState({petValue: e.target.value})}
    />
  </Radio>
  <Radio label='Rabbit' key='rabbit'>
    <NativeRadioControl
      name='pets'
      value='rabbit'
      id='rabbit'
      disabled
      onChange={(e) => this.setState({petValue: e.target.value})}
    />
  </Radio>
</div>
```
