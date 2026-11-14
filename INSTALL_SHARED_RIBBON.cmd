@echo off
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0INSTALL_SHARED_RIBBON.ps1"
if errorlevel 1 (echo Installation stopped; inspect error above.)
pause
