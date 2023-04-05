const fs = require('fs');
const path = require('path');

function listarVideosEnCarpeta(carpeta) {
  const categorias = ['Series', 'Peliculas', 'Animacion', 'Anime'];
  const videos = [];

  categorias.forEach((categoria) => {
    const categoriaPath = path.join(carpeta, categoria);

    try {
      const stat = fs.statSync(categoriaPath);
      if (stat.isDirectory()) {
        listarVideosEnSubcarpetas(categoriaPath, videos);
      }
    } catch (error) {
      handleHttpError(error);
    }
  });

  return videos;
}

function listarVideosEnSubcarpetas(carpeta, videos) {
  try {
    fs.readdirSync(carpeta).forEach((nombreArchivo) => {
      const rutaArchivo = path.join(carpeta, nombreArchivo);
      const stat = fs.statSync(rutaArchivo);

      if (stat.isDirectory()) {
        listarVideosEnSubcarpetas(rutaArchivo, videos);
      } else if (esVideo(nombreArchivo)) {
        videos.push({
          nombre: nombreArchivo,
          ruta: rutaArchivo,
        });
      }
    });
  } catch (error) {
    handleHttpError(error);
  }
}

function esVideo(nombreArchivo) {
  const extension = path.extname(nombreArchivo);
  return ['.mp4', '.avi', '.mkv'].includes(extension);
}

function handleHttpError(error) {
  console.error(error);
  throw new Error('Ocurrió un error al procesar la solicitud');
}

// Ejemplo de uso:
try {
  const videos = listarVideosEnCarpeta('H:\\Proyectos\\Nehli 2\\Backend\\videos');
  console.log(videos);
  // Envía los videos por API REST
} catch (error) {
  handleHttpError(error);
}

module.exports = listarVideosEnSubcarpetas;
