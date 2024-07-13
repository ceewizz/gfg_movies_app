import Home from './pages/Home';
import { Routes, Route} from 'react-router-dom';
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movies";
import MovieCard from '../../components/MovieCard;

const Home = () => {
    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.movies);

   

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        <Navbar/>
        <div>
            {
                movies?.length > 0 && movies.map(movie => <MovieCard key ={movie.id}/>)
            }
        </div>
        </>
    )
}

export default Home;