//Starting and continuing the counter
const counter = document.querySelector('#counter')
counter.innerText = 0
let interval = setInterval(startCounter, 1000)

function startCounter(){
    counter.innerText++
}
//minus button functionality
const minusButton = document.querySelector('#minus')
minusButton.addEventListener('click', minusCounter)
function minusCounter(){
    counter.innerText--
}
//plus button functionality
const additionButton = document.querySelector('#plus')
additionButton.addEventListener('click', addCounter)
function addCounter(){
    counter.innerText++
}
// like button
const likesList = document.querySelector(".likes")
const likeButton = document.querySelector('#heart')
const likesPerNumber = []


const handleClick = () => {
    const likedNumber = parseInt(counter.innerHTML)

    if (likesPerNumber.find(item => item.number === likedNumber)){
        const likedNumberObject = likesPerNumber.find(item => item.number === likedNumber)
        likedNumberObject.timesLiked = likedNumberObject.timesLiked + 1
        let listItem = document.querySelector(`#num-${likedNumber}`)
        listItem.innerHTML = `${likedNumber} has been liked ${likedNumberObject.timesLiked} times.`

    } else{
        likesPerNumber.push({number: likedNumber, timesLiked: 1})
        let li = document.createElement('li')
        li.innerHTML =  `${likedNumber} has been liked <span>1</span> time.`
        likesList.append(li)
        li.id = `num-${likedNumber}`
        likesList.appendChild(li)
    }
}
likeButton.addEventListener('click', handleClick)
