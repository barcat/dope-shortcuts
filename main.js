"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let window = null;
let url;
if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8181/';
}
else {
    url = `file://${process.cwd()}/dist/index.html`;
}
electron_1.app.on('ready', () => {
    window = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        frame: true,
    });
    window.loadURL(url);
});
//# sourceMappingURL=main.js.map