// write your code here
document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Fetch ramen data
    fetch('http://localhost:3000/ramens')
      .then(response => response.json())
      .then(ramens => {
        // Step 2: Update the DOM with ramen images
        const ramenMenu = document.getElementById('ramen-menu');
        ramens.forEach(ramen => {
          const img = document.createElement('img');
          img.src = ramen.image;
          img.alt = ramen.name;
          img.addEventListener('click', () => showRamenDetails(ramen));
          ramenMenu.appendChild(img);
        });
      });
  });

  function showRamenDetails(ramen) {
    const detailImage = document.querySelector('.detail-image');
    const nameElement = document.querySelector('.name');
    const restaurantElement = document.querySelector('.restaurant');
    const ratingDisplay = document.getElementById('rating-display');
    const commentDisplay = document.getElementById('comment-display');
  
    detailImage.src = ramen.image;
    nameElement.textContent = ramen.name;
    restaurantElement.textContent = ramen.restaurant;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
  }

  document.getElementById('new-ramen').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const newName = document.getElementById('new-name').value;
    const newRestaurant = document.getElementById('new-restaurant').value;
    const newImage = document.getElementById('new-image').value;
    const newRating = document.getElementById('new-rating').value;
    const newComment = document.getElementById('new-comment').value;
  
    // Create a new ramen object
    const newRamen = {
      name: newName,
      restaurant: newRestaurant,
      image: newImage,
      rating: newRating,
      comment: newComment
    };
  
    // Update the DOM with the new ramen
    const ramenMenu = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = newImage;
    img.alt = newName;
    img.addEventListener('click', () => showRamenDetails(newRamen));
    ramenMenu.appendChild(img);
  
    // Clear the form fields
    document.getElementById('new-ramen').reset();
  });
  