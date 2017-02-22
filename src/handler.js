'use strict';

import Greeting from './Greeter';

function _handleGET(queryParams, callback) {
    const name = queryParams ? queryParams.name : null;
    const greeting = new Greeting(name);

    const response = {
        statusCode: 200,
        body: greeting.greet()
    };

    callback(null, response);
}

function _handleError(message = 'Error', callback) {
    const errResponse = {
        statusCode: 400,
        body: message
    };

    callback(null, errResponse);
}

/**
 * This is the entry point of the Lambda.  This is using Serverless
 * as the runtime & app framework:
 *
 *  https://serverless.com/framework/docs/providers/aws/guide
 *
 * @param event The event that caused the lambda to fire
 * @param context The context the lambda is running in
 * @param callback To call when you're finished.
 */
function handler(event, context, callback) {
    let method = event.httpMethod;
    switch (method) {
        case 'GET':
            _handleGET(event.queryStringParameters, callback);
            break;

        default:
            _handleError(`Cannot handle ${method}`, callback);
    }
}


export default handler;