<template>
    <div id="header-title-div">
        <h1>{{ title }}</h1>
        <a :href="url">
            <img src="../assets/media/icon_2.png" id="header-logo" alt="Logo">
        </a>
    </div>

    <div class="session-div">
        <div id="header-session-div">
            <button v-if="!isLoggedIn" @click="showLogin">Login</button>
            <button v-if="!isLoggedIn" @click="showSignup">Signup</button>
            <button v-if="isLoggedIn" @click="signOut">SignOut</button>
            <button v-if="isLoggedIn" @click="editProfile">User</button>
        </div>

        <!-- Login Form -->
        <form class="header-form" v-if="showLoginForm" @submit.prevent="login">
            <input type="text" v-model="loginForm.username" placeholder="Username" required>
            <input type="password" v-model="loginForm.password" placeholder="Password" required>
            <button type="submit">✅</button>
            <button type="reset" @click="resetLoginForm">❌</button>
        </form>

        <!-- Signup Form -->
        <form class="header-form" v-if="showSignupForm" @submit.prevent="signup">
            <input type="text" v-model="signupForm.username" placeholder="New Username" required>
            <input type="password" v-model="signupForm.password" placeholder="Password" required>
            <button type="submit">✅</button>
            <button type="reset" @click="resetSignupForm">❌</button>
        </form>

        <!-- Edit Profile Form -->
        <form class="header-form" v-if="showEditProfileForm" @submit.prevent="updateProfile">
            <i class="logged-as"> Logged as '{{ getUsername() }}' </i>
            <input type="password" v-model="editProfileForm.password" placeholder="New Password" required>
            <button type="submit">✅</button>
            <button type="reset" @click="resetEditProfileForm">❌</button>
        </form>
    </div>
</template>
  
<script>
import Cookies from 'js-cookie';

export default {
    name: 'Header',
    data() {
        return {
            title: 'Clipboards WebApp',
            url: '',
            isLoggedIn: false,
            showLoginForm: false,
            showSignupForm: false,
            showEditProfileForm: false,
            auth_server: process.env.VUE_APP_AUTH_SERVER,
            loginForm: {
                username: '',
                password: '',
            },
            signupForm: {
                username: '',
                password: '',
            },
            editProfileForm: {
                password: '',
            },
        };
    },

    mounted() {
        this.url = `https://${window.location.host}/clipboards-app`;
        this.checkLoginStatus();
    },

    methods: {
        checkLoginStatus() {
            const jwt = Cookies.get('jwt');
            if (jwt) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        },
        showLogin() {
            this.showLoginForm = true;
            this.showSignupForm = false;
            this.showEditProfileForm = false;
        },
        showSignup() {
            this.showSignupForm = true;
            this.showLoginForm = false;
            this.showEditProfileForm = false;
        },
        signOut() {
            // Clear the JWT token cookie and update the login status
            Cookies.remove('jwt');
            Cookies.remove('username');
            this.isLoggedIn = false;
            this.showEditProfileForm = false;
            this.showSignupForm = false;
            this.showLoginForm = false;
            this.resetEditProfileForm();
            this.resetLoginForm();
            this.resetSignupForm();
        },
        editProfile() {
            this.showEditProfileForm = true;
            this.showSignupForm = false;
            this.showLoginForm = false;
        },
        login() {
            const { username, password } = this.loginForm;
            if (username && password) {
                // Call the login API with username and password
                fetch(`${this.auth_server}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                })
                    .then(response => response.json())
                    .then(data => {
                        // Store the JWT token in the cookies
                        Cookies.set('jwt', data.token);
                        Cookies.set('username', username);
                        // Update the login status
                        this.isLoggedIn = true;
                        this.showLoginForm = false;
                        this.showSignupForm = false;
                        this.showEditProfileForm = false;
                    })
                    .catch(error => {
                        console.error('Error during login:', error);
                    });
                this.resetLoginForm();
            }
        },
        signup() {
            const { username, password } = this.signupForm;

            if (username && password) {
                // Call the signup API with username and password
                fetch(`${this.auth_server}/signup`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                })
                    .then(response => response.json())
                    .then(data => {
                        // Store the JWT token in the cookies
                        Cookies.set('jwt', data.token);
                        Cookies.set('username', username);
                        // Update the login status
                        this.isLoggedIn = true;
                        this.showLoginForm = false;
                        this.showSignupForm = false;
                        this.showEditProfileForm = false;
                    })
                    .catch(error => {
                        console.error('Error during signup:', error);
                    });
                this.resetSignupForm();
            }
        },
        updateProfile() {
            const { password } = this.editProfileForm;

            if (password) {
                const jwt = Cookies.get('jwt');

                // Call the update profile API with the JWT token and new password
                fetch(`${this.auth_server}/user/update`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${jwt}`,
                    },
                    body: JSON.stringify({ password }),
                })
                    .then(response => {
                        if (response.ok) {
                            alert('Profile updated successfully!');
                            this.showLoginForm = false;
                            this.showSignupForm = false;
                            this.showEditProfileForm = false;
                        } else {
                            console.error('Failed to update profile:', response.status, response.statusText);
                        }
                    })
                    .catch(error => {
                        console.error('Error during profile update:', error);
                    });
                this.resetEditProfileForm();
            }
        },
        resetLoginForm() {
            this.loginForm.username = '';
            this.loginForm.password = '';
            this.showLoginForm = false;
        },
        resetSignupForm() {
            this.signupForm.username = '';
            this.signupForm.password = '';
            this.showSignupForm = false;
        },
        resetEditProfileForm() {
            this.editProfileForm.password = '';
            this.showEditProfileForm = false;
        },
        getUsername() {
            return Cookies.get('username')
        }
    },
};
</script>
  