import axios from 'axios';
import { setMovies } from '../slice/movieSlice';


export const  getMovies = () => async dispatch => {
    const url = 'https://65518c74-040e-493e-8aac-8288d481eb90-00-6yny70aq1nej.sisko.replit.dev/api/movies';
    try {

        const data = await axios.get(url);
        dispatch(setMovies(data))
    }catch(err){
        return err
    }

}