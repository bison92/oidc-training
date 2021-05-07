using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Host.Settings
{
    public class SpaSettings
    {
        public static string SettingsName = "SPA";

        public string PublicUrl { get; set; }

        public OidcSettings OidcSettings { get; set; }

    }
}
