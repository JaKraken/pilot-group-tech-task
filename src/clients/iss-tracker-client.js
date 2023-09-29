import axios from 'axios'

const issUrl = "http://api.open-notify.org/iss-now.json"  

const getIssLocation = async () => {
    return await axios.get(issUrl).then(
        ({data}) => {
            return data
        }
    ).catch(
        () => { 
            console.error('error fetching iss location data')
            return new Error('Location Data not found')
        })
}

export {
    getIssLocation
}