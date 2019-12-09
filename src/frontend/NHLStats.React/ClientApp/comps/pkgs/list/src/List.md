Themed List from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/list" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/list;
```

### Usage

```js static
import List from '@fv-components/list';
```

```js static
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemMeta,
  ListDivider,
  ListGroup,
  ListGroupSubheader,
} from '@fv-components/list';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/list#props)

### Examples

#### List

```js
import List, {
  ListItem,
  ListItemText,
} from '@fv-components/list';

<div>
    <List>
        <ListItem>
            <ListItemText primaryText='Photos'/>
        </ListItem>
        <ListItem>
            <ListItemText primaryText='Recipes'/>
        </ListItem>
        <ListItem>
            <ListItemText primaryText='Work'/>
        </ListItem>
    </List>
</div>
```


#### Two-Line List

```js
import List, {
  ListItem,
  ListItemText,
} from '@fv-components/list';

<div>
    <List twoLine>
        <ListItem>
            <ListItemText
                primaryText='Photos'
                secondaryText='Jan 9, 2018'
            />
        </ListItem>
        <ListItem>
            <ListItemText
                primaryText='Recipes'
                secondaryText='Jan 17, 2018'
            />
        </ListItem>
        <ListItem>
            <ListItemText
                primaryText='Work'
                secondaryText='Jan 28, 2018'
            />
        </ListItem>
    </List>
</div>
```


#### Item Graphic | Item Text | Item Meta

```js
import {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemMeta,
  ListGroup,
} from '@fv-components/list';
import MaterialIcon from '@fv-components/material-icon';

<div>
    <ListGroup>
        <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
            <ListItemText primaryText='Photos' />
            <ListItemMeta meta='info' />
        </ListItem>
    </ListGroup>
</div>
```


#### List Groups and List Dividers

```js
import List, {
  ListItem,
  ListItemText,
  ListDivider,
  ListGroup,
  ListGroupSubheader
} from '@fv-components/list';

<div>
    <ListGroup>
        <ListGroupSubheader tag='h2'>Folders</ListGroupSubheader>
        <List>
            <ListItem>
                <ListItemText primaryText='Photos' />
            </ListItem>
            <ListItem>
                <ListItemText primaryText='Videos' />
            </ListItem>
        </List>
        <ListDivider tag="div" />
        <ListGroupSubheader tag='h2'>Recent Files</ListGroupSubheader>
        <List>
            <ListItem>
                <ListItemText primaryText='Vacation Image' />
            </ListItem>
            <ListItem>
                <ListItemText primaryText='Vacation Video' />
            </ListItem>
        </List>
    </ListGroup>
</div>
```


#### Single Selection

```js
import List, {
  ListItem,
  ListItemText,
} from '@fv-components/list';

<div>
    <List
        singleSelection
        selectedIndex={state.selectedIndex}
        handleSelect={(selectedIndex) => setState({selectedIndex})}
    >
        <ListItem>
            <ListItemText primaryText='Photos'/>
        </ListItem>
        <ListItem>
            <ListItemText primaryText='Recipes'/>
        </ListItem>
        <ListItem>
            <ListItemText primaryText='Work'/>
        </ListItem>
    </List>
</div>
```


#### Checkbox Lists

```js
import List, {
  ListItem,
  ListItemText,
} from '@fv-components/list';
import Checkbox from '@fv-components/checkbox';

initialState = {
  selectedIndex: [1],
};

<div>
    <List
        checkboxList
        selectedIndex={state.selectedIndex}
        handleSelect={(activatedIndex, allSelected) => setState({selectedIndex: allSelected})}
    >
        <ListItem>
            <Checkbox />
            <ListItemText primaryText='Photos'/>
        </ListItem>
        <ListItem>
            <Checkbox checked />
            <ListItemText primaryText='Recipes'/>
        </ListItem>
        <ListItem>
            <Checkbox />
            <ListItemText primaryText='Work'/>
        </ListItem>
    </List>
</div>
```


#### Radio Lists

```js
import List, {
  ListItem,
  ListItemText,
} from '@fv-components/list';
import Radio from '@fv-components/radio';

initialState = {
  selectedItem: 'Milk',
};

const listItems = [];

const handleChange = (e) => {
  this.setState({ selectedItem: e.target.value });
}

<div>
    <List
        radioList
        selectedIndex={0}
    >
        {
            listItems.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <Radio>
                            <NativeRadioControl
                                name={item}
                                checked={state.selectedItem === item}
                                value={item}
                                id={`${index}-${item}`}
                                onChange={handleChange}
                            />
                        </Radio>
                        <ListItemText primaryText='Photos'/>
                    </ListItem>
                );
            })
        }
    </List>
</div>
```
