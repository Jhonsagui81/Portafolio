export interface Proyect {
    id: number;
    title: string;
    description: string;
    technologies: {
        icon: string;
        name: string;
    }[];
    images: {
        main: string;
        thumbnail:string;
    }[];
    codigoFuente: string;
}

export const PROJECTS: Proyect[] = [
    {
        id: 1,
        title: 'Salud Plus',
        description: 'Salud Plus es una plataforma digital para una reconocida cadena de clinicas medicas del pais, esta plataforma facilita la comunicacion entre medicos y sus pacientes, facilitando a los paciente crear citas con su medico y visualizar de manera intuitiva los medicamentos recetados en dicha cita. En cuanto a los medicos ayuda a tener un control de citas y un historial de expedientes de cada uno de sus pacientes ',
        technologies: [
            {icon:"assets/SaludPlus/tecnol/node.svg", name:"Node.js"},
            {icon:"assets/SaludPlus/tecnol/type.svg", name:"Typescript"},
            {icon:"assets/SaludPlus/tecnol/aws.svg", name:"AWS"},
            {icon:"assets/SaludPlus/tecnol/docker.svg", name:"Docker"},
            {icon:"assets/SaludPlus/tecnol/angular.svg", name:"Angular"},
            {icon:"assets/SaludPlus/tecnol/gitlab.svg", name:"Gitlab"},
            {icon:"assets/SaludPlus/tecnol/postgres.svg", name:"PostgreSQL"},
        ],
        images: [
          { main: 'assets/SaludPlus/Login.png', thumbnail: 'assets/SaludPlus/Login.png' },
          { main: 'assets/SaludPlus/Selec.png', thumbnail: 'assets/SaludPlus/Selec.png' },
          { main: 'assets/SaludPlus/RegMed.png', thumbnail: 'assets/SaludPlus/RegMed.png' },
          { main: 'assets/SaludPlus/Vermedicos.png', thumbnail: 'assets/SaludPlus/Vermedicos.png' },
          { main: 'assets/SaludPlus/Verpacientes.png', thumbnail: 'assets/SaludPlus/Verpacientes.png' },
          { main: 'assets/SaludPlus/Perfil.png', thumbnail: 'assets/SaludPlus/Perfil.png' },
          { main: 'assets/SaludPlus/GestiondeCitas.png', thumbnail: 'assets/SaludPlus/GestiondeCitas.png' },
          { main: 'assets/SaludPlus/Historial.png', thumbnail: 'assets/SaludPlus/Historial.png' },
          { main: 'assets/SaludPlus/despliegue.png', thumbnail: 'assets/SaludPlus/despliegue.png' },
        ],
        codigoFuente: 'https://gitlab.com/ayds1_g8/AYDS1_G8.git'
    }
]

