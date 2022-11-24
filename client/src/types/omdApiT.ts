export default interface RootObject {
  Search: Search[];
  totalResults: string;
  Response: string;
}

interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Search: string,
  totalResults: string,
  Responsets: string
}