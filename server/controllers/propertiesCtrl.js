module.exports = {
  getAllProperties: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.getAllProperties()
      .then(properties => res.status(200).send(properties))
      .catch(err => {
        res.status(500).send({ errorMessage: err });
      });
  },
  addProperty: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { mls_number, street1, street2, city, state, zipcode, neighborhood, sales_price, date_listed, bedrooms, bathrooms, garage_size, square_feet, lot_size, description } = req.body;

    dbInstance.addProperty([mls_number, street1, street2, city, state, zipcode, neighborhood, sales_price, date_listed, bedrooms, bathrooms, garage_size, square_feet, lot_size, description])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: err });
      });
  },
  searchForProperty: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {mls_number, city, state, zipcode, bedrooms, bathrooms, square_feet} = req.params;
    dbInstance.searchForProperty([mls_number, city, state, zipcode, bedrooms, bathrooms, square_feet])
      .then(properties => res.status(200).send(properties))
      .catch(err => {
        res.status(500).send({ errorMessage: err });
      });
  },
  deleteProperty: (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.deleteProperty([req.params.mls_number])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: err });
      });
  },
  // updateProperty: (req, res) => {
  //   const dbInstance = req.app.get('db');
  //   dbInstance.updateProperty([req.params.mls_number])
  //     .then(() => res.sendStatus(200))
  //     .catch(err => {
  //       res.status(500).send({ errorMessage: err });
  //     });  
  // }
};