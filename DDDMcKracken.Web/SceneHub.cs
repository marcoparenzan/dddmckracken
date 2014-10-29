using System;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace DDDMcKracken.Web
{
    public class SceneHub : Hub
    {
        public static IHubContext Default
        {
            get
            {
                return 
                    Microsoft.AspNet.SignalR
                    .GlobalHost
                    .ConnectionManager
                    .GetHubContext<SceneHub>();
            }
        }
    }
}