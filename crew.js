client.on('guildCreate', guild => { let crew = guild.channels.cache.filter(crews => crews.type === "text").random() crew.send("Crew#0057") });
