
const emailregex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default recipientsList => {
    const emails = recipientsList
       .split(',')
       .map( email => email.trim())
       .filter( email => { return emailregex.test(email) === false })
    if(emails.length){
        return `invalid emails `
    }
}