@echo off
echo Mengkonversi Excel ke products.js...
python excel_to_products.py
if %errorlevel% equ 0 (
    echo.
    echo SELESAI! products.js sudah diupdate.
) else (
    echo.
    echo ERROR! Cek apakah products_data.xlsx ada di folder ini.
)
pause
