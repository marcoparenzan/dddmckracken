using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public interface IItem<TItem> : IIdentity<TItem>, IScript<ItemScript>
        where TItem : IItem<TItem>
    {
        void Goto(IItemContainer<TItem> stage);
        IItemContainer<TItem> Container { get; }
    }
}
