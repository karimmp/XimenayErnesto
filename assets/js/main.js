// main.js

// Calendar Integration
const CalendarManager = {
    eventDetails: {
        title: 'Boda Ximena y Ernesto',
        description: 'Ceremonia, Cocktail y Recepción en Campeche Country Club',
        location: 'Carr. Campeche-Lerma 1-km 1, Zona Sin Asignación de Nombre, 24500, San Francisco de Campeche, Campeche.',
        startTime: '2025-03-29T14:00:00',
        endTime: '2025-03-29T23:00:00'
    },

    formatGoogleCalendarUrl() {
        const { title, description, location, startTime, endTime } = this.eventDetails;
        const start = startTime.replace(/[-:]/g, '');
        const end = endTime.replace(/[-:]/g, '');
        
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${start}/${end}`;
    },

    formatICSFile() {
        const { title, description, location, startTime, endTime } = this.eventDetails;
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `DTSTART:${startTime.replace(/[-:]/g, '')}`,
            `DTEND:${endTime.replace(/[-:]/g, '')}`,
            `SUMMARY:${title}`,
            `DESCRIPTION:${description}`,
            `LOCATION:${location}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\n');

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        return URL.createObjectURL(blob);
    },

    addToCalendar() {
        // Check if device is iOS
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        
        if (iOS) {
            window.location.href = this.formatICSFile();
        } else {
            window.open(this.formatGoogleCalendarUrl());
        }
    }
};

// Maps Integration
/*
const MapManager = {
    mapOptions: {
        center: [19.8454, -90.5373],
        zoom: 15,
    },

    initMap() {
        try {
            const map = L.map('map').setView(this.mapOptions.center, this.mapOptions.zoom);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors',
                // Custom styles using CSS filters to achieve beige/gold tones
                className: 'themed-map'
            }).addTo(map);

            const marker = L.marker(this.mapOptions.center).addTo(map);
            
            const popupContent = `
                <div style="padding: 10px; font-family: var(--font-main);">
                    <h3 style="font-family: var(--font-display); margin-bottom: 8px;">Campeche Country Club</h3>
                    <p style="margin: 4px 0;">Carr. Campeche-Lerma 1-km 1</p>
                    <p style="margin: 4px 0;">San Francisco de Campeche, Campeche</p>
                </div>`;
            
            marker.bindPopup(popupContent);
        } catch (error) {
            console.error('Error initializing map:', error);
        }
    }
};
*/


// RSVP Form Handler
const RSVPManager = {
    form: null,
    
    init() {
        this.form = document.querySelector('.rsvp-form');
        this.attachEventListeners();
    },

    attachEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    },

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            attendance: formData.get('attendance')
        };

        try {
            const response = await this.submitRSVP(data);
            if (response.ok) {
                this.showConfirmation();
            } else {
                this.showError();
            }
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            this.showError();
        }
    },

    async submitRSVP(data) {
        // Replace with your actual API endpoint
        return await fetch('/api/rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    },

    showConfirmation() {
        const message = document.createElement('div');
        message.className = 'confirmation-message';
        message.innerHTML = `
            <h3>¡Gracias por confirmar!</h3>
            <p>Hemos recibido tu confirmación.</p>
        `;
        
        this.form.replaceWith(message);
    },

    showError() {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = 'Hubo un error al enviar tu confirmación. Por favor, intenta nuevamente o contáctanos directamente.';
        
        this.form.insertBefore(errorDiv, this.form.firstChild);
    }
};

// Scroll Animations
const AnimationManager = {
    init() {
        this.observeSections();
    },

    observeSections() {
        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Map
   // MapManager.initMap();

    //Hotel manager
    HotelsManager.renderHotels();
    
    // Initialize RSVP Form
    RSVPManager.init();
    
    // Initialize Animations
    AnimationManager.init();
    
    // Add Calendar Button Event Listener
    document.getElementById('addToCalendar')
        .addEventListener('click', () => CalendarManager.addToCalendar());
});