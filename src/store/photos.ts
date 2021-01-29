export default {
    namespaced: true,
    state: {
        photos: []
    },
    mutations: {
    },
    actions: {
        getPhotos(state: any, payload: any){
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res: any) => res.json())
            .then((res) => {
                state.photos = res
                payload = res
                console.log(state.photos)
            })
      }
  },
}
