/*// Redirect to a specific URL after a specified time (in milliseconds)
function redirect(url, delay) {
    setTimeout(function() {
        window.location.href = url;
    }, delay);
}

// Example usage: Redirect to "https://example.com" after 5 seconds
redirect("https://example.com", 50); // 5000 milliseconds = 5 seconds
*/

const githubUrl = 'https://rawcdn.githack.com/noobromon/live.notice/5208b24564e0003ce94b3bc0337f95623dd7830a/notice.txt';
    const marqueeElement = document.getElementById('githubMarquee');

    fetch(githubUrl)
      .then(response => response.text())
      .then(data => {
        marqueeElement.innerText = data;
      })
      .catch(error => console.error('Error fetching data from GitHub:', error));
