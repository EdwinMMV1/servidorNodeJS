import App from './config/app.js';

const port = process.env.APP_PORT || 8081;

App.app.listen(port, () => console.log(`Api es running ${port}`));
