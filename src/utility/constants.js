export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg";

export const AVATAR = "https://avatars.githubusercontent.com/u/65030579?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDD_KEY,
  },
};

export const POSTER_URL = "https://image.tmdb.org/t/p/w500/";

export const URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
export const OPENAI_API = process.env.REACT_APP_OPENAI_KEY;
