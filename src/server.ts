import mongoose from 'mongoose';
import app from './app';
import config from './config';

const port = config.port || 5000;
const url = config.db_uri;

async function main() {
  try {
    await mongoose.connect(url as string);
    app.listen(port, () => {
      // console.log(`Example app listening on port ${port}`);
    });
    // console.log('Starting');
  } catch (err) {
    // console.log(err, 'Error');
  }
}
main();
