# 🚀 PANDUAN DEPLOY - Portofolio Uvia Farhan Kumila

## Metode 1: GitHub Pages (Paling Mudah) ⭐

GitHub Pages adalah layanan hosting gratis dari GitHub yang sempurna untuk portfolio.

### Step 1: Enable GitHub Pages

1. Buka repository Anda: https://github.com/hallohan805-max/Portofolio-Uvia-Farhan-Kumila
2. Klik tab **Settings** (⚙️)
3. Di sidebar kiri, pilih **Pages**
4. Pada bagian "Source", pilih:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Klik **Save**

### Step 2: Tunggu Deployment

- GitHub akan memproses selama 1-5 menit
- Akan ada notifikasi hijau: "Your site is live at..."
- URL akan menjadi: `https://hallohan805-max.github.io/Portofolio-Uvia-Farhan-Kumila/`

### Step 3: Verifikasi

- Buka URL di browser
- Portofolio Anda sudah online! 🎉

---

## Metode 2: Menggunakan Git Cli (Local Setup)

Jika ingin mengontrol deployment dari terminal:

### Instalasi Git

**Windows & Mac:**
1. Download dari https://git-scm.com/
2. Jalankan installer dan ikuti langkah-langkah

**Ubuntu/Linux:**
```bash
sudo apt-get install git
```

### Configure Git

```bash
git config --global user.name "hallohan805-max"
git config --global user.email "hallohan805@gmail.com"
```

### Clone Repository

```bash
git clone https://github.com/hallohan805-max/Portofolio-Uvia-Farhan-Kumila.git
cd Portofolio-Uvia-Farhan-Kumila
```

### Edit & Commit

```bash
# Edit file index.html atau file lainnya

# Lihat perubahan
git status

# Tambahkan file
git add .

# Commit perubahan
git commit -m "Update portofolio - tambah pengalaman baru"

# Push ke GitHub
git push origin main
```

---

## Metode 3: Custom Domain (Domain Sendiri)

Jika ingin menggunakan domain custom seperti `www.uviafarhankumila.com`:

### Step 1: Daftarkan Domain

- Beli domain di: Namecheap, GoDaddy, atau Registrar lainnya
- Catat nameserver atau DNS settings

### Step 2: Konfigurasi DNS

Di panel DNS provider Anda, tambahkan records:

```
Type: CNAME
Name: www
Value: hallohan805-max.github.io
```

atau

```
Type: A
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### Step 3: GitHub Pages Settings

1. Buka Settings → Pages
2. Di "Custom domain", masukkan: `www.uviafarhankumila.com`
3. Centang "Enforce HTTPS"
4. Klik Save

**Tunggu 24 jam** agar DNS propagate sepenuhnya.

---

## Metode 4: Netlify (Alternative Gratis)

Alternatif lain dengan fitur lebih canggih:

### Step 1: Daftar Netlify

1. Kunjungi https://www.netlify.com/
2. Klik "Sign Up" → Pilih "GitHub"
3. Authorize Netlify

### Step 2: Deploy Repository

1. Klik "New site from Git"
2. Pilih GitHub → Select `Portofolio-Uvia-Farhan-Kumila`
3. Build settings biarkan kosong (tidak ada build process)
4. Klik "Deploy site"

### Step 3: Selesai!

- Netlify otomatis assign URL: `[random-name].netlify.app`
- Setiap push ke GitHub, Netlify auto-deploy
- Bisa customize domain di settings

---

## Metode 5: Vercel (Alternative Gratis)

Mirip Netlify, tapi lebih cepat:

### Step 1: Daftar Vercel

1. Kunjungi https://vercel.com/
2. Klik "Sign Up" → "Continue with GitHub"
3. Authorize Vercel

### Step 2: Import Project

1. Klik "New Project"
2. Pilih repository `Portofolio-Uvia-Farhan-Kumila`
3. Klik "Import"
4. Biarkan settings default
5. Klik "Deploy"

### Step 3: Live!

- URL: `[project-name].vercel.app`
- Auto-deploy setiap ada push ke GitHub

---

## Troubleshooting

### ❌ Pages tidak muncul setelah 10 menit

**Solusi:**
1. Pastikan repository **PUBLIC** (bukan private)
2. Pastikan file `index.html` ada di root folder
3. Check Settings → Pages, pilih `main` branch
4. Hard refresh: `Ctrl+Shift+R` (Windows) atau `Cmd+Shift+R` (Mac)

### ❌ Gambar/CSS tidak muncul

**Penyebab:** Path relatif salah

**Solusi:**
- Pastikan semua link ke CSS/JS menggunakan path relatif
- Contoh: `<link rel="stylesheet" href="styles.css">`
- Jangan gunakan `/styles.css` (leading slash)

### ❌ Domain custom tidak bekerja

**Solusi:**
1. Tunggu 24-48 jam DNS propagate
2. Check DNS propagation: https://www.whatsmydns.net/
3. Pastikan CNAME record benar di DNS provider

---

## Tips Maintenance

### Update Konten Reguler

```bash
# Edit file
vim index.html

# Commit & push
git add index.html
git commit -m "Update konten portofolio"
git push origin main
```

### Backup Lokal

```bash
# Pull latest dari GitHub
git pull origin main
```

### Check Status

```bash
git status
git log --oneline
```

---

## Checklist Deployment

- [ ] Repository dibuat
- [ ] File `index.html`, `README.md`, `package.json` ada
- [ ] Repository di-set ke **PUBLIC**
- [ ] GitHub Pages enabled di Settings
- [ ] Custom domain dikonfigurasi (optional)
- [ ] HTTPS enabled
- [ ] URL live di-test di browser
- [ ] Bagikan ke LinkedIn & social media

---

## URLs untuk Portofolio Anda

### GitHub Pages (Default)
```
https://hallohan805-max.github.io/Portofolio-Uvia-Farhan-Kumila/
```

### GitHub Repository
```
https://github.com/hallohan805-max/Portofolio-Uvia-Farhan-Kumila
```

### LinkedIn (untuk link di profile)
```
https://linkedin.com/in/uvia-farhan-kumila
```

---

## Support & Resources

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Docs:** https://vercel.com/docs
- **DNS Checker:** https://www.whatsmydns.net/
- **HTML Validator:** https://validator.w3.org/

---

## Selamat! 🎉

Portofolio Anda sekarang **LIVE** dan bisa diakses dari mana saja!

**Next Steps:**
1. ✅ Share link ke LinkedIn
2. ✅ Tambahkan ke email signature
3. ✅ Bagikan ke portfolio website (seperti Behance, dribbble)
4. ✅ Update konten secara berkala
5. ✅ Monitor analytics (Google Analytics - optional)

---

**Created:** July 2026  
**Last Updated:** July 2026  
**Status:** Ready to Deploy 🚀
