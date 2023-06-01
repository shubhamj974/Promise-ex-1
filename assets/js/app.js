let cl = console.log;

const hrCall = (ski) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ski.toLowerCase().includes('angular') ? resolve(`Candidate shortlisted for Angular Profile`) : reject(`Candidate is not eligible for this profile`)
        }, 500);
    })
}

let skills = Math.random() >= .2 ? 'Angular 16' : 'React 18';

const firstTechRound = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .2 ? true : false
            result ? resolve(`Candidate is eligible for 2nd round`) : reject(`Candidate basic knowledge is poor`)
        }, 500);
    })
}

const secondTechRound = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .2 ? true : false
            result ? resolve(`Candidate are eligible for Manager round`) : reject(`Candidate logic is not impliment`)
        }, 500);
    })
}

const MLRound = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .2 ? true : false
            result ? resolve(`Candidate selected`) : reject(`Candidate know about technical thinks`)
        }, 500);
    })
}


hrCall(skills)
    .then((res) => {
        return firstTechRound()
    })
    .then((res) => {
        return secondTechRound()
    })

    .then((res) => {
        return MLRound()
    })
    .then((res) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 3000
        })
    })
    .catch((err) => {
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 3000 
        })
    })

