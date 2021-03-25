<?php 
	class DirecVideo implements \JsonSerializable {
		
		private $directorio;
		private $video = array();
		private $miniatura;
		private $tipo;
			
		public function __construct($dir, array $videos, $mini, $tip) {
			$this->directorio = $dir;
			$this->video = $videos;
			$this->miniatura = $mini;
			$this->tipo = $tip;
		}
	
		public function jsonSerialize() {
			return[
				$this->tipo => [
					'directorio' => $this->directorio,
					'videos' => $this->video,
					'miniatura' => $this->miniatura
				]
			];
		}
	}
	
	//Llamamos a la funcion
	obtenerListadoDeCarpetas();

	//Lista todos los directorios y obtiene todos los archivos de video
	function obtenerListadoDeCarpetas(){
		
		$videodir = '../videos/';
		$tipos = ['Series', 'Peliculas', 'Peliculas-Animacion', 'Anime'];
		
		for ($j = 0; $j < sizeof($tipos); $j++){
			
			$directorio = $videodir.$tipos[$j].'/';
			
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
						$resultado[] = new DirecVideo($carpetaslist[$i], obtenerListadoDeVideos($carpetaslist[$i]), obtenerMiniatura($carpetaslist[$i]), $tipos[$j]);
						
						$videoencontrado = 1;
					  }
					}
				  }
				}
			  }

			}
		}
		
		header('Content-Type: application/json');
		print_r(json_encode($resultado, JSON_PRETTY_PRINT));
	}

	//Funcion para obtener la lista de videos de un directorio
	function obtenerListadoDeVideos($directorio){
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
	  return $videos;
	}  

	//Function que busca en el directorio recibido por parametro si existe un archivo de imagen jpg
	function obtenerMiniatura($directorio){
	  if ($dh = opendir($directorio)) {
		while (($file = readdir($dh)) !== false) {
		  if ((substr($file, -4) == ".jpg")){
			return $directorio."/".$file;
		  }
		}
	  }
	  closedir($dh);
	}

?>
