using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace DDDMcKracken.Web.Models
{
  
    public class ItemArg : CommandArg
    {
        [Description("Item Id")]
        public Guid itemId { get; set; }
    }

}