import { app } from './app';

const application = new app();

application.listenSocket();
application.listen();


