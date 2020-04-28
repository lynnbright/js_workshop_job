let submit = document.getElementById('submit')
let nextButton = document.querySelector('.pagination-next')

 
submit.addEventListener('click', function(e){
  e.preventDefault();
  
  let parent = document.getElementById('job-pannel')
  parent.innerHTML = ""
  
  // 取得網址與 json 
  let form = document.forms[0]
  let description = form.elements["description"].value
  let place = form.elements["location"].value
  let fullTime = form.elements["full_time"].checked  //true or false

  let paramsString = ""
  let searchParams = new URLSearchParams(paramsString);
  let el1 = searchParams.append("description", description)
  let el2 = searchParams.set("location", place)
  // let el3 = searchParams.set("full_time", fullTime)
  console.log(searchParams.toString())
  let url = `https://still-spire-37210.herokuapp.com/positions.json?${searchParams.toString()}`

  console.log(url)

  // 將取得的資料印在畫面上
  axios.get(url)
     .then(function(resp){
      let searchResults = resp.data
      
      
      let showResults = searchResults.map(function(result){
        let resultUrl = result.url
        let resultTitle = result.title
        let resultLocation = result.location

        
        let tr = document.createElement('tr')
        let parent = document.getElementById('job-pannel')
        let fragement = document.createDocumentFragment();
  
        tr.innerHTML = `<tr>
        <td>
          <h4><a href="${resultUrl}">${resultTitle}</a></h4>
          <p class="source">
          <a class="company" href="${resultUrl}">${resultLocation}</a>
          –
          <strong class="fulltime">Full Time</strong>
          </p>
        </td>
        <td class="meta">
          <span class="location">${resultLocation}</span>
        </td>
        </tr>`
        fragement.appendChild(tr);
        parent.appendChild(fragement);
        
      })
     })
}

