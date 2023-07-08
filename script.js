const urlParams = new URLSearchParams(window.location.search);
if(urlParams.has("joinAdventureIdentifier")) {
    const joinAdventureIdentifier = urlParams.get("joinAdventureIdentifier");
    window.location.replace(`com.dncreate://joinAdventure/${joinAdventureIdentifier}`);
}
