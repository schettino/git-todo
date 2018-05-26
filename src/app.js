import * as React from 'react';
import {Flex, Input, Item} from './style';
import Container from './container';

class App extends React.Component {
  state = {
    items: [],
    name: '',
  };

  removeItem = name => {
    this.setState(state => ({
      items: state.items.filter(item => item !== name),
    }));
  };

  addItem = item => {
    this.setState(state => ({
      items: [item, ...state.items],
    }));
  };

  onKeyDown = ev => {
    if (ev.keyCode === 13) {
      const {name} = this.state;
      this.addItem(name);
      this.setState({name: ''});
    }
  };

  onChange = ev => {
    this.setState({name: ev.target.value});
  };

  render() {
    return (
      <Flex direction="column" justifyContent="center">
        <Container responsive>
          <Input
            value={this.state.name}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            placeholder="Insira um item"
          />
        </Container>

        <Container direction="column" basis="50">
          {this.state.items.map((item, index) => (
            <Item
              responsive
              justifyContent="space-between"
              key={`item-${index}-${item}`}>
              <span>{item}</span>
              <a onClick={() => this.removeItem(item)}>remover</a>
            </Item>
          ))}
        </Container>
      </Flex>
    );
  }
}

export default App;
