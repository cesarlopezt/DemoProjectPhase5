const Page = require("./page");

class FormPage extends Page {
    get emailField() {
        return $("#ap_email_login");
    }
    get passwordField() {
        return $("#ap_password");
    }
    get continueButton() {
        return $("#continue input[type=submit]");
    }
    get submitButton() {
        return $("#signInSubmit");
    }
    get confirmationText() {
        return $("h1");
    }

    open() {
        super.open("login");
    }
    fillEmailAndContinue(email) {
        this.emailField.setValue(email);
        this.continueButton.click();
    }

    fillPasswordAndSubmit(password) {
        this.passwordField.setValue(password);
        this.submitButton.click();
    }
}

module.exports = new FormPage();
