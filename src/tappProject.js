// LINK = `//chayns.tobit.com/storage/${site.siteId}/Images/icon-72.png?_=1565958881888`

class TappProject {
    constructor() {
        this._setDomElements();
        this._getDataFetch();
    }


    _setDomElements() {

    };

    _getDataFetch() {
        fetch("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50")
            .then((response) => { 
                return response.json() 
            }).then((data) => { 
                this._createList(data.Data) 
            }) .catch((err) => { console.log(err) 
                });
    };
}