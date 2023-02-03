fetch('Data.json')
    .then(response => response.json())
    .then(data => output(data));

function output(data){
    const mainUL = document.createElement('ul');
    for(let i=0; i<data.resume.length; i++){
        const personLI = document.createElement('li');
        personLI.innerHTML = data.resume[i].id;

        const basicsUL = document.createElement('ul');
        const paraBasic = document.createElement('p');
        paraBasic.innerHTML = 'BASICS....';
        for(var key in data.resume[i].basics) {
            const basicsLI = document.createElement('li');
            basicsLI.innerHTML = key + ':' + data.resume[i].basics[key];
            if(key=='location'){
                for(var key in data.resume[i].basics.location){
                    const basicLoc = document.createElement('li');
                    basicLoc.innerHTML = key + ':' + data.resume[i].basics.location[key];
                    basicsLI.appendChild(basicLoc);
                }
            }
            if(key=='profiles'){
                for(var key in data.resume[i].basics.profiles){
                    const basicProf = document.createElement('li');
                    basicProf.innerHTML = key + ':' + data.resume[i].basics.profiles[key];
                    basicsLI.appendChild(basicProf);
                }
            }
            basicsUL.appendChild(paraBasic).appendChild(basicsLI);
        }
        
        const skillsUL = document.createElement('ul');
        const paraSkill = document.createElement('p');
        paraSkill.innerHTML = 'SKILLS....';
        for(var key in data.resume[i].skills) {
            const skillsLI = document.createElement('li');
            skillsLI.innerHTML = key + ':' + data.resume[i].skills[key];
            skillsUL.appendChild(paraSkill).appendChild(skillsLI);
        }

        const workUL = document.createElement('ul');
        const paraWork = document.createElement('p');
        paraWork.innerHTML = 'WORK....';
        for(var key in data.resume[i].work) {
            const workLI = document.createElement('li');
            workLI.innerHTML = key + ':' + data.resume[i].work[key];
            workUL.appendChild(paraWork).appendChild(workLI);
        }

        const InternshipUL = document.createElement('ul');
        const paraIntern = document.createElement('p');
        paraIntern.innerHTML = 'INTERNSHIP....';
        for(var key in data.resume[i].Internship) {
            const InternshipLI = document.createElement('li');
            InternshipLI.innerHTML = key + ':' + data.resume[i].Internship[key];
            InternshipUL.appendChild(paraIntern).appendChild(InternshipLI);
        }

        const projectsUL = document.createElement('ul');
        const paraProj = document.createElement('p');
        paraProj.innerHTML = 'PROJECTS....';
        for(var key in data.resume[i].projects) {
            const projectsLI = document.createElement('li');
            projectsLI.innerHTML = key + ':' + data.resume[i].projects[key];
            projectsUL.appendChild(paraProj).appendChild(projectsLI);
        }

        const educationUL = document.createElement('ul');
        const paraEdu = document.createElement('p');
        paraEdu.innerHTML = 'EDUCATION....';
        for(var key in data.resume[i].education) {
            const educationLI = document.createElement('li');
            educationLI.innerHTML = key + ':' + data.resume[i].education[key];
            if(key=='UG'){
                for(var key in data.resume[i].education.UG){
                    const eduUG = document.createElement('li');
                    eduUG.innerHTML = key + ':' + data.resume[i].education.UG[key];
                    educationLI.appendChild(eduUG);
                }
            }
            if(key=='SeniorSecondary'){
                for(var key in data.resume[i].education.SeniorSecondary){
                    const eduSS = document.createElement('li');
                    eduSS.innerHTML = key + ':' + data.resume[i].education.SeniorSecondary[key];
                    educationLI.appendChild(eduSS);
                }
            }
            if(key=='HighSchool'){
                for(var key in data.resume[i].education.HighSchool){
                    const eduHS = document.createElement('li');
                    eduHS.innerHTML = key + ':' + data.resume[i].education.HighSchool[key];
                    educationLI.appendChild(eduHS);
                }
            }
            educationUL.appendChild(paraEdu).appendChild(educationLI);
        }

        const achievementsUL = document.createElement('ul');
        const paraAchievements = document.createElement('p');
        paraAchievements.innerHTML = 'ACHIEVEMENTS....';
        for(var key in data.resume[i].achievements) {
            const achievementsLI = document.createElement('li');
            achievementsLI.innerHTML = key + ':' + data.resume[i].achievements[key];
            achievementsUL.appendChild(paraAchievements).appendChild(achievementsLI);
        }

        const interestsUL = document.createElement('ul');
        const paraInterests = document.createElement('p');
        paraInterests.innerHTML = 'INTERESTS....';
        for(var key in data.resume[i].interests) {
            const interestsLI = document.createElement('li');
            interestsLI.innerHTML = key + ':' + data.resume[i].interests[key];
            interestsUL.appendChild(paraInterests).appendChild(interestsLI);
        }
        personLI.appendChild(basicsUL).appendChild(skillsUL).appendChild(workUL).appendChild(InternshipUL).appendChild(projectsUL).appendChild(educationUL).appendChild(achievementsUL).appendChild(interestsUL);
        mainUL.appendChild(personLI);
    }
    document.body.appendChild(mainUL);
}
var input = document.getElementById('search');
input.addEventListener('change', function setQuery(){
    console.log(input.value);
    getResults(input.value);
})

function getResults (query) {
    fetch('Data.json')
      .then(data => {
        return data.json();
      }).then((response)=>{
        // console.log(JSON.stringify(response));
        displayResults(response)
    });
}

function displayResults (searchData) {
    const obj = JSON.parse(searchData.resume);
    var result = obj.filter(ob => ob.AppliedFor==='input.value');
    console.log(obj);
    // let findResume = document.querySelector('.job-search');
    // findResume.innerText = `${searchData.name}, ${searchData.AppliedFor}`;
  
    // let now = new Date();
    // let date = document.querySelector('.location .date');
    // date.innerText = dateBuilder(now);
  
    // let temp = document.querySelector('.current .temp');
    // temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    // let weather_el = document.querySelector('.current .weather');
    // weather_el.innerText = weather.weather[0].main;
  
    // let hilow = document.querySelector('.hi-low');
    // hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}