Themed Chips from <a href="https://github.com/material-components/material-components-web-react/tree/master/packages/chips" target="_blank">material-components-web-react</a>

### Installation

```bash
yarn add @fv-components/chips;
```

### Usage

```js static
import {
  Chip,
  ChipCheckmark,
  ChipSet,
} from '@fv-components/chips';
```

### [Props](https://github.com/material-components/material-components-web-react/tree/master/packages/chips#props)

### Examples

#### Default

```js
import {
  Chip,
  ChipCheckmark,
  ChipSet,
} from '@fv-components/chips';
import MaterialIcon from '@fv-components/material-icon';

<div>
  <ChipSet>
    <Chip id='summer' label='Summer'/>
    <Chip id='winter' label='Winter'/>
    <Chip
      id='icon'
      label='LeadingIcon'
      leadingIcon={<MaterialIcon icon='check' />}
    />
    <Chip
      id='icon2'
      label='Trailing Icon'
      trailingIcon={<MaterialIcon icon='cancel' />}
    />
  </ChipSet>
</div>
```

#### Choice Chips

```js
import {
  Chip,
  ChipCheckmark,
  ChipSet,
} from '@fv-components/chips';

initialState = {
  selectedChipIds: ['chip2'],
};

<div>
  <ChipSet
    choice
    selectedChipIds={state.selectedChipIds}
    handleSelect={(selectedChipIds) => setState({selectedChipIds})}
  >
    <Chip id={'chip1'} label='Small' />
    <Chip id={'chip2'} label='Medium' />
    <Chip id={'chip3'} label='Large' />
  </ChipSet>
</div>
```


#### Filter Chips

```js
import {
  Chip,
  ChipCheckmark,
  ChipSet,
} from '@fv-components/chips';

initialState = {
  selectedChipIds: ['chip1', 'chip2'],
};

<div>
  <ChipSet
    filter
    selectedChipIds={state.selectedChipIds}
    handleSelect={(selectedChipIds) => setState({selectedChipIds})}
  >
    <Chip id={'chip1'} label='Small' />
    <Chip id={'chip2'} label='Medium' />
    <Chip id={'chip3'} label='Large' />
  </ChipSet>
</div>
```


#### Input Chips

```js
import {
  Chip,
  ChipCheckmark,
  ChipSet,
} from '@fv-components/chips';
import MaterialIcon from '@fv-components/material-icon';

initialState = {
  chips: [
    {label: 'Jane Smith', id: 'JaneSmith'},
    {label: 'John Doe', id: 'JohnDoe'},
  ],
};

const handleKeyDown = (e) => {
  // If you have a more complex input, you may want to store the value in the state.
  const label = e.target.value;
  if (!!label && e.key === 'Enter') {
    const id = label.replace(/\s/g,'');
    // Create a new chips array to ensure that a re-render occurs.
    // See: https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly
    const chips = [...state.chips];
    if (chips.some((v) => v.id === id)) {
      console.error('There is already a chip which has same key.');
    } else {
      chips.push({label, id});
      setState({chips});
      e.target.value = '';
    }
  }
};

<div>
  <input type="text" onKeyDown={handleKeyDown} />
  <ChipSet
    input
    updateChips={(chips) => setState({chips})}
  >
    {state.chips.map((chip) =>
      <Chip
        id={chip.id}
        key={chip.id} // The chip's key cannot be its index, because its index may change.
        label={chip.label}
        trailingIcon={<MaterialIcon icon='cancel' />}
      />
    )}
  </ChipSet>
</div>
```
