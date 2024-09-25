console.log('- Resource successfully created.(201)');
  document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const userList = document.getElementById('user-list');
        data.users.forEach(user => {
          const userItem = document.createElement('div');
          userItem.textContent = `${user.name} - ${user.email}`;
          userList.appendChild(userItem);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
      console.log('Failed to fetch data: Authentication is required (401).');
});
  document.addEventListener('DOMContentLoaded', function() {
    const userData = [
      //{name: 'Tommy', email: 'tommy@example.com'}
    ];
    localStorage.setItem('users', JSON.stringify(userData));
      const storedData = localStorage.getItem('users');
    if (storedData) {
      try{
      const users = JSON.parse(storedData);
      const userList = document.getElementById('user-list');
      if (!userList) {
        console.error('Element with ID "user-list" not found,');
        return;
      }
      if (Array.isArray(users)) {
      users.forEach(user => {  
        const userItem = document.createElement('div');
        userItem.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(userItem);
      });
    }else{
      console.error('Stored data is not an array:', users);
    }
    }catch (error) {
      console.error('Error parsing stored data', error);
    }
  }
    console.log('Script execution complete.');
  });
  document.addEventListener('mousemove', (event) => {
    const pupil = document.querySelector('.pupil');
    const eyeContainer = document.querySelector('.loader__eyes');
    
    const eyeRect = eyeContainer.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = event.clientX - eyeCenterX;
    const deltaY = event.clientY - eyeCenterY;
    
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(15, Math.sqrt(deltaX * deltaX + deltaY * deltaY));
    
    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;
    
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});
