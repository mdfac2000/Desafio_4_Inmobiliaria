const propiedades_venta = [{
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este departamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        costo: "5.000",
        smoke: false,
        pets: false
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        costo: "1.200",
        smoke: true,
        pets: true
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        costo: "4.500",
        smoke: false,
        pets: false
    }
]

let cardsContainer = document.querySelector('.row');
let html = ""
for (let card of propiedades_venta) {
    let smokeText = ""
    let petText = ""
    if (card.smoke) {
        smokeText = `
        <p class="text-success">
            <i class="fas fa-smoking"></i> Permitido fumar
        </p>
        `;
    } else {
        smokeText = `
         <p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>
        `;
    }
    if (card.pets) {
        petText = `
        <p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
        </p>
        `;
    } else {
        petText = `
        <p class="text-danger">
            <i class="fa-solid fa-ban"></i> No se permiten mascotas
        </p>
        `;
    }

    html += `
    <div class="col-md-4 mb-4">
         <div class="card">
          <img
            src="${card.src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${card.nombre}
            </h5>
            <p class="card-text">
              ${card.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${card.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${card.habitaciones} habitaciones |
              <i class="fas fa-bath"></i> 2 Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${card.costo}</p>
            ${smokeText}
            ${petText}
          </div>
        </div>
    </div>
`
}

cardsContainer.innerHTML = html