<?php
	class DirecVideo implements JsonSerializable {
		
		private $directorio;
		private $video = array();
		private $miniatura;
		
		public function __construct($dir, array $vid, $min) {
			$this->$directorio = $dir;
			$this->$video = $vid;
			$this->$miniatura = $min;
		}

		public function jsonSerialize() {
			return[
				'directorio' => $this->$directorio,
				'videos' => $this->$video,
				'miniatura' => $this->$miniatura
			];
		}
	}

?>