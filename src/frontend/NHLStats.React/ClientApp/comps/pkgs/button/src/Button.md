Themed Button from <a href="https://github.com/material-components/material-components-web-react/blob/master/packages/button" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/button;
```

### Usage

```js static
import Button from '@fv-components/button';
```

### Props

| Prop Name     | Type                  | Description                                               |
| ------------- |:---------------------:| ---------------------------------------------------------:|
| className	    | String	            | Classes to be applied to the root element.                |
| raised	    | Boolean	            | Enables raised variant.                                   |
| unelevated	| Boolean	            | Enables unelevated variant.                               |
| outlined	    | Boolean	            | Enables outlined variant.                                 |
| dense	        | Boolean	            | Enables dense variant.                                    |
| icon	        | Element	            | Icon to render within root element.                       |
| trailingIcon	| Element	            | Icon to render on the right side of the element           |
| children	    | String	            | Text to be displayed within root element.                 |
| disabled	    | Boolean	            | Disables button if true.                                  |
| href      	| String	            | Sets a hyperlink & uses anchor tag instead of a button.   |

### Examples

#### Text Button

```js
import Button from '@fv-components/button';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  margin: '16px',
};

<div>
    <Button style={demoStyles}>Default</Button>
    <Button style={demoStyles} dense>Dense</Button>
    <Button style={demoStyles} icon={<MaterialIcon icon='favorite' />}>Icon</Button>
    <Button style={demoStyles} trailingIcon={<MaterialIcon icon='favorite' />}>Trailing Icon</Button>
    <Button style={demoStyles} disabled>Disabled</Button>
    <Button style={demoStyles} href="https://www.google.com" target="_blank">Link</Button>
</div>
```


#### Raised Button

```js
import Button from '@fv-components/button';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  margin: '16px',
};

<div>
    <Button style={demoStyles} raised>Default</Button>
    <Button style={demoStyles} raised dense>Dense</Button>
    <Button style={demoStyles} raised icon={<MaterialIcon icon='favorite' />}>Icon</Button>
    <Button style={demoStyles} raised trailingIcon={<MaterialIcon icon='favorite' />}>Trailing Icon</Button>
    <Button style={demoStyles} raised disabled>Disabled</Button>
    <Button style={demoStyles} raised href="https://www.google.com" target="_blank">Link</Button>
</div>
```



#### Unelevated Button

```js
import Button from '@fv-components/button';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  margin: '16px',
};

<div>
    <Button style={demoStyles} unelevated>Default</Button>
    <Button style={demoStyles} unelevated dense>Dense</Button>
    <Button style={demoStyles} unelevated icon={<MaterialIcon icon='favorite' />}>Icon</Button>
    <Button style={demoStyles} unelevated trailingIcon={<MaterialIcon icon='favorite' />}>Trailing Icon</Button>
    <Button style={demoStyles} unelevated disabled>Disabled</Button>
    <Button style={demoStyles} unelevated href="https://www.google.com" target="_blank">Link</Button>
</div>
```



#### Outlined Button

```js
import Button from '@fv-components/button';
import MaterialIcon from '@fv-components/material-icon';

const demoStyles = {
  margin: '16px',
};

<div>
    <Button style={demoStyles} outlined>Default</Button>
    <Button style={demoStyles} outlined dense>Dense</Button>
    <Button style={demoStyles} outlined icon={<MaterialIcon icon='favorite' />}>Icon</Button>
    <Button style={demoStyles} outlined trailingIcon={<MaterialIcon icon='favorite' />}>Trailing Icon</Button>
    <Button style={demoStyles} outlined disabled>Disabled</Button>
    <Button style={demoStyles} outlined href="https://www.google.com" target="_blank">Link</Button>
</div>
```




