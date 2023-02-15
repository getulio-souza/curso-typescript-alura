//vamos criar uma tabela de forma declarativa 
export class NegociacoesView {
    //vamos criar um seletor css
    constructor(seletor) {
        //aqui pegamos a propriedade seletor e carregamos ela na propriedade elemento que chama o html element
        this.elemento = document.querySelector(seletor);
    }
    //esse método declara o template da nossa view 
    template(model) {
        // o template é um método que é iniciado como tipo string que será a nossa tabela renderizada 
        return `
        <table class="table table-hover table-bordered">
            <thead>
             <tr>
                <th>Data</th>
                <th>Quantidade</th>
                <th>Valor</th>
             </tr>
            </thead>
                <tbody>
                
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td>${new Intl.DateTimeFormat()
                .format(negociacao.data)} 
                                </td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
         </table>
         `;
    }
    //vamos criar um método update para atualizar os valores do template 
    // por enquanto ele é void, ou seja, não recebe nenhum valor
    //esse método acessa os elementos do DOM na forma de HTML e atribui para o resultado de template, exibindo-o na tela
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
// https://cursos.alura.com.br/forum/topico-meu-template-nao-renderiza-166811
