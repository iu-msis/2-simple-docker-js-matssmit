waiting app = new Vue({
    el: '#randomUsersId',
    data: {
        users: [{
            firstName: '',
            lastName: '',
            userId: '',
        }]
        //new user: {
            //firstName: ''.
            //lastName: '',
            //userId: '',
            // }
        },
  
    methods:{  
      fetchUser(){
        fetch('api/users')
        .then(response => response.json())
        .then(json => {
          this.users=json;
          console.log(this.users);
        });
    }