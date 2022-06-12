/**
 * Confirmação de exclusão de um contato
 * @author Bárbara Pimenta
 */

function confirmar(idcon) {
    let resposta = confirm("Confirma a exclusão do contato?")
    if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
    }
}