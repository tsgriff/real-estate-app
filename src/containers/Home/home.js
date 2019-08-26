import React, { Component } from 'react';
import './home.css';
import AddProperty from '../AddProperty/add-property';
import DisplayProperties from '../DisplayProperties/display-properties';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: '',
      propertiesFetched: false
    }
    this.getProperties = this.getProperties.bind(this);
  }

  componentDidMount() {
    this.getProperties();
  }

  getProperties() {
    fetch('/api/properties')
    .then(res => res.json())
    .then(res => this.setState({ properties: res, propertiesFetched: true }))
    .catch(err => {alert(err)});
  };

  render() {
    return (
      <section id="home-page">
        <AddProperty getProperties={this.getProperties} />
        <DisplayProperties {...this.state} getProperties={this.getProperties} />
      </section>
    );
  }

}

export default Home;
