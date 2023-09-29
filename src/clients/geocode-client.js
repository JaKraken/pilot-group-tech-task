import axios from 'axios'

const getUrlWithLatLong = (lat, long) =>
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}`


const getGeoCodeDataLatLong = async (lat, long) => {
    const url = getUrlWithLatLong(lat, long)
    return await axios.get(url).then(
        ({data}) => {
            return data
        }
    ).catch(() => {
        console.error('failed to fetch geocode data')
        return new Error('geocode data failed')
    })
}

export {
    getGeoCodeDataLatLong
}