fetch('https://randomuser.me/api?results=6&gender=male&nat=ca,au')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(person => {
            console.log(person);
            
            // Clone card element
            const newCard = document.querySelector('div.template').cloneNode(true);
            
            // Add user data to card
            const name = person.name;
            newCard.querySelector('h2.demo-card__title').textContent = `${name.title} ${name.first} ${name.last}`;
            
            const subtitle = person.nat + ' - ' + person.email;
            newCard.querySelector('h3.demo-card__subtitle').textContent = subtitle;
    
            const image = person.picture.large;
            newCard.querySelector('div.demo-card__media').style.backgroundImage = 'url("' + image + '")';
            newCard.querySelector('a[title="Image"]').setAttribute('href', image);
    
            const address1 = person.location.street.number + ' ' + person.location.street.name + ' ';
            const addressParagraph1 = document.createElement('p');
            addressParagraph1.textContent = address1;
    
            const address2 = person.location.city + ' ' + person.location.state + ' ' + person.location.postcode;
            const addressParagraph2 = document.createElement('p');
            addressParagraph2.textContent = address2;
    
            newCard.querySelector('div.demo-card__secondary').textContent = ''; 
            newCard.querySelector('div.demo-card__secondary').append(addressParagraph1, addressParagraph2);
    
            // Append and show new card
            newCard.classList.remove('template');
            document.body.appendChild(newCard);
        });
    });
