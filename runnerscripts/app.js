document.getElementById('searchButton').addEventListener('click', validateAndFetchUser);

let userProfileURL='';
let userBlogURL='';

function validateAndFetchUser(e) {

      

    const searchKey = document.getElementById('searchBar').value;
    if (searchKey == null || searchKey.length < 1 || searchKey == '') {
        alert('Please enter the search key !');
    } else {
        // Search key is not empty
        //alert(searchKey);

        // Make Httpcall

        const gitCall = new GITLib();
        const uiObj = new CreateUI();
        gitCall.getUser(searchKey).then(userData => {
            console.log(userData.profileData);
            userProfileURL = userData.profileData.html_url;
            userBlogURL = userData.profileData.blog;
            // if user is not found here
            if (userData.profileData.message === 'Not Found') {

                uiObj.createNotFoundDiv();
            } else {
                // user is found here and we can show profile

                // Create Photoholder Div and its content including children elements and their contents

               
        
                // add photo, profilebutton and username
                uiObj.createPhotoHolderContent(userData.profileData);
        
        
                // add Followers,following , public repo and public gists stats
                uiObj.createPrimaryStats(userData.profileData);


                // add location company and membersince details
                uiObj.createDetailsHolder(userData.profileData);
            }
        });

        gitCall.getRepoData(searchKey).then(
            repoData => {
               // console.log(repoData.RepoData.message);

                // if userdata not found
                if(repoData.RepoData.message  === 'Not found')
                {
                    uiObj.createNotFoundDiv();
                }
                else{

                    // data is found
                    // I need first 5 Repos

                    let arrRepo = repoData.RepoData.slice(0,5);
                    console.log(arrRepo);

                    uiObj.createRecentRepoSection(arrRepo);
                    
                    
                }



            }
        );



    }
    e.preventDefault();
}

// add event listener for view profile button

document.querySelector('body').addEventListener('click', function(event) {

    console.log();
    if (event.target.id =='profileButton') {
      // do your action on your 'button' or whatever it is you're listening for
    // alert(userProfileURL);
     window.location = userProfileURL;
    }
    else
    {
        if (event.target.id =='blogButton') {
            // do your action on your 'button' or whatever it is you're listening for
           alert(userProfileURL);
           window.location = userBlogURL;
          }
    }
  });

// clear the search bar text for clearing

document.getElementById('clearbutton').addEventListener('click',() =>{
     document.getElementById('searchBar').value='';
    


     // Check if the Error Div is created and found 
     // that means , user was not found at all 
     // therefore no noeed to remove other divs

    var element5 = document.getElementById('ErrorDiv');
    
    if(element5)
    {
        element5.parentNode.removeChild(element5);
    
    }
    // Else, this means the error div was not created at all therefore 
    // remove only other divs
    else{
                 
     var element = document.getElementById('photoHolder');
     element.parentNode.removeChild(element);
     
     var element4 = document.getElementById('topfiveProjects');
     element4.parentNode.removeChild(element4);
 
 
     var element2 = document.getElementById('detailsHolder');
     element2.parentNode.removeChild(element2);
 
     var element3 = document.getElementById('latestRepoHeading');
     element3.parentNode.removeChild(element3);
    }
    

})