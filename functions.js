
// Adelphi API URL.
const api_url = 
      "https://corsproxy.io/?https%3A%2F%2Fapi.adelphi.edu%2Fv1%2Fdepartments%2F";
 
// Defining async function.
async function getapi(url) {
   
// Storing response.
const response = await fetch(url);
   
// Storing data in form of JSON.
var data = await response.json();
show(data);
}
// Calling that async function.
getapi(api_url);
 
// Function to define innerHTML for HTML table.
function show(data) {
    let tab = 
        '';

   
    // For loop to access all rows.
    
     for (let d of data.results) {
    
    
    // Filtering results to modify displayed data in table (i.e. changing null values to '-' for user readability)
        

        if (d.title == null) {
            d.title = "";
        }

        
        if (d.code == null) {
            d.code = "";
        }
    
        if (d.phone == null) {
            d.phone = "";
        }

        if (d.fax == null) {
            d.fax = "";
        }

        if (d.email == null) {
            d.email = "";
            } 

        if (d.url == null) {
            d.url = "";
        }

        if (d.place == null) {
            d.place = "";
        }

        if (d.room == null) {
            d.room = "";
            } 

        if (d.suite == null) {
            d.suite = "";
        }

        if (d.active == null) {
            d.active = "";
            }

        if (d.active == true) {
            d.active = "Yes";
        }


    tab += `<departmentDataDisplayed>
    <div class="wholeGroup">
    <div class="titleGroup"><h2 id="tableTitleDisplay">${d.title}</div>
    <div class="codeGroup"><h2 id="tableDataDisplay">Code:</h2><p>${d.code}</p></div>
    <div class="phoneGroup"><h2 id="tableDataDisplay">Phone Number:</h2><p>${d.phone}</p></div>
    <div class="faxGroup"><h2 id="tableDataDisplay">Fax:</h2><p>${d.fax}</p></div>
    <div class="emailGroup"><h2 id="tableDataDisplay">Email:</h2><p>${d.email}</p></div>
    <div class="urlGroup"><h2 id="tableDataDisplay">URL:</h2><p>${d.url}</p></div>
    <div class="placeGroup"><h2 id="tableDataDisplay">Place:</h2><p>${d.place}</p></div> 
    <div class="roomGroup"><h2 id="tableDataDisplay">Room Number:</h2><p>${d.room}</p></div>
    <div class="suiteGroup"><h2 id="tableDataDisplay">Suite:</h2><p>${d.suite}</p></div>
    <div class="activeGroup"><h2 id="tableDataDisplay">Active</h2><p>${d.active}</p></div>
    </div>
    <hr>
    <hr id="bottom">
</departmentDataDisplayed>`;
}

    // Setting innerHTML as tab variable.
    document.getElementById("departmentList").innerHTML = tab;
}


// allows user to toggle mobile nav menu on and off in mobile view.
function myFunction() {
  var mobileNavItems = document.getElementById("mobileGroup1");
  var mobileNavMenuLogo = document.getElementById("barsCustom");
    if (mobileNavItems.style.display === "block") {
    mobileNavItems.style.display = "none";
    } else {
    mobileNavItems.style.display = "block";
    }

    if (mobileNavItems.style.display === "block") {
    mobileNavMenuLogo.style.color = "black";
    mobileNavMenuLogo.className = "fa fa-times";
    } else {
    mobileNavMenuLogo.style.color = "white";
    mobileNavMenuLogo.className = "fa fa-bars";
    }
}
