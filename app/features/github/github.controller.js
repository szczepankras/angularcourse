export default class GitHubController {
  
  constructor(GitHubService, $stateParams, $firebaseArray) {
    
    this.selectedUser = $stateParams.user
    this.comment = "";
    
    GitHubService.getUser(this.selectedUser)
      .then(this.handleGetUserSuccess.bind(this));
    
    GitHubService.getRepos(this.selectedUser)
      .then(this.handleGetReposSuccess.bind(this));
      
      var ref = new Firebase("https://szczepix.firebaseio.com/items");
      this.items = $firebaseArray(ref);
      console.log(this.items);
  }
  
  handleGetUserSuccess(response) {
    this.User = response.data;
    console.log(this.User);
  }
  
  handleGetReposSuccess(response) {
    this.Repos = response.data;
    console.log(this.Repos);
  }
  
  addComment(){
    this.items.$add({ comment: this.comment }).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      });
  }


  /*constructor($http) {
    this.$http = $http;
    
    this.getUser();
    this.getRepos();
  }
  
  getUser() {
    this.$http.get('https://api.github.com/users/szczepankras')
      .then(this.handleGetUserSuccess.bind(this));
  }
  
  handleGetUserSuccess(response) {
    this.User = response.data;
    console.log(this.User);
  }
  
  getRepos() {
    this.$http.get('https://api.github.com/users/szczepankras/repos')
      .then(this.handleGetReposSuccess.bind(this));
  }
  
  handleGetReposSuccess(response) {
    this.Repos = response.data;
    console.log(this.Repos);
  }*/
 
 
 /*   constructor(GithubService){
        this.githubService = GithubService;
       //this.repos = GithubService.getRepos();
         GithubService.getRepos().then((res) => {
            console.log(res)
            this.repos = res.data;
        })
        console.log(this.repos);
    }
    constructor($http, $scope){
          this.$http = $http;
          this.email = null;
          this.getUserData();
          this.getRepos();
        }
    
    getUserData(){
        this.$http.get('https://api.github.com/users/szczepankras').then((response)=>{
            this.assignToScope(response)
        });
    }
    getRepos(){
      this.$http.get('https://api.github.com/users/szczepankras/repos').then((response)=>{
            this.assignToRepos(response)
        });
 }
    
 assignToScope(response){
        this.email = response.data.login;
        this.User = response.data;
        console.log(this.User)
    }
        
 assignToRepos(response){
 
        this.repos = response.data;
        console.log(this.repos)
    }*/
}

   