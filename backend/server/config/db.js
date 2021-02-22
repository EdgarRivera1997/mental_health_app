import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.createConnection('mongodb://localhost/MHA', {useNewUrlParser: true, useUnifiedTopology: true})
        .once('open', () => console.log('MongoDB running'))
        .on('error', err => console.log(err))
};