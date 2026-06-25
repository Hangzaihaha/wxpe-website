@echo off
title WXPE Website Dev Server

cd /d "C:\Users\henry\Documents\Codex\2026-06-25\you-are-a-world-class-web"

echo.
echo ===============================================
echo  WXPE Website Local Preview
echo ===============================================
echo.
echo Project directory:
echo %CD%
echo.
echo Preview URL:
echo http://localhost:3000/
echo.
echo Keep this window open while previewing the website.
echo Press Ctrl+C to stop the dev server.
echo.

start "" /min cmd /c "timeout /t 5 /nobreak >nul & start http://localhost:3000/"

where pnpm >nul 2>nul
if not errorlevel 1 (
  echo Starting with: pnpm dev
  echo.
  pnpm dev
) else (
  where npm >nul 2>nul
  if not errorlevel 1 (
    echo pnpm was not found. Starting with: npm run dev
    echo.
    npm run dev
  ) else (
    echo ERROR: Neither pnpm nor npm was found.
    echo.
    echo Please install Node.js, then double-click this file again.
    echo https://nodejs.org/
    echo.
  )
)

echo.
echo The dev server stopped or failed.
echo If there is an error above, fix it and double-click this file again.
echo.
pause
