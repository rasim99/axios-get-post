let dataBtn=document.querySelector(".btn-getdata")
dataBtn.addEventListener("click",function() {                                           ///////////get request
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
        console.log(res.data[1].userId);
        let mBody=this.nextElementSibling.firstElementChild.firstElementChild.lastElementChild
        mBody.firstElementChild.innerText='UserId:' + res.data[1].userId;
        mBody.firstElementChild.nextElementSibling.innerText='Id:' + res.data[1].id;

        mBody.lastElementChild.innerText='Body:' + res.data[1].body;
        mBody.lastElementChild.previousElementSibling.innerText='Title:' + res.data[1].title;

        // console.log(mBody.firstElementChild);
    })
})

let dataBtnPost=document.querySelector(".btn-postdata")
dataBtnPost.addEventListener("click",function() {
    axios({                                                                               ///////////post request
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
          firstName: 'Chejki',
          lastName: 'Chungpui',
          title: ' Dev',
          body: 'FullStack Dev senior lev',
          userId: '123456'
        }
      }).then(res=>{
        console.log(res.data);
        let mBody=this.nextElementSibling.firstElementChild.firstElementChild.lastElementChild
        mBody.firstElementChild.innerText='FirstName:' + res.data.firstName;
         mBody.firstElementChild.nextElementSibling.innerText='LastName:' + res.data.lastName;

        mBody.lastElementChild.innerText='Body:' + res.data.body;
        mBody.lastElementChild.previousElementSibling.innerText='Title:' + res.data.title;
    });
})




// axios.post('https://jsonplaceholder.typicode.com/posts', {name:"ad"}).then(response=>console.log(response.data))

  