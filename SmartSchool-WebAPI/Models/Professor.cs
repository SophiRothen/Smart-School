namespace SmartSchool_webAPI.MOdels
{
    public class Professor 
    {
        public Professor() { }

        public Professor(int id, string nome, string disciplina)
        {
            this.id = id;
            this.nome = nome;
            this.disciplina = disciplina;
        }
        
        public int id { get; set; }
        public string nome { get; set; }
        public string disciplina { get; set; }
    }
}