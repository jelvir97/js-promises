const favNum = 6;

function getMathFact(){
    return axios.get(`http://numbersapi.com/${favNum}/trivia?json`)
}

// getMathFact()
// .then(res =>console.log(res))
// .catch(err =>console.log(err))

function getTenMathFacts(){
    return axios.get(`http://numbersapi.com/1..10/trivia?json`)
}

getTenMathFacts()
.then(res => {
    const $body = $('body')
    for(fact in res.data){
        $body.append(`<h2>${res.data[fact]}</h2>`)
    }

})
.catch(err => console.log(err))

function getFourFacts(){
    const arr =[]
    for(let x = 0; x<4;x++){
        arr.push(getMathFact())
    }
    return arr;
}
let fourFacts = getFourFacts()
Promise.all(fourFacts)
.then(res => {
    const $body = $('body')
    console.log(res)
    for(fact in res){
        console.log(res[fact].data.text)
        $body.append(`<h2>${res[fact].data.text}</h2>`)
    }
})
.catch(err => console.log(err))