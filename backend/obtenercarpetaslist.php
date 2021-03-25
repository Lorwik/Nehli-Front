<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
    $directorio = '../videos/'.$_GET[dir].'/';

    //¿Hemos recibido la ruta de un directorio?
    if (is_dir($directorio)) {
        //Si es asi lo abrimos
        if ($dh = opendir($directorio)) {
          //Recorremos todos los archivos
          while (($file = readdir($dh)) !== false) {
            //¿Es una carpeta?
            if (is_dir($directorio.$file) && $file!="." && $file!=".."){
              //solo si el archivo es una carpeta y distinto que "." y ".." y lo añadimos al array de carpetas
              $carpetaslist[] = $directorio.$file;
            }
          }
          closedir($dh);
        }
  
        //Ya tenemos la lista de todas las carpetas, ahora vamos a ir descartando las que no tienen archivo de video.
        for ($i = 0; $i < sizeof($carpetaslist); $i++){
          //Abrimos el directorio
          if ($dh = opendir($carpetaslist[$i])) {
            $videoencontrado = 0; //Bandera que nos marcara si encontro un archivo de video
            //Recorremos todos los archivos
            while (($file = readdir($dh)) !== false) {
              //¿El archivo actual es uno de video?
              if ((substr($file, -4) == ".mkv") || (substr($file, -4) == ".mp4") || (substr($file, -4) == ".avi") || (substr($file, -4) == ".wmv") || (substr($file, -4) == ".webm")){
                //Si ya encontramos antes un archivo de video no hace falta anotarlo mas en el array
                if ($videoencontrado == 0) {
                  $carpetas[] = $carpetaslist[$i];
                  $videoencontrado = 1;
                }
              }
            }
          }
        }
    }else {
        $carpetas = "La ruta no es valida.";
    }
  
  $cad=json_encode($carpetas);
  echo $cad;
  header('Content-Type: application/json');
?>