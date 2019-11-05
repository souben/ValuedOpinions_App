const isAuthentified = require('../middlewares/isAuthentified');
const isEligible = require('../middlewares/isEligible');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
    app.post('/api/surveys', isAuthentified, isEligible, (req, res) => {

        const { title, body, subject, recipients } = req.body;
        recipients = recipients.slplit(";").map(recipient => { return {email: recipient}})
        const survey = new Survey({
            title,
            body,
            subject,
            recipients: recipients.split(",").map(email => ({email}) ),
            _userId: req.user.id,
            dateSent: Date.now
        })

        // And now we will end our email!!
        const mailer = new Mailer(survey, template(survey));
        survey.save()
            .then( newSurvey => console.log(newSurvey))
    })
}; 