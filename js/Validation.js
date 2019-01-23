import firebase from 'firebase' // import the sdk

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Setup Firebase
var config = {
    apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
    authDomain: "vue-demo-537e6.firebaseapp.com",
    databaseURL: "https://vue-demo-537e6.firebaseio.com"
}
firebase.initializeApp(config)

var userRef = firebase.database().ref('users')

var app = new Vue({
    el: "#app",
    data: {
        newUser: {
            name: '',
            email: ''
        }
    },
    // firebase binding
    // https://github.com/vuejs/vuefire
    firebase: {
        users: userRef
    },

    computed: {
        validation: function(){
            return {
                // JavaScript String trim() Method:
                // Remove whitespace from both sides of a string:
                name: !!this.newUser.name.trim(),
                email: emailRE.test(this.newUser.email)
            }
        },
        isValid: function () {
            var validation = this.validation
            return Object.keys(validation).every(function(key){
                return validation[key]
            })
        }
    },

    //methods
    methods: {
        addUser: function(){
            if(this.isValid){
                userRef.push(this.newUser)
                this.newUser.name = ''
                this.newUser.email = ''
            }
        },
        removeUser: function(user){
            userRef.child(user['.key']).remove()
        }
    }
})