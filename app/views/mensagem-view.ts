
//toda vez que quero criar uma view preciso criar/exportar uma classe 
export class MensagemView {

  private element: HTMLElement;

  //recebo no seletor o id do elemento que vou inserir no parágrafo 
  constructor(seletor: string){
    this.element = document.querySelector(seletor)
  }

  //vamos criar o template para a mensagem view
  template(model: string): string {
    return`
    <p class="alert alert-info">${model}</p>
    `
  }

  update(model: string): void{
    const template = this.template(model);
    //esse template tá sendo adicionado no innerHtml
    this.element.innerHTML = template;
  }
}