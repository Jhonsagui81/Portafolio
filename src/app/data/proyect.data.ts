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
    },
    {
        id: 2,
        title: 'Olimpiadas USAC',
        description: 'Sistema distribuido en Kubernetes (GCP) para monitorear en tiempo real las competencias de Natación, Boxeo y Atletismo entre las facultades de Ingeniería y Agronomía. Utiliza Grafana para visualización y Kafka para streaming de datos.',
        technologies: [
            {icon:"assets/SaludPlus/tecnol/K8.svg", name:"Kubernetes"},
            {icon:"assets/SaludPlus/tecnol/gcp.svg", name:"gcloud"},
            {icon:"assets/SaludPlus/tecnol/rust.svg", name:"Rust"},
            {icon:"assets/SaludPlus/tecnol/go.svg", name:"Go"},
            {icon:"assets/SaludPlus/tecnol/docker.svg", name:"Docker"},
            {icon:"assets/SaludPlus/tecnol/apache-kafka.svg", name:"Kafka"},
            {icon:"assets/SaludPlus/tecnol/redis.svg", name:"Redis"},
            {icon:"assets/SaludPlus/tecnol/grafana.svg", name:"Grafana"},
        ],
        images: [
          { main: 'assets/Olimpiada/image.png', thumbnail: 'assets/Olimpiada/image.png' }
        ],
        codigoFuente: 'https://github.com/Jhonsagui81/SIstemas-Operativos/tree/46247c3b03d7a2833c6e8713910c408d524ae444/Proyecto2'
    },
    {
        id: 3,
        title: 'TaskFlow + CloudDrive',
        description: 'Aplicación web full-stack que integra gestión de tareas y almacenamiento de archivos en la nube, implementada de forma paralela en AWS y Azure para comparar servicios equivalentes. Destaca por su arquitectura resiliente, escalabilidad bajo demanda y despliegue 100% en la nube',
        technologies: [
            {icon:"assets/SaludPlus/tecnol/node.svg", name:"Node.js"},
            {icon:"assets/SaludPlus/tecnol/Cp.svg", name:"C#"},
            {icon:"assets/SaludPlus/tecnol/type.svg", name:"Typescript"},
            {icon:"assets/SaludPlus/tecnol/aws.svg", name:"AWS"},
            {icon:"assets/SaludPlus/tecnol/azure.svg", name:"Azure"}
        ],
        images: [
          { main: 'assets/Task/1.png', thumbnail: 'assets/Task/1.png' },
          { main: 'assets/Task/2.png', thumbnail: 'assets/Task/2.png' },
          { main: 'assets/Task/3.png', thumbnail: 'assets/Task/3.png' },
          { main: 'assets/Task/4.png', thumbnail: 'assets/Task/4.png' },
          { main: 'assets/Task/5.png', thumbnail: 'assets/Task/5.png' },
          { main: 'assets/Task/6.png', thumbnail: 'assets/Task/6.png' },

        ],
        codigoFuente: 'https://github.com/JPorres03/Semi1-A-1S2025-Grupo4-Proyecto/tree/f88081e072c6fad19ff75079eca23032e87e7cbe/Practica%202'
    },
    {
        id: 4,
        title: 'QueryCrypter',
        description: 'QueryCrypter es un intérprete que emula un motor de bases de datos en memoria, diseñado para procesar instrucciones SQL y operaciones programáticas avanzadas. Permite ejecutar consultas clásicas (creación, inserción, actualización y eliminación de tablas) e integra características propias de lenguajes de programacion como manejo de variables, estructuras de control y funciones personalizadas',
        technologies: [
            {icon:"assets/SaludPlus/tecnol/node.svg", name:"Node.js"},
            {icon:"assets/SaludPlus/tecnol/type.svg", name:"Typescript"},
            {icon:"assets/SaludPlus/tecnol/react.svg", name:"React"},
            {icon:"assets/SaludPlus/tecnol/graphviz.svg", name:"Graphviz"},
        ],
        images: [
          { main: 'assets/interprete/1.png', thumbnail: 'assets/interprete/1.png' },
          { main: 'assets/interprete/4.png', thumbnail: 'assets/interprete/4.png' },
          { main: 'assets/interprete/5.png', thumbnail: 'assets/interprete/5.png' },
          { main: 'assets/interprete/6.png', thumbnail: 'assets/interprete/6.png' },
        ],
        codigoFuente: 'https://github.com/Jhonsagui81/OLC1_Proyecto2_202106003.git'
    }
]

