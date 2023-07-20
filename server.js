var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public"))); //setting root directory
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/fonts", express.static(path.join(__dirname, "fonts")));

app.get('/addTwoNumber', (req, res) => {
    // Allocating argument and converting to correct data type via parseFloat
    let number_1 = parseFloat(req.query.number1);
    let number_2 = parseFloat(req.query.number2);

    // Performing the summation of the two nubmers
    let num_sum = number_1 + number_2;

    // Creating an object (dictionary) which holds the following properties
    var obj = {statusCode: 200, message: 'success', data:num_sum};

    // Returning the obj as a response
    res.json(obj);
});

app.listen(port, () => {
    console.log("App listening to: " + port);
});