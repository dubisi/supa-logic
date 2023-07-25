using System.ComponentModel.DataAnnotations.Schema;

namespace SupaLogic.Modals
{
    public class WorldAmerican
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public string WordClue { get; set; }
        public string Word { get; set; }
    }
}
