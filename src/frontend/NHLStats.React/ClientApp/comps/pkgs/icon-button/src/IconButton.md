Themed Icon Button from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/icon-button" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/icon-button;
```

### Usage

```js static
import IconButton from '@fv-components/icon-button';
```

```js static
import IconButton, {
  IconButtonBase,
  IconToggle,
} from '@fv-components/icon-button';
```

### Props

| Prop Name | Type      | Description                                               |
| --------- |:---------:| ---------------------------------------------------------:|
| children  | Element   | Icon element or text to be displayed within root element. |
| className | String    | Classes to be applied to the root element.                |
| disabled  | Boolean   | Disables button if true.                                  |
| isLink    | Boolean   | Changes root element to an anchor tag (default button).   |
| onClick   | Function  | Click event handler. Event is passed as an argument       |

### Examples

#### Default | Disabled | Icon Link | No Ripple | Toggle

```js
import IconButton, {
  IconButtonBase,
  IconToggle,
} from '@fv-components/icon-button';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  margin: '16px',
};

<div>
    <IconButton style={demoStyles}>
        <MaterialIcon icon='favorite' />
    </IconButton>
    <IconButton disabled style={demoStyles}>
        <MaterialIcon icon='favorite' />
    </IconButton>
    <IconButton isLink style={demoStyles}>
        <MaterialIcon icon='favorite' />
    </IconButton>
    <IconButtonBase style={demoStyles}>
        <MaterialIcon icon='favorite' />
    </IconButtonBase>
    <IconButton style={demoStyles}>
        <IconToggle isOn>
            <MaterialIcon icon='favorite' />
        </IconToggle>
        <IconToggle>
            <MaterialIcon icon='favorite_border' />
        </IconToggle>
    </IconButton>   
</div>
```
