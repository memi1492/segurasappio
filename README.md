# segurasappio

Plugins necesarios:

https://ionicframework.com/docs/native/geolocation/

https://ionicframework.com/docs/native/sms/

https://ionicframework.com/docs/native/call-number/

https://ionicframework.com/docs/storage/


Soporte para Mac:

1- Instalar Nightly build

sudo npm install --global cordova@nightly

2- Colocar la direccion de instalacion del xcode con el comando

sudo xcode-select -s /Applications/dir/a/xcode


3- Emular con el comando

ionic cordova emulate ios -- --buildFlag="-UseModernBuildSystem=0"

<<<<<<< HEAD
3.5- Ver dispositivos disponibles 

ionic cordova emulate --list

4- Emular Ipad con el comando:

ionic cordova emulate ios -- --buildFlag="-UseModernBuildSystem=0" --target="iPhone-5s, 12.1"

* A storage se añade el SQLite que se muestra en el mismo link.
=======
* A storage se añade el SQLite que se muestra en el mismo link.
>>>>>>> parent of 434f192... arreglos de ipad2
