const Page = require("./page");

class HomePage extends Page {
    get signIn() {
        return $("#nav-logobar-greeting");
    }
    get greetingsName() {
        return $("#nav-greeting-name");
    }

    open() {
        super.open("https://www.amazon.com");
    }

    goToSignIn() {
        this.open();
        this.signIn.click();
    }
}

module.exports = new HomePage();
