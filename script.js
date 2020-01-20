

const pokemon = {
    render: () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/${id}';
        const container = document.querySelector('#pokeshow');
        let contentHTML = '';



        function consultarPokemon(id) {
            
            if (id == 94) {
              var  bio = "A Gengar is close by if you feel a sudden chill. It may be trying to lay a curse on you.";
                console.log(bio);
            } else if (id == 25) {
             var   bio = "When several of these Pokémon gather, their electricity could build and cause lightning storms.";
                console.log(bio);

            }
            else if (id == 6) {
           var bio = "It spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.";
                console.log(bio);

            }
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

                .then(function (res) {
                    res.json()
                        .then(function (pokemon) {
                            console.log(pokemon);
                            console.log(pokemon.name);
                            console.log(url);
                         
                            contentHTML += `
                            
           <div class="card" >
              <div class="card-image">
                   <img class="card-img-top" src="${pokemon.sprites.front_default}">                            
                </div>
                 <div class="card-text">
              <h1 >${pokemon.name}</h1>
              <p><b>Pokémon N°:</b> ${pokemon.id}</p>
              <p>${bio}</p>
                 </div>
               <div class="card-stats"></div>
            </div>

                   `
                                ;
                            container.innerHTML = contentHTML;
                        })
                })
        }

        consultarPokemon(94);
        consultarPokemon(25);
        consultarPokemon(06);

     
    }
}

pokemon.render();