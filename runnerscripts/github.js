
class GITLib{

constructor(){
    this.ClientID='7bd315bedf14ea1909dd';
    this.ClientSecret ='be96d3f4061b9774f9411e62e5a588b433b09ccf';
    
    
}



// GET user Method


  async  getUser(userName)
    {
        const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${this.ClientID}&client_secret=${this.ClientSecret}`);
        const profileData = await profileResponse.json();

        return {
            profileData

        }
    }

    async  getRepoData(userName)
    {
        const RepoDataResponse = await fetch(`https://api.github.com/users/${userName}/repos?client_id=${this.ClientID}&client_secret=${this.ClientSecret}`);
        const RepoData = await RepoDataResponse.json();

        return {
            RepoData

        }
    }
}