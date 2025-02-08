
// analytics.js
(function() {
var gtagScript = document.createElement("script");
gtagScript.async = true;
gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-K1VC5MW2X8";
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
window.gtag = gtag;

gtag("js", new Date());
gtag("config", "G-K1VC5MW2X8");
})();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("instagram-toggle").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("instagram-options").classList.toggle("show");
  });
});

  // LinkedInリンクボタンがクリックされたとき
  document.querySelector('.social-link[href="https://linkedin.com/in/kaname-w-73799734a"]').addEventListener('click', function() {
      gtag('event', 'click', {
          'event_category': 'Social Links',
          'event_label': 'LinkedIn'
      });
  });

  // YouTubeリンクボタンがクリックされたとき
  document.querySelector('.social-link[href="https://www.youtube.com/@RobotchallengebyH.S.student"]').addEventListener('click', function() {
      gtag('event', 'click', {
          'event_category': 'Social Links',
          'event_label': 'YouTube'
      });
  });

  // Instagramの追加オプションリンク（coding）クリック
  document.querySelector('.social-link[href="https://www.instagram.com/kay_codes"]').addEventListener('click', function() {
      gtag('event', 'click', {
          'event_category': 'Instagram Options',
          'event_label': 'Instagram Coding'
      });
  });

  // Instagramの追加オプションリンク（private）クリック
  document.querySelector('.social-link[href="https://www.instagram.com/kana.06x_x"]').addEventListener('click', function() {
      gtag('event', 'click', {
          'event_category': 'Instagram Options',
          'event_label': 'Instagram Private'
      });
  });

  // Contactリンクボタンがクリックされたとき
  document.querySelector('.social-link[href="https://docs.google.com/forms/d/e/1FAIpQLSfdHYBuqtSKHc8w_M9laIi5jvYeuahvczxdw-ZBggr0nQp4Uw/viewform"]').addEventListener('click', function() {
      gtag('event', 'click', {
          'event_category': 'Social Links',
          'event_label': 'Contact'
      });
  });

  // GitHubリンクボタンがクリックされたとき
  document.querySelector('.social-link[href="https://github.com/kanamecode?tab=repositories"]').addEventListener('click', function() {
      gtag('event', 'click', {
          'event_category': 'Projects',
          'event_label': 'GitHub'
      });
  });

  // プロジェクトのホームページリンクがクリックされたとき
  document.querySelector('.social-link[href="https://kanamecode.github.io/Photo-Booth-System/"]').addEventListener('click', function() {
      gtag('event', 'click', {
          'event_category': 'Projects',
          'event_label': 'Project Homepage'
      });
  });
});
