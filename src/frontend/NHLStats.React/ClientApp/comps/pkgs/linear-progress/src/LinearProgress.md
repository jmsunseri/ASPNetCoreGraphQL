Themed LinearProgress from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/linear-progress" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/linear-progress;
```

### Usage

```js static
import LinearProgress from '@fv-components/linear-progress';
```


### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/linear-progress#props)

### Examples


#### Progress

```js
import LinearProgress from '@fv-components/linear-progress';

<div>
  <LinearProgress
    progress={0.8}
    bufferingDots={false}
  />
</div>
```


#### Progress Updating

```js
import LinearProgress from '@fv-components/linear-progress';
import Button from '@fv-components/button';

initialState = {
  p: 0,
};

<div>
  <Button onClick={() => state.p >= 1 ? setState({ p: 0 }) : setState({ p: state.p + .10 })}>Add progress</Button>
  <LinearProgress
    progress={state.p}
    bufferingDots={false}
  />
</div>
```


#### Buffer

```js
import LinearProgress from '@fv-components/linear-progress';

<div>
  <LinearProgress
    buffer={0.9}
    progress={0.8}
    bufferingDots={false}
  />
</div>
```


#### Dots for remaining

```js
import LinearProgress from '@fv-components/linear-progress';

<div>
  <LinearProgress
    progress={0.8}
  />
</div>
```


#### Indeterminate

```js
import LinearProgress from '@fv-components/linear-progress';

<div>
    <LinearProgress
      indeterminate
    />
</div>
```


#### Reversed

```js
import LinearProgress from '@fv-components/linear-progress';

<div>
    <LinearProgress
      indeterminate
      reversed
    />
</div>
```
