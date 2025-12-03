//variável que armazena qual slide está ativo (começa no 1)
let slideIndex = 1;

showSlides(slideIndex);

//esta função avança ou volta os slides 
function maisSlide(n) {
	showSlides(slideIndex = slideIndex + n);
}
//esta função serve para selecionar um slide específico 
function atualSlide(n) {
	showSlides(slideIndex = n);
}

//esta função é a principal, ela mostra o slide.
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("meuSlide");
	let pontos = document.getElementsByClassName("ponto");

	  //se passar do último, volta para o slide 1
	if (n > slides.length) {
		slideIndex = 1;
	}
	  // se voltaer antes do primeiro, vai para o último slide
	if (n < 1) {
		slideIndex = slides.length
	}

    // esconde todos os slides 
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display= "none";
	}

//remove ativo de todos os pontos de navegação
	for(i = 0; i < pontos.lenght; i++) {
		pontos[i].className = pontos[i].className.replace(" ativo", "");
	}

// mostra o slide atual 
  slides[slideIndex-1].style.display = "block";
  pontos[slideIndex-1].className += " ativo";
}