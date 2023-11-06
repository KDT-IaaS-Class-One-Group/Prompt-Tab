axios.get('./data.json')
  .then(response => {
    const data = response.data;

    document.getElementById('logo').textContent = data.header.logo;
    document.getElementById('status').textContent = data.mainContent.userInfo.status;
    document.getElementById('avatar').textContent = data.mainContent.userInfo.avatar;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });