
const express = require('express');
app = express();

// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.post('/', (req, res) => {
    const { subject, email, text } = req.body;
    log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT);