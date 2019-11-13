const keys = require('../../config/keys');

const surveyTemplate = (survey) => {
    return `<html>
                <body>
                    <div style="text-align: cneter"> 
                        <h3>We need your feedback , Please answer the following question</h3>
                        <p>${survey.body}</p>
                        <div>
                            <a href="${keys.redirectDomain}/api/surveys/${survey._id}/feedback">Yes</a> 
                        </div>
                        <div>
                            <a href="${keys.redirectDomain}/api/surveys/${survey._id}/feedback">No</a> 
                        </div>
                    </div>
                </body>
            </html>`


}
module.exports = surveyTemplate;