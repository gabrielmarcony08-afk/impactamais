@echo off
echo Iniciando o servidor dev do IMPACTA+ e abrindo no Google Chrome...
start "" cmd /c "timeout /t 4 /nobreak >nul & start chrome http://localhost:3000"
rem vite direto (sem --open) para nao abrir duas abas
call npx vite --host
