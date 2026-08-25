// ================= MENU MOBILE =================

const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("aberto");

    if (menu.classList.contains("aberto")) {
        menuMobile.textContent = "✕";
    } else {
        menuMobile.textContent = "☰";
    }
});


// Fecha o menu quando o usuário clica em um link

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("aberto");

        menuMobile.textContent = "☰";

    });

});


// ================= CALCULADORA =================

const calcular = document.getElementById("calcular");

const resultadoCalculadora =
    document.getElementById("resultadoCalculadora");


calcular.addEventListener("click", () => {

    const area =
        Number(document.getElementById("area").value);

    const consumo =
        Number(document.getElementById("consumo").value);

    const economia =
        Number(document.getElementById("economia").value);


    // Verificação dos valores

    if (
        area <= 0 ||
        consumo <= 0 ||
        economia < 0 ||
        economia > 100
    ) {

        resultadoCalculadora.innerHTML = `
            <p>
                ⚠️ Preencha todos os campos corretamente.
                A área e o consumo devem ser maiores que zero,
                e a economia deve estar entre 0% e 100%.
            </p>
        `;

        return;
    }


    // Consumo atual

    const consumoAtual =
        area * consumo;


    // Quantidade economizada

    const quantidadeEconomizada =
        consumoAtual * (economia / 100);


    // Novo consumo

    const novoConsumo =
        consumoAtual - quantidadeEconomizada;


    // Formatação

    const atualFormatado =
        consumoAtual.toLocaleString("pt-BR");


    const economiaFormatada =
        quantidadeEconomizada.toLocaleString("pt-BR");


    const novoFormatado =
        novoConsumo.toLocaleString("pt-BR");


    resultadoCalculadora.innerHTML = `

        <h3>🌱 Resultado da estimativa</h3>

        <p>
            Considerando uma propriedade de
            <strong>${area.toLocaleString("pt-BR")} hectares</strong>
            e um consumo de
            <strong>${consumo.toLocaleString("pt-BR")} litros por hectare</strong>,
            o consumo estimado atualmente seria:
        </p>

        <p>
            💧 <strong>${atualFormatado} litros</strong>
            de água.
        </p>

        <p>
            Se a propriedade conseguir reduzir o consumo em
            <strong>${economia}%</strong>, a economia estimada seria de:
        </p>

        <p>
            🌿 <strong>${economiaFormatada} litros de água.</strong>
        </p>

        <p>
            Com essa redução, o consumo estimado passaria para:
        </p>

        <p>
            💧 <strong>${novoFormatado} litros.</strong>
        </p>

        <p>
            Esse resultado é apenas uma estimativa educativa.
            O consumo real depende de fatores como cultura,
            clima, solo, sistema de irrigação e manejo da propriedade.
        </p>

    `;

});


// ================= ANIMAÇÃO AO APARECER =================

const elementos =
    document.querySelectorAll(
        ".conteudo, .texto-section, .destaque, .calculadora-section, .fontes-lista article"
    );


const observador =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add(
                        "visivel"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


elementos.forEach(elemento => {

    observador.observe(elemento);

});
