module.exports.clientProjectValidation = ({firstName, email, phoneNo, country, projectType, budget}) => {
    if(!firstName) throw Error("Please enter your first name");
    if(!email) throw Error("Please enter your email address");
    if(!phoneNo) throw Error("Please enter your phone number");
    if(!country) throw Error("Please select your country");
    if(!projectType) throw Error("Please select project type");
    if(!budget) throw Error("Please select budget for project")
}