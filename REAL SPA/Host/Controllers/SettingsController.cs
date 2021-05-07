using Host.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Host.Controllers
{
    [ApiController]
    public class SettingsController : ControllerBase
    {
        public SpaSettings SpaSettings { get; set; }

        public SettingsController(IOptions<OidcSettings> oidcSettings, IOptions<SpaSettings> spaSettings)
        {
            SpaSettings = spaSettings.Value;
            SpaSettings.OidcSettings = oidcSettings.Value;
        }

        [Route("configuration")]
        public IActionResult Index()
        {
            return Ok(SpaSettings);
        }
    }
}
