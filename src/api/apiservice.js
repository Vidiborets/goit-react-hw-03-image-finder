// const API_KEY = '23511418-9a5fcf3a7b36a31c6f256788e'
// const URL = 'https://pixabay.com/api/'

// const FetchApi = {
   
//     async fetchImages(query, currentPage) {
//         let url = `${URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

//         return await fetch(url).then(response => {
//             if (response.ok) {
//                 return response.json()
//             }
//         })
//             .then(data => {
//                 return data
//             })
//             .catch(error => console.log(error));
//     }
    
// }
// console.log(FetchApi)
// export default FetchApi

// function fetchApi (query,page){
//     const API_KEY = '23511418-9a5fcf3a7b36a31c6f256788e'
//     const URL = 'https://pixabay.com/api/'
//     let url = `${URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    
//     fetch(url)
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             }
//             return Promise.reject(
//                 new Error(`Name pictures ${query} do not find`)
//             )
//         })
// };
// const api = {
//     fetchApi,
// }

// export default api