using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public interface IItemContainer<TItem>
        where TItem : IItem<TItem>
    {
        TItem FindById(Guid id);
        TItem[] Items { get; }
        void Enter(TItem item);
        void Exit(TItem item);

        void Notify(IMessage message);
    }
}
