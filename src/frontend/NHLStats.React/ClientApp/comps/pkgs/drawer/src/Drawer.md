Themed Drawer from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/drawer" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/drawer;
```

### Usage

```js static
import Drawer from '@fv-components/drawer';
```
```js static
import Drawer, {
    DrawerHeader,
    DrawerSubtitle,
    DrawerTitle,
    DrawerContent,
    DrawerAppContent,
} from '@fv-components/drawer';
```

### Props

| Prop Name     | Type                  | Description                                           |
| ------------- |:---------------------:| -----------------------------------------------------:|
| className     | String                | Classes to be applied to the drawer element.          |
| onOpen        | Function() => void    | Callback after the drawer has opened.                 |
| onClose       | Function() => void    | Callback after the drawer has closed.                 |
| modal         | Boolean               | Indicates that the drawer is of type modal.           |
| dismissible   | Boolean               | Indicates that the drawer is of type dismissible.     |
| tag           | String                | Customizes the drawer tag type (default to <aside>).  |
| open          | boolean               | If true, opens drawer. If false, closes drawer.       |
| innerRef      | RefObject             | Root drawer element ref.                              |

### Examples

#### Permanent Drawer

```js
import Drawer from '@fv-components/drawer';
import List, {
    ListItem,
    ListItemText,
} from '@fv-components/list';

<div>
    <Drawer>
        <List>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
        </List>
    </Drawer>
</div>
```


#### Drawer Header and Drawer Content

```js
import Drawer, {
    DrawerHeader,
    DrawerSubtitle,
    DrawerTitle,
    DrawerContent,
    DrawerAppContent
} from '@fv-components/drawer';
import List, {
    ListItem,
    ListItemText,
} from '@fv-components/list';

<div>
    <Drawer>
        <DrawerHeader>
          <DrawerTitle tag='h2'>Inbox</DrawerTitle>
          <DrawerSubtitle>matt@email.com</DrawerSubtitle>
        </DrawerHeader>
        
        <DrawerContent tag='main'>
            <List>
                <ListItem><ListItemText primaryText='list item' /></ListItem>
                <ListItem><ListItemText primaryText='list item' /></ListItem>
                <ListItem><ListItemText primaryText='list item' /></ListItem>
                <ListItem><ListItemText primaryText='list item' /></ListItem>
                <ListItem><ListItemText primaryText='list item' /></ListItem>
            </List>
        </DrawerContent>
    </Drawer>
</div>
```


#### Dismissible Drawer

```js
import Drawer, {
    DrawerHeader,
    DrawerSubtitle,
    DrawerTitle,
    DrawerContent,
    DrawerAppContent
} from '@fv-components/drawer';
import Button from '@fv-components/button';
import List, {
    ListItem,
    ListItemText,
} from '@fv-components/list';

<div>
    
    <Drawer
        dismissible
        open={state.open}
    >
        <List>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
            <ListItem><ListItemText primaryText='list item' /></ListItem>
        </List>
    </Drawer>
    <DrawerAppContent>
        <Button onClick={() => setState({open: !state.open})}>
            Click to {state.open ? 'Close' : 'Open'} Drawer
        </Button>
    </DrawerAppContent>
</div>
```


#### Modal Drawer

```js
import Drawer, {
    DrawerHeader,
    DrawerSubtitle,
    DrawerTitle,
    DrawerContent,
    DrawerAppContent
} from '@fv-components/drawer';
import List, {
    ListItem,
    ListItemText,
} from '@fv-components/list';
import Button from '@fv-components/button';

mainContentEl = React.createRef();

onDrawerClose = () => {
    setState({ open: false });
    mainContentEl.current.querySelector('input, button').focus();
}

<div>
    <Drawer
        modal
        open={state.open}
        onClose={onDrawerClose}
        style={{top: 0}}
    >
        <List>
            <ListItem onClick={onDrawerClose}><ListItemText primaryText='list item' /></ListItem>
            <ListItem onClick={onDrawerClose}><ListItemText primaryText='list item' /></ListItem>
            <ListItem onClick={onDrawerClose}><ListItemText primaryText='list item' /></ListItem>
            <ListItem onClick={onDrawerClose}><ListItemText primaryText='list item' /></ListItem>
            <ListItem onClick={onDrawerClose}><ListItemText primaryText='list item' /></ListItem>
        </List>
    </Drawer>
    <div ref={mainContentEl}>
        <Button onClick={() => setState({open: !state.open})}>
            Click to {state.open ? 'Close' : 'Open'} Drawer
        </Button>
    </div>
</div>
```

