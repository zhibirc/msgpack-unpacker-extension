<div align="center">
    <img src="icons/32.png" />
    <h1>MessagePack DevTools Unpacker</h1>
    <p>

![maintenance](https://img.shields.io/maintenance/yes/2025.svg?style=flat)
![Static Badge](https://img.shields.io/badge/extension-devtools-blue?style=flat&labelColor=%23252526&color=%234a90e2)
![Static Badge](https://img.shields.io/badge/chrome-red?style=flat)
    </p>
    <b>Unpacks MessagePack payloads into JSON inside DevTools.</b>
    <br /><br />
    <img src="ui.png" />
</div>

## Overview

[MessagePack](https://msgpack.org/) is the incredible alternative for serializing data in network transmissions.
However, it has one significant drawback in compare with widely used and familiar JSON format -- its readability by humans.

This extension makes an attempt to compensate this inconvenience by unpacking MessagePack-decoded payloads to the regular JSON, and displaying it into separate DevTools tab.

## Usage

- Clone this repository.
- Load the whole directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).
- Open DevTools and click the **MsgPack Unpacker** tab.
- Open any web page served MsgPack payloads, the decoded JSON will automatically be displayed in the panel.

## Contributing

Pull requests which aim to enhance, improve or fix something are highly welcome.
