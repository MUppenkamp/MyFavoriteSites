import './css/style.scss';

export default class TappProject {
    constructor() {
        this._setDomElements();
        this._getDataFetch();
    }


    _setDomElements() {
        this.$sitesAccordion = document.querySelector('.cc__list');
    };

    _getDataFetch() {
        fetch("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50")
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
            // const itemWrapper = document.createElement('div');
            // const imageWrapper = document.createElement('div');
            const accordionItem = document.createElement('div');
            const logo = document.createElement('img');
            const subline = document.createElement('div');
            
            accordionItem.classList.add('accordion__item');
            accordionItem.classList.add('list-item--clickable');
            logo.classList.add('list-item__image');
            subline.classList.add('subline'); 
            

            // itemWrapper.appendChild(accordionItem);
            accordionItem.appendChild(logo);
            // imageWrapper.appendChild(logo);
            accordionItem.appendChild(subline);

            try{
            logo.style.backgroundImage = `url('https://chayns.tobit.com/storage/${site.siteId}/Images/icon-72.png')`;
            } catch(err) {
                logo.style.backgroundImage = `url('css/chaynsIcon.png')`;
            }

            subline.innerHTML = site.appstoreName;
            accordionItem.addEventListener('click', () => chayns.openUrlInBrowser(`http://chayns.net/${site.siteId}/`));

            this.$sitesAccordion.appendChild(accordionItem);
        })
        this.$everyItem = document.querySelectorAll('.cc__list');
    };

}