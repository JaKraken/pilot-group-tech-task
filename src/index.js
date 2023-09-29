import express from 'express'
import { getIssLocation } from './clients/iss-tracker-client.js'
import { getGeoCodeDataLatLong } from './clients/geocode-client.js'

const app = express()

app.get('/', async (req, res) => {
    const issData = await getIssLocation()
    const geoResponseData = await getGeoCodeDataLatLong(issData.iss_position.latitude, issData.iss_position.longitude)

    const country = geoResponseData.results[geoResponseData.results.length - 1]?.formatted_address || 'unknown'

    res.send({ country: country, distance: 'unknown'})
})

app.listen(3000, () => {
    console.log(`app listening on port 3000`)
})