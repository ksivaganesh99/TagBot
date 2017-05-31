// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
AWS.config.loadFromPath('config.json');

// Create EC2 service object
ec2 = new AWS.EC2({apiVersion: '2016-11-15'});
var params = {
  InstanceIds: ['i-0e5935d888d09d023'],
  DryRun: false
};
// Call EC2 to retrieve the policy for selected bucket
ec2.describeInstances(params, function(err, data) {
  if (err) {
    console.log("Error", err.stack);
  } else {
    console.log("Success", JSON.stringify(data));
  }
});