var shopOne = [
  

    // {
    //   title: 'Chromodoris Nudibranch',
    //   image: 'https://i2.pickpik.com/photos/75/853/134/nudibranch-chromodoris-slug-sea-slug-preview.jpg',
    //   price: '10 per month',
    //   description: 'words'
    // },

    {
      title: 'Spanish Shawl Nudibranch',
      image: 'assets/spanish.shawl.jack.png',
      price: '10 per month',
      description: 'words'
    },

    {
      title: 'Christmas Tree Worm',
      image: 'https://live.staticflickr.com/3676/11531111734_ca68c717bb_b.jpg',
      price: '10 per month',
      description: 'words'
    },

    {
      title: 'Cleaner Shrimp',
      image: 'assets/cleaner.shrimp.curacao.jack.png',
      price: '10 per month',
      description: 'words'
    },

    {
      title: 'Harlequin Shrimp',
      image: 'assets/harlequin.shrimp.costa.rica.jack.png',
      price: '10 per month',
      description: 'words'
    },
    {
      title: 'Hermit Crab',
      image: 'assets/hermit.crab.cozumel.jack.png',
      price: '10 per month',
      description: 'words'
    },
    {
      title: 'Starfish',
      image: 'assets/seastar.florida.jack.png',
      price: '10 per month',
      description: 'words'
    },
    {
      title: 'Trumpetfish',
      image: 'assets/trumpetfish.florida.jack.png',
      price: '10 per month',
      description: 'words'
    },

    {
      title: 'Yellow Seahorse',
      image: 'https://i1.pickpik.com/photos/455/349/247/seahorse-sea-horse-yellow-marine-preview.jpg',
      price: '10 per month',
      description: 'words'
    },
    ]
    
    var postHTML = " "
  
    for (var i=0; i < shopOne.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shopOne[i].title + '</h5>'
        var image = '<img width=550px src="' + shopOne[i].image + '"/>'
        var price = '<p> $' + shopOne[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shopOne[i].description + '</p><button type="button" class="btn btn-warning">Sponsor Me!</button></div></div><br>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('marketOne').innerHTML = postHTML


var shopTwo = [
    // {
    //   title: 'Longhorn Cowfish',
    //   image: 'https://i2.pickpik.com/photos/925/46/391/longhorn-cowfish-reef-fish-horned-boxfish-sea-preview.jpg',
    //   price: '50 per month',
    //   description: 'words'
    // },
    
    // {
    //   title: 'Brown Tortoise',
    //   image: 'https://i1.pickpik.com/photos/105/153/284/turtle-underwater-marine-fish-preview.jpg',
    //   price: '50 per month',
    //   description: 'words'
    // },

    // {
    //   title: 'Trumpet Fish',
    //   image: 'https://live.staticflickr.com/65535/51939573062_1b34f537e9_b.jpg',
    //   price: '50 per month',
    //   description: 'words'
    // },

    // {
    //   title: 'Cuttlefish',
    //   image: 'https://live.staticflickr.com/3863/14412947916_d11dc50ca8_b.jpg',
    //   price: '50 per month',
    //   description: 'words'
    // // },

    // {
    //   title: 'Hawaiian Spiny Lobster',
    //   image: 'https://live.staticflickr.com/2908/13975389495_5b17616147_b.jpg',
    //   price: '50 per month',
    //   description: 'words'
    // },
    
    {
      title: 'Blue Toadfish',
      image: 'assets/bluetoadfish.cozumel.jack.png',
      price: '50 per month',
      description: 'words'
    },

    {
      title: 'Damselfish',
      image: 'assets/damselfish.cozumel.jack.png',
      price: '50 per month',
      description: 'words'
    },

    {
      title: 'Pufferfish',
      image: 'assets/puffer.fish.florida.jack.png',
      price: '50 per month',
      description: 'words'
    },

    {
      title: 'Queen Triggerfish',
      image: 'assets/queen.triggerfish.cozumel.jack.png',
      price: '50 per month',
      description: 'words'
    },

    {
      title: 'Sea Turtle',
      image: 'assets/sea.turtle.florida.jack.png',
      price: '50 per month',
      description: 'words'
    },
    
    {
      title: 'Squirrelfish',
      image: 'assets/squirrelfish.cozumel.jack.png',
      price: '50 per month',
      description: 'words'
    },

    ]
    
    var postHTML = " "
  
  
  
    for (var i=0; i < shopTwo.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shopTwo[i].title + '</h5>'
        var image = '<img width=550px src="' + shopTwo[i].image + '"/>'
        var price = '<p> $' + shopTwo[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shopTwo[i].description + '</p><button type="button" class="btn btn-warning">Sponsor Me!</button></div></div><br>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('marketTwo').innerHTML = postHTML


var shopThree = [
    {
      title: 'Octopus',
      image: 'https://i0.pickpik.com/photos/1011/749/144/fish-octopus-water-aquarium-thumb.jpg',
      price: '100 per month',
      description: 'words'
    },
    
    {
      title: 'Sealion',
      image: 'assets/sealion.jack.png',
      price: '100 per month',
      description: 'words'
    },

    {
      title: 'Hammerhead Shark',
      image: 'assets/hammerhead.florida.jack.png',
      price: '100 per month',
      description: 'words'
    },

    {
      title: 'Nurse Shark',
      image: 'assets/nurseshark.cozumel.jack.png',
      price: '100 per month',
      description: 'words'
    },

    {
      title: 'Spotted Eagle Sting Ray',
      image: 'assets/ray.cozumel.jack.png',
      price: '100 per month',
      description: 'words'
    },

    ]
    
    var postHTML = " "
  
  
  
    for (var i=0; i < shopThree.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shopThree[i].title + '</h5>'
        var image = '<img width=550px src="' + shopThree[i].image + '"/>'
        var price = '<p> $' + shopThree[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shopThree[i].description + '</p><button type="button" class="btn btn-warning">Sponsor Me!</button></div></div><br>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('marketThree').innerHTML = postHTML
