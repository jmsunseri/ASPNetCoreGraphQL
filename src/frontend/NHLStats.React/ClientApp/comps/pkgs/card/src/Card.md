Themed Card from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/card" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/card;
```

### Usage

```js static
import Card from '@fv-components/card';
```

```js static
import Card, {
  CardActionButtons,
  CardActionIcons,
  CardActions,
  CardPrimaryContent,
  CardMedia,
} from '@fv-components/card';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/card#props)

### Examples

#### Default

```js
import Card, {
  CardActionButtons, CardActionIcons, CardActions, CardPrimaryContent, CardMedia
} from '@fv-components/card';
import Button from '@fv-components/button';

<div>
  <Card style={{ width: 360}}>
    <CardPrimaryContent>
      <h1>Header</h1>
      <CardMedia square imageUrl="https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg" />
    </CardPrimaryContent>

    <CardActions>
      <CardActionButtons>
        <Button raised>Click Me</Button>
      </CardActionButtons>

      <CardActionIcons>
        <i>Click Me Too!</i>
      </CardActionIcons>
    </CardActions>
  </Card>
</div>
```

#### Outlined

```js
import Card, {
  CardActionButtons, CardActionIcons, CardActions, CardPrimaryContent, CardMedia
} from '@fv-components/card';
import Button from '@fv-components/button';

<div>
  <Card style={{ width: 360}} outlined>
    <CardPrimaryContent>
      <h1>Header</h1>
      <CardMedia square imageUrl="https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg" />
    </CardPrimaryContent>

    <CardActions>
      <CardActionButtons>
        <Button raised>Click Me</Button>
      </CardActionButtons>

      <CardActionIcons>
        <i>Click Me Too!</i>
      </CardActionIcons>
    </CardActions>
  </Card>
</div>
```


#### Complex

```js
import Card, {
  CardActionButtons, CardActionIcons, CardActions, CardPrimaryContent, CardMedia
} from '@fv-components/card';
import Button from '@fv-components/button';
import IconButton from '@fv-components/icon-button';
import MaterialIcon from '@fv-components/material-icon';
import {
  Body2, Headline6, Subtitle2,
} from '@fv-components/typography';

const image = 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg';

<div>
  <Card style={{ width: 360}}>
    <CardPrimaryContent>
      <CardMedia wide imageUrl={image} />
    <div>
      <Headline6>
        Our Changing Planet
      </Headline6>
      <Subtitle2>
        by Kurt Wagner
      </Subtitle2>
    </div>
    <Body2>
      Visit ten places on our planet that are undergoing the biggest changes today.
    </Body2>
    </CardPrimaryContent>
    <CardActions>
      <CardActionButtons>
        <Button>Read</Button>
        <Button>Bookmark</Button>
      </CardActionButtons>
      <CardActionIcons>
        <IconButton>
          <MaterialIcon icon='favorite_border' />
        </IconButton>
        <IconButton>
          <MaterialIcon icon='share' />
        </IconButton>
        <IconButton>
          <MaterialIcon icon='more_vert' />
        </IconButton>
      </CardActionIcons>
    </CardActions>
  </Card>
</div>
```
