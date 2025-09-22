
using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }
    public required DbSet<Activity> Activities { get; set; }
}
