document.addEventListener("DOMContentLoaded", function () {
  // Instagramオプションの表示/非表示
  document.getElementById("instagram-toggle").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("instagram-options").classList.toggle("show");
  });

  // SNSボタンのクリックイベントトラッキング
  document.querySelectorAll('.social-link').forEach(function(button) {
    button.addEventListener('click', function() {
      const buttonUrl = button.href; // リンク先URLを取得

      // ボタンのURLに基づいてクリックされたボタンを識別
      if (buttonUrl.includes("linkedin.com")) {
        trackButtonClick('LinkedIn Button');
      } else if (buttonUrl.includes("youtube.com")) {
        trackButtonClick('YouTube Button');
      } else if (buttonUrl.includes("instagram.com")) {
        trackButtonClick('Instagram Button');
      }
    });
  });
});

// Google Analytics イベントトラッキング
function trackButtonClick(buttonName) {
  gtag('event', 'click', {
    'event_category': 'button',
    'event_label': buttonName,
    'value': 1
  });
}

// analytics.js（Google Analyticsの設定）
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
