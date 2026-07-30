@echo off
setlocal
cd /d "%~dp0\.."

REM Low-conflict normal rebuild:
REM Updates index.html and data\inventory.json only.
REM Does not update timestamped report files unless you run the report BAT.
python tools\rebuild_inventory_from_excel.py
if errorlevel 1 (
  echo.
  echo Rebuild failed. Check the error message above.
  pause
  exit /b 1
)
echo.
echo Rebuild complete.
echo Updated index.html and data\inventory.json
pause
