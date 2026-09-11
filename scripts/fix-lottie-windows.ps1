# Run from project root:  powershell -ExecutionPolicy Bypass -File scripts/fix-lottie-windows.ps1
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $root

Write-Host "Downloading latest hero files from GitHub dev branch..."

$base = "https://raw.githubusercontent.com/akshayjain19/nursery/dev"
New-Item -ItemType Directory -Force -Path "components" | Out-Null

Invoke-WebRequest -Uri "$base/components/HeroPlant.tsx" -OutFile "components\HeroPlant.tsx"
Invoke-WebRequest -Uri "$base/components/Hero.tsx" -OutFile "components\Hero.tsx"

Write-Host "Installing lottie-react..."
npm install lottie-react@^3.1.2

Write-Host ""
Write-Host "Done. Check your Lottie file exists:"
Write-Host "  public\lottie\hero-plant.json"
Write-Host ""
Write-Host "Then run:  npm run dev"
Write-Host "Hard refresh browser: Ctrl+Shift+R"
