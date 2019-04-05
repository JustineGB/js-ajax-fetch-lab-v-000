function getToken() { 
}

function forkRepo() {
   // const url = 'repos/justinegb/js-ajax-fetch-lab/forks';
  const url = 'repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  fetch(`https://api.github.com/${url}`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
    })
    .then(res => res.json())
    .then(json => showResults(json));
  }


function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}
//const fork = `<a href="${json.html_url}" >Your Fork</a>`
//return document.getElementById('results').innerHTML = fork

function createIssue() { 
const url = 'repos/justinegb/js-ajax-fetch-lab/issues';
  const postData = {
    title: document.getElementById('title').value,
	  body: document.getElementById('body').value  
    };
  fetch(`https://api.github.com/${url}`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }).then(res => res.json())
      .then(json => console.log(json))
     .then(json => getIssues());
  }

function getIssues() {
  const url = 'repos/justinegb/js-ajax-fetch-lab/issues';
  fetch(`https://api.github.com/${url}`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));
}