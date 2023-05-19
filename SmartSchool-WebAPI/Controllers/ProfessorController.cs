using Microsoft.AspNetCore.Mvc;

namespace SmartSchool_webAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProfessorController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Sophi");
        }
    }
}