import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [
            // {
            //     id: "1",
            //     title: "Title",
            //     submitDate: "2014-01-01T23:28:56.782Z",
            //     user: "username",
            //     votes: 100,
            //     comments: [
            //         "first comment",
            //         "second comment",
            //         "third one"
            //     ]
            // }
        ],
        name: ''
    },
    mutations: {
        createPost(state, post) {
            state.posts.push(post)
            //localStorage.setItem('posts', JSON.stringify(state.posts))
        },
        updateVotes(state, votes) {
            const idx = state.posts.findIndex(t => t.id === votes.id)
            state.posts[idx].votes = votes.updVotes
            //localStorage.setItem('posts', JSON.stringify(state.posts))
        },
        setName(state, name){
            state.name = name;
        }
    },
    actions: {
        createPost({commit}, post) {
            commit('createPost', post)
        },
        updateVotes({commit}, votes) {
            commit('updateVotes', votes)
        },
        setName({commit}, name){
            commit('setName', name)
        }
    },
    getters: {
        posts: state => state.posts,
        postById: state => id => state.posts.find(t => t.id === id),
        username: state => state.name
    }
})
