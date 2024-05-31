using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WearHouse.Models
{
    [Table("Product")]
    public class Product
    {
        [Key]
        public Guid ProductId { get; set; }
        [MaxLength(255)]
        public string ProductName { get; set; } 
        //public User User{ get; set; }
    }
}
