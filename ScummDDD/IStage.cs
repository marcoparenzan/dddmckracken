using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public interface IStage<TActor, TItem> : IActorContainer<TActor, TItem>, IItemContainer<TItem>
        where TActor : IActor<TActor, TItem>
        where TItem : IItem<TItem>
    {
        StageScript GetScript();
    }
}
