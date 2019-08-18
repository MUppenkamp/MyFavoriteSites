// LINK = `//chayns.tobit.com/storage/${site.siteId}/Images/icon-72.png?_=1565958881888`

class TappProject {
    constructor() {
        this._setDomElements();
        this._getDataFetch();
    }


    _setDomElements() {
    //     let link =`//chayns.tobit.com/storage/${linkId}/Images/icon-72.png?_=1565958881888`;
    //      let $linkId = 
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
        for(const site of data){
            // const itemWrapper = document.createElement('div');
            const imageWrapper = document.createElement('div');
            const accordionItem = document.createElement('div');
            const logo = document.createElement('div');
            const subline = document.createElement('div');
            
            accordionItem.classList.add('accordion__item');
            accordionItem.classList.add('list-item--clickable');
            logo.classList.add('list-item__image');
            subline.classList.add('list-item__subtitle'); //subline
            subline.classList.add('ellipsis');

            // itemWrapper.appendChild(accordionItem);
            accordionItem.appendChild(imageWrapper);
            accordionItem.appendChild(subline);

            logo.style.backgroundImage = `url("https://chayns.tobit.com/storage/${site.siteId}/Images/icon-72.png")`;
            subline.innerHTML = site.appstoreName;
            accordionItem.addEventListener("click", () => chayns.openUrlInBrowser(`http://chayns.net/${site.siteId}/`));

            this.$sitesAccordion.appendChild(itemWrapper);
        }
        this.$everyItem = document.querySelectorAll('.accordion__item');
    };

}