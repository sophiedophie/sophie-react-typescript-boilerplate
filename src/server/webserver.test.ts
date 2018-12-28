import WebServer from './webserver';

describe('Started', () => {
  let webServer;

  beforeAll(() => {
    webServer = new WebServer();
  });

  test('should start and trigger a callback', async () => {
    let promise = webServer.start();
    await expect(promise).resolves.toBeUndefined();
  });

  test('should stop and trigger a callback', async () => {
    let promise = webServer.stop();
    await expect(promise).resolves.toBeUndefined();
  });
})