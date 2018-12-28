import WebServer from './webserver';

const webServer = new WebServer();

webServer.start()
  .then(() => {
    console.log('Web server started!');
  })
  .catch(err => {
    console.error(err);
    console.error('Failed to start web server');
  })