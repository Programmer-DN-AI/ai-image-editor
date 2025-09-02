@echo off
setlocal

REM %1 is the path to the commit message file
call npm exec commitlint -- --edit %1

set EXITCODE=%ERRORLEVEL%
endlocal & exit /b %EXITCODE%


