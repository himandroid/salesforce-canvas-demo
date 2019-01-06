var express = require('express'),
consumerSecret = process.env.CONSUMER_SECRET,
app = express();
app.post('/signedrequest', function(req, res) {
//sending static response
  var jsonres = {
  "region": "US",
  "serialNumber": "1234,456"
};
	res.json(jsonres);
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
