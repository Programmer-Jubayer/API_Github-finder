class UI {
  constructor() {
    this.profile = document.getElementById("userProfile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
          <div class="row">
          <h1 class="text-center col-md-12 mb-4">This is <strong style="color:orangered">"${user.name}"</strong class="text-primary"></h1>
            <div class="col-md-3">
              <img src="${user.avatar_url}" class="img-fluid mb-2" />
              <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank"
                >Viwe Profile</a
              >
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repository: ${user.public_repos}</span> &nbsp; &nbsp;
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span> &nbsp; &nbsp;
              <span class="badge badge-success">Follower: ${user.followers}</span> &nbsp; &nbsp;
              <span class="badge badge-info">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Biography: "${user.bio}"</li>
                <li class="list-group-item">Member Since: "${user.created_at}"</li>

                
              </ul>
            </div>
          </div>
        </div>

        <h3 class="page-heading text-center mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Star: ${repo.stargazers_count}</span> &nbsp; &nbsp;
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span> &nbsp; &nbsp;
              <span class="badge badge-success">Follower: ${repo.forks_count}</span> &nbsp; &nbsp;
            </div>
            </div>
        </div>
      `;
    });

    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    // clear the alert field if there are already there
    this.clearAlert();
    // Create a new div
    const div = document.createElement("div");
    // Add class name to the div
    div.className = className;
    // Add text to the div
    div.appendChild(document.createTextNode(message));
    // select the container
    const container = document.querySelector(".searchcontainer");
    // select the search input file where you include the file
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    // // Set Time out function
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
