import { videos, shorts } from "./data.js";

const videosGrid = document.getElementById('videos-grid');
const shortsRow = document.getElementById('shorts');


videos.map(vid => {
  
  const videoLink = document.createElement('a');
  videoLink.classList.add('video-card-link');
  videoLink.setAttribute('href', vid.link);

  const videoCard = document.createElement('div');
  videoCard.classList.add('video-card');

  const videoThumbnail = document.createElement('div');
  videoThumbnail.classList.add('video-thumbnail');

  const thumbnailImg = document.createElement('img');
  thumbnailImg.setAttribute('src', vid.thumbnail);
  thumbnailImg.setAttribute('alt', "Miniature de la vidéo");

  const videoDetails = document.createElement('div');
  videoDetails.classList.add('video-details');

  const videoChannelImg = document.createElement('div');
  videoChannelImg.classList.add('video-channel-img');

  const channelImg = document.createElement('img');
  channelImg.setAttribute('src', vid.channelPic);
  channelImg.setAttribute('alt', "Image de la chaîne youtube");

  const videoInfos = document.createElement('div');
  videoInfos.classList.add('video-infos');

  const videoTitle = document.createElement('p');
  videoTitle.classList.add('video-title');
  videoTitle.innerText = vid.title;

  const videoChannelName = document.createElement('p');
  videoChannelName.classList.add('video-channel-name');
  videoChannelName.innerText = vid.channelName;

  const videoStats = document.createElement('p');
  videoStats.classList.add('video-stats');
  videoStats.innerText = vid.stats;

  const videoSettingsIcon = document.createElement('div');
  videoSettingsIcon.classList.add('video-settings-icon');

  const settingsIcon = document.createElement('i');
  settingsIcon.classList.add('fa-solid');
  settingsIcon.classList.add('fa-ellipsis-vertical');


  videosGrid.appendChild(videoLink);
  videoLink.appendChild(videoCard);
  videoCard.appendChild(videoThumbnail);
  videoThumbnail.appendChild(thumbnailImg);

  videoCard.appendChild(videoDetails);
  videoDetails.appendChild(videoChannelImg);
  videoChannelImg.appendChild(channelImg);

  videoDetails.appendChild(videoInfos);
  videoInfos.appendChild(videoTitle);
  videoInfos.appendChild(videoChannelName);
  videoInfos.appendChild(videoStats);

  videoDetails.appendChild(videoSettingsIcon);
  videoSettingsIcon.appendChild(settingsIcon);

})



shorts.map(short => {
  
  const shortLink = document.createElement('a');
  shortLink.classList.add('short-card-link');
  shortLink.setAttribute('href', short.link);

  const shortCard = document.createElement('div');
  shortCard.classList.add('short-card');

  const shortThumbnail = document.createElement('div');
  shortThumbnail.classList.add('short-thumbnail');

  const shortThumbnailImg = document.createElement('img');
  shortThumbnailImg.setAttribute('src', short.picture);
  shortThumbnailImg.setAttribute('alt', "Miniature du short");

  const shortDetails = document.createElement('div');
  shortDetails.classList.add('short-details');

  const shortInfos = document.createElement('div');
  shortInfos.classList.add('short-infos');

  const shortTitle = document.createElement('p');
  shortTitle.classList.add('short-title');
  shortTitle.innerText = short.title;

  const shortSettingsIcon = document.createElement('i');
  shortSettingsIcon.classList.add('fa-solid');
  shortSettingsIcon.classList.add('fa-ellipsis-vertical');

  const shortStatsDiv = document.createElement('div');

  const shortStats = document.createElement('p');
  shortStats.classList.add('short-stats');
  shortStats.innerText = short.stats;




  shortsRow.appendChild(shortLink);
  shortLink.appendChild(shortCard);
  shortCard.appendChild(shortThumbnail);
  shortThumbnail.appendChild(shortThumbnailImg);
  
  shortCard.appendChild(shortDetails);
  shortDetails.appendChild(shortInfos);
  shortInfos.appendChild(shortTitle);
  shortInfos.appendChild(shortSettingsIcon);

  shortDetails.appendChild(shortStatsDiv);
  shortStatsDiv.appendChild(shortStats);

})



