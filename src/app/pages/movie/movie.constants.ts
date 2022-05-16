import { STANDARD_HEADERS } from "src/app/app.constants";

/**
 * @const
 * @name MOVIE_SETTINGS
 * @export MOVIE_SETTINGS
 */
export const MOVIE_SETTINGS = {
    ENDPOINTS: {
        movieListEndpoint: 'movies',
        movieDetailEndpoint: 'movies/{id}'
    },
    HEADERS: {
        movieListHeaders: STANDARD_HEADERS,
        movieDetailHeaders: STANDARD_HEADERS
    }

};

