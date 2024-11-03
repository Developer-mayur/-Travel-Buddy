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
    sidebar.style.backgroundColor = '#F7CAC2';
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
        iconDiv.style.backgroundColor = '#FF7052';
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
            iconDiv.style.backgroundColor = '#FFA07A';
            iconDiv.style.transform = 'scale(1.1)';
        });
        iconDiv.addEventListener('mouseout', () => {
            iconDiv.style.backgroundColor = '#FF7052';
            iconDiv.style.transform = 'scale(1)';
        });
    
        
        if (item.label === 'Home') {
            iconDiv.addEventListener('click', () => {
                window.location.reload();
  
            });
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
    const mainContent = document.createElement('div');
    mainContent.style.flex = '1';
    mainContent.style.padding = '20px';
    mainContent.style.display = 'flex';
    mainContent.style.flexDirection = 'column';
    mainContent.style.overflowY = 'auto';

    // header
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
  




     
     

   
    mainContainer.appendChild(sidebar);
    mainContainer.appendChild(mainContent);
    mainContent.appendChild(header);
    mainContent.appendChild(stories);
}

 

