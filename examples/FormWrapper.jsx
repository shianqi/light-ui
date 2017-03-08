import React from 'react';
import Input from '../components/react/Form/Input';
import Selector from '../components/react/Form/Selector';
import SelectorV2 from '../components/react/Form/SelectorV2';
import Textarea from '../components/react/Form/Textarea';


const OPTIONS = [
  { id: 0, text: 'selector 0' },
  { id: 1, text: 'selector 1' },
  { id: 2, text: 'selector 2' },
  { id: 3, text: 'selector 3' }
];

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selected: OPTIONS[0].id
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onChange(value) {
    this.setState({ value })
  }

  onSelect(selected) {
    console.log(`selected: ${selected}`)
    this.setState({ selected })
  }

  render() {
    const { value, selected } = this.state;
    const { disabled, clearIcon } = this.props;

    return (
      <div id="components-container">
        <h3>Input</h3>
        <h4>material theme</h4>
        <Input
          value={value}
          placeholder="material theme"
          disabled={disabled}
          onChange={this.onChange}
        />
        <h4>flat theme</h4>
        <Input
          value={value}
          theme="flat"
          placeholder="flat theme"
          disabled={disabled}
          onChange={this.onChange}
        />
        <h4>borderless theme</h4>
        <Input
          value={value}
          theme="borderless"
          placeholder="borderless theme"
          disabled={disabled}
          onChange={this.onChange}
        />&nbsp;&nbsp;&nbsp;
        <Input
          value={value}
          theme="borderless"
          style="underline"
          placeholder="borderless theme"
          disabled={disabled}
          onChange={this.onChange}
        />
        <h4>Validator</h4>
        <Input
          value={value}
          type="email"
          placeholder="email"
          disabled={disabled}
          onChange={this.onChange}
        />
        <Input
          value={value}
          type="phone"
          placeholder="phone"
          disabled={disabled}
          onChange={this.onChange}
        />
        <h3>Textarea</h3>
        <Textarea
          max="200"
          value={value}
          placeholder="textarea"
          type="textarea"
          onChange={this.onChange}
        />
        <h3>Selector</h3>
        <h4>material theme</h4>
        <Selector
          value={selected}
          disabled={disabled}
          options={OPTIONS}
          onChange={this.onSelect}
        />
        <h4>flat theme</h4>
        <Selector
          value={selected}
          theme="flat"
          disabled={disabled}
          options={OPTIONS}
          onChange={this.onSelect}
        />
        <h3>SelectorV2</h3>
        <h4>material theme</h4>
        <SelectorV2
          value={selected}
          disabled={disabled}
          options={OPTIONS}
          onChange={this.onSelect}
        />
        <SelectorV2
          value={selected}
          disabled={disabled}
          options={OPTIONS}
          color="blue"
          onChange={this.onSelect}
        />
        <SelectorV2
          value={selected}
          disabled={disabled}
          options={OPTIONS}
          color="white"
          onChange={this.onSelect}
        />
        <h4>flat theme</h4>
        <SelectorV2
          value={selected}
          disabled={disabled}
          options={OPTIONS}
          theme="flat"
          onChange={this.onSelect}
        />
        <SelectorV2
          value={selected}
          disabled={disabled}
          options={OPTIONS}
          theme="flat"
          color="blue"
          onChange={this.onSelect}
        />
        <SelectorV2
          value={selected}
          disabled={disabled}
          options={OPTIONS}
          theme="flat"
          color="white"
          onChange={this.onSelect}
        />
      </div>
    )
  }
}

export default FormWrapper;
