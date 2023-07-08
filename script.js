const urlParams = new URLSearchParams(window.location.search);
if(urlParams.has("joinAdventureIdentifier")) {
    const joinAdventureIdentifier = urlParams.get("joinAdventureIdentifier");
    try{
        window.location.replace(`com.dncreate://Adventures/JoinAdventure/${joinAdventureIdentifier}`);
    }catch (e){
        prompt("Error", e)
    }
}
