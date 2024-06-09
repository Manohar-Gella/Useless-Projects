const express = require('express');
const app = express();
const port = 4320;
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    const exp = req.query.exp;
    console.log('Expression:', exp); // Logging expression for debugging
    const result = eval(exp);
    res.send(result.toString());
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 