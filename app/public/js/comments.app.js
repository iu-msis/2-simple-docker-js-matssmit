var app = new Vue({
    el: '#userComments',
    data: {
        comments: []
        //new user: {
            //firstName: ''.
            //lastName: '',
            //userId: '',
            // }
        },
  
    methods:{  
      fetchUser(){
        fetch('api/comments/')
        .then(response => response.json())
        .then(json => {
          this.comments=json;
          console.log(this.comments);
        });
      }
    },
    created(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.comments=json;
        console.log(this.comments);
      });
    },
  });
