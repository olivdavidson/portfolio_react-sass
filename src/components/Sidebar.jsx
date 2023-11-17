import Avatar from '../img/eu.jpeg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt='Davidson de Oliveira' srcSet=''/>
        <p className="title">Desenvolvedor</p>
        <p>Redes Sociais</p>
        <p>Informações de Contato</p>
        <a href="" className="btn">
            Donwload Currículo
        </a>
    </aside>
}

export default Sidebar