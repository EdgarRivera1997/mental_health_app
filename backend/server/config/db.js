import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/MHA', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true});
    mongoose.connection
        .once('open', () => console.log('MongoDB running'))
        .on('error', err => console.log(err))
};