const mongoose = require('mongoose');

const dbName = 'plants'
mongoose.connect("mongodb://localhost/plants",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
// the useNewUrlParser and userUnifiedTopology are options we pass to get rid of deprecation messages in our terminal 

.then(() => console.log('connected to database whoop whoop'))
.catch((err) => console.log(err))
