const Quote = require('../models/Quote');

module.exports = {
  getAll
};


// getAll function retrieves all quotes from the database
async function getAll(req, res) {
  try {
    const quotes = await Quote.find({});
    if (quotes) {
      res.status(200).json(quotes);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
