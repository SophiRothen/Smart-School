namespace SmartSchool_webAPI
{
    public class Disciplina
    {

        public Disciplina() { }

        public Disciplina(int id, string nome, int ProfessorId)
        {
            this.id = id;
            this.nome = nome;
            this.ProfessorId = professorId;
        }
        

        public int id { get; set; }
        public string nome { get; set; }
        public int ProfessorId { get; set; }
        public Professor Professor { get; set; }
    }
}