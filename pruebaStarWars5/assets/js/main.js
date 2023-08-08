let counter1 = 0;
let id1 = 1;
let counter2 = 0;
let id2 = 6;
let counter3 = 0;
let id3 = 12;

const timelineDate1 = document.querySelector('#date1');
const timelineDate2 = document.querySelector('#date2');
const timelineDate3 = document.querySelector('#date3');

const handleMouseOver1 = () => {
  if (counter1 < 5) {
    timelineDate1.removeEventListener('mouseover', handleMouseOver1);

    const fetchUrl = `https://swapi.dev/api/people/${id1}`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        const name = data.name;
        const height = data.height;
        const mass = data.mass;

        const newDiv = document.createElement('div');
        newDiv.className = 'col-12 col-md-6 col-lg-2';

        const content = `
          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon">
              <i class="fa-sharp fa-solid fa-circle fa-2x" style="color: #6eb8f5;"></i>
            </div>
            <div class="timeline-text">
              <h6>${name}</h6>
              <p>
                ${height} cm ${mass} kg
              </p>
            </div>
          </div>
        `;

        newDiv.innerHTML = content;

        const card = document.getElementById('card1');

        card.appendChild(newDiv);

        counter1++;
        id1++;

        if (counter1 === 5) {
          timelineDate1.removeEventListener('mouseover', handleMouseOver1);
        } else {
          setTimeout(() => {
            timelineDate1.addEventListener('mouseover', handleMouseOver1);
          }, 1000);
        }
      })
      .catch(error => {
        console.log('Error:', error);
        timelineDate1.addEventListener('mouseover', handleMouseOver1);
      });
  }
};

const handleMouseOver2 = () => {
  if (counter2 < 5) {
    timelineDate2.removeEventListener('mouseover', handleMouseOver2);

    const fetchUrl = `https://swapi.dev/api/people/${id2}`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        const name = data.name;
        const height = data.height;
        const mass = data.mass;

        const newDiv = document.createElement('div');
        newDiv.className = 'col-12 col-md-6 col-lg-2';

        const content = `
          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon">
              <i class="fa-sharp fa-solid fa-circle fa-2x" style="color: #f87aad;"></i>
            </div>
            <div class="timeline-text">
              <h6>${name}</h6>
              <p>
                ${height} cm ${mass} kg
              </p>
            </div>
          </div>
        `;

        newDiv.innerHTML = content;

        const card = document.getElementById('card2');

        card.appendChild(newDiv);

        counter2++;
        id2++;

        if (counter2 === 5) {
          timelineDate2.removeEventListener('mouseover', handleMouseOver2);
        } else {
          setTimeout(() => {
            timelineDate2.addEventListener('mouseover', handleMouseOver2);
          }, 1000);
        }
      })
      .catch(error => {
        console.log('Error:', error);
        timelineDate2.addEventListener('mouseover', handleMouseOver2);
      });
  }
};

const handleMouseOver3 = () => {
  if (counter3 < 5) {
    timelineDate3.removeEventListener('mouseover', handleMouseOver3);

    const fetchUrl = `https://swapi.dev/api/people/${id3}`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        const name = data.name;
        const height = data.height;
        const mass = data.mass;

        const newDiv = document.createElement('div');
        newDiv.className = 'col-12 col-md-6 col-lg-2';

        const content = `
          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon">
              <i class="fa-sharp fa-solid fa-circle fa-2x" style="color: #f86624;"></i>
            </div>
            <div class="timeline-text">
              <h6>${name}</h6>
              <p>
                ${height} cm ${mass} kg
              </p>
            </div>
          </div>
        `;

        newDiv.innerHTML = content;

        const card = document.getElementById('card3');

        card.appendChild(newDiv);

        counter3++;
        id3++;

        if (counter3 === 5) {
          timelineDate3.removeEventListener('mouseover', handleMouseOver3);
        } else {
          setTimeout(() => {
            timelineDate3.addEventListener('mouseover', handleMouseOver3);
          }, 1000);
        }
      })
      .catch(error => {
        console.log('Error:', error);
        timelineDate3.addEventListener('mouseover', handleMouseOver3);
      });
  }
};

timelineDate1.addEventListener('mouseover', handleMouseOver1);
timelineDate2.addEventListener('mouseover', handleMouseOver2);
timelineDate3.addEventListener('mouseover', handleMouseOver3);