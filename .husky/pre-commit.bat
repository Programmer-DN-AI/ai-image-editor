@echo off
setlocal

REM Ensure npm is available and run lint-staged
call npm exec lint-staged

set EXITCODE=%ERRORLEVEL%
endlocal & exit /b %EXITCODE%


