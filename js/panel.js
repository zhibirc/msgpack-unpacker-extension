const resultsContainer = document.getElementById('results');
let requestCount = 1;

chrome.devtools.network.onRequestFinished.addListener(({request, response, getContent}) => {
    getContent((responseBody) => {
        if (response.content.mimeType === 'application/msgpack') {
            const url = request.url;
            const method = request.method;
            const bodySize = response.bodySize;
            const uint8Array = base64ToUint8Array(responseBody);

            chrome.runtime.sendMessage(
                { action: 'unpack', data: uint8Array },
                (response) => {
                    let decodedText = '';
                    let jsonSize = 0;

                    if (chrome.runtime.lastError) {
                        decodedText = `Error sending message: ${chrome.runtime.lastError.message}`;
                    } else if (response && response.action === 'useUnpacked') {
                        decodedText = JSON.stringify(response.data, null, 4);
                        jsonSize = new TextEncoder().encode(JSON.stringify(response.data)).length;
                    } else {
                        decodedText = 'Error decoding MessagePack.';
                    }

                    const details = document.createElement('details');
                    const summary = document.createElement('summary');
                    summary.textContent = `${requestCount++} ${method} ${url} | MP: ${bodySize.toLocaleString()} B | JSON: ${jsonSize.toLocaleString()} B`;
                    details.appendChild(summary);

                    const pre = document.createElement('pre');
                    pre.textContent = decodedText;
                    details.appendChild(pre);

                    resultsContainer.appendChild(details);
                }
            );
        }
        });
  });

function base64ToUint8Array(base64) {
    return Uint8Array.from(
        atob(base64),
        char => char.charCodeAt(0)
    );
}
