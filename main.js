const loadFeatures = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const tools = data.data.tools;
    // console.log(tools);
    displayFeatures(tools);
}

loadFeatures();


const displayFeatures = tools =>{
    // console.log(tools);

    const toolContainer = document.getElementById('container-field');

    tools.forEach(tool =>{
        console.log(tool);

        // creat div
        const toolCard = document.createElement('div');
        toolCard.classList = `card bg-base-100 shadow-xl`;

        const featuresList = tool.features.map((feature,index) => `<li>${index + 1}. ${feature}</li>`).join('');

        toolCard.innerHTML = `
        <figure><img src="${tool.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h3 class="card-subtitle">Features</h3>
        <ul>
             ${featuresList}
        </ul>
        <div>
        <h2 class="card-title">${tool.name}</h2>
        <p class="card-title">${tool.published_in}</p>
        </div>
        </div>
        `;
        

        toolContainer.appendChild(toolCard);
    })
}