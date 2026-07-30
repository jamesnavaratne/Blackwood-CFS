@echo off
setlocal
cd /d "%~dp0\.."

REM Rebuild Directions hydrant links from preserved official coordinates first.
REM In test mode this only checks the five approved test streets.
python tools\rebuild_directions_hydrants.py --geocode-missing
if errorlevel 1 (
  echo.
  echo Hydrants rebuild failed. Check the error message above.
  pause
  exit /b 1
)

REM Low-conflict normal inventory rebuild.
python tools\rebuild_inventory_from_excel.py
if errorlevel 1 (
  echo.
  echo Inventory rebuild failed. Check the error message above.
  pause
  exit /b 1
)
echo.
echo Rebuild complete.
echo Updated Directions hydrant links, index.html, data\inventory.json and offline metadata.
pause
