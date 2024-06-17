export default class MovieService{
    _apiBase = 'https://api.themoviedb.org/3/search/movie'
    
    options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjRmMjA1MmMxZjQ1NmM1NjgyNzU1NjcwOWJkYTEyMyIsInN1YiI6IjY2M2NiYTM4NTgzYjU0YjIwYjFlY2Q4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dV3bXXiPGRWZs3-eGhmtToGCacksJo5hP5h2D5F7QfQ'
      }
    };

    //подключаемся
    async getResource(url){
      const res = await fetch(url, this.options);
      if (!res.ok){
        throw new Error(`Couldn't fetch ${url}`)
      }
      console.log(`fetch is connected`);
      return await res.json()
    }
    //получаем все фильмы
    async getAllFilms(){
      const res = await this.getResource(this._apiBase+"?query=lord&include_adult=false&language=en-US&page=1");
      return res.results;
    }

    async getMovieImage(id) {
      try {
        const res = await this.getResource(`https://api.themoviedb.org/3/movie/${id}/images`);
        if (!res.posters || res.posters.length === 0) {
          throw new Error('No posters available');
        }
        console.log(res.posters[0]);
        
        const path = res.posters[0].file_path;
        console.log(path);
        
        if (!path) {
          throw new Error('No valid file path');
        }
        
        const img = await this.getResource(`https://image.tmdb.org/t/p/w500${path}`);
        return img;
      } catch (error) {
        console.error('Error fetching movie image:', error);
        throw error; // Передаем ошибку дальше, чтобы вызывающий код мог обработать ее
      }
    }
  }