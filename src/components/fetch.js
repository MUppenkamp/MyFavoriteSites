export async function _getDataFetch(url) {
    let response = await fetch(url);
    let retval = await response.json();
    return retval;
};