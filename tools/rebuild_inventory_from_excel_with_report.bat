@echo off
setlocal
cd /d "%~dp0\.."

REM Optional report rebuild:
REM Also updates timestamped local report files.
python tools\rebuild_inventory_from_excel.py --write-report
if errorlevel 1 (
  echo.
  echo Rebuild failed. Check the error message above.
  pause
  exit /b 1
)
echo.
echo Rebuild complete.
echo Updated index.html, data\inventory.json, and local rebuild reports.
pause
