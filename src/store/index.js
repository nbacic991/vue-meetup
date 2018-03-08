import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://thenypost.files.wordpress.com/2017/04/new-york.jpg?quality=90&strip=all&w=1200',
        id: 'dasdasdasdas',
        title: 'Meetup in New York',
        date: '2017-07-17',
        location: 'New York',
        description: 'It\'s New York'
      },
      {
        imageUrl: 'https://www.aifsabroad.com/images/country-page/aifsabroad-share-image-Paris.jpg',
        id: 'dsdarerweewr',
        title: 'Meetup in Paris',
        date: '2017-07-19',
        location: 'Paris',
        description: 'It\'s Paris'
      }
    ],
    user: {
      id: '3123131312',
      registeredMeetups: []
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '3162783yuihdjak'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }

})
