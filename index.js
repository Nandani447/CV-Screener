console.log("tut 55");

//Data is an array of objects which contains information about candidates
const data = [
	{
		name: 'Rohan Das',
		age: 18,
		city: 'Kolkata',
		language: 'Python',
		framework: 'Django',
		image: 'https://randomuser.me/api/portraits/med/men/90.jpg'
	},

	{
		name: 'Shubham Sharma',
		age: 28,
		city: 'Banglore',
		language: 'JavaScript',
		framework: 'Angular',
		image: 'https://randomuser.me/api/portraits/med/men/56.jpg'
	},

	{
		name: 'Jenny Wiesily',
		age: 19,
		city: 'Noida',
		language: 'Python',
		framework: 'React',
		image: 'https://randomuser.me/api/portraits/med/women/78.jpg'
	},

	{
		name: 'Harry Potter',
		age: 20,
		city: 'Gurgaon',
		language: 'JavScript',
		framework: 'Native',
		image: 'https://randomuser.me/api/portraits/med/men/67.jpg'
	},
]

//CV Iterator
function cvIterator(profiles) {
	let nextIndex = 0;
	return {
		next: function () {
			return nextIndex < profiles.length ?
				{ value: profiles[nextIndex++], done: false } :
				{ done: true }
		}
	};
}

const candidates = cvIterator(data);

nextCV();

//Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
	const currentCandidate = candidates.next().value;

	let image = document.getElementById('image');
	let profile = document.getElementById('profile');

	if (currentCandidate != undefined) {
		image.innerHTML = ` <img src='${currentCandidate.image}'>`;

		profile.innerHTML = `<ul class="list-group">
	<li class="list-group-item">Name: ${currentCandidate.name}</li>
	<li class="list-group-item"> ${currentCandidate.age} Years Old</li>
	<li class="list-group-item">Live in  ${currentCandidate.city}</li>
	<li class="list-group-item">Primarily works on  ${currentCandidate.language}</li>
	<li class="list-group-item">Uses  ${currentCandidate.framework} framework</li>
  </ul>`;
	}
	else {
		alert('End of applications');
		window.location.reload();
	}
}