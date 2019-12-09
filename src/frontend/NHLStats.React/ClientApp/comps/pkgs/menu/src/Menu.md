Themed Menu from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/menu" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/menu;
```

### Usage

```js static
import Menu from '@fv-components/menu';
```

```js static
import Menu, {
  MenuList,
  MenuListItem,
  MenuListDivider,
  MenuListGroup,
  MenuListGroupSubheader,
  MenuListItemGraphic,
  MenuListItemMeta,
  MenuListItemText,
} from '@fv-components/menu';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/menu#props)

### Examples

```js
import Menu, {
  MenuList, 
  MenuListItem, 
  MenuListItemText,
} from '@fv-components/menu';
import Button from '@fv-components/button';

class MyApp extends React.Component {
  constructor() {
    this.state = {
      open: false,
      toggle: false,
      coordinates: undefined,
    };
    
    this.toggleRightClick = this.toggleRightClick.bind(this);
    this.rightClickCallback = this.rightClickCallback.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  rightClickCallback(event) {
    this.setState({
      open: !this.state.open,
      coordinates: { x: event.clientX, y: event.clientY },
    });
    // Must preventDefault so the system context menu doesn't appear.
    // This won't be needed in other cases besides right click.
    event.preventDefault();
  }
  
  toggleRightClick() {
    if (this.state.toggle) {
      window.removeEventListener('contextmenu', this.rightClickCallback);
    } else {
      window.addEventListener('contextmenu', this.rightClickCallback);
    }
    this.setState({ toggle: !this.state.toggle });
  }

  // Must set open to false to keep menu in the correct state.
  // This does not follow the controlled component pattern
  // (see https://reactjs.org/docs/forms.html#controlled-components).
  // Follow https://github.com/material-components/material-components-web-react/issues/785
  // to get any updates.
  onClose() {
    this.setState({ open: false });
  }

  render() {
    const menuOptions = [
      'Save',
      'Edit',
      'Cut',
      'Copy',
      'Paste',
    ];

    return (
      <div style={{ position: 'relative' }}>
        <Button onClick={() => this.setState({ open: true })}>Open Menu</Button>
        <Button onClick={this.toggleRightClick}>Toggle Menu Right Click {this.state.toggle ? 'OFF' : 'ON'}</Button>
        <Menu
          open={this.state.open}
          onClose={this.onClose}
          coordinates={this.state.coordinates}
          onSelected={(index, item) => console.log(index, item)}
        >
          <MenuList>
            {menuOptions.map((option, index) => (
              <MenuListItem key={index}>
                <MenuListItemText primaryText={option} />
                {/* You can also use other components from list, which are documented on MCWR component documentation */}
              </MenuListItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    );
  }
}


<div>
  <MyApp />
</div>
```
