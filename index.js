const Discord = require("discord.js");
const ms = require("ms");

const TOKEN = "NjU1NzY5Njk1MzcwMjE1NDI1.XltsKw.9iHz5WJsqo2awd6NrfnBiAS7s3g";
const PREFIX = "?a";

var fortunes = [
  "🟢It is decidedly so.",
  "🟢Without a doubt.",
  "🟢Yes - definitely.",
  "🟢As I see it, yes.",
  "🟢Signs point to yes.",
  "🟡Reply hazy, try again.",
  "🟡Ask again later.",
  "🟡Better not tell you now.",
  "🟡Cannot predict now.",
  "🟡Concentrate and ask again.",
  "🔴Don't count on it.",
  "🔴My reply is no.",
  "🔴My sources say no.",
  "🔴Outlook not so good.",
  "🔴Very doubtful."
];

var bot = new Discord.Client();


bot.on("ready", function() {
  console.log("Connected as Aot#0350");
  bot.user.setStatus('dnd')
  bot.user.setActivity("?ahelp")
});

bot.on("guildMemberAdd", function(member) {
  member.roles.add(member.guild.roles.cache.find(role => role.name === "Members"));

  member.roles.add(member.guild.roles.cache.find(role => role.name === "Noob Fans"));

  const inChannel = member.guild.channels.cache.find(channel => channel.name === "in-n-out")
  if(!inChannel) return;

  inChannel.send(`Welcome to Official Acton's Empire, ${member}! Please subscribe to Acton: https://bit.ly/cleverActon0126_Youtube and READ THE RULES! Thank you!\rBy Acton`)
});

bot.on("guildMemberRemove", function(member) {
  const outChannel = member.guild.channels.cache.find(channel => channel.name === "in-n-out")
  if(!outChannel) return;

  outChannel.send(`${member} just left, but we will never forget him/her!`)
});

bot.on("message", async function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    //normal commands
    case "ping":
    message.channel.send("🏓Pong");
    break;
    case "8ball":
    if (args[1])  message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else  message.channel.send("Can't read that.");
    break;
    case "noticeme":
    message.reply("Got'cha!");
    break;
    case "hello":
     message.channel.send("Hi. Nice to meet you!");
    break;
    case "aot":
     message.channel.send("Wut's the matter?");
    break;
    case "bye":
     message.channel.send("OK. Cya!")
    break;
    case "salmon":
     message.channel.send("Do you want it `raw` or `cooked`?");
    break;
    case "raw":
     message.channel.send("OK. Here you go. A raw salmon.");
    break;
    case "cooked":
     message.channel.send("OK. Wait for a sec. (Try command `done`)");
    break;
    case "done":
     message.channel.send("Done. Here you go.");
    break;
    case "apple":
     message.channel.send("OK. Here's your golden apple. Here you go.");
    break;
    case "pie":
     message.channel.send("OK. Here's your *pre-baked* pie.");
    break;
    case "candy":
     message.channel.send("OK. Oops, it went out of stock, never come back!");
    break;
    case "mess":
     message.channel.send("sfajdfhewfuinewoiaf");
    break;
    case "messer":
     message.channel.send("afhq930jr3o249ru43984n3qf0jq9032dkj90j3209fj34h98f0wqxm90qj2389d23y58934fnrejwtoiewrjtoeritfioejfeie");
    break;
    case "messest":
     message.channel.send("~&^@*~\(&#\)_~\(fksljdaslkfjewiury3498|fljkdfiuheufk_#\)$*&57*^&~*^#*~\)_+\(HGFUHIhifhsdasfjeiuwahfoejflkfjewijfieoajala<?><:\"ALDOHQO!\"\)KRWH OI@ NOI HJOIRNMJO@*&%()@*$)(%&%*)_@()%@&+)%@(*%@)_OV%)MV%()@%*VM()V%*V@M)(@U*VM)@{PIRW IUNO IRUWIOUR WOP RUW*UOWJ(!uidfsjgiseut93uri34ojgelkgsjveirsut943pkjteirhtewtijoerwltij349utjrepojgkdfhgierjgelkrjg349ut)}gierwut9w4teutioerutweiotrjtioeuteroitu94tu49tu3945834poj543iohtoirejteriojteortjeijteriojterjteritweroitu349u534i2j5i34n5j3n5kl34jute84thierjeroigjerijtlreiutiretjerioutiretureioutioertuerioterutioeruter8oitu438tu");
    break;
    case "ding":
     message.channel.send("DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG!");
    break;
    case "beep":
     message.channel.send("Boop!")
    break;
    //end of normal commands
    //admin commands
    case "kick":
    const kUser = message.mentions.members.first();
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = message.content.slice(prefix.length).split(' ');
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permission to do that!");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");

    var embed = new Discord.MessageEmbed()
    .setDescription("~Kick~")
    .setColor(0xff0000)
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")

    let kickChannel = message.guild.channels.cache.find(channel => channel.name === "server-logs");
    if(!kickChannel) return message.channel.send("Could not find server logs channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(embed);
    break;
    case "ban":
    const bUser = message.mentions.members.first();
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = message.content.slice(prefix.length).split(' ');
    if(!message.member.hasPermission("BAN_MEMBERS"))  return message.channel.send("You don't have the permission to do that!");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be kicked!");

    var embed = new Discord.MessageEmbed()
    .setDescription("~Kick~")
    .setColor(0xff0000)
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")

    let banChannel = message.guild.channels.cache.find(channel => channel.name === "server-logs");
    if(!banChannel) return message.channel.send("Could not find server logs channel.");

    message.guild.member(bUser).ban(bReason);
    banChannel.send(embed);
    break;
    case "update":
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot do that!");

    var embed = new Discord.MessageEmbed()
    .setTitle("Update Successful!")
    .setDescription("Successfully updated to Version 0.18.0!")
    .addField("Prefix", "?a \(Uncustomable\)")
    .addField("Public Commands", "`help` \(Will lead you to other help commands\), `hello`, `aot`, `bye`, `noticeme`, `support`, `salmon`, `apple`, `pie`, `candy`, `mess`, `messer`, `messest`, `8ball`, `ding`, `ping`, `beep`, `report`, `botinfo`, `userinfo`")
    .addField("Admin Commands", "`kick`, `ban`, `mute`, `tempmute`, `unmute`", true)
    .addField("New Commands", "`tempmute`, `unmute`", true)
    .addField("Removed Commands", "N/A", true)
    .addField("Updates", "2 new admin commands are added.")
    .setColor(0x00ff00)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")

    message.delete().catch(()=> {});
    message.channel.send(embed);
    break;
    case "mute":
    const mUser = message.mentions.members.first();
    if (!mUser) return message.channel.send("That person doesn't exist");
    if(!message.member.hasPermission("VIEW_AUDIT_LOG"))  return message.channel.send("You don't have the permission to do that!");
    if(mUser.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("That person can't be muted!");

    let muterole = mUser.guild.roles.cache.find(role => role.name === "Muted");
    if (!muterole) return message.channel.send("Role doesn't exist");

    mUser.roles.add(muterole.id);

    const muteChannel = mUser.guild.channels.cache.find(channel => channel.name === "mute-kick-ban-logs")
    if(!muteChannel) return;

    muteChannel.send(`<@${mUser.id}> has now been muted.`);
    break;
    case "tempmute":
    const tmUser = message.mentions.members.first();
    if (!tmUser) return message.channel.send("That person doesn't exist");
    if(!message.member.hasPermission("VIEW_AUDIT_LOG"))  return message.channel.send("You don't have the permission to do that!");
    if(tmUser.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("That person can't be muted!");

    let tempmuterole = tmUser.guild.roles.cache.find(role => role.name === "Muted");
    if (!tempmuterole) return message.channel.send("Role doesn't exist");

    let time = args[2];

    if(!time){
      return message.channel.send("You did not say how much time!");
    }

    tmUser.roles.add(tempmuterole.id);

    const tempmuteChannel = tmUser.guild.channels.cache.find(channel => channel.name === "mute-kick-ban-logs")
    if(!tempmuteChannel) return;

    tempmuteChannel.send(`<@${tmUser.id}> has now been muted for ${ms(ms(time))}.`);

    setTimeout(function() {
      tmUser.roles.remove(tempmuterole.id);
      tempmuteChannel.send(`<@${tmUser.id}> has been unmuted!`)
    }, ms(time));
    break;
    case "unmute":
    const umUser = message.mentions.members.first();
    if (!umUser) return message.channel.send("That person doesn't exist");
    if(!message.member.hasPermission("VIEW_AUDIT_LOG"))  return message.channel.send("You don't have the permission to do that!");

    let unmuterole = umUser.guild.roles.cache.find(role => role.name === "Muted");
    if (!unmuterole) return message.channel.send("Role doesn't exist");

    umUser.roles.remove(unmuterole.id);

    const unmuteChannel = umUser.guild.channels.cache.find(channel => channel.name === "mute-kick-ban-logs")
    if(!unmuteChannel) return;

    unmuteChannel.send(`<@${umUser.id}> has now been unmuted.`);
    break;
    //end of admin Commands
    //information
    case "botinfo":
    var embed = new Discord.MessageEmbed()
    .setTitle("Bot Information")
    .setColor(0x00bfff)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Created On:", bot.user.createdAt)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed);
    break;
    case "userinfo":
    const sUser = message.mentions.members.first();
    if(!sUser) return message.channel.send("Can't find user!");

    var embed = new Discord.MessageEmbed()
    .setTitle("User Info")
    .setColor(0x00bfff)
    .setThumbnail(sUser.user.displayAvatarURL())
    .addField("Username", sUser.user.tag)
    .addField("Account created at", sUser.user.createdAt, true)
    .addField("Joined server at", sUser.guild.joinedAt, true)
    .addField("Roles", sUser.roles.cache.map(r => r.toString()))
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed)
    break;
    //end of Information
    //server support
    case "report":
    const rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send("Could not find user.")
    let reason = args.join().slice(22)

    var embed = new Discord.MessageEmbed()
    .setTitle("User reports User")
    .setColor(0xff0000)
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")

    let reportsChannel = message.guild.channels.cache.find(channel => channel.name === "report-approval");
    if(!reportsChannel) return message.channel.send("Could not find report channel.");

    message.delete().catch(()=> {});
    reportsChannel.send(embed);
    break;
    case "support":
    var embed = new Discord.MessageEmbed()
    .setTitle("Aot Support")
    .addField("Press the link below to have some Aot support or report a bug!", "https://bit.ly/Aot_Support")
    .setColor(0xff0000)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed);
    break;
    //end of server support
    //help menus
    case "help":
    var embed = new Discord.MessageEmbed()
    .setTitle("❓Help Menu❓")
    .addField("🔣General Menu🔣", "`helpgeneral`", true)
    .addField("❓Info Menu❓", "`helpinfo`", true)
    .addField("🍴Food Menu🍴", "`helpfood`", true)
    .addField("🤬Messing Menu🤬", "`helpmess`", true)
    .addField("😀Fun Menu😀", "`helpfun`", true)
    .addField("🏳️‍🌈Server Support🏳️‍🌈", "`helpserversupport`", true)
    .addField("⚒️Admin Commands Menu⚒️", "`helpadmin`", true)
    .setColor(0x00ffff)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed);
    break;
    case "helpgeneral":
    var embed = new Discord.MessageEmbed()
    .setTitle("🔣General Menu🔣", "These are the general commands.")
    .addField("`hello`", "A greeting command", true)
    .addField("`aot`", "Waking Aot up", true)
    .addField("`bye`", "Waving hands to Aot", true)
    .addField("`noticeme`", "Let Aot to notice you", true)
    .setColor(0x00ffff)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed);
    break;
    case "helpfood":
    var embed = new Discord.MessageEmbed()
    .setTitle("🍴Food Menu🍴", "These are the foods for you to eat.")
    .addField("`salmon`", "Raw salmon or cooked salmon can be choose", true)
    .addField("`apple`", "NORMAL apple", true)
    .addField("`pie`", "Pie", true)
    .addField("`candy`", "Sweet one", true)
    .setColor(0x00ffff)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed);
    break;
    case "helpmess":
    var embed = new Discord.MessageEmbed()
    .setTitle("🤬Messing Menu🤬", "These are the commands to mess up.")
    .addField("`mess`", "Beginner mess up", true)
    .addField("`messer`", "Advanced mess up", true )
    .addField("`messest`", "??? mess up", true)
    .setColor(0x00ffff)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed);
    break;
    case "helpfun":
    var embed = new Discord.MessageEmbed()
    .setTitle("😀Fun Menu😀", "Available games.")
    .addField("`8ball`", "Seeing your future", true)
    .addField("`ding`", "Ding, Dong", true)
    .addField("`ping`", "Ping, pong", true)
    .addField("`beep`", "Beep, beep, boop, boop", true)
    .setColor(0x00ffff)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed);
    break;
    case "helpinfo":
    var embed = new Discord.MessageEmbed()
    .setTitle("❓Info Menu❓", "Informations")
    .addField("`botinfo`", "This bot's info")
    .addField("`userinfo`", "User's information.")
    .setTimestamp()
    .setColor(0x00ffff)
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed);
    break;
    case "helpadmin":
    var embed = new Discord.MessageEmbed()
    .setTitle("⚒️Admin Commands Menu⚒️")
    .addField("`kick`", "Kick people (ONLY for those who have permission: KICK_MEMBERS)")
    .addField("`ban`", "Ban people (ONLY for those who have permission: BAN_MEMBERS)")
    .addField("`mute`", "Mute people (ONLY for those who have permission: VIEW_AUDIT_LOG)")
    .addField("`tempmute`", "Temporary mute people (ONLY for those who have permission: VIEW_AUDIT_LOG)")
    .addField("`unmute`", "Unmute a muted person (ONLY for those who have permission: VIEW_AUDIT_LOG)")
    .setTimestamp()
    .setColor(0x00ffff)
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed)
    break;
    case "helpserversupport":
    var embed = new Discord.MessageEmbed()
    .setTitle("‍🏳️‍🌈Server Support Menu🏳️‍🌈")
    .setColor(0x00ffff)
    .addField("`support`", "To report a bug and have some Aot support", true)
    .addField("`report`", "To report people's behavior in the server", true)
    .setTimestamp()
    .setFooter("Aot Version 0.18.0, Made by cleverActon0126#3517")
    message.channel.send(embed)
    break;
    //end of help menus
    default:
     message.channel.send("**Error 404**:Invalid command!");
  }
});

bot.login(TOKEN);
