module.exports.config = {
	name: "admins",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "Info", 
	usages: "Admin Bot[key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có  1 admin\n👉Sử dụng /admin 1 để xem thông tin admins 1",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("「 Admin 1 」\nTên: Trần Trọng Mạnh\nLiên hệ:\nhttps://www.facebook.com/ttm130", event.threadID, event.messageID);
	}

}
