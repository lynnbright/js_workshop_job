//目標一：取得一個新的 url
//步驟
//1. 取得欄位的值
//2. 將欄位的值放入 ${} 中

let submit = document.getElementById('submit')

 
submit.addEventListener('click',function(e){
  e.preventDefault();
  
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

  let url = `https://still-spire-37210.herokuapp.com/positions.json?${searchParams.toString()}`
  console.log(url)
  

  // 將取得的資料印在畫面上
  axios.get(url)
     .then(function(resp){
      let searchResults = resp.data
       
      searchResults.map(function(result){
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
     
})




