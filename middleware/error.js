const winston = require('winston');
module.exports = function(err, req, res, next){

  winston.error(err.message, err);
  //error
  //warn
  //info
  //vrebose
  //debug
  //silly
  res.status(500).send('Something Failed');
} 