class CreateUI{


    createPhotoHolderContent(userData)
    {
        // add photo, profilebutton and username
        var photoHolder = document.createElement('div');
        photoHolder.id='photoHolder';

        let content=`
        <img id="userProfilePicture" src="${userData.avatar_url}"   />
        <div id="textHolder">
            <h1 id="userNameHeading">${userData.name}</h1>
            <span style="display:inline-block;">
            <a href="#" id="profileButton" class="button" >View Profile</a>
            <a href="#" id="blogButton" class="button" >goto blog</a></span>
        </div>`

        photoHolder.innerHTML=content;
       document.getElementById('wrapper').appendChild(photoHolder);

      
    }


    createPrimaryStats(userData)
    {
        var internalHolder = document.createElement('div');
        internalHolder.id='internalHolder';
        let stats=`
        
 
                 <a href="#" class="button" id="badger" style="color:#e84393;">
                     Followers &nbsp;&nbsp;&nbsp;&nbsp; ${userData.followers}
                 </a>
                 <a href="#" class="button" id="badger" style="color: #55efc4;">Following &nbsp;&nbsp;&nbsp;&nbsp; ${userData.following}
                 </a>
                 <a href="#" class="button" id="badger" style="color: #74b9ff;">Public Repos &nbsp;&nbsp;&nbsp;&nbsp; ${userData.public_repos}</h6>
                 </a>
                 <a href="#" class="button" id="badger" style="color: #fdcb6e;">pub Gists &nbsp;&nbsp;&nbsp;&nbsp; ${userData.public_gists}</h6>
                 </a>
 
           
        `;
        internalHolder.innerHTML=stats;
        document.getElementById('photoHolder').appendChild(internalHolder);
        

    }

    createDetailsHolder(userData)
    {   
        var detailsHolder = document.createElement('div');
        detailsHolder.id='detailsHolder';

        
        let stats=`
        <img class="detailIcons" src="assets/icons/location.png"  />
        <div id="textHolder">
            <h5 class="headings"  >${userData.location}</h5>
        </div>
        <img class="detailIcons"  src="assets/icons/company.png" />
        <div id="textHolder">
            <h5 class="headings" id="orgHeading" >${userData.company}</h5>
        </div>
        <img class="detailIcons" src="assets/icons/calendar.png"  />
        <div id="textHolder">
            <h5 class="headings" id="dateHeading"  >            
            ${userData.created_at}</h5>
        </div>
       
`;

        detailsHolder.innerHTML=stats;
        document.getElementById('wrapper').appendChild(detailsHolder);
        
       



    }


    createRecentRepoSection(repoList){


            const latestRepoHeading = document.createElement('h4');
            latestRepoHeading.id='latestRepoHeading';
           

            latestRepoHeading.innerText='Latest Repos';
            document.getElementById('wrapper').appendChild(latestRepoHeading);



            const topfiveProjects = document.createElement('div');
            topfiveProjects.id='topfiveProjects';    
            
            let list='';
            repoList.forEach(element => {
            list+= `
            <div class="items">
            <img class="repoIcon" src="assets/icons/repository.png" />
                <a href="#" id="repoLink">${element.html_url}</a>

                <img  class="latestRepoIcons" src="assets/icons/star.png" /> 
                <div class="statValues" id="starValue">${element.stargazers_count}</div>
        
                <img class="latestRepoIcons" src="assets/icons/fork.png" /> 
                <div class="statValues" id="forkValue">${element.forks_count}</div>

                <img  class="latestRepoIcons" src="assets/icons/eye.png" /> 
                <div class="statValues" id="watchervalue">${element.watchers_count}</div>

            </div>
            `;
           topfiveProjects.innerHTML=list;

        });
        document.getElementById('wrapper').appendChild(topfiveProjects);

    }




    createNotFoundDiv()
        {

            const divError=document.createElement('div');
            divError.id='ErrorDiv';

            const content = `  <center>   <img id="errorLogo" src="assets/icons/error404.png"   />
            </center> `;

            divError.innerHTML=content;

            document.getElementById('wrapper').appendChild(divError);


    }
}