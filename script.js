// ===== Certificate toggles =====
function toggleCert(id) {
    const cert = document.getElementById(id);
    if (!cert) return;
    cert.classList.toggle('show');
    if (cert.classList.contains('show')) {
        cert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function showimg1() { toggleCert('cert1'); }
function showimg2() { toggleCert('cert2'); }
function showimg3() { toggleCert('cert3'); }
function showimg4() { toggleCert('cert4'); }

// ===== Exit popup =====
function openExit() {
    window.open('Exit.html', '_blank', 'width=520,height=420');
}

// ===== PDF iframe fallback =====
(function initPdfFallback() {
    const iframe = document.querySelector('iframe[title="Resume PDF"]');
    const fallback = document.getElementById('pdfFallback');
    if (!iframe || !fallback) return;

    let loaded = false;
    iframe.addEventListener('load', function () { loaded = true; });
    setTimeout(function () {
        if (!loaded) fallback.style.display = 'block';
    }, 2500);
})();
