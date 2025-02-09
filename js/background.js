import { unpack } from 'https://esm.sh/msgpackr/unpack';

chrome.runtime.onMessage.addListener(({action, data}, sender, sendResponse) => {
    if (action === 'unpack' && data) {
        try {
            const unpacked = unpack(new Uint8Array(Object.values(data)));

            sendResponse({
                action: 'useUnpacked',
                data: unpacked
            });
        } catch (error) {
            console.error('Unpacking error:', error);

            sendResponse({
                action: 'error',
                message: 'Failed to unpack MessagePack'
            });
        }
    }

    return true;
});
