document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header-nav");
    if(header) {
        header.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-3">
            <div class="container">
                <a class="navbar-brand text-logo" href="index.html">Chef Tingeling</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Start</a></li>
                        <li class="nav-item"><a class="nav-link" href="meny.html">Meny</a></li>
                        <li class="nav-item"><a class="nav-link" href="om-oss.html">Om Chef Strid</a></li>
                        <li class="nav-item"><a class="nav-link" href="Hitta-oss.html">Boka Bord</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }

    const footer = document.getElementById("main-footer");
    if(footer) {
        footer.innerHTML = `
        <footer class="py-5" style="background-color: #000; border-top: 1px solid #d4af37;">
            <div class="container text-center">
                <h2 class="text-logo mb-4" style="font-size: 1.5rem;">Chef Tingeling</h2>
                <p>Storgatan 12, Stockholm | Följ vår resa på Instagram</p>
                <p class="small text-muted mt-4">© 2026 Projekt TEI23A | Hamooooodi</p>
            </div>
        </footer>`;
    }
});