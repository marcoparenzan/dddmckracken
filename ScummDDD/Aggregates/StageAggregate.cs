using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public class StageAggregate<TActor, TItem> : IStage<TActor, TItem>, IScript<StageScript>
        where TActor : IActor<TActor, TItem>
        where TItem : IItem<TItem>
    {
        public StageAggregate()
        {
            _actors = new List<TActor>();
            _items = new List<TItem>();
        }

        private List<TActor> _actors;

        TActor IActorContainer<TActor, TItem>.FindById(Guid id)
        {
            var item = _actors.SingleOrDefault(xx => xx.Id == id);
            return item;
        }

        TActor[] IActorContainer<TActor, TItem>.Actors
        {
            get { return _actors.ToArray(); }
        }

        public void Enter(TActor identity)
        {
            if (_actors.Contains(identity))
            {
                throw new ArgumentException("Identity already entered");
            }
            _actors.Add(identity);
        }

        public void Exit(TActor identity)
        {
            if (!_actors.Contains(identity))
            {
                throw new ArgumentException("Identity not entered");
            }
            _actors.Remove(identity);
        }

        public void Notify(IMessage message)
        {
            throw new NotImplementedException();
        }

        private List<TItem> _items;

        TItem IItemContainer<TItem>.FindById(Guid id)
        {
            var item = _items.SingleOrDefault(xx => xx.Id == id);
            return item;
        }

        TItem[] IItemContainer<TItem>.Items
        {
            get { return _items.ToArray(); }
        }

        void IActorContainer<TActor, TItem>.Enter(TActor identity)
        {
            if (_actors.Contains(identity))
            {
                throw new ArgumentException("Identity already entered");
            }
            _actors.Add(identity);
        }

        void IActorContainer<TActor, TItem>.Exit(TActor identity)
        {
            if (_actors.Contains(identity))
            {
                throw new ArgumentException("Identity already entered");
            }
            _actors.Remove(identity);
        }

        void IActorContainer<TActor, TItem>.Notify(IMessage message)
        {
            throw new NotImplementedException();
        }

        void IItemContainer<TItem>.Enter(TItem identity)
        {
            throw new NotImplementedException();
        }

        void IItemContainer<TItem>.Exit(TItem identity)
        {
            throw new NotImplementedException();
        }

        void IItemContainer<TItem>.Notify(IMessage message)
        {
            throw new NotImplementedException();
        }

        protected T1 Add<T1>(int x, int y, string description = "")
            where T1 : TItem
        {
            var item = (T1)Activator.CreateInstance(typeof(T1), x, y, description);
            _items.Add(item);
            return item;
        }

        public StageScript GetScript()
        {
            return new StageScript
            {
                Actors = this._actors.Cast<IScript<ActorScript>>().Select(xx => xx.GetScript()).ToArray()
                ,
                Items = this._items.Cast<IScript<ItemScript>>().Select(xx => xx.GetScript()).ToArray()
            };
        }

    }
}
