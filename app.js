// State management
let currentPage = 1;
let currentSearch = '';
let currentSort = 'id_asc';
let posts = [];
let totalPages = 1;

// Car posts data (supercars to hypercars)
const carPosts = [
    { id: 1, title: "Bugatti Chiron", body: "The ultimate hypercar with quad turbocharged W16 engine producing 1500 horsepower" },
    { id: 2, title: "Koenigsegg Agera RS", body: "Swedish hypercar that broke multiple world speed records with its twin turbo V8" },
    { id: 3, title: "McLaren P1", body: "British hybrid hypercar combining Formula 1 technology with road car practicality" },
    { id: 4, title: "Ferrari LaFerrari", body: "Italian hybrid supercar representing the pinnacle of Ferrari engineering" },
    { id: 5, title: "Porsche 918 Spyder", body: "German plug-in hybrid supercar with revolutionary Weissach package" },
    { id: 6, title: "Lamborghini Aventador", body: "Italian V12 supercar with aggressive styling and unmistakable sound" },
    { id: 7, title: "Ferrari 488 GTB", body: "Mid engine Italian supercar with twin turbo V8 and exceptional handling" },
    { id: 8, title: "McLaren 720S", body: "British supercar with active aerodynamics and stunning performance" },
    { id: 9, title: "Lamborghini Huracan", body: "Italian supercar with naturally aspirated V10 and all wheel drive" },
    { id: 10, title: "Porsche 911 GT2 RS", body: "German track focused supercar with rear wheel drive and twin turbo flat six" },
    { id: 11, title: "Ferrari 812 Superfast", body: "Front engine Italian supercar with the most powerful naturally aspirated V12" },
    { id: 12, title: "McLaren 600LT", body: "Long tail British supercar optimized for track performance" },
    { id: 13, title: "Lamborghini Urus", body: "Italian super SUV that combines supercar performance with practicality" },
    { id: 14, title: "Porsche Cayenne Turbo GT", body: "German performance SUV with lap record capabilities" },
    { id: 15, title: "Aston Martin Valkyrie", body: "British hypercar co developed with Formula 1 legend Adrian Newey" },
    { id: 16, title: "Mercedes AMG One", body: "German hypercar with actual Formula 1 engine technology" },
    { id: 17, title: "Rimac Nevera", body: "Croatian electric hypercar with incredible acceleration and performance" },
    { id: 18, title: "Pininfarina Battista", body: "Italian electric hypercar with breathtaking design and power" },
    { id: 19, title: "Lotus Evija", body: "British electric hypercar with extreme aerodynamics and lightweight construction" },
    { id: 20, title: "Tesla Roadster", body: "American electric sports car with claimed record breaking performance" },
    { id: 21, title: "Ferrari SF90 Stradale", body: "Italian plug in hybrid supercar with Formula 1 derived hybrid system" },
    { id: 22, title: "McLaren Speedtail", body: "British hypercar designed for maximum top speed and aerodynamic efficiency" },
    { id: 23, title: "Koenigsegg Jesko", body: "Swedish hypercar with light speed transmission and massive power output" },
    { id: 24, title: "Bugatti Divo", body: "Track focused version of the Chiron with improved aerodynamics" },
    { id: 25, title: "Lamborghini Sián", body: "Italian hybrid supercar with super capacitor technology" },
    { id: 26, title: "Ferrari Roma", body: "Elegant Italian grand tourer with sophisticated styling" },
    { id: 27, title: "McLaren GT", body: "British grand tourer combining supercar performance with touring comfort" },
    { id: 28, title: "Porsche Taycan Turbo S", body: "German electric sports car with incredible performance and handling" },
    { id: 29, title: "Audi R8", body: "German supercar with mid engine V10 and Quattro all wheel drive" },
    { id: 30, title: "BMW i8", body: "German plug in hybrid sports car with futuristic butterfly doors" },
    { id: 31, title: "Nissan GT-R", body: "Japanese supercar with legendary all wheel drive system" },
    { id: 32, title: "Honda NSX", body: "Japanese hybrid supercar with advanced all wheel drive system" },
    { id: 33, title: "Lexus LFA", body: "Japanese supercar with legendary V10 engine and exquisite sound" },
    { id: 34, title: "Toyota Supra", body: "Japanese sports car with turbocharged inline six and rear wheel drive" },
    { id: 35, title: "Mazda RX-7", body: "Japanese sports car with rotary engine and perfect balance" },
    { id: 36, title: "Mitsubishi Lancer Evo", body: "Japanese rally bred performance sedan with all wheel drive" },
    { id: 37, title: "Subaru WRX STI", body: "Japanese performance sedan with turbocharged boxer engine" },
    { id: 38, title: "Ford GT", body: "American supercar with carbon fiber construction and racing heritage" },
    { id: 39, title: "Chevrolet Corvette", body: "American sports car with mid engine layout and incredible value" },
    { id: 40, title: "Dodge Challenger SRT Demon", body: "American muscle car with drag strip focused performance" },
    { id: 41, title: "Cadillac CT5-V Blackwing", body: "American performance sedan with supercharged V8" },
    { id: 42, title: "Tesla Model S Plaid", body: "American electric sedan with record breaking acceleration" },
    { id: 43, title: "Lucid Air Dream", body: "American electric luxury sedan with exceptional range and performance" },
    { id: 44, title: "Rivian R1T", body: "American electric truck with off road capabilities and performance" },
    { id: 45, title: "GMC Hummer EV", body: "American electric truck with massive power and off road prowess" },
    { id: 46, title: "Pagani Huayra", body: "Italian hypercar with Mercedes AMG V12 and stunning artistry" },
    { id: 47, title: "Zenvo TS1 GT", body: "Danish hypercar with twin supercharged V8 and unique design" },
    { id: 48, title: "Apollo IE", body: "German hypercar with naturally aspirated V10 and aggressive styling" },
    { id: 49, title: "Gordon Murray T.50", body: "British hypercar with central driving position and fan assisted aerodynamics" },
    { id: 50, title: "De Tomaso P72", body: "Italian supercar inspired by classic racing cars with modern performance" }
];

// DOM Elements
const postsContainer = document.getElementById('postsContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const sortSelect = document.getElementById('sortSelect');
const addPostButton = document.getElementById('addPostButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const pageInfo = document.getElementById('pageInfo');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const addPostForm = document.getElementById('addPostForm');
const postTitle = document.getElementById('postTitle');
const postBody = document.getElementById('postBody');
const titleError = document.getElementById('titleError');
const bodyError = document.getElementById('bodyError');
const successMessage = document.getElementById('successMessage');
const successId = document.getElementById('successId');
const successTitle = document.getElementById('successTitle');
const successBody = document.getElementById('successBody');
const closeSuccessButton = document.getElementById('closeSuccessButton');

// URL Parameter Management
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        page: parseInt(params.get('_page')) || 1,
        search: params.get('title_like') || '',
        sort: params.get('_sort') || 'id',
        order: params.get('_order') || 'asc'
    };
}

function updateUrlParams() {
    const params = new URLSearchParams();
    params.set('_page', currentPage);
    params.set('_limit', 5);
    
    if (currentSearch) {
        params.set('title_like', currentSearch);
    }
    
    const [sortField, sortOrder] = currentSort.split('_');
    params.set('_sort', sortField);
    params.set('_order', sortOrder);
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ page: currentPage }, '', newUrl);
}

function loadStateFromUrl() {
    const params = getUrlParams();
    currentPage = params.page;
    currentSearch = params.search;
    currentSort = `${params.sort}_${params.order}`;
    
    // Update UI to match URL state
    searchInput.value = currentSearch;
    sortSelect.value = currentSort;
}

// Data Functions
function fetchPosts() {
    postsContainer.innerHTML = '<div class="loading">Loading posts...</div>';
    
    const [sortField, sortOrder] = currentSort.split('_');
    
    // Filter posts based on search
    let filteredPosts = carPosts;
    if (currentSearch) {
        filteredPosts = carPosts.filter(post => 
            post.title.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }
    
    // Sort posts
    filteredPosts.sort((a, b) => {
        let comparison = 0;
        if (sortField === 'id') {
            comparison = a.id - b.id;
        } else if (sortField === 'title') {
            comparison = a.title.localeCompare(b.title);
        }
        return sortOrder === 'asc' ? comparison : -comparison;
    });
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    posts = filteredPosts.slice(startIndex, endIndex);
    totalPages = Math.ceil(filteredPosts.length / 5);
    
    renderPosts();
    updatePagination();
}

function addPost(title, body) {
    const newId = Math.max(...carPosts.map(post => post.id)) + 1;
    const newPost = {
        id: newId,
        title: title,
        body: body
    };
    carPosts.push(newPost);
    return newPost;
}

// Render Functions
function renderPosts() {
    if (posts.length === 0) {
        postsContainer.innerHTML = '<div class="loading">No posts found.</div>';
        return;
    }
    
    postsContainer.innerHTML = posts.map(post => `
        <div class="post">
            <div class="post-header">
                <span class="post-id">ID: ${post.id}</span>
            </div>
            <h3 class="post-title">${escapeHtml(post.title)}</h3>
            <p class="post-body">${escapeHtml(post.body)}</p>
        </div>
    `).join('');
}

function updatePagination() {
    pageInfo.textContent = `Page ${currentPage}`;
    prevButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage >= totalPages;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Validation
function validateTitle(title) {
    if (!title || title.trim() === '') {
        return 'Car name is required';
    }
    if (title.length > 30) {
        return 'Car name must be 30 characters or less';
    }
    return '';
}

function validateBody(body) {
    if (!body || body.trim() === '') {
        return 'Description is required';
    }
    return '';
}

// Event Handlers
function handleSearch() {
    currentSearch = searchInput.value.trim();
    currentPage = 1; // Reset to page 1 on search
    updateUrlParams();
    fetchPosts();
}

function handleSort() {
    currentSort = sortSelect.value;
    currentPage = 1; // Reset to page 1 on sort change
    updateUrlParams();
    fetchPosts();
}

function handlePrevPage() {
    if (currentPage > 1) {
        currentPage--;
        updateUrlParams();
        fetchPosts();
    }
}

function handleNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updateUrlParams();
        fetchPosts();
    }
}

function openModal() {
    modal.style.display = 'block';
    addPostForm.style.display = 'block';
    successMessage.style.display = 'none';
    postTitle.value = '';
    postBody.value = '';
    titleError.textContent = '';
    bodyError.textContent = '';
}

function closeModalHandler() {
    modal.style.display = 'none';
}

function handleAddPost(e) {
    e.preventDefault();
    
    const title = postTitle.value.trim();
    const body = postBody.value.trim();
    
    // Validate
    const titleErrorMsg = validateTitle(title);
    const bodyErrorMsg = validateBody(body);
    
    titleError.textContent = titleErrorMsg;
    bodyError.textContent = bodyErrorMsg;
    
    if (titleErrorMsg || bodyErrorMsg) {
        return;
    }
    
    const result = addPost(title, body);
    
    // Show success message
    addPostForm.style.display = 'none';
    successMessage.style.display = 'block';
    successId.textContent = result.id;
    successTitle.textContent = result.title;
    successBody.textContent = result.body;
    
    // Refresh posts after a delay
    setTimeout(() => {
        fetchPosts();
    }, 2000);
}

// Event Listeners
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

sortSelect.addEventListener('change', handleSort);
prevButton.addEventListener('click', handlePrevPage);
nextButton.addEventListener('click', handleNextPage);
addPostButton.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalHandler);
addPostForm.addEventListener('submit', handleAddPost);
closeSuccessButton.addEventListener('click', closeModalHandler);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
    loadStateFromUrl();
    fetchPosts();
});

// Initialize
loadStateFromUrl();
fetchPosts();
