using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public interface IActorContainer<TActor, TItem>
        where TActor : IActor<TActor, TItem>
        where TItem : IItem<TItem>
    {
        TActor FindById(Guid id);
        TActor[] Actors { get; }
        void Enter(TActor actor);
        void Exit(TActor actor);

        void Notify(IMessage message);
    }
}
