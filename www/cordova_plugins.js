cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/com.kony.sdk/konylibrary.js",
        "id": "com.kony.sdk.konylibrary",
        "clobbers": [
            "konylibrary"
        ]
    },
    {
        "file": "plugins/com.kony.sdk/kony-sdk.js",
        "id": "com.kony.sdk.kony-sdk",
        "clobbers": [
            "konysdk"
        ]
    },
    {
        "file": "plugins/com.kony.sdk/www/android/konysyncphonegapimpl.js",
        "id": "com.kony.sdk.Impl",
        "clobbers": [
            "KonyAndroidImpl"
        ]
    },
    {
        "file": "plugins/com.kony.sdk/www/android/KonySyncLib.js",
        "id": "com.kony.sdk.Lib",
        "clobbers": [
            "sync"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.2.11",
    "org.apache.cordova.inappbrowser": "0.5.1",
    "org.apache.cordova.console": "0.2.10",
    "com.kony.sdk": "1.0.0",
    "org.apache.cordova.splashscreen": "0.3.2"
}
// BOTTOM OF METADATA
});