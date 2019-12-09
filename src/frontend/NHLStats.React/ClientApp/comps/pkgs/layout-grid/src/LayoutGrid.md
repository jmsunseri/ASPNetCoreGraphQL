Themed LayoutGrid from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/layout-grid" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/layout-grid;
```

### Usage

```js static
import Grid, {
  Cell,
  Row,
} from '@fv-components/layout-grid';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/layout-grid#props)

### Examples

#### Default

```js
import Grid, {
  Cell,
  Row,
} from '@fv-components/layout-grid';

<div>
  <Grid>
    <Row>
      <Cell columns={4}>Tennis</Cell>
      <Cell columns={4}>Cricket</Cell>
      <Cell columns={4}>StarCraft</Cell>
    </Row>
  </Grid>
</div>
```


#### Order

```js
import Grid, {
  Cell,
  Row,
} from '@fv-components/layout-grid';

<div>
  <Grid>
    <Row>
      <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>Tennis</Cell>
      <Cell desktopColumns={4} order={3} phoneColumns={4} tabletColumns={4}>Cricket</Cell>
      <Cell desktopColumns={4} order={1} phoneColumns={4} tabletColumns={4}>StarCraft</Cell>
    </Row>
  </Grid>
</div>
```


#### Nested

```js
import Grid, {
  Cell,
  Row,
} from '@fv-components/layout-grid';

<div>
  <Grid>
    <Row>
      <Cell columns={4}>
        <Row>
          <Cell desktopColumns={8} phoneColumns={2} tabletColumns={5}>Tennis</Cell>
          <Cell desktopColumns={4} phoneColumns={2} tabletColumns={3}>Tennis2</Cell>
        </Row>
      </Cell>
      <Cell columns={4}>Cricket</Cell>
      <Cell columns={4}>Starcraft</Cell>
    </Row>
  </Grid>
</div>
```


#### Alignment

```js
import Grid, {
  Cell,
  Row,
} from '@fv-components/layout-grid';

<div>
  <Grid align="right">
    <Row>
      <Cell align="top">Tennis<br /><br /><br /><br /><br /></Cell>
      <Cell align="middle">Cricket</Cell>
      <Cell align="bottom">StarCraft</Cell>
    </Row>
  </Grid>
</div>
```
