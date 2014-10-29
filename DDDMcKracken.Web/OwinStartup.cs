using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(DDDMcKracken.Web.OwinStartup))]

namespace DDDMcKracken.Web
{
    public class OwinStartup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
} 