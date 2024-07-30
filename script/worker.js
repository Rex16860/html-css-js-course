addEventListener('message', function (message) {
    let total = message.data;

    for (let i = 0; i < total; i++) {
        postMessage(i);
    }
})