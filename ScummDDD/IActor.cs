using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public interface IActor<TActor, TItem> : IIdentity<TActor>, IItemContainer<TItem>, IScript<ActorScript>
        where TActor : IActor<TActor, TItem>
        where TItem : IItem<TItem>
    {
        void Goto(IActorContainer<TActor, TItem> stage);
        IActorContainer<TActor, TItem> Container { get; }
    }
}
