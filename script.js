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
gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-1RTEK54519";
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
window.gtag = gtag;

gtag("js", new Date());
gtag("config", "G-1RTEK54519");
})();

// SNSリンクボタンのクリックイベントをそれぞれトラッキング
document.querySelectorAll('.social-link').forEach(function(button) {
    button.addEventListener('click', function(event) {
        let eventLabel = '';

        
        // Instagramの選択肢（2つのInstagramリンク）
        if (button.href.includes('instagram.com/kay_codes')) {
            eventLabel = 'Instagram (coding)';
        } else if (button.href.includes('instagram.com/kana.06x_x')) {
            eventLabel = 'Instagram (private)';
        }
        // LinkedInリンク
        else if (button.href.includes('linkedin.com')) {
            eventLabel = 'LinkedIn';
        }
        // YouTubeリンク
        else if (button.href.includes('youtube.com')) {
            eventLabel = 'YouTube';
        }
        // その他のInstagramリンク
        else if (button.href.includes('instagram.com')) {
            eventLabel = 'Instagram Link';
        }
        // Googleフォーム（Contactフォーム）
        else if (button.href.includes('docs.google.com')) {
            eventLabel = 'Contact Form';
        }
        // GitHub HOME
        else if (button.href.includes('https://github.com/kanamecode?tab=repositories')) {
            eventLabel = 'GitHub HOME';
        }
        // GitHub Project
        else if (button.href.includes('https://kanamecode.github.io/Photo-Booth-System/')) {
            eventLabel = 'GitHub Project';
        }
        else {
            // その他のリンクはテキストまたは画像altでラベル設定
            eventLabel = button.textContent.trim() || button.querySelector('img').alt;
        }

        // Google Analyticsにイベントを送信
        gtag('event', 'Button Click', {
    'event_category': 'LINKs',
    'event_label': eventLabel,
    'value': 1
});


    });
});
