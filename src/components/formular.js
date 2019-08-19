import { _emailValidation, _urlValidation } from './formularValidation.js';

export default function formular(name,email,site,comment = 'Kein Kommentar hinzugefügt') {
    if (name.value.length < 1 || email.value.length < 1 || site.value.length < 1) {
        chayns.dialog.alert('Oops', 'Bitte alle Pflichfelder ausfüllen.');
    }
    else if (_emailValidation(email.value) && _urlValidation(site.value)) {
        chayns.intercom.sendMessageToPage({
            text: `Name: ${name.value} 
                        E-Mail: ${email.value} 
                        Site: ${site.value} 
                        Kommentar: ${comment.value}`
        }).then((data) => {
            if (data.status === 200)
                chayns.dialog.alert('', 'Danke, ' + chayns.env.user.firstName + '!');
        });
    }
    else {
        chayns.dialog.alert('Oops', 'E-Mail oder Internetseite falsch.')
    }
}