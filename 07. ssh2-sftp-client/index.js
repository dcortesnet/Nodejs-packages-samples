const SftpClient = require("ssh2-sftp-client");
const fs = require("fs").promises;

const config = {
  host: "localhost",
  port: 22,
  username: "username",
  password: "password",
};

const sftp = new SftpClient();

async function connectToSFTP() {
  try {
    await sftp.connect(config);
    console.log("Conectado al servidor SFTP.");
  } catch (error) {
    console.error("Error al conectar:", error.message);
    throw error;
  }
}

async function listRemoteFiles(remotePath) {
  try {
    const remoteFiles = await sftp.list(remotePath);
    console.log("Archivos remotos:", remoteFiles);
    return remoteFiles;
  } catch (error) {
    console.error("Error al listar archivos remotos:", error.message);
    throw error;
  }
}

async function uploadFile(localFilePath, remoteFilePath) {
  try {
    await sftp.put(fs.createReadStream(localFilePath), remoteFilePath);
    console.log("Archivo subido exitosamente.");
  } catch (error) {
    console.error("Error al subir archivo:", error.message);
    throw error;
  }
}

async function downloadFile(remoteFilePath, localFilePath) {
  try {
    await sftp.get(remoteFilePath, fs.createWriteStream(localFilePath));
    console.log("Archivo descargado exitosamente.");
  } catch (error) {
    console.error("Error al descargar archivo:", error.message);
    throw error;
  }
}

async function closeSFTPConnection() {
  try {
    await sftp.end();
    console.log("Conexión cerrada correctamente.");
  } catch (error) {
    console.error("Error al cerrar la conexión:", error.message);
    throw error;
  }
}

async function main() {
  try {
    await connectToSFTP();
    const remoteFiles = await listRemoteFiles(
      "/home/vsftpd/user/sample-directory"
    );

    //const localFilePath = "/ruta/local/del/archivo.txt";
    //const remoteFilePath = "/ruta/del/directorio/remoto/archivo.txt";
    //await uploadFile(localFilePath, remoteFilePath);
    //const downloadedFilePath = "/ruta/local/del/archivo_descargado.txt";
    //await downloadFile(remoteFilePath, downloadedFilePath);
  } catch (error) {
    console.error("Error principal:", error.message);
  } finally {
    await closeSFTPConnection();
  }
}

main();
