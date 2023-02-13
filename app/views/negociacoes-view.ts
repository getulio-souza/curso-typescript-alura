//vamos criar uma tabela de forma declarativa 
// o template é um método que é iniciado como tipo string que será a nossa tabela renderizada 
export class NegociacoesView {
    template (): string {
        return `
         <table class="table table-hover table-bordered">
            <thead>
             <tr>
                <th>Data/th>
                <th>Quantidade/th>
                <th>Valor/th>
             </tr>
                </thead>
                <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
         </table>
        `;
    }
}