
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