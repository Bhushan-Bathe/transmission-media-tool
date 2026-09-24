const mediaData = {

    twisted: {
        name: "Twisted Pair Cable",
        category: "Guided Transmission Media",
        image: "image/media/twisted-pair.webp",

        introduction:
            "Twisted pair cable consists of two insulated copper wires twisted together to reduce electromagnetic interference and crosstalk. It is one of the most commonly used guided transmission media.",

        features: [
            "Consists of pairs of insulated copper wires",
            "Wires are twisted together to reduce interference",
            "Available as UTP and STP",
            "Easy to install and maintain",
            "Commonly used in computer networks"
        ],

        advantages: [
            "Low cost",
            "Easy installation",
            "Flexible and lightweight",
            "Widely available",
            "Suitable for LAN communication"
        ],

        disadvantages: [
            "Limited transmission distance",
            "More affected by interference than optical fiber",
            "Lower bandwidth than fiber",
            "Signal quality decreases over long distances"
        ],

        applications: [
            "Ethernet networks",
            "Telephone networks",
            "Local Area Networks",
            "Office networking",
            "CCTV and communication systems"
        ]
    },


    coaxial: {
        name: "Coaxial Cable",
        category: "Guided Transmission Media",
        image: "image/media/coaxial.webp",

        introduction:
            "Coaxial cable is a guided transmission medium consisting of a central conductor, dielectric insulating layer, metallic shield and protective outer jacket. It is designed to carry electrical signals with reduced interference.",

        features: [
            "Central copper conductor",
            "Dielectric insulating layer",
            "Metallic shielding around the conductor",
            "Good resistance to electromagnetic interference",
            "Supports relatively high-frequency signals"
        ],

        advantages: [
            "Good resistance to electromagnetic interference",
            "Higher bandwidth than traditional twisted pair",
            "Reliable and durable",
            "Suitable for medium-distance communication",
            "Well-established technology"
        ],

        disadvantages: [
            "Thicker and less flexible than twisted pair",
            "More expensive than basic twisted pair",
            "Installation can be more difficult",
            "Lower capacity than optical fiber",
            "Signal loss occurs over long distances"
        ],

        applications: [
            "Cable television",
            "Broadband internet",
            "CCTV systems",
            "Older Ethernet networks",
            "Radio-frequency signal transmission"
        ]
    },


    fiber: {
        name: "Optical Fiber Cable",
        category: "Guided Transmission Media",
        image: "image/media/optical-fiber.webp",

        introduction:
            "Optical fiber is a transmission medium that uses pulses of light to carry data through thin strands of glass or plastic. It provides very high bandwidth and is suitable for long-distance communication.",

        features: [
            "Uses light signals for data transmission",
            "Very high bandwidth",
            "Very low signal attenuation",
            "Immune to electromagnetic interference",
            "Supports long-distance communication"
        ],

        advantages: [
            "Extremely high data transmission rate",
            "Very long transmission distance",
            "Low signal loss",
            "High security",
            "Immune to electromagnetic interference"
        ],

        disadvantages: [
            "Higher installation cost",
            "More difficult to install than copper cables",
            "Requires specialized equipment",
            "Fiber can be physically fragile",
            "Splicing requires specialized tools"
        ],

        applications: [
            "Internet backbone",
            "Fiber-to-the-home",
            "Telephone networks",
            "Data centers",
            "Long-distance communication"
        ]
    },


    stripline: {
        name: "Stripline",
        category: "Guided Transmission Media",
        image: "image/media/stripline.webp",

        introduction:
            "Stripline is a type of planar transmission line in which a conducting strip is placed between two ground planes and separated by dielectric material. It is commonly used in high-frequency electronic circuits.",

        features: [
            "Central conducting strip",
            "Two ground planes",
            "Uses dielectric material",
            "Supports high-frequency signals",
            "Provides controlled impedance"
        ],

        advantages: [
            "Good shielding",
            "Low radiation",
            "Suitable for microwave circuits",
            "Controlled impedance",
            "Good signal integrity"
        ],

        disadvantages: [
            "More complex to manufacture",
            "Difficult to access the conducting strip",
            "Higher manufacturing requirements",
            "Mostly used in specialized applications"
        ],

        applications: [
            "Microwave circuits",
            "RF circuits",
            "Radar systems",
            "High-frequency communication equipment",
            "Printed circuit technologies"
        ]
    },


    microstripline: {
        name: "Microstripline",
        category: "Guided Transmission Media",
        image: "image/media/microstripline.jpeg",

        introduction:
            "Microstripline is a planar transmission line consisting of a conducting strip placed on a dielectric substrate with a ground plane on the opposite side. It is widely used in high-frequency and microwave circuits.",

        features: [
            "Conducting strip on dielectric substrate",
            "Ground plane below the substrate",
            "Compact structure",
            "Suitable for high-frequency signals",
            "Can be fabricated on printed circuit boards"
        ],

        advantages: [
            "Compact and lightweight",
            "Easy to manufacture",
            "Suitable for microwave circuits",
            "Easy integration with electronic circuits",
            "Low manufacturing cost for large-scale production"
        ],

        disadvantages: [
            "Higher radiation losses than stripline",
            "Sensitive to surrounding environment",
            "Performance depends on substrate properties",
            "Not ideal for very high-power applications"
        ],

        applications: [
            "Microwave circuits",
            "Antennas",
            "RF circuits",
            "Wireless communication equipment",
            "Radar systems"
        ]
    },


    radio: {
        name: "Radio Waves",
        category: "Unguided Transmission Media",
        image: "image/media/radio-waves.webp",

        introduction:
            "Radio waves are electromagnetic waves used for wireless communication. They can travel through the atmosphere and are commonly used for broadcasting and wireless communication systems.",

        features: [
            "Wireless transmission",
            "Can travel long distances",
            "Can penetrate some obstacles",
            "Uses electromagnetic radiation",
            "Can support broadcast communication"
        ],

        advantages: [
            "No physical cable required",
            "Wide coverage area",
            "Useful for mobile communication",
            "Supports broadcasting",
            "Easy deployment over large areas"
        ],

        disadvantages: [
            "Susceptible to interference",
            "Security can be a concern",
            "Signal quality may vary",
            "Limited bandwidth in some frequency ranges"
        ],

        applications: [
            "Radio broadcasting",
            "Television broadcasting",
            "Mobile communication",
            "Wireless networks",
            "IoT communication"
        ]
    },


    microwave: {
        name: "Microwaves",
        category: "Unguided Transmission Media",
        image: "image/media/microwaves.jpg",

        introduction:
            "Microwaves are high-frequency electromagnetic waves used for wireless communication. They are commonly used for point-to-point communication and satellite links.",

        features: [
            "High-frequency electromagnetic waves",
            "Usually require line-of-sight communication",
            "Support high data rates",
            "Directional transmission is possible",
            "Can cover long distances using repeaters"
        ],

        advantages: [
            "High bandwidth",
            "High data transmission rate",
            "Suitable for long-distance communication",
            "No physical cable required",
            "Useful for point-to-point links"
        ],

        disadvantages: [
            "Requires line-of-sight",
            "Affected by obstacles",
            "Weather can affect certain frequency bands",
            "Equipment can be expensive"
        ],

        applications: [
            "Telecommunication links",
            "Satellite communication",
            "Mobile networks",
            "Radar systems",
            "Internet backhaul"
        ]
    },


    infrared: {
        name: "Infrared",
        category: "Unguided Transmission Media",
        image: "image/media/infrared.jpg",

        introduction:
            "Infrared communication uses infrared electromagnetic radiation to transmit information over short distances. It is commonly used in devices where short-range communication is required.",

        features: [
            "Short-range wireless communication",
            "Uses infrared radiation",
            "Generally requires a clear path",
            "Cannot normally pass through walls",
            "Suitable for indoor applications"
        ],

        advantages: [
            "Low cost",
            "Simple implementation",
            "Less radio interference",
            "Useful for short-range communication",
            "Provides localized communication"
        ],

        disadvantages: [
            "Short transmission range",
            "Cannot easily pass through walls",
            "Requires suitable alignment in many systems",
            "Sunlight can interfere with communication"
        ],

        applications: [
            "Remote controls",
            "Short-range device communication",
            "Sensors",
            "Consumer electronics",
            "Data transfer between nearby devices"
        ]
    },


    satellite: {
        name: "Satellite ",
        category: "Unguided Transmission Media",
        image: "image/media/satellite.jpg",

        introduction:
            "Satellite communication uses communication satellites to relay signals between distant locations on Earth. It enables communication over very large geographical areas.",

        features: [
            "Uses artificial satellites",
            "Provides very wide coverage",
            "Suitable for long-distance communication",
            "Uses radio and microwave frequencies",
            "Can connect remote locations"
        ],

        advantages: [
            "Very large coverage area",
            "Useful for remote regions",
            "Supports long-distance communication",
            "Useful for broadcasting",
            "Independent of terrestrial cable networks"
        ],

        disadvantages: [
            "High installation and operating cost",
            "Communication delay can occur",
            "Weather may affect certain signals",
            "Requires specialized ground equipment"
        ],

        applications: [
            "Satellite television",
            "GPS and navigation",
            "Weather monitoring",
            "Internet connectivity",
            "Long-distance communication"
        ]
    }

};


/* SHOW OVERVIEW */

function showOverview() {

    document.getElementById("information").innerHTML = `

        <div class="category-content">

            <h2>Transmission Media</h2>

            <p>
                Transmission media are communication channels used to
                transfer data from a sender to a receiver. They are
                classified into guided and unguided media.
            </p>

            <div class="overview-cards">

                <div class="overview-card">

                    <h3>Guided Media</h3>

                    <p>
                        Signals travel through a physical transmission
                        path such as copper cables or optical fiber.
                    </p>

                    <button onclick="showCategory('guided')">
                        Explore Guided Media →
                    </button>

                </div>


                <div class="overview-card">

                    <h3>Unguided Media</h3>

                    <p>
                        Signals travel wirelessly through air or space
                        using electromagnetic waves.
                    </p>

                    <button onclick="showCategory('unguided')">
                        Explore Unguided Media →
                    </button>

                </div>

            </div>

        </div>

    `;

    clearActiveButtons();

}


/* SHOW CATEGORY */

function showCategory(category) {

    let content = "";

    if (category === "guided") {

        content = `

            <div class="category-content">

                <h2>Guided Transmission Media</h2>

                <p>
                    Guided media use a physical path to carry signals.
                    Select a medium below to learn about its structure,
                    features, advantages, disadvantages and applications.
                </p>

                <div class="category-grid">

                    <div class="category-card"
                         onclick="showMedia('twisted')">
                        <h3>Twisted Pair Cable</h3>
                        <p>Copper-based transmission medium</p>
                    </div>

                    <div class="category-card"
                         onclick="showMedia('coaxial')">
                        <h3>Coaxial Cable</h3>
                        <p>Shielded copper transmission medium</p>
                    </div>

                    <div class="category-card"
                         onclick="showMedia('fiber')">
                        <h3>Optical Fiber Cable</h3>
                        <p>Light-based high-speed transmission</p>
                    </div>

                    <div class="category-card"
                         onclick="showMedia('stripline')">
                        <h3>Stripline</h3>
                        <p>Planar high-frequency transmission line</p>
                    </div>

                    <div class="category-card"
                         onclick="showMedia('microstripline')">
                        <h3>Microstripline</h3>
                        <p>Compact planar transmission line</p>
                    </div>

                </div>

            </div>

        `;

    } else {

        content = `

            <div class="category-content">

                <h2>Unguided Transmission Media</h2>

                <p>
                    Unguided media transmit signals wirelessly through
                    air or space. Select a medium to learn more about it.
                </p>

                <div class="category-grid">

                    <div class="category-card"
                         onclick="showMedia('radio')">
                        <h3>Radio Waves</h3>
                        <p>Wireless electromagnetic communication</p>
                    </div>

                    <div class="category-card"
                         onclick="showMedia('microwave')">
                        <h3>Microwaves</h3>
                        <p>High-frequency wireless communication</p>
                    </div>

                    <div class="category-card"
                         onclick="showMedia('infrared')">
                        <h3>Infrared</h3>
                        <p>Short-range optical wireless communication</p>
                    </div>

                    <div class="category-card"
                         onclick="showMedia('satellite')">
                        <h3>Satellite</h3>
                        <p>Long-distance communication through satellites</p>
                    </div>

                </div>

            </div>

        `;

    }

    document.getElementById("information").innerHTML = content;

    clearActiveButtons();

}


/* SHOW INDIVIDUAL MEDIA */

function showMedia(type) {

    const media = mediaData[type];

    document.getElementById("information").innerHTML = `

        <div class="media-title">

            <div>

                <h2>${media.name}</h2>

                <div class="media-subtitle">
                    ${media.category}
                </div>

            </div>

        </div>


        <div class="media-top">

            <div>

                <img
                    src="${media.image}"
                    class="media-image"
                    alt="${media.name}"
                >

            </div>


            <div class="introduction">

                <h3>Introduction</h3>

                <p>
                    ${media.introduction}
                </p>

            </div>

        </div>


        <div class="info-grid">


            <div class="info-box features">

                <h3>Features</h3>

                <ul>
                    ${media.features.map(item => `<li>${item}</li>`).join("")}
                </ul>

            </div>


            <div class="info-box advantages">

                <h3>Advantages</h3>

                <ul>
                    ${media.advantages.map(item => `<li>${item}</li>`).join("")}
                </ul>

            </div>


            <div class="info-box disadvantages">

                <h3>Disadvantages</h3>

                <ul>
                    ${media.disadvantages.map(item => `<li>${item}</li>`).join("")}
                </ul>

            </div>


            <div class="info-box applications">

                <h3>Applications</h3>

                <ul>
                    ${media.applications.map(item => `<li>${item}</li>`).join("")}
                </ul>

            </div>


        </div>

    `;


    clearActiveButtons();


    const buttons = document.querySelectorAll(".media-btn");

    buttons.forEach(button => {

        if (
            button.textContent
                .toLowerCase()
                .includes(media.name.toLowerCase().replace(" cable", ""))
        ) {

            button.classList.add("active");

        }

    });

}


/* CLEAR ACTIVE BUTTONS */

function clearActiveButtons() {

    document
        .querySelectorAll(".media-btn")
        .forEach(button => {

            button.classList.remove("active");

        });

}