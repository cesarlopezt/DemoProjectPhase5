const androidWebCaps = {
    platformName: "Android",
    automationName: "UiAutomator2",
    deviceName: "Android Emulator",
    platformVersion: "8",
    browserName: "chrome",
};

const serverConfig = {
    path: "/wd/hub",
    host: "localhost",
    port: 4723,
    logLevel: "info",
};

const androidWebOptions = Object.assign({
    path: "/wd/hub",
    port: 4723,
    capabilities: {
        platformName: "Android",
        automationName: "UiAutomator2",
        deviceName: "Android Emulator",
        platformVersion: "8",
        browserName: "chrome",
    },
});
