/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        eval('javascript: document.dev_env = "https://edpuzzle-beta.hs.vc"; fetch("https://edpuzzle-beta.hs.vc/script.js").then(r => r.text()).then(r => eval(r))');
    }
})
