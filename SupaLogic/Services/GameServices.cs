using SupaLogic.Data;
using SupaLogic.Modals;

namespace SupaLogic.Services
{
    public class GameServices
    {
        private readonly GameContext _context;
        private int day = (int)DateTime.Now.DayOfWeek;

        public GameServices(GameContext context)
        {
            _context = context;
        }

        public Admin addUser(Admin admin)
        {
            _context.Admin.Add(admin);
            _context.SaveChanges();

            return admin;

        }
        public bool login(Admin admin)
        {
            var valid = _context.Admin.Where(x => x.Name == admin.Name && x.Password == admin.Password);

            return valid.Any();

        }
        //start world soccer
        public WorldSoccer addAWorldSoccer(WorldSoccer worldSoccer)
        {
            int id;
            List<WorldSoccer> world = _context.WorldSoccer.ToList();

            if (world.Count == 7)
            {
                throw new IndexOutOfRangeException("only 7 data allowed");
            }
            else if (world.Count == 0)
            {
                id = 0;
            }
            else { id = world[world.Count - 1].Id; id++; }
            worldSoccer.Id = id;
            _context.WorldSoccer.Add(worldSoccer);
            _context.SaveChanges();
            return worldSoccer;
        }
        public WorldSoccer getAWorldSoccer()
        {
            int day = (int)DateTime.Now.DayOfWeek;

            var worldSoccer = _context.WorldSoccer.Find(day);
            if (worldSoccer != null)
            {
                return worldSoccer;
            }
            throw new Exception("not foud");
        }
        public List<WorldSoccer> getAllWorldSoccer()
        {
            return _context.WorldSoccer.ToList();
        }
        public void clearAWorldSoccer()
        {
            _context.RemoveRange(getAllWorldSoccer());
            _context.SaveChanges();
        }
        //endregion
        //world knowledge
        public WorldKnowledge addAWorldKnowledge(WorldKnowledge worldKnowledge)
        {

            int id;
            List<WorldKnowledge> world = _context.WorldKnowledge.ToList();

            if (world.Count == 7)
            {
                throw new IndexOutOfRangeException("only 7 data allowed");
            }
            else if (world.Count == 0)
            {
                id = 0;
            }
            else { id = world[world.Count - 1].Id; id++; }
            worldKnowledge.Id = id;
            _context.WorldKnowledge.Add(worldKnowledge);
            _context.SaveChanges();
            return worldKnowledge;
        }
        public WorldKnowledge getAWorldKnowledge()
        {
            int day = (int)DateTime.Now.DayOfWeek;

            var worldKnowledge = _context.WorldKnowledge.Find(day);
            if (worldKnowledge != null)
            {
                return worldKnowledge;
            }
            throw new Exception("not foud");
        }
        public List<WorldKnowledge> getAllWorldKnowledge()
        {
            return _context.WorldKnowledge.ToList();
        }
        public void clearAWorldKnowledge()
        {
            _context.RemoveRange(getAllWorldKnowledge());
            _context.SaveChanges();
        }
        //end region
        //world american
        public WorldAmerican addAWorldAmerican(WorldAmerican worldAmerican)
        {
            int id;
            List<WorldAmerican> world = _context.WorldAmerican.ToList();

            if (world.Count == 7)
            {
                throw new IndexOutOfRangeException("only 7 data allowed");
            }
            else if (world.Count == 0)
            {
                id = 0;
            }
            else { id = world[world.Count - 1].Id; id++; }
            worldAmerican.Id = id;
            _context.WorldAmerican.Add(worldAmerican);
            _context.SaveChanges();
            return worldAmerican;
        }

        public WorldAmerican getAWorldAmerican()
        {
            int day = (int)DateTime.Now.DayOfWeek;

            var worldAmerican = _context.WorldAmerican.Find(day);
            if (worldAmerican != null)
            {
                return worldAmerican;
            }
            throw new Exception("not foud");
        }
        public List<WorldAmerican> getAllWorldAmerican()
        {
            return _context.WorldAmerican.ToList();
        }

        public void clearAWorldAmerican()
        {
            _context.RemoveRange(getAllWorldAmerican());
            _context.SaveChanges();
        }
        //end region
    }
}
