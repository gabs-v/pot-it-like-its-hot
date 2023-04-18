const mongoose = require('mongoose');

const dbName = 'plants'
mongoose.connect("mongodb://localhost/${dbName}",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
// the useNewUrlParser and userUnifiedTopology are options we pass to get rid of deprecation messages in our terminal 
//if the DB foes exist, MongoDB will create one for us

.then(() => console.log('connected to ${dbName} whoop whoop'))
.catch((err) => console.log(err))
