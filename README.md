# Angular EEL

Angular CLI Version: 16.1.8

## Startup

```
ng serve
python main.py dev
```

## Further Instructions
Install and activate VE:

```
py -m venv .venv
.venv/Scripts/Activate.ps1
OR
run venv.bat (Requirements install not required)
.venv/Scripts/Activate.ps1
```

To deactivate VE:

```
deactivate
```


## Python Requirements
Install Requirments:

```
pip install -r requirements.txt
```

Update Requirments:

```
pip freeze > requirements.txt
```


## Build and Packaging
Build Prod:

```
ng build
```

Convert to Exe:

```
npm run dist
```