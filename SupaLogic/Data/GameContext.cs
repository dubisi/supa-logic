using Microsoft.EntityFrameworkCore;
using SupaLogic.Modals;

namespace SupaLogic.Data
{
    public class GameContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public GameContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING"));
        }


        public DbSet<Admin> Admin => Set<Admin>();
        public DbSet<WorldAmerican> WorldAmerican => Set<WorldAmerican>();
        public DbSet<WorldKnowledge> WorldKnowledge => Set<WorldKnowledge>();
        public DbSet<WorldSoccer> WorldSoccer => Set<WorldSoccer>();
    }
}
