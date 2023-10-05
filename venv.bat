@echo off
rem Erstelle die virtuelle Umgebung
python -m venv .venv

python -m eel main.py dist/angular-eel --exclude win32com --exclude numpy --exclude cryptography --onefile

rem Aktiviere die virtuelle Umgebung
call .venv\Scripts\activate

rem Installiere die Module aus der requirements.txt-Datei
pip install -r requirements.txt

rem Deaktiviere die virtuelle Umgebung (optional)
deactivate