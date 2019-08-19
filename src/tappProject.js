import  formular from './components/formular.js';
import { _intro } from './components/intro.js';
import { _getDataFetch } from './components/fetch.js';

const dataURL = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50';

export default class TappProject {
    constructor() {
        this._setDomElements();
        _getDataFetch(dataURL).then((data) => this._createFavList(data.Data));
    }

    _setDomElements() {
        this.$tapp__intro = document.querySelector('.tapp__intro');
        _intro(this.$tapp__intro);
        // this.$tappContent = document.querySelector('tapp__content');

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
            console.log('click');
            formular(this.$formularName, 
                this.$formularEMail, this.$formularSite, this.$formularComment)
        });
    };

    _createFavList(data) {
        data.forEach(site => {
            const accordionItem = document.createElement('div');
            const logo = document.createElement('img');
            const subline = document.createElement('div');

            accordionItem.setAttribute('style', 'display: flex;flex-wrap: wrap;text-align: center;justify-content: center;margin-bottom: 15px;overflow: hidden;cursor: pointer;width: 25%;');
            accordionItem.classList.add('accordion__item');
            accordionItem.classList.add('list-item--clickable');
        //----------------------------------------Styles----------------------------------------
            logo.setAttribute('style', 'width: 60px;height: 60px;background-size: cover;background-position: center;outline: 1px solid rgba(0,0,0,0.08);margin-right: 10px;flex-shrink: 0;');
            logo.classList.add('image');

        //----------------------------------------Styles----------------------------------------
            subline.setAttribute('style', 'text-overflow: ellipsis;white-space: nowrap;overflow: hidden;padding-top: 8px;');
            subline.classList.add('subline');

            accordionItem.appendChild(logo);
            accordionItem.appendChild(subline);

            logo.style.backgroundImage = `url('https://chayns.tobit.com/storage/${site.siteId}/Images/icon-72.png')`;
            subline.innerHTML = site.appstoreName;
            accordionItem.addEventListener('click', () => chayns.openUrlInBrowser(`http://chayns.net/${site.siteId}/`));

            //----------------------------------------Styles----------------------------------------
            this.$sitesAccordion.setAttribute('style', 'display: flex;flex-wrap: wrap;text-align: center;margin-bottom: 10px;');
            this.$sitesAccordion.appendChild(accordionItem);
        })
    };
}