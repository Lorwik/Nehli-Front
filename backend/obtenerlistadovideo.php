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
        //¿El archivo actual es uno de video?

        if ((substr($file, -4) == ".mkv") || (substr($file, -4) == ".mp4") || (substr($file, -4) == ".avi") || (substr($file, -4) == ".wmv") || (substr($file, -4) == ".webm")){
          $videos[] = $file;
        }
      }
      closedir($dh);
    }
  }
  
  $cad=json_encode(Carpetas.$carpetas.Videos.$videos);
  echo $cad;
  header('Content-Type: application/json');
?>