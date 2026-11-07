JTV~OFICIAL - SITIO CON PANEL ADMINISTRADOR

IMPORTANTE:
Este ZIP es un proyecto nuevo preparado para desplegar en Netlify. No modifica automáticamente tu sitio actual ni tus dominios. Para reemplazar el sitio actual, primero necesitás tener acceso a la cuenta de Netlify donde está publicado.

QUÉ INCLUYE
- index.html: página pública para los usuarios.
- admin.html: panel privado en /admin.html.
- Cinco enlaces editables: YouTube, WhatsApp, Archivo Nuevo, FREE RECOMENDADO y Comprar VIP.
- La información se guarda en Netlify Blobs para que los cambios sigan disponibles.
- La contraseña se valida en el servidor; no está escrita en el código de la página.

CÓMO PUBLICAR
1. Descomprimí este ZIP.
2. Subí la carpeta del proyecto a un repositorio GitHub.
3. En Netlify, elegí Add new site > Import an existing project y conectá ese repositorio.
4. En la configuración del sitio de Netlify, agregá una variable de entorno:
   Nombre: JTV_ADMIN_PASSWORD
   Valor: elegí una contraseña larga y única. No la compartas.
5. Volvé a desplegar el sitio (Trigger deploy).
6. Abrí TU-DOMINIO/admin.html para administrar los enlaces.
7. La página pública está en TU-DOMINIO/.

NOTAS DE SEGURIDAD
- No pongas tu contraseña en mensajes ni la compartas.
- Usá una contraseña única que no uses en otras cuentas.
- El panel permite guardar enlaces HTTPS.
- No compartas la dirección /admin.html como si fuera un enlace público. La protección real la hace la contraseña del servidor.
- Netlify Blobs requiere que el sitio esté desplegado en Netlify y que la función se ejecute allí.

Si ya tenés una página publicada, guardá una copia antes de reemplazarla. Este proyecto es una base nueva con un diseño inspirado en las capturas, no una edición directa de tu cuenta Netlify.
