import axios from 'axios';

export default {
    getSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },

    saveBook: function(bookSaveChoice) {
        return axios.get("/api/books", bookSaveChoice);
    },

    getBooks: function() {
        return axios.get("/api/books");
    },

    getBook: function(id) {
        return axios.get("/api/books" + id);
    },

    deleteBook: function(id) {
        return axios.delete("/api/books" + id);
    }
};