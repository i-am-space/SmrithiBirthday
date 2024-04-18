const text = "BE NICE TO SMRITHI GUYS (she will cry)";
const delay = 100;

let index = 0;

function typeText(){
  if (index < text.length) {
    document.getElementById("blog-header").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, delay);
  }
}
document.addEventListener('DOMContentLoaded', function() {
    // Load likes count from localStorage or initialize to 0
    let likes = parseInt(localStorage.getItem('likes')) || 0;
    // Display initial likes count
    document.querySelector('.like-count').textContent = likes;
  
    // Load comments from localStorage or initialize to an empty array
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    function resetLocalStorage() {
      localStorage.removeItem('likes');
      localStorage.removeItem('comments');
      likes = 0;
      comments = [];
      document.querySelector('.like-count').textContent = likes;
      document.querySelector('.comment-list').innerHTML = '';
      localStorage.removeItem('likes2');
      localStorage.removeItem('comments2');
      likes = 0;
      comments = [];
      document.querySelector('.like-count2').textContent = likes;
      document.querySelector('.comment-list2').innerHTML = '';
    }
  
    // Update likes count and save to localStorage
    document.querySelector('.like-btn').addEventListener('click', function() {
      likes++;
      document.querySelector('.like-count').textContent = likes;
      localStorage.setItem('likes', likes);
    });
  
    // Handle comment submission
    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = document.getElementById('comment-text').value.trim();
        if (commentText !== '') {
          // Add new comment to the array
          comments.push(commentText);
          // Save updated comments array to localStorage
          localStorage.setItem('comments', JSON.stringify(comments));
      
          // Create a new comment element with a line break after the comment text
          const commentItem = document.createElement('li');
          commentItem.innerHTML = commentText + "<br>-----------------------------------------------------------------------------";
          document.querySelector('.comment-list').appendChild(commentItem);
      
          // Clear the comment input field
          document.getElementById('comment-text').value = '';
        }
      });
  
    // Display existing comments from localStorage
    comments.forEach(function(commentText) {
        const commentItem = document.createElement('li');
        commentItem.innerHTML = commentText + "<br>-----------------------------------------------------------------------------";
        document.querySelector('.comment-list').appendChild(commentItem);
    });
  
    document.getElementById('reset-btn').addEventListener('click', resetLocalStorage);
  });
  

window.onload = function (){
    typeText();
};