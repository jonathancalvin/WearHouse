using Microsoft.EntityFrameworkCore;
using WearHouse.Models;

namespace WearHouse.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) 
            : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Product { get; set; }
    }
}
