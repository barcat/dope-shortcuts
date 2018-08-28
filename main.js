"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let tray = null;
let window = null;
let url;
if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8181/';
}
else {
    url = `file://${process.cwd()}/dist/index.html`;
}
electron_1.app.on('ready', () => {
    window = new electron_1.BrowserWindow({ width: 800, height: 600 });
    window.loadURL(url);
    tray = new electron_1.Tray('/pubic/favicon');
    const contextMenu = electron_1.Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' },
    ]);
    tray.setToolTip('This is my application.');
    tray.setContextMenu(contextMenu);
});
//# sourceMappingURL=main.js.map