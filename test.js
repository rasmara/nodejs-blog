const express = require('express');
const bodyParser = require('body-parser');

const blog = requrequire('./routes/product.route'); // Imports routes for the products
const app = express();

let port = 1122;

app.get('/example/:id', (req, res) => {
    console.log(req.params.id)
    res.send("Hello world")
})
app.listen(port, () => {
    console.log("Server up and running on http://localhost:" + port);

});

console.log("helper function added");

