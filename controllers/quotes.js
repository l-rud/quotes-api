const Quote = require('../models/Quote');

module.exports = {
  getAll, getRandom
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

// getRandom function retrieves random quote from the database
async function getRandom(req, res) {
  try {
    const count = await Quote.countDocuments();
    if (count === 0) {
      return res.status(404).send('No quotes found');
    }
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(randomIndex);
    res.status(200).json(randomQuote);

  } catch (err) {
    res.status(400).send(err);
  }
};