const BASEURL = 'https://deckofcardsapi.com/api/deck/'
let deck_id = 'new'
const $drawBtn = $('#draw-btn')
const $container = $('#card-container')
const $count = $('#count')

function getCard(){
    return axios.get(BASEURL+ `${deck_id}/draw/?count=1`)
}

function newDeck(){
    return axios.get(BASEURL+ `${deck_id}/shuffle/?deck_count=1`)
}

function handleBtnClick(){
    $drawBtn.prop('disabled', true)

    getCard()
        .then(res => {
            showCard(res.data.cards[0].image)
            showCount(res.data.remaining)
            $drawBtn.prop('disabled', false)
        })
}

function showCard(img){
    $container.append(`<img src="${img}" style="position:absolute; top:15px; rotate:${Math.floor(Math.random()*360)}deg">`)
}

function showCount(count){
    console.log(count)
    $count.text(count)
}

newDeck().then(res => {
    deck_id = res.data.deck_id
    showCount(res.data.remaining)
    // showCards(twoCards())
})

$drawBtn.on('click', handleBtnClick)

// function twoCards(){
//     let arr = []
//     for(i=0;i<2;i++){
//         arr.push(getCard())
//     }
//     return arr
// }

// function showCards(cards){
//     Promise.all(cards)
//         .then(res => {
//             const card1=res[0].data.cards[0]
//             const card2=res[1].data.cards[0]
//             console.log(card1.value + ' of ' +card1.suit)
//             console.log(card2.value + ' of ' +card2.suit)
//             console.log(res)
//         })
// }
