import axios from 'axios';
import { composedMessageWithCommon, composedMessageWithEs6 } from '../composed-messages';
import * as data from '../data/data.json';

export const handler = async (event: any): Promise<any> => {
  console.log('# Logging out the greetings:');
  console.log(composedMessageWithCommon('Manny')); // Hello, Manny! Message from base project. Greeting from common: Hello, there Manny! Message from commonjs.

  console.log(composedMessageWithEs6('Manny')); // Hello, Manny! Message from base project. Greeting from common: Hello, there Manny!  Message from ES6 Module.

  console.log('# Logging out the data from json:')
  console.log(data); // { message: 'Hello from data.json' }

  const url = "https://aws.amazon.com/";
  try {
    const res = await axios.get(url);
    console.info("axios response status: ", res.status);
    return res.status;
  }
  catch (e) {
    console.error(e);
    return 500;
  }
};

