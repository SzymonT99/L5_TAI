var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.info(`Server is running at 3000 port`)
});