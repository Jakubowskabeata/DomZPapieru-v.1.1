const riobtn = document.querySelector(".rio .reval");
const riobtn2 = document.querySelector(".rio .cover");
const riopersonImg = document.querySelector(".rio .person-img");
const riocityImg = document.querySelector(".rio .city-img");
const rionameCity = document.querySelector(".rio .nameCity");
const rionamePerson = document.querySelector(".rio .name");

const tokiobtn = document.querySelector(".tokio .reval");
const tokiobtn2 = document.querySelector(".tokio .cover");
const tokiopersonImg = document.querySelector(".tokio .person-img");
const tokiocityImg = document.querySelector(".tokio .city-img");
const tokionameCity = document.querySelector(".tokio .nameCity");
const tokionamePerson = document.querySelector(".tokio .name");

const berlinbtn = document.querySelector(".berlin .reval");
const berlinbtn2 = document.querySelector(".berlin .cover");
const berlinpersonImg = document.querySelector(".berlin .person-img");
const berlincityImg = document.querySelector(".berlin .city-img");
const berlinnameCity = document.querySelector(".berlin .nameCity");
const berlinnamePerson = document.querySelector(".berlin .name");

const nairobibtn = document.querySelector(".nairobi .reval");
const nairobibtn2 = document.querySelector(".nairobi .cover");
const nairobipersonImg = document.querySelector(".nairobi .person-img");
const nairobicityImg = document.querySelector(".nairobi .city-img");
const nairobinameCity = document.querySelector(".nairobi .nameCity");
const nairobinamePerson = document.querySelector(".nairobi .name");

const moskwabtn = document.querySelector(".moskwa .reval");
const moskwabtn2 = document.querySelector(".moskwa .cover");
const moskwapersonImg = document.querySelector(".moskwa .person-img");
const moskwacityImg = document.querySelector(".moskwa .city-img");
const moskwanameCity = document.querySelector(".moskwa .nameCity");
const moskwanamePerson = document.querySelector(".moskwa .name");

const denwerbtn = document.querySelector(".denwer .reval");
const denwerbtn2 = document.querySelector(".denwer .cover");
const denwerpersonImg = document.querySelector(".denwer .person-img");
const denwercityImg = document.querySelector(".denwer .city-img");
const denwernameCity = document.querySelector(".denwer .nameCity");
const denwernamePerson = document.querySelector(".denwer .name");

const helsinkibtn = document.querySelector(".helsinki .reval");
const helsinkibtn2 = document.querySelector(".helsinki .cover");
const helsinkipersonImg = document.querySelector(".helsinki .person-img");
const helsinkicityImg = document.querySelector(".helsinki .city-img");
const helsinkinameCity = document.querySelector(".helsinki .nameCity");
const helsinkinamePerson = document.querySelector(".helsinki .name");

const oslobtn = document.querySelector(".oslo .reval");
const oslobtn2 = document.querySelector(".oslo .cover");
const oslopersonImg = document.querySelector(".oslo .person-img");
const oslocityImg = document.querySelector(".oslo .city-img");
const oslonameCity = document.querySelector(".oslo .nameCity");
const oslonamePerson = document.querySelector(".oslo .name");

const revalPersonRio = () => {
	riobtn.classList.toggle("toggler");
	riobtn2.classList.toggle("toggler");
	riocityImg.classList.toggle("toggler");
	riopersonImg.classList.toggle("toggler");
	rionameCity.classList.toggle("toggler");
	rionamePerson.classList.toggle("toggler");
};

const revalPersonTokio = () => {
	tokiobtn.classList.toggle("toggler");
	tokiobtn2.classList.toggle("toggler");
	tokiocityImg.classList.toggle("toggler");
	tokiopersonImg.classList.toggle("toggler");
	tokionameCity.classList.toggle("toggler");
	tokionamePerson.classList.toggle("toggler");
};
const revalPersonBerlin = () => {
	berlinbtn2.classList.toggle("toggler");
	berlinbtn.classList.toggle("toggler");
	berlincityImg.classList.toggle("toggler");
	berlinpersonImg.classList.toggle("toggler");
	berlinnameCity.classList.toggle("toggler");
	berlinnamePerson.classList.toggle("toggler");
};
const revalPersonNairobi = () => {
	nairobibtn.classList.toggle("toggler");
	nairobibtn2.classList.toggle("toggler");
	nairobicityImg.classList.toggle("toggler");
	nairobipersonImg.classList.toggle("toggler");
	nairobinameCity.classList.toggle("toggler");
	nairobinamePerson.classList.toggle("toggler");
};
const revalPersonMoskwa = () => {
	moskwabtn.classList.toggle("toggler");
	moskwabtn2.classList.toggle("toggler");
	moskwacityImg.classList.toggle("toggler");
	moskwapersonImg.classList.toggle("toggler");
	moskwanameCity.classList.toggle("toggler");
	moskwanamePerson.classList.toggle("toggler");
};
const revalPersonDenwer = () => {
	denwerbtn.classList.toggle("toggler");
	denwerbtn2.classList.toggle("toggler");
	denwercityImg.classList.toggle("toggler");
	denwerpersonImg.classList.toggle("toggler");
	denwernameCity.classList.toggle("toggler");
	denwernamePerson.classList.toggle("toggler");
};
const revalPersonHelsinki = () => {
	helsinkibtn.classList.toggle("toggler");
	helsinkibtn2.classList.toggle("toggler");
	helsinkicityImg.classList.toggle("toggler");
	helsinkipersonImg.classList.toggle("toggler");
	helsinkinameCity.classList.toggle("toggler");
	helsinkinamePerson.classList.toggle("toggler");
};
const revalPersonOslo = () => {
	oslobtn.classList.toggle("toggler");
	oslobtn2.classList.toggle("toggler");
	oslocityImg.classList.toggle("toggler");
	oslopersonImg.classList.toggle("toggler");
	oslonameCity.classList.toggle("toggler");
	oslonamePerson.classList.toggle("toggler");
};

riobtn.addEventListener("click", revalPersonRio);
riobtn2.addEventListener("click", revalPersonRio);

tokiobtn.addEventListener("click", revalPersonTokio);
tokiobtn2.addEventListener("click", revalPersonTokio);

berlinbtn.addEventListener("click", revalPersonBerlin);
berlinbtn2.addEventListener("click", revalPersonBerlin);

nairobibtn.addEventListener("click", revalPersonNairobi);
nairobibtn2.addEventListener("click", revalPersonNairobi);

moskwabtn.addEventListener("click", revalPersonMoskwa);
moskwabtn2.addEventListener("click", revalPersonMoskwa);

denwerbtn.addEventListener("click", revalPersonDenwer);
denwerbtn2.addEventListener("click", revalPersonDenwer);

helsinkibtn.addEventListener("click", revalPersonHelsinki);
helsinkibtn2.addEventListener("click", revalPersonHelsinki);

oslobtn.addEventListener("click", revalPersonOslo);
oslobtn2.addEventListener("click", revalPersonOslo);
