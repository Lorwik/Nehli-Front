<?php 
	class DirecVideo implements \JsonSerializable {
		
		private $tipo;
		private $datos = array();
			
		public function __construct($tip) {
			$this->tipo = $tip;
		}
		
		public function addDatos($dir, array $videos, $mini) {
			$this->datos[] = new Dato($dir, $videos, $mini);
		}
	
		public function jsonSerialize() {
			return[
				$this->tipo => $this->datos
			];
		}
	}
	
	class Dato {
		
		public $directorio;
		public $video = array();
		public $miniatura;
		
		public function __construct($dir, array $videos, $mini) {
			$this->directorio = $dir;
			$this->video = $videos;
			$this->miniatura = $mini;
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
			
			$resultado[] = new DirecVideo($tipos[$j]);
			
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
						$resultado[$j]->addDatos($carpetaslist[$i], obtenerListadoDeVideos($carpetaslist[$i]), obtenerMiniatura($carpetaslist[$i]), $tipos[$j]);
						
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