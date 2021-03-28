const express = require('express');
const routes = require('./api/routes/routes')
const cors = require('cors')
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors());
app.use('/api', routes);

// app.use(function(req, res, next){
//     console.log('error handler',err);
//     const message = req.app.get('env') === 'developement' ? err.message : 'Internal error';
//     res.status(err.status || 500).json({message});
// });

module.exports = app;