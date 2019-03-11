var jogador = 1 //saber quando jogador  1 joga ou jogador 2
var jogo;
var matriz = [0,0,0,0,0,0,0,0,0];
var velha = 0
var FimJogo = false //para quando acabar o jogo parar o programas
var aleatorio
var jogada = 0 // para jogador 1 e 2 jogar
var jogadaPc = 0 // para pc não jogar no msm lugar

//saber qual o modo de jogo
function JvsJ(){
	jogo = "j vs j"
	
}
function facilJogo(){
	jogo = "facil"
}

function medioJogo(){
	jogo = "medio"
}

function dificilJogo(){
	jogo = "dificil"
}

//função de cada modo de jogo
function Jogo(id){
	if(!FimJogo){ //função para saber quando o jogo acabou
		if(jogo == "j vs j"){ //saber qual a opção de jogo, (*****jogador vs jogador*****)
			if(matriz[id] == 0 ){ //se matriz for igual a 0
				velha++; 
				if(jogador == 1){ //jogador é um, então "x" joga
					matriz[id] = 1
					jogador = 2 //jogador recebe 2 para "o" jogar
					document.getElementById(id).src="imagens/x.png"
					document.getElementById(11).src="imagens/o.png" //saber qual jogador joga para mostrar para o usuario
					document.getElementById(10).src="imagens/branco.png" //passar ele para branco para o proximo jogar
					
				}
				else if (jogador == 2){//jogador é 2 então "o" joga
					matriz[id] = 2
					jogador = 1
					document.getElementById(id).src="imagens/o.png"	
					document.getElementById(10).src="imagens/x.png"//saber qual jogador joga para mostrar para o usuario
					document.getElementById(11).src="imagens/branco.png" //passar ele para branco para o proximo jogar
					
				}
				vitoriaDerrota() //função para mostrar se alguem ganhou
			}
		}
		else if(jogo == "facil"){ //******FACIL********
			if(matriz[id] == 0 ){  
				if(jogador == 1){ 
					velha++; 
					document.getElementById(id).src="imagens/x.png" //x joga
					matriz[id] = 1 //saber qua matriz x jogou
					jogador = 2 //passa para 2 para o "o" jogar
				}
				if (jogador == 2){
					velha++; 
					jogadaPc++
					aleatorio = (Math.floor(Math.random() * 9 + 1) -1);
					if(jogadaPc < 5){ //maquina só pode jogar 4 vezes
						while(matriz[aleatorio] != 0){ //para jogar onde já jogou
							aleatorio = (Math.floor(Math.random() * 9 + 1) -1); //gerar numero aleatorio
						} 
					}
					document.getElementById(aleatorio).src="imagens/o.png"//jogar
					document.getElementById(10).src="imagens/x.png"//saber qual jogador joga para mostrar para o usuario
					matriz[aleatorio] = 2 //saber qua matriz x jogou
					jogador = 1//jogador 1 jogar
				}
				vitoriaDerrota() //saber quem ganhou ou se deu empate
			}
			
		}
		else if(jogo == "medio"){ //saber qual a opção de jogo, (*****computador, modo medio***)
			velha++; 
			if(matriz [id] == 0 ){
				velha++; 
				document.getElementById(id).src="imagens/x.png" //x joga
				document.getElementById(10).src="imagens/x.png"//saber qual jogador joga para mostrar para o usuario
				matriz[id] = 1 //saber onde jogou
				medio()	//chamar função "medio" onde tem todas as jogadas para fechar o jogo de x
			}
			vitoriaDerrota()
		}
		else if(jogo == "dificil"){ // saber qual a opção de jogo, (****computador, modo dificil****)
			velha++; 
			if(matriz [id] == 0 ){
				velha++;
				document.getElementById(id).src="imagens/x.png"
				document.getElementById(10).src="imagens/x.png"//saber qual jogador joga para mostrar para o usuario
				matriz[id] = 1
				dificil()
			}
			vitoriaDerrota()	
		}
		else{
			alert("Por favor, escolha um modo de jogo.")
				
		}
	}
	else{
		alert("ACABOU O JOGO!")
	}
}
 


 
//vitoria ou derrota de jogo	
function vitoriaDerrota(){
	//saber se "x" ganhou
	if(matriz[0] == 1 && matriz[1]==1 && matriz[2]==1 || matriz[3] == 1 && matriz[4]==1 && matriz[5]==1 || matriz[6] == 1 && matriz[7]==1 && matriz[8]==1|| matriz[6] == 1 && matriz[4]==1 && matriz[2]==1 || matriz[0] == 1 && matriz[4]==1 && matriz[8]==1||matriz[0] == 1 && matriz[3]==1 && matriz[6]==1 || matriz[1] == 1 && matriz[4]==1 && matriz[7]==1 || matriz[2] == 1 && matriz[5]==1 && matriz[8]==1){
		alert("Jogador x Ganhou!")
		FimJogo = true
		
	}
	//saber se "o" ganhou
	else if(matriz[0] == 2 && matriz[1]==2 && matriz[2]==2 || matriz[3] == 2 && matriz[4]==2 && matriz[5]==2 || matriz[6] == 2 && matriz[7]==2 && matriz[8]==2|| matriz[6] == 2 && matriz[4]==2 && matriz[2]==2 || matriz[0] == 2 && matriz[4]==2 && matriz[8]==2||matriz[0] == 2 && matriz[3]==2 && matriz[6]==2 || matriz[1] == 2 && matriz[4]==2 & matriz[7]==2 || matriz[2] == 2 && matriz[5]==2 && matriz[8]==2){
		alert("Jogador O Ganhou!")
		FimJogo = true
	}
	//saber se deu velha
	else if(velha >=9){
		alert("VELHA!")
		FimJogo = true
	}
}

function Reiniciar(){
	window.location.href=window.location.href
}




function medio(){
	jogada++
	if(jogada == 1){ //jogada 1 joga número aleatorio
		//gerar número aleatorio sem repetir
		aleatorio = (Math.floor(Math.random() * 8 + 1) -1);
		while(matriz[aleatorio] != 0){
			aleatorio = (Math.floor(Math.random() * 8 + 1) -1);
		}
		document.getElementById(aleatorio).src="imagens/o.png"
		matriz[aleatorio] = 2
	}
	else if(jogada == 2 || jogada == 3 || jogada == 4){ //jogada 2, 3 e 4 verifica todas as possibilidades para fechar o jogo
		//1 linha
		if(matriz[0] == 1 && matriz[1] == 1 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[2] == 1 && matriz[1] == 1 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[2] == 1 && matriz[0] == 1 && matriz[1] == 0){
			x = 1
		}
		//2 linha
		else if(matriz[3] == 1 && matriz[4] == 1 && matriz[5] == 0){
			x = 5
		}
		else if(matriz[5] == 1 && matriz[4] == 1 && matriz[3] == 0){
			x = 3
		}
		else if(matriz[3] == 1 && matriz[5] == 1 && matriz[4] == 0){
			x = 4
		}
		//3 linha
		else if(matriz[6] == 1 && matriz[7] == 1 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 1 && matriz[7] == 1 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 1 && matriz[8] == 1 && matriz[7] == 0){
			x = 7
		}
		// horizontal 1
		else if(matriz[0] == 1 && matriz[4] == 1 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 1 && matriz[4] == 1 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[0] == 1 && matriz[8] == 1 && matriz[4] == 0){
			x = 4
		}
		// horizontal 2
		else if(matriz[2] == 1 && matriz[4] == 1 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 1 && matriz[4] == 1 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[6] == 1 && matriz[2] == 1 && matriz[4] == 0){
			x = 4
		}
		//vertical 1
		else if(matriz[0] == 1 && matriz[3] == 1 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 1 && matriz[3] == 1 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[0] == 1 && matriz[6] == 1 && matriz[3] == 0){
			x = 3
		}
		//vertical 2
		else if(matriz[1] == 1 && matriz[4] == 1 && matriz[7] == 0){
			x = 7
		}
		else if(matriz[7] == 1 && matriz[4] == 1 && matriz[1] == 0){
			x = 1
		}
		else if(matriz[1] == 1 && matriz[7] == 1 && matriz[4] == 0){
			x = 4
		}
		//vertical 3
		else if(matriz[2] == 1 && matriz[5] == 1 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 1 && matriz[5] == 1 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[2] == 1 && matriz[8] == 1 && matriz[5] == 0){
			x = 5
		}
	
		else{
			//gerar número aleatorio sem repetir
			aleatorio = (Math.floor(Math.random() * 7 + 1) -1);
			while(matriz[aleatorio] != 0){
				aleatorio = (Math.floor(Math.random() * 7 + 1) -1);
			}
			document.getElementById(aleatorio).src="imagens/o.png"
			matriz[aleatorio] = 2
		}	
	}
	matriz[x] = 2
	document.getElementById(x).src="imagens/o.png"
}

function dificil(){
	jogada++;
	if(jogada == 1){
		if(matriz[0] == 1 || matriz[2] == 1 || matriz[6] == 1 || matriz[8] == 1 || matriz[3] == 1 || matriz[5] == 1 || matriz[1] == 1 || matriz[7] == 1 ){ //se jogar em qualquer lugar, exeto o meio, "o" joga no meio[4]
			x = 4
		}
		else if(matriz[4] == 1){ // se jogar no meio, joga nas laterais
			x = 0 
		}
		//******PARA X NÃO GANHAR****//
		
	}
	else if(jogada == 2){
		//se jogou no meio
		
		// para x não ganhar///
		//1 linha
		if(matriz[0] == 1 && matriz[1] == 1 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[2] == 1 && matriz[1] == 1 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[2] == 1 && matriz[0] == 1 && matriz[1] == 0){
			x = 1
		}
		//2 linha
		else if(matriz[3] == 1 && matriz[4] == 1 && matriz[5] == 0){
			x = 5
		}
		else if(matriz[5] == 1 && matriz[4] == 1 && matriz[3] == 0){
			x = 3
		}
		else if(matriz[3] == 1 && matriz[5] == 1 && matriz[4] == 0){
			x = 4
		}
		//3 linha
		else if(matriz[6] == 1 && matriz[7] == 1 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 1 && matriz[7] == 1 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 1 && matriz[8] == 1 && matriz[7] == 0){
			x = 7
		}
		// horizontal 1
		else if(matriz[0] == 1 && matriz[4] == 1 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 1 && matriz[4] == 1 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[0] == 1 && matriz[8] == 1 && matriz[4] == 0){
			x = 4
		}
		// horizontal 2
		else if(matriz[2] == 1 && matriz[4] == 1 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 1 && matriz[4] == 1 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[6] == 1 && matriz[2] == 1 && matriz[4] == 0){
			x = 4
		}
		//vertical 1
		else if(matriz[0] == 1 && matriz[3] == 1 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 1 && matriz[3] == 1 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[0] == 1 && matriz[6] == 1 && matriz[3] == 0){
			x = 3
		}
		//vertical 2
		else if(matriz[1] == 1 && matriz[4] == 1 && matriz[7] == 0){
			x = 7
		}
		else if(matriz[7] == 1 && matriz[4] == 1 && matriz[1] == 0){
			x = 1
		}
		else if(matriz[1] == 1 && matriz[7] == 1 && matriz[4] == 0){
			x = 4
		}
		//vertical 3
		else if(matriz[2] == 1 && matriz[5] == 1 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 1 && matriz[5] == 1 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[2] == 1 && matriz[8] == 1 && matriz[5] == 0){
			x = 5
		}
		/////extrategia (se 1 jogada foi no meio e depois no 8) ////
		else if(matriz[4] == 1 && matriz[8] == 1 && matriz[0] == 2){
			x = 6
		}
		
		//*** Se 1 jogada foi no 0 ou 1
		//segunda jogada 8, "O" joga no 3
		else if(matriz[0] == 1 && matriz[4] == 2 && matriz[8] == 1){
			x = 3
		}	
		else if(matriz[0] == 1 && matriz[4] == 2 && matriz[7] == 1 || matriz[1] == 1 && matriz[4] == 2 && matriz[3] == 1 ){
			x = 6
		}
		else if(matriz[0] == 1 && matriz[4] == 2 && matriz[5] == 1 || matriz[1] == 1 && matriz[4] == 2 && matriz[5] == 1 || matriz[1] == 1 && matriz[4] == 2 && matriz[6] == 1 || matriz[1] == 1 && matriz[4] == 2 && matriz[4] == 1 || matriz[1] == 1 && matriz[4] == 2 && matriz[8] == 1){
			x = 2
		}
		else if(matriz[0] == 1 && matriz[4] == 2 && matriz[8] == 1){
			x = 3
		}
		//segunda jogada se foi no 2
		else if(matriz[2] == 1 && matriz[4] == 2 && matriz[3] == 1){
			x = 0
		}
		else if(matriz[2] == 1 && matriz[4] == 2 && matriz[6] == 1){
			x = 1
		}
		else if(matriz[2] == 1 && matriz[4] == 2 && matriz[7] == 1){
			x = 3
		}
		//segunda jogada se foi no 5
		else if(matriz[5] == 1 && matriz[4] == 2 && matriz[1] == 1 || matriz[5] == 1 && matriz[4] == 2 && matriz[0] == 1 || matriz[5] == 1 && matriz[4] == 2 && matriz[3] == 1 || matriz[5] == 1 && matriz[4] == 2 && matriz[6] == 1 || matriz[5] == 1 && matriz[4] == 2 && matriz[7] == 1 ){
			x = 2
		}
		else if(matriz[2] == 1 && matriz[4] == 2 && matriz[7] == 1){
			x = 3
		}
		//segunda jogada se foi no 8
		else if(matriz[8] == 1 && matriz[4] == 2 && matriz[1] == 1){
			x = 2
		}
		else if(matriz[8] == 1 && matriz[4] == 2 && matriz[0] == 1 || matriz[8] == 1 && matriz[4] == 2 && matriz[3] == 1){
			x = 1
		}
		else if(matriz[8] == 1 && matriz[4] == 2 && matriz[1] == 1){
			x = 2
		}
		//segunda jogada se foi no 7
		else if(matriz[7] == 1 && matriz[4] == 2 && matriz[5] == 1 || matriz[7] == 1 && matriz[4] == 2 && matriz[1] == 1){
			x = 2
		}
		else if(matriz[7] == 1 && matriz[4] == 2 && matriz[3] == 1 || matriz[7] == 1 && matriz[4] == 2 && matriz[0] == 1){
			x = 6
		}
		else if(matriz[7] == 1 && matriz[4] == 2 && matriz[2] == 1){
			x = 3
		}
		//segunda jogada se foi no 6
		else if(matriz[6] == 1 && matriz[4] == 2 && matriz[2] == 1){
			x = 3
		}
		else if(matriz[6] == 1 && matriz[4] == 2 && matriz[1] == 1 || matriz[6] == 1 && matriz[4] == 2 && matriz[5] == 1){
			x = 0
		}
		//segunda jogada se foi no 3
		else if(matriz[3] == 1 && matriz[4] == 2 && matriz[1] == 1 || matriz[3] == 1 && matriz[4] == 2 && matriz[7] == 1 || matriz[3] == 1 && matriz[4] == 2 && matriz[2] == 1 || matriz[3] == 1 && matriz[4] == 2 && matriz[5] == 1 || matriz[3] == 1 && matriz[4] == 2 && matriz[8] == 1){
			x = 0
		}
	}
	//
	
	else if(jogada == 3 || jogada == 4){
		
		//para o ganhar	
		//1 linha bolinha ganhar
		if(matriz[0] == 2 && matriz[1] == 2 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[2] == 2 && matriz[1] == 2 && matriz[0] == 0 ){
			x = 0
		}
		else if(matriz[2] == 2 && matriz[0] == 2 && matriz[1] == 0){
			x = 1
		}
		//2 linha bolinha ganhar
		else if(matriz[3] == 2 && matriz[4] == 2 && matriz[5] == 0){
			x = 5
		}
		else if(matriz[5] == 2 && matriz[4] == 2 && matriz[3] == 0){
			x = 3
		}
		else if(matriz[3] == 2 && matriz[5] == 2 && matriz[4] == 0){
			x = 4
		}
		//3 linha bolinha ganhar
		else if(matriz[6] == 2 && matriz[7] == 2 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 2 && matriz[7] == 2 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 2 && matriz[8] == 2 && matriz[7] == 0){
			x = 7
		}
		// diagonal 1 bolinha ganhar
		else if(matriz[0] == 2 && matriz[4] == 2 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 2 && matriz[4] == 2 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[0] == 2 && matriz[8] == 2 && matriz[4] == 0){
			x = 4
		}
		// diagonal 2 bolinha ganhar
		else if(matriz[2] == 2 && matriz[4] == 2 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 2 && matriz[4] == 2 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[6] == 2 && matriz[2] == 2 && matriz[4] == 0){
			x = 4
		}
		//vertical 1 bolinha ganhar
		else if(matriz[0] == 2 && matriz[3] == 2 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 2 && matriz[3] == 2 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[0] == 2 && matriz[6] == 2 && matriz[3] == 0){
			x = 3
		}
		//vertical 2 bolinha ganhar
		else if(matriz[1] == 2 && matriz[4] == 2 && matriz[7] == 0){
			x = 7
		}
		else if(matriz[7] == 2 && matriz[4] == 2 && matriz[1] == 0){
			x = 1
		}
		else if(matriz[1] == 2 && matriz[7] == 2 && matriz[4] == 0){
			x = 4
		}
		//vertical 3 bolinha ganhar
		else if(matriz[2] == 2 && matriz[5] == 2 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 2 && matriz[5] == 2 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[2] == 2 && matriz[8] == 2 && matriz[5] == 0){
			x = 5
		}
		
		// para x não ganhar///
		//1 linha
		else if(matriz[0] == 1 && matriz[1] == 1 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[2] == 1 && matriz[1] == 1 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[2] == 1 && matriz[0] == 1 && matriz[1] == 0){
			x = 1
		}
		//2 linha
		else if(matriz[3] == 1 && matriz[4] == 1 && matriz[5] == 0){
			x = 5
		}
		else if(matriz[5] == 1 && matriz[4] == 1 && matriz[3] == 0){
			x = 3
		}
		else if(matriz[3] == 1 && matriz[5] == 1 && matriz[4] == 0){
			x = 4
		}
		//3 linha
		else if(matriz[6] == 1 && matriz[7] == 1 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 1 && matriz[7] == 1 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 1 && matriz[8] == 1 && matriz[7] == 0){
			x = 7
		}
		// horizontal 1
		else if(matriz[0] == 1 && matriz[4] == 1 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 1 && matriz[4] == 1 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[0] == 1 && matriz[8] == 1 && matriz[4] == 0){
			x = 4
		}
		// horizontal 2
		else if(matriz[2] == 1 && matriz[4] == 1 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 1 && matriz[4] == 1 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[6] == 1 && matriz[2] == 1 && matriz[4] == 0){
			x = 4
		}
		//vertical 1
		else if(matriz[0] == 1 && matriz[3] == 1 && matriz[6] == 0){
			x = 6
		}
		else if(matriz[6] == 1 && matriz[3] == 1 && matriz[0] == 0){
			x = 0
		}
		else if(matriz[0] == 1 && matriz[6] == 1 && matriz[3] == 0){
			x = 3
		}
		//vertical 2
		else if(matriz[1] == 1 && matriz[4] == 1 && matriz[7] == 0){
			x = 7
		}
		else if(matriz[7] == 1 && matriz[4] == 1 && matriz[1] == 0){
			x = 1
		}
		else if(matriz[1] == 1 && matriz[7] == 1 && matriz[4] == 0){
			x = 4
		}
		//vertical 3
		else if(matriz[2] == 1 && matriz[5] == 1 && matriz[8] == 0){
			x = 8
		}
		else if(matriz[8] == 1 && matriz[5] == 1 && matriz[2] == 0){
			x = 2
		}
		else if(matriz[2] == 1 && matriz[8] == 1 && matriz[5] == 0){
			x = 5
		}
		// aleatorio
		else{
			aleatorio = (Math.floor(Math.random() * 9 + 1) -1);
			while(matriz[aleatorio] != 0){
				aleatorio = (Math.floor(Math.random() * 9 + 1) -1);
			}
			document.getElementById(aleatorio).src="imagens/o.png"
			matriz[aleatorio] = 2
		}
	}
	

	matriz[x] = 2
	document.getElementById(x).src="imagens/o.png" 
}





