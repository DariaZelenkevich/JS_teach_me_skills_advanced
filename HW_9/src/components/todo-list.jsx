import React, { Component } from 'react';

import Item from './item';
import ErrorC from './error';
import Loading from './loading';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      listLenght: 0,
      isError: false,
      errorText: "",
      isLoading: true,
      doneList: [],
    };

  }

  handleClick = (id) => {

    return () => {

      if(this.state.list.some(item => item.id == id)) {
        const transferElem = this.state.list.find(item => item.id == id);

        this.setState({
          list: this.state.list.filter(item => item.id != id),
          doneList: this.state.doneList.concat([transferElem])
        });
      } else {

        const transferElem = this.state.doneList.find(item => item.id == id);

        this.setState({
          list: this.state.list.concat([transferElem]),
          doneList: this.state.doneList.filter(item => item.id != id)
        });
      }
    } 
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
          doneList: []
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
      return( 
        <>
          <ul>
            {this.state.list.map(({ id, title }) => (
          
                <Item key={id} title={title} callback={this.handleClick(id)}/>
            
            ))}
          </ul>
          <ul>
            {this.state.doneList.map(({ id, title }) => (
              
                <Item key={id} title={title} callback={this.handleClick(id)}/>

            ))}
          </ul>
        </>
      )
    }
  }

  render() {
    return ( 
      <>
        {this.display(this.state)}
      </>
    )
  }
}

export default TodoList;