using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WearHouse.Models
{
    [Table("Users")]
    public class User
    {
        [Key]
        public Guid UserId { get; set; }
        [MaxLength(255)]
        public string UserName { get; set; }
        [MaxLength(255)]
        public string UserEmail { get; set; }
        [MaxLength(255)]
        public string UserPassword { get; set; }
    }
}
