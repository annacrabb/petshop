var shop = [
    {
      title: 'Longhorn Cowfish',
      image: 'https://i2.pickpik.com/photos/925/46/391/longhorn-cowfish-reef-fish-horned-boxfish-sea-preview.jpg',
      price: '7,500-15,000',
      description: 'words'
    },
    
    {
      title: 'Brown Tortoise',
      image: 'https://i1.pickpik.com/photos/105/153/284/turtle-underwater-marine-fish-preview.jpg',
      price: '7,500-15,000',
      description: 'words'
    },
    
    {
      title: 'Yellow Sea Horse',
      image: 'https://i1.pickpik.com/photos/455/349/247/seahorse-sea-horse-yellow-marine-preview.jpg',
      price: '7,500-15,000',
      description: 'words'
    },
    {
      title: 'Test',
      image: './img/rays.jpg',
      price: '7,500-15,000',
      description: 'words'
    },

    

    
  
    
    ]
    
    var postHTML = " "
  
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/>'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning">Sponsor Me!</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  