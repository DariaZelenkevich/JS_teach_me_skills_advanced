import React, { Component } from 'react';

import Item from './item';
import ErrorC from './error';
import Loading from './loading';
import Button from './button';
import Input from './input';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      listLenght: 0,
      isError: false,
      errorText: "",
      isLoading: true,
      selectedBoxes: [],
      newItemText: ''
    }
  }

  handleClick = () => {
    this.setState({
      list: this.state.list.filter(item => !this.state.selectedBoxes.includes(item.id))
    })
  }

  handleNewItemClick = () => {

    this.state.list.push({
      userId: this.state.listLenght + 1, 
      id: this.state.list.listLenght + 1,
      title: this.state.newItemText
    }),
    this.setState({
      list: this.state.list
    })
  }

  handleInput = (event) => {
    this.setState({
      newItemText: event.target.value
    })
  }

  fillselectedBoxesArr = (id) => {
    this.setState(previous => {
      let selectedBoxes = previous.selectedBoxes;
      let index = selectedBoxes.indexOf(id);
      if (index === -1) {
        selectedBoxes.push(id);
      } else {
        selectedBoxes.splice(index, 1);
      }
      return { selectedBoxes };
    });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        if (!response.ok) {
          throw new Error({ stack: response.statusText });
        }

        return response.json();
      })
      .then(list => {
        this.setState({
          list,
          listLenght: this.state.list.length
        });
      })
      .catch(errorText => {
        this.setState({
          isError: true,
          errorText: errorText.stack
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  
  display(state) {
    if (state.isLoading) {
      return <Loading />;
    } else if (state.isError) {
      return <ErrorC title={this.state.errorText} />;
    } else {
      return this.state.list.map(({ id, title }) => (
        <div>
          <Item key={id} title={title} callback={this.fillselectedBoxesArr.bind(this, id)}/>
        </div>
        
      ));
    }
  }

  render() {
    return ( 
      <>
        <div>
        <Input callback={this.handleInput.bind(this)}/>
        <Button title = 'Добавить пункт'callback={this.handleNewItemClick.bind(this)}/>
        </div>
        <Button title = 'Удалить выбранное'callback={this.handleClick.bind(this)}/>
        {this.display(this.state)}
      </>
    )
  }
}

export default TodoList;