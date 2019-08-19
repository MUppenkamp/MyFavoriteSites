// import { _emailValidation, _urlValidation } from './formularValidation.js';

// export default function _formular() {
//     if (this.$formularName.value.length < 1 || this.$formularEMail.value.length < 1 || this.$formularSite.value.length < 1) {
//         chayns.dialog.alert('Oops', 'Bitte alle Pflichfelder ausfüllen.');
//     }
//     else if (this._emailValidation(this.$formularEMail.value) && this._urlValidation(this.$formularSite.value)) {
//         chayns.intercom.sendMessageToPage({
//             text: `Name: ${this.$formularName.value} 
//                         E-Mail: ${this.$formularEMail.value} 
//                         Site: ${this.$formularSite.value} 
//                         Kommentar: ${this.$formularComment.value}`
//         }).then((data) => {
//             if (data.status === 200)
//                 chayns.dialog.alert('Danke, ' + chayns.env.user.firstName + '!');
//         });
//     }
//     else {
//         chayns.dialog.alert('Oops', 'E-Mail oder Internetseite falsch.')
//     }
// }