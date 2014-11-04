
var syncObj;
function syncInitialize(){
    //instantiate sync services
    syncObj = konyObject.getSyncService();
    
    //sync initialization
    syncObj.init (function(){startSync();}, function(){alert('sync fail');ldr.hide();});
}

function startSync(){

    var config = {};
    config.userid  = "syncadmin";
    config.password = "SyncAdmin123";
    config.batchsize = "500";
    config.onsyncstart = onsyncstartCallback;
    config.onscopestart = onscopestartCallback;
    config.onscopeerror = onscopeerrorCallback;
    config.onscopesuccess = onscopesuccessCallback;
    config.onuploadstart = onuploadstartCallback;
    config.onuploadsuccess = onuploadsuccessCallback;
    config.ondownloadstart = ondownloadstartCallback;
    config.ondownloadsuccess = ondownloadsuccessCallback;
    config.onbatchstored = onbatchstoredCallback;
    config.onbatchprocessingstart = onbatchprocessingstartCallback;
    config.onbatchprocessingsuccess = onbatchprocessingsuccessCallback;
    config.onsyncsuccess = onsyncsuccessCallback;
    config.onsyncerror = onsyncerrorCallback;
    config.onupgradescriptsdownloadstart = onUpgradeScriptsDownloadStartCallback;
    config.onupgradescriptsdownloadsuccess = onUpgradeScriptsDownloadSuccessCallback;
    config.onupgradescriptsdownloaderror = onUpgradeScriptsDownloadErrorCallback;
    config.onupgradescriptsexecutionstart = onUpgradeScriptsExecutionStartCallback;
    config.onupgradescriptsexecutionsuccess = onUpgradeScriptsExecutionSuccessCallback;
    config.onupgradescriptsexecutionerror = onUpgradeScriptsExecutionErrorCallback;
    config.onuploadbatchstart = onUploadBatchStartCallback;
    config.onuploadbatchsuccess = onUploadBatchSuccessCallback;
    config.uploadbatchsize = 5;
    config.onupgraderequired = onUpgradeRequiredCallback;
    
    kony.print("In start Sync with Params :" + JSON.stringify(config));
    syncObj.startSession(config);
}
function syncInitFailureCallback(res){
   
    kony.print(JSON.stringify(res)); 
    alert("Sync Failed" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

function onUpgradeRequiredCallback(res){
    kony.print("here");
    return "UPLOAD_AND_UPGRADE";
}
function onsyncstartCallback(res){
    kony.print("~~~~~onSync Start Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function onuploadstartCallback(res){
    kony.print("~~~~~onUpload Start Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function onuploadsuccessCallback(res){
    kony.print("~~~~~onUpload Success Callback");
    for(i in res){
        kony.print(i + " " + JSON.stringify(res[i]));
    }
}

function ondownloadstartCallback(res){
    kony.print("~~~~~onDownload Start Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function ondownloadsuccessCallback(res){
    kony.print("~~~~~onDownload Success Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function onbatchstoredCallback(res){
    kony.print("~~~~~onBatch Stored Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function onbatchprocessingstartCallback(outputparams){
    
}

function onbatchprocessingsuccessCallback(res){
    kony.print("~~~~~onBatch Processing Success Callback");
    for(i in res){
        kony.print(i + " " + JSON.stringify(res[i]));
    }
}

function onsyncerrorCallback(outputparams){
    alert("sync error ~~" + JSON.stringify(outputparams));
    kony.print(JSON.stringify(outputparams));
    
}

function onsyncsuccessCallback(outputparams){
    alert("sync success");
    ldr.hide();
}

function onscopestartCallback(res){
    kony.print("~~~~~onScope Start Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function onscopeerrorCallback(res){
    kony.print("~~~~~onScope Error Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function onscopesuccessCallback(res){
    kony.print("~~~~~onScope Success Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}
function onUpgradeScriptsDownloadStartCallback(res){
    kony.print("~~~~~onUpgrade Scripts Download Start Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function onUpgradeScriptsDownloadSuccessCallback(res){
    kony.print("~~~~~~onUpgrade Scripts Download Success Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function onUpgradeScriptsDownloadErrorCallback(res){
    kony.print("~~~~~onUpgrade Scripts Download Error Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
    
}

function onUpgradeScriptsExecutionStartCallback(res){
    kony.print("~~~~~onUpgrade Scripts Execution Start Callback");
    for(i in res){
        kony.print(i + " " + JSON.stringify(res[i]));
    }
}

function onUpgradeScriptsExecutionSuccessCallback(res){
    kony.print("~~~~~onUpgrade Scripts Execution Success Callback");
    for(i in res){
        kony.print(i + " " + JSON.stringify(res[i]));
    }
}

function onUpgradeScriptsExecutionErrorCallback(res){
    kony.print("~~~~~onUpgrade Scripts Execution Error Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}


function onPerformUpgradeSuccess(res){
    kony.print("~~~~~Perform Upgrade Success Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
    alert("Performed Upgrade Successfully");
}

function onPerformUpgradeError(res){
    kony.print("~~~~~Perform Upgrade Error Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
    alert("Performed Upgrade Failed");
}

function onPerformUpgradeStart(res){
    kony.print("~~~~~Perform Upgrade Start Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
}

function onUploadBatchStartCallback(res){
    kony.print("~~~~~OnUploadBatch Start Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
    
}

function onUploadBatchSuccessCallback(res){
    kony.print("~~~~~OnUploadBatch Success Callback");
    for(i in res){
        kony.print(i + " " + res[i]);
    }
    
}

function successCallback(obj)
{
    ldr.hide();
    alert(JSON.stringify(obj));
    contObj = obj;
    alert('got sync obj');
}

function errorCallback(obj)
{
    alert("Error Callback . Reason :: "+JSON.stringify(obj));
    console.log("Error Callback . Reason :: "+JSON.stringify(obj));
}
function successCallback1(obj)
{
    alert(JSON.stringify(obj));
}

function contactcount(){

    Contact.getAllCount(successCallback1,errorCallback);
}

function pendinginst(){
    syncObj.getAllPendingUploadInstances (false, successCallback1, errorCallback);
}
