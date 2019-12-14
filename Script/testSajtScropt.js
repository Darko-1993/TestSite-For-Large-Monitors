function pokreni(){
	
	//definicja linkova
    let home=document.getElementById("linkHome");
    let agency=document.getElementById("linkAgency");
	let project=document.getElementById("linkProject");
	let services=document.getElementById("linkServices");
	let price=document.getElementById("linkPrice");
	let team=document.getElementById("linkTeam");
	let contact=document.getElementById("linkContact");
    
    let user= document.getElementById("logIn");
	
	//definicija odeljaka
	
	let homeSection=document.getElementById("jumbotronDiv");
    let agencySection=document.getElementById("ourAgenciDiv");
	let projectSection=document.getElementById("portfolioDiv");
	let servicesSection=document.getElementById("servicesDiv");
	let priceSection=document.getElementById("pricesDiv");
	let teamSection=document.getElementById("ourTeamDiv");
	let contactSection=document.getElementById("contactDiv");
    
    let logInForm = document.getElementById("logInForm");
    let ulogujse = document.getElementById("ulogujSe");
    let registrujse = document.getElementById("registrujSe");
    let buttonlogin = document.getElementById("buttonLogin");
    let buttonsingup = document.getElementById("buttonSingUp");
    let buttoncancel = document.getElementById("buttonCancel");
    let buttoncancelone = document.getElementById("buttonCancelOne");
	
    home.classList.add("aktivno"); 
	
    user.onclick = function(){
        logInForm.classList.remove("hidden");
        logInForm.classList.add("show");
        registrujse.classList.remove("show");
        registrujse.classList.add("hidden");
        ulogujse.classList.remove("hidden");
        ulogujse.classList.add("show"); 
    };
    
    buttonlogin.onclick = function(){
        registrujse.classList.remove("show");
        registrujse.classList.add("hidden");
        ulogujse.classList.remove("hidden");
        ulogujse.classList.add("show");
    };
    
     buttonsingup.onclick = function(){
        ulogujse.classList.remove("show");
        ulogujse.classList.add("hidden");
        registrujse.classList.remove("hidden");
        registrujse.classList.add("show");
    };
    
    buttoncancel.onclick = function(){
        logInForm.classList.remove("show");
        logInForm.classList.add("hidden");
        home.classList.remove("hidden");
        home.classList.add("show");
    };
    
     buttoncancelone.onclick = function(){
        logInForm.classList.remove("show");
        logInForm.classList.add("hidden");
        ulogujse.classList.remove("show");
        ulogujse.classList.add("hidden");
        home.classList.remove("hidden");
        home.classList.add("show");
    };
    
    
    home.onclick = function(){
		
		//manipulacija linkovima
        home.classList.add("aktivno");   
		agency.classList.remove("aktivno");
		project.classList.remove("aktivno");
		services.classList.remove("aktivno");
		price.classList.remove("aktivno");
		team.classList.remove("aktivno");
		contact.classList.remove("aktivno");
		//manipulacija odeljcima
		homeSection.classList.remove("hidden");
		homeSection.classList.add("show");
		agencySection.classList.remove("show");
		agencySection.classList.add("hidden");
		projectSection.classList.remove("show");
		projectSection.classList.add("hidden");
		servicesSection.classList.remove("show");
		servicesSection.classList.add("hidden");
		priceSection.classList.remove("show");
		priceSection.classList.add("hidden");
		teamSection.classList.remove("show");
		teamSection.classList.add("hidden");
		contactSection.classList.remove("show");
		contactSection.classList.add("hidden");
    };
	
	agency.onclick = function(){
        home.classList.remove("aktivno");   
		agency.classList.add("aktivno");
		project.classList.remove("aktivno");
		services.classList.remove("aktivno");
		price.classList.remove("aktivno");
		team.classList.remove("aktivno");
		contact.classList.remove("aktivno");
		
		//manipulacija odeljcima
		homeSection.classList.remove("show");
		homeSection.classList.add("hidden");
		agencySection.classList.remove("hidden");
		agencySection.classList.add("show");
		projectSection.classList.remove("show");
		projectSection.classList.add("hidden");
		servicesSection.classList.remove("show");
		servicesSection.classList.add("hidden");
		priceSection.classList.remove("show");
		priceSection.classList.add("hidden");
		teamSection.classList.remove("show");
		teamSection.classList.add("hidden");
		contactSection.classList.remove("show");
		contactSection.classList.add("hidden");
    };
	
	project.onclick = function(){
        home.classList.remove("aktivno");   
		agency.classList.remove("aktivno");
		project.classList.add("aktivno");
		services.classList.remove("aktivno");
		price.classList.remove("aktivno");
		team.classList.remove("aktivno");
		contact.classList.remove("aktivno");
		
				//manipulacija odeljcima
		homeSection.classList.remove("show");
		homeSection.classList.add("hidden");
		agencySection.classList.remove("show");
		agencySection.classList.add("hidden");
		projectSection.classList.remove("hidden");
		projectSection.classList.add("show");
		servicesSection.classList.remove("show");
		servicesSection.classList.add("hidden");
		priceSection.classList.remove("show");
		priceSection.classList.add("hidden");
		teamSection.classList.remove("show");
		teamSection.classList.add("hidden");
		contactSection.classList.remove("show");
		contactSection.classList.add("hidden");
    };
	
	services.onclick = function(){
        home.classList.remove("aktivno");   
		agency.classList.remove("aktivno");
		project.classList.remove("aktivno");
		services.classList.add("aktivno");
		price.classList.remove("aktivno");
		team.classList.remove("aktivno");
		contact.classList.remove("aktivno");
		
		//manipulacija odeljcima
		homeSection.classList.remove("show");
		homeSection.classList.add("hidden");
		agencySection.classList.remove("show");
		agencySection.classList.add("hidden");
		projectSection.classList.remove("show");
		projectSection.classList.add("hidden");
		servicesSection.classList.remove("hidden");
		servicesSection.classList.add("show");
		priceSection.classList.remove("show");
		priceSection.classList.add("hidden");
		teamSection.classList.remove("show");
		teamSection.classList.add("hidden");
		contactSection.classList.remove("show");
		contactSection.classList.add("hidden");
    };
	
	price.onclick = function(){
        home.classList.remove("aktivno");   
		agency.classList.remove("aktivno");
		project.classList.remove("aktivno");
		services.classList.remove("aktivno");
		price.classList.add("aktivno");
		team.classList.remove("aktivno");
		contact.classList.remove("aktivno");
		
		//manipulacija odeljcima
		homeSection.classList.remove("show");
		homeSection.classList.add("hidden");
		agencySection.classList.remove("show");
		agencySection.classList.add("hidden");
		projectSection.classList.remove("show");
		projectSection.classList.add("hidden");
		servicesSection.classList.remove("show");
		servicesSection.classList.add("hidden");
		priceSection.classList.remove("hidden");
		priceSection.classList.add("show");
		teamSection.classList.remove("show");
		teamSection.classList.add("hidden");
		contactSection.classList.remove("show");
		contactSection.classList.add("hidden");
    };
	
	team.onclick = function(){
        home.classList.remove("aktivno");   
		agency.classList.remove("aktivno");
		project.classList.remove("aktivno");
		services.classList.remove("aktivno");
		price.classList.remove("aktivno");
		team.classList.add("aktivno");
		contact.classList.remove("aktivno");
		
		//manipulacija odeljcima
		homeSection.classList.remove("show");
		homeSection.classList.add("hidden");
		agencySection.classList.remove("show");
		agencySection.classList.add("hidden");
		projectSection.classList.remove("show");
		projectSection.classList.add("hidden");
		servicesSection.classList.remove("show");
		servicesSection.classList.add("hidden");
		priceSection.classList.remove("show");
		priceSection.classList.add("hidden");
		teamSection.classList.remove("hidden");
		teamSection.classList.add("show");
		contactSection.classList.remove("show");
		contactSection.classList.add("hidden");
    };
	
	contact.onclick = function(){
        home.classList.remove("aktivno");   
		agency.classList.remove("aktivno");
		project.classList.remove("aktivno");
		services.classList.remove("aktivno");
		price.classList.remove("aktivno");
		team.classList.remove("aktivno");
		contact.classList.add("aktivno");
		
		//manipulacija odeljcima
		homeSection.classList.remove("show");
		homeSection.classList.add("hidden");
		agencySection.classList.remove("show");
		agencySection.classList.add("hidden");
		projectSection.classList.remove("show");
		projectSection.classList.add("hidden");
		servicesSection.classList.remove("show");
		servicesSection.classList.add("hidden");
		priceSection.classList.remove("show");
		priceSection.classList.add("hidden");
		teamSection.classList.remove("show");
		teamSection.classList.add("hidden");
		contactSection.classList.remove("hidden");
		contactSection.classList.add("show");
    };
}

