using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SupaLogic.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admin",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admin", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "WorldAmerican",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    WordClue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Word = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorldAmerican", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorldKnowledge",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    WordClue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Word = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorldKnowledge", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorldSoccer",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    WordClue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Word = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorldSoccer", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admin");

            migrationBuilder.DropTable(
                name: "WorldAmerican");

            migrationBuilder.DropTable(
                name: "WorldKnowledge");

            migrationBuilder.DropTable(
                name: "WorldSoccer");
        }
    }
}
