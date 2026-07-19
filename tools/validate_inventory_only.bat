@echo off
setlocal
cd /d "%~dp0\.."

python tools\rebuild_inventory_from_excel.py --check-only
if errorlevel 1 (
  echo.
  echo Validation failed. Fix the Excel issue above, then run this again.
  pause
  exit /b 1
)
echo.
echo Validation passed. No app files were changed.
pause
