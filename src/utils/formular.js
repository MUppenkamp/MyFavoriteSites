export function _formular() {
    if (this.$formularName.value.length < 1 || this.$formularEMail.value.length < 1 || this.$formularSite.value.length < 1) {
        chayns.dialog.alert('Oops', 'Bitte alle Pflichfelder ausfüllen.');
    }
    else if (this._emailValidation(this.$formularEMail.value)) {
        chayns.intercom.sendMessageToPage({
            text: `Name: ${this.$formularName.value} 
                        E-Mail: ${this.$formularEMail.value} 
                        Site: ${this.$formularSite.value} 
                        Kommentar: ${this.$formularComment.value}`
        }).then((data) => {
            if (data.status === 200)
                chayns.dialog.alert('Danke, ' + chayns.env.user.firstName + '!');
        });//.then(() => {
        //     this.$formularWrapper.classList.remove('accordion--open');
        //     this.$sitesAccordion.classList.add('accordion--open');
        // });
    }
    else {
        chayns.dialog.alert('Oops', 'E-Mail oder Internetseite falsch.')
    }
}

export function _emailValidation(email) {
    var abc = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return abc.test(String(email).toLowerCase());
}