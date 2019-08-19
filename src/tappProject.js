import { _formular } from './utils/formular.js';

export default class TappProject {
    constructor() {
        this._setDomElements();
        this._getDataFetch();
    }

    _setDomElements() {
        this.$favList = document.querySelector('.favList');
        this.$formAcc = document.querySelector('.formAcc');
        this.$sitesAccordion = document.querySelector('.cc__list');
        this.$formularName = document.querySelector('.formularName');
        this.$formularEMail = document.querySelector('.formularEMail');
        this.$formularSite = document.querySelector('.formularSite');
        this.$formularComment = document.querySelector('.formularComment');
        this.$button = document.querySelector('.button');
        this.$formularWrapper = document.querySelector('.formularWrapper');

        this.$button.addEventListener('click', () => {
            this._formular()
            console.log('click')
        })
    };

    _getDataFetch() {
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50')
            .then((response) => {
                return response.json()
            }).then((json) => {
                this._createFavList(json.Data)
            }).catch((err) => {
                console.log(err)
            });
    };

    _createFavList(data) {
        data.forEach(site => {
            const accordionItem = document.createElement('div');
            const logo = document.createElement('img');
            const subline = document.createElement('div');

            accordionItem.classList.add('accordion__item');
            accordionItem.classList.add('list-item--clickable');
            logo.classList.add('image');
            subline.classList.add('subline');

            accordionItem.appendChild(logo);
            accordionItem.appendChild(subline);

            logo.style.backgroundImage = `url('https://chayns.tobit.com/storage/${site.siteId}/Images/icon-72.png')`;
            subline.innerHTML = site.appstoreName;
            accordionItem.addEventListener('click', () => chayns.openUrlInBrowser(`http://chayns.net/${site.siteId}/`));

            this.$sitesAccordion.appendChild(accordionItem);
        })
    };

    _formular() {
        if (this.$formularName.value.length < 1 || this.$formularEMail.value.length < 1 || this.$formularSite.value.length < 1) {
            chayns.dialog.alert('Oops', 'Bitte alle Pflichfelder ausfüllen.');
        }
        else if (this._emailValidation(this.$formularEMail.value) && this._urlValidation(this.$formularSite.value)) {
            chayns.intercom.sendMessageToPage({
                text: `Name: ${this.$formularName.value} 
                            E-Mail: ${this.$formularEMail.value} 
                            Site: ${this.$formularSite.value} 
                            Kommentar: ${this.$formularComment.value}`
            }).then((data) => {
                if (data.status === 200)
                    chayns.dialog.alert('Danke, ' + chayns.env.user.firstName + '!');
            });
        }
        else {
            chayns.dialog.alert('Oops', 'E-Mail oder Internetseite falsch.')
        }
    };

    _emailValidation(email) {
        var abc = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return abc.test(String(email).toLowerCase());
    }

    _urlValidation(url) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + 
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
            '((\\d{1,3}\\.){3}\\d{1,3}))' + 
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
            '(\\?[;&a-z\\d%_.~+=-]*)?' + 
            '(\\#[-a-z\\d_]*)?$', 'i'); 
        return !!pattern.test(url);
    }

}