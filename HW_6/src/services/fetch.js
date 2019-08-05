'use strict'

export const getFriendsDataFromAPI = fetch('/method/friends.get?fields=nickname,sex,bdate&v=5.52&access_token=5c7201cfc52e8d2070668ff4137e88085565ba0254dc8e98b92f3f970db91a508aa8a50403a230f80eab6');

export function getPossibleFriendsDataFromAPI(step) {

    const possibleFriendsDataFromAPI = fetch('/method/friends.getSuggestions?fields=sex,bdate,photo_100,city&count=20&offset='+ step + '&v=5.52&access_token=5c7201cfc52e8d2070668ff4137e88085565ba0254dc8e98b92f3f970db91a508aa8a50403a230f80eab6').
    then(data =>{return data.clone().json()}); 

    return possibleFriendsDataFromAPI;
} 
