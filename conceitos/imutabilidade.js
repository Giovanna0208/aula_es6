const user = {
    name: 'Giovanna',
    lastname: 'Ramos'
}

function userfullname(user) {
    return {
        ...user,
        fullname: `${user.name} ${user.lastname}`
    }
}

console.log(userfullname(user))