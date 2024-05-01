const mongoose = require('mongoose');
const URI = 
  'mongodb+srv://ccruser:Deuseamor2024@cluster0.2qs9wfv.mongodb.net/CCR ';

mongoose
  .connect(URI)
  .then(() => console.log('DB is up'))
  .catch(() => console.log(Error));