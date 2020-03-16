import development from './environments/development.json';
import production from './environments/production.json';
const environment = process.env.NODE_ENV,
    config = { development, production }[environment];

export default config;
