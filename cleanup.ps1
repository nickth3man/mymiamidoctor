# Cleanup Script for MyMiamiDoctor Project
# Run this script when no Next.js processes are running

Write-Host "Stopping any running Node.js processes..." -ForegroundColor Yellow
Stop-Process -Name node -Force -ErrorAction SilentlyContinue

Write-Host "Waiting 3 seconds for processes to terminate..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

Write-Host "Attempting to remove redundant miamidoctor directory..." -ForegroundColor Yellow
Remove-Item -Path .\miamidoctor -Recurse -Force -ErrorAction SilentlyContinue

# Check if directory still exists
if (Test-Path -Path .\miamidoctor) {
    Write-Host "Some files could not be removed. You may need to restart your computer to release file locks." -ForegroundColor Red
    Write-Host "After restarting, run this script again to complete the cleanup." -ForegroundColor Red
} else {
    Write-Host "Cleanup completed successfully!" -ForegroundColor Green
} 