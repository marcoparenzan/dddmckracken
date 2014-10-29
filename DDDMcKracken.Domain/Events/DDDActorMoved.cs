using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain.Events
{
    public class DDDActorMoved
    {
        public delegate void Handler(IDDDActor a, Args e);

        public class Args : EventArgs {

            public int X { get; set; }
            public int Y { get; set; }

        }
    }
}
