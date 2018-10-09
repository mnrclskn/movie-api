const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://mnrclskn:asd.123@ds125693.mlab.com:25693/deneme-api', { useMongoClient: true });
    mongoose.connection.on('open', () => {
      console.log("Connected");
  });
    mongoose.connection.on('error', (err) =>{
      console.log("Failed",err);
  });
};