
// import mongoose from 'mongoose';

// async function dbConnect() {
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// export default dbConnect;



// // const mangouste = require ( 'mangouste' ); 
// // mangouste. connect ( 'mongodb://localhost/my_database' , { useNewUrlParser : true , useUnifiedTopology : true }) 
// //   . then ( () =>  console .log ( ' MongoDB connecté' )) 
// //   . catch ( ( err ) =>  console . log (err));