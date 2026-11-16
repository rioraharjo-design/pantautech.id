@echo off
cd /d "%~dp0"
title Cari Gambar Pantau Tech
python cari_gambar.py --cek
echo.
choice /m "Lanjut cari gambarnya"
if errorlevel 2 goto selesai
python cari_gambar.py
:selesai
echo.
pause
