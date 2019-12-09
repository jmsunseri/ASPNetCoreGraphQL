Themed Ripple from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/ripple" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/ripple;
```

### Usage

```js static
import withRipple from '@fv-components/ripple';
```

```js static
import withRipple, {
  rippleClasses,
} from '@fv-components/ripple';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/ripple#props)

### Examples

```js
import withRipple, {
  rippleClasses,
} from '@fv-components/ripple';

const Box = (props) => {
  const {
    children,
    className = '',
    // You must call `initRipple` from the root element's ref. This attaches the ripple
    // to the element.
    initRipple,
    // include `unbounded` to remove warnings when passing `otherProps` to the
    // root element.
    unbounded,
    ...otherProps
  } = props;

  // any classes needed on your component needs to be merged with
  // `className` passed from `props`.
  const classes = [rippleClasses.root, className].join(' ');
  
  return (
    <div
      className={classes}
      ref={initRipple}
      {...otherProps}
    >
      {children}
    </div>
  );
};

const RippleBox = withRipple(Box);

<div>
  <RippleBox style={{ padding: 50 }}>Hello World</RippleBox>
</div>
```
