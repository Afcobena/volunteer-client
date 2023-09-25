


const handleImg = (category) => { 

    if (category === "Environmental") {
        return "images/Volunteer-Educativo.jpeg";
        
    } else if (category === "Community") {
        return "images/Volunteer-Comunitario.jpeg";
        
    } else if (category === "Cultural") {
        return "images/Volunteer-Cultural.jpeg";
        
    } else if (category === "Sports") {
        return "images/Volunteer-Deportivo.jpeg";
        
    } else if (category === "Educational") {
        return "images/Volunteer-Educativo.jpeg";
        
    } else if (category === "Leisure") {
        return "images/Volunteer-Ocio-Tiempo-Libre.jpeg";
        
    } else if (category === "Civil Protection") {
        return "images/Volunteer-Protección-Civil.jpeg";
        
    } else if (category === "Social Healthcare") {
        return "images/Volunteer-Socio Sanitario.jpeg";
        
    } else if (category === "Social Events") {
        return "images/Volunteer-Social.jpeg";
        
    }
}


export default handleImg

