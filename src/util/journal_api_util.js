
import axios from "axios";


export const createJournal = (journal) => {
    return axios.post('/api/journals/new', journal);
  }
  


export const indexJournals = () => {
    return axios.get('/api/journals');
  }
  
