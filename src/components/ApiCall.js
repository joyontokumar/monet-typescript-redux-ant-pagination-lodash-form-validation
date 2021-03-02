export const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method:"GET"
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}
