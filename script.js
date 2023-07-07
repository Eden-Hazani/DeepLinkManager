console.log("Joining adventure...")
// get query params
const urlParams = new URLSearchParams(window.location.search);

console.log("urlParams", urlParams);
setTimeout(() => {
    window.location.replace("com.dncreate://");
}, 2000);
