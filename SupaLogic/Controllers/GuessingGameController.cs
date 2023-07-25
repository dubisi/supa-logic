using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SupaLogic.Modals;
using SupaLogic.Services;

namespace SupaLogic.Controllers
{
    [ApiController]
    [Route("api/v1/supalogic")]
    [EnableCors("MyPolicy")]
    public class GuessingGameController : Controller
    {
        readonly GameServices _services;
        public GuessingGameController(GameServices service)
        {
            _services = service;
        }

        [EnableCors("MyPolicy")]
        [HttpPost("login")]
        public bool Login(Admin admin)
        {
            return _services.login(admin);
        }

        [HttpPost("add-user")]
        public IActionResult AddUser(Admin admin)
        {
            return Ok(_services.addUser(admin));
        }



        [EnableCors("MyPolicy")]
        [HttpPost("world-soccer")]
        public IActionResult getAWorldSoccerWord()
        {
            return Ok(_services.getAWorldSoccer());
        }

        [EnableCors("MyPolicy")]
        [HttpGet("world-soccer")]
        public IActionResult getAllWorldSoccerWord()
        {
            return Ok(_services.getAllWorldSoccer());
        }


        [HttpPost("worldknowledge")]
        public IActionResult addAWorldKnowledgeWord(WorldKnowledge word)
        {
            return Ok(_services.addAWorldKnowledge(word));
        }

        [EnableCors("MyPolicy")]
        [HttpPost("world-knowledge")]
        public IActionResult getAWorldKnowledgeWord()
        {
            return Ok(_services.getAWorldKnowledge());
        }

        [HttpGet("world-knowledge")]
        public IActionResult getAllWorldKnowledgeWord()
        {
            return Ok(_services.getAllWorldKnowledge());
        }

        [EnableCors("MyPolicy")]
        [HttpPost("world-american")]
        public IActionResult getAWorldAmericanWord()
        {
            return Ok(_services.getAWorldAmerican());
        }

        [HttpGet("world-american")]
        public IActionResult getAllWorldAmericanWord()
        {
            return Ok(_services.getAllWorldAmerican());
        }

        [HttpPost("worldamerican")]
        public IActionResult addWorldAmerican(WorldAmerican word)
        {
            return Ok(_services.addAWorldAmerican(word));
        }

        [HttpPost("worldsoccer")]
        public IActionResult addAWorldSoccerWord(WorldSoccer word)
        {
            return Ok(_services.addAWorldSoccer(word));
        }

        [HttpDelete("worldamerican")]
        public IActionResult clearWorldAmerican()
        {
            _services.clearAWorldAmerican();
            return Ok();
        }

        [HttpDelete("worldsoccer")]
        public IActionResult clearWorldSoccer()
        {
            _services.clearAWorldSoccer();
            return Ok();
        }

        [HttpDelete("worldknowledge")]
        public IActionResult clearWorldKnowledge()
        {
            _services.clearAWorldKnowledge();
            return Ok();
        }
    }
}
