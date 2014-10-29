using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain.Items.Stage0000
{
    public class Lamp : StageItem
    {
        public Lamp() { }
        public Lamp(int x, int y, string description = "")
            : base(x, y, description)
        {

        }

        public override void WalkedToBy(IDDDActor actor)
        {
            actor.Move(this.X - 10, this.Y + 10);
        }

    }
}