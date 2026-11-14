@echo off
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0INSTALL_SYSTEM_HOME.ps1"
if errorlevel 1 (
  echo.
  echo Installation was NOT completed. No changes should be committed until the issue is resolved.
)
echo.
pause
