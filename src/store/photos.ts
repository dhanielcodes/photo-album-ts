export default {
    namespaced: true,
    state: {
        pics: null,
    },
    getters:{
        pics(state: any){
            return state.pics
        },
    },
    mutations: {
    },
    actions: {
        getPhotos({state}: any){
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((data) => {
                state.pics = data
                console.log(state.pics)
            })
      }
  },
}
