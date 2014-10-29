using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain.Items.Stage0000
{
    public class DeskDrawer : StageContainerItem
    {
        public DeskDrawer() { }
        public DeskDrawer(int x, int y, string description = "")
            : base(x, y, description)
        {
            Add<Kazoo>(150, 100);
        }

        public override void WalkedToBy(IDDDActor actor)
        {
            actor.Move(this.X - 10, this.Y + 10);
        }

    }
}
