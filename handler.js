'use strict';
const uuid = require('uuid');
const AWS = require('aws-sdk');

const options = {
	region: 'localhost',
	endpoint: 'http://localhost:8000'
};

const DocumentClient = 	new AWS.DynamoDB.DocumentClient(options);
const { TableName } = process.env;

module.exports.create = async event => {
	const parameters = {
		TableName,
		Item: {
			attr_1: uuid.v4()
		}
	};
	const response = await DocumentClient.put(parameters).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({input: response},
    ),
  };
};
