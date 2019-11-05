const helper = require('@sendgrid/mail');
helper.setApiKey(require('../config/keys').sendGridKey);

class Mailer extends helper.MailService {
   
    constructor({ subject, recepients}, content){
        super();
        
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.content('text/html', content);
        this.recepients = this.formatAddresses(recepients);      

        this.addContent(this.body)  // the body not automatically
        this.addClickTracking();       
        this.addRecepients();                     // added to the bdoy
    }

    // formatAdresses
    formatAddresses(recepients){
        recepients.map(  ({email}) => {
            new helper.Email(email); 
        })
    }

    // addClickTracking
    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addClickTracking(trackingSettings);

    }

    //addRecepients
    addRecepients(){
        const personalize = new helper.Personalization();
        
    }
}

module.exports = Mailer;