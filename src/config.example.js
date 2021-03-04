const config = {
	ownerID: ['787017250317008927'],
	token: 'ODAxODkwMzgwODQ4OTU1NDUy.YAnQnQ.MQRueXcagscUzRkE3vOEIjG923M',
	botClient: 'YourBotClientSecret',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: 'k1pmlnop8vimm0kjc5inq57pm00pwh',
		// https://fortnitetracker.com/site-api
		fortnite: '',
		// https://api.ksoft.si/
		ksoft: '',
		// https://steamcommunity.com/dev
		steam: '',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: '',
			secret: '',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: '',
			password: '',
		},
		// https://genius.com/developers
		genuis: '',
		// https://amethyste.moe/en
		amethyste: '',
	},
	// IF you want any commands/plugins disabled
	disabledCommands: [],
	disabledPlugins: [],
	// This is a list of websites that the bot is on. API to interect with server/shard count
	DiscordBotLists: {
		// https://discord.boats/
		DiscordBoatAPI_Key: '',
		// https://arcane-center.xyz/
		ArcaneBotAPI_KEY: '',
		// https://botlist.space/
		botlist_spaceAPI_KEY: '',
	},
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/rhskhDFx',
		// Your support's server ID
		GuildID: '816343170996633632',
		// This for using the suggestion command on your server
		ModRole: '816344016404217886',
		// What channel to post the suggestions
		SuggestionChannel: '816986147577921626',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '816386164192968764',
	},
	// This is just so some commands can be ran in DM channels
	defaultSettings: {
		// default settings
		prefix: '$',
		Language: 'en-US',
	},
	// Custom emojis, just for cosmetic (change these if you wish)
	emojis: {
		cross: ':negative_squared_cross_mark:',
		tick: ':white_check_mark:',
	},
	// URL to mongodb
	MongoDBURl: 'mongodb://link',
	// if you want debugging turned on or not
	debug: false,
};

module.exports = config;
