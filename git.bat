@echo off
rem Usa o MinGit em %TEMP% se existir; senao usa o git instalado no sistema.
if exist "%TEMP%\mingit\cmd\git.exe" (
  "%TEMP%\mingit\cmd\git.exe" %*
) else (
  git %*
)
