/* =========================================================
   TRANSMISSION MEDIA ANALYZER
   ========================================================= */


/* =========================================================
   MEDIA DATABASE

   Each medium has capability values from 0 to 10.

   Higher value means better capability for that criterion.

   budget:
   Higher value = more affordable.

   environment:
   Higher value = better suitability for that environment.
========================================================= */


const media = [

    {
        name: "Optical Fiber Cable",

        speed: 10,
        distance: 10,
        budget: 4,
        reliability: 10,
        interference: 10,

        environment: {
            lan: 9,
            "long-distance": 10,
            wireless: 2,
            pcb: 2,
            general: 8
        }
    },


    {
        name: "Microwaves",

        speed: 9,
        distance: 9,
        budget: 5,
        reliability: 8,
        interference: 6,

        environment: {
            lan: 4,
            "long-distance": 10,
            wireless: 10,
            pcb: 3,
            general: 8
        }
    },


    {
        name: "Coaxial Cable",

        speed: 7,
        distance: 7,
        budget: 6,
        reliability: 8,
        interference: 8,

        environment: {
            lan: 7,
            "long-distance": 6,
            wireless: 1,
            pcb: 5,
            general: 8
        }
    },


    {
        name: "Satellite",

        speed: 8,
        distance: 10,
        budget: 3,
        reliability: 7,
        interference: 5,

        environment: {
            lan: 2,
            "long-distance": 10,
            wireless: 10,
            pcb: 1,
            general: 7
        }
    },


    {
        name: "Twisted Pair Cable",

        speed: 6,
        distance: 5,
        budget: 9,
        reliability: 7,
        interference: 5,

        environment: {
            lan: 10,
            "long-distance": 4,
            wireless: 1,
            pcb: 4,
            general: 9
        }
    },


    {
        name: "Radio Waves",

        speed: 6,
        distance: 9,
        budget: 8,
        reliability: 5,
        interference: 4,

        environment: {
            lan: 3,
            "long-distance": 8,
            wireless: 10,
            pcb: 2,
            general: 7
        }
    },


    {
        name: "Infrared",

        speed: 6,
        distance: 3,
        budget: 8,
        reliability: 6,
        interference: 8,

        environment: {
            lan: 4,
            "long-distance": 2,
            wireless: 9,
            pcb: 2,
            general: 6
        }
    },


    {
        name: "Microstripline",

        speed: 9,
        distance: 2,
        budget: 7,
        reliability: 8,
        interference: 8,

        environment: {
            lan: 2,
            "long-distance": 1,
            wireless: 2,
            pcb: 10,
            general: 5
        }
    },


    {
        name: "Stripline",

        speed: 9,
        distance: 2,
        budget: 6,
        reliability: 9,
        interference: 9,

        environment: {
            lan: 2,
            "long-distance": 1,
            wireless: 2,
            pcb: 10,
            general: 5
        }
    }

];



/* =========================================================
   REQUIREMENT TARGET VALUES

   These values represent what the user expects.

   Example:
   Very High Speed = 10
   High Speed      = 8
   Medium Speed    = 6
   Low Speed       = 3
========================================================= */


const targets = {

    speed: {
        low: 3,
        medium: 6,
        high: 8,
        "very-high": 10
    },

    distance: {
        short: 3,
        medium: 6,
        long: 8,
        "very-long": 10
    },

    budget: {
        low: 9,
        medium: 6,
        high: 3
    },

    reliability: {
        standard: 5,
        high: 8,
        "very-high": 10
    },

    interference: {
        low: 3,
        medium: 6,
        high: 9
    }

};



/* =========================================================
   REQUIREMENT WEIGHTS

   More demanding requirements receive more importance.
========================================================= */


const weights = {

    speed: {
        low: 1,
        medium: 1.3,
        high: 1.7,
        "very-high": 2.2
    },

    distance: {
        short: 1,
        medium: 1.3,
        long: 1.7,
        "very-long": 2.2
    },

    budget: {
        low: 2.0,
        medium: 1.5,
        high: 1
    },

    reliability: {
        standard: 1,
        high: 1.6,
        "very-high": 2.1
    },

    interference: {
        low: 1,
        medium: 1.5,
        high: 2
    },

    environment: 1.8

};



/* =========================================================
   LABELS
========================================================= */


const displayNames = {

    speed: "Speed",

    distance: "Distance",

    budget: "Budget",

    reliability: "Reliability",

    interference: "Interference",

    environment: "Environment"

};



/* =========================================================
   GET SELECTED VALUE
========================================================= */


function getSelected(name) {

    const selected = document.querySelector(
        `input[name="${name}"]:checked`
    );

    return selected ? selected.value : null;

}



/* =========================================================
   CALCULATE REQUIREMENT FIT

   The score tells us how well the medium satisfies
   the selected requirement.

   If capability >= target:
       Full score.

   If capability is below target:
       Score decreases according to the gap.
========================================================= */


function calculateFit(capability, target) {

    if (capability >= target) {

        return 10;

    }


    const difference = target - capability;

    return Math.max(
        0,
        10 - (difference * 1.7)
    );

}



/* =========================================================
   ENVIRONMENT FIT
========================================================= */


function calculateEnvironmentFit(medium, environment) {

    return medium.environment[environment] || 0;

}



/* =========================================================
   CONVERT SCORE INTO LABEL
========================================================= */


function getStatus(score) {

    if (score >= 8) {

        return {
            label: "Excellent",
            className: "status-excellent"
        };

    }


    if (score >= 6) {

        return {
            label: "Good",
            className: "status-good"
        };

    }


    if (score >= 4) {

        return {
            label: "Average",
            className: "status-average"
        };

    }


    return {
        label: "Poor",
        className: "status-poor"
    };

}



/* =========================================================
   GET OVERALL LABEL
========================================================= */


function getOverallLabel(score) {

    if (score >= 8) {

        return "Excellent";

    }


    if (score >= 6) {

        return "Good";

    }


    if (score >= 4) {

        return "Average";

    }


    return "Poor";

}



/* =========================================================
   GET REASON FOR EACH MEDIUM

   This function examines the actual result of every
   criterion and creates a reason specific to the
   user's selected requirements.
========================================================= */


function generateReason(result, requirements) {

    const strengths = [];

    const weaknesses = [];

    const average = [];


    const criteria = [
        "speed",
        "distance",
        "budget",
        "reliability",
        "interference",
        "environment"
    ];


    criteria.forEach(criteriaName => {

        const item = result.criteria[criteriaName];

        if (item.score >= 8) {

            strengths.push(displayNames[criteriaName]);

        }
        else if (item.score >= 6) {

            average.push(displayNames[criteriaName]);

        }
        else {

            weaknesses.push(displayNames[criteriaName]);

        }

    });



    let reason = "";



    /* =========================
       MAIN POSITIVE PART
    ========================= */

    if (strengths.length >= 3) {

        reason +=
            `Strong match for ${formatList(strengths)}. `;

    }
    else if (strengths.length > 0) {

        reason +=
            `Performs well for ${formatList(strengths)}. `;

    }



    /* =========================
       AVERAGE PART
    ========================= */

    if (average.length > 0) {

        reason +=
            `It provides a reasonable balance for ${formatList(average)}. `;

    }



    /* =========================
       WEAKNESS PART
    ========================= */

    if (weaknesses.length > 0) {

        reason +=
            `Its main limitations for this requirement are ${formatList(weaknesses)}.`;

    }
    else {

        reason +=
            `It has no major weakness for the selected requirements.`;

    }



    /* =========================
       SPECIAL EXPLANATIONS
    ========================= */

    if (
        requirements.environment === "pcb" &&
        result.name === "Microstripline"
    ) {

        reason +=
            " Its application suitability is especially strong for PCB and embedded-system transmission paths.";

    }


    if (
        requirements.environment === "pcb" &&
        result.name === "Stripline"
    ) {

        reason +=
            " Its application suitability is especially strong for PCB and embedded-system transmission paths.";

    }


    if (
        requirements.environment === "lan" &&
        result.name === "Twisted Pair Cable"
    ) {

        reason +=
            " It is particularly suitable for conventional LAN and computer-network connections.";

    }


    if (
        requirements.environment === "wireless" &&
        (
            result.name === "Microwaves" ||
            result.name === "Radio Waves" ||
            result.name === "Satellite" ||
            result.name === "Infrared"
        )
    ) {

        reason +=
            " Its wireless nature makes it relevant to the selected application environment.";

    }


    return reason;

}



/* =========================================================
   FORMAT LIST

   Example:
   ["Speed", "Distance", "Reliability"]

   becomes:

   Speed, Distance and Reliability
========================================================= */


function formatList(list) {

    if (list.length === 1) {

        return list[0];

    }


    if (list.length === 2) {

        return `${list[0]} and ${list[1]}`;

    }


    return (
        list.slice(0, -1).join(", ") +
        " and " +
        list[list.length - 1]
    );

}



/* =========================================================
   ANALYZE ONE MEDIUM
========================================================= */


function analyzeMedium(medium, requirements) {

    const criteria = {};



    /* SPEED */

    criteria.speed = {

        score: calculateFit(
            medium.speed,
            targets.speed[requirements.speed]
        ),

        requirement: requirements.speed

    };



    /* DISTANCE */

    criteria.distance = {

        score: calculateFit(
            medium.distance,
            targets.distance[requirements.distance]
        ),

        requirement: requirements.distance

    };



    /* BUDGET */

    criteria.budget = {

        score: calculateFit(
            medium.budget,
            targets.budget[requirements.budget]
        ),

        requirement: requirements.budget

    };



    /* RELIABILITY */

    criteria.reliability = {

        score: calculateFit(
            medium.reliability,
            targets.reliability[requirements.reliability]
        ),

        requirement: requirements.reliability

    };



    /* INTERFERENCE */

    criteria.interference = {

        score: calculateFit(
            medium.interference,
            targets.interference[requirements.interference]
        ),

        requirement: requirements.interference

    };



    /* ENVIRONMENT */

    criteria.environment = {

        score: calculateEnvironmentFit(
            medium,
            requirements.environment
        ),

        requirement: requirements.environment

    };



    /* =====================================================
       WEIGHTED OVERALL SCORE
    ===================================================== */

    let weightedTotal = 0;

    let totalWeight = 0;


    Object.keys(criteria).forEach(key => {

        let currentWeight;


        if (key === "environment") {

            currentWeight = weights.environment;

        }
        else {

            currentWeight =
                weights[key][requirements[key]];

        }


        weightedTotal +=
            criteria[key].score * currentWeight;

        totalWeight += currentWeight;

    });


    const overallScore =
        weightedTotal / totalWeight;



    const result = {

        name: medium.name,

        score: overallScore,

        overall: getOverallLabel(overallScore),

        criteria: criteria

    };


    result.reason =
        generateReason(result, requirements);


    return result;

}



/* =========================================================
   BUILD RECOMMENDATION REASONS

   Gives 3-4 strong points and limitations for the
   recommended medium.
========================================================= */


function generateRecommendationReasons(result) {

    const reasons = [];


    const criteriaNames = [
        "speed",
        "distance",
        "budget",
        "reliability",
        "interference",
        "environment"
    ];


    const goodCriteria = [];

    const weakCriteria = [];



    criteriaNames.forEach(key => {

        const score = result.criteria[key].score;


        if (score >= 8) {

            goodCriteria.push(displayNames[key]);

        }
        else if (score < 6) {

            weakCriteria.push(displayNames[key]);

        }

    });



    if (goodCriteria.length > 0) {

        reasons.push(
            `Excellent match for ${formatList(goodCriteria)}.`
        );

    }


    if (result.criteria.speed.score >= 8) {

        reasons.push(
            "Provides a strong match for the selected data-speed requirement."
        );

    }


    if (result.criteria.distance.score >= 8) {

        reasons.push(
            "Suitable for the selected transmission distance."
        );

    }


    if (result.criteria.reliability.score >= 8) {

        reasons.push(
            "Provides a strong match for the required reliability."
        );

    }


    if (result.criteria.interference.score >= 8) {

        reasons.push(
            "Well suited to the selected interference conditions."
        );

    }


    if (result.criteria.environment.score >= 8) {

        reasons.push(
            "Fits the selected application environment."
        );

    }



    if (
        weakCriteria.length > 0 &&
        reasons.length < 4
    ) {

        reasons.push(
            `Main limitation: ${formatList(weakCriteria)}.`
        );

    }



    return reasons.slice(0, 4);

}



/* =========================================================
   CREATE CRITERION HTML
========================================================= */


function createCriterionHTML(name, result) {

    const status = getStatus(result.score);


    return `
        <div class="criteria-item ${status.className}">

            <span class="criteria-name">
                ${name}
            </span>

            <span class="criteria-status">
                ${status.label}
            </span>

        </div>
    `;

}



/* =========================================================
   CREATE MEDIA CARD
========================================================= */


function createMediaCard(result, index, recommended) {

    return `

        <div class="media-card ${recommended ? "recommended" : ""}">

            <div class="media-card-header">

                <div class="media-name-area">

                    <div class="rank-number">
                        ${index + 1}
                    </div>

                    <h3 class="media-name">
                        ${result.name}
                    </h3>

                </div>


                <div class="media-score">

                    <span class="score-number">
                        ${result.score.toFixed(1)}/10
                    </span>

                    <span class="overall-label">
                        Overall: ${result.overall}
                    </span>

                </div>

            </div>



            <div class="criteria-grid">

                ${createCriterionHTML(
                    "Speed",
                    result.criteria.speed
                )}

                ${createCriterionHTML(
                    "Distance",
                    result.criteria.distance
                )}

                ${createCriterionHTML(
                    "Budget",
                    result.criteria.budget
                )}

                ${createCriterionHTML(
                    "Reliability",
                    result.criteria.reliability
                )}

                ${createCriterionHTML(
                    "Interference",
                    result.criteria.interference
                )}

                ${createCriterionHTML(
                    "Environment",
                    result.criteria.environment
                )}

            </div>



            <div class="media-reason">

                <strong>
                    Why this result?
                </strong>

                <p>
                    ${result.reason}
                </p>

            </div>

        </div>

    `;

}



/* =========================================================
   DISPLAY RESULTS
========================================================= */


function displayResults(results, requirements) {

    const resultSection =
        document.getElementById("resultSection");


    const best =
        results[0];


    const recommendationReasons =
        generateRecommendationReasons(best);



    let reasonsHTML = "";

    recommendationReasons.forEach(reason => {

        reasonsHTML += `
            <li>${reason}</li>
        `;

    });



    let cardsHTML = "";

    results.forEach((result, index) => {

        cardsHTML +=
            createMediaCard(
                result,
                index,
                index === 0
            );

    });



    resultSection.innerHTML = `

        <div class="recommendation-card">

            <span class="recommendation-label">
                ★ RECOMMENDED TRANSMISSION MEDIUM
            </span>


            <h2>
                ${best.name}
            </h2>


            <div class="score-big">
                Compatibility Score:
                ${best.score.toFixed(1)} / 10
            </div>


            <h3>
                Why it is recommended for this case:
            </h3>


            <ul class="recommendation-reasons">

                ${reasonsHTML}

            </ul>

        </div>



        <h2 class="ranking-title">
            Transmission Media Ranking
        </h2>


        <p class="ranking-subtitle">
            Each medium is evaluated separately against all six selected requirements.
        </p>


        ${cardsHTML}

    `;



    resultSection.classList.add("show");



    /* Change step indicator */

    const steps =
        document.querySelectorAll(".step");


    steps.forEach(step => {

        step.classList.remove("active");

    });


    steps[2].classList.add("active");



    /* Scroll to results */

    setTimeout(() => {

        resultSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}



/* =========================================================
   ANALYZE BUTTON
========================================================= */


document
    .getElementById("analyzeBtn")
    .addEventListener("click", function () {


        const requirements = {

            speed:
                getSelected("speed"),

            distance:
                getSelected("distance"),

            budget:
                getSelected("budget"),

            reliability:
                getSelected("reliability"),

            interference:
                getSelected("interference"),

            environment:
                getSelected("environment")

        };



        /* =================================================
           CHECK WHETHER ALL QUESTIONS ARE ANSWERED
        ================================================= */


        const missing =
            Object.keys(requirements)
                .filter(key => !requirements[key]);


        const errorMessage =
            document.getElementById("errorMessage");


        if (missing.length > 0) {

            errorMessage.textContent =
                "Please select an option for every requirement before analyzing.";

            return;

        }


        errorMessage.textContent = "";



        /* =================================================
           ANALYZE ALL MEDIA
        ================================================= */


        const results =
            media.map(medium =>
                analyzeMedium(
                    medium,
                    requirements
                )
            );



        /* =================================================
           SORT FROM HIGHEST TO LOWEST
        ================================================= */


        results.sort(
            (a, b) => b.score - a.score
        );



        /* =================================================
           DISPLAY
        ================================================= */


        displayResults(
            results,
            requirements
        );

    });



/* =========================================================
   RESET BUTTON
========================================================= */


document
    .getElementById("resetBtn")
    .addEventListener("click", function () {


        /* Remove all selected radio buttons */

        document
            .querySelectorAll('input[type="radio"]')
            .forEach(input => {

                input.checked = false;

            });



        /* Hide results */

        const resultSection =
            document.getElementById("resultSection");


        resultSection.innerHTML = "";

        resultSection.classList.remove("show");



        /* Remove error */

        document
            .getElementById("errorMessage")
            .textContent = "";



        /* Reset steps */

        const steps =
            document.querySelectorAll(".step");


        steps.forEach(step => {

            step.classList.remove("active");

        });


        steps[0].classList.add("active");



        /* Go to top */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });