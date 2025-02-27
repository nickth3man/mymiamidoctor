# Storage Cleanup Script for MyMiamiDoctor Project
# This script removes unnecessary files identified during the storage analysis

Write-Host "Starting storage cleanup process..." -ForegroundColor Yellow

# Function to safely delete a file or directory
function SafeDelete {
    param (
        [string]$path,
        [string]$description
    )
    
    if (Test-Path -Path $path) {
        Write-Host "Deleting $description at $path" -ForegroundColor Cyan
        try {
            if ((Get-Item $path) -is [System.IO.DirectoryInfo]) {
                Remove-Item -Path $path -Recurse -Force
            } 
            else {
                Remove-Item -Path $path -Force
            }
            Write-Host "Successfully deleted" -ForegroundColor Green
        } 
        catch {
            Write-Host "Failed to delete: $_" -ForegroundColor Red
        }
    } 
    else {
        Write-Host "$description at $path not found, skipping" -ForegroundColor Yellow
    }
}

# 1. Duplicate Files
Write-Host "Removing duplicate files..." -ForegroundColor Yellow
SafeDelete -path "styles/forensic-findings.md" -description "Duplicate forensic findings file"

# 2. Test and Example Pages
Write-Host "Removing test and example pages..." -ForegroundColor Yellow
SafeDelete -path "app/accessibility-test" -description "Accessibility test page"
SafeDelete -path "app/browser-compatibility" -description "Browser compatibility test page"
SafeDelete -path "app/component-testing" -description "Component testing hub page"
SafeDelete -path "app/form-example" -description "Basic form example page"
SafeDelete -path "app/layout-example" -description "Layout example page"
SafeDelete -path "app/responsive-test" -description "Responsive design test page"
SafeDelete -path "app/typography-example" -description "Typography example page"
SafeDelete -path "app/components" -description "Component showcase page"

# 3. Temporary or Backup Files
Write-Host "Removing temporary or backup files..." -ForegroundColor Yellow
SafeDelete -path "app/page.tsx.new" -description "Backup or corrupted page file"

# 4. Redundant Configuration
Write-Host "Removing redundant configuration files..." -ForegroundColor Yellow
SafeDelete -path "styles/mymiamidoctor.code-workspace" -description "Misplaced VS Code workspace file"

# 5. Duplicate Memory Bank
Write-Host "Removing duplicate memory bank..." -ForegroundColor Yellow
SafeDelete -path "roo-code-memory-bank" -description "Template/reference memory bank directory"

# Summary
Write-Host "Storage cleanup completed!" -ForegroundColor Green
Write-Host "If you encounter any issues after cleanup, you can restore files from version control." -ForegroundColor Yellow