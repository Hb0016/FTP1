// Sample data for Valorant and Minecraft news
const valorantNews = [
    { title: "New Agent Revealed", content: "Riot Games has just revealed the newest agent coming to Valorant." },
    { title: "Patch Notes Update", content: "The latest patch brings balance changes and new skins." }
];

const minecraftNews = [
    { title: "Caves & Cliffs Update", content: "Mojang releases the highly anticipated Caves & Cliffs update." },
    { title: "New Mob Added", content: "A new mob called 'Warden' has been added to the game." }
];

// Function to display news
function displayNews(newsArray) {
    const newsSection = document.getElementById('news-section');
    newsSection.innerHTML = ''; // Clear previous news

    newsArray.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const title = document.createElement('h2');
        title.textContent = article.title;

        const content = document.createElement('p');
        content.textContent = article.content;

        newsItem.appendChild(title);
        newsItem.appendChild(content);

        newsSection.appendChild(newsItem);
    });
}

// Event listeners for tabs
document.getElementById('valorant-tab').addEventListener('click', function(event) {
    event.preventDefault();
    displayNews(valorantNews);
});

document.getElementById('minecraft-tab').addEventListener('click', function(event) {
    event.preventDefault();
    displayNews(minecraftNews);
});

// Default display Valorant news on page load
window.onload = function() {
    displayNews(valorantNews);
};