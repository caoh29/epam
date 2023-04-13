const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/pdf', (req, res) => {
    const filePath = path.join(__dirname, 'TASK.pdf');
    const stat = fs.statSync(filePath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Disposition', 'inline; filename=TASK.pdf');

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
