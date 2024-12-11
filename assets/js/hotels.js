const HotelsManager = {
    hotels: [
        {
            name: "Hotel Boutique Las Lupitas",
            image: "./assets/images/hotels/lupitas.jpg",
            phone: "+52(981)281-9359",
            website: "https://www.laslupitas.com/",
            booking: "https://direct-book.com/properties/laslupitashotelboutique"
        },
        {
            name: "Narrativ Loft",
            image: "./assets/images/hotels/lupitas.jpg",
            phone: "",
            website: "https://hospitality.narrativ.mx/",
            booking: ""
        },
        {
            name: "Hotel Casa Piedad",
            image: "./assets/images/hotels/lupitas.jpg",
            phone: "+52(981)171-5498",
            website: "https://hotelcasapiedad.com/",
            booking: "https://hotels.cloudbeds.com/reservation/Jt9zlk#checkin=2025-03-28&checkout=2025-03-30"
        },
        {
            name: "Hotel El Navegante",
            image: "./assets/images/hotels/lupitas.jpg",
            phone: "+52(981)144-4112",
            website: "https://hotelelnavegante.com.mx/",
            booking: ""
        },
        {
            name: "Hacienda Uayamon",
            image: "./assets/images/hotels/lupitas.jpg",
            phone: "+52(981)8130-530",
            website: "https://www.ihg.com/spnd/hotels/us/es/uayamon/cpesi/hoteldetail",
            booking: ""
        },
        {
            name: "City Express by Marriot",
            image: "./assets/images/hotels/lupitas.jpg",
            phone: "+52(981)127-3760",
            website: "https://www.marriott.com/en-us/hotels/cpexp-city-express-campeche/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
            booking: "https://www.marriott.com/en-us/hotels/cpexp-city-express-campeche/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
        },
        {
            name: "Hotel del Paseo",
            image: "./assets/images/hotels/lupitas.jpg",
            phone: "+52(981)811-0100",
            website: "https://hoteldelpaseocampeche.com/",
            booking: ""
        },
        {
            name: "Hotel Gamma by Fiesta Inn",
            image: "./assets/images/hotels/lupitas.jpg",
            phone: "+52(443)310-8137",
            website: "https://www.fiestamericanatravelty.com/gamma-hoteles/hoteles/gamma-campeche-malecon",
            booking: ""
        },
        {
            name: "También hay opciones de airbnb",
            image: "./assets/images/hotels/airbnb.png",
            phone: "",
            website: "https://www.airbnb.mx/",
            booking: ""
        }
    ],

    renderHotels() {
        const container = document.getElementById('hotels-list');
        container.innerHTML = this.hotels.map(hotel => `
            <div class="hotel-card">
                <div class="hotel-image">
                    <img src="${hotel.image}" alt="${hotel.name}" onError="this.src='assets/images/hotels/lupitas.jpg'">
                </div>
                <div class="hotel-info">
                    <h3>${hotel.name}</h3>
                    ${hotel.phone ? `<p>📞 ${hotel.phone}</p>` : ''}
                    ${hotel.website ? `<a href="${hotel.website}" class="hotel-link" target="_blank">Ver sitio web</a>` : ''}
                    ${hotel.booking ? `<a href="${hotel.booking}" class="hotel-book" target="_blank">Reservar</a>` : ''}
                </div>
            </div>
        `).join('');
    }
};