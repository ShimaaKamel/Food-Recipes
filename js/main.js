


 const recipes = [
            {
                category: "Breakfast",
                title: "Pizza",
                image: "./images/breakfast1.jpg",
                desc: "Delicious breakfast, easy to make, and makes you very happy.",
                video: "https://youtu.be/bf2cDXpayuU?si=UNtnU0Kv5tanLiby",
             },
            
            {
                category: "Breakfast",
                title: "Pizza",
                image: "./images/breakfast2.jpg",
                desc: "Delicious breakfast, easy to make, and makes you very happy.",
                video: "https://youtu.be/bf2cDXpayuU?si=UNtnU0Kv5tanLiby",
           },
             
            
             {
                category: "Lunch",
                title: "Pizza",
                image: "./images/Lunch1.jpg",
                desc: "Delicious breakfast, easy to make, and makes you very happy.",
                video: "https://youtu.be/bf2cDXpayuU?si=UNtnU0Kv5tanLiby",
             },
            
            {
                category: "Lunch",
                title: "Pizza",
                image: "./images/lunch2.jpg",
                desc: "Delicious breakfast, easy to make, and makes you very happy.",
                video: "https://youtu.be/bf2cDXpayuU?si=UNtnU0Kv5tanLiby",
           },
            
           
             {
                category: "Dinner",
                title: "Pizza",
                image: "./images/dinner1.jpg",
                desc: "Delicious breakfast, easy to make, and makes you very happy.",
                video: "https://youtu.be/bf2cDXpayuU?si=UNtnU0Kv5tanLiby",
            },
            {
                category: "Dinner",
                title: "Pizza",
                image: "./images/dinner2.jpg",
                desc: "Delicious breakfast, easy to make, and makes you very happy.",
                video: "https://youtu.be/bf2cDXpayuU?si=UNtnU0Kv5tanLiby",
           },
            
        
                 {
                category: "Diss",
                title: "Pizza",
                image: "./images/breakfast3.jpg",
                desc: "Delicious breakfast, easy to make, and makes you very happy.",
                video: "https://youtu.be/bf2cDXpayuU?si=UNtnU0Kv5tanLiby",
            },
            {
                category: "Diss",
                title: "Pizza",
                image: "./images/breakfast4.jpg",
                desc: "Delicious breakfast, easy to make, and makes you very happy.",
                video: "https://youtu.be/bf2cDXpayuU?si=UNtnU0Kv5tanLiby",
           },

        ];

        function display(category) {
            let filteredRecipes;
            if (category === '') {
                filteredRecipes = recipes;
            } else {
                filteredRecipes = recipes.filter(recipe => recipe.category === category);
            }

            let rec = document.getElementById('foodRecip');
            rec.innerHTML = '';

            filteredRecipes.forEach(recipe => {
                const cartona = document.createElement('div');
                cartona.classList.add('col-md-4', 'my-3');
                cartona.innerHTML = `
                    <div class="card mx-auto" style="width: 18rem;">
                        <img src="${recipe.image}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.title}</h5>
                            <p class="card-text">${recipe.desc}</p>
                            <a href="${recipe.video}" class="btn btn-primary" target="_blank">Go Video</a>
                        </div>
                    </div>
                `;
                rec.appendChild(cartona);
            });
        }

        
document.getElementById('all').addEventListener('click', (e) => {
            e.preventDefault()
            display('')
        } );
document.getElementById('Breakfast').addEventListener('click', (e) => {
             e.preventDefault()
              display('Breakfast')
        } );
document.getElementById('Lunch').addEventListener('click', (e) => {
            e.preventDefault()
            display('Lunch')
        });
document.getElementById('Dinner').addEventListener('click', (e) => {
             e.preventDefault()
            display('Dinner')
});
        

document.getElementById('Desserts').addEventListener('click', (e) => {
    e.preventDefault();
    display('Diss');
})
display('');


