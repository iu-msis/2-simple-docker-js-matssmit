var app = new Vue({
    el: '#userComments',
    data: {
      comments: [],
      commentList: [],
      commentForm: {},
      newCommentData: {},
      newComment: {},
    },
    methods: {  
      getNewCommentForm() {
        return {
          commentText: ""
        }
      },
      handleNewCommentForm( evt ) {
       fetch("api/comments/create.php", {
        method: 'POST',
        body: JSON.stringify(this.commentForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8" 
       }
    })
      .then( response => response.json() )
      .then( json => {
        console.log ("Returned from post:", json);
        this.commentList = json;
        this.commentForm = this.getNewCommentForm();
      });
      console.log("Creating (POSTing)...!");
      console.log("this.newComment");
      },

    // newCommentData() {
    //   return {
    //     commentText: ''        
    //   }
    // }
  },
  created() {
    fetch("api/comments/")
    .then( response => response.json() )
    .then( json => {
      this.commentList = json;
      console.log(json)}
    );}
});

  