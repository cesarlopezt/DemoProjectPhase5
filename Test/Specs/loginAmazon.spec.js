const wdio = require("webdriverio");
const { assert } = require("chai");

const HomePage = require("../Pages/HomePage");
const SignInPage = require("../Pages/SignInPage");

describe("Amazon Login", function () {
    it("Login with correct credentials", function () {
        HomePage.goToSignIn();
        SignInPage.fillEmailAndContinue("email@email.com");
        SignInPage.fillPasswordAndSubmit("password");
        assert.equal(
            SignInPage.confirmationText.getText(),
            "Verificación necesaria"
        );
        // HomePage.greetingsName.waitForDisplayed({ timeout: 5000 });
        // HomePage.greetingsName.getText().replace(/\s/g)
    });
});
