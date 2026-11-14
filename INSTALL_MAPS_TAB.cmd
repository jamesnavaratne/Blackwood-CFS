@echo off
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0INSTALL_MAPS_TAB.ps1"
if errorlevel 1 (
  echo.
  echo INSTALLATION STOPPED - please do not push yet. Share the error with ChatGPT.
  pause
  exit /b 1
)
echo.
echo Press any key to close, then review changes in GitHub Desktop.
pause >nul
