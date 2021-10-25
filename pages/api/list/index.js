import Cors from 'cors';
import initMiddleware from '../../../lib/init-middleware';
import listData from '../../mock-data/list.json';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
    // Run cors
    await cors(req, res)

  
    // Rest of the API logic
    
    if (req.method === 'POST') {
        console.log("Request Received - Method is POST and Req Body is ");
        console.log(req.body);

        res.json(req.body)

    } else if (req.method === 'GET') {
        console.log(" Request Recevied with method GET ");
        
        
        res.json(listData);
    }
    else {
        res.json({ message: 'Hello Everyone!' })
    }

}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}