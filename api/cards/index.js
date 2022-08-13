import {Cards} from '../_database/models/index';
import connectToMongodb from '../_database/connect-to-mongodb';

const handler = async (request, response) => {
  try {
    await connectToMongodb();
    if (request.method === 'GET') {
      const cards = await Cards.find();

      return response.status(200).json(cards);
    }
  } catch (error) {
    return response.status(500).json({message: 'server error' + error.message});
  }
};
export default handler;
