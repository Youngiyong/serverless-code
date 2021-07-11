import { Handler, Context } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = async (event: any, context: Context) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!"
    })
  };
  return response;
};

const hello2: Handler = async (events: any, context: Context) => {
    const response: HelloResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello2 world"
      })
    };
    return response;
  }
  

export { hello, hello2};