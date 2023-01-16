// install express with `npm install express` 
const express = require("express");
var cors = require("cors");

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', require('./API/geolocation'));
app.use('/address', require('./API/lat_lon'));

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})
// module.exports=app;

// export 'app'
module.exports = app