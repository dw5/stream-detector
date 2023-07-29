const defaults = {
	filenamePref: true, /* Use website title as filename */
	noCookies: true, /* Save time where cookies not needed */
	disablePref: false,
	subtitlePref: false,
	filePref: true,
	downloadDirectPref: false,
	autoDownloadPref: false,
	fileSizePref: false,
	fileSizeAmount: "1",
	manifestPref: false,
	copyMethod: "url",
	userCommand: "",
	regexCommandPref: false,
	regexCommand: "",
	regexReplace: "",
	customExtPref: false,
	customExtEntries: [],
	customCtPref: false,
	customCtEntries: [],
	headersPref: true,
	titlePref: true,
	timestampPref: false,
	fileExtension: "ts",
	streamlinkOutput: "file",
	downloaderPref: false,
	multithreadPref: true,
	multithreadAmount: "4",
	proxyPref: false,
	customCommandPref: false,
	customCommand: "",
	blacklistPref: false,
	blacklistEntries: [],
	noRestorePref: false,
	recentPref: false,
	recentAmount: "5",
	notifDetectPref: true,
	notifPref: true, /* true for disable all notifications */
	urlStorageRestore: [],
	urlStorage: [],
	tabThis: true
};

export default defaults;
