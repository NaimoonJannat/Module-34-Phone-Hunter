const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;

    displayPhones(phones, isShowAll);
}

// loadPhone();

const displayPhones = (phones, isShowAll) => {

    // console.log(phones);
    // 1. Get the container Element 
    const phoneContainer=document.getElementById('phone-container');

    // clear phone container before adding new cards
    phoneContainer.textContent='';

    // display show all button 
    const showAllContainer = document.getElementById('showAllId');
    if(phones.length >12){
        showAllContainer.classList.remove('hidden');

    }
    else{
        showAllContainer.classList.add('hidden');
    }

    // show atmost 12 phones if not show all 
    if(!isShowAll){
        phones=phones.slice(0,12);
    }
    



    phones.forEach(phone => {
        console.log(phone);

        //2. create a div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-11/12 p-4 bg-gray-100 shadow-xl`;

        // 3. set innerHTML 
        phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="phone" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>Brand: ${phone.brand}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Show More</button>
          </div>
        </div>`;
        // 4. appendchild 
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner 
    toggleLoadingFunction(false);
}

// handel search button 

const handleSearch = (isShowAll) =>{
    toggleLoadingFunction(true);
    const searchField=document.getElementById('searchId');
    const searchText=searchField.value;
    console.log(searchText);
    loadPhone(searchText ,isShowAll);
}

const toggleLoadingFunction = (isLoading) =>{
    const toggleLoading= document.getElementById('spinner');
    if(isLoading){
        toggleLoading.classList.remove('hidden');
    }
    else{
        toggleLoading.classList.add('hidden');
    }

}

// handel show all button 
const handelShowall=() =>{
    handleSearch(true);
}

