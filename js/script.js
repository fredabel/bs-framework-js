// Image Array
const HERO_IMAGES = ["img/chris-tomlin.jpg", "img/phil-wickham.jpg", "img/hero1.jpg"];
for (let images of HERO_IMAGES) {
    console.log(`${images}`); //To display the images in carousel
}

//Artists Details Array
const ARTIST_DETAILS = [
    ['img/chris-tomlin.jpg', 'Chris Tomlin', 'Chris Tomlin is a contemporary Christian music (CCM) artist, worship leader, and songwriter from Grand Saline, Texas, United States. He is a former staff member at Austin Stone Community Church and is signed to EMI\'s sixstepsrecords. Tomlin leads worship at many Passion events. Some of his most well-known songs are "How Great Is Our God", "Our God", "Whom Shall I Fear (God of Angel Armies)" and "Amazing Grace (My Chains Are Gone)".', ],
    ['img/phil-wickham.jpg', 'Phil Wickham', 'Philip David Wickham is a contemporary Christian musician, singer, and songwriter from San Diego, California. Wickham has released nine albums, Give You My World in 2003, a self-titled album in 2006, Cannons in 2007, Singalong in 2008, Heaven & Earth in 2009, Response in 2011, Singalong 2 in 2012, The Ascension in 2013, Children of God in 2016, Living Hope in 2018 and Hymn of Heaven in 2021.' ], 
    ['img/hero1.jpg', 'Hillsong United', 'Hillsong United is a worship band that originated as a part of Hillsong Church. Formed in 1998 as part of Hillsong\'s youth ministry, the band consists of several rotating worship leaders from the church, including Joel Houston, Taya Smith-Gaukrodger, Matt Crocker, Jonathon Douglass, Jad Gillies and Benjamin Hastings. Due to several songs written by the youth ministry, Hillsong worship leader Darlene Zschech recommended that they record an album, which resulted in their debut extended play, One, which was released alongside the Hillsong Worship album Touching Heaven Changing Earth. Since then, the group has released eleven live albums, as well as four studio albums. The band composes songs and performs in church services as well as concerts in worldwide tours.']
];

ARTIST_DETAILS.map(value => {
    console.log(value[0]) //To display the images 
    console.log(value[1]) //To display the artist name
    console.log(value[2]) //To display the artist description
});

// Function to capetalize the artist's first name 
function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(upperCaseFirstLetter("frederic Tuazon")); // Frederic Tuazon


// Validate input Full Name
function validateFullName(fullName) {
    if(fullName === ""){
        return 'This field is required';
    }else{
        return true;
    }
}
console.log(validateFullName("Frederic Tuazon")); // true

// Validate input email
function validateEmail(email) {
    if(email === ""){
        return 'This field is required';  
    }else{
        if(email.includes("@") && email.includes(".")){
            return true;
        }else{
            return 'Please input a valid email address';
        }
    }
}
console.log(validateMessage("test@app.com")); // true

// Validate input Full Name
function validateMessage(message) {
    if(message === ""){
        return 'This field is required';
    }else{
        return true;
    }
}
console.log(validateMessage("Hello")); // true




