'use strict'

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const getDataFromAPI = fetch('/method/friends.get?fields=nickname,sex,bdate&v=5.52&access_token=513b1e508ea426d83b3a0b612a12765f300bec455b3c8e6782e93cd71d9f9ecec7fd57f17fe8c9267633f');

export default getDataFromAPI;