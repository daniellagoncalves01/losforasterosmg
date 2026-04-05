function mostrarConteudo(tipo) {
    const conteudo = document.getElementById("conteudo");

    conteudo.classList.add("ativo");
    document.body.style.overflow = "hidden";

    let html = `<span class="fechar" onclick="fecharConteudo()">✖</span>`;

    if (tipo === "historia") {
        html += `<h2>Nossa História</h2><p>Há momentos na vida de um motociclista em que a estrada à frente exige uma escolha: continuar seguindo um caminho que já não faz sentido ou ter a coragem de abrir uma nova trilha, essa escolha tornou-se inevitável.</p>
       
        <p>Por muito tempo, dedicaram sua lealdade e seus quilômetros a uma antiga bandeira. No entanto, com o passar do tempo, perceberam que os propósitos que os uniam à uma antiga história estava se perdendo, o verdadeiro espírito de irmandade começa a silenciar.</p>
               
        <p>Movidos pela lealdade aos seus princípios e expectativas, Carlinhos e Will escolheram a renovação. Eles entenderam que a honra de um colete não vem apenas das cores que ele carrega.</p>
                  
         <p>A mudança não foi apenas um desejo, foi uma necessidade. No dia 29 de março de 2025, o asfalto testemunhou um novo capítulo: Receberam seus novos coletes e, com eles se fundou o Los Forasteros MG.</p>
                    
        <p>A clareza dessa nova história não demorou a ser contada. Outros companheiros de estrada, que compartilhavam do mesmo sentimento de busca por respeito, valorização e irmandade, viram no Los Forasteros a oportunidade de voltar a rodar com orgulho entre pessoas queridas.</p>
                   
        <p>Um a um, esses integrantes tomaram a decisão de se unir a essa nova jornada, fortalecendo a corrente e consolidando a irmandade.</p>
        
        <p>Hoje, seguimos em frente com o vento no rosto e a consciência tranquila. Olhamos para o retrovisor com respeito pelo que passou, mas com os olhos fixos no horizonte que construímos, pois sabemos que nossa história renasce, mas não se apaga.</p>
        
        <p>"Não é quantidade que se forma uma família, e sim a qualidade"</p>
        `;
    }

    if (tipo === "integrantes") {
        html += `
        <h2>Integrantes</h2>
        <div class="integrantes-grid">
        <div class="integrante">
        <img src="pessoa1.jpg">
        <h4>Carlinhos</h4>
        <p>Fundador & Presidente</p>
    </div>

    <div class="integrante">
        <img src="pessoa2.png">
        <h4>Will</h4>
        <p>Fundador & Vice-presidente</p>
    </div>

     <div class="integrante">
        <img src="pessoa3.png">
        <h4>Dani</h4>
        <p>Mídia Social - Família</p>
    </div>

     <div class="integrante">
        <img src="pessoa4.png">
        <h4>Fabiano</h4>
        <p>Membro - Piloto </p>
    </div>
     
     <div class="integrante">
        <img src="pessoa5.png">
        <h4>Kelly</h4>
        <p>Membro - Família </p>
    </div>

     <div class="integrante">
        <img src="pessoa6.png">
        <h4>Ruiva</h4>
        <p>Membro - Família</p>
    </div>
    
    <div class="integrante">
        <img src="pessoa7.png">
        <h4>Jamile</h4>
        <p>Membro - Família</p>
    </div>

    <div class="integrante">
        <img src="pessoa8.png">
        <h4>Parra</h4>
        <p>Membro - Piloto</p>
    </div>

    <div class="integrante">
        <img src="pessoa9.png">
        <h4>Almada</h4>
        <p>Membro - Família</p>
    </div>

    <div class="integrante">
                    <img src="pessoa10.jpeg">
                    <h4>Tatiane</h4>
                    <p>Pilota Próspera</p>
                    </div>


        </div>`;
    }

    if (tipo === "parceiro") {
        html += `<h2>Parceiros</h2>
        <div class="integrante">
        <img src="parceiro3.png">
        <h4>Tadeu Bichon Frisé</h4>
        <p>O Bichon Frisé Motociclista</p>
        </div>
        
        <div class="integrante">
        <img src="parceiro1.png">
        <h4>Clandestinos VAPPU</h4>
        <p>Moto Grupo</p>
    </div>

    <div class="integrante">
        <img src="parceiro2.png">
        <h4>Renegados na BR</h4>
        <p>Moto Grupo</p>
    </div>`;
    }
    if (tipo === "musica") {
        html += `
        <h2>Nossa Música</h2>
        <audio controls style="width:100%">
            <source src="musica.mp3">
        </audio>`;
    }

    if (tipo === "contato") {
        html += `
        <h2>Fale Conosco</h2>
        <p> Aguarde o formulário</p>
        <iframe src="https://forms.gle/YqLYTYQxmiD8WfNH8" width="100%" height="400"></iframe>`;
    }

   if (tipo === "nossosroles") {
        html += `<h2>Nossos Rolês</h2>
        <div class="integrante">
            <a href="https://photos.app.goo.gl/yCLP6YDXYSm8bRMa8" target="_blank">
            <img src="nossosroles.jpg">
        </a> 
            <h4>Biblioteca de Fotos</h4>
        <p>Clique ou escaneie o QR Code e confira!</p>
        </div>`;
    }

    if (tipo === "instagram") {
        html += `<h2>Redes Sociais</h2>
    
        <div class="integrante">
            <a href="https://www.instagram.com/losforasteros_mg?igsh=aWN2dTI2eHEzMXZk" target="_blank">
                <img src="instagram.jpg">
            </a>
            <h4>@losforasteros_mg</h4>
            <p>Clique ou escaneie o QR Code e confira!</p>
        </div>
    
        <div class="integrante">
            <a href="https://www.youtube.com/@losforasteros_mg?si=J5msjOex4DVRbO1B" target="_blank">
                <img src="youtube.jpg">
            </a>
            <h4>Los Forasteros Moto Grupo</h4>
            <p>Clique ou escaneie o QR Code e confira!</p>
        </div>`;
    }
    conteudo.innerHTML = html;
}
function fecharConteudo() {
    document.getElementById("conteudo").classList.remove("ativo");
    document.body.style.overflow = "auto";
}

