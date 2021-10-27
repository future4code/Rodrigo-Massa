import axios from "axios"

const auth = "rodrigo"

const urlGetProfiles = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${auth}/person`
const urlGetMatches = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${auth}/matches`
const urlPostChoose = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${auth}/choose-person`
const urlClearMatches = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${auth}/clear`

const getProfile = async () => {
    try {
        const res = await axios.get(urlGetProfiles)
        return res.data.profile
    } catch (err) { }
}

const getMatches = async () => {
    try {
        const res = await axios.get(urlGetMatches)
        return res.data.matches
    } catch (err) { }
}

const chooseMatch = async (body) => {
    try {
        const res = await axios.post(urlPostChoose, body)
        return true
    } catch (err) { }
}

const clearMatches = async () => {
    try {
        const res = await axios.put(urlClearMatches)
        console.log(`Clear ${res.data.message}`)
    } catch (err) { }
}

export { getProfile, getMatches, chooseMatch, clearMatches }