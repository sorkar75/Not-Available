/*// Redirect to a specific URL after a specified time (in milliseconds)
function redirect(url, delay) {
    setTimeout(function() {
        window.location.href = url;
    }, delay);
}

// Example usage: Redirect to "https://example.com" after 5 seconds
redirect("https://example.com", 50); // 5000 milliseconds = 5 seconds
*/

const overlayElement = document.getElementById('overlay');
const containerElement = document.getElementById('container');

// Fetching content from the first URL to populate the overlay
fetch('https://rawcdn.githack.com/noobromon/live.notice/5208b24564e0003ce94b3bc0337f95623dd7830a/notice.txt')
  .then(response => response.text())
  .then(data => {
    overlayElement.innerText = data.trim();
  })
  .catch(error => {
    console.error('Error fetching data from the first URL:', error);
    hideContainer();
  });

// Fetching content from the second URL to determine whether to show or hide the overlay
fetch('https://cdn.jsdelivr.net/gh/noobromon/Not-Available@live/File/file1/file/404/404.txt')
  .then(response => response.text())
  .then(data => {
    if (data.trim().toLowerCase() === "on") {
      overlayElement.style.display = "block";
    } else {
      hideContainer();
    }
  })
  .catch(error => {
    console.error('Error fetching data from the second URL:', error);
    hideContainer();
  });

function hideContainer() {
  overlayElement.style.display = "none";
  containerElement.style.display = "none";
}
