import login from './utils/login';
import './app.scss';
import './css/style.scss'
import { fetch } from 'whatwg-fetch'

const init = async () => {
    try {
        await chayns.ready;
    } catch (err) {
        console.error('No chayns environment found', err);
    }
};

init();
chayns.ui.initAll();
