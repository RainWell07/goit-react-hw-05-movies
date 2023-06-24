import { MovieCredits } from "components/API/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { StyledCast } from "./StyledCast";


export default function Cast() {
    const {movieID} = useParams();
    const [castArr, setCastArr] = useState([]);
    const [DoesHaveCastInfo, setDoesHaveCastInfo] = useState(true);

    useEffect( () => {
    MovieCredits(movieID).then(resp => {
    if (resp.data.cast.length === 0) {
        setDoesHaveCastInfo(false);
        toast.info('Sorry, but there is no cast info about this movie!');
        return;
    }
    setCastArr([...resp.data.cast]);
    });
    }, [movieID]);


    useEffect( () => {
    document.getElementById('scroll').scrollIntoView({behavior: 'smooth'});
    }, [castArr]);

    return DoesHaveCastInfo ? (
    <StyledCast>
     {castArr.map(({profile_path, name, character, id}) => (
    <li key={id}>
    {profile_path ? (
      <img
      src={`https://image.tmdb.org/t/p/w200${profile_path}`}
      alt="Actors"
      width="200px"
      height="300px"
      />
    ) : (
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/800px-Placeholder_no_text.svg.png"
    alt="Actors"
    width="200px"
    height="300px"
    />
    )}
    <div>
     <h3>{name}</h3>
     <h4>{character}</h4>
    </div>
    </li>
     ))}
    </StyledCast>
    ) : (
     <ToastContainer/>
    );
}