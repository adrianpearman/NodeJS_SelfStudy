// this parses the url for the mongoDB address

var configValues = require('./config');

module.exports = {
  getDbConnectionString: function(){
    return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds127994.mlab.com:27994/nodetodo'
  }
}
