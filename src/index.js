import login from './utils/login';
import './app.scss';
import './css/style.scss'

const init = async () => {
    try {
        await chayns.ready;
        chayns.ui.initAll();
    } catch (err) {
        console.error('No chayns environment found', err);
    }
};

init();
