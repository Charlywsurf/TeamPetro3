console.log("carlos");

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl = "https://nhvyyvnxrupokuyjunhp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5odnl5dm54cnVwb2t1eWp1bmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyODYyNjEsImV4cCI6MjA3MDg2MjI2MX0.NX2t8xNswjkrggauvmxomQSLoDkiE_Hdaool5Gu0m2o";
const supabase = createClient(supabaseUrl, supabaseKey);

async function obtenerProductos() {
  const { data } = await supabase.from("productos").select("*").order('codigo', {ascending: true})

  data.forEach((fila, index) => {
    console.log(fila, index);
    const html = document.getElementById("dato");
    // html.innerHTML +=
    // "<div class='datosbase'><div class='mostrar'>" +
    // fila.nombre_p +
    // "</div><div class='mostrar'>" +
    // fila.description_p +
    // "</div><div class='mostrar'>" +
    // fila.price_list +
    // "</div><div class='mostrar'>" +
    // fila.price_final +
    // "</div></div>";

    html.innerHTML +=
      "<div class='contenedor'><div class='codigo'>codigo: " +
      fila.codigo +
      "</div><div class='nombre_p'>" +
      fila.nombre_p +
      "</div><div class='linea_p'>linea: " +
      fila.linea_p +
      "</div><div class='description_p'><br>descripcion:<br>" +
      fila.description_p +
      "</div><br><div class='presentacion'>presentacion: <p>" + fila.presentacion + "</p></div><div class='prod_img'><a href=" + fila.img_p + " target='_blank'><img src="  + fila.img_p + " alt='' class='prod_img centrado' id='prod_img'></a></div><div class='cont_valores'><div class='valores'><div class='titulo'>valor de lista: </div><div class='price_list'> $" + fila.price_list +"</div></div><div class='valores'><div class='titulo'>HOY 30% OFF : </div><div class='price_final'> $" +
      fila.price_final + "</div></div><div class='valores'><div class='titulo'>3 cuotas sin interes de :</div><div class='price_final_e'> $" + 
      fila.price_final/3+ "</div></div><div class='valores'><div class='titulo'>fectivo/tranferencia : </div><div class='price_final_t'> $" + fila.price_final*.9+ "</div></div></div>";
  });
}


obtenerProductos();
