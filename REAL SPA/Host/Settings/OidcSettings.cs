using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Host.Settings
{
    public class OidcSettings
    {
        public static string SettingsName = "OIDC";

        public string Authority { get; set; }

        public string ClientId { get; set; }

    }
}
