import { _formular, _emailValidation } from './utils/formular.js';
import './app.scss';
import './css/style.scss';
import TappProject from './tappProject.js';

const init = async () => {
    try {
        await chayns.ready;
        chayns.ui.initAll();
        new TappProject();
    } catch (err) {
        console.error('No chayns environment found', err);
    }
};

init();
