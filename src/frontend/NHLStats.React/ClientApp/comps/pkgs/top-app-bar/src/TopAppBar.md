Themed Top App Bar from <a href="text-field" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/top-app-bar;
```

### Usage

```js static
import TopAppBar from '@fv-components/top-app-bar';
```

```js static
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppbarFixedAdjustProps,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@fv-components/select';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/top-app-bar#props)


### Examples

```js
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppbarFixedAdjustProps,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@fv-components/top-app-bar';
import MaterialIcon from '@fv-components/material-icon';
import Button from '@fv-components/button';

<div>
  <div>
    <TopAppBar style={{ width: '50%' }}>
      <TopAppBarRow>
        <TopAppBarSection align='start'>
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')}/>
          </TopAppBarIcon>
          <TopAppBarTitle>Miami, FL</TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection align='end' role='toolbar'>
          <TopAppBarIcon actionItem tabIndex={0}>
            <MaterialIcon 
              aria-label="print page" 
              hasRipple 
              icon='print' 
              onClick={() => console.log('print')}
            />
          </TopAppBarIcon>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust>
      Page Content Here 
    </TopAppBarFixedAdjust>
  </div>
</div>
```
