import {Cards} from '../_database/models/index';
import connectToMongodb from '../_database/connect-to-mongodb';

const handler = async (request, response) => {
  try {
    await connectToMongodb();
    if (request.method === 'GET') {
      const cards = await Cards.find();

      return response.status(200).json(cards);
    } else if (request.method === 'POST') {
      const user = new Cards({
        videoName: request.body.videoName,
        description: request.body.description,
        isLocked: false,
        videoUrl: request.body.videoUrl,
        thumbnailUrl: request.body.thumbnailUrl,
        cost: request.body.cost,
        rating: 0,
        amountRates: 0,
      });
      const newUser = await user.save();
      return response.json(newUser);
    }
  } catch (error) {
    return response.status(500).json({message: 'server error' + error.message});
  }
};
export default handler;
