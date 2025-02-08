document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("instagram-toggle").addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("instagram-options").classList.toggle("show");
    });
  });
  
// analytics.js
(function() {
  var gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-5V00F9RQS5";
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", "G-5V00F9RQS5");
})();

// Instagramリンクボタンがクリックされたとき
document.getElementById('instagram-toggle').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'Social Links',
        'event_label': 'Instagram Toggle'
    });
});

// LinkedInリンクボタンがクリックされたとき
document.querySelectorAll('.social-link')[0].addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'Social Links',
        'event_label': 'LinkedIn'
    });
});

// YouTubeリンクボタンがクリックされたとき
document.querySelectorAll('.social-link')[1].addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'Social Links',
        'event_label': 'YouTube'
    });
});

// その他のボタンにも同様にイベントを追加できます
