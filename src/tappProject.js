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
            }).then((data) => {
                this._createFavList(data.Data)
            }).catch((err) => {
                console.log(err)
            });
    };

    _createFavList(data) {
        for(const site of data){
            const listItem = document.createElement('div');
            
        }
    };

}