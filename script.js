const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
if(urlParams.has("joinAdventureIdentifier")) {
    const joinAdventureIdentifier = urlParams.get("joinAdventureIdentifier");
    window.location.replace(`com.dncreate://`);
}
