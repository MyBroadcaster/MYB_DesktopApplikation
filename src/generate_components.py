import os

# Liste der Verzeichnisse, in denen gesucht werden soll
verzeichnisse = ["app/components", "src/app/components/basic"]
pfad_ausschliessen = "app/components/basic"
for verzeichnis in verzeichnisse:
    for ordnername, unterordnerliste, dateienliste in os.walk(verzeichnis):
        if ordnername == pfad_ausschliessen:
            continue  # Überspringe das ausgeschlossene Verzeichnis
        else:
            if "basic_component.py" not in dateienliste:  # Überprüfe, ob die Datei bereits existiert
                for unterordner in unterordnerliste:
                    if unterordner != "basic":  # Überspringe die Erstellung für den "basic" Unterordner
                        # Erstelle den Dateinamen aus dem Namen des Unterordners
                        dateiname = f"{unterordner}_component.py"
                        dateipfad = os.path.join(ordnername, unterordner, dateiname)

                        if "__pycache__" not in str(dateipfad):
                            # Wenn die Datei nicht existiert, erstelle sie mit dem Standard-Import für eel
                            with open(dateipfad, "w") as datei:
                                datei.write("import eel\n\n")
                                datei.write("# Hier beginnt deine eel-Anwendung")