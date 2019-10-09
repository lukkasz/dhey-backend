const encodeString = require('../helpers/encoder');

module.exports = function encoder(req, res) {
  const { inputString } = req.body;
  const encodedInputString = encodeString(inputString) 
  res.send({ encodedString: encodedInputString })
}