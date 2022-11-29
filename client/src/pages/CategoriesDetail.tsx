import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriesList from "../components/CategoriesList";

const CategoriesDetail = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [categoriesName, setCategoriesName] = useState("");

  const getCategoriesRequest = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=842da3f310c6c6938c121df031daad63&with_genres=${id}`;
    const urlList = `https://api.themoviedb.org/3/genre/movie/list?api_key=842da3f310c6c6938c121df031daad63&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();
    const responseList = await fetch(urlList);
    const responseJsonList = await responseList.json();

    if (responseJson) {
      setCategories(responseJson.results);
      setCategoriesList(responseJsonList.genres);
    } else {
      null;
    }
  };

  // Mostra o nome da categoria.
  useEffect(() => {
    categories.map((item: { genre_ids: number }) => {
      categoriesList.map((item2: { id: number; name: string }) => {
        // for (let i = 0; i < 3; i++) {
        if (
          item2.id == item.genre_ids[0] ||
          item2.id == item.genre_ids[1] ||
          item2.id == item.genre_ids[2]
        ) {
          setCategoriesName(item2.name);
        } else {
          null;
        }
        // }
      });
    });
  });

  useEffect(() => {
    getCategoriesRequest();
    document.title = `SatFlix | ${categoriesName}`;
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-center p-2">
          <h1 className="text-xl">{categoriesName}</h1>
        </div>
        <div className="flex flex-wrap justify-center text-center filter-filter">
          <CategoriesList categories={categories} />
        </div>
      </div>
    </>
  );
};

export default CategoriesDetail;
