import { Link } from "react-router-dom";
import { categoriesTypes } from "../shared/categoriesT";

const CategoriesList = (props: { categories: any[] }) => {
  return (
    <>
      {props.categories.map((item: categoriesTypes) => (
        <div className="m-2 hover:opacity-90 tracking-wide hover:tracking-normal ease-in duration-150">
          <div className="m-3 px-1 text-[10px] absolute text-white bg-black bg-opacity-75 rounded">
            {item.release_date.slice(0, 4)}
          </div>
          <Link to={`/movies/${item.id}`}>
            <div className="cursor-pointer flex flex-col max-w-[175px] min-h-full min-w-full items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                className=""
                alt="movie"
              ></img>
              <div className="text-sm">{item.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CategoriesList;
