
import axios from "axios";


export const createTrack = (track) => {
    return axios.post('/api/tracks/new', track);
  }
  
export const indexTracks = () => {
    return axios.get('/api/tracks');
  }
  
export const deleteTrack = id => {
  return axios.delete(`/api/tracks/${id}`)
}

export const indexTrackEntries = trackId => {
  return axios.get(`/api/track-entries/week/${trackId}`)
}

export const addTrackEntry = (entry) => {
  return axios.post('/api/track-entries', entry)
}