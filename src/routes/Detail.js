import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setLoading(false);
      setMovie(json);
    };

    getMovie();
  }, [id]);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <img
            src={movie.data.movie.medium_cover_image}
            alt={movie.data.movie.title}
          />
          <h2>
            <Link to={movie.data.movie.url}>{movie.data.movie.title}</Link>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Detail;
