<template>
    <div>
        <h1>Echo Client</h1>
        <div>
            <p>Request Methods</p>
            <select v-model="method">
                <option value="get">Get</option>
                <option value="post">Post</option>
                <option value="put">Put</option>
                <option value="patch">Patch</option>
                <option value="delete">Delete</option>
            </select>
        </div>
        <br/>
        <div>
            <p>Json Parameters</p>
            <p class="error">{{ error }}</p>
            <textarea v-model="params" cols="30" rows="10" placeholder='Example: { "name":"John", "age":30, "city":"New York"}'></textarea>
        </div>

        <button class="btn btn-danger" @click="sendRequest()">Send Request</button>

        <br/>
        <div>
            <p>Response Values</p>

            <p>Method: <strong class="values">{{ method }}</strong></p>

            <p>Content Type: <strong class="values">{{ contentType }}</strong></p>

            <p>Response: <strong class="values">{{ response }}</strong></p>

            <p>Time: <strong class="values">{{ time }} milliseconds</strong></p>

        </div>
    </div>
</template>

<script>
    import {APIService} from '../APIService';
    const apiService = new APIService();

    export default {

        name: 'ListContacts',

        components: {

        },

        data() {
            return {
                response:{},
                method:'get',
                time:0,
                params:'',
                contentType:'',
                error: ''
            };
        },

        methods: {
            sendRequest(){
                this.error = '';

                if (this.params !== '') {
                    try {
                        this.params = JSON.parse(this.params);
                    } catch (e) {
                        this.error = "It's not a right json format";
                        this.params = '';
                    }
                }

                switch(this.method) {
                    case 'get':
                        this.getMethod();
                        break;
                    case 'post':
                        this.postMethod();
                        break;
                    case 'patch':
                        this.patchMethod();
                        break;
                    case 'put':
                        this.putMethod();
                        break;
                    case 'delete':
                        this.deleteMethod();
                        break;
                    default:
                        this.getMethod();
                        break;
                }

                // Set to default after any request
                this.params = '';
            },

            getMethod(){
                // Set the time before the request.
                let start = Date.now();
                apiService.getMethod(this.params).then((response) => {
                    this.response = response.data;
                    this.contentType = response.headers['content-type'];
                    this.time = Date.now() - start;
                });
            },

            postMethod(){
                // Set the time before the request.
                let start = Date.now();
                apiService.postMethod(this.params).then((response) => {
                    this.response = response.data;
                    this.contentType = response.headers['content-type'];
                    this.time = Date.now() - start;
                });
            },

            patchMethod(){
                // Set the time before the request.
                let start = Date.now();
                apiService.patchMethod(this.params).then((response) => {
                    this.response = response.data;
                    this.contentType = response.headers['content-type'];
                    this.time = Date.now() - start;
                });
            },

            putMethod(){
                // Set the time before the request.
                let start = Date.now();
                apiService.putMethod(this.params).then((response) => {
                    this.response = response.data;
                    this.contentType = response.headers['content-type'];
                    this.time = Date.now() - start;
                });
            },

            deleteMethod(){
                // Set the time before the request.
                let start = Date.now();
                apiService.deleteMethod(this.params).then((response) => {
                    this.response = response.data;
                    this.contentType = response.headers['content-type'];
                    this.time = Date.now() - start;
                });
            }
        },

        mounted() {
            this.sendRequest();
        },
    }
</script>

<style scoped>
    .values {
        color: blue;
    }

    .error {
        color: red;
        font-weight: bold;
    }
</style>
