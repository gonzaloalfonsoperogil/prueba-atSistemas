/**
 * @interface
 * @name IAPIVersion
 * @export IAPIVersion
 * @description Formato de un elemento en el listado de APIs.
 */
export interface IMovie {
    id: number;
    title: string;
    poster: string;
    genre: string[];
    year: number;
    duration: number;
    imdbRating: number;
    actors: number[];
}