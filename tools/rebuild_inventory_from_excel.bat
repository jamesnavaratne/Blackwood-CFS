@echo off
setlocal
cd /d "%~dp0\.."
python tools\rebuild_inventory_from_excel.py
if errorlevel 1 (
  echo.
  echo Rebuild failed. Check the error message above.
  pause
  exit /b 1
)
echo.
echo Rebuild complete.
echo Updated index.html, data\inventory.json, and INVENTORY_REBUILD_REPORT.md
pause
