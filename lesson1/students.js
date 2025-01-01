const myInfo = (lName, age, country) => {
    return `Mohammad ${lName} and I live in ${country}. I'm ${age} year old.`
}

const yourInfo = (fullName, age, country) => {
    return `You're ${fullName}, you're ${age} year old. And you live in ${country}.`
}

const job = 'Backend developer';

module.exports = {
    myInfo,
    yourInfo,
    job,
}