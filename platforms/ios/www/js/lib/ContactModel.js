//****************Sync Version:Sync-GA-5.6.2_v201408201427_r1*******************
// ****************Generated On Tue Oct 07 11:51:17 UTC 2014Contact*******************
// **********************************Start Contact's helper methods************************
if (typeof(kony) === "undefined") {
	kony = {};
}

if (typeof(kony.sync) === "undefined") {
	kony.sync = {};
}

if (typeof(kony.sync.log) === "undefined") {
	kony.sync.log = {};
}

if (typeof(sync) === "undefined") {
	sync = {};
}

if (typeof(sync.log) === "undefined") {
	sync.log = {};
}




/************************************************************************************
* Creates new Contact
*************************************************************************************/
Contact = function(){
	this.AccountId = null;
	this.AssistantName = null;
	this.AssistantPhone = null;
	this.BatchSize = null;
	this.Birthdate = null;
	this.CleanStatus = null;
	this.CreatedById = null;
	this.CreatedDate = null;
	this.Department = null;
	this.Description = null;
	this.Email = null;
	this.EmailBouncedDate = null;
	this.EmailBouncedReason = null;
	this.EndDate = null;
	this.Fax = null;
	this.FirstName = null;
	this.HomePhone = null;
	this.Id = null;
	this.InitialSync = null;
	this.IsDeleted = null;
	this.IsEmailBounced = null;
	this.Jigsaw = null;
	this.JigsawContactId = null;
	this.Languages__c = null;
	this.LastActivityDate = null;
	this.LastCURequestDate = null;
	this.LastCUUpdateDate = null;
	this.LastModifiedById = null;
	this.LastModifiedDate = null;
	this.LastName = null;
	this.LastReferencedDate = null;
	this.LastViewedDate = null;
	this.LeadSource = null;
	this.Level__c = null;
	this.MailingAddress = null;
	this.MailingCity = null;
	this.MailingCountry = null;
	this.MailingLatitude = null;
	this.MailingLongitude = null;
	this.MailingPostalCode = null;
	this.MailingState = null;
	this.MailingStreet = null;
	this.MasterRecordId = null;
	this.MobilePhone = null;
	this.Name = null;
	this.OtherAddress = null;
	this.OtherCity = null;
	this.OtherCountry = null;
	this.OtherLatitude = null;
	this.OtherLongitude = null;
	this.OtherPhone = null;
	this.OtherPostalCode = null;
	this.OtherState = null;
	this.OtherStreet = null;
	this.OwnerId = null;
	this.Phone = null;
	this.PhotoUrl = null;
	this.ReportsToId = null;
	this.Salutation = null;
	this.StartDate = null;
	this.SystemModstamp = null;
	this.Title = null;
	this.errorCode = null;
	this.message = null;
	this.queryLocator = null;
	this.queryString = null;
	this.markForUpload = true;
};

Contact.prototype = {
	get AccountId(){
		return this._AccountId;
	},
	set AccountId(val){
		this._AccountId = val;
	},
	get AssistantName(){
		return this._AssistantName;
	},
	set AssistantName(val){
		this._AssistantName = val;
	},
	get AssistantPhone(){
		return this._AssistantPhone;
	},
	set AssistantPhone(val){
		this._AssistantPhone = val;
	},
	get BatchSize(){
		return this._BatchSize;
	},
	set BatchSize(val){
		this._BatchSize = val;
	},
	get Birthdate(){
		return this._Birthdate;
	},
	set Birthdate(val){
		this._Birthdate = val;
	},
	get CleanStatus(){
		return this._CleanStatus;
	},
	set CleanStatus(val){
		this._CleanStatus = val;
	},
	get CreatedById(){
		return this._CreatedById;
	},
	set CreatedById(val){
		this._CreatedById = val;
	},
	get CreatedDate(){
		return this._CreatedDate;
	},
	set CreatedDate(val){
		this._CreatedDate = val;
	},
	get Department(){
		return this._Department;
	},
	set Department(val){
		this._Department = val;
	},
	get Description(){
		return this._Description;
	},
	set Description(val){
		this._Description = val;
	},
	get Email(){
		return this._Email;
	},
	set Email(val){
		this._Email = val;
	},
	get EmailBouncedDate(){
		return this._EmailBouncedDate;
	},
	set EmailBouncedDate(val){
		this._EmailBouncedDate = val;
	},
	get EmailBouncedReason(){
		return this._EmailBouncedReason;
	},
	set EmailBouncedReason(val){
		this._EmailBouncedReason = val;
	},
	get EndDate(){
		return this._EndDate;
	},
	set EndDate(val){
		this._EndDate = val;
	},
	get Fax(){
		return this._Fax;
	},
	set Fax(val){
		this._Fax = val;
	},
	get FirstName(){
		return this._FirstName;
	},
	set FirstName(val){
		this._FirstName = val;
	},
	get HomePhone(){
		return this._HomePhone;
	},
	set HomePhone(val){
		this._HomePhone = val;
	},
	get Id(){
		return this._Id;
	},
	set Id(val){
		this._Id = val;
	},
	get InitialSync(){
		return this._InitialSync;
	},
	set InitialSync(val){
		this._InitialSync = val;
	},
	get IsDeleted(){
		return kony.sync.getBoolean(this._IsDeleted);
	},
	set IsDeleted(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsDeleted in Contact.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsDeleted = val;
	},
	get IsEmailBounced(){
		return kony.sync.getBoolean(this._IsEmailBounced);
	},
	set IsEmailBounced(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsEmailBounced in Contact.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsEmailBounced = val;
	},
	get Jigsaw(){
		return this._Jigsaw;
	},
	set Jigsaw(val){
		this._Jigsaw = val;
	},
	get JigsawContactId(){
		return this._JigsawContactId;
	},
	set JigsawContactId(val){
		this._JigsawContactId = val;
	},
	get Languages__c(){
		return this._Languages__c;
	},
	set Languages__c(val){
		this._Languages__c = val;
	},
	get LastActivityDate(){
		return this._LastActivityDate;
	},
	set LastActivityDate(val){
		this._LastActivityDate = val;
	},
	get LastCURequestDate(){
		return this._LastCURequestDate;
	},
	set LastCURequestDate(val){
		this._LastCURequestDate = val;
	},
	get LastCUUpdateDate(){
		return this._LastCUUpdateDate;
	},
	set LastCUUpdateDate(val){
		this._LastCUUpdateDate = val;
	},
	get LastModifiedById(){
		return this._LastModifiedById;
	},
	set LastModifiedById(val){
		this._LastModifiedById = val;
	},
	get LastModifiedDate(){
		return this._LastModifiedDate;
	},
	set LastModifiedDate(val){
		this._LastModifiedDate = val;
	},
	get LastName(){
		return this._LastName;
	},
	set LastName(val){
		this._LastName = val;
	},
	get LastReferencedDate(){
		return this._LastReferencedDate;
	},
	set LastReferencedDate(val){
		this._LastReferencedDate = val;
	},
	get LastViewedDate(){
		return this._LastViewedDate;
	},
	set LastViewedDate(val){
		this._LastViewedDate = val;
	},
	get LeadSource(){
		return this._LeadSource;
	},
	set LeadSource(val){
		this._LeadSource = val;
	},
	get Level__c(){
		return this._Level__c;
	},
	set Level__c(val){
		this._Level__c = val;
	},
	get MailingAddress(){
		return this._MailingAddress;
	},
	set MailingAddress(val){
		this._MailingAddress = val;
	},
	get MailingCity(){
		return this._MailingCity;
	},
	set MailingCity(val){
		this._MailingCity = val;
	},
	get MailingCountry(){
		return this._MailingCountry;
	},
	set MailingCountry(val){
		this._MailingCountry = val;
	},
	get MailingLatitude(){
		return this._MailingLatitude;
	},
	set MailingLatitude(val){
		this._MailingLatitude = val;
	},
	get MailingLongitude(){
		return this._MailingLongitude;
	},
	set MailingLongitude(val){
		this._MailingLongitude = val;
	},
	get MailingPostalCode(){
		return this._MailingPostalCode;
	},
	set MailingPostalCode(val){
		this._MailingPostalCode = val;
	},
	get MailingState(){
		return this._MailingState;
	},
	set MailingState(val){
		this._MailingState = val;
	},
	get MailingStreet(){
		return this._MailingStreet;
	},
	set MailingStreet(val){
		this._MailingStreet = val;
	},
	get MasterRecordId(){
		return this._MasterRecordId;
	},
	set MasterRecordId(val){
		this._MasterRecordId = val;
	},
	get MobilePhone(){
		return this._MobilePhone;
	},
	set MobilePhone(val){
		this._MobilePhone = val;
	},
	get Name(){
		return this._Name;
	},
	set Name(val){
		this._Name = val;
	},
	get OtherAddress(){
		return this._OtherAddress;
	},
	set OtherAddress(val){
		this._OtherAddress = val;
	},
	get OtherCity(){
		return this._OtherCity;
	},
	set OtherCity(val){
		this._OtherCity = val;
	},
	get OtherCountry(){
		return this._OtherCountry;
	},
	set OtherCountry(val){
		this._OtherCountry = val;
	},
	get OtherLatitude(){
		return this._OtherLatitude;
	},
	set OtherLatitude(val){
		this._OtherLatitude = val;
	},
	get OtherLongitude(){
		return this._OtherLongitude;
	},
	set OtherLongitude(val){
		this._OtherLongitude = val;
	},
	get OtherPhone(){
		return this._OtherPhone;
	},
	set OtherPhone(val){
		this._OtherPhone = val;
	},
	get OtherPostalCode(){
		return this._OtherPostalCode;
	},
	set OtherPostalCode(val){
		this._OtherPostalCode = val;
	},
	get OtherState(){
		return this._OtherState;
	},
	set OtherState(val){
		this._OtherState = val;
	},
	get OtherStreet(){
		return this._OtherStreet;
	},
	set OtherStreet(val){
		this._OtherStreet = val;
	},
	get OwnerId(){
		return this._OwnerId;
	},
	set OwnerId(val){
		this._OwnerId = val;
	},
	get Phone(){
		return this._Phone;
	},
	set Phone(val){
		this._Phone = val;
	},
	get PhotoUrl(){
		return this._PhotoUrl;
	},
	set PhotoUrl(val){
		this._PhotoUrl = val;
	},
	get ReportsToId(){
		return this._ReportsToId;
	},
	set ReportsToId(val){
		this._ReportsToId = val;
	},
	get Salutation(){
		return this._Salutation;
	},
	set Salutation(val){
		this._Salutation = val;
	},
	get StartDate(){
		return this._StartDate;
	},
	set StartDate(val){
		this._StartDate = val;
	},
	get SystemModstamp(){
		return this._SystemModstamp;
	},
	set SystemModstamp(val){
		this._SystemModstamp = val;
	},
	get Title(){
		return this._Title;
	},
	set Title(val){
		this._Title = val;
	},
	get errorCode(){
		return this._errorCode;
	},
	set errorCode(val){
		this._errorCode = val;
	},
	get message(){
		return this._message;
	},
	set message(val){
		this._message = val;
	},
	get queryLocator(){
		return this._queryLocator;
	},
	set queryLocator(val){
		this._queryLocator = val;
	},
	get queryString(){
		return this._queryString;
	},
	set queryString(val){
		this._queryString = val;
	},
};

/************************************************************************************
* Retrieves all instances of Contact SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "AccountId";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "AssistantName";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* Contact.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
Contact.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering Contact.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	orderByMap = kony.sync.formOrderByClause("Contact",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering Contact.getAll->successcallback");
		successcallback(Contact.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Contact present in local database.
*************************************************************************************/
Contact.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering Contact.getAllCount function");
	Contact.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of Contact using where clause in the local Database
*************************************************************************************/
Contact.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering Contact.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from " + tbname + " " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering Contact.getCount->successcallback");
		if(null!==res){
			var count = null;
			count = res["count(*)"];
			kony.sync.verifyAndCallClosure(successcallback, {count:count});
		}
		else{
			sync.log.error("Some error occured while getting the count");
		}
	}
};

/************************************************************************************
* Creates a new instance of Contact in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Contact.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  Contact.prototype.create function");
	var valuestable = this.getValuesTable(true);
	Contact.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
Contact.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  Contact.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "Contact.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"Contact",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  Contact.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = Contact.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of Contact in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].AccountId = "AccountId_0";
*		valuesArray[0].AssistantName = "AssistantName_0";
*		valuesArray[0].AssistantPhone = "AssistantPhone_0";
*		valuesArray[0].BatchSize = "BatchSize_0";
*		valuesArray[0].Birthdate = "Birthdate_0";
*		valuesArray[0].CleanStatus = "CleanStatus_0";
*		valuesArray[0].CreatedById = "CreatedById_0";
*		valuesArray[0].CreatedDate = "CreatedDate_0";
*		valuesArray[0].Department = "Department_0";
*		valuesArray[0].Description = "Description_0";
*		valuesArray[0].Email = "Email_0";
*		valuesArray[0].EmailBouncedDate = "EmailBouncedDate_0";
*		valuesArray[0].EmailBouncedReason = "EmailBouncedReason_0";
*		valuesArray[0].EndDate = "EndDate_0";
*		valuesArray[0].Fax = "Fax_0";
*		valuesArray[0].FirstName = "FirstName_0";
*		valuesArray[0].HomePhone = "HomePhone_0";
*		valuesArray[0].InitialSync = "InitialSync_0";
*		valuesArray[0].IsEmailBounced = true;
*		valuesArray[0].Jigsaw = "Jigsaw_0";
*		valuesArray[0].JigsawContactId = "JigsawContactId_0";
*		valuesArray[0].Languages__c = "Languages__c_0";
*		valuesArray[0].LastActivityDate = "LastActivityDate_0";
*		valuesArray[0].LastCURequestDate = "LastCURequestDate_0";
*		valuesArray[0].LastCUUpdateDate = "LastCUUpdateDate_0";
*		valuesArray[0].LastModifiedById = "LastModifiedById_0";
*		valuesArray[0].LastName = "LastName_0";
*		valuesArray[0].LastReferencedDate = "LastReferencedDate_0";
*		valuesArray[0].LastViewedDate = "LastViewedDate_0";
*		valuesArray[0].LeadSource = "LeadSource_0";
*		valuesArray[0].Level__c = "Level__c_0";
*		valuesArray[0].MailingAddress = "MailingAddress_0";
*		valuesArray[0].MailingCity = "MailingCity_0";
*		valuesArray[0].MailingCountry = "MailingCountry_0";
*		valuesArray[0].MailingLatitude = "MailingLatitude_0";
*		valuesArray[0].MailingLongitude = "MailingLongitude_0";
*		valuesArray[0].MailingPostalCode = "MailingPostalCode_0";
*		valuesArray[0].MailingState = "MailingState_0";
*		valuesArray[0].MailingStreet = "MailingStreet_0";
*		valuesArray[0].MasterRecordId = "MasterRecordId_0";
*		valuesArray[0].MobilePhone = "MobilePhone_0";
*		valuesArray[0].Name = "Name_0";
*		valuesArray[0].OtherAddress = "OtherAddress_0";
*		valuesArray[0].OtherCity = "OtherCity_0";
*		valuesArray[0].OtherCountry = "OtherCountry_0";
*		valuesArray[0].OtherLatitude = "OtherLatitude_0";
*		valuesArray[0].OtherLongitude = "OtherLongitude_0";
*		valuesArray[0].OtherPhone = "OtherPhone_0";
*		valuesArray[0].OtherPostalCode = "OtherPostalCode_0";
*		valuesArray[0].OtherState = "OtherState_0";
*		valuesArray[0].OtherStreet = "OtherStreet_0";
*		valuesArray[0].OwnerId = "OwnerId_0";
*		valuesArray[0].Phone = "Phone_0";
*		valuesArray[0].PhotoUrl = "PhotoUrl_0";
*		valuesArray[0].ReportsToId = "ReportsToId_0";
*		valuesArray[0].Salutation = "Salutation_0";
*		valuesArray[0].StartDate = "StartDate_0";
*		valuesArray[0].SystemModstamp = "SystemModstamp_0";
*		valuesArray[0].Title = "Title_0";
*		valuesArray[0].errorCode = "errorCode_0";
*		valuesArray[0].message = "message_0";
*		valuesArray[0].queryLocator = "queryLocator_0";
*		valuesArray[0].queryString = "queryString_0";
*		valuesArray[1] = {};
*		valuesArray[1].AccountId = "AccountId_1";
*		valuesArray[1].AssistantName = "AssistantName_1";
*		valuesArray[1].AssistantPhone = "AssistantPhone_1";
*		valuesArray[1].BatchSize = "BatchSize_1";
*		valuesArray[1].Birthdate = "Birthdate_1";
*		valuesArray[1].CleanStatus = "CleanStatus_1";
*		valuesArray[1].CreatedById = "CreatedById_1";
*		valuesArray[1].CreatedDate = "CreatedDate_1";
*		valuesArray[1].Department = "Department_1";
*		valuesArray[1].Description = "Description_1";
*		valuesArray[1].Email = "Email_1";
*		valuesArray[1].EmailBouncedDate = "EmailBouncedDate_1";
*		valuesArray[1].EmailBouncedReason = "EmailBouncedReason_1";
*		valuesArray[1].EndDate = "EndDate_1";
*		valuesArray[1].Fax = "Fax_1";
*		valuesArray[1].FirstName = "FirstName_1";
*		valuesArray[1].HomePhone = "HomePhone_1";
*		valuesArray[1].InitialSync = "InitialSync_1";
*		valuesArray[1].IsEmailBounced = true;
*		valuesArray[1].Jigsaw = "Jigsaw_1";
*		valuesArray[1].JigsawContactId = "JigsawContactId_1";
*		valuesArray[1].Languages__c = "Languages__c_1";
*		valuesArray[1].LastActivityDate = "LastActivityDate_1";
*		valuesArray[1].LastCURequestDate = "LastCURequestDate_1";
*		valuesArray[1].LastCUUpdateDate = "LastCUUpdateDate_1";
*		valuesArray[1].LastModifiedById = "LastModifiedById_1";
*		valuesArray[1].LastName = "LastName_1";
*		valuesArray[1].LastReferencedDate = "LastReferencedDate_1";
*		valuesArray[1].LastViewedDate = "LastViewedDate_1";
*		valuesArray[1].LeadSource = "LeadSource_1";
*		valuesArray[1].Level__c = "Level__c_1";
*		valuesArray[1].MailingAddress = "MailingAddress_1";
*		valuesArray[1].MailingCity = "MailingCity_1";
*		valuesArray[1].MailingCountry = "MailingCountry_1";
*		valuesArray[1].MailingLatitude = "MailingLatitude_1";
*		valuesArray[1].MailingLongitude = "MailingLongitude_1";
*		valuesArray[1].MailingPostalCode = "MailingPostalCode_1";
*		valuesArray[1].MailingState = "MailingState_1";
*		valuesArray[1].MailingStreet = "MailingStreet_1";
*		valuesArray[1].MasterRecordId = "MasterRecordId_1";
*		valuesArray[1].MobilePhone = "MobilePhone_1";
*		valuesArray[1].Name = "Name_1";
*		valuesArray[1].OtherAddress = "OtherAddress_1";
*		valuesArray[1].OtherCity = "OtherCity_1";
*		valuesArray[1].OtherCountry = "OtherCountry_1";
*		valuesArray[1].OtherLatitude = "OtherLatitude_1";
*		valuesArray[1].OtherLongitude = "OtherLongitude_1";
*		valuesArray[1].OtherPhone = "OtherPhone_1";
*		valuesArray[1].OtherPostalCode = "OtherPostalCode_1";
*		valuesArray[1].OtherState = "OtherState_1";
*		valuesArray[1].OtherStreet = "OtherStreet_1";
*		valuesArray[1].OwnerId = "OwnerId_1";
*		valuesArray[1].Phone = "Phone_1";
*		valuesArray[1].PhotoUrl = "PhotoUrl_1";
*		valuesArray[1].ReportsToId = "ReportsToId_1";
*		valuesArray[1].Salutation = "Salutation_1";
*		valuesArray[1].StartDate = "StartDate_1";
*		valuesArray[1].SystemModstamp = "SystemModstamp_1";
*		valuesArray[1].Title = "Title_1";
*		valuesArray[1].errorCode = "errorCode_1";
*		valuesArray[1].message = "message_1";
*		valuesArray[1].queryLocator = "queryLocator_1";
*		valuesArray[1].queryString = "queryString_1";
*		valuesArray[2] = {};
*		valuesArray[2].AccountId = "AccountId_2";
*		valuesArray[2].AssistantName = "AssistantName_2";
*		valuesArray[2].AssistantPhone = "AssistantPhone_2";
*		valuesArray[2].BatchSize = "BatchSize_2";
*		valuesArray[2].Birthdate = "Birthdate_2";
*		valuesArray[2].CleanStatus = "CleanStatus_2";
*		valuesArray[2].CreatedById = "CreatedById_2";
*		valuesArray[2].CreatedDate = "CreatedDate_2";
*		valuesArray[2].Department = "Department_2";
*		valuesArray[2].Description = "Description_2";
*		valuesArray[2].Email = "Email_2";
*		valuesArray[2].EmailBouncedDate = "EmailBouncedDate_2";
*		valuesArray[2].EmailBouncedReason = "EmailBouncedReason_2";
*		valuesArray[2].EndDate = "EndDate_2";
*		valuesArray[2].Fax = "Fax_2";
*		valuesArray[2].FirstName = "FirstName_2";
*		valuesArray[2].HomePhone = "HomePhone_2";
*		valuesArray[2].InitialSync = "InitialSync_2";
*		valuesArray[2].IsEmailBounced = true;
*		valuesArray[2].Jigsaw = "Jigsaw_2";
*		valuesArray[2].JigsawContactId = "JigsawContactId_2";
*		valuesArray[2].Languages__c = "Languages__c_2";
*		valuesArray[2].LastActivityDate = "LastActivityDate_2";
*		valuesArray[2].LastCURequestDate = "LastCURequestDate_2";
*		valuesArray[2].LastCUUpdateDate = "LastCUUpdateDate_2";
*		valuesArray[2].LastModifiedById = "LastModifiedById_2";
*		valuesArray[2].LastName = "LastName_2";
*		valuesArray[2].LastReferencedDate = "LastReferencedDate_2";
*		valuesArray[2].LastViewedDate = "LastViewedDate_2";
*		valuesArray[2].LeadSource = "LeadSource_2";
*		valuesArray[2].Level__c = "Level__c_2";
*		valuesArray[2].MailingAddress = "MailingAddress_2";
*		valuesArray[2].MailingCity = "MailingCity_2";
*		valuesArray[2].MailingCountry = "MailingCountry_2";
*		valuesArray[2].MailingLatitude = "MailingLatitude_2";
*		valuesArray[2].MailingLongitude = "MailingLongitude_2";
*		valuesArray[2].MailingPostalCode = "MailingPostalCode_2";
*		valuesArray[2].MailingState = "MailingState_2";
*		valuesArray[2].MailingStreet = "MailingStreet_2";
*		valuesArray[2].MasterRecordId = "MasterRecordId_2";
*		valuesArray[2].MobilePhone = "MobilePhone_2";
*		valuesArray[2].Name = "Name_2";
*		valuesArray[2].OtherAddress = "OtherAddress_2";
*		valuesArray[2].OtherCity = "OtherCity_2";
*		valuesArray[2].OtherCountry = "OtherCountry_2";
*		valuesArray[2].OtherLatitude = "OtherLatitude_2";
*		valuesArray[2].OtherLongitude = "OtherLongitude_2";
*		valuesArray[2].OtherPhone = "OtherPhone_2";
*		valuesArray[2].OtherPostalCode = "OtherPostalCode_2";
*		valuesArray[2].OtherState = "OtherState_2";
*		valuesArray[2].OtherStreet = "OtherStreet_2";
*		valuesArray[2].OwnerId = "OwnerId_2";
*		valuesArray[2].Phone = "Phone_2";
*		valuesArray[2].PhotoUrl = "PhotoUrl_2";
*		valuesArray[2].ReportsToId = "ReportsToId_2";
*		valuesArray[2].Salutation = "Salutation_2";
*		valuesArray[2].StartDate = "StartDate_2";
*		valuesArray[2].SystemModstamp = "SystemModstamp_2";
*		valuesArray[2].Title = "Title_2";
*		valuesArray[2].errorCode = "errorCode_2";
*		valuesArray[2].message = "message_2";
*		valuesArray[2].queryLocator = "queryLocator_2";
*		valuesArray[2].queryString = "queryString_2";
*		Contact.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
Contact.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering Contact.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var isProperData = true;
	var arrayLen = 0;
	var errorInfo = [];
	var arrayLength = valuesArray.length;
	var errObject = null;
	var isReferentialIntegrityFailure = false;
	var errMsg = null;
	if(kony.sync.enableORMValidations){
		var newValuesArray = [];

		//column level validations
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var valuestable = valuesArray[i];
			if(kony.sync.attributeValidation(valuestable,"Contact",errorcallback,true)===false){
				return;
			}

			newValuesArray[i] = valuestable;
		}
		valuesArray = newValuesArray;
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);
		var isError = false;
	}
	else{
		//copying by value
		var newValuesArray = [];
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			newValuesArray[i] = kony.sync.CreateCopy(valuesArray[i]);
		}
		valuesArray = newValuesArray;
		kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
	}

	function transactionErrorCallback(){
		if(isError==true){
			//Statement error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
		}
		else{
			//Transaction error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}

	function transactionSuccessCallback(){
		sync.log.trace("Entering  Contact.createAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
		}
		else{
			if(isReferentialIntegrityFailure){
				kony.sync.verifyAndCallClosure(errorcallback, errObject);
			}
		}
	}
	
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  Contact.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = Contact.getRelationshipMap(relationshipMap,valuesArray[i]);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				isReferentialIntegrityFailure = true;
				return;
			}
		}
	}
};
/************************************************************************************
* Updates Contact using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Contact.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  Contact.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	Contact.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
Contact.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  Contact.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(Contact.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"Contact",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = Contact.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates Contact(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Contact.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering Contact.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"Contact",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  Contact.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Contact.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = Contact.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Contact.getPKTable());
	}
};

/************************************************************************************
* Updates Contact(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.AccountId = "AccountId_updated0";
*		inputArray[0].changeSet.AssistantName = "AssistantName_updated0";
*		inputArray[0].changeSet.AssistantPhone = "AssistantPhone_updated0";
*		inputArray[0].changeSet.BatchSize = "BatchSize_updated0";
*		inputArray[0].whereClause = "where Id = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.AccountId = "AccountId_updated1";
*		inputArray[1].changeSet.AssistantName = "AssistantName_updated1";
*		inputArray[1].changeSet.AssistantPhone = "AssistantPhone_updated1";
*		inputArray[1].changeSet.BatchSize = "BatchSize_updated1";
*		inputArray[1].whereClause = "where Id = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.AccountId = "AccountId_updated2";
*		inputArray[2].changeSet.AssistantName = "AssistantName_updated2";
*		inputArray[2].changeSet.AssistantPhone = "AssistantPhone_updated2";
*		inputArray[2].changeSet.BatchSize = "BatchSize_updated2";
*		inputArray[2].whereClause = "where Id = '2'";
*		Contact.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
Contact.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering Contact.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "befd9ae7-72a3-450d-9e6f-9bb9c4023f88";
	var tbname = "Contact";
	var isError = false;
	var errObject = null;
	if(markForUpload == false || markForUpload == "false"){
		markForUpload="false"
	}
	else{
		markForUpload="true"
	}
	if((kony.sync.enableORMValidations)){

		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var v = inputArray[i];
			var valuestable = v.changeSet;
			var wcs = v.whereClause;
			var twcs = wcs;
			if(kony.sync.attributeValidation(valuestable,"Contact",errorcallback,false)===false){
				return;
			}

			newInputArray[i] = [];
			newInputArray[i].changeSet = valuestable;
			newInputArray[i].whereClause = wcs;
		}
		inputArray = newInputArray;
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);

	}
	else{
		//copying by value
		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
		    var v = inputArray[i];
		    newInputArray[i] = kony.sync.CreateCopy(v);
		}
		inputArray = newInputArray;
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, Contact.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  Contact.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, Contact.getPKTable());
		}
	}

	function transactionErrorCallback(){
		if(errObject===false){
			//Sql statement error has occcurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
			
		}
		else if(errObject!==null){
			// Referential integrity error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, errObject);
		}
		else{
			//Transaction error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  Contact.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = Contact.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
			sync.log.debug("Relationship Map for Integrity check created:", relationshipMap);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}
	}


}
/************************************************************************************
* Deletes Contact using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
Contact.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Contact.prototype.deleteByPK function");
	var pks = this.getPKTable();
	Contact.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Contact.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering Contact.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(Contact.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function ContactTransactionCallback(tx){
		sync.log.trace("Entering Contact.deleteByPK->Contact_PKPresent successcallback");
		if(kony.sync.enableORMValidations){
			record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
			if(record===false){
				isError = true;
				return;
			}
		}
		if (null !== record || !kony.sync.enableORMValidations) {
			var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function ContactErrorCallback(){
		sync.log.error("Entering Contact.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function ContactSuccessCallback(){
		sync.log.trace("Entering Contact.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Contact.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, ContactTransactionCallback, ContactSuccessCallback, ContactErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes Contact(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. Contact.remove("where AccountId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
Contact.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering Contact.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Contact_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Contact_removeSuccess(){
		sync.log.trace("Entering Contact.remove->Contact_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering Contact.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering Contact.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Contact_removeTransactioncallback, Contact_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes Contact using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Contact.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Contact.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	Contact.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
Contact.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering Contact.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(Contact.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function ContactTransactionCallback(tx){
		sync.log.trace("Entering Contact.removeDeviceInstanceByPK -> ContactTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function ContactErrorCallback(){
		sync.log.error("Entering Contact.removeDeviceInstanceByPK -> ContactErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function ContactSuccessCallback(){
		sync.log.trace("Entering Contact.removeDeviceInstanceByPK -> ContactSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Contact.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, ContactTransactionCallback, ContactSuccessCallback, ContactErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes Contact(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Contact.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Contact.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Contact_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Contact_removeSuccess(){
		sync.log.trace("Entering Contact.remove->Contact_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering Contact.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering Contact.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Contact_removeTransactioncallback, Contact_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves Contact using primary key from the local Database. 
*************************************************************************************/
Contact.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Contact.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	Contact.getAllDetailsByPK(pks,successcallback,errorcallback);
};
Contact.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering Contact.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var wcs = [];
	if(Contact.pkCheck(pks,wcs,errorcallback,"searching")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, wcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	function mySuccCallback(res){
		sync.log.trace("Entering Contact.getAllDetailsByPK-> success callback function");
		successcallback(Contact.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Contact(s) using where clause from the local Database. 
* e.g. Contact.find("where AccountId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
Contact.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Contact.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Contact.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Contact with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Contact.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering Contact.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	Contact.markForUploadbyPK(pks, successcallback, errorcallback);
};
Contact.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Contact.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(Contact.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
		return;
	}

	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);		
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = [];
		twcs = wcs;
		kony.table.insert(twcs,{key : kony.sync.historyTableChangeTypeColumn, value : record[kony.sync.historyTableChangeTypeColumn], optype : "EQ",comptype : "AND"});
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
					kony.sync.qb_where(query, twcs);
		kony.table.remove(twcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);
	}
	
	function single_transaction_callback (tx){
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_select(query, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query, tbname);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		var resultSet = kony.sync.executeSql(tx, sql, params);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		for(var i = 0; i <= num_records - 1; i++){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUpload(tx, record) === false){
				isError = true;
				return;
			}
			recordsFound = true;
		}			
				
		var query1 =kony.sync.qb_createQuery();
					kony.sync.qb_select(query1, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query1, tbname + kony.sync.historyTableName);
					kony.sync.qb_where(query1, wcs);
		var query1_compile = kony.sync.qb_compile(query1);
		var sql1 = query1_compile[0];
		var params1 = query1_compile[1];
		var resultSet1 = kony.sync.executeSql (tx, sql1, params1);
		if(resultSet1!==false){
			var num_records = resultSet1.rows.length;
			for(var i = 0; i <= num_records - 1; i++ ){
				var record = kony.db.sqlResultsetRowItem(tx, resultSet1, i);
				if(markRecordForUploadHistory(tx, record) === false){
					isError = true;
					return;
				}
				recordsFound = true;
			}
		}
		else{
			isError = true;
		}
	}
	function single_transaction_success_callback(){
		if(recordsFound === true){
			kony.sync.verifyAndCallClosure(successcallback , {count:1});
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	
	function single_transaction_error_callback(res){
		if (!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Marks instance(s) of Contact matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Contact.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Contact.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var isError = false;
	var num_records_main = 0;
	wcs = kony.sync.validateWhereClause(wcs);
	if(!kony.sync.isNull(wcs) && !kony.sync.isEmptyString(wcs)) {
		wcs = wcs + " and " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}else{	
		wcs = "where " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}
	
	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0] + " " + wcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = "";
		twcs = wcs;
		twcs = twcs + " AND " + kony.sync.historyTableChangeTypeColumn + " = " + record[kony.sync.historyTableChangeTypeColumn];
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0]  + " " + twcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function single_transaction_callback (tx){
		sync.log.trace("Entering Contact.markForUpload->single_transaction_callback");
		//updating main table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + " " + wcs ;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}
		
		num_records_main = resultSet.rows.length;
		for(var i = 0; i <= num_records_main - 1; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUpload(tx, record) === false){
				isError = true;
				return;
			}
		}
		
		//updating history table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + kony.sync.historyTableName + " " + wcs;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		for ( var i = 0; i <= num_records - 1; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUploadHistory(tx, record)=== false){
				isError = true;
				return;
			}
		}
	}
	
	function single_transaction_success_callback(){
		sync.log.trace("Entering Contact.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering Contact.markForUpload->single_transaction_error_callback");
		if(!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Retrieves instance(s) of Contact pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
Contact.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Contact.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql;
	if(typeof(wcs) === "string" && wcs != null){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from " + tbname + " "+ wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Contact.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, Contact.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Contact pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
Contact.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering Contact.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Contact.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, Contact.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Contact deferred for upload.
*************************************************************************************/
Contact.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering Contact.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var sql;
	if(typeof(wcs) === "string" && wcs != null ){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from " + tbname +  " " + wcs + " and " + kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'";
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	}
	
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Contact.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, Contact.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Contact in local database to last synced state
*************************************************************************************/
Contact.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering Contact.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Contact.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to Contact's record with given primary key in local 
* database to last synced state
*************************************************************************************/
Contact.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Contact.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	Contact.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
Contact.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Contact.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var wcs = [];
	if(Contact.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Contact.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Contact.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether Contact's record  
* with given primary key got deferred in last sync
*************************************************************************************/
Contact.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  Contact.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	Contact.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
Contact.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Contact.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var wcs = [] ;
	var flag;
	if(Contact.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Contact.isRecordDeferredForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {deferred:flag});
	}
};

/************************************************************************************
* isRecordPendingForUpload returns true or false depending on whether Contact's record  
* with given primary key is pending for upload
*************************************************************************************/
Contact.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  Contact.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	Contact.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
Contact.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Contact.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Contact.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Contact.getTableName();
	var wcs = [] ;
	var flag;
	if(Contact.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "NOT LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Contact.isRecordPendingForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {pending:flag});
	}
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
Contact.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering Contact.removeCascade function");
	var tbname = Contact.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
	}
	if(isCascade){
		if(removeCascadeChildren()===false){
			return false;
		}
		if(kony.sync.deleteBatch(tx, tbname, wcs, isLocal,markForUpload, null)===false){
			return false;
		}
		return true;
	}else{
		var sql = "select * from " + tbname + wcs;
		var resultSet = kony.sync.executeSql(tx, sql, null);
		if(resultSet===false){
			return false;
		}	
		var num_records = resultSet.rows.length;
		if(num_records === 0){
			return true;
		}else{
			sync.log.error(kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable));
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeReferentialIntegrity,kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable)));
			return false;
		}
	}
};


Contact.convertTableToObject = function(res){
	sync.log.trace("Entering Contact.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new Contact();
			obj.AccountId = res[i].AccountId;
			obj.AssistantName = res[i].AssistantName;
			obj.AssistantPhone = res[i].AssistantPhone;
			obj.BatchSize = res[i].BatchSize;
			obj.Birthdate = res[i].Birthdate;
			obj.CleanStatus = res[i].CleanStatus;
			obj.CreatedById = res[i].CreatedById;
			obj.CreatedDate = res[i].CreatedDate;
			obj.Department = res[i].Department;
			obj.Description = res[i].Description;
			obj.Email = res[i].Email;
			obj.EmailBouncedDate = res[i].EmailBouncedDate;
			obj.EmailBouncedReason = res[i].EmailBouncedReason;
			obj.EndDate = res[i].EndDate;
			obj.Fax = res[i].Fax;
			obj.FirstName = res[i].FirstName;
			obj.HomePhone = res[i].HomePhone;
			obj.Id = res[i].Id;
			obj.InitialSync = res[i].InitialSync;
			obj.IsDeleted = res[i].IsDeleted;
			obj.IsEmailBounced = res[i].IsEmailBounced;
			obj.Jigsaw = res[i].Jigsaw;
			obj.JigsawContactId = res[i].JigsawContactId;
			obj.Languages__c = res[i].Languages__c;
			obj.LastActivityDate = res[i].LastActivityDate;
			obj.LastCURequestDate = res[i].LastCURequestDate;
			obj.LastCUUpdateDate = res[i].LastCUUpdateDate;
			obj.LastModifiedById = res[i].LastModifiedById;
			obj.LastModifiedDate = res[i].LastModifiedDate;
			obj.LastName = res[i].LastName;
			obj.LastReferencedDate = res[i].LastReferencedDate;
			obj.LastViewedDate = res[i].LastViewedDate;
			obj.LeadSource = res[i].LeadSource;
			obj.Level__c = res[i].Level__c;
			obj.MailingAddress = res[i].MailingAddress;
			obj.MailingCity = res[i].MailingCity;
			obj.MailingCountry = res[i].MailingCountry;
			obj.MailingLatitude = res[i].MailingLatitude;
			obj.MailingLongitude = res[i].MailingLongitude;
			obj.MailingPostalCode = res[i].MailingPostalCode;
			obj.MailingState = res[i].MailingState;
			obj.MailingStreet = res[i].MailingStreet;
			obj.MasterRecordId = res[i].MasterRecordId;
			obj.MobilePhone = res[i].MobilePhone;
			obj.Name = res[i].Name;
			obj.OtherAddress = res[i].OtherAddress;
			obj.OtherCity = res[i].OtherCity;
			obj.OtherCountry = res[i].OtherCountry;
			obj.OtherLatitude = res[i].OtherLatitude;
			obj.OtherLongitude = res[i].OtherLongitude;
			obj.OtherPhone = res[i].OtherPhone;
			obj.OtherPostalCode = res[i].OtherPostalCode;
			obj.OtherState = res[i].OtherState;
			obj.OtherStreet = res[i].OtherStreet;
			obj.OwnerId = res[i].OwnerId;
			obj.Phone = res[i].Phone;
			obj.PhotoUrl = res[i].PhotoUrl;
			obj.ReportsToId = res[i].ReportsToId;
			obj.Salutation = res[i].Salutation;
			obj.StartDate = res[i].StartDate;
			obj.SystemModstamp = res[i].SystemModstamp;
			obj.Title = res[i].Title;
			obj.errorCode = res[i].errorCode;
			obj.message = res[i].message;
			obj.queryLocator = res[i].queryLocator;
			obj.queryString = res[i].queryString;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

Contact.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering Contact.filterAttributes function");
	var attributeTable = {};
	attributeTable.AccountId = "AccountId";
	attributeTable.AssistantName = "AssistantName";
	attributeTable.AssistantPhone = "AssistantPhone";
	attributeTable.BatchSize = "BatchSize";
	attributeTable.Birthdate = "Birthdate";
	attributeTable.CleanStatus = "CleanStatus";
	attributeTable.CreatedById = "CreatedById";
	attributeTable.CreatedDate = "CreatedDate";
	attributeTable.Department = "Department";
	attributeTable.Description = "Description";
	attributeTable.Email = "Email";
	attributeTable.EmailBouncedDate = "EmailBouncedDate";
	attributeTable.EmailBouncedReason = "EmailBouncedReason";
	attributeTable.EndDate = "EndDate";
	attributeTable.Fax = "Fax";
	attributeTable.FirstName = "FirstName";
	attributeTable.HomePhone = "HomePhone";
	attributeTable.Id = "Id";
	attributeTable.InitialSync = "InitialSync";
	attributeTable.IsEmailBounced = "IsEmailBounced";
	attributeTable.Jigsaw = "Jigsaw";
	attributeTable.JigsawContactId = "JigsawContactId";
	attributeTable.Languages__c = "Languages__c";
	attributeTable.LastActivityDate = "LastActivityDate";
	attributeTable.LastCURequestDate = "LastCURequestDate";
	attributeTable.LastCUUpdateDate = "LastCUUpdateDate";
	attributeTable.LastModifiedById = "LastModifiedById";
	attributeTable.LastName = "LastName";
	attributeTable.LastReferencedDate = "LastReferencedDate";
	attributeTable.LastViewedDate = "LastViewedDate";
	attributeTable.LeadSource = "LeadSource";
	attributeTable.Level__c = "Level__c";
	attributeTable.MailingAddress = "MailingAddress";
	attributeTable.MailingCity = "MailingCity";
	attributeTable.MailingCountry = "MailingCountry";
	attributeTable.MailingLatitude = "MailingLatitude";
	attributeTable.MailingLongitude = "MailingLongitude";
	attributeTable.MailingPostalCode = "MailingPostalCode";
	attributeTable.MailingState = "MailingState";
	attributeTable.MailingStreet = "MailingStreet";
	attributeTable.MasterRecordId = "MasterRecordId";
	attributeTable.MobilePhone = "MobilePhone";
	attributeTable.Name = "Name";
	attributeTable.OtherAddress = "OtherAddress";
	attributeTable.OtherCity = "OtherCity";
	attributeTable.OtherCountry = "OtherCountry";
	attributeTable.OtherLatitude = "OtherLatitude";
	attributeTable.OtherLongitude = "OtherLongitude";
	attributeTable.OtherPhone = "OtherPhone";
	attributeTable.OtherPostalCode = "OtherPostalCode";
	attributeTable.OtherState = "OtherState";
	attributeTable.OtherStreet = "OtherStreet";
	attributeTable.OwnerId = "OwnerId";
	attributeTable.Phone = "Phone";
	attributeTable.PhotoUrl = "PhotoUrl";
	attributeTable.ReportsToId = "ReportsToId";
	attributeTable.Salutation = "Salutation";
	attributeTable.StartDate = "StartDate";
	attributeTable.SystemModstamp = "SystemModstamp";
	attributeTable.Title = "Title";
	attributeTable.errorCode = "errorCode";
	attributeTable.message = "message";
	attributeTable.queryLocator = "queryLocator";
	attributeTable.queryString = "queryString";

	var PKTable = {};
	PKTable.Id = {}
	PKTable.Id.name = "Id";
	PKTable.Id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject Contact. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject Contact. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject Contact. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
			}else{
				newvaluestable[k] = v;
			}
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

Contact.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering Contact.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = Contact.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

Contact.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering Contact.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.AccountId = this.AccountId;
	valuesTable.AssistantName = this.AssistantName;
	valuesTable.AssistantPhone = this.AssistantPhone;
	valuesTable.BatchSize = this.BatchSize;
	valuesTable.Birthdate = this.Birthdate;
	valuesTable.CleanStatus = this.CleanStatus;
	valuesTable.CreatedById = this.CreatedById;
	valuesTable.CreatedDate = this.CreatedDate;
	valuesTable.Department = this.Department;
	valuesTable.Description = this.Description;
	valuesTable.Email = this.Email;
	valuesTable.EmailBouncedDate = this.EmailBouncedDate;
	valuesTable.EmailBouncedReason = this.EmailBouncedReason;
	valuesTable.EndDate = this.EndDate;
	valuesTable.Fax = this.Fax;
	valuesTable.FirstName = this.FirstName;
	valuesTable.HomePhone = this.HomePhone;
	if(isInsert===true){
		valuesTable.Id = this.Id;
	}
	valuesTable.InitialSync = this.InitialSync;
	valuesTable.IsEmailBounced = this.IsEmailBounced;
	valuesTable.Jigsaw = this.Jigsaw;
	valuesTable.JigsawContactId = this.JigsawContactId;
	valuesTable.Languages__c = this.Languages__c;
	valuesTable.LastActivityDate = this.LastActivityDate;
	valuesTable.LastCURequestDate = this.LastCURequestDate;
	valuesTable.LastCUUpdateDate = this.LastCUUpdateDate;
	valuesTable.LastModifiedById = this.LastModifiedById;
	valuesTable.LastName = this.LastName;
	valuesTable.LastReferencedDate = this.LastReferencedDate;
	valuesTable.LastViewedDate = this.LastViewedDate;
	valuesTable.LeadSource = this.LeadSource;
	valuesTable.Level__c = this.Level__c;
	valuesTable.MailingAddress = this.MailingAddress;
	valuesTable.MailingCity = this.MailingCity;
	valuesTable.MailingCountry = this.MailingCountry;
	valuesTable.MailingLatitude = this.MailingLatitude;
	valuesTable.MailingLongitude = this.MailingLongitude;
	valuesTable.MailingPostalCode = this.MailingPostalCode;
	valuesTable.MailingState = this.MailingState;
	valuesTable.MailingStreet = this.MailingStreet;
	valuesTable.MasterRecordId = this.MasterRecordId;
	valuesTable.MobilePhone = this.MobilePhone;
	valuesTable.Name = this.Name;
	valuesTable.OtherAddress = this.OtherAddress;
	valuesTable.OtherCity = this.OtherCity;
	valuesTable.OtherCountry = this.OtherCountry;
	valuesTable.OtherLatitude = this.OtherLatitude;
	valuesTable.OtherLongitude = this.OtherLongitude;
	valuesTable.OtherPhone = this.OtherPhone;
	valuesTable.OtherPostalCode = this.OtherPostalCode;
	valuesTable.OtherState = this.OtherState;
	valuesTable.OtherStreet = this.OtherStreet;
	valuesTable.OwnerId = this.OwnerId;
	valuesTable.Phone = this.Phone;
	valuesTable.PhotoUrl = this.PhotoUrl;
	valuesTable.ReportsToId = this.ReportsToId;
	valuesTable.Salutation = this.Salutation;
	valuesTable.StartDate = this.StartDate;
	valuesTable.SystemModstamp = this.SystemModstamp;
	valuesTable.Title = this.Title;
	valuesTable.errorCode = this.errorCode;
	valuesTable.message = this.message;
	valuesTable.queryLocator = this.queryLocator;
	valuesTable.queryString = this.queryString;
	return valuesTable;
};

Contact.prototype.getPKTable = function(){
	sync.log.trace("Entering Contact.prototype.getPKTable function");
	var pkTable = {};
	pkTable.Id = {key:"Id",value:this.Id};
	return pkTable;
};

Contact.getPKTable = function(){
	sync.log.trace("Entering Contact.getPKTable function");
	var pkTable = [];
	pkTable.push("Id");
	return pkTable;
};

Contact.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering Contact.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key Id not specified in  " + opName + "  an item in Contact");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"Contact")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.Id)){
			if(!kony.sync.isNull(pks.Id.value)){
				wc.key = "Id";
				wc.value = pks.Id.value;
			}
			else{
				wc.key = "Id";
				wc.value = pks.Id;
			}
		}else{
			sync.log.error("Primary Key Id not specified in  " + opName + "  an item in Contact");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"Contact")));
			return false;
		}
	}
	else{
		wc.key = "Id";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

Contact.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering Contact.validateNull function");
	return true;
};

Contact.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering Contact.validateNullInsert function");
	return true;
};
Contact.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering Contact.getRelationshipMap function");
	var r1 = {};
	return relationshipMap;
};

Contact.getTableName = function(){
	return "Contact";
};


// **********************************End Contact's helper methods************************