const SHEET_ID = "1rkd10iPZ4S3ijGlVjr1BPeVn3IW63Jn2FM4DyXBjH7k";

const ACCESS_TOKEN =
"ya29.a0Aa4xrXO_ch46wdPtx1GrX62LdP4Fco2mx0fVnAFIkK7-Hh72E5ldGWo-BMEVtUGTvVbaXbK_tXhtiIrAbqeNgz5MVfmP-43pc1iBiWhXnG781l_uO-CBTUtcpAFHPC1UxKEXzhR7fW01ifdre0zRVpZfA3heaCgYKATASARASFQEjDvL9wfwl_UgdrZLhoDeAIs1FnQ0163";
fetch(
    // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
    `https://sheets.googleapis.com/v4/spreadsheets/1T4MHT7oBvlCXQS2GKWzTxI_MelZYxiO6JBjGpTZx4r4/values/almuerzo!A1:C`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  //esperamos el response
  )
  .then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0];

         // Contenido
         const itemContenido = document.createElement("span");
         itemContenido.className = "item contenido";
         itemContenido.innerHTML = values[i][1]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][2];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemContenido);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
});
// {
//     "range" ; "hojaMenu!A2:B1000",
//     "majorDimension" ; "ROWS",
//     "values" ; [
//         [
//             "Hamburguesa con queso",
//             "Texto descriptivo",
//             "25000"
//         ],
//         [
//             "Pizza muzzarella",
//             "Texto descriptivo",
//             "40000"
//         ],
//         [
//             "Coca cola zero",
//             "Texto descriptivo",
//             "8000"
//         ],
//         [
//             "Sprite zero",
//             "Texto descriptivo",
//             "8000"
//         ]
//     ]
// }