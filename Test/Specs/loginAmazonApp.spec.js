const wdio = require("webdriverio");
const { assert } = require("chai");
const MigrationScreen = require("../Screens/MigrationScreen");
const SignInScreen = require("../Screens/SignInScreen");

describe("Amazon app Login", function () {
    it("Login with correct credentials", function () {
        MigrationScreen.readyButton.click(); //Confirm currency
        MigrationScreen.signInButton.click(); //Click Iniciar Sesion

        SignInScreen.emailField.setValue("email@email.com");
        SignInScreen.continueButton.click(); //Continue button
        SignInScreen.passwordField.setValue("password");
        SignInScreen.submitButton.click();
        assert.equal(
            SignInScreen.verificationText.getText(),
            "Verificación necesaria"
        );
    });
});
