function getButter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Butter');
      }, 2000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Cold drinks');
      }, 1000);
    });
  }
  
  async function getItems() {
    try {
      const butter = await getButter();
      console.log(butter);
      const coldDrinks = await getColdDrinks();
      console.log(coldDrinks);
    } catch (error) {
      console.log(error);
    }
  }
  
  getItems();
  async function handlePromises() {
    const promises = [getButter(), getColdDrinks()];
    
    try {
      const [butter, coldDrinks] = await Promise.all(promises);
      console.log(butter);
      console.log(coldDrinks);
    } catch (error) {
      console.log(error);
    }
  }
  
  handlePromises();
  async function createPost(postData) {
    try {
      const response = await fetch('https://example.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function deletePost(postId) {
    try {
      const response = await fetch(`https://example.com/posts/${postId}`, {
        method: 'DELETE'
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  
  
  
  
  
  