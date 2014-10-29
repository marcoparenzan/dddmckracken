using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain.Items.Stage0000
{
    public class Kazoo : StageItem
    {
        public Kazoo() { }
        public Kazoo(int x, int y, string description = "")
            : base(x, y, description)
        {
        }
    }
}
