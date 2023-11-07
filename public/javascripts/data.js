axios.get('/data.json')
  .then(response => {
    const data = response.data;

    document.getElementById('logo').innerText = data.header.logo;
    document.getElementById('siteName').innerText = data.header.siteName;
    document.getElementById('name').innerText = data.mainContent.userInfo.name;
    document.getElementById('status').innerText = data.mainContent.userInfo.status;
    document.getElementById('avatar').innerText = data.mainContent.userInfo.avatar;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  }); 