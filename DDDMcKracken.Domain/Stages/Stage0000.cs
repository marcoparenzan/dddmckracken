using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DDDMcKracken.Domain.Items.Stage0000;
using ScummDDD;

namespace DDDMcKracken.Domain.Stages
{
    public class Stage0000: StageAggregate<IDDDActor, IDDDItem>
    {
        public Stage0000()
        {
            Add<SushiFishBowl>(90, 95);
            Add<DressDrawer>(105, 130);

            Add<Lamp>(510, 105);
            Add<DeskDrawer>(510, 170);
            Add<CreditCard>(510, 190);

            Add<TornOfWallPaper>(590, 130);
            
            Add<RightDoor>(615, 140);
        }
    }
}
