cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    },
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
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
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
        "file": "plugins/com.kony.sdk/www/ios/KonyIphoneSyncPluginImpl.js",
        "id": "com.kony.sdk.Impl",
        "clobbers": [
            "KonyIOSImpl"
        ]
    },
    {
        "file": "plugins/com.kony.sdk/www/ios/KonySyncLib.js",
        "id": "com.kony.sdk.Lib",
        "clobbers": [
            "sync"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.PushPlugin": "2.2.0",
    "org.apache.cordova.device": "0.2.11-dev",
    "org.apache.cordova.inappbrowser": "0.5.1-dev",
    "org.apache.cordova.splashscreen": "0.3.2-dev",
    "com.kony.sdk": "1.0.0"
}
// BOTTOM OF METADATA
});