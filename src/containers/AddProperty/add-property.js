import React, { Component } from 'react';
import './add-property.css';

class AddProperty extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mlsNumber: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zipcode: '',
      neighborhood: '',
      salesPrice: '',
      dateListed: '',
      garageSize: '',
      bedrooms: '',
      bathrooms: '',
      squareFeet: '',
      lotSize: '',
      description: '',
      addNewProperty: false
    }
    this.baseState = this.state;
    this.handleAddPropertyToggle = this.handleAddPropertyToggle.bind(this);
    this.addProperty = this.addProperty.bind(this);
  }

  handleAddPropertyToggle(e) {
    e.preventDefault();
    if (!this.state.addNewProperty) {
      this.setState({
        addNewProperty: true
      })
    } else {
      this.setState({
        addNewProperty: false
      })
    }
  }

  async addProperty(e) {
    e.preventDefault();
    fetch('/api/properties', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mls_number: this.state.mlsNumber, 
        street1: this.state.street1, 
        street2: this.state.street2, 
        city: this.state.city, 
        state: this.state.state, 
        zipcode: this.state.zipcode, 
        neighborhood: this.state.neighborhood, 
        sales_price: this.state.salesPrice, 
        date_listed: this.state.dateListed, 
        bedrooms: this.state.bedrooms, 
        bathrooms: this.state.bathrooms, 
        garage_size: this.state.garageSize, 
        square_feet: this.state.squareFeet, 
        lot_size: this.state.lotSize, 
        description: this.state.description
      }),
    })
    .then(() => {
      this.props.getProperties();
      this.setState(this.baseState)
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
  }

  render() {
    return (
      <section id="add-property-page">
        <h2>Properties:</h2>
        {
          !this.state.addNewProperty ?
            <button onClick={this.handleAddPropertyToggle}>Add new property</button>
            :
            <div>
              <div className="add-property-inputs-container">
                <input value={this.state.mlsNumber} placeholder="MLS #" onChange={e => this.setState({ mlsNumber: e.target.value })} />
                <input value={this.state.street1} placeholder="Street 1" onChange={e => this.setState({ street1: e.target.value })} />
                <input value={this.state.street2} placeholder="Street 2" onChange={e => this.setState({ street2: e.target.value })} />
                <input value={this.state.city} placeholder="City" onChange={e => this.setState({ city: e.target.value })} />
                <input value={this.state.state} placeholder="State" onChange={e => this.setState({ state: e.target.value })} />
                <input value={this.state.zipcode} placeholder="Zipcode" onChange={e => this.setState({ zipcode: e.target.value })} />
                <input value={this.state.neighborhood} placeholder="Neighborhood" onChange={e => this.setState({ neighborhood: e.target.value })} />
                <input value={this.state.salesPrice} placeholder="Sales Price" onChange={e => this.setState({ salesPrice: e.target.value })} />
                <input value={this.state.dateListed} placeholder="Date Listed" onChange={e => this.setState({ dateListed: e.target.value })} />
                <input value={this.state.bedrooms} placeholder="Bedrooms" onChange={e => this.setState({ bedrooms: e.target.value })} />
                <input value={this.state.bathrooms} placeholder="Bathrooms" onChange={e => this.setState({ bathrooms: e.target.value })} />
                <input value={this.state.garageSize} placeholder="Garage Size" onChange={e => this.setState({ garageSize: e.target.value })} />
                <input value={this.state.squareFeet} placeholder="Square feet" onChange={e => this.setState({ squareFeet: e.target.value })} />
                <input value={this.state.lotSize} placeholder="Lot Size" onChange={e => this.setState({ lotSize: e.target.value })} />
                <input value={this.state.description} placeholder="Description" onChange={e => this.setState({ description: e.target.value })} />
              </div>
              <button onClick={this.handleAddPropertyToggle}>Cancel</button>
              <button onClick={this.addProperty}>Add!</button>
            </div>
        }
      </section>
    );
  }
}

export default AddProperty;
