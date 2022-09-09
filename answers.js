function getBotResponse(val)
{
    if (val == "help") 
    {
        return "How can I help you?";
    } else if (val == "1") 
    {
        return "Food recommendations in Jakarta<br/><br/>1. Soto Betawi<br/>2. Sate Bakar<br/>3. Ketoprak<br/>4. Nasi Goreng<br/>5. Bihun Bebek<br/>6. Nasi Uduk<br/>7. Popiah";
    } else if (val == "2") 
    {
        return "Destination places in Jakarta<br/><br/>1. Pantai Indah Kapuk<br/>2. Pantai Ancol<br/>3. Moja Museum<br/>4. Gelora Bung Karno Stadium<br/>5. TMII<br/>6. Dunia Fantasi<br/>7. Monumen Nasional";
    }
    else if(val == "3")
    {
        return "Transport Hub in Jakarta<br/><br/>MRT<br/><br/>Stasiun MRT Lebak Bulus<br/>Stasiun MRT Fatmawati<br/>Stasiun MRT Cipete Raya<br/>Stasiun MRT Haji Nawi<br/>Stasiun MRT Blok A<br/>Stasiun MRT Blok M<br/>Stasiun MRT Sisingamangaraja<br/>Stasiun MRT Senayan<br/>Stasiun MRT Istora<br/>Stasiun MRT Bendungan Hilir<br/>Stasiun MRT Setiabudi<br/>Stasiun MRT Dukuh Atas<br/>Stasiun MRT Bundaran Hotel Indonesia"
    }
    else if(val == "4")
    {
        return "Jakarta General Information<br/><br/>Founded: 22 June 1527<br/>Governor: Anies Baswedan<br/>Area: 664.01 km^2<br/>Population: 10,562,088<br/>Website: www.jakarta.go.id";
    }
    else if(val == "5")
    {
        return "Campuses in Jakarta<br/><br/>1. Binus University<br/>2. Atma Jaya University<br/>3. Universitas Indonesia<br/>4. Universitas Trisakti<br/>5. Universitas Tarumanegara<br/>6. Gunadarma University<br/>7. Universtas Terbuka"
    }

    if (val == "hello" || val == "Hello" || val=="hai") 
    {
        return "Hello there!";
    } 
    else if (val == "goodbye" || val == "Goodbye" || val == "bye" || val == "Bye") 
    {
        return "See you soon!";
    } 
    else if(val == "menu" || val == "Menu" || val == "home" || val == "Home")
    {
        return "Hello there! Please select FAQ: <br/><br/> 1. Food recommendations <br/> 2. Destination places <br/> 3. Transport Hub </br> 4. Information <br/> 5. Educations"
    }
    else if(val == "info" || val == "Information" || val == "Info" || val == "Information")
    {
        return "We will provide you some information about Jakarta <br/><br/>Enter 'menu'";
    }
    else if(val == "im in danger" || val == "I'm in danger" || val == "need help asap" || val == "Need help asap" || val == "i'm in danger")
    {
        return "If you're in a critical situation, dial [110]. The police will come to you soon."
    }
    else if(val == "im hurt" || val == "I'm hurt" || val == "I'm hurt" || val == "ambulance" || val == "Ambulance" || val == "need ambulance" || val == "Need ambulance")
    {
        return "If you need medical treatment, dial [119] or [112]. The ambulance will come to you soon"
    }
    else 
    {
        return "Try asking something else!";
    }
}