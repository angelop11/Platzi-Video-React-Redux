import React, { Component } from 'react';
import Search from '../components/search';
//connecto nos permtie usar dispatch como propuedad
import { connect } from 'react-redux'
import * as actions from '../../actions';
import { bindActionCreators } from 'redux'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.input.value, 'submit')
    // fetch(`http://miapi.com/buscar/${this.input.value}`).then((data)=>{
    //   this.props.actions.searchEntities(this.input.value)
    // })
    this.props.actions.searchAsyncEntities(this.input.value)
    //   type: 'SEARCH_ENTITIES',
    //   payload: {
    //     query: this.input.value
    //   }
    // })
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

//enviando de forma implicita el dispatch
export default connect(null, mapDispatchToProps)(SearchContainer);
