@echo off
echo ========================================================
echo Enviando alteracoes do IMPACTA+ para o GitHub...
echo ========================================================
echo.
call "%~dp0git.bat" push origin main
echo.
pause
