import './Projects.css';

function Projects(){
    return (
        <div className='home'>
            <div className='container-navhome'>
                <div className='text-home'>Seus Projetos</div>
                <div className='search-button'>
                    <button type="button" class="btn-newhome">Novo Projeto</button>
                    <div class="form-search">
                    <form>
                        <input class="form-control-search" type="text" placeholder="Pesquisa"></input>
                            <i class="bi bi-search" type="submit"></i>
                    </form>
                    </div>
                    
                </div>
            </div>  

            <div className='project'>
                <div className='project-card'>PROJETO</div>
                <div className='project-card'>PROJETO</div>
                <div className='project-card'>PROJETO</div>
                <div className='project-card'>PROJETO</div>
                <div className='project-card'>PROJETO</div>
                <div className='project-card'>PROJETO</div>
            </div>          
        </div>
    )
}

export default Projects;