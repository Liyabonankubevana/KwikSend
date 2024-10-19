import { APIGatewayProxyHandler } from "aws-lambda";

export const connect: APIGatewayProxyHandler = async event => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            message: 'Success',
            data: {

            }
        })
    };
}