const config = {
    apiKey: "AIzaSyBUzmgvxL4mU93xjveB-rMgSLX6h_2FMbY",
    authDomain: "mercadodev-042019.firebaseapp.com",
    databaseURL: "https://mercadodev-042019.firebaseio.com",
    projectId: "mercadodev-042019",
    storageBucket: "gs://mercadodev-042019.appspot.com",
    messagingSenderId: "430549742171"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()

export default base
