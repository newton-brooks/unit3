let response = {
    guess: 'num',
    hint: (num) => {
        if(num > 42) {
            return `Lower`
        } else if(num < 42) {
            return `Higher`
        } else {
            return `correct`
        }
    }
}

console.log(response.hint(50))
