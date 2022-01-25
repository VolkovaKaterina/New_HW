const delay = (data, ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), ms)
    })
}
delay({name: "user"}, 1000)
    .then(
        (response) => console.log(`Hello ${response.name}`)
    )
//------------------------------------------------
const getUserInfo = async () => {
    return await delay({name: 'Vic', age: 21, id: 1}, 1000)

}
const getUserAvatar = async (userInfo) => {
    userInfo.avatar = await delay('https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg', 1000);
    return userInfo;

}
const getUserAdditionalInfo = async (userInfo) => {
    userInfo.interests = await delay(['sport', 'books'], 1000);
    return userInfo
}


const getResult = async () => {

    try {
        let user = await getUserInfo();
        let userAvatar = await getUserAvatar(user);
        let userInfo = await getUserAdditionalInfo(user);
        console.log(userInfo)
        return userInfo
    } catch (err) {
        console.log(err)
    }
}
getResult();

//---------------------------------------------------
async function getUser() {
    return {name: 'Vic', age: 21, id: 1};
}

async function getInfo() {
    try {
        let info = await getUser()
        console.log(info)
    } catch (err) {
        console.log(err)
    }
}

getInfo();

