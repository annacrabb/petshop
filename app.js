var shopOne = [
    
    {
      title: 'Yellow Sea Horse',
      image: 'https://i1.pickpik.com/photos/455/349/247/seahorse-sea-horse-yellow-marine-preview.jpg',
      price: '7,500-15,000',
      description: 'words'
    },

    {
      title: 'Chromodoris Nudibranch',
      image: 'https://i2.pickpik.com/photos/75/853/134/nudibranch-chromodoris-slug-sea-slug-preview.jpg',
      price: '7,500-15,000',
      description: 'words'
    },

    {
      title: 'Spanish Shawl Nudibranch',
      image: 'https://live.staticflickr.com/7265/7513053372_b6c4a5cca8_b.jpg',
      price: '7,500-15,000',
      description: 'words'
    },

    {
      title: 'Christmas Tree Worm',
      image: 'https://live.staticflickr.com/3676/11531111734_ca68c717bb_b.jpg',
      price: '7,500-15,000',
      description: 'words'
    },

    ]
    
    var postHTML = " "
  
  
  
    for (var i=0; i < shopOne.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shopOne[i].title + '</h5>'
        var image = '<img width=550px src="' + shopOne[i].image + '"/>'
        var price = '<p> $' + shopOne[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shopOne[i].description + '</p><button type="button" class="btn btn-warning">Sponsor Me!</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('marketOne').innerHTML = postHTML


var shopTwo = [
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
      title: 'Trumpet Fish',
      image: 'https://live.staticflickr.com/65535/51939573062_1b34f537e9_b.jpg',
      price: '7,500-15,000',
      description: 'words'
    },

    {
      title: 'Cuttlefish',
      image: 'https://live.staticflickr.com/3863/14412947916_d11dc50ca8_b.jpg',
      price: '7,500-15,000',
      description: 'words'
    },

    {
      title: 'Hawaiian Spiny Lobster',
      image: 'https://live.staticflickr.com/2908/13975389495_5b17616147_b.jpg',
      price: '7,500-15,000',
      description: 'words'
    },
    


    ]
    
    var postHTML = " "
  
  
  
    for (var i=0; i < shopTwo.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shopTwo[i].title + '</h5>'
        var image = '<img width=550px src="' + shopTwo[i].image + '"/>'
        var price = '<p> $' + shopTwo[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shopTwo[i].description + '</p><button type="button" class="btn btn-warning">Sponsor Me!</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('marketTwo').innerHTML = postHTML


var shopThree = [
    {
      title: 'Octopus',
      image: 'https://i0.pickpik.com/photos/1011/749/144/fish-octopus-water-aquarium-thumb.jpg',
      price: '7,500-15,000',
      description: 'words'
    },
    
    {
      title: 'Nurse Shark',
      image: 'https://live.staticflickr.com/3894/14319397510_dcd8dc6ab8_b.jpg',
      price: '7,500-15,000',
      description: 'words'
    },
    
    {
      title: 'Spotted Eagle Ray',
      image: 'https://live.staticflickr.com/2866/8758452682_6320c05934_b.jpg',
      price: '7,500-15,000',
      description: 'words'
    },

    ]
    
    var postHTML = " "
  
  
  
    for (var i=0; i < shopThree.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shopThree[i].title + '</h5>'
        var image = '<img width=550px src="' + shopThree[i].image + '"/>'
        var price = '<p> $' + shopThree[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shopThree[i].description + '</p><button type="button" class="btn btn-warning">Sponsor Me!</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('marketThree').innerHTML = postHTML
