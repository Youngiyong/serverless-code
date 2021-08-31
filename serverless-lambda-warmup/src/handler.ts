import { Handler, Context } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}


const hello: Handler = async (event: any, context: Context) => {
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUp - Lambda is warm!');
    return 'Lambda is warm!';
  } else {
    const response: HelloResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello World!"
      })
    };
    return response;
  }

};


export { hello };