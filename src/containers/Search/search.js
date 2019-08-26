import React, { Component } from 'react';
import './search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mlsNumber: '',
      city: '',
      state: '',
      zipcode: '',
      bedrooms: '',
      bathrooms: '',
      squareFeet: '',
      propertiesFound: '',
      searched: false
    }
    this.searchProperties = this.searchProperties.bind(this);
  }

  searchProperties(e) {
    e.preventDefault();
    if (this.state.mlsNumber === '' || this.state.city === '' || this.state.state === '' || this.state.zipcode === '' || this.state.bedrooms === '' || this.state.bathrooms === '' || this.state.squareFeet === '') {
      alert('please fill out all fields');
    } else {
      fetch(`/api/properties/${this.state.mlsNumber}/${this.state.city}/${this.state.state}/${this.state.zipcode}/${this.state.bedrooms}/${this.state.bathrooms}/${this.state.squareFeet}`)
      .then(res => res.json())
      .then(res => {this.setState({ propertiesFound: res, searched: true })})
      .catch(err => alert(err));
    }
  }

  render() {

    let propertiesReturned;
    if (this.state.propertiesFound) {
      propertiesReturned = this.state.propertiesFound.map((property, i) => (
        <ul key={i}>
          <li><strong>MLS #:</strong> {property.mls_number}</li>
          <li><strong>Street 1:</strong> {property.street1}</li>
          <li><strong>Street 2:</strong> {property.street2}</li>
          <li><strong>City:</strong> {property.city}</li>
          <li><strong>State:</strong> {property.state}</li>
          <li><strong>Zipcode:</strong> {property.zipcode}</li>
          <li><strong>Neighborhood:</strong> {property.neighborhood}</li>
          <li><strong>Sales Price:</strong> {property.sales_price}</li>
          <li><strong>Date Listed:</strong> {property.date_listed}</li>
          <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
          <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
          <li><strong>Garage Size:</strong> {property.garage_size}</li>
          <li><strong>Square Feet:</strong> {property.square_feet}</li>
          <li><strong>Lot Size:</strong> {property.lot_size}</li>
          <li><strong>Description:</strong> {property.description}</li>
        </ul>
      ))
    }

    return (
      <section id="search-page">
        <h2>Search for a property</h2>
        <div className="search-container">
          <input value={this.state.mlsNumber} placeholder="MLS #" onChange={e => this.setState({ mlsNumber: e.target.value })}></input>
          <input value={this.state.city} placeholder="City" onChange={e => this.setState({ city: e.target.value })}></input>
          <input value={this.state.state} placeholder="State" onChange={e => this.setState({ state: e.target.value })}></input>
          <input value={this.state.zipcode} placeholder="Zipcode" onChange={e => this.setState({ zipcode: e.target.value })}></input>
          <input value={this.state.bedrooms} placeholder="Bedrooms" onChange={e => this.setState({ bedrooms: e.target.value })}></input>
          <input value={this.state.bathrooms} placeholder="Bathrooms" onChange={e => this.setState({ bathrooms: e.target.value })}></input>
          <input value={this.state.squareFeet} placeholder="Square feet" onChange={e => this.setState({ squareFeet: e.target.value })}></input>
          <button onClick={this.searchProperties}>Search</button>
        </div>
        {this.state.propertiesFound ?
          <div>
            <h3>Properties found:</h3>
            {propertiesReturned}
          </div>
          :
          <div>
            {
              !this.state.propertiesFound && this.state.searched ?
                <p>No properties found.</p>
                :
                <p></p>
            }
          </div>
        }
      </section>
    );
  }
}

export default Search;
