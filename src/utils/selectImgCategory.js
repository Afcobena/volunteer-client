


const handleImg = (category) => { 

    if (category === "Ambiental") {
        return "images/Volunteer-Educativo.jpeg";
        
    } else if (category === "Comunitario") {
        return "images/Volunteer-Comunitario.jpeg";
        
    } else if (category === "Cultural") {
        return "images/Volunteer-Cultural.jpeg";
        
    } else if (category === "Deportivo") {
        return "images/Volunteer-Deportivo.jpeg";
        
    } else if (category === "Educativo") {
        return "images/Volunteer-Educativo.jpeg";
        
    } else if (category === "Ocio") {
        return "images/Volunteer-Ocio-Tiempo-Libre.jpeg";
        
    } else if (category === "Protección Civil") {
        return "images/Volunteer-Protección-Civil.jpeg";
        
    } else if (category === "Socio Sanitario") {
        return "images/Volunteer-Socio Sanitario.jpeg";
        
    } else if (category === "Social") {
        return "images/Volunteer-Social.jpeg";
        
    }
}


export default handleImg

