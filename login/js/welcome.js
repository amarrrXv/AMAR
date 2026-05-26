/* welcome.js — manajemen sesi login */

function getUser() {
    try { return JSON.parse(localStorage.getItem('quantix_user')); }
    catch(e) { return null; }
}

function goLogin() {
    window.location.href = 'login/index.html';
}

function doLogout() {
    localStorage.removeItem('quantix_user');
    updateAuthUI();
}

function updateAuthUI() {
    const user = getUser();
    const authArea = document.getElementById('authArea');
    if (!authArea) return;

    if (user) {
        authArea.innerHTML = `
            <div class="auth-user-row">
                <div class="auth-avatar">${user.nama ? user.nama.charAt(0).toUpperCase() : 'U'}</div>
                <span class="auth-username">${user.nama || user.email}</span>
                <button onclick="doLogout()" class="btn btn-ghost btn-sm">Keluar</button>
            </div>`;
    } else {
        authArea.innerHTML = `
            <button onclick="goLogin()" class="btn btn-primary">
                Masuk
            </button>`;
    }
}

document.addEventListener('DOMContentLoaded', updateAuthUI);
