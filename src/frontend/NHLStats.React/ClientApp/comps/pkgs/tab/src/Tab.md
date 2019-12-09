Themed Tab from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/tab" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/tab;
```

### Usage

```js static
import Tab from '@fv-components/tab';
```

```js static
import Tab, {
  TabRipple,
} from '@fv-components/tab';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/tab#props)

### Examples

#### Default (Active Tab is Underlined)

```js
import Tab from '@fv-components/tab';
import MaterialIcon from '@fv-components/material-icon';

<div>
  <Tab active>
    <MaterialIcon className='mdc-tab__icon' icon='favorite' />
    <span className='mdc-tab__text-label'>Love</span>
  </Tab>
  <br />
  <Tab>
    <MaterialIcon className='mdc-tab__icon' icon='favorite' />
    <span className='mdc-tab__text-label'>Love</span>
  </Tab>
</div>
```


#### Custom Active Indicator

```js
import Tab from '@fv-components/tab';
import MaterialIcon from '@fv-components/material-icon';

<div>
  <Tab
    active
    indicatorContent={<MaterialIcon icon='favorite' />}
  >
    <span className='mdc-tab__text-label'>Love</span>
  </Tab>
  <Tab
    indicatorContent={<MaterialIcon icon='favorite' />}
  >
    <span className='mdc-tab__text-label'>Love</span>
  </Tab>
</div>
```


#### Stacked

```js
import Tab from '@fv-components/tab';
import MaterialIcon from '@fv-components/material-icon';

<div>
  <Tab active stacked>
    <MaterialIcon className='mdc-tab__icon' icon='favorite' />
    <span className='mdc-tab__text-label'>Love</span>
  </Tab>
  <Tab stacked>
    <MaterialIcon className='mdc-tab__icon' icon='favorite' />
    <span className='mdc-tab__text-label'>Love</span>
  </Tab>
</div>
```


#### Icon Only

```js
import Tab from '@fv-components/tab';
import MaterialIcon from '@fv-components/material-icon';

<div>
  <Tab active>
    <MaterialIcon className='mdc-tab__icon' icon='favorite' />
  </Tab>
  <Tab>
    <MaterialIcon className='mdc-tab__icon' icon='favorite' />
  </Tab>
</div>
```
