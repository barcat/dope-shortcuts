import { app, BrowserWindow } from 'electron';

let window: BrowserWindow = null;
let url: string;

if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8181/';
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}

app.on('ready', () => {
  window = new BrowserWindow({
      width: 800,
      height: 600,
      resizable: false,
      frame: true,
    });
  window.loadURL(url);
});
