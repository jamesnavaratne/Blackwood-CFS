@echo off
setlocal
cd /d "%~dp0\.."

python tools\rebuild_directions_hydrants.py --geocode-missing
if errorlevel 1 (
  echo.
  echo Hydrants rebuild failed. Check the error message above.
  pause
  exit /b 1
)

python tools\rebuild_inventory_from_excel.py --write-report
if errorlevel 1 (
  echo.
  echo Inventory rebuild failed. Check the error message above.
  pause
  exit /b 1
)
echo.
echo Rebuild complete.
echo Updated Directions hydrant links, inventory data, offline metadata and local rebuild reports.
pause
