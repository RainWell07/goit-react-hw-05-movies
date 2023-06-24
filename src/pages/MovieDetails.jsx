import { MovieDetails } from "components/API/API";
import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, useLocation, Outlet,NavLink } from "react-router-dom";
import {SyncLoader, RingLoader } from "react-spinners"
import Details from "components/MovieDetails/Details";
import {StyledInformation} from "components/MovieDetails/StyledDetails";
import styled from "@emotion/styled";
import {BsFillArrowDownCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs";
import {FaPeopleCarry} from "react-icons/fa";
import {VscOpenPreview} from "react-icons/vsc";


const DetailsPageLink = styled(NavLink)`
font-size: 20px;
all: unset;
width: 100px;
height: 30px;
font-size: 16px;
border-radius:10px;
color: white;
cursor: pointer;
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.4s;
margin-bottom: 20px;
background-color:#067937;

:hover {
  color: #2ecc71;
  background-color:#080e2c;
}
}
`;

export default function MovieDetailsPage() {
    const {movieID} = useParams();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [releaseYear, setReleaseYear] = useState();
    const [score, setScore] = useState();
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);
    const [doesMovieDataLoading, setDoesMovieDataLoading] = useState(false);

    const location = useLocation();
    const LinkGoBack = useRef(location.state?.from ?? '/movies');


    useEffect( () => {
     setDoesMovieDataLoading(true);
     MovieDetails(movieID).then(resp => {
        const result = resp.data;
        setTitle(result.title);
        setImage(result.poster_path);
        setReleaseYear(new Date(result.release_date).getFullYear());
        setScore(Math.round(result.vote_average * 10));
        setOverview(result.overview);
        result.genres.map(({name}) =>
        setGenres(prevName => [...prevName, name])
        );
     })
     .finally( () => {
     setDoesMovieDataLoading(false);
     });
    }, [movieID]);

    return (
    <>
    <DetailsPageLink to={LinkGoBack.current}>
    <BsFillArrowLeftCircleFill style={{marginRight: '10px'}}/>Back
    </DetailsPageLink>
    {doesMovieDataLoading ? (
    <RingLoader
    size={699}
    color="green"
    css={{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height:'100vh'
    }}
    visible="true"
    />
    ) : (
    <Details
    title={title}
    releaseYear={releaseYear}
    score={score}
    image={image}
    overview={overview}
    genres={genres}
    />
)}
   <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
   <BsFillArrowDownCircleFill style={{fill:'#067937'}} />
    <h3 style={{color:'white'}} id="scroll">Useful Information</h3>
   </div>
   <StyledInformation>
    <DetailsPageLink to="cast">
    Cast
    <FaPeopleCarry style={{marginLeft: '10px'}} />
    </DetailsPageLink>
    <DetailsPageLink to="reviews">
    Reviews
    <VscOpenPreview style={{marginLeft: '10px'}} />
    </DetailsPageLink>
   </StyledInformation>
   <Suspense
    fallback = {
    <SyncLoader
    height="120%"
    width="100%"
    radius="9"
    color="#067937"
    ariaLabel="three-dots-loading"
    wrapperClassName=""
    visible="true"
    />
    }
    >
 <Outlet />
</Suspense>

    </>
);
}