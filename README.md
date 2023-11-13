# facturacion_completo
este es el trabajo completo de facturacion esta echo con dos frameworks <br>
![](https://angular.io/assets/images/logos/angular/logo-nav@2x.png) ![](https://oe9nbfytu.qnssl.com/c/d113d1ce8914335fb491e7e034cf3681) 

para ejecutar como desarollador este trabajo es necesario tener
<ul>
  </li>
  <li>
    Git
    https://git-scm.com/
  </li>
  <li>
    Visual Studio code  
      https://code.visualstudio.com/
  </li>
  <li> 
    NodeJS
      https://nodejs.org/en
  </li>
  <li>
    Xampp
     https://www.apachefriends.org/es/index.html
  </li>
</ul>

## primero abrimos cmd como administrador 
<p> en la terminal buscar la ruta en la cual queremos dejar el proyecto 
    ejemplo  
</p>

<h3>
  cd C:\Users\anyi\Documentos
</h3>

<br>
 <p> 
 luego copiar los archivos a la carpeta con 
 </p>
 <h3> 
 git clone ttps://github.com/csa345/facturacion_completo.git)https://github.com/csa345/facturacion_completo.git
 </h3>

 
<p>↑ todo completo </p>

## configuración Xampp
<ol>
<ul>
  <li>
    abrir Xampp encender  apache y mysql
  </li>
  <li>
    encender mysql y pache en la fila de mysql veremos un boton con el nombre admin de click al boton
  </li>
  <li>
    en myadmi en la parte izquierda crear 3 nuevas tablas con los nombres precisos incluso mayusculas y minusculas:
  </li>
</ul>
 </ol>
<table>
   <tr>
    <th>Tablas</th>
    <th>Columnas</th>
    <th><- Tipo de Datos de columnas</th>
  </tr>
  <tr>
    <td>Factura</td>
    <td> 
    n_factura,
    correo,
    Servicios,
    valor,
    </td>
    <td>int, varchar, varchar, int</td>
  </tr>
  <tr>
    <td>servicios</td>
    <td>
    n_factura,
    correo,
    Servicios,
    valor, 
    </td>
    <td>int, int, varchar, int</td>
  </tr>
    <td>Usuario</td>
    <td> 
    id_usuario,
    nombre,
    apellido,
    correo,
    contraseña,
    direccion,
    telefono,
    </td>
    <td>int, varchar, varchar, varchar, varchar, varchar, int</td>
  </tr>
</table>
<br>

### si aparece algun error de campo le ponemos como longitud 255
<br>
<br>
<h3>
  Ejecutar trabajo como desarrolador
</h3>
<p> abrir la carpeta faturacionv2 y facturacion-api2 en Visual Studio Code por separado </p>

<ul>
  <li>
    luego de abrir los archivos en el Visual Studio Code abrir la terminal y escribir npm install 
  </li>
  <li>
    Se debe hacer en los dos archivos ↑
  </li>
</ul>

<ul>
  <li>
    En el Visual Studio Code donde abrio facturacionv2 abrir la terminal y escribir el siguiente comando: ng s -o
  </li>
  <li>
    En el Visual Studio Code donde abrio facturacion-api2 abrir la terminal y escribir el siguiente comando: npm run start:dev
  </li>
</ul>
