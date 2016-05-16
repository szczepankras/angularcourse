export default class GithubService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(user) {
    return this.$http.get('https://api.github.com/users/' + user)
  }
  
  getRepos(user) {
    return this.$http.get('https://api.github.com/users/'+ user +'/repos')
  }
  
  
  
  /*constructor($http) {
      this.$http = $http;
      //    this.email = null;
    //      this.getUserData();
   //       this.getRepos();
  }

 getUserData(){
        this.$http.get('https://api.github.com/users/szczepankras').then((response)=>{
            this.assignToScope(response)
        });
     
 }
    
    getRepos(){
      return this.$http.get('https://api.github.com/users/szczepankras/repos')
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