let locationList = [
  {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://www.holidify.com/images/cmsuploads/compressed/3551_20190228103219.jpg",
    "rating": "⭐️⭐️⭐️⭐️⭐️"
  },
  {
    "id": 2,
    "title": "Eyeshadow Palette with Mirror",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/564x/36/c1/68/36c168dc2ff64fd2da8d1779fb8162a5.jpg",
    "rating": "⭐️⭐️⭐️⭐️"
  },
  {
    "id": 3,
    "title": "Powder Canister",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/564x/bf/19/3b/bf193b0d26708c465e9e7a90cf458e52.jpg",
    "rating": "⭐️⭐️⭐️"
  },
  {
    "id": 4,
    "title": "Red Lipstick",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/236x/6c/17/8c/6c178c3111d02f6a4fce22ba9f1b45b6.jpg",
    "rating": "⭐️⭐️⭐️⭐️⭐️"
  },
  {
    "id": 5,
    "title": "Essence Mascara Lash Princess",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/736x/3a/f1/64/3af1643d7f7e39926c497e7871a2ba9c.jpg",
    "rating": "⭐️⭐️⭐️⭐️"
  },
  {
    "id": 6,
    "title": "Eyeshadow Palette with Mirror",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/236x/74/df/a1/74dfa1e0f9a9fcfec96b6e01e91c09cd.jpg",
    "rating": "⭐️⭐️⭐️"
  },
  {
    "id": 7,
    "title": "Powder Canister",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/236x/a8/48/c4/a848c4e41f714bbabd02e0dee8e4c409.jpg",
    "rating": "⭐️⭐️⭐️⭐️⭐️"
  },
  {
    "id": 8,
    "title": "Red Lipstick",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/564x/3f/d2/22/3fd22298f59ca62d156d839e9ac25c56.jpg",
    "rating": "⭐️⭐️⭐️⭐️"
  },
  {
    "id": 9,
    "title": "Essence Mascara Lash Princess",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/564x/b6/8b/bf/b68bbfafc5c1d3a98d39d83a13b1d1d6.jpg",
    "rating": "⭐️⭐️⭐️"
  },
  {
    "id": 10,
    "title": "Eyeshadow Palette with Mirror",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Bada-Ganapati-Temple.jpg",
    "rating": "⭐️⭐️⭐️⭐️⭐️"
  },
  {
    "id": 11,
    "title": "Powder Canister",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/236x/d2/73/4a/d2734af1779523173c60da682b6cd0e7.jpg",
    "rating": "⭐️⭐️⭐️"
  },
  {
    "id": 12,
    "title": "Red Lipstick",
    "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, similique.",
    "images": "https://i.pinimg.com/736x/3a/f1/64/3af1643d7f7e39926c497e7871a2ba9c.jpg",
    "rating": "⭐️⭐️⭐️⭐️"
  }
];


  
 
function UI() {
    //background
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.background = 'linear-gradient(135deg, #FEE9E3, #FBDDD4)';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.minHeight = '100vh';
    document.body.style.margin = '0';
 
    // Main container display
    const mainContainer = document.getElementById('main');
    mainContainer.style.backgroundColor = '#FFFFFF';
    mainContainer.style.width = '90%';
    mainContainer.style.maxWidth = '1200px';
    mainContainer.style.height = '500px';
    mainContainer.style.display = 'flex';
    mainContainer.style.padding = '20px';
    mainContainer.style.borderRadius = '20px';
    mainContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    mainContainer.style.overflow = 'hidden';
 
    // Sidebar  left side
    const sidebar = document.createElement('div');
    sidebar.style.backgroundColor = '#F6F6F6';
    sidebar.style.width = '15%';
    sidebar.style.display = 'flex';
    sidebar.style.flexDirection = 'column';
    sidebar.style.alignItems = 'center';
    sidebar.style.padding = '20px 10px';
    sidebar.style.borderRadius = '20px';
    sidebar.style.position = 'sticky';
    sidebar.style.top = '0';
    sidebar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';

    const sidebarItems = [
        { icon: '🏠', label: 'Home' },
        { icon: '📰', label: 'News' },     
        { icon: '👨🏻‍💼', label: 'Profile' },
        { icon: '⚙', label: 'Settings' }
    ];


   for (const item of sidebarItems) {
        const iconContainer = document.createElement('div');
        iconContainer.style.display = 'flex';
        iconContainer.style.flexDirection = 'column';
        iconContainer.style.alignItems = 'center';
        iconContainer.style.marginBottom = '20px';
         
        // Icon properties
        const iconDiv = document.createElement('div');

        iconDiv.textContent = item.icon;
        iconDiv.style.backgroundColor = '#EEEEEE';
        iconDiv.style.width = '50px';
        iconDiv.style.height = '50px';
        iconDiv.style.borderRadius = '50%';
        iconDiv.style.display = 'flex';
        iconDiv.style.alignItems = 'center';
        iconDiv.style.justifyContent = 'center';
        iconDiv.style.color = 'white';
        iconDiv.style.fontSize = '20px';
        iconDiv.style.transition = 'background-color 0.2s, transform 0.2s';
        iconDiv.style.cursor = 'pointer';
    
    
        iconDiv.addEventListener('mouseover', () => {
            iconDiv.style.backgroundColor = '98DED9';
            iconDiv.style.transform = 'scale(1.5)';
        });
        iconDiv.addEventListener('mouseout', () => {
            iconDiv.style.backgroundColor = '#EEEEEE';
            iconDiv.style.transform = 'scale(1)';
        });
    
        
        if (item.label === 'Home') {
            iconDiv.addEventListener('click', () => {
              // document.getElementById("main")
              // window.location.reload();
              def();
   
            });
        }

        if (item.label ==='News'){
          iconDiv.addEventListener('click',()=>{
            News();
          })

        }
    
        if (item.label ==='Profile'){
          iconDiv.addEventListener('click',()=>{
            News();
          })

        } if (item.label ==='Settings'){
          iconDiv.addEventListener('click',()=>{
            News();
          })

        }
        // Icon label
        const labelDiv = document.createElement('div');
        labelDiv.textContent = item.label;
        labelDiv.style.color = '#333';
        labelDiv.style.fontSize = '12px';
        labelDiv.style.marginTop = '8px';
    
        iconContainer.appendChild(iconDiv);
        iconContainer.appendChild(labelDiv);
        sidebar.appendChild(iconContainer);
    }
    
    

    //    Main 
    
    let mainContent = document.createElement('div');
    mainContent.style.flex = '1';
    mainContent.style.padding = '20px';
    mainContent.style.display = 'flex';
    mainContent.style.flexDirection = 'column';
    mainContent.style.overflowY = 'auto';
    mainContent.id ='main';

   def();

     
    function def(){
    // header
    mainContent.innerHTML ="";
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '20px';


    // search
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.style.width = '70%';
    searchInput.style.padding = '8px 12px';
    searchInput.style.border = '1px solid #ddd';
    searchInput.style.borderRadius = '20px';
    header.appendChild(searchInput);




    // Stories  
    const stories = document.createElement('div');
    const storiesTitle = document.createElement('h3');
    storiesTitle.textContent = "Best Places";
    stories.appendChild(storiesTitle);
    const storiesContainer = document.createElement('div');
    storiesContainer.style.display = 'flex';
    storiesContainer.style.flexWrap = 'wrap';
    storiesContainer.style.gap = '10px';

    // Fetch 
    for (const element of locationList) {
      let storyDiv = document.createElement('div');  
      storyDiv.setAttribute("class","card ");
      storyDiv.setAttribute("style","width: 18rem;");
  
      let img = document.createElement("img");
      img.src = element.images;
      img.setAttribute("style","height:140px");
      img.setAttribute("class","card-img-top");
      storyDiv.appendChild(img);
      
      let cbody = document.createElement("div");
      cbody.setAttribute("class", "card-body d-flex flex-column justify-content-between");
      storyDiv.appendChild(cbody);
          
      let h5 = document.createElement("h5");
      h5.setAttribute("class","card-title");
      h5.innerHTML = element.title;
      cbody.appendChild(h5);
  
      let p = document.createElement("p");
      p.setAttribute("class","card-title");
      p.innerHTML = element.paragraph;
      cbody.appendChild(p);
  
      
      let a = document.createElement("a");
      a.setAttribute("class","btn btn-primary");
      a.setAttribute("style", "width:  100%");  
      a.innerHTML = "Visit here";




      //new tab
      a.addEventListener('click', () => {
         mainContent.innerHTML = "";
        
         const detailView = document.createElement('div');
        detailView.style.padding = '20px';
        detailView.style.borderRadius = '20px';
        detailView.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        detailView.style.backgroundColor = '#ffffff';
        detailView.style.maxWidth = '400px';
        detailView.style.margin = '0 auto';
    
        // Image
        const img = document.createElement('img');
        img.src = element.images;
        img.style.width = '100%';
        img.style.height = '200px';
        img.style.borderTopLeftRadius = '20px';
        img.style.borderTopRightRadius = '20px';
        img.style.objectFit = 'fill';
        detailView.appendChild(img);
    

        
        const titleSection = document.createElement('div');
        titleSection.style.padding = '20px';
    
        const title = document.createElement('h2');
        title.textContent = element.title;
        title.style.margin = '0';
        title.style.fontSize = '24px';
        title.style.fontWeight = 'bold';
        titleSection.appendChild(title);
    

        //location
        const location = document.createElement('p');
        location.style.display = 'flex';
        location.style.alignItems = 'center';
        location.style.color = '#555';
        location.innerHTML = `<i class="fa fa-map-marker" aria-hidden="true" style="color: blue; margin-right: 5px;"></i> Da Nang, Viet Nam`;
        titleSection.appendChild(location);
    
        // Rating
        const rating = document.createElement('p');
        rating.innerHTML =element.rating;
        titleSection.appendChild(rating);
    
        detailView.appendChild(titleSection);
    
        // About section
        const aboutSection = document.createElement('div');
        aboutSection.style.padding = '0 20px 20px 20px';
    
        const aboutTitle = document.createElement('h3');
        aboutTitle.textContent = 'About';
        aboutTitle.style.fontSize = '18px';
        aboutTitle.style.marginBottom = '5px';
        aboutSection.appendChild(aboutTitle);
    
        const aboutText = document.createElement('p');
        aboutText.textContent = element.paragraph;
        aboutText.style.fontSize = '14px';
        aboutText.style.lineHeight = '1.5';
        aboutSection.appendChild(aboutText);
    
        detailView.appendChild(aboutSection);
    
        // Including Services
        const servicesSection = document.createElement('div');
        servicesSection.style.padding = '0 20px 20px 20px';
    
        const servicesTitle = document.createElement('h3');
        servicesTitle.textContent = 'Including Services';
        servicesTitle.style.fontSize = '18px';
        servicesTitle.style.marginBottom = '5px';
        servicesSection.appendChild(servicesTitle);
    
        const servicesText = document.createElement('p');
        servicesText.textContent = 'Air ticket, train ticket, 3 star hotel, buffet...';
        servicesText.style.fontSize = '14px';
        servicesText.style.lineHeight = '1.5';
        servicesSection.appendChild(servicesText);
    
        detailView.appendChild(servicesSection);
    
        // Date, Guide, Nights
        const optionsSection = document.createElement('div');
        optionsSection.style.display = 'flex';
        optionsSection.style.justifyContent = 'space-around';
        optionsSection.style.padding = '10px 20px';
    
        const dateOption = document.createElement('div');
        dateOption.textContent = '16-20 Nov';
        dateOption.style.backgroundColor = '#f0f0f0';
        dateOption.style.padding = '5px 10px';
        dateOption.style.borderRadius = '5px';
        optionsSection.appendChild(dateOption);
    
        const guideOption = document.createElement('div');
        guideOption.textContent = '3 Tour guide';
        guideOption.style.backgroundColor = '#f0f0f0';
        guideOption.style.padding = '5px 10px';
        guideOption.style.borderRadius = '5px';
        optionsSection.appendChild(guideOption);
    
        const nightsOption = document.createElement('div');
        nightsOption.textContent = '4 Nights';
        nightsOption.style.backgroundColor = '#f0f0f0';
        nightsOption.style.padding = '5px 10px';
        nightsOption.style.borderRadius = '5px';
        optionsSection.appendChild(nightsOption);
    
        detailView.appendChild(optionsSection);
    
        // Price and Book Now button
        const footerSection = document.createElement('div');
        footerSection.style.display = 'flex';
        footerSection.style.justifyContent = 'space-between';
        footerSection.style.alignItems = 'center';
        footerSection.style.padding = '20px';
    
        const price = document.createElement('p');
        price.textContent = '';
        price.style.fontSize = '20px';
        price.style.fontWeight = 'bold';
        footerSection.appendChild(price);
    
        const bookButton = document.createElement('button');
        bookButton.textContent = 'BOOK NOW';
        bookButton.className = 'btn btn-primary';
        bookButton.style.padding = '10px 20px';
        footerSection.appendChild(bookButton);
    
        detailView.appendChild(footerSection);
    
        // Append the detail view to mainContent
        mainContent.appendChild(detailView);
    });
    
    
  
      cbody.appendChild(a);
      storiesContainer.appendChild(storyDiv);    
  }
  
  stories.appendChild(storiesContainer);
  mainContent.appendChild(header);
  mainContent.appendChild(stories);
    }




    function News(){
 mainContent.innerHTML = "";
   let data = [
    {
      "author": "Harsh Kapoor",
      "title": "Andy Roddick Adds Forgotten Tennis Legend’s Name to Unfortunate Narrative Carried by Alexander Zverev",
      "description": "When talking about tennis, a grand slam is the ultimate prize one can think of. Any player, who dreams of becoming a professional wants to win a grand slam someday. However, not everyone has been able to make their dreams turn into reality. One of those stars is Alexander Zverev. Highly regarded as one of [&#8230;]The post Andy Roddick Adds Forgotten Tennis Legend’s Name to Unfortunate Narrative Carried by Alexander Zverev appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/atp-tennis-news-andy-roddick-adds-forgotten-tennis-legends-name-to-unfortunate-narrative-carried-by-alexander-zverev/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/2024-09-21T182458Z_129600529_UP1EK9L1F5J2D_RTRMADP_3_TENNIS-LAVERCUP-449x315.jpg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T06:42:30+00:00"
    },
    {
      "author": "Upasana Banerjee",
      "title": "Jessica Pegula Sparks True BFF Goals With Madison Keys as She Unevils Her Off-Season Plans by Teasing Into the Latter’s Nuptials",
      "description": "Who says rivals can&#8217;t be friends? Look at America&#8217;s shining stars in tennis, Jessica Pegula and Madison Keys, whose friendship has transcended competition and offered the fraternity a beautiful display of love and care. Despite rooting for each other&#8217;s success, Pegula and Keys share a tough rivalry on the court. Following Pegula&#8217;s revelation of her [&#8230;]The post Jessica Pegula Sparks True BFF Goals With Madison Keys as She Unevils Her Off-Season Plans by Teasing Into the Latter’s Nuptials appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/wta-tennis-news-jessica-pegula-sparks-true-bff-goals-with-madison-keys-as-she-unevils-her-off-season-plans-by-teasing-into-the-latters-nuptials/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/Madison-Keys-Jessica-Pegula-560x315.jpg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T06:24:08+00:00"
    },
    {
      "author": "By Northern Star Sports Staff",
      "title": "Ninova and Dimitriev share Huskie of the Week Award",
      "description": "NIU women’s tennis senior Erika Dimitriev and junior Nataly Ninova earned Co-Huskie of the Week honors after winning the doubles match in flight 1 of the NIU Huskie Invitational, which wrapped up on Sunday. The duo won flight 1 after conquering double partners from the University of St. Thomas and Lewis University. On top of the doubles title, Dimitriev also earned the title for the singles match in the first flight. Dimitriev, Ninova and the rest of the NIU women’s tennis team return to action in January. Next week’s Huskie of the Week will be announced Nov. 11.The Northern Star...",
      "url": "https://northernstar.info/120246/sports/ninova-and-dimitriev-share-huskie-of-the-week-award/",
      "source": "northernstar",
      "image": null,
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T04:53:23+00:00"
    },
    {
      "author": "Jackson Miller, Sports Reporter",
      "title": "Iowa women’s tennis struggles in singles matches at Spartan Invitational",
      "description": "The Iowa women’s tennis team struggled in singles play but strengthened in doubles as it competed at the Spartan Invitational in East Lansing, Michigan, over the weekend. The Hawkeyes faced players from Michigan State, Northwestern, Butler, DePaul, and Eastern Michigan.Fourth-year Barbora Pokorna and third-year Nikita Vishwase took home a victory in doubles on day one, taking down Regina Mendez and Kseniia Saenko of Eastern Michigan by a score of 6-3.In singles, Iowa lost all three matchups on day one, though. Michigan State’s Ellie Blackford defeated Pokorna, 6-4 and 6-2. Amara Brahbhahtt...",
      "url": "https://dailyiowan.com/2024/11/04/iowa-womens-tennis-struggles-in-singles-matches-at-spartan-invitational/",
      "source": "dailyiowan",
      "image": null,
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T04:22:06+00:00"
    },
    {
      "author": "Joshua Mayne",
      "title": "Who is the world No.1 in men's tennis? Updated ATP rankings and explainer",
      "description": "The ATP rankings have been updated and we'll be keeping track of every player inside the top 10.",
      "url": "https://www.sportingnews.com/us/tennis/news/world-no-1-tennis-men-atp-rankings-explainer-updated/w5kranveoicurzao0msj7fh1",
      "source": "Sporting News",
      "image": "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-06/Untitled%20design%20-%202024-06-11T082417.109.png?h=99362da5&amp;itok=-ZrTM63a",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T03:40:18+00:00"
    },
    {
      "author": "Upasana Banerjee",
      "title": "Serena Williams’ Daughter Adira’s Adorable Tennis Job Sparks Priceless 6-Word Taskmaster Reaction from Proud Dad Alexis Ohanian",
      "description": "What can be more precious than a mother-daughter bonding moment? Probably, nothing! Former WTA number one Serena Williams offered a glimpse of her recent moments with her daughter Adira which was enough to make people fall in love with motherhood. Now, it has been only a few months since fans started receiving glimpses of Williams&#8217; [&#8230;]The post Serena Williams’ Daughter Adira’s Adorable Tennis Job Sparks Priceless 6-Word Taskmaster Reaction from Proud Dad Alexis Ohanian appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/wta-tennis-news-serena-williams-daughter-adiras-adorable-tennis-job-sparks-priceless-six-word-taskmaster-reaction-from-proud-dad-alexis-ohanian/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/WhatsApp-Image-2024-11-04-at-22.36.02-526x315.jpeg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T02:01:01+00:00"
    },
    {
      "author": "Rupam Shukla",
      "title": "‘Throwing Saudi Money at Tennis Won’t Fix Issues’ – Fans Vent Frustration Over $15M WTA Event With Coco Gauff, Iga Swiatek, and Other Stars Amid Latest Expose",
      "description": "The WTA Finals have kicked off in Riyadh, and while the stakes are sky-high with tennis titans like Aryna Sabalenka, Iga Swiatek, and Coco Gauff battling for glory, there’s an unexpected twist—empty seats. Fans and experts alike are noticing the glaring lack of crowd energy in the arena, a stark contrast to the excitement expected [&#8230;]The post ‘Throwing Saudi Money at Tennis Won’t Fix Issues’ – Fans Vent Frustration Over $15M WTA Event With Coco Gauff, Iga Swiatek, and Other Stars Amid Latest Expose appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/wta-tennis-news-throwing-saudi-money-at-tennis-wont-fix-issues-fans-vent-frustration-over-fifteen-m-wta-event-with-coco-gauff-iga-swiatek-and-other-stars-amid-latest-expose/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/WhatsApp-Image-2024-05-06-at-17.35.22-560x315.jpeg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T01:51:11+00:00"
    },
    {
      "author": "Dan Albano",
      "title": "Six Orange County girls tennis teams picked for the CIF-SS Open Division playoffs",
      "description": "Portola, Santa Margarita and Corona del Mar are seeded in the top-four behind No. 1 Palos Verdes.",
      "url": "https://www.ocregister.com/2024/11/04/six-orange-county-girls-tennis-teams-picked-for-the-cif-ss-open-division-playoffs/",
      "source": "ocregister",
      "image": "https://www.ocregister.com/wp-content/uploads/2024/09/ocvarsity-g-tennis4.jpg?w=1400px&strip=all",
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T01:03:04+00:00"
    },
    {
      "author": "Rupam Shukla",
      "title": "‘Comeback Has Started in Prequalifying’- Serena Williams’ Ex-Coaches React Warmly as Little Adira Ohanian Steps Up as Mom’s Sweetest Helper",
      "description": "Serena Williams might have bid farewell to the courts, but her presence is as captivating as ever for tennis fans worldwide. The American icon continues to capture hearts, whether she’s gracing courtside events or dazzling fans with her entrepreneurial ventures. She has become a true off-court superstar, and the headlines just keep rolling in. But [&#8230;]The post ‘Comeback Has Started in Prequalifying’- Serena Williams’ Ex-Coaches React Warmly as Little Adira Ohanian Steps Up as Mom’s Sweetest Helper appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/wta-tennis-news-comeback-has-started-in-prequalifying-serena-williams-ex-coaches-react-warmly-as-little-adira-ohanian-steps-up-as-moms-sweetest-helper/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/SaveClip.App_464258582_18467038414015148_2454709951686394844_n-e1730767638735-450x315.jpg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T00:47:29+00:00"
    },
    {
      "author": "Marin Independent Journal",
      "title": "Sports in Marin: Tuesday, Wednesday",
      "description": "Tuesday Girls tennis MCAL singles/doubles, 11 a.m., Novato HS",
      "url": "https://www.marinij.com/2024/11/04/sports-in-marin-tuesday-wednesday-165/",
      "source": "marinij",
      "image": null,
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-05T00:46:38+00:00"
    },
    {
      "author": "Shay Castle",
      "title": "CU, City of Boulder team up to build tennis courts",
      "description": "Local news at a glanceThe post CU, City of Boulder team up to build tennis courts appeared first on Boulder Weekly.",
      "url": "https://boulderweekly.com/news/tennis-courts-cu-boulder/?utm_source=rss&utm_medium=rss&utm_campaign=tennis-courts-cu-boulder",
      "source": "boulderweekly",
      "image": null,
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T22:48:16+00:00"
    },
    {
      "author": "The Times Record",
      "title": "Brunswick business owner awarded 2024 Manager of the Year for Small Racquet Facilities",
      "description": "Rob Manter, owner and manager of Maine Pines Racquet & Fitness in Brunswick, was recently awarded the national 2024 Manager of the Year for Small Racquet Facilities by the United States Professional Tennis Association, Inc. (USPTA). Manter, who has owned the club since 1998, was one of three pros to start USPTA League Programs in [&#8230;]",
      "url": "https://www.pressherald.com/2024/11/04/brunswick-business-owner-awarded-2024-manager-of-the-year-for-small-racquet-facilities/",
      "source": "timesrecord",
      "image": "https://w2pcms.com/wp-content/uploads/sites/10/2020/11/IMG_5373-rotated-e1605633622314.jpeg",
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T22:04:25+00:00"
    },
    {
      "author": "Eric-Paul Johnson",
      "title": "CIF-SS girls tennis playoffs: Several top Inland teams hitting the road for openers",
      "description": "The area's six top-ranked teams avoided the Open Division, but only Los Osos has a home match for the Division 1 playoff openers.",
      "url": "https://www.sbsun.com/2024/11/04/cif-ss-girls-tennis-playoffs-several-top-inland-teams-hitting-the-road-for-openers/",
      "source": "sbsun",
      "image": "https://www.sbsun.com/wp-content/uploads/2023/11/ocvarsity-g-tennis4.jpg?w=1400px&strip=all",
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T21:55:58+00:00"
    },
    {
      "author": "Eric-Paul Johnson",
      "title": "CIF-SS girls tennis playoffs: Several top Inland teams hitting the road for openers",
      "description": "The area's six top-ranked teams avoided the Open Division, but only Los Osos has a home match for the Division 1 playoff openers.",
      "url": "https://www.redlandsdailyfacts.com/2024/11/04/cif-ss-girls-tennis-playoffs-several-top-inland-teams-hitting-the-road-for-openers/",
      "source": "redlandsdailyfacts",
      "image": "https://www.redlandsdailyfacts.com/wp-content/uploads/2023/11/ocvarsity-g-tennis4.jpg?w=1400px&strip=all",
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T21:55:58+00:00"
    },
    {
      "author": "Eric-Paul Johnson",
      "title": "CIF-SS girls tennis playoffs: Several top Inland teams hitting the road for openers",
      "description": "The area's six top-ranked teams avoided the Open Division, but only Los Osos has a home match for the Division 1 playoff openers.",
      "url": "https://www.dailybulletin.com/2024/11/04/cif-ss-girls-tennis-playoffs-several-top-inland-teams-hitting-the-road-for-openers/",
      "source": "dailybulletin",
      "image": "https://www.dailybulletin.com/wp-content/uploads/2023/11/ocvarsity-g-tennis4.jpg?w=1400px&strip=all",
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T21:55:58+00:00"
    },
    {
      "author": "Vatsal Shah",
      "title": "Serena Williams’ Youngest Daughter Adira Steps Up as Mini-Helper for Legendary Mom in Heart-Melting Tennis Day-Out Photos",
      "description": "Kids often inherit the characteristics from their parents. The case of Serena Williams is no exception as tennis runs deep into her family. The American legend can often be seen sharing adorable glimpses with her husband and daughters. Recently, she shared a cute video of her younger daughter, Adira, offering her mother a helping hand [&#8230;]The post Serena Williams’ Youngest Daughter Adira Steps Up as Mini-Helper for Legendary Mom in Heart-Melting Tennis Day-Out Photos appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/wta-tennis-news-serena-williams-youngest-daughter-adira-steps-up-as-mini-helper-for-legendary-mom-in-heart-melting-tennis-day-out-photos/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/WhatsApp-Image-2024-11-04-at-22.36.02-526x315.jpeg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T21:47:39+00:00"
    },
    {
      "author": "Oska",
      "title": "Serena Williams Shares Heartwarming Moment on Tennis Court with Youngest Daughter Adira",
      "description": "Tennis icon Serena Williams is already nurturing a love for tennis in her youngest daughter, Adira, who she welcomed with husband Alexis Ohanian in August 2023. In an adorable video shared on Monday, Williams is seen following little Adira around the tennis court as she happily picks up tennis balls, showcasing a tender mother-daughter moment. &#8230;The post Serena Williams Shares Heartwarming Moment on Tennis Court with Youngest Daughter Adira appeared first on SportsRation.",
      "url": "https://sportsration.com/serena-williams-shares-heartwarming-moment-on-tennis-court-with-youngest-daughter-adira/",
      "source": "Sportsration: Nigeria Soccer | World Sports",
      "image": null,
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T20:49:55+00:00"
    },
    {
      "author": "Aarav Singh Gill",
      "title": "‘Them dimples gone hit every time’- Sloane Stephens’ Alluring ‘Beauty’ Outing Leaves Taylor Townsend and Tennis Influencer Jaw-Dropped",
      "description": "Sloane Stephens might not be performing at an all-time high on the WTA, but she is dripping in swagger outside of the courts. The American sensation has been plagued by a drop in form, a noteworthy concern for someone who lifted the US Open title in 2017. While her on-court adventures fail to navigate past [&#8230;]The post ‘Them dimples gone hit every time’- Sloane Stephens’ Alluring ‘Beauty’ Outing Leaves Taylor Townsend and Tennis Influencer Jaw-Dropped appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/wta-tennis-news-them-dimples-gone-hit-every-time-sloane-stephens-alluring-beauty-outing-leaves-taylor-townsend-and-tennis-influencer-jaw-dropped/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/20200403230738/sloane-stephens-i-still-want-my-mother-to-pay-my-cellphone-bill-473x315.jpg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T19:30:38+00:00"
    },
    {
      "author": "Firdows Matheen",
      "title": "‘Create Your Own Schedule’- Ex-WTA Pro Hits Back at Carlos Alcaraz, Jannik Sinner, and Others’ Scathing Criticism of Tennis’ Problem",
      "description": "The tennis tour is notoriously demanding. Players travel across multiple countries, endure intense training, and participate in long matches. Fatigue is common, and many have chosen to withdraw from competitions. Even top stars like Iga Swiatek and Carlos Alcaraz have spoken about the challenges of managing the grueling schedule. However, a former pro has a [&#8230;]The post ‘Create Your Own Schedule’- Ex-WTA Pro Hits Back at Carlos Alcaraz, Jannik Sinner, and Others’ Scathing Criticism of Tennis’ Problem appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/wta-tennis-news-create-your-own-schedule-carlos-alcaraz-and-iga-swiateks-criticism-of-the-demanding-tennis-calendar-thrashed-by-spanish-ex-pro/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/Iga-Swiatek-Carlos-Alcaraz-560x315.jpeg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T19:09:31+00:00"
    },
    {
      "author": null,
      "title": "Champions crowned in tennis contest",
      "description": "The premier senior event on the Bahamas Lawn Tennis Association (BLTA) calendar came to a successful close on Sunday at the National Tennis Centre in Nassau, Bahamas. The following National Champions were crowned:",
      "url": "https://tribune242.com/news/2024/nov/04/champions-crowned-in-tennis-contest/",
      "source": "tribune242",
      "image": null,
      "category": "general",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T19:01:00+00:00"
    },
    {
      "author": "Vatsal Shah",
      "title": "Jannik Sinner’s High Profile Turin Entry Becomes Unforgettable as Fans Greet the World No.1 With an Exceptional Welcome",
      "description": "It all boils down to this point. After a hectic tennis season, and the year-ending showdown, the ATP Finals are just days away. The top eight players of the season will descend to Turin to stake a claim at winning the year-ending championships. However, there emerges a clear favorite to win the tournament, and it [&#8230;]The post Jannik Sinner’s High Profile Turin Entry Becomes Unforgettable as Fans Greet the World No.1 With an Exceptional Welcome appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/atp-tennis-news-jannik-sinners-high-profile-turin-entry-becomes-unforgettable-as-fans-greet-the-world-no-with-an-exceptional-welcome/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/2023-11-18T161816Z_500522553_UP1EJBI19AD9Q_RTRMADP_3_TENNIS-ATPFINALS-454x315.jpg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T17:18:52+00:00"
    },
    {
      "author": "Melina B. (REMOTE)",
      "title": "Süßer Post: Sophia Thomalla scherzt über Alexanders Pokal",
      "description": "Alexander Zverev (27) hat in Paris erneut bewiesen, dass er zur Weltspitze im Tennis gehört. Im Finale des Masters-1000-Turniers besiegte der 27-Jährige den Franzosen Ugo Humbert und sicherte sich damit seinen siebten Titel auf dieser Ebene. Seine Freundin Sophia Thomalla (35), die bald die neue Awardshow \"Die Reality Awards\" moderieren wird, feierte seinen Sieg auf ihre eigene humorvolle Art: Auf Instagram teilte sie ein Foto von Alexander mit dem ungewöhnlichen Pokal und kommentierte dazu: \"Endlich mal ein Baum zu Hause, der nicht eingeht.\"",
      "url": "https://www.promiflash.de/news/2024/11/04/suesser-post-sophia-thomalla-scherzt-ueber-alexanders-pokal.html",
      "source": "promiflash",
      "image": "https://content4.promiflash.de/article-images/video_1080/alexander-zverev-und-sophia-thomalla-posieren-6.jpg",
      "category": "general",
      "language": "de",
      "country": "de",
      "published_at": "2024-11-04T16:30:00+00:00"
    },
    {
      "author": "Aarav Singh Gill",
      "title": "‘Hope To Do Half of What She’s Done’- Coco Gauff Won’t Let the World Forget Venus Williams’ Gigantic Contribution to Tennis",
      "description": "Not a lesser-known fact but Venus Williams has redefined boundaries and expectations since she first stormed the sport three decades ago. Back then, women lacked a substantial bearing in tennis. However, Williams scripted jaw-dropping records that inspired millions of her followers to take motivation from her journey. One of those is the current World No. [&#8230;]The post ‘Hope To Do Half of What She’s Done’- Coco Gauff Won’t Let the World Forget Venus Williams’ Gigantic Contribution to Tennis appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/wta-tennis-news-hope-to-do-half-of-what-shes-done-coco-gauff-wont-let-the-world-forget-venus-williams-gigantic-contribution-to-tennis/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/Venus-Williams-Coco-Gauff-394x315.jpeg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T14:03:47+00:00"
    },
    {
      "author": "Sayantan Roy",
      "title": "Tennis Rumor: Iga Swiatek’s Cryptic Revelation After Nail-Biting WTA Finals Win Might Just Be About Her Coaching Drama",
      "description": "Iga is back! After having a &#8220;rusty&#8221; start to her first match at the 2024 WTA Finals, Iga Swiatek made a strong comeback to seal the deal against Barbora Krejcikova (CZE) on Sunday. She defeated her by 4-6,7-5,6-2 and next up for her is American superstar Coco Gauff. Swiatek has been out of action for [&#8230;]The post Tennis Rumor: Iga Swiatek’s Cryptic Revelation After Nail-Biting WTA Finals Win Might Just Be About Her Coaching Drama appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/wta-tennis-news-tennis-rumor-iga-swiateks-cryptic-revelation-after-nail-biting-wta-finals-win-might-just-be-about-her-coaching-drama/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/2024-07-31T161406Z_2079677823_UP1EK7V193GKL_RTRMADP_3_OLYMPICS-2024-TENNIS-473x315.jpg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T11:10:46+00:00"
    },
    {
      "author": "Firdows Matheen",
      "title": "‘Means the World’ – Emotional Alexander Zverev Shares Heartfelt Message for His Father-Led Team Post Glorious Paris Masters Win",
      "description": "Alexander Zverev is indeed taking the tennis world by storm! This season, he has shown incredible resilience, bouncing back after a tough quarterfinal exit at the Vienna Open against Lorenzo Musetti. Now, he’s back on his feet, having clinched the title at the 2024 Paris Masters, defeating Ugo Humbert with a commanding score of 6-2, [&#8230;]The post &#8216;Means the World&#8217; – Emotional Alexander Zverev Shares Heartfelt Message for His Father-Led Team Post Glorious Paris Masters Win appeared first on EssentiallySports.",
      "url": "https://www.essentiallysports.com/atp-tennis-news-means-the-world-emotional-alexander-zverev-shares-heartfelt-message-for-his-father-led-team-post-glorious-paris-masters-win/",
      "source": "Essentially Sports",
      "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/2024-07-02T154548Z_1719624807_UP1EK7217S9OT_RTRMADP_3_TENNIS-WIMBLEDON-440x315.jpg",
      "category": "sports",
      "language": "en",
      "country": "us",
      "published_at": "2024-11-04T07:28:02+00:00"
    }
  ]

       
        

      let storyd =document.createElement("div");
      storyd.setAttribute("style","height:150px;background-color:alice; border:1px solid");
     for (const element of object) {
       let story =document.createElement("div");
       story.setAttribute("style","height:100px;border:1px solid");
       
       storyd.appendChild(story);
     }
     
     mainContent.appendChild(storyd);



    }


     
     

   
    mainContainer.appendChild(sidebar);
    mainContainer.appendChild(mainContent);
    
  
}

 

