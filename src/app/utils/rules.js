const rules = {
    email: (email) => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.match(mailformat);
    },
    password: (password) => (password.length > 5)
}

export default rules;