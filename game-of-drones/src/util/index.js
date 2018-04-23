export const validateStatus = (response, errorCallback) => {
    if(response.status < 200 && response.status >= 300){
        console.error("Status error");
        console.error(response.statusText);
        return false;
    }
    return true;
}