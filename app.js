var shopOne = [
  
    {
      title: 'Spanish Shawl Nudibranch',
      image: 'assets/spanish.shawl.jack.png',
      description: 'Spanish shawl nudibranches, known for their vibrant orange and purple hues, inhabit the rocky shores of the eastern Pacific Ocean, from Alaska to Baja California. These small sea slugs can often be found amongst tide pools and kelp forests, where they feed on various species of sea anemones.',
      name: 'Ayda'
    },

    {
      title: 'Christmas Tree Worm',
      image: 'https://live.staticflickr.com/3676/11531111734_ca68c717bb_b.jpg',
      description: "Christmas tree worms are brilliantly colored marine worms found in tropical coral reefs worldwide, including the Caribbean Sea, the Red Sea, and the Indo-Pacific region. They inhabit coral substrates, forming spiral-shaped tubes adorned with feathery, tree-like appendages that they extend to filter feed on plankton.",
      name: 'Wally'
    },

    {
      title: 'Cleaner Shrimp',
      image: 'assets/cleaner.shrimp.curacao.jack.png',
      description: "Cleaner shrimp are fascinating crustaceans inhabiting coral reefs across tropical oceans, particularly in the Caribbean Sea and the Indo-Pacific region. These shrimp species establish cleaning stations where they meticulously groom parasites and dead tissue off fish, forming symbiotic relationships crucial for the reef's health and balance.",
      name: 'Cathilda'
    },

    {
      title: 'Harlequin Shrimp',
      image: 'assets/harlequin.shrimp.costa.rica.jack.png',
      description: "Harlequin shrimp, known for their striking coloration and unique feeding habits, are found in coral reefs throughout the Indian and Pacific Oceans, particularly in areas like Indonesia and the Great Barrier Reef. These shrimp primarily feed on starfish, using their powerful claws to pry apart the starfish's arms and consume the soft tissue inside, making them important predators in reef ecosystems.",
      name: 'Fabian'
    },
    {
      title: 'Hermit Crab',
      image: 'assets/hermit.crab.cozumel.jack.png',
      description: "Hermit crabs are ubiquitous inhabitants of coral reefs worldwide, found in tropical oceans from the Caribbean Sea to the Indo-Pacific region. These resourceful crustaceans utilize discarded mollusk shells as portable homes, scavenging for food and shelter along the reef floor, contributing to the ecosystem's nutrient cycling and biodiversity.",
      name: "Gilear"
    },
    {
      title: 'Yellow Seahorse',
      image: 'https://i1.pickpik.com/photos/455/349/247/seahorse-sea-horse-yellow-marine-preview.jpg',
      description: "Yellow seahorses, characterized by their intricate patterns and vibrant coloration, are often found camouflaged among the coral reefs of the Indo-Pacific region, including areas like Australia's Great Barrier Reef and the Philippines. These elusive creatures rely on their prehensile tails to anchor themselves to coral branches and seagrass beds, blending seamlessly into their surroundings while they patiently wait to ambush prey.",
      name: "Adaine"
    },
    ]

    var postHTML = " "
    for (var i = 0; i < shopOne.length; i++){
      var concatName = shopOne[i].name + " the " + shopOne[i].title ;
      var heading = '<div class="row gx-5 product"><div class="col-lg pb-4"><h5>' + concatName + '</h5>'
      var image = '<img width="550px" src="' + shopOne[i].image + '"/></div>'
      var description = '<div class="col-md d-flex align-items-center"><br><span><p class="customBorder">' + shopOne[i].description + '</p>'
      var name = '<p><em class="text-muted">$10 per month</em></p><button type="button" class="btn">Sponsor ' + shopOne[i].name + '</button></span></div></div><br>'
      var concatThis = heading + image + description + name;
      postHTML = postHTML + concatThis
    }
    document.getElementById('marketOne').innerHTML = postHTML


var shopTwo = [
    {
      title: 'Blue Toadfish',
      image: 'assets/bluetoadfish.cozumel.jack.png',
      description: "Blue toadfish, recognizable by their vibrant blue coloration and stout bodies, inhabit the coastal waters of the western Atlantic Ocean, ranging from Massachusetts to the Gulf of Mexico and down to the coast of Brazil. These nocturnal predators prefer shallow, sandy or muddy bottoms where they can burrow and hide during the day, emerging at night to hunt for small fish and invertebrates.",
      name: "Ragh"
    },
    {
      title: 'Starfish',
      image: 'assets/starfish.png',
      description: "Starfish, also known as sea stars, are found in oceans around the world, from tropical coral reefs to polar regions. These iconic marine invertebrates play crucial roles in their ecosystems as predators and scavengers, using their tube feet to move along the seabed and their powerful arms to pry open shellfish for food.",
      name: 'Jace'
    },
    {
      title: 'Trumpetfish',
      image: 'assets/trumpetfish.florida.jack.png',
      description: "Trumpetfish are elongated, predatory fish commonly found in tropical and subtropical waters worldwide, inhabiting coral reefs, seagrass beds, and rocky shores. With their slender bodies and tubular snouts resembling a trumpet, they rely on camouflage to ambush prey, often blending seamlessly into their surroundings to surprise unsuspecting prey such as small fish and crustaceans.",
      name: "Buddy"
    },
    {
      title: 'Damselfish',
      image: 'assets/damselfish.cozumel.jack.png',
      description: "Damselfish are small, brightly colored fish found in tropical and subtropical waters worldwide, particularly in coral reefs. They inhabit various reef habitats, including lagoons, channels, and outer reef slopes. Damselfish are known for their territorial behavior and can often be seen darting among coral branches, defending their territories and feeding on plankton and algae.",
      name: 'Fig'
    },

    {
      title: 'Pufferfish',
      image: 'assets/puffer.fish.florida.jack.png',
      description: "Pufferfish, known for their ability to inflate into a ball-like shape as a defense mechanism, are found in tropical and subtropical waters around the world, inhabiting coral reefs, rocky coastlines, and seagrass beds. These fascinating fish feed on a diet consisting mainly of algae, mollusks, and crustaceans, using their powerful beaks to crush shells and their unique physiology to deter predators.",
      name: "Gorgug"
    },

    {
      title: 'Queen Triggerfish',
      image: 'assets/queen.triggerfish.cozumel.jack.png',
      description: "Queen triggerfish, renowned for their vibrant colors and intricate patterns, inhabit coral reefs throughout the tropical waters of the Atlantic Ocean. These striking fish often seek shelter among coral formations and rocky crevices, where they feed on a varied diet consisting of crustaceans, mollusks, and other small invertebrates, playing a crucial role in reef ecosystems as both predators and prey.",
      name: 'Kristen'
    },

    {
      title: 'Sea Turtle',
      image: 'assets/sea turtle.png',
      description: "Sea turtles are reptiles that inhabit oceans around the world, favoring warm tropical and subtropical waters. They can be found nesting on sandy beaches and foraging in coastal areas, coral reefs, and open ocean habitats. Sea turtles play vital roles in marine ecosystems as both predators and prey, while also serving as flagship species for ocean conservation.",
      name: "Shellford"
    },
    
    {
      title: 'Squirrelfish',
      image: 'assets/squirrelfish.cozumel.jack.png',
      description: "Squirrelfish are nocturnal, reef-dwelling fish found in tropical and subtropical waters worldwide, predominantly in the Atlantic, Indian, and Pacific Oceans. They inhabit coral reefs and rocky areas, often seeking shelter in crevices and caves during the day and emerging at night to forage for small crustaceans and other prey. These fish are characterized by their large eyes, which aid in their nighttime hunting activities.",
      name: "Rizz"
    },

    ]
    
    var postHTML = " "
  
    for (var i = 0; i < shopTwo.length; i++){
      var concatName = shopTwo[i].name + " the " + shopTwo[i].title;
      var heading = '<div class="row product"><div class="col-lg pb-4"><h5>' + concatName + '</h5>'
      var image = '<img width="550px" src="' + shopTwo[i].image + '"/></div>'
      var description = '<div class="col-lg d-flex align-items-center"><span><p class="customBorder">' + shopTwo[i].description + '</p>'
      var price = '<p><em class="text-muted"> $50 per month </em></p><button type="button" class="btn">Sponsor '+ shopTwo[i].name + '</button></span></div></div><br>'
      var concatThis = heading + image + description + price;
      postHTML = postHTML + concatThis
    }
    document.getElementById('marketTwo').innerHTML = postHTML


var shopThree = [
    
    {
      title: 'Sealion',
      image: 'assets/sealion.jack.png',
      description: "Sea lions are charismatic marine mammals found in coastal waters of the northern and southern hemispheres. They inhabit a range of environments, including rocky shores, sandy beaches, and offshore islands. From the sun-drenched beaches of California to the rugged coastlines of South America, sea lions are known for their agility in the water and their social behavior both on land and at sea.",
      name: "Cassandra"
    },

    {
      title: 'Hammerhead Shark',
      image: 'assets/hammerhead.florida.jack.png',
      description: "Hammerhead sharks are iconic predators known for their distinctive hammer-shaped heads, called cephalofoils. They inhabit warm coastal waters worldwide, including tropical and subtropical regions. From the Pacific Ocean to the Atlantic and Indian Oceans, hammerhead sharks can be found patrolling coral reefs, rocky coastlines, and deep-sea habitats, where they hunt a variety of prey, including fish, squid, and crustaceans.",
      name: "Gorthalax"
    },

    {
      title: 'Nurse Shark',
      image: 'assets/nurseshark.cozumel.jack.png',
      description: "Nurse sharks are nocturnal, bottom-dwelling sharks found in warm, shallow waters throughout the western Atlantic Ocean and the eastern Pacific Ocean. They inhabit coral reefs, mangrove forests, and sandy flats, where they often rest during the day in caves and crevices. These docile sharks are known for their distinctive barbels near their nostrils, which they use to sense prey hidden in the sand.",
      name: 'Jawbone'
    },

    {
      title: 'Spotted Eagle Sting Ray',
      image: 'assets/ray.cozumel.jack.png',
      description: "Spotted eagle rays are majestic, kite-shaped rays found in tropical and subtropical waters worldwide, particularly in the Atlantic, Indian, and Pacific Oceans. They inhabit a variety of coastal habitats, including coral reefs, sandy flats, and seagrass beds, where they glide gracefully in search of crustaceans, mollusks, and small fish. With their striking spotted patterns and elongated tails, spotted eagle rays are a sight to behold in the vibrant ecosystems they call home.",
      name: "Night Yorb"
    },
    {
      title: 'Octopus',
      image: 'https://i0.pickpik.com/photos/1011/749/144/fish-octopus-water-aquarium-thumb.jpg',
      description: "Octopuses are highly intelligent cephalopods found in oceans globally, from shallow coastal waters to the deep sea. They inhabit various habitats, including coral reefs, kelp forests, and sandy bottoms, often seeking refuge in crevices and dens. Known for their remarkable camouflage abilities and dexterous tentacles, octopuses are skilled predators, feeding on crustaceans, mollusks, and fish.",
      name: "James"
    }

    ]
    
    var postHTML = " "
  
  
  
    for (var i = 0; i < shopThree.length; i++){
      var concatName = shopThree[i].name + " the " + shopThree[i].title;
      var heading = '<div class="row product"><div class="col-md pb-4"><h5>' + concatName + '</h5>'
      var image = '<img width="550px" src="' + shopThree[i].image + '"/></div>'
      var description = '<div class="col-md d-flex align-items-center"><span><p class="customBorder">' + shopThree[i].description + '</p>'
      var price = '<p><em class="text-muted"> $100 per month</em></p><button type="button" class="btn">Sponsor ' + shopThree[i].name + '</button></span></div></div><br>'
      var concatThis = heading + image + description + price;
      postHTML = postHTML + concatThis
    }
    document.getElementById('marketThree').innerHTML = postHTML
