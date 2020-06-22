class SignInScreen {
    get emailField() {
        return $('android=new UiSelector().resourceId("ap_email_login")');
    }

    get continueButton() {
        return $(
            "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]/android.widget.Button"
        );
    }

    get passwordField() {
        return $('android=new UiSelector().resourceId("ap_password")');
    }

    get submitButton() {
        return $('android=new UiSelector().resourceId("signInSubmit")');
    }

    get verificationText() {
        return $(
            "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[2]"
        );
    }
}
module.exports = new SignInScreen();
