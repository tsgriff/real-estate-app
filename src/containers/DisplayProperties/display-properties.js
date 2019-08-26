import React, { Component } from 'react';
import './display-properties.css';

class DisplayProperties extends Component {

  deleteProperty(i) {
    fetch(`/api/properties/${this.props.properties[i].mls_number}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(() => {
      this.props.getProperties();
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
  }

  render() {
    let propertyList;
    if (this.props.properties) {
      propertyList = this.props.properties.map((property, i) => (
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
          <button class="remove-property" onClick={() => {this.deleteProperty(i)}}>Delete</button>
        </ul>
      ))
    }

    return (
      <section id="display-properties">
        {this.props.properties ?
          <div>
            {propertyList}
          </div>
          :
          <div>
            {
              this.props.properties.length === 0 && this.props.propertiesFetched ?
                <p>No properties found.</p>
                :
                <p>Loading...</p>
            }
          </div>
        }
      </section>
    );
  }
}

export default DisplayProperties;
