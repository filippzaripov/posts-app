import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import mockup from '../assets/mockup.json'

export default new Vuex.Store({
    state: {
        posts: JSON.parse(localStorage.getItem('posts') || "[" + JSON.stringify(mockup) + "]"),
        name: localStorage.getItem('username' || null)
    },
    mutations: {
        createPost(state, post) {
            state.posts.push(post);
            localStorage.setItem('posts', JSON.stringify(state.posts))
        },
        updateVotes(state, votes) {
            const idx = state.posts.findIndex(t => t.id === votes.id);
            state.posts[idx].votes = votes.updVotes;
            localStorage.setItem('posts', JSON.stringify(state.posts))
        },
        setName(state, name) {
            state.name = name;
            localStorage.setItem('username', name)
        },
        setComment(state, comment) {
            const posts = state.posts.concat();
            const idx = posts.findIndex(t => t.id === comment.postId);
            posts[idx].comments.push(comment.text);

            state.posts = posts;
            localStorage.setItem('posts', JSON.stringify(state.posts))
        }
    },
    actions: {
        createPost({commit}, post) {
            commit('createPost', post)
        },
        updateVotes({commit}, votes) {
            commit('updateVotes', votes)
        },
        setName({commit}, name) {
            commit('setName', name)
        },
        setComment({commit}, comment) {
            commit('setComment', comment)
        }
    },
    getters: {
        posts: state => state.posts,
        postById: state => id => state.posts.find(t => t.id === id),
        username: state => state.name
    }
})
