
window.onload=function(){const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})}

function getVideos()
{
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCf1MSC41KpqI5fSbEix9M8Q&maxResults=10&order=viewCount&key=AIzaSyB2Fl_w8juYsX1pMhZr6lZZtCQf7bmu5zk")
    .then((result)=> {
        return result.json()
    }).then((data)=> {
        let videoContainer = document.querySelector(".media-scroller");
        let videos = data.items;
        for (video of videos) {
            console.log("the value is" + videoContainer.innerHTML)
            
            videoContainer.innerHTML += `
            <a target = '_blank' href="https://www.youtube.com/watch?v=${video.id.videoId}">
            <div class="media-elements">
            <img class = "tn" src = "${video.snippet.thumbnails.high.url}")>
            <div class = "tn_overlay">
            <h3 class="tn_title">${video.snippet.title}</h3>
            <p class = "tn_desc">${video.snippet.description}</p>
            </div>
            </div>
            </a>
            
            `
        }
    })}

getVideos();
