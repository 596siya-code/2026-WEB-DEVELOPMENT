const API_URl="https://jsonplaceholder.typicode.com/users"

// selecting the html tag
const title = document.getElementById("pagetitle")
const searchinput = document.getElementById("searchinput")
const searchbtn = document.getElementById("searchbtn")

const loadbtn = document.getElementById("loadbtn")
const status = document.getElementById("status")
const profilecount = document.getElementById("profilecount")
const container = document.getElementById("profilecontainer")

//store api Data
let allUsers =[];

//change the Heading
title.textContent ="explore user profile"

//fetch the data from api
async function loadprofile() {
    
    status.textContent = "loading profiles"
    loadbtn.disabled= true

    try {
        //successful
    const response   =  await fetch(API_URl)

    if(!response.ok){
        throw new Error("Unable to load profile")
    }

   const users = await response.json()
   console.log(users)

   allUsers = users

   displayprofilecard(allUsers)
   
   status.textContent = 'profiles loaded'


    } catch (error) {
        //unsuccessfull
        container.replaceChildren()
        const message = document.createElement("p")
        message.className= "empty message"
        message.textContent= "could not load profiles .check yourinternet connection and try again "
         
        container.appendChild(message)
        profilecount.textContent = "profile displayed :0"
        status.textContent = "unable to fetch"
        console.log(error)
    }finally{
        loadbtn.disabled = false

    }
}
loadprofile()

//create and display profle card
function displayprofilecard(users){
//Remove the previous
container.replaceChildren()

// update the number
profilecount.textContent = "profile displayed" + users.length;

//display a message when no result found
if(users.length == 0){
    const message = document.createElement('p')
      message.className = "empty-message"
      message.textContent = "no mathcing profile found"
   
      container.appendChild(message)
      return;
}
      //create a card for each user
      users.forEach( function(user){

        const card = document.createElement("article")
        card.className= "profile-card"

        const name = document.createElement('h3')
        name.textContent= user.name

        const username =document.createElement('p')
        username.textContent ="Username: " + user.username

        const email = document.createElement("p")
        email.textContent = "Email :" + user.email

        const city = document.createElement("p")
        city.textContent= "city :" + user.address.city

        const company = document.createElement("p")
        company.textContent= "company:" + user.company.name
     
        //Add Each element to profilr card
     card.appendChild(name)
     card.appendChild(username)
     card.appendChild(email)
     card.appendChild(city )
     card.appendChild(company)
     
     //add the card to the webpage
     container.appendChild(card)

      })
        
      }

      //seach profile already loaded from Api
      function searchprofiles(){
        const searchtext = searchinput.Value.trim().toLowerCase();
        const filteruser = allUsers.filter(function(user){

     return(
        user.name.toLowerCase().includes(searchtext)||
        user.email.toLowerCase().includes(searchtext)
     )
        })

     displayprofilecard(filteruser)
     status.textContent= searchtext ? "search completed ." :"showing all the loaded profiles"
    }

     //event 1 : load buton click
     loadbtn.addEventListener("click" , loadprofile)

     //Event : search Profile
     searchbtn.addEventListener("click" ,searchprofiles)
     
     //event : press enter
     searchinput.addEventListener("keydown" , function(event){

        if(event.key === 'Enter'){
            searchprofiles()
        }
            
    
     })
