const userProfile = {
    name: 'Vlad',
    commentsQty: 23,
    hasSignedAgreement: false,
}

// const { name, commentsQty } = userProfile
// const { hasSignedAgreement } = userProfile

// console.log(name)
// console.log(commentsQty)

const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }

    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile))