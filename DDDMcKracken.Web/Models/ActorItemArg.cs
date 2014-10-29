using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace DDDMcKracken.Web.Models
{
    public class ActorItem : ItemArg
    {
        [Description("Actor Id")]
        public Guid actorId { get; set; }
    }
}