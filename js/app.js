const profileUsers = [
    {
        name: 'Mohammad Asaadi',
        age: '32',
        job: 'Web Developer',
        location: 'Iran, Sabzevar',
        skils: 'HTML, CSS, JS, React',
        image: './images/2.jpg'
    },
    {
        name: 'Hamid Tehrani',
        age: '28',
        job: 'Web Designer',
        location: 'Iran, Tehran',
        skils: 'HTML, CSS, Photoshop, XD',
        image: './images/4.jpg'
    },
    {
        name: 'Benjamin Thompson',
        age: '22',
        job: 'Creative Director',
        location: 'Deutschland, Frankfort',
        skils: 'Sketch, AE, PS , XD',
        image:'./images/1.jpg'
    },
    {
        name: 'Jasmine Roy',
        age: '30',
        job: 'Back End Full Stack',
        location: 'England, London',
        skils: 'PHP, Pyton, Laravel, NodeJs',
        image: './images/3.jpg'
    }
];
// Variables
const next_Btn = document.querySelector('#next')
const profile_name = document.querySelector('.profile_name')
const profile_img = document.querySelector('.profile_img')
const profile_pref = document.querySelector('.profile_pref')
const profile_age = document.querySelector('.profile_age')
const profile_location = document.querySelector('.profile_location')

// EventListener
EventListener()
function EventListener() {
    next_Btn.addEventListener('click', nextProfile)
}

const profiles = profileIterator(profileUsers);


nextProfile()


function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        profile_name.innerHTML = `${currentProfile.name}`
        profile_img.innerHTML = `<img src=${currentProfile.image}>`
        profile_age.innerHTML = `${currentProfile.age}`
        profile_location.innerHTML = `${currentProfile.location}`
        profile_pref.innerHTML = `Hi guys. I'm a ${currentProfile.job} from ${currentProfile.location}. My skils are ${currentProfile.skils}`
    } else {
        window.location.reload();
    }

}
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length
                ? 
               { value: profiles[nextIndex++], done: false }
                : 
               { done: true };
        }
    };
}
