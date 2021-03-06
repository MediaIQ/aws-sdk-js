var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.Finspacedata', function() {
  var finspace = null;
  beforeEach(function() {
    finspace = new AWS.Finspacedata();
  });

  it('should set Content-Type header to application/x-amz-json-1.1', function () {
    helpers.mockHttpResponse(200, {}, '');
    req = finspace.getWorkingLocation({
      locationType: 'INGESTION'
    });
    req.build();
    return expect(req.httpRequest.headers['Content-Type']).to.equal('application/x-amz-json-1.1');
  });
});
