var app = new Vue({
    el: '#userComments',
    data: {
      comments: [],
      commentForm: {}
    },
    methods: {  
      getNewCommentForm() {
        return {
          commentText: ""
        }
      },
      handleNewCommentForm( evt ) {
       fetch("api/comments/create.php")
       JSON.stringify(this.commentForm)
      }
    },
    created(){
      fetch("api/comments/")
      .then(response => response.json())
      .then(json => {
        this.comments = json;
        console.log(this.comments)}
      );
    }
  })
