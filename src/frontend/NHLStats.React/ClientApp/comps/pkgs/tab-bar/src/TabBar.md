Themed TabBar from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/tab-bar" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/tab-bar;
```

### Usage

```js static
import TabBar from '@fv-components/tab-bar';
```

```js static
import TabBar, {
  Tab,
} from '@fv-components/tab-bar';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/tab-bar#props)

### Examples

#### Text

```js
import Tab from '@fv-components/tab';
import TabBar from '@fv-components/tab-bar';

initialState = {
  activeIndex: 0,
};

const handleActiveIndexUpdate = (activeIndex) => setState({ activeIndex });

<div>
  <div>
    <TabBar
      activeIndex={state.activeIndex}
      handleActiveIndexUpdate={handleActiveIndexUpdate}
    >
      <Tab>
        <span className='mdc-tab__text-label'>One</span>
      </Tab>
      <Tab>
        <span className='mdc-tab__text-label'>Two</span>
      </Tab>
      <Tab>
        <span className='mdc-tab__text-label'>Three</span>
      </Tab>
    </TabBar>
  </div>
</div>
```


#### Icon

```js
import Tab from '@fv-components/tab';
import TabBar from '@fv-components/tab-bar';
import MaterialIcon from '@fv-components/material-icon';

initialState = {
  activeIndex: 0,
};

const handleActiveIndexUpdate = (activeIndex) => setState({ activeIndex });

<div>
  <div>
    <TabBar
      activeIndex={state.activeIndex}
      handleActiveIndexUpdate={handleActiveIndexUpdate}
    >
      <Tab>
        <MaterialIcon className='mdc-tab__icon' icon='favorite' />
        <span className='mdc-tab__text-label'>One</span>
      </Tab>
      <Tab>
        <MaterialIcon className='mdc-tab__icon' icon='favorite' />
        <span className='mdc-tab__text-label'>Two</span>
      </Tab>
      <Tab>
        <MaterialIcon className='mdc-tab__icon' icon='favorite' />
        <span className='mdc-tab__text-label'>Three</span>
      </Tab>
    </TabBar>
  </div>
</div>
```


#### Stacked

```js
import Tab from '@fv-components/tab';
import TabBar from '@fv-components/tab-bar';
import MaterialIcon from '@fv-components/material-icon';

initialState = {
  activeIndex: 0,
};

const handleActiveIndexUpdate = (activeIndex) => setState({ activeIndex });

<div>
  <div>
    <TabBar
      activeIndex={state.activeIndex}
      handleActiveIndexUpdate={handleActiveIndexUpdate}
    >
      <Tab stacked>
        <MaterialIcon className='mdc-tab__icon' icon='favorite' />
        <span className='mdc-tab__text-label'>One</span>
      </Tab>
      <Tab stacked>
        <MaterialIcon className='mdc-tab__icon' icon='favorite' />
        <span className='mdc-tab__text-label'>Two</span>
      </Tab>
      <Tab stacked>
        <MaterialIcon className='mdc-tab__icon' icon='favorite' />
        <span className='mdc-tab__text-label'>Three</span>
      </Tab>
    </TabBar>
  </div>
</div>
```
