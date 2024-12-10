const HotelsManager = {
    hotels: [
        {
            name: "La Lupitas",
            image: "assets/images/hotels/lupitas.jpg",
            phone: "",
            website: "",
            booking: ""
        },
        {
            name: "Narrativ Loft",
            image: "assets/images/hotels/narrativ.jpg",
            phone: "",
            website: "",
            booking: ""
        },
        {
            name: "Hotel Casa Piedad",
            image: "assets/images/hotels/casa-piedad.jpg",
            phone: "",
            website: "",
            booking: ""
        },
        {
            name: "Hotel El Navegante",
            image: "assets/images/hotels/navegante.jpg",
            phone: "",
            website: "",
            booking: ""
        },
        {
            name: "Hacienda Uayamon",
            image: "assets/images/hotels/uayamon.jpg",
            phone: "",
            website: "",
            booking: ""
        },
        {
            name: "City Express by Marriot",
            image: "assets/images/hotels/city-express.jpg",
            phone: "",
            website: "",
            booking: ""
        },
        {
            name: "Hotel del Paseo",
            image: "assets/images/hotels/paseo.jpg",
            phone: "",
            website: "",
            booking: ""
        },
        {
            name: "Hotel Gamma by Fiesta Inn",
            image: "assets/images/hotels/gamma.jpg",
            phone: "",
            website: "",
            booking: ""
        }
    ],

    renderHotels() {
        const container = document.getElementById('hotels-list');
        container.innerHTML = this.hotels.map(hotel => `
            <div class="hotel-card">
                <div class="hotel-image">
                    <img src="${hotel.image}" alt="${hotel.name}" onError="this.src='assets/images/hotels/placeholder.jpg'">
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