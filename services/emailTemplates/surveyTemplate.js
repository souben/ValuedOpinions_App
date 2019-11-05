

const surveyTemplate = (survey) => {
    return '<div>'+survey.body+'<a>'+survey.yes+'</a><a>'+survey.no+'</a></div><div> From : '+survey.email+'</div>'
    
}
module.exports = surveyTemplate;