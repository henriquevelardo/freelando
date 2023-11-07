export const recebeUsuariosCadastrados = async() => {

    const request = await fetch('https://my-json-server.typicode.com/henriquevelardo/freelando-api/usuarios')
    const resposta = await request.json()

    return resposta
}