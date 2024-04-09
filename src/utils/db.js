import axios from 'axios'

const listar = async () => {
  const itens = await axios({
    baseURL: 'https://chaaliceback.onrender.com',
    url: 'pessoas'
  }).then(res => res.data)
  return itens
}

export {
  listar
}
