const app = require('express')();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Auth Server is listening on port ${port}`)
});