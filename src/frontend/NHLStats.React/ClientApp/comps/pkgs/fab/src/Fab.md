Themed Fab from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/fab" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/fab;
```

### Usage

```js static
import Fab from '@fv-components/fab';
```

```js static
import Fab, {
  FabBase,
} from '@fv-components/fab';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/fab#props)

### Examples


#### Icon

```js
import Fab from '@fv-components/fab';
import MaterialIcon from '@fv-components/material-icon';

<div>
    <Fab icon={<MaterialIcon icon="add"/>}/>
</div>
```


#### Small

```js
import Fab from '@fv-components/fab';
import MaterialIcon from '@fv-components/material-icon';

<div>
    <Fab
      mini
      icon={<MaterialIcon icon="add"/>}
    />
</div>
```


#### Text

```js
import Fab from '@fv-components/fab';
import MaterialIcon from '@fv-components/material-icon';

<div>
    <Fab textLabel="Text Label" />
</div>
```


#### Text with Icon

```js
import Fab from '@fv-components/fab';
import MaterialIcon from '@fv-components/material-icon';

<div>
    <Fab
      textLabel="Favorite"
      icon={<MaterialIcon icon="favorite"/>}
    />
</div>
```


#### Disappearing

```js
import Fab from '@fv-components/fab';
import Button from '@fv-components/button';

initialState = {
  exit: false,
};

<div>
    <Button onClick={() => setState({ exit: !state.exit })}>Click me {state.exit}</Button>
    <br />
    <Fab exited={state.exit} />
</div>
```
