using System.ComponentModel.DataAnnotations.Schema;

namespace SupaLogic.Modals
{
    public class Admin
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
    }
}
