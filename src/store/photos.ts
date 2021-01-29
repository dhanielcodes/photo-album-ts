export default {
  namespaced: true,
  state: {
    pics: null,
  },
  getters: {
    searched(state: any) {
      return state.pics
    },
  },
  mutations: {},
  actions: {
    getPhotos({ state }: any) {
      fetch(
        "https://api.unsplash.com/photos?page=1&client_id=mUO78luHuOYnznV4o1Hca1nuAcawJ1Z-P4X1AZVVFWE"
      )
        .then((res) => res.json())
        .then((data) => {
          state.pics = data;
        });
    },
  },
};
