Themed Menu Surface from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/menu-surface" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/menu-surface;
```

### Usage

```js static
import MenuSurface from '@fv-components/menu-surface';
```

```js static
import MenuSurface, {
  Corner, 
} from '@fv-components/menu-surface';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/menu-surface#props)

| Prop Name     | Type                      | Description                                                                                                                   |
| ------------- |:-------------------------:| -----------------------------------------------------------------------------------------------------------------------------:|
| className	    | String	                | Classes to be applied to the root element.                                                                                    |
| anchorCorner	| Corner	                | Sets the corner that the menu surface will be anchored to. See MDC Web constants.js.                                          |
| anchorElement	| Element	                | Sets the anchor element used as an anchor for menu-surface positioning logic. Should contain class .mdc-menu-surface--anchor. |
| anchorMargin	| Object*	                | Sets the distance from the anchor point that the menu surface should be shown.                                                |
| coordinates	| {x: Number, y: Number}    | Sets the anchor coordinates when menu surface does not use anchorElement.                                                     |
| open	        | Boolean	                | Changing value will trigger open/close of the menu surface.                                                                   |
| quickOpen	    | Boolean	                | Disables the open/close animation of the menu surface, which makes the open/close instant.                                    |
| fixed	        | Boolean	                | Sets the menu surface to fixed positioning.                                                                                   |
| onClose	    | Function	                | Callback triggered after menu surface closes.                                                                                 |

### Examples

#### Anchor to Element

```js
import MenuSurface, {
  Corner,
} from '@fv-components/menu-surface';
import Button from '@fv-components/button';

class MenuSurfaceAnchored extends React.Component {
  constructor() {
    this.state = {
      open: false,
      anchorElement: null,
    };
    

    this.setAnchorElement = (element) => {
      if (this.state.anchorElement) {
        return;
      }
      this.setState({ anchorElement: element });
    }
  }

  render() {
    return (
      <div
        className='mdc-menu-surface--anchor'
        ref={this.setAnchorElement}
      >
        <Button raised onClick={() => this.setState({ open: true })}>Open Menu</Button>

        <MenuSurface
          open={this.state.open}
          anchorCorner={Corner.BOTTOM_LEFT}
          onClose={() => this.setState({ open: false })}
          anchorElement={this.state.anchorElement}
        >
          <img
            style={{ maxWidth: '20vw', maxHeight: '20vh' }}
            src="https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg" />
        </MenuSurface>
      </div>
    );
  }
}


<div>
    <MenuSurfaceAnchored />
</div>
```

#### Anchor to Cursor Coordinates (right-click)

```js
import MaterialIcon from '@fv-components/material-icon';
import Button from '@fv-components/button';

initialState = {
  on: false,
};

class GlobalMenuSurface extends React.Component {
  constructor() {
    this.state = {
      open: false,
      coordinates: null,
    }; 
  }

  componentDidMount() {
    this.rightClickCallback_ = (evt) => {
      this.setState({
        open: true,
        coordinates: {x: evt.clientX, y: evt.clientY},
      });
      evt.preventDefault();
    };

    window.addEventListener('contextmenu', this.rightClickCallback_);
  }

  componentWillUnmount() {
    window.removeEventListener('contextmenu', this.rightClickCallback_);
  }

  render() {
    return (
      <MenuSurface
        open={this.state.open}
        onClose={() => this.setState({open: false, coordinates: null})}
        coordinates={this.state.coordinates}
      >
        <img
          style={{maxWidth: '20vw', maxHeight: '20vh'}}
          src="https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg"
        />
      </MenuSurface>
    );
  }
}

<div>
    <Button onClick={() => setState({on: !state.on})}>
        Turn Menu Surface right-click {state.on ? 'Off' : 'On'}
    </Button>

    {state.on && (<GlobalMenuSurface on={state.on}/>)}
</div>
```
