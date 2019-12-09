Themed Dialog from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/dialog" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/dialog;
```

### Usage

```js static
import Dialog from '@fv-components/dialog';
```

```js static
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@fv-components/dialog';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/dialog#props)

### Examples

#### Content

```js
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@fv-components/dialog';
import Button from '@fv-components/button';

initialState = {
  isOpen: false,
};

<div>
  <Button
    onClick={() => setState({ isOpen: true })}
  >
    Open Dialog
  </Button>
  <Dialog
    onClose={() => setState({ isOpen: false })}
    open={state.isOpen}
  >
    <DialogTitle>My Dialog</DialogTitle>
    <DialogContent>
      This is a basic Dialog with content<br />
      <img width="200" src="https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg" />
    </DialogContent>
    <DialogFooter>
      <DialogButton action='dismiss'>Dismiss</DialogButton>
    </DialogFooter>
  </Dialog>
</div>
```


#### Scrollable Content

```js
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@fv-components/dialog';
import Button from '@fv-components/button';

initialState = {
  isOpen: false,
};

<div>
  <Button
    onClick={() => setState({ isOpen: true })}
  >
    Open Dialog
  </Button>
  <Dialog
    onClose={() => setState({ isOpen: false })}
    open={state.isOpen}
  >
    <DialogTitle>The Wonderful Wizard of Oz</DialogTitle>
    <DialogContent>
      <p>Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.</p>
      <p>When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.</p>
      <p>When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.</p>
      <p>Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.</p>
      <p>It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings. Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose. Toto played all day long, and Dorothy played with him, and loved him dearly.</p>
      <p>Today, however, they were not playing. Uncle Henry sat upon the doorstep and looked anxiously at the sky, which was even grayer than usual. Dorothy stood in the door with Toto in her arms, and looked at the sky too. Aunt Em was washing the dishes.</p>
      <p>From the far north they heard a low wail of the wind, and Uncle Henry and Dorothy could see where the long grass bowed in waves before the coming storm. There now came a sharp whistling in the air from the south, and as they turned their eyes that way they saw ripples in the grass coming from that direction also.</p>
    </DialogContent>
    <DialogFooter>
      <DialogButton action='ok'>OK</DialogButton>
    </DialogFooter>
  </Dialog>
</div>
```

#### Alert

```js
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@fv-components/dialog';
import Button from '@fv-components/button';

initialState = {
  isOpen: false,
  action: ''
};

<div>
  <Button
    onClick={() => setState({ isOpen: true })}
  >
    Open Dialog {state.action &&
      <span>(action: "{state.action}")</span>
    }
  </Button>
  <Dialog
    onClose={(action) => setState({isOpen: false, action})}
    open={state.isOpen}
  >
    <DialogContent>
      <p>Discard Draft?</p>
    </DialogContent>
    <DialogFooter>
      <DialogButton action='dismiss'>Cancel</DialogButton>
      <DialogButton action='discard' isDefault>Discard</DialogButton>
    </DialogFooter>
  </Dialog>
</div>
```


#### Simple Choice

```js
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@fv-components/dialog';
import Button from '@fv-components/button';
import MaterialIcon from '@fv-components/material-icon';
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
} from '@fv-components/list';

initialState = {
  isOpen: false,
  choices: ['user1@example.com', 'user2@example.com', 'Add Account'],
  action: ''
};

<div>
  <Button
    onClick={() => setState({ isOpen: true })}
  >
    Open Dialog {state.action &&
      <span>(action: "{state.action}")</span>
    }
  </Button>
  <Dialog 
    open={state.isOpen} 
    onClose={(action) => setState({action, isOpen: false})}
  >
    <DialogTitle>Select User</DialogTitle>
    <DialogContent>
        <List avatarList>
          {state.choices.map((choice, i) => (
            <ListItem key={i} data-mdc-dialog-action={choice}>
              <ListItemGraphic
                graphic={
                  <MaterialIcon icon={choice.match(/@/) ? 'person' : 'add'}/>
                }
              />
              <ListItemText primaryText={choice}/>
            </ListItem>
          ))}
        </List>
    </DialogContent>
  </Dialog>
</div>
```



#### Confirmation

```js
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@fv-components/dialog';
import Button from '@fv-components/button';
import MaterialIcon from '@fv-components/material-icon';
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
} from '@fv-components/list';
import Radio, {
  NativeRadioControl,
} from '@fv-components/radio';

initialState = {
  isOpen: false, 
  action: '', 
  selectedIndex: -1,
  choices: ['Never gonna give you up', 'Host cross buns', 'None'],
};

const isChecked = (i) => i === state.selectedIndex;

<div>
  <Button
    onClick={() => setState({ isOpen: true })}
  >
    Open Dialog {state.action &&
      <span>(action: "{state.action}")</span>
    }
  </Button>
  <Dialog
    onClose={(action) => setState({ isOpen: false, action })}
    open={state.isOpen}>
    <DialogTitle>Chose a Phone Ringtone</DialogTitle>
    <DialogContent>
      <List 
        singleSelection 
        handleSelect={ (selectedIndex) => setState({ selectedIndex })}
      >
        {state.choices.map((choice, i) => {
          let cleanChoice = choice.replace(/\s/g, '-');
          return (
            <ListItem key={i}>
              <span className='mdc-list-item__graphic'>
                <Radio>
                  <NativeRadioControl
                    name='ringtone'
                    value={choice}
                    id={cleanChoice}
                    checked={isChecked(i)}
                    onChange={() => {}}
                  />
                </Radio>
              </span>
              <label htmlFor={cleanChoice}>
                <ListItemText primaryText={choice}/>
            </label>
            </ListItem>
          );
        })}
      </List>
    </DialogContent>
    <DialogFooter>
      <DialogButton action='dismiss'>Cancel</DialogButton>
      <DialogButton action='confirm' isDefault>Ok</DialogButton>
    </DialogFooter>
  </Dialog>
</div>
```
